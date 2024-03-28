from dataclasses import dataclass


@dataclass
class Issue:
    title: str
    description: str


@dataclass
class VCS:
    path: str
    codephenix_url: str
    html_validator_url: str
