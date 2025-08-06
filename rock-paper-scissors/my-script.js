//0 = Rock 
//1 = Paper
//2 = Scissors

let choice;
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let turn = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let number = getRandomInt(3);
    if(number === 0) {
        return "Rock";
    }
    else if(number === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Select a number between 0 and 2\n0 = Rock\n1 = Paper\n2 = Scissors");
    
    let choice = parseInt(input);
    switch(choice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default:
            alert("Wrong choice, please select an integer between 0 and 2");
    }
}

function clash(human, computer) { //funzione che restituisce -1, 0 o 1: -1 punto per il computer, 0 pari, 1 punto dell'umano
    if(human === "Rock") {

        if(computer === "Rock")
            return 0;
        else if(computer === "Scissors")
            return 1;
        else //computer === "Paper"
            return -1;

    }
    else if(human === "Paper") {

        if(computer === "Rock")
            return 1;
        else if(computer === "Scissors")
            return -1;
        else //computer === "Paper"
            return 0;

    }
    else { //human === "Scissors"

        if(computer === "Rock")
            return -1;
        else if(computer === "Scissors")
            return 0;
        else //computer === "Paper"
            return 1;

    }
}

function playGame(){
    while(humanScore < 3 && computerScore < 3){
        let message = `Round number ${turn+1}!`
        console.log(message);
    
        humanChoice = getHumanChoice(); 
        if(humanChoice === "Rock" || 
            humanChoice === "Paper" || 
            humanChoice === "Scissors"){
            computerChoice = getComputerChoice();
        
            message = `You choose ${humanChoice} while 
                    the computer choose ${computerChoice}`;
            console.log(message);
        
            let score = clash(humanChoice, computerChoice);
            if(score === 1){
                humanScore++;
                message = `Hooray, you won a round!\nYour score: 
                        ${humanScore}\nComputer score: ${computerScore}`;
                console.log(message);
            }
            else if(score === -1){
                computerScore++;
                message = `Damn, computer won a round!\nYour score: 
                        ${humanScore}\nComputer score: ${computerScore}`;
                console.log(message);
            }
    
            turn++;
        }
    
    }
    if(humanScore === 3) console.log(`Congrats! You won!`);
    if(computerScore === 3) console.log(`Damn... you lost...`);

}

const button = document.getElementById('start');
button.addEventListener('click', playGame);