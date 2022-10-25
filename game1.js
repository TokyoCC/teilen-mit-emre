let result;

function getRandomzahl (){
    let result = Math.floor(Math.random()*3);
    return result;
}

function getComputerChoice (value){
    if (value===0){
        return "rock";
    } else if (value===1){
        return "paper";
    } else {
        return "scissors";
    }
}

getComputerChoice(getRandomzahl()) //das ist random computer ergebnis

computerSelection = getComputerChoice(getRandomzahl())

function game1 (playerSelection, computerSelection){
    let playerChoice = String(playerSelection).toLowerCase()
if (playerChoice == "paper" && computerSelection == "scissors"){
    return "Computer won, scissors beats paper."
}else if (playerChoice == "paper" && computerSelection == "rock"){
    return "Player won, paper beats rock"
}else if (playerChoice == "paper"&& computerSelection == "paper"){
    return "No winner, paper does not beat paper."
}else if (playerChoice == "rock" && computerSelection == "scissors"){
    return "Player won, rock beats scissors"
}else if (playerChoice == "rock" && computerSelection == "paper"){
    return "Computer won, paper beats rock."
}else if (playerChoice == "rock" && computerSelection == "rock"){
    return "No winner, rock does not beat rock."
}else if (playerChoice == "scissors" && computerSelection == "rock"){
    return "Computer won, rock beats scissors."
}else if (playerChoice == "scissors" && computerSelection == "paper"){
    return "Player won, scissors beats paper."
}else if (playerChoice == "scissors" && computerSelection == "scissors"){
    return "No winner, scissors do not beat scissors."
}else {
    return "You must enter rock, paper or scissors."
}
}

console.log(game1 ("Scissors", getComputerChoice(getRandomzahl())))
console.log(game1 ("Paper", getComputerChoice(getRandomzahl())))
console.log(game1 ("rOck", getComputerChoice(getRandomzahl())))
console.log(game1 ("sciSSors", getComputerChoice(getRandomzahl())))
console.log(game1 ("paPer", getComputerChoice(getRandomzahl())))
console.log(game1 ("rOCk", getComputerChoice(getRandomzahl())))
console.log(game1 ("scissors", getComputerChoice(getRandomzahl())))
console.log(game1 ("paper", getComputerChoice(getRandomzahl())))

