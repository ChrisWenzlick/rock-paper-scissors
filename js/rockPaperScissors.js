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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection == computerSelection) {
        return `DRAW: you both selected ${playerSelection}.`;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return `YOU LOSE: paper covers rock.`;
        } else {
            return `YOU WIN: rock beats scissors.`;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return `YOU LOSE: scissors cut paper.`;
        } else {
            return `YOU WIN: paper covers rock.`;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return `YOU LOSE: rock beats scissors.`;
        } else {
            return `YOU WIN: scissors cut paper.`;
        }
    } else {
        return "Please enter rock, paper, or scissors."
    }
}