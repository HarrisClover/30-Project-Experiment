from dataclasses import dataclass
from datetime import datetime

@dataclass
class Note:
    """A class representing a single note."""
    title: str
    content: str
    created_at: datetime = datetime.now()
