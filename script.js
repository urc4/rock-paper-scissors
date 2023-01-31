let keepPlaying = true; //get rid off global variables
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const GAME_OPTIONS = ["rock", "paper", "scissors"];
  return GAME_OPTIONS[Math.floor(Math.random() * 2.999999999999)];
}

function playRound(playerSelection, computerSelection) {
  let playerWinMessage = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  let playerLoseMessage = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
  let tieMessage = `It's a tie. ${playerSelection.toUpperCase()} doesn't beat ${playerSelection.toUpperCase()}`;
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    tieMessage += "\nSTAY OUT OF MY TERRITORY!";
    return tieMessage;
  } else if (playerSelection.toLowerCase() === "rock") {
    playerWinMessage += "\nI AM THE ONE WHO KNOCKS";
    playerLoseMessage += "\nTREAD LIGHTLY";
    return computerSelection === "scissors"
      ? playerWinMessage
      : playerLoseMessage;
  } else if (playerSelection.toLowerCase() === "scissors") {
    playerWinMessage += "\nI PREFER TO SEE IT AS THE STUDY OF CHANGE";
    playerLoseMessage +=
      "\nI I WILL KILL YOUR WIFE, I WILL KILL YOUR SON, I WILL KILL YOUR INFANT DAUGHTER";
    return computerSelection === "paper" ? playerWinMessage : playerLoseMessage;
  } else {
    playerWinMessage +=
      "\nJUST BECAUSE YOU SHOT JESSE JAMES, DON'T MAKE YOU JESSE JAMES";
    playerLoseMessage += "\nALL I CAN DO IS WAIT...FOR THE CANCER TO COME BACK";
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

function promptRestart() {
  const playerOptions = document.querySelector(".player-options");
  const restartButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  restartButton.textContent = "Restart";
  cancelButton.textContent = "Cancel";
  playerOptions.appendChild(restartButton);
  playerOptions.appendChild(cancelButton);
  restartButton.addEventListener("click", () => {
    keepPlaying = true;
  });
  cancelButton.addEventListener("click", () => {
    keepPlaying = false;
  });
}

const playerOptions = document.querySelector(".player-options");
const message = document.createElement("div");
function updateScore() {
  message.textContent = "";
  if (playerScore === 5 || computerScore === 5) {
    keepPlaying = false;
    const winMessage = "SAY MY NAME";
    const loseMessage = "A CRIPPLED LITTLE RATA";

    message.textContent =
      playerScore > computerScore ? winMessage : loseMessage;
    playerOptions.appendChild(message);
    promptRestart();
  }
}

function gameOn() {
  if (!keepPlaying) return;
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
      updateScore();
    });
  });
}

gameOn();
