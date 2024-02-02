# Issue templates management

The goal of this python project is to handle issues_templates both for GitHub and GitLab

## Setup

With pipenv

- Create .env from .env.example : `cp .env.example .env`
- Fill in all env variable but PROJECT_ID that will be found using the script
- Activate pipenv env : `pipenv shell`
- Install dependencies `pipenv install`

Without pipenv find a way to install dependencies listed in `Pipfile`

## Script

In the pipenv env, run `python main.py` to see the list of available commands
There are three groups of commands

- `templates` to handle the templates inside the repositories
- `gl` to handle interactions with GitLab
- `gh` to handle interactions with GitHub (not implemented yet)

Use `--help` flag to get the documentation of each sub-command

### GitLab

- Use the `list-repositories` command to find the id that you'll fill in
  the .env as `PROJECT_ID`.
- Use the `list-users` command to find the users ids that you'll use in the `create-all-issues` command.
  Ex SofienM on Gitlab.com user is 11092508
