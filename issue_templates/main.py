import click
from pathlib import Path
from jinja2 import (
    Environment,
    select_autoescape,
    FileSystemLoader,
)

from src import GitLabClient, GitHubClient, Range, IssueManager

jinja_env = Environment(
    loader=FileSystemLoader("templates"), autoescape=select_autoescape()
)
project_root = Path(__file__).parent.parent.resolve()
manager = IssueManager(jinja_env=jinja_env, project_root=project_root)


@click.group()
def cli():
    pass


@cli.group()
def templates():
    pass


@templates.command()
def overwrite_vcs_issue_templates():
    manager.overwrite_vcs_issue_templates()


@templates.command()
def print_issues_ordered():
    idx = 0
    for path in manager.get_all_templates_paths_ordered():
        print(f"{idx}: {path}")
        idx += 1


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
    if range:
        parsed_range = Range(range)
        paths = manager.get_all_templates_paths_ordered()
        print(
            f"Issues from n°{parsed_range.start} to n°{parsed_range.end} will be created:"
        )
        for path in paths[parsed_range.start : parsed_range.end + 1]:
            print(f"{path.name}")
        if click.confirm(f"Do you want to continue ?"):
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
    user_id = GitHubClient().get_user_id(username)
    if range:
        parsed_range = Range(range)
        paths = manager.get_all_templates_paths_ordered()
        print(
            f"Issues from n°{parsed_range.start} to n°{parsed_range.end} will be created:"
        )
        idx = parsed_range.start
        for path in paths[parsed_range.start : parsed_range.end + 1]:
            print(f"{idx}: {path.name}")
            idx += 1
        if click.confirm(f"Do you want to continue ?"):
            manager.create_github_issues(
                user_id=user_id, username=username, range=parsed_range
            )
    else:
        if click.confirm(
            f"No range set, all issues will be created. Do you want to continue ?"
        ):
            manager.create_all_github_issues(user_id, username)


if __name__ == "__main__":
    cli()
