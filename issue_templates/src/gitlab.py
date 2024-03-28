import os
import gitlab
from .common import Issue


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
