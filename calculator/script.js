const num = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
const equalsTo = document.querySelector(".equals-to");
const clear = document.querySelector(".clear");

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, operator){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

function evaluate(array){
    const op1 = Number(array[0]);
    const op2 = Number(array[2]);
    const operator = array[1];
    const selected = document.querySelectorAll(".hover");
    selected.forEach((element) => element.classList.remove("hover"));
    return operate(op1, op2, operator);
}

function main(){
    let operationBuffer = []; //array che contiene operandi e operatori (max 3)
    let numString = '';
    //flag per evitare che il contenuto di numString venga riscritto nel buffer
    let = justEvaluated = false; 

    num.forEach((button) => {
        button.addEventListener("click", () => {
            numString += button.textContent;
            display.textContent = `${numString}`;
        });
    });

    operator.forEach((button) => {
        button.addEventListener("click", () => {
            if(!numString){
                return;
            }
            if(justEvaluated){
                operationBuffer = [];
                justEvaluated = false;
            }
            operationBuffer[operationBuffer.length] = `${numString}`;
            console.log(operationBuffer);

            if(operationBuffer.length === 3){
                const result = evaluate(operationBuffer).toString();
                operationBuffer = [result];
                numString = '';
                // console.log(result);
                display.textContent = `${result}`;
            }

            button.classList.add("hover");
            numString = ''; //resetta numString
            //aggiunge l'operatore al buffer
            operationBuffer[operationBuffer.length] = `${button.textContent}`;
        });
    });

    equalsTo.addEventListener("click", () => {
        operationBuffer[operationBuffer.length] = `${numString}`;
        if(operationBuffer.length < 3){
            //se il numero di operandi è inferiore a tre, fa il flush del
            //buffer per evitare bug ma mantiene numString per la 
            //prossima operazione
            display.textContent = `${numString}`;
            operationBuffer = [];
            return;
        }
        const result = evaluate(operationBuffer).toString();
        operationBuffer = [result];
        justEvaluated = true;
        numString = result;
        // console.log(result);
        display.textContent = `${result}`;

    });

    clear.addEventListener("click", () => {
        operationBuffer = [];
        numString = '';
        display.textContent = `0`;
    });
}
main();