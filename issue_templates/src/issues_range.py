import re


class Range:
    """
    Class representing a range of tickets
    Internally it either the "ALL" keyword or a tuple (start, end)
    It can be inited through three formats:
    - "ALL" keyword
    - "<int>" for one specific ticket, it is parsed into (<int>, <int>)
    - "<int_a>-<int_b>", it is parsed into (<int_a>, <int_b>)
    """

    ALL = "ALL"
    _is_all = False
    _range = ()

    def __init__(self, range: str):
        if range == self.ALL:
            self._is_all = True
        else:
            self._range = self._parse_range(range)

    @classmethod
    def _parse_range(cls, range: str) -> tuple[int, int]:
        if re.match(r"\d+-\d+", range):
            start, end = range.split("-")
            return (int(start), int(end))
        if re.match(r"^\d+$", range):
            return (int(range), int(range))
        raise ValueError(
            "Invalid range format. Use 'specific_id' or 'start-end' format only."
        )

    @property
    def is_all(self):
        return self._is_all

    @property
    def start(self):
        if self.is_all:
            raise ValueError("Using (start, end) format with ALL range doesn't work.")
        return self._range[0]

    @property
    def end(self):
        if self.is_all:
            raise ValueError("Using (start, end) format with ALL range doesn't work.")
        return self._range[1]
