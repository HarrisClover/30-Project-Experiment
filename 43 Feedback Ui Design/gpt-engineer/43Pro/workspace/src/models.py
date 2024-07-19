from sqlalchemy import Column, Integer, String
from database import Base

class Feedback(Base):
    __tablename__ = 'feedback'
    id = Column(Integer, primary_key=True)
    feedback = Column(String(50))

    def __init__(self, feedback=None):
        self.feedback = feedback
