
//Create a function called computerPlay that will randomly alert(either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    let things = ['Rock', 'Paper', 'Scissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    return(thing);
}
//Create a function that plays a single round, taking the playerSelection and the computerSelection, returning a string that declares a winner
function playRound() {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");   
    let computerSelection = computerPlay();
    
//Make the function's playerSelection case insensitive
    function capitalize() {
        return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
    if (capitalize() == "Rock" && computerSelection == "Paper") {
        alert("The computer chose Paper\n Paper covers Rock\n You Lose!");
        computerScore.push(1);
    } else if (capitalize() == "Rock" && computerSelection == "Rock") {
        alert("The computer also chose Rock\n Draw");
    } else if (capitalize() == "Rock" && computerSelection == "Scissors") {
        alert("The computer chose Scissors\n Rock smashes Scissors\n You Win!");
        playerScore.push(1);
    } else if (capitalize() == "Paper" && computerSelection == "Scissors") {
        alert("The computer chose Scissors\n Scissors cut Paper\n You Lose!");
        computerScore.push(1);
    } else if (capitalize() == "Paper" && computerSelection == "Rock") { 
        alert("The computer chose Rock\n Paper covers Rock\n You Win!");
        playerScore.push(1);
    } else if (capitalize() == "Paper" && computerSelection == "Paper") {
        alert("The computer also chose Paper\n Draw");
    } else if (capitalize() == "Scissors" && computerSelection == "Paper") { 
        alert("The computer chose Paper\n Scissors cut Paper\n You Win!");
        playerScore.push(1);
    } else if (capitalize() == "Scissors" && computerSelection == "Scissors") {
        alert("The computer also chose Scissors\n Draw");
    } else if (capitalize() == "Scissors" && computerSelection == "Rock") {
        alert("The computer chose Rock\n Rock smashes Scissors\n You Lose!");
        computerScore.push(1);
    } else {
        alert("Choose Rock, Paper, Scissors")
    }
}
//Create a function called game (), using the previous function inside to play a 5 round game- either try to loop or call funtion 5 times in a row
//Use prompt () to get input from the user
//Use the previous function inside of this one to play a 5 round game
let playerScore = [];
let computerScore = [];
function game() { 
    while  (playerScore.length + computerScore.length < 5) {
        playRound();
    }
    if (playerScore.length >= 3) {
        alert("Best 3 out of 5\n YOU WIN!!!");
    } else if (computerScore.length >= 3) {
        alert("Best 3 out of 5\n YOU LOSE"); 
    } 
}
console.log(game());


