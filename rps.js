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
            if (computerSelection == "rock")
                return "You chose Rock and the Computer chose Rock!Its a Draw!"


            if (computerSelection == "scissors")
                return "You Win! Rock breaks Scissors!"


            if (computerSelection == "paper")

                return "You Lose! Paper covers Rock!"
            break;

        case "scissors":
            if (computerSelection == "rock")
                return "You Lose! Rock breaks Scissors!"

            if (computerSelection == "scissors")
                return "You chose Scissors and the Computer chose Scissors! Its a Draw!"

            if (computerSelection == "paper")
                return "You Win! Scissors cuts Paper!"
            break;

        case "paper":
            if (computerSelection == "rock")
                return "You Win! Paper covers Scissors!"

            if (computerSelection == "scissors")
                return "You Lose! Scissors cuts Paper!"

            if (computerSelection == "paper")
                return "You chose Paper and the Computer chose Paper! Its a Draw!"
            break;

        default:
            return "That weapon is not in the arsenal. Please choose either Rock, Paper or Scissors."

    }
}

/*
console.log("You picked " + playerSelection)
console.log("Computer picked " + computerSelection)
console.log(playRound(playerSelection, computerSelection))
*/


for (let loop = 0; loop < 5; loop++) {
    const playerSelection = prompt("Make your choice!").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))

}