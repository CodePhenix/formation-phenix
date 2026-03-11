from click.testing import CliRunner

from issue_templates.main import cli


class TestClick:

    def setUp(self):
        """
        Initialize the CliRunner
        """
        self.runner = CliRunner()

    def test_cli_help(self):
        """
        GIVEN -
        WHEN running the cli with the --help flag
        THEN it should return the help message
        """
        self.setUp()
        result = self.runner.invoke(cli, ["--help"])
        assert result.exit_code == 0
        assert result.output.replace("\n", "") == (
            "Usage: cli [OPTIONS] COMMAND [ARGS]..."
            "Options:"
            "  --help  Show this message and exit."
            "Commands:"
            "  gh"
            "  gl"
            "  templates"
        )

    def test_cli_github(self):
        """
        GIVEN -
        WHEN running a github cli command with fake username
        THEN it should fail
        """
        # TODO use cassette or at least a mock to avoid real API calls
        self.setUp()
        result = self.runner.invoke(cli, ["gh", "create-issues", "SofienMMMMMM"])
        assert result.exit_code == 1
        assert result.output.replace("\n", "") == ("username SofienMMMMMM")

    def test_cli_gitlab(self):
        """
        GIVEN -
        WHEN running a gitlab cli command with fake username
        THEN it should ask a confirm
        """
        self.setUp()
        result = self.runner.invoke(cli, ["gl", "create-issues", "1"])
        assert result.exit_code == 0
        assert result.output.replace("\n", "") == (
            "No range set, all issues will be created. Do you want to continue ? [y/N]: "
        )
