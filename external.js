
let playerSelection = document.querySelector(".options")
let arr = [Rock, Paper, Scissors]
let computerSelection = Math.random()

//(make sure the player selection is case insensitive)
//make function play round taking both parameters
for (let i= 0; i<=5; i++); 
{

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === Rock && computerSelection === Paper) {
            alert("Computer Wins!")
        }
        else if (playerSelection === Paper && computerSelection === Scissors) {
            alert("Computer Wins!")
        }
        else if (playerSelection === Scissors && computerSelection === Rock) {
            alert("Computer Wins!")
        }
        else {
            alert("Player wins!");
        }
}
}
//prompt the win 
//change the scoreboard 

