function getComputerChoice() {
  const GAME_OPTIONS = ["rock", "paper", "scissors"];
  return GAME_OPTIONS[Math.floor(Math.random() * 2.999999999999)];
}

const buttons = document.querySelectorAll("button");
const interface = document.querySelector(".interface");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    interface.textContent = playRound(playerSelection, computerSelection);
  });
});

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

function gameOn() {
  let playerScore = 0;
  let computerScore = 0;

  interface.textContent.includes("win")
    ? playerScore++
    : interface.textContent.includes("lose")
    ? computerScore++
    : false;

  playerScore > computerScore
    ? console.log("You won the game to 5!!!")
    : console.log("You lost the game to 5!!!");
}
