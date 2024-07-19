# ChatDev Web Page Notifications

The ChatDev Web Page Notifications is a web application that allows you to display the latest messages in a chronological order when you click the "Show notifications" button. This manual will guide you through the installation process and explain how to use the software effectively.

## Installation

To install the ChatDev Web Page Notifications, follow these steps:

1. Make sure you have Python installed on your system. You can download Python from the official website: [Python.org](https://www.python.org/downloads/).

2. Clone the ChatDev repository from GitHub using the following command:

   ```
   git clone https://github.com/ChatDev/notifications.git
   ```

3. Navigate to the project directory:

   ```
   cd notifications
   ```

4. Install the required dependencies by running the following command:

   ```
   pip install -r requirements.txt
   ```

## Usage

Once you have installed the ChatDev Web Page Notifications, you can start using it by following these steps:

1. Open a terminal or command prompt and navigate to the project directory.

2. Run the main.py file using the following command:

   ```
   python main.py
   ```

3. A window will open with the title "Notifications" and a button labeled "Show notifications".

4. Click the "Show notifications" button to display the latest messages on the screen. The messages will be displayed in the correct chronological order.

5. You can add new notifications by modifying the notifications.py file. Use the `add_notification` method to add a new message with its corresponding timestamp.

   ```python
   notifications.add_notification("New message", timestamp)
   ```

   Make sure to replace "New message" with the content of your message and timestamp with the actual timestamp.

6. To exit the application, simply close the window or press Ctrl+C in the terminal or command prompt.

## Customization

If you want to customize the appearance or behavior of the ChatDev Web Page Notifications, you can modify the main.py file. You can change the window title, button label, or add additional functionality as per your requirements.

## Conclusion

Congratulations! You have successfully installed and used the ChatDev Web Page Notifications. You can now display the latest messages in a chronological order by clicking the "Show notifications" button. If you have any further questions or need assistance, please reach out to our support team.