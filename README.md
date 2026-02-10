⭕ Tic-Tac-Toe ❌

A browser-based Tic-Tac-Toe game built with a focus on Object-Oriented Programming (OOP) principles, specifically using the Module Pattern and Factory Functions to keep the global namespace clean.

🚀 The Challenge
The goal was to build a fully functional game with as little global code as possible. The logic is separated into distinct "logical" modules, ensuring that the DOM logic doesn't mix with the game rules.

🛠️ Built With
HTML5 (Semantic structure and Data-Attributes)

CSS3 (CSS Grid for the game board)

JavaScript (ES6)

Module Pattern (IIFE): Used for single-instance objects like the Gameboard and GameController.

Factory Functions: Used to generate multiple Player objects.

🏗️ Architecture & Logic
The project is split into four primary components to ensure Separation of Concerns:

Gameboard Module: Handles the data state. It manages a private array and provides methods to get/set fields.

Player Factory: Creates player objects with names and markers (X or O).

Game Controller (The "Brain"): Manages turn-switching, win-checking algorithms (using .some() and .every()), and overall game state.

Display Controller (The "View"): The only module that interacts with the DOM. It renders the board and listens for user clicks.


🎮 How to Play
Enter the names for Player 1 and Player 2.

Click the "Start" button to initialize the game.

Click on any empty cell in the 3x3 grid to place your marker.

The game will automatically detect a win (3-in-a-row) or a tie.

Use the Restart button to clear the board and play again.

🧠 Key Features
Encapsulation: Private variables are used so the game board cannot be manipulated directly from the console without using defined methods.

Win-Check Algorithm: Uses a pattern-matching array to check 8 possible winning combinations after every move.

Tie Detection: Ensures a draw is declared if the board is full with no winner.
