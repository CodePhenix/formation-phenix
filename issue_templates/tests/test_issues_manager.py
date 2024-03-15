import pytest
from pathlib import Path
from issue_templates.main import IssueManager, VCS
from dataclasses import dataclass


@dataclass
class FakeFile:
    path: str
    name: str

    @property
    def file_name(self):
        return self.path.split("/")[-1]

    def compute_issue_content(self, content: str):
        return f"""
            ---
            name: {self.name}
            about:
            title: {self.name}
            labels: ""
            assignees:
            ---

            {content}
        """


class TestFakeFile:
    def test_compute_issue_content(self):
        """
        GIVEN a name and a content
        WHEN calling the method
        THEN it should return a string with the right format
        """
        content = "fake_content"
        fake = FakeFile("fake_path", "fake_name")
        expected = """
            ---
            name: fake_name
            about:
            title: fake_name
            labels: ""
            assignees:
            ---

            fake_content
        """
        assert fake.compute_issue_content(content) == expected

    @pytest.mark.parametrize(
        "path, expected",
        [
            ("lala/toto/hello.md", "hello.md"),
            ("hello.md", "hello.md"),
            ("lala/toto/hello", "hello"),
            ("hello", "hello"),
        ],
    )
    def test_file_name(self, path, expected):
        """
        GIVEN a FakeFile
        WHEN calling the propery
        THEN it should be the last part of the path
        """
        fake = FakeFile(path=path, name="fake_name")
        assert fake.file_name == expected


class TestIssueManager:
    """
    We use pyfakefs to be able to test the state of the filesystem
    when modifying issues orders
    Initial state of the filesystem:
        /issue_templates/templates/fake_0__0.md
        /issue_templates/templates/fake_1__1.md
        /issue_templates/templates/*.md
        /tmp
    """

    INITIAL_FAKE_FILES = [
        FakeFile(
            f"/{IssueManager.TEMPLATES_PATH}/fake_3__3.md", "fake_3"
        ),  # created first to test the order
        FakeFile(f"/{IssueManager.TEMPLATES_PATH}/fake_0__0.md", "fake_0"),
        FakeFile(f"/{IssueManager.TEMPLATES_PATH}/fake_1__1.md", "fake_1"),
        FakeFile(f"/{IssueManager.TEMPLATES_PATH}/fake_new_B.md", "fake_new_A"),
        FakeFile(f"/{IssueManager.TEMPLATES_PATH}/fake_new_A.md", "fake_new_B"),
    ]

    def setUp(self, fake_filesystem):
        """
        Initialize the manager with root projetct as issue_templates/tests
        """
        # root_test_path = Path(__file__).parent.resolve()
        self.manager = IssueManager(project_root=Path("/"))

        for file in self.INITIAL_FAKE_FILES:
            fake_filesystem.create_file(
                file.path,
                contents=file.compute_issue_content("fake_content"),
            )

    def test_setUp(self, fake_filesystem):
        """
        GIVEN -
        WHEN setting up the tests
        THEN the files should be created
            AND the manager should be initialized
            with the right project root
        """
        self.setUp(fake_filesystem)
        for file in self.INITIAL_FAKE_FILES:
            assert Path(file.path).exists()
            assert Path(file.path).read_text() == file.compute_issue_content(
                "fake_content"
            )

        assert self.manager.project_root == Path("/")

    def test_get_all_templates_paths(self, fake_filesystem):
        """
        GIVEN a filesystem with some issue templates
        WHEN calling the method
        THEN it should return the right paths
        """
        self.setUp(fake_filesystem)
        current_paths = self.manager.get_all_templates_paths()
        expected = [Path(file.path) for file in self.INITIAL_FAKE_FILES]
        assert current_paths == expected, current_paths

    def test_get_all_templates_paths_ordered(self, fake_filesystem):
        """
        GIVEN a filesystem with some issue templates
        WHEN calling the method
        THEN it should return the right paths ordered
        """
        self.setUp(fake_filesystem)
        current_paths = self.manager.get_all_templates_paths_ordered()
        expected_paths_ordered = [
            f"/{IssueManager.TEMPLATES_PATH}/fake_0__0.md",
            f"/{IssueManager.TEMPLATES_PATH}/fake_1__1.md",
            f"/{IssueManager.TEMPLATES_PATH}/fake_3__3.md",
            f"/{IssueManager.TEMPLATES_PATH}/fake_new_A.md",
            f"/{IssueManager.TEMPLATES_PATH}/fake_new_B.md",
        ]
        expected = [Path(path) for path in expected_paths_ordered]
        assert current_paths == expected, current_paths

    # def test_render_template(self, fake_filesystem):
    #     """
    #     GIVEN a path and a vcs
    #     WHEN calling the method
    #     THEN it should return the right content
    #     """
    #     self.setUp(fake_filesystem)
    #     fakeFile = self.INITIAL_FAKE_FILES[1]
    #     path = Path("fake_0__0.md")
    #     vcs = VCS(
    #         path="fake_path",
    #         codephenix_url="fake_codephenix_url",
    #         html_validator_url="fake_html_validator_url",
    #     )
    #     expected = """
    #         ---
    #         name: fake_0
    #         about:
    #         title: fake_0
    #         labels: ""
    #         assignees:
    #         ---

    #         fake_content
    #     """
    #     assert self.manager.jinja_env is not None
    #     assert self.manager.render_template(Path(fakeFile.path), vcs) == expected

    def test_delete_template(self, fake_filesystem):
        """
        GIVEN the initial state of the filesystem
        WHEN deleting the templates folder
        THEN the files should be deleted
        """
        self.setUp(fake_filesystem)
        folder_path = Path(IssueManager.TEMPLATES_PATH)

        assert Path(self.INITIAL_FAKE_FILES[0].path).exists()

        self.manager._delete_folder_content(folder_path)

        assert not Path(self.INITIAL_FAKE_FILES[0].path).exists()
