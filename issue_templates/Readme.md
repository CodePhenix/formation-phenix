# Issue templates management

The goal of this python project is to handle issues_templates both for GitHub and GitLab

## Setup

### Offline installation

```
cd issue_templates
pip install -r requirements.txt --find-links offline-packages --no-index
```

To update the packages

```
pip freeze > requirements.txt
pip download --dest offline-packages -r requirements.txt
```

### Using pipenv

- Create .env from .env.example : `cp .env.example .env`
- Fill in all env variable but PROJECT_ID that will be found using the script
- Activate pipenv env : `pipenv shell`
- Install dependencies `pipenv install`

## Script

In the pipenv env, run `python main.py` to see the list of available commands
There are three groups of commands

- `templates` to handle the templates inside the repositories
- `gl` to handle interactions with GitLab
- `gh` to handle interactions with GitHub (not implemented yet)

Use `--help` flag to get the documentation of each sub-command

### Templates

**Order**

Issues will be created in the order determined by the \_\_X suffix.
To help handle this

- first run `pull_current_issues_order` to gather the issues in ISSUES_ORDER.txt
- reorganize issues as you wish (first line will be first issue and so on)
- run `apply_new_issues_order` to update all issues templates names accordingly

### GitLab

- Use the `list-repositories` command to find the id that you'll fill in
  the .env as `PROJECT_ID`. Don't forget to restart your pipenv environment to load the new env variable.
- Use the `list-users` command to find the users ids that you'll use in the `create-all-issues` command.
  Ex SofienM on GitLab.com user is 11092508

### GitHub

- Make sure the user is added in the CodePhenix organization
- Use the `create-all-issues` with the GitHub username directly

### Creating issues

** Range **

- No range set will create all issues
- `10` will create issue n°10
- `2-10` will create issue n°2 to n°10 included (starting with n°0 )

Exemple:

```
python main.py gh create-issues SofienM 1-5
```
