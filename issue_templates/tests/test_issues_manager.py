import pytest
from pathlib import Path
from issue_templates.main import IssueManager
from dataclasses import dataclass


@dataclass
class FakeFile:
    path: str
    name: str

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
    def test__fake_issue_content(self):
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


class TestIssueManager:
    """
    We use pyfakefs to be able to test the state of the filesystem
    when modifying issues orders
    Initial state of the filesystem:
        ./issue_templates/fake_0__0.md
        ./issue_templates/fake_1__1.md
        ./issue_templates/fake_new.md
    """

    INITIAL_FAKE_FILES = [
        FakeFile(f"./{IssueManager.TEMPLATES_PATH}/fake_0__0.md", "fake_0"),
        FakeFile("./issue_templates/fake_1__1.md", "fake_1"),
        FakeFile("./issue_templates/fake_new.md", "fake_new"),
    ]

    def setUp(self, fake_filesystem):
        """
        Initialize the manager with root projetct as issue_templates/tests
        """
        root_test_path = Path(__file__).parent.resolve()
        self.manager = IssueManager(project_root=root_test_path)

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

        assert self.manager.project_root == Path(__file__).parent.resolve()

    # def test_get_all_templates_paths(self, fake_filesystem):
    #     """
    #     GIVEN a filesystem with some issue templates
    #     WHEN calling the method
    #     THEN it should return the right paths
    #     """
    #     self.setUp(fake_filesystem)
    #     expected = [Path(path[0]) for path in self.INITIAL_FAKE_FILES]
    #     current_paths = self.manager.get_current_paths()
    #     assert current_paths == expected, current_paths
    #     # assert self.manager.get_all_templates_paths() == expected

    # def test_something_else(self):
    #     path = Path("issue_templates")
    #     assert manager._extract_order_from_template_name(path) is not None

    # def test_get_all_templates(self, fake_filesystem):
    #     self.setUp(fake_filesystem)
    #     print("--------Manager--------", self.manager.get_all_templates_paths())
    #     assert self.manager.get_all_templates() is not None
