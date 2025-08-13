//0 = Rock 
//1 = Paper
//2 = Scissors

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
    let score = 0;
    let humanScore = 0;
    let computerScore = 0;
    let turn = 1;

    const para = document.createElement("p");
    document.body.appendChild(para);

    const rock = document.createElement("button");
    rock.textContent = "I choose rock!";
    rock.setAttribute("id", "rock");
    const paper = document.createElement("button");
    paper.textContent = "I choose paper!";
    paper.setAttribute("id", "paper");
    const scissors = document.createElement("button");
    scissors.textContent = "I choose scissors!";
    scissors.setAttribute("id", "scissors");
    const del = document.createElement("button");
    del.textContent = "Reset";
    del.setAttribute("id", "delete");

    para.appendChild(rock);
    para.appendChild(paper);
    para.appendChild(scissors);
    para.appendChild(del);

    const results = document.createElement("div");
    para.appendChild(results);

    del.addEventListener("click", () => {
        while(results.firstChild){
            results.removeChild(results.lastChild);
        }
    });

    rock.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        const humanChoice = "Rock";
        score = clash(humanChoice, computerChoice);
        const message = document.createElement("p");
        message.textContent = `Turn number ${turn}: you choose ${humanChoice} while 
                the computer choose ${computerChoice}\n`;
        results.appendChild(message);

        if(score === -1){
            computerScore++;
            const text = document.createElement("p");
            text.textContent = 
                `Computer won this round!
                Computer: ${computerScore}
                You: ${humanScore}`;
            results.appendChild(text);
        }

        if(score === 1){
            humanScore++;
            const text = document.createElement("p");
            text.textContent = 
                `You won this round!
                Computer: ${computerScore}
                You: ${humanScore}`;
            results.appendChild(text);
        }
        turn++;
    });

    scissors.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        const humanChoice = "Scissors";
        score = clash(humanChoice, computerChoice);
        const message = document.createElement("p");
        message.textContent = `Turn number ${turn}: you choose ${humanChoice} while 
                the computer choose ${computerChoice}\n`;
        results.appendChild(message);

        if(score === -1){
            computerScore++;
            const text = document.createElement("p");
            text.textContent = 
                `Computer won this round!
                Computer: ${computerScore}
                You: ${humanScore}`;
            results.appendChild(text);
        }

        if(score === 1){
            humanScore++;
            const text = document.createElement("p");
            text.textContent = 
                `You won this round!
                Computer: ${computerScore}
                You: ${humanScore}`;
            results.appendChild(text);
        }
        turn++;
    });

    paper.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        const humanChoice = "Paper";
        score = clash(humanChoice, computerChoice);
        const message = document.createElement("p");
        message.textContent = `Turn number ${turn}: you choose ${humanChoice} while 
                the computer choose ${computerChoice}\n`;
        results.appendChild(message);

        if(score === -1){
            computerScore++;
            const text = document.createElement("p");
            text.textContent = 
                `Computer won this round!
                Computer: ${computerScore}
                You: ${humanScore}`;
            results.appendChild(text);
        }

        if(score === 1){
            humanScore++;
            const text = document.createElement("p");
            text.textContent = 
                `You won this round!
                Computer: ${computerScore}
                You: ${humanScore}`;
            results.appendChild(text);
        }
        turn++;

        if(humanScore === 5 || computerScore === 5){
            while(results.firstChild){
                results.removeChild(results.lastChild);
            }
            if(humanScore === 5){
                const winMessage = document.createElement("p");
                winMessage.textContent = `YOU WON! CONGRATS!`;
                results.appendChild(winMessage);
            }
            else{
                const winMessage = document.createElement("p");
                winMessage.textContent = `Damn... computer won...`;
                results.appendChild(winMessage);
            }
        }
    });

}

const start = document.querySelector("#start");
start.addEventListener("click", playGame);