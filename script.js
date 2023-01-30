function getComputerChoice() {
  const GAME_OPTIONS = ["rock", "paper", "scissors"];
  return GAME_OPTIONS[Math.floor(Math.random() * 2.999999999999)];
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
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
