# Interactive Text Display User Manual

## Introduction

The Interactive Text Display is a Python program that allows you to create an interactive text display on a webpage. The text display consists of the phrase "We Love" followed by changing words or phrases. The speed of the text changes can be adjusted using a control.

## Installation

To use the Interactive Text Display program, you need to have Python installed on your computer. You can download Python from the official website: [https://www.python.org/downloads/](https://www.python.org/downloads/)

Once you have Python installed, you can install the required dependencies by running the following command in your terminal or command prompt:

```
pip install -r requirements.txt
```

This will install the necessary dependencies, including the `tkinter` library.

## Usage

To run the Interactive Text Display program, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the directory where the `main.py` file is located.
3. Run the following command:

```
python main.py
```

4. A window will open displaying the Interactive Text Display.
5. The text display will initially show the phrase "We Love" followed by the first word or phrase from the list.
6. To change the displayed text, click the "Change Text" button.
7. The text will change to the next word or phrase from the list.
8. The speed of the text changes can be adjusted using the "Speed:" control. Move the slider to the desired speed.
9. The text will change at the adjusted speed.

## Customization

If you want to customize the words or phrases that appear in the text display, you can modify the `words` list in the `main.py` file. Simply add or remove words or phrases as desired.

```python
self.words = ["Programming", "Coding", "ChatDev", "Python", "Web Development"]
```

## Conclusion

The Interactive Text Display program allows you to create an interactive text display on a webpage. You can easily change the displayed text and adjust the speed of the text changes. Have fun experimenting with different words and phrases to create your own interactive text display!