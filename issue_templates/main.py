import os
import gitlab
import re
from pathlib import Path
from typing import List
import click


class Issue:
    title: str
    description: str
    assignee_id: int


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
            self.project = self.gl.projects.get(id=self.repository_id)

        if os.environ["DEBUG"] == True:
            self.gl.enable_debug()

    def list_repositories(self):
        return self.gl.projects.list(visibility="private", get_all=True)

    def list_users(self):
        return [11092508]  # SofienM on GitLab.com

        # Only on self hosted
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
    CODE_QUALITY_CONTENT_PATH = "issue_templates/CODE_QUALITY.md"
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

    def overwrite_code_quality_section(self):
        templates_paths = self.get_all_templates_paths()
        code_quality_content = (
            self.CODE_QUALITY_START_CODE
            + "\n"
            + Path(self.project_root, self.CODE_QUALITY_CONTENT_PATH).read_text()
            + "\n"
            + self.CODE_QUALITY_END_CODE
        )

        success_count = 0
        for path in templates_paths:
            try:
                filedata = Path(path).read_text()
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

    def overwrite_vcs_issue_templates(self):
        """
        Overwrite issue templates in GitHub and GitLab folders.
        """
        pass

    def create_all_issues(self, user_id: int):
        """
        Create issues from all issue templates available for the user
        """
        pass


@click.command()
@click.option("--name", prompt="Enter your name", help="The name to greet.")
def greet(name):
    click.echo(f"Hello, {name}!")


# Gitlab
# Click list all users on gitlab
# Click list all gitlab projects => get promotion 5 project_id

# Templates
# Overwrite CODE_QUALITY section in all templates
# Overwrite issue templates in GitHub and GitLab folders.


# Click create all issues for one user


if __name__ == "__main__":
    manager = IssueManager()
    print(manager.project_root)
    # manager.overwrite_code_quality_section()
    client = GitlabClient()
    test_user_id = 11092508
    client.create_issue(test_user_id, "Description test")
