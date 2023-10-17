function getComputerChoice() {
    let move = ["rock", "paper", "scissors"]


    min = Math.ceil(0);
    max = Math.floor(3);

    let random = Math.floor(Math.random() * (max - min)) + min;



    return move[random]



}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                console.log("You chose Rock and the Computer chose Rock!Its a Draw!")
                return 1
            }

            if (computerSelection == "scissors") {
                console.log("You Win! Rock breaks Scissors!")
                return 0
            }


            if (computerSelection == "paper") {

                console.log("You Lose! Paper covers Rock!")
                return 2
            }

            break;

        case "scissors":
            if (computerSelection == "rock") {
                console.log("You Lose! Rock breaks Scissors!")
                return 2
            }

            if (computerSelection == "scissors") {
                console.log("You chose Scissors and the Computer chose Scissors! Its a Draw!")
                return 1
            }

            if (computerSelection == "paper") {
                console.log("You Win! Scissors cuts Paper!")
                return 0
            }
            break;

        case "paper":
            if (computerSelection == "rock") {
                console.log("You Win! Paper covers Scissors!")
                return 0
            }

            if (computerSelection == "scissors") {
                console.log("You Lose! Scissors cuts Paper!")
                return 2
            }

            if (computerSelection == "paper") {
                console.log("You chose Paper and the Computer chose Paper! Its a Draw!")
                return 1
            }
            break;

        default:
            return "That weapon is not in the arsenal. Please choose either Rock, Paper or Scissors."

    }
}


function game() {
    let playerScore = 0
    let computerScore = 0
    for (let loop = 0; loop < 5; loop++) {
        const playerSelection = prompt("Make your choice!").toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        if (result == 0) {
            playerScore++
        }
        if (result == 2) {
            computerScore++
        }
    }
    let winnerMessage = getWinner(playerScore, computerScore)
    console.log(winnerMessage)


}

function getWinner(playerScore, computerScore) {

    if (playerScore > computerScore) {
        return "Congratulations! You won!"
    }

    if (playerScore < computerScore) {

        return "GG No Re"
    }

    if (playerScore == computerScore) {
        return "What are the chances?! Draw!"
    }



}

game()