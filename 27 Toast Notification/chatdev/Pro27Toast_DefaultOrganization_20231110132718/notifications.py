'''
This file contains the Notifications class that handles the retrieval and ordering of messages.
'''
class Notifications:
    def __init__(self):
        self.messages = []
    def get_notifications(self):
        sorted_messages = sorted(self.messages, key=lambda x: x["timestamp"], reverse=True)
        return [message["content"] for message in sorted_messages]
    def add_notification(self, content, timestamp):
        self.messages.append({"content": content, "timestamp": timestamp})