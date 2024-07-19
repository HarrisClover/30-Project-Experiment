# ChatDev User Manual

## Introduction

Welcome to ChatDev! This user manual will guide you on how to use our software to create a website that displays cards with words on them and plays sounds when clicked. This manual provides step-by-step instructions on how to install the necessary dependencies and run the software.

## Installation

To install the required dependencies, please follow these steps:

1. Ensure that you have Python installed on your system. If not, you can download and install Python from the official website: [Python.org](https://www.python.org/).

2. Open a terminal or command prompt.

3. Navigate to the directory where you have saved the code files.

4. Run the following command to install the required dependencies:

   ```
   pip install -r requirements.txt
   ```

   This command will install the `tkinter` and `playsound` libraries.

## Running the Software

To run the software and launch the website, please follow these steps:

1. Open a terminal or command prompt.

2. Navigate to the directory where you have saved the code files.

3. Run the following command to execute the main Python file:

   ```
   python main.py
   ```

4. The website will open in a new window.

## Using the Website

Once the website is open, you will see cards displayed with words on them. To play a sound associated with a card, simply click on the card. The corresponding sound will be played.

## Customization

If you would like to customize the cards and sounds, you can modify the `main.py` file. In the `main` function, you can create new instances of the `Card` class with your desired words and sound file names. You can also change the layout of the cards by modifying the `create_card_buttons` method in the `CardGame` class.

## Conclusion

Congratulations! You have successfully installed and used our software to create a website that displays cards with words on them and plays sounds when clicked. We hope you find this user manual helpful. If you have any further questions or need assistance, please don't hesitate to reach out to our support team. Happy coding!