import pytest
from pathlib import Path
from issue_templates.main import IssueManager


class TestIssueManager:
    def setUp(self, fake_filesystem):
        self.manager = IssueManager()
        self.root_test_path = Path(__file__).parent.parent.resolve()

        fake_filesystem.create_file("issue_templates/bug.md")
        fake_filesystem.create_file("common/bug.md")

    def test_setUp(self, fake_filesystem):
        self.setUp(fake_filesystem)
        assert Path("issue_templates/bug.md").exists()
        assert Path("common/bug.md").exists()

    # def test_something(self):
    #     assert manager.project_root is not None

    # def test_something_else(self):
    #     path = Path("issue_templates")
    #     assert manager._extract_order_from_template_name(path) is not None

    def test_get_all_templates(self, fake_filesystem):
        self.setUp(fake_filesystem)
        print("--------Manager--------", self.manager.get_all_templates_paths())
        assert self.manager.get_all_templates() is not None
