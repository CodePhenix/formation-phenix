from pathlib import Path
from typing import List
import click


class IssueTemplatesManager:
    """Class for managing issue templates in GitHub and GitLab."""

    TEMPLATES_PATH = "issue_tempaltes/templates"
    CODE_QUALITY_CONTENT_PATH = "issue_tempaltes/CODE_QUALITY.md"
    GITHUB_TEMPLATE_PATH = ".github/ISSUE_TEMPLATE"
    GITLAB_TEMPLATE_PATH = ".gitlab/issue_templates"

    CODE_QUALITY_SECTION_CODE = "<!-- CODE_QUALITY_SECTION -->"

    def __init__(self):
        pass

    @property
    def project_root(self) -> Path:
        """Returns project root folder."""
        return Path(__file__).parent.parent.resolve()

    def get_all_templates_paths(self) -> List[Path]:
        return list(self.project_root.glob(f"{self.TEMPLATES_PATH}/*.md"))

    def render_code_quality_section(self):
        templates_paths = self.get_all_templates_paths()
        code_quality_content = (
            self.CODE_QUALITY_SECTION_CODE
            + "\n"
            + Path(self.project_root, self.CODE_QUALITY_CONTENT_PATH).read_text()
        )

        for path in templates_paths:
            try:
                filedata = Path(path).read_text()
                if self.CODE_QUALITY_SECTION_CODE in filedata:
                    # Replace the target string
                    filedata = filedata.replace(
                        self.CODE_QUALITY_SECTION_CODE, code_quality_content
                    )

                    with open(path, "w") as file:
                        file.write(filedata)
            except Exception as error:
                print(f"Error with file {path}: {error}")
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
    print(manager.templates_dir)
    manager.render_code_quality_section()
