const GAME_OPTIONS = ["rock", "paper", "scissors"];
function getComputerChoice() {
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

function getPlayerChoice() {
  let valid_choice = false;
  let playerChoice;
  while (!valid_choice) {
    playerChoice = prompt("Choose ROCK, PAPER or SCISSORS", "Say my name");
    valid_choice = GAME_OPTIONS.includes(playerChoice.toLowerCase());
    if (!valid_choice) {
      alert(`${playerChoice} is not allowed!!!`);
    }
  }
  return playerChoice;
}

function game_on() {
  let playerScore = 0;
  let computerScore = 0; // account for ties now
  let playerSelection;
  let computerSelection;
  for (let roundCount = 1; roundCount <= 5; roundCount++) {
    console.log(`Round ${roundCount}`);
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    endRoundMessage = playRound(playerSelection, computerSelection);
    endRoundMessage.includes("win") ? playerScore++ : computerScore++;
    alert(endRoundMessage);
  }
  playerScore > computerScore
    ? console.log("You won the game to 5!!!")
    : console.log("You lost the game to 5!!!");
}

let keepPlaying = true;
while (keepPlaying) {
  game_on();
  keepPlaying = confirm(
    "Do you want to play another best to 5 game of ROCK, PAPER OR SCISSORS?"
  );
}
