


const gameSquares = document.querySelectorAll('.cell');        // squares
const messageDisplay = document.getElementById('status');      // game messages
const newGameButton = document.getElementById('restartBtn');    // The button to start over


let activePlayer = "X";                                // X always goes first 
let gameInProgress = true;                            
let gameBoard = ["", "", "", "", "", "", "", "", ""];  


const winningPatterns = [
  // Horizontal victories
  [0, 1, 2],  
  [3, 4, 5],  
  [6, 7, 8],  
  
  // Vertical victories
  [0, 3, 6],  
  [1, 4, 7],  
  [2, 5, 8], 
  
  // Diagonal victories
  [0, 4, 8],  
  [2, 4, 6]  
];

// When a player clicks a square,
function handleSquareClick(event) {
  
  const squareIndex = event.target.getAttribute('data-index');
  
 
  if (gameBoard[squareIndex] !== "" || !gameInProgress) return;
  
  
  gameBoard[squareIndex] = activePlayer;
  event.target.textContent = activePlayer;
  
  // checking for victory move
  if (checkForVictory()) {
    
    messageDisplay.textContent = `Player ${activePlayer} wins! 🎉`;
    recordVictory(activePlayer);
    gameInProgress = false;
  } 
  
  else if (gameBoard.every(square => square !== "")) {
    // It's a stalemate!
    messageDisplay.textContent = "It's a draw!";
    recordVictory("Draw");
    gameInProgress = false;
  } 
  // The game continues...
  else {
    // Switch to the other player
    activePlayer = activePlayer === "X" ? "O" : "X";
    messageDisplay.textContent = `Player ${activePlayer}'s turn`;
  }
}


function checkForVictory() {
  return winningPatterns.some(pattern => {
    const [a, b, c] = pattern;
    
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

//Start a fresh new game
function startNewGame() {
  // Clear the virtual board
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  
  // X always starts in a new game
  activePlayer = "X";
  
  // Game is on!
  gameInProgress = true;
  
  // Update the message
  messageDisplay.textContent = `Player ${activePlayer}'s turn`;
  
  // Clear the visual board
  gameSquares.forEach(square => square.textContent = "");
}

// record for scoreboard
function recordVictory(winner) {
  if (winner === "X") {
    // Add one to X's score
    let xScore = parseInt(localStorage.getItem("scoreX") || 0);
    localStorage.setItem("scoreX", xScore + 1);
  } else if (winner === "O") {
    // Add one to O's score
    let oScore = parseInt(localStorage.getItem("scoreO") || 0);
    localStorage.setItem("scoreO", oScore + 1);
  } else {
    // Add one to the draws tally
    let drawScore = parseInt(localStorage.getItem("scoreDraws") || 0);
    localStorage.setItem("scoreDraws", drawScore + 1);
  }
}

// Initialize the game 
if (gameSquares.length > 0) {

  gameSquares.forEach(square => square.addEventListener('click', handleSquareClick));
  
  
  newGameButton.addEventListener('click', startNewGame);
}