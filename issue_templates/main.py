import os
import gitlab
from github import Github, Auth
from jinja2 import Environment, PackageLoader, select_autoescape

import re
from pathlib import Path
from typing import List
import click
from distutils.dir_util import copy_tree
from dataclasses import dataclass


@dataclass
class Issue:
    title: str
    description: str


class GitLabClient:
    """
    Class for interacting with GitLab API.
    - use list_repositories to find the GITLAB_PROJECT_ID and fill the env variable
    """

    def __init__(self) -> None:
        gl_url = os.environ["GITLAB_URL"]
        self.gl = gitlab.Gitlab(gl_url, private_token=os.environ["GITLAB_TOKEN"])
        self.gl.auth()
        if os.environ.get("GITLAB_PROJECT_ID") != "UNKNOWN":
            self.project = self.gl.projects.get(id=os.environ["GITLAB_PROJECT_ID"])

        if os.environ["DEBUG"] == True:
            self.gl.enable_debug()

    def list_repositories(self):
        return self.gl.projects.list(visibility="private", get_all=True)

    def list_users(self):
        # Only on self hosted
        if os.environ["GITLAB_URL"] == "https://gitlab.com":
            print("This command is only available on self-hosted GitLab.")
            return
        return self.gl.users.list(get_all=True)

    def create_issue(self, user_id: int, issue: Issue, username=None):
        """
        Create the issue for the user
        """
        new_issue = {
            "title": issue.title,
            "body": issue.description,
            "assignee_id": user_id,
            "assignees": [user_id],
        }
        self.project.issues.create(new_issue)


class GitHubClient:
    """
    Class for interacting with Github API.
    """

    GITHUB_URL = "https://api.github.com"
    GITHUB_REPOSITORY_ID = int(os.environ["GITHUB_REPOSITORY_ID"])

    def __init__(self) -> None:
        self.gh = Github(
            base_url=self.GITHUB_URL, login_or_token=os.environ["GITHUB_TOKEN"]
        )
        self.repository = self.gh.get_repo(self.GITHUB_REPOSITORY_ID)

    def __del__(self):
        self.gh.close()

    def get_user_id(self, username: str) -> int:
        user = self.gh.get_user(username)
        print(f"Found user {user.login} with id {user.id}")
        return int(user.id)

    def create_issue(self, user_id: int, issue: Issue, username=None):
        """
        Create the issue for the user
        """
        new_issue = {
            "title": issue.title,
            "body": issue.description,
            "assignees": [username],
        }
        self.repository.create_issue(**new_issue)


