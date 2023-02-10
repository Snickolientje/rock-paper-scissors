function playRound(){
    let computerSelection = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
    let playerSelection = prompt("Rock, Paper or Scissors: ")
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    console.log("Computer chose: " + computerSelection)
    console.log("You chose: " + playerSelection)

    if (computerSelection == playerSelection) {
        console.log("Tie Game!")
        console.log("")
    } else if (computerSelection == "Rock" && playerSelection == "Paper") {
        console.log("You win, Paper beats Rock!")
        console.log("")
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        console.log("You lost, Rock beats Scissors!")
        console.log("")
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        console.log("You lost, Paper beats Rock!")
        console.log("")
    } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        console.log("You win, Scissors beats Paper!")
        console.log("")
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        console.log("You win, Rock beats Scissors!")
        console.log("")
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        console.log("You lost, Scissors beats Paper!")
        console.log("")
    } else {
        console.log("Error! Beep Boop")
        console.log("")
    }
}

playRound()