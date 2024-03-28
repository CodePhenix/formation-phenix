import os
from github import Github
from .common import Issue


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
