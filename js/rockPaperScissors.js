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
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection == computerSelection) {
        console.log(`DRAW: you both selected ${playerSelection}.`);
        return 0;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log(`YOU LOSE: paper covers rock.`);
            return -1;
        } else {
            console.log(`YOU WIN: rock beats scissors.`);
            return 1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log(`YOU LOSE: scissors cut paper.`);
            return -1;
        } else {
            console.log(`YOU WIN: paper covers rock.`);
            return 1;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log(`YOU LOSE: rock beats scissors.`);
            return -1;
        } else {
            console.log(`YOU WIN: scissors cut paper.`);
            return 1;
        }
    } else {
        console.log("Please enter rock, paper, or scissors.");
        return 0;
    }
}