class IssueManager:
    """Class for managing issue templates in GitHub and GitLab."""

    TEMPLATES_PATH = "issue_templates/templates"
    TEMPLATE_EXCEPTIONS = ["CODE_QUALITY.md"]
    ORDER_FILE = "issue_templates/ISSUES_ORDER.txt"
    GITHUB = {
        "path": ".github/ISSUE_TEMPLATE",
        "codephenix_url": "https://codephenix.fr/interface",
        "html_validator_url": "https://validator.w3.org/#validate_by_input",
    }
    GITLAB = {
        "path": ".gitlab/issue_templates",
        "codephenix_url": "https://codephenix.com",
        "html_validator_url": "",
    }

    def __init__(self):
        self.jinja_env = Environment(
            loader=PackageLoader("main"), autoescape=select_autoescape()
        )
        return

    @property
    def project_root(self) -> Path:
        # """Returns project root folder."""
        return Path(__file__).parent.parent.resolve()

    def get_all_templates_paths(self) -> List[Path]:
        all_files = list(self.project_root.glob(f"{self.TEMPLATES_PATH}/*.md"))
        return [file for file in all_files if file.name not in self.TEMPLATE_EXCEPTIONS]

    def get_all_templates_paths_ordered(self) -> List[Path]:
        """
        Get all issue templates ordered by their suffix `__n` and preordered
        alphabetically.
        """
        paths = self.get_all_templates_paths()
        paths = sorted(paths, key=lambda x: x.name)
        paths = sorted(paths, key=self._extract_order_from_template_name)
        return paths

    def render_template(self, path: Path, vcs_folder) -> str:
        template = self.jinja_env.get_template(path.name)
        return template.render(
            codephenix_url=vcs_folder["codephenix_url"],
            repo_url=vcs_folder["repo_url"],
            html_validator_url=vcs_folder["html_validator_url"],
        )

    def _delete_folder_content(self, folder_path: Path):
        files = folder_path.glob("*")
        for file in files:
            os.remove(file)

    def overwrite_vcs_issue_templates(self):
        """
        Overwrite issue templates in GitHub and GitLab folders.
        """
        print("Overwriting issue templates in GitHub and GitLab folders.")
        for vcs_folder in [self.GITHUB, self.GITLAB]:
            print("Overwriting", vcs_folder["path"])
            self._delete_folder_content(self.project_root / vcs_folder["path"])
            for path in self.get_all_templates_paths():
                try:
                    content = self.render_template(path, vcs_folder)
                    new_path = Path(self.project_root, vcs_folder["path"], path.name)
                    new_path.write_text(content)
                    print(f"Created {new_path}")
                except Exception as error:
                    print(f"Error while creating {path.name}: {error}")
                    continue
        return

    def _extract_order_from_template_name(self, path: Path) -> int:
        filename = path.stem
        try:
            order = int(filename.split("__")[1])
        except IndexError:
            order = 100
        return order

    def pull_current_issue_orders(self):
        """
        Get all issue templates and put it in ORDER_FILE file
        in the order based on the suffix __<int> in their name
        and alphabatically if no suffix
        """
        paths = self.get_all_templates_paths_ordered()
        new_order_file_content = "\n".join([path.name for path in paths])
        order_path = Path(self.project_root, self.ORDER_FILE)
        order_path.write_text(new_order_file_content)
        print(f"Pulled successfully {len(paths)} issue templates in {self.ORDER_FILE}")
        return

    def apply_new_issues_order(self):
        current_issues_order = (
            Path(self.project_root, self.ORDER_FILE).read_text().split("\n")
        )
        idx = 0
        error_count = 0
        for path_str in current_issues_order:
            issue_file = Path(self.project_root, self.TEMPLATES_PATH, path_str)
            if issue_file.is_file():
                base_name = path_str.split(".")[0]
                if "__" in base_name:
                    base_name = base_name.split("__")[0]
                new_path_str = f"{base_name}__{idx}.md"
                issue_file.replace(
                    Path(self.project_root, self.TEMPLATES_PATH, new_path_str)
                )
                idx += 1
            else:
                print(f"Error: couldn't find {issue_file}. Skipping.")
                error_count += 1
        print(
            f"Applied new order as suffix for {idx +1 } templates names. {error_count} error(s) encountered."
        )

    def _create_all_issues(
        self,
        user_id: int,
        client: GitLabClient | GitHubClient,
        vcs_folder,
        username=None,
    ):
        """
        Create issues from all issue templates available for the user
        """
        paths = self.get_all_templates_paths_ordered()
        success = 0
        for path in paths:
            issue_content = self.render_template(path, vcs_folder=vcs_folder)
            issue_order = self._extract_order_from_template_name(path)
            title = re.search("title: (.*)", issue_content).group(1)
            if not title:
                print(f"Skipping issue {path.name} because title is not found.")
                continue
            full_title = f"{issue_order} - {title}"
            description = re.sub("---(.|\n)*---", "", issue_content).strip()
            try:
                client.create_issue(
                    user_id, Issue(full_title, description), username=username
                )
                print(f"Created issue {path.name}")
                success += 1

            except Exception as error:
                print(f"Error while creating issue {path.name}: {error}")

            break
        print(f"=> Successfully created {success} issues.")

    def create_all_gitlab_issues(self, user_id: int):
        gl_client = GitLabClient()
        return self._create_all_issues(user_id, gl_client, self.GITLAB)

    def create_all_github_issues(self, user_id: int, username: str):
        gh_client = GitHubClient()
        return self._create_all_issues(user_id, gh_client, self.GITHUB, username)


@click.group()
def cli():
    pass


@cli.group()
def templates():
    pass


@templates.command()
def overwrite_vcs_issue_templates():
    manager = IssueManager()
    manager.overwrite_vcs_issue_templates()


@templates.command()
def pull_current_issues_order():
    manager = IssueManager()
    if click.confirm(
        f"This will override the current content of {manager.ORDER_FILE}. Do you want to continue ?"
    ):
        manager.pull_current_issue_orders()
    else:
        click.echo("Aborted")


@templates.command()
def apply_new_issues_order():
    manager = IssueManager()
    if click.confirm(
        f"This will override the order suffix in issues templates names. Do you want to continue ?"
    ):
        manager.apply_new_issues_order()
    else:
        click.echo("Aborted")


@cli.group()
def gl():
    pass


@gl.command()
def list_users():
    GitLabClient().list_users()


@gl.command()
def list_repositories():
    GitLabClient().list_repositories()


@cli.group()
def gh():
    click.echo("NOT IMPLEMENTED YET")
    pass


@gl.command()
@click.argument("user_id", type=int)
def create_all_issues(user_id):
    manager = IssueManager()
    manager.create_all_gitlab_issues(user_id)


@cli.group()
def gh():
    pass


# @gh.command()
# @click.argument("username", type=str)
# def get_user_id(username):
#     return


@gh.command()
@click.argument("username", type=str)
def create_all_issues(username):
    user_id = GitHubClient().get_user_id(username)
    if click.confirm(
        f"Creating issues for user {username} with id {user_id}. Do you want to continue ?"
    ):
        manager = IssueManager()
        manager.create_all_github_issues(user_id, username)
    else:
        click.echo("Aborted")


if __name__ == "__main__":
    cli()
