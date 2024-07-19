The architecture of the game will be divided into several files:

1. main.py: This is the entry point of the game. It initializes the game window, handles user input, and controls the game loop.

2. game.py: This file contains the Game class which encapsulates the game logic. It is responsible for creating and managing the game objects (insects), updating the game state, and checking the game conditions (e.g., whether the player has reached the score threshold).

3. insect.py: This file contains the Insect class which represents an insect in the game. Each insect has properties such as its position, type, and whether it has been caught by the player.

4. timer.py: This file contains the Timer class which is used to keep track of the game time.

5. score.py: This file contains the Score class which is used to keep track of the player's score.

6. requirements.txt: This file lists the Python packages that are required to run the game.

Let's start with the main.py file:

main.py
