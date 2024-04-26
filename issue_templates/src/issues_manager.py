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
                content = self.render_template(path, vcs)
                new_path = Path(self.project_root, vcs.path, path.name)
                new_path.write_text(content)
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
