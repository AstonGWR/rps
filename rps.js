function getComputerChoice() {
    let move = ["Rock", "Paper", "Scissors"]


    min = Math.ceil(0);
    max = Math.floor(3);

    let random = Math.floor(Math.random() * (max - min)) + min;



    return move[random]



}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "Scissors" && playerSelection == "Rock") {
        return "You Win! Rock beats Scissors"

    }

    if (computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"

    }

    if (computerSelection == "Rock") {
        return "Its a Draw!"

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