# Flower Drawing Website User Manual

## Introduction

The Flower Drawing Website is a web application that allows users to draw different types of flowers. It provides a simple and intuitive interface for users to interact with and create beautiful flower designs.

## Installation

To use the Flower Drawing Website, you need to have Python installed on your computer. You can download Python from the official website: [https://www.python.org/downloads/](https://www.python.org/downloads/)

Once you have Python installed, you can follow these steps to set up the Flower Drawing Website:

1. Download the source code from the repository: [https://github.com/your-repository](https://github.com/your-repository)

2. Extract the downloaded zip file to a location of your choice.

3. Open a terminal or command prompt and navigate to the extracted folder.

4. Install the required dependencies by running the following command:

   ```
   pip install -r requirements.txt
   ```

## Usage

To start using the Flower Drawing Website, follow these steps:

1. Open a terminal or command prompt and navigate to the folder where you extracted the source code.

2. Run the following command to start the web application:

   ```
   python main.py
   ```

3. A window will open with the title "Flower Drawing App" and a canvas area.

4. Click the "Draw Flower" button to draw a flower on the canvas.

5. You can draw different types of flowers by modifying the code in the `draw()` method of the `Flower` class in the `flower.py` file. The provided example draws a simple flower using basic shapes and lines. You can experiment with different shapes, colors, and patterns to create your own unique flower designs.

6. To exit the application, simply close the window.

## Customization

If you want to customize the Flower Drawing Website, you can modify the code in the `main.py` and `flower.py` files.

- In the `main.py` file, you can change the title of the window by modifying the `self.root.title()` line.

- In the `flower.py` file, you can modify the `draw()` method to implement your own logic for drawing different types of flowers. You can use the `self.canvas` object to draw shapes and lines on the canvas.

## Conclusion

The Flower Drawing Website provides a fun and creative way to draw different types of flowers. With its simple interface and customizable code, you can unleash your creativity and create beautiful flower designs. Enjoy drawing!