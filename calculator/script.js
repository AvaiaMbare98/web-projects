const num = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
const equalsTo = document.querySelector(".equals-to");

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
    return operate(op1, op2, operator);
}

function main(){
    let operationArray = [];
    let operatorString = '';
    let numString = '';

    num.forEach((button) => {
        button.addEventListener("click", () => {;
            numString += button.textContent;
            display.textContent = `${numString}`;
        });
    });

    operator.forEach((button) => {
        button.addEventListener("click", () => {
            if(!numString){
                return;
            }
            operationArray[operationArray.length] = `${numString}`;
            console.log(operationArray);

            if(operationArray.length === 3){
                const result = evaluate(operationArray).toString();
                operationArray = [result];
                numString = '';
                console.log(result);
                display.textContent = `${result}`;
            }

            button.classList.add("hover");
            numString = ''; //resetta numString
            operatorString = button.textContent;
            console.log(operatorString);
            operationArray[operationArray.length] = `${operatorString}`;
        });
    });

    equalsTo.addEventListener("click", () => {
        if(operationArray.length < 3){
            return;
        }


    });
}
main();