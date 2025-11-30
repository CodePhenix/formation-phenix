import os
from jinja2 import Environment

import re
from pathlib import Path
from typing import List

from . import GitLabClient, GitHubClient, VCS, Range, Issue


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


class IssueManager:
    """Class for managing issue templates in GitHub and GitLab."""

    TEMPLATES_PATH = "issue_templates/templates"
    ORDER_FILE = "issue_templates/ISSUES_ORDER.txt"

    def __init__(self, jinja_env: Environment, project_root: Path) -> None:
        """
        Initialize the IssueManager with a Jinja environment and a project root.
        """
        self.jinja_env = jinja_env
        self.project_root = project_root
        return

    def get_all_templates_paths(self) -> List[Path]:
        all_files = list(self.project_root.glob(f"issue_templates/templates/*.md"))
        return all_files

    def get_all_templates_paths_ordered(self) -> List[Path]:
        """
        Get all issue templates that are mentionned in ISSUES_ORDER.txt and in the order they are mentionned.
        """
        paths = []
        issues_order_filenames = (
            Path(self.project_root, self.ORDER_FILE).read_text().split("\n")
        )
        for path_str in issues_order_filenames:
            issue_file = Path(self.project_root, self.TEMPLATES_PATH, path_str)
            if issue_file.is_file():
                paths.append(issue_file)
            else:
                print(
                    f"Error: couldn't find {path_str} that is mentionned in {self.ORDER_FILE}. Skipping."
                )
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
                content = self.render_template(path, vcs)
                new_path = Path(self.project_root, vcs.path, path.name)
                new_path.write_text(content, encoding="utf-8")
                print(f"Created {new_path}")
                try:
                    content = self.render_template(path, vcs)
                    new_path = Path(self.project_root, vcs.path, path.name)
                    new_path.write_text(content)
                    print(f"Created {new_path}")
                except Exception as error:
                    print(f"Error while creating {path.name}: {error}")
                    continue
        return

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
        idx = 0
        for path in selected_paths:
            idx += 1
            issue_content = self.render_template(path, vcs=vcs)
            title = re.search("title: (.*)", issue_content).group(1)
            if not title:
                print(f"Skipping issue {path.name} because title is not found.")
                continue
            full_title = f"{idx} - {title}"
            description = re.sub("---(.|\n)*---", "", issue_content).strip()
            try:
                client.create_issue(
                    user_id, Issue(full_title, description), username=username
                )
                print(f"Created issue {path.name}")
                success += 1

            except Exception as error:
                print(f"Error while creating issue {path.name}: {error}")

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
