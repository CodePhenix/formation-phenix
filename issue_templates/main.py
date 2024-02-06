import os
import gitlab
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


class GitlabClient:
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

    def create_issue(self, user_id: int, issue: Issue):
        """
        Create issues from all issue templates available for the user
        """
        new_issue = {
            "title": issue.title,
            "description": issue.description,
            "assignee_id": user_id,
            "assignee_ids": [user_id],
        }
        self.project.issues.create(new_issue)


class IssueManager:
    """Class for managing issue templates in GitHub and GitLab."""

    TEMPLATES_PATH = "issue_templates/templates"
    CODE_QUALITY_FILE = "issue_templates/CODE_QUALITY.md"
    ORDER_FILE = "issue_templates/ISSUES_ORDER.txt"
    GITHUB_TEMPLATE_PATH = ".github/ISSUE_TEMPLATE"
    GITLAB_TEMPLATE_PATH = ".gitlab/issue_templates"

    CODE_QUALITY_START_CODE = "<!-- CODE_QUALITY_START -->"
    CODE_QUALITY_END_CODE = "<!-- CODE_QUALITY_END -->"

    def __init__(self):
        self.gl_client = GitlabClient()
        pass

    @property
    def project_root(self) -> Path:
        # """Returns project root folder."""
        return Path(__file__).parent.parent.resolve()

    def get_all_templates_paths(self) -> List[Path]:
        return list(self.project_root.glob(f"{self.TEMPLATES_PATH}/*.md"))

    def get_all_templates_paths_ordered(self) -> List[Path]:
        """
        Get all issue templates ordered by their suffix `__n` and preordered
        alphabetically.
        """
        paths = self.get_all_templates_paths()
        paths = sorted(paths, key=lambda x: x.name)
        paths = sorted(paths, key=self._extract_order_from_template_name)
        return paths

    def render_code_quality_shortcode(self):
        print("Overwriting CODE_QUALITY section in all templates.")
        templates_paths = self.get_all_templates_paths()
        code_quality_content = (
            self.CODE_QUALITY_START_CODE
            + "\n"
            + Path(self.project_root, self.CODE_QUALITY_FILE).read_text()
            + "\n"
            + self.CODE_QUALITY_END_CODE
        )

        success_count = 0
        for path in templates_paths:
            try:
                filedata = path.read_text()
                if (
                    self.CODE_QUALITY_START_CODE in filedata
                    and self.CODE_QUALITY_END_CODE in filedata
                ):
                    # Replace between start and end code with code quality content
                    filedata = re.sub(
                        f"{self.CODE_QUALITY_START_CODE}?(.*?){self.CODE_QUALITY_END_CODE}",
                        code_quality_content,
                        filedata,
                        flags=re.DOTALL,
                    )

                    with open(path, "w") as file:
                        file.write(filedata)
                    print(f"Content updated for file {path.name}.")
                    success_count += 1
                else:
                    print(f"Skipping {path.name}.")
            except Exception as error:
                print(f"Error while handling file {path.name}: {error}")
        print(f"=> Successfully updated {success_count} files.")
        return

    def _delete_folder_content(self, folder_path: Path):
        files = folder_path.glob("*")
        for file in files:
            os.remove(file)

    def overwrite_vcs_issue_templates(self):
        """
        Overwrite issue templates in GitHub and GitLab folders.
        """
        self.render_code_quality_shortcode()
        print("Overwriting issue templates in GitHub and GitLab folders.")
        for vcs_path in [self.GITHUB_TEMPLATE_PATH, self.GITLAB_TEMPLATE_PATH]:
            self._delete_folder_content(self.project_root / vcs_path)
            copy_tree(
                str(self.project_root / self.TEMPLATES_PATH),
                str(self.project_root / vcs_path),
            )
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

    def create_all_gitlab_issues(self, user_id: int):
        """
        Create issues from all issue templates available for the user
        """
        paths = self.get_all_templates_paths_ordered()
        success = 0
        for path in paths:
            issue_content = path.read_text()
            title = re.search("title: (.*)", issue_content).group(1)
            if not title:
                print(f"Skipping issue {path.name} because title is not found.")
                continue
            description = re.sub("---(.|\n)*---", "", issue_content).strip()
            try:
                self.gl_client.create_issue(user_id, Issue(title, description))
                print(f"Created issue {path.name}")
                success += 1

            except Exception as error:
                print(f"Error while creating issue {path.name}: {error}")
        print(f"=> Successfully created {success} issues.")


@click.group()
def cli():
    pass


@cli.group()
def templates():
    pass


@templates.command()
def render_code_quality_shortcode():
    manager = IssueManager()
    manager.render_code_quality_shortcode()


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
    GitlabClient().list_users()


@gl.command()
def list_repositories():
    GitlabClient().list_repositories()


@cli.group()
def gh():
    click.echo("NOT IMPLEMENTED YET")
    pass


@gl.command()
@click.argument("user_id", type=int)
def create_all_issues(user_id):
    manager = IssueManager()
    manager.create_all_gitlab_issues(user_id)


if __name__ == "__main__":
    cli()
