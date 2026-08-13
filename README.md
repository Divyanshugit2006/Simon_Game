# 🎮 Simon Game

A simple and interactive **Simon Memory Game** built using **HTML, CSS, and JavaScript**. The game generates a sequence of colored buttons that the player must remember and reproduce correctly. With every successful round, the sequence becomes longer and the difficulty increases.

## 🚀 Features

* 🎯 **Progressive Difficulty:** Adds a new random color to the sequence after every successful level.
* 🎨 **Four Colored Buttons:** Red, blue, green, and yellow buttons generate the game sequence.
* ✨ **Visual Feedback:** Buttons flash during the game sequence and when clicked by the player.
* ⌨️ **Keyboard Start:** Press any key to start or restart the game.
* 🖱️ **Interactive Gameplay:** Reproduce the generated sequence by clicking the colored buttons.
* ✅ **Sequence Validation:** Checks each user input against the generated sequence.
* ❌ **Game Over Detection:** Ends the game when an incorrect button is clicked and displays the score.

## 🛠️ Tech Stack

| Technology       | Purpose                                                         |
| ---------------- | --------------------------------------------------------------- |
| HTML5            | Structure and layout                                            |
| CSS3             | Styling, grid layout, and visual effects                        |
| JavaScript (ES6) | Game logic, sequence generation, validation, and event handling |

## 📂 Project Structure

```text
Simon_Game/
├── index.html      # Main HTML structure
├── style.css       # Styling and visual effects
├── str.js          # Game logic and event handling
└── README.md       # Project documentation
```

## ⚙️ How the Game Works

1. Press **any key** to start the game.
2. The game generates a random colored button.
3. The selected button flashes to display the sequence.
4. Click the buttons to reproduce the displayed sequence.
5. Each correct sequence increases the game level.
6. A new color is added to the sequence at every level.
7. An incorrect button click ends the game and displays the score.
8. Press any key to restart the game.

## 🧠 Game Logic

The game maintains two arrays:

* `game[]` — stores the randomly generated sequence.
* `user[]` — stores the sequence entered by the player.

The player's input is checked against the generated sequence after every click. When the complete sequence is entered correctly, the game advances to the next level and adds another random button.

### Core JavaScript Functions

* **`levelup()`** — increases the level and generates a new random button.
* **`btnflash()`** — provides visual feedback for the generated sequence.
* **`btnuserflash()`** — records user input and provides click feedback.
* **`checkans()`** — validates the player's input.
* **`reset()`** — resets the game state after an incorrect input.

## 🎨 UI & Styling

The interface uses a **2 × 2 CSS Grid** containing four colored buttons:

* 🔴 Red
* 🔵 Blue
* 🟢 Green
* 🟡 Yellow

The `.flash` and `.userflash` CSS classes provide visual feedback for game and user actions.

## ▶️ How to Run

No external dependencies are required.

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Press any key to start playing.

## 📚 Learning Outcomes

This project helped me practice:

* DOM manipulation
* JavaScript arrays and functions
* Event handling
* Random number generation
* Conditional logic
* Game-state management
* CSS Grid
* Dynamic styling with CSS classes
* User input validation
* `setTimeout()` for timed visual effects

## 👨‍💻 Author

**Divyanshu Solanki**

B.Tech, Metallurgical & Materials Engineering
Malaviya National Institute of Technology (MNIT), Jaipur
