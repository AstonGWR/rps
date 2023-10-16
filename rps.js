function getComputerChoice() {
    let move = ["Rock", "Paper", "Scissors"]


    min = Math.ceil(0);
    max = Math.floor(3);

    let random = Math.floor(Math.random() * (max - min)) + min;



    return move[random]



}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Rock")
                return "You chose Rock and the Computer chose Rock!Its a Draw!"


            if (computerSelection == "Scissors")
                return "Player Wins! Rock breaks Scissors!"


            if (computerSelection == "Paper")

                return "You Lose! Paper covers Rock!"
            break;

        case "Scissors":
            if (computerSelection == "Rock")
                return "You Lose! Rock breaks Scissors!"

            if (computerSelection == "Scissors")
                return "You chose Scissors and the Computer chose Scissors! Its a Draw!"

            if (computerSelection == "Paper")
                return "You Win! Scissors cuts Paper!"
            break;

        case "Paper":
            if (computerSelection == "Rock")
                return "You Win! Paper covers Scissors!"

            if (computerSelection == "Scissors")
                return "You Lose! Scissors cuts Paper!"

            if (computerSelection == "Paper")
                return "You chose Paper and the Computer chose Paper! Its a Draw!"

    }
}

/*
console.log("You picked " + playerSelection)
console.log("Computer picked " + computerSelection)
console.log(playRound(playerSelection, computerSelection))
*/


for (let loop = 0; loop < 5; loop++) {
    const playerSelection = prompt("Make your choice!")
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))

}