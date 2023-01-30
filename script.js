let keepPlaying = true; //getr rid of global variables
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const GAME_OPTIONS = ["rock", "paper", "scissors"];
  return GAME_OPTIONS[Math.floor(Math.random() * 2.999999999999)];
}

function playRound(playerSelection, computerSelection) {
  const playerWinMessage = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  const playerLoseMessage = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return `It's a tie. ${playerSelection.toUpperCase()} doesn't beat ${playerSelection.toUpperCase()}`;
  } else if (playerSelection.toLowerCase() === "rock") {
    return computerSelection === "scissors"
      ? playerWinMessage
      : playerLoseMessage;
  } else if (playerSelection.toLowerCase() === "scissors") {
    return computerSelection === "paper" ? playerWinMessage : playerLoseMessage;
  } else {
    return computerSelection === "rock" ? playerWinMessage : playerLoseMessage;
  }
}

//add class list toglle when someone reaches the desired score to change interface

const interface = document.querySelector(".interface");
const scorePlayer = document.createElement("p");
const scoreComputer = document.createElement("p");

function calculateScore() {
  if (interface.textContent.includes("win")) {
    scorePlayer.textContent = `Playuh score ${++playerScore}`;
  } else if (interface.textContent.includes("lose")) {
    scoreComputer.textContent = `CPU score ${++computerScore}`;
  }
  interface.appendChild(scorePlayer);
  interface.appendChild(scoreComputer);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    interface.textContent = playRound(playerSelection, computerSelection);
    calculateScore();
  });
});
