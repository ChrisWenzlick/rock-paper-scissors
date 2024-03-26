let selectionButtons = document.querySelectorAll("#selections button");
let resultTextArea = document.querySelector("#results");
let playerScoreTextArea = document.querySelector("#playerScore");
let computerScoreTextArea = document.querySelector("#computerScore");

let playerWins = 0;
let computerWins = 0;
let roundResult;

// Button event listeners
selectionButtons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        roundResult = playRound(event.target.textContent);
        
        if (roundResult < 0) {
            computerWins++;
        } else if (roundResult > 0) {
            playerWins++;
        }

        printScores();

        if (playerWins >= 5 || computerWins >= 5) {
            printWinner();
            resetGame();
        }
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/*
Plays one round of rock paper scissors
    PARAMETERS:
        playerSelection - the player's selection, in string form
        computerSelection - the computer's selection, in string form
    RETURNS:
        1 if the player wins, -1 if the player loses, and 0 if
        there's a draw or invalid player input
*/
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection == computerSelection) {
        printResults(`DRAW: you both selected ${playerSelection}.`);
        return 0;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            printResults(`YOU LOSE: paper covers rock.`);
            return -1;
        } else {
            printResults(`YOU WIN: rock beats scissors.`);
            return 1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            printResults(`YOU LOSE: scissors cut paper.`);
            return -1;
        } else {
            printResults(`YOU WIN: paper covers rock.`);
            return 1;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            printResults(`YOU LOSE: rock beats scissors.`);
            return -1;
        } else {
            printResults(`YOU WIN: scissors cut paper.`);
            return 1;
        }
    } else {
        printResults("Please enter rock, paper, or scissors.");
        return 0;
    }
}

function printResults(text) {
    resultTextArea.textContent = text;
}

function printScores() {
    playerScoreTextArea.textContent = `You: ${playerWins}`;
    computerScoreTextArea.textContent = `Computer: ${computerWins}`;
}

function printWinner() {
    if (playerWins > computerWins) {
        printResults(`Congratulations! You win, ${playerWins} to ${computerWins}.`);
    } else if (playerWins < computerWins) {
        printResults(`Sorry! You lose, ${computerWins} to ${playerWins}.`);
    } else {
        printResults(`It's a draw! ${playerWins} to ${computerWins}.`)
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
}