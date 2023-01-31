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
//add transition to interface
//can i use create attribute here?
const interface = document.querySelector(".interface");
const playerDisplay = document.querySelector("#player.jock");
const computerDisplay = document.querySelector("#computer.jock");
const scorePlayer = document.createElement("div");
const scoreComputer = document.createElement("div");

function calculateScore() {
  if (interface.textContent.includes("win")) {
    scorePlayer.textContent = `${++playerScore}`;
  } else if (interface.textContent.includes("lose")) {
    scoreComputer.textContent = `${++computerScore}`;
  }

  displayStyle =
    "color: #1db954; font-size: 4rem; font-weight: 900; padding: 10rem 0;";
  scorePlayer.style.cssText = displayStyle;
  scoreComputer.style.cssText = displayStyle;

  playerDisplay.appendChild(scorePlayer);
  computerDisplay.appendChild(scoreComputer);
}

const buttons = document.querySelectorAll(".player-options button");
const playerImg = document.createElement("img");
const computerImg = document.createElement("img");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerImg.src = "";
    computerImg.src = "";
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    interface.textContent = playRound(playerSelection, computerSelection);
    calculateScore();

    playerImg.src = `./icons/${playerSelection}.png`;
    computerImg.src = `./icons/${computerSelection}.png`;
    playerDisplay.append(playerImg);
    computerDisplay.append(computerImg);
  });
});
