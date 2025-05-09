# 🕹️ Tic-Tac-Toe Game with Turn Timer

This is a web-based Tic-Tac-Toe game built using **HTML**, **CSS**, and **JavaScript**, featuring a timer that limits each player's turn. If a player fails to make a move within the time limit, their turn is skipped automatically.

## 🚀 Features

- Two-player Tic-Tac-Toe game
- Turn-based timer (5 seconds per move)
- Automatic turn skipping if timer runs out
- Victory and draw detection
- Score tracking using `localStorage`
- Clean and responsive UI
- Hosted via GitHub Pages

## ⏱️ Timer Functionality

Each player has **5 seconds** to make their move. If the time runs out, their turn is **skipped** automatically and the game proceeds with the next player.

## 🧠 Logic Breakdown

- Game board is represented by an array of 9 positions.
- Game checks for a win after each move.
- Timer starts at the beginning of each player's turn and resets on every valid move.
- If the timer hits 0, the turn is skipped without showing an alert — the message is updated quietly.
  
## Experience and Reflection

During this project, I encountered a few technical hurdles that helped me grow as a developer. One of the biggest challenges was implementing the move timer. Initially, the timer wouldn’t reset correctly when a player made a move, and it triggered unwanted alerts. After inspecting the logic and using console.log() to trace the behavior, I realized the issue was due to event handler conflicts and improper synchronization of setInterval and clearInterval.

To fix this, I broke the functionality into smaller functions like startTurnTimer() and skipTurn(), and made sure the timer was cleared and restarted on every valid move. I also removed alert messages and instead updated the message area on the page — which was a better user experience.

When setting up Git and pushing to GitHub Pages, I ran into a fatal: unable to auto-detect email address error. A quick Google search showed me that I needed to configure my global Git identity. The solution that worked was:

git config --global user.email "myemail@example.com"
git config --global user.name "My Name"

Once committed and pushed, I used GitHub Pages to deploy the site and verified the link.
Then later when i tried to push my documentation on git bash there's another conflict:
Updates were rejected because the remote contains work that you do not have locally. This is usually caused by another repository pushing to the same ref. 
In this matter i used google and and the notes you uploaded and found the sloution of following pull command:
"git pull origin main -rebase" and then pushed and it succcesfully pushed on git.
Seeing my changes live online was a rewarding success.
