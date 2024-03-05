import pytest
from issue_templates.main import parse_range


@pytest.mark.parametrize(
    "input, expected",
    [
        ("1:5", "ERROR"),
        ("1-", "ERROR"),
        ("-10", "ERROR"),
        ("1-10", (1, 10)),
        ("1-1", (1, 1)),
    ],
)
def test_parse_range(input, expected):
    if expected == "ERROR":
        with pytest.raises(Exception) as error:
            parse_range("1:5")
    else:
        result = parse_range(input)
        assert result == expected
