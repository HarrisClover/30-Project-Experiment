# Catch the Insect Game User Manual

## Introduction
The Catch the Insect game is a simple web-based game where players need to click on randomly generated insects to increase their score while the timer keeps track of the game time. The game also provides an option to select the type of insect and displays a message when the player's score reaches a certain threshold.

## Installation
To run the Catch the Insect game, you need to have Python installed on your system. You can download Python from the official website: [Python.org](https://www.python.org/downloads/)

Once Python is installed, you can follow these steps to set up the game:

1. Clone the repository or download the code files from [GitHub](https://github.com/your-repository-link).

2. Open a terminal or command prompt and navigate to the project directory.

3. Create a virtual environment (optional but recommended) by running the following command:
   ```
   python -m venv venv
   ```

4. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```

5. Install the required dependencies by running the following command:
   ```
   pip install -r requirements.txt
   ```

## Usage
To start playing the Catch the Insect game, follow these steps:

1. Open a terminal or command prompt and navigate to the project directory.

2. Activate the virtual environment (if you created one) by running the appropriate command mentioned in the installation steps.

3. Run the main.py file using the following command:
   ```
   python main.py
   ```

4. The game window will open, displaying the score, time, and insect type.

5. Click on the randomly generated insects as they appear on the screen to increase your score.

6. The game will continue for 30 seconds. Try to score as many points as possible within the given time.

7. If your score reaches the specified threshold (default: 10), a message will be displayed congratulating you.

8. Once the game time is over, a "Game Over" message will be displayed.

9. You can close the game window to exit the game.

## Customization
The Catch the Insect game allows you to customize certain aspects of the game. Here are the customization options:

- Insect Types: By default, the game randomly generates three types of insects: Ant, Butterfly, and Ladybug. You can modify the `insect_types` list in the `game.py` file to add or remove insect types.

- Threshold: The game displays a congratulatory message when the player's score reaches a certain threshold. By default, the threshold is set to 10. You can modify the `threshold` variable in the `game.py` file to change the threshold value.

## Conclusion
Congratulations! You have successfully installed and played the Catch the Insect game. Enjoy catching those insects and try to beat your high score! If you have any questions or encounter any issues, please feel free to reach out to our support team for assistance. Happy gaming!