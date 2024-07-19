# ChatDev FAQ Web Page

The ChatDev FAQ Web Page is a simple web page that displays frequently asked questions (FAQs) with a drop-down arrow for each question to show or hide the answer. This user manual will guide you through the installation process and explain how to use the web page.

## Installation

To use the ChatDev FAQ Web Page, you need to have Python installed on your machine. Follow these steps to install the required dependencies:

1. Open a terminal or command prompt.
2. Navigate to the directory where you have downloaded the project files.
3. Run the following command to install the required dependencies:

   ```
   pip install -r requirements.txt
   ```

## Usage

Once you have installed the dependencies, you can start using the ChatDev FAQ Web Page. Follow these steps to run the web page:

1. Open a terminal or command prompt.
2. Navigate to the directory where you have downloaded the project files.
3. Run the following command to start the web page:

   ```
   python main.py
   ```

4. Access the web page by opening a web browser and navigating to `http://localhost:5000`.

## FAQ Section

The FAQ section is displayed on the web page with each question having a drop-down arrow. Click on the arrow to show or hide the answer.

### Modifying FAQs

The questions and answers are stored in the `faqs` list in the `main.py` file. You can modify this list to add, remove, or update the FAQs as needed. Each FAQ is represented as a dictionary with the following structure:

```python
{
    "question": "Question text",
    "answer": "Answer text"
}
```

Simply update the `faqs` list with your desired questions and answers.

## License

This project is licensed under the MIT License. You can find the full license text in the [LICENSE](LICENSE) file.

---

Thank you for using the ChatDev FAQ Web Page. If you have any further questions or need assistance, please don't hesitate to contact our support team.