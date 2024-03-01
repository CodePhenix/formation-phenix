import pytest
from pathlib import Path
from main import IssueManager


def test_something():
    manager = IssueManager()
    assert manager.project_root is not None


def test_something_else():
    manager = IssueManager()
    path = Path("issue_templates")
    assert manager._extract_order_from_template_name(path) is not None
