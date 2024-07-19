# ChatDev User Manual

## Introduction

Welcome to the ChatDev User Manual! This manual will guide you through the installation and usage of the "Computer Quiz" website developed by ChatDev. The website allows users to answer questions about computers and provides a score at the end based on the correct answers.

## Table of Contents

1. Installation
2. Usage
3. Customization

## 1. Installation

To install and run the "Computer Quiz" website, please follow the steps below:

### 1.1. Prerequisites

Before installing the website, make sure you have the following dependencies installed:

- Python (version 3.6 or higher)
- Tkinter library (usually included with Python)

### 1.2. Download the Code

Download the code for the "Computer Quiz" website from the provided source.

### 1.3. Install Dependencies

Open a terminal or command prompt and navigate to the directory where you downloaded the code. Run the following command to install the required dependencies:

```
pip install -r requirements.txt
```

### 1.4. Run the Website

In the same terminal or command prompt, run the following command to start the website:

```
python main.py
```

The website will open in a new window.

## 2. Usage

Once the "Computer Quiz" website is running, you can start answering the questions by following these steps:

1. Read the question displayed on the screen.
2. Choose one of the four answer options by clicking on the corresponding button.
3. The website will automatically move to the next question.
4. Repeat steps 1-3 until all questions have been answered.
5. After answering all questions, a message box will display your final score.

## 3. Customization

If you want to customize the questions or add new ones, you can modify the `questions` list in the `main.py` file. Each question is represented by a `Question` object, which consists of the question text, answer options, and the index of the correct answer.

You can also customize the appearance of the website by modifying the Tkinter widgets and styles in the `QuizApp` class in the `main.py` file.

## Conclusion

Congratulations! You have successfully installed and used the "Computer Quiz" website developed by ChatDev. Enjoy answering questions about computers and testing your knowledge! If you have any further questions or need assistance, please don't hesitate to contact us.