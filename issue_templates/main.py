import re
from pathlib import Path
from typing import List
import click


class IssueTemplatesManager:
    """Class for managing issue templates in GitHub and GitLab."""

    TEMPLATES_PATH = "issue_templates/templates"
    CODE_QUALITY_CONTENT_PATH = "issue_templates/CODE_QUALITY.md"
    GITHUB_TEMPLATE_PATH = ".github/ISSUE_TEMPLATE"
    GITLAB_TEMPLATE_PATH = ".gitlab/issue_templates"

    CODE_QUALITY_START_CODE = "<!-- CODE_QUALITY_START -->"
    CODE_QUALITY_END_CODE = "<!-- CODE_QUALITY_END -->"

    def __init__(self):
        pass

    @property
    def project_root(self) -> Path:
        # """Returns project root folder."""
        return Path(__file__).parent.parent.resolve()

    def get_all_templates_paths(self) -> List[Path]:
        return list(self.project_root.glob(f"{self.TEMPLATES_PATH}/*.md"))

    def render_code_quality_section(self):
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

    def populate_issue_templates(self):
        """Populate GitLab and GitHub issue templates from the templates directory."""
        pass


@click.command()
@click.option("--name", prompt="Enter your name", help="The name to greet.")
def greet(name):
    click.echo(f"Hello, {name}!")


if __name__ == "__main__":
    manager = IssueTemplatesManager()
    print(manager.project_root)
    manager.render_code_quality_section()
