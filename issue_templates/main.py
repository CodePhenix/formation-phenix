import os
import gitlab
from github import Github
from jinja2 import Environment, PackageLoader, select_autoescape

import re
from pathlib import Path
from typing import List
import click
from dataclasses import dataclass
from typing import Optional


@dataclass
class Issue:
    title: str
    description: str


@dataclass
class VCS:
    path: str
    codephenix_url: str
    html_validator_url: str


GITHUB = VCS(
    path=".github/ISSUE_TEMPLATE",
    codephenix_url="https://codephenix.fr/interface",
    html_validator_url="https://validator.w3.org/#validate_by_input",
)
GITLAB = VCS(
    path=".gitlab/issue_templates",
    codephenix_url="https://codephenix.com",
    html_validator_url="",
)
ALL_VCS = [GITHUB, GITLAB]


class Range:
    """
    Class representing a range of tickets
    Internally it either the "ALL" keyword or a tuple (start, end)
    It can be inited through three formats:
    - "ALL" keyword
    - "<int>" for one specific ticket, it is parsed into (<int>, <int>)
    - "<int_a>-<int_b>", it is parsed into (<int_a>, <int_b>)
    """

    ALL = "ALL"
    _is_all = False
    _range = ()

    def __init__(self, range: str):
        if range == self.ALL:
            self._is_all = True
        else:
            self._range = self._parse_range(range)

    @classmethod
    def _parse_range(cls, range: str) -> tuple[int, int]:
        if re.match(r"\d+-\d+", range):
            start, end = range.split("-")
            return (int(start), int(end))
        if re.match(r"^\d+$", range):
            return (int(range), int(range))
        raise ValueError(
            "Invalid range format. Use 'specific_id' or 'start-end' format only."
        )

    @property
    def is_all(self):
        return self._is_all

    @property
    def start(self):
        if self.is_all:
            raise ValueError("Using (start, end) format with ALL range doesn't work.")
        return self._range[0]

    @property
    def end(self):
        if self.is_all:
            raise ValueError("Using (start, end) format with ALL range doesn't work.")
        return self._range[1]


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
            "description": issue.description,
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
    # TEMPLATE_EXCEPTIONS = ["common/CODE_QUALITY.md"]
    ORDER_FILE = "issue_templates/ISSUES_ORDER.txt"

    def __init__(self, project_root: Optional[Path] = None) -> None:
        """
        Initialize the Jinja environment.
        If project_root is not provided, it will be set to the parent folder of the file.
        The project_root argument is only used for testing purposes.
        """
        self.jinja_env = Environment(autoescape=select_autoescape())
        if project_root:
            self.project_root = project_root
        else:
            self.project_root = Path(__file__).parent.parent.resolve()
        return

    def get_all_templates_paths(self) -> List[Path]:
        all_files = list(self.project_root.glob(f"{self.TEMPLATES_PATH}/*.md"))
        return all_files

    def get_all_templates_paths_ordered(self) -> List[Path]:
        """
        Get all issue templates ordered by their suffix `__n` and preordered
        alphabetically.
        """
        paths = self.get_all_templates_paths()
        paths = sorted(paths, key=lambda x: x.name)
        paths = sorted(paths, key=self._extract_order_from_template_name)
        return paths

    def render_template(self, path: Path, vcs: VCS) -> str:
        template = self.jinja_env.get_template(path.name)
        return template.render(
            codephenix_url=vcs.codephenix_url,
            html_validator_url=vcs.html_validator_url,
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
        for vcs in ALL_VCS:
            print("Overwriting", vcs.path)
            self._delete_folder_content(self.project_root / vcs.path)
            for path in self.get_all_templates_paths():
                try:
                    content = self.render_template(path, vcs)
                    new_path = Path(self.project_root, vcs.path, path.name)
                    new_path.write_text(content)
                    print(f"Created {new_path}")
                except Exception as error:
                    print(f"Error while creating {path.name}: {error}")
                    continue
        return

    @classmethod
    def _extract_order_from_template_name(cls, path: Path) -> int:
        filename = path.stem
        try:
            order = int(filename.split("__")[1])
        except IndexError:
            order = 100
        return order

    def pull_current_issue_orders(self) -> None:
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

    def apply_new_issues_order(self) -> None:
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

    def _create_issues(
        self,
        user_id: int,
        client: GitLabClient | GitHubClient,
        vcs: VCS,
        range: Range,
        username=None,
    ):
        """
        Create issues from all issue templates available for the user
        """
        paths = self.get_all_templates_paths_ordered()
        success = 0
        selected_paths = paths if range.is_all else paths[range.start : range.end + 1]
        for path in selected_paths:
            issue_content = self.render_template(path, vcs=vcs)
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

    def create_gitlab_issues(self, user_id: int, range: Range):
        gl_client = GitLabClient()
        return self._create_issues(
            user_id=user_id,
            client=gl_client,
            vcs=GITLAB,
            range=range,
        )

    def create_github_issues(self, user_id: int, username: str, range: Range):
        gh_client = GitHubClient()
        return self._create_issues(
            user_id=user_id,
            client=gh_client,
            vcs=GITHUB,
            range=range,
            username=username,
        )

    def create_all_gitlab_issues(self, user_id: int):
        gl_client = GitLabClient()
        return self._create_issues(
            user_id=user_id,
            client=gl_client,
            vcs=GITLAB,
            range=Range("ALL"),
        )

    def create_all_github_issues(self, user_id: int, username: str):
        gh_client = GitHubClient()
        return self._create_issues(
            user_id=user_id,
            client=gh_client,
            vcs=GITHUB,
            range=Range("ALL"),
            username=username,
        )


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


@gl.command()
@click.argument("user_id", type=int)
@click.argument("range", type=str, required=False)
def create_issues(user_id, range):
    manager = IssueManager()
    if range:
        parsed_range = Range(range)
        if click.confirm(
            f"Issues from n°{parsed_range.start} to n°{parsed_range.end} will be created. Do you want to continue ?"
        ):
            manager.create_gitlab_issues(user_id=user_id, range=parsed_range)
    else:
        if click.confirm(
            f"No range set, all issues will be created. Do you want to continue ?"
        ):
            manager.create_all_gitlab_issues(user_id)


@cli.group()
def gh():
    pass


@gh.command()
@click.argument("username", type=str)
@click.argument("range", type=str, required=False)
def create_issues(username, range):
    print("username", username)
    user_id = GitHubClient().get_user_id(username)
    if click.confirm(
        f"Creating issues for user {username} with id {user_id}. Do you want to continue ?"
    ):
        manager = IssueManager()
        if range:
            parsed_range = Range(range)
            if click.confirm(
                f"Issues from n°{parsed_range.start} to n°{parsed_range.end} will be created. Do you want to continue ?"
            ):
                manager.create_github_issues(
                    user_id=user_id, username=username, range=parsed_range
                )
        else:
            if click.confirm(
                f"No range set, all issues will be created. Do you want to continue ?"
            ):
                manager.create_all_github_issues(user_id, username)
    else:
        click.echo("Aborted")


if __name__ == "__main__":
    cli()
