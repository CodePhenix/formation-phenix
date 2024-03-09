import pytest
from issue_templates.main import Range


@pytest.mark.parametrize(
    "input, expected",
    [
        ("1:5", "ERROR"),
        ("1-", "ERROR"),
        ("-10", "ERROR"),
        ("1-10", (1, 10)),
        ("1-1", (1, 1)),
        ("1", (1, 1)),
    ],
)
def test_internal_parse_range_method(input, expected):
    """
    GIVEN a range string
    WHEN parsing it
    THEN it should either raise an error
        OR parse it into the right tuple
    """
    if expected == "ERROR":
        with pytest.raises(Exception) as error:
            Range._parse_range(input)
    else:
        result = Range._parse_range(input)
        assert result == expected


@pytest.mark.parametrize(
    "input",
    [
        "1:5",
        "1-",
        "-10",
    ],
)
def test_init_range_with_error(input):
    """
    GIVEN a wrong format string range
    WHEN initializing a Range
    THEN it should raise an exception
    """
    with pytest.raises(Exception) as error:
        Range(input)
        assert type(error) == ValueError


@pytest.mark.parametrize(
    "input, expected",
    [
        ("1-10", (1, 10)),
        ("1-1", (1, 1)),
        ("4", (4, 4)),
    ],
)
def test_init_range_no_all(input, expected):
    """
    GIVEN a not ALL format string range
    WHEN initializing the Range
    THEN it should be parsed accordingly
        AND its is_all property be False
    """
    range = Range(input)
    assert range.start == expected[0]
    assert range.end == expected[1]
    assert range.is_all is False


def test_init_range_all():
    """
    GIVEN an ALL format string range
    WHEN initializing the Range
    THEN its is_all property be False
        AND calling its start/end property
        should throw
    """
    range = Range("ALL")
    assert range.is_all is True
    with pytest.raises(Exception) as error:
        _ = range.start
        assert type(error) == ValueError

    with pytest.raises(Exception) as error:
        _ = range.end
        assert type(error) == ValueError
