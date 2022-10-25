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
if (playerSelection == "paper" && computerSelection == "scissors"){
    return "computer won, scissors beats paper."
}else if (playerSelection == "paper" && computerSelection == "rock"){
    return "Player won, paper beats rock"
}else if (playerSelection == "rock" && computerSelection == "scissors"){
    return "player won, rock beats scissors"
}else if (playerSelection == "rock" && computerSelection == "paper"){
    return "computer won, paper beats rock."
}else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "computer won, rock beats scissors."
}else if (playerSelection == "scissors" && computerSelection == "paper"){
    return "player won, scissors beats paper."
}else {
    return "you must enter rock, paper or scissors."
}
}

console.log(game1 ("scissors", getComputerChoice(getRandomzahl())))
console.log(game1 ("paper", getComputerChoice(getRandomzahl())))
console.log(game1 ("rock", getComputerChoice(getRandomzahl())))
console.log(game1 ("scissors", getComputerChoice(getRandomzahl())))
console.log(game1 ("paper", getComputerChoice(getRandomzahl())))
console.log(game1 ("rock", getComputerChoice(getRandomzahl())))
console.log(game1 ("scissors", getComputerChoice(getRandomzahl())))
console.log(game1 ("paper", getComputerChoice(getRandomzahl())))


