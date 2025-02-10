let workingValue;
let totalValue;
let operator;

function add(a,b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a,b) {
    return parseInt(a) - parseInt(b);
}

function divide(a,b) {
    return parseInt(a) / parseInt(b);
}

function multiply(a,b) {
    return parseInt(a) * parseInt(b);
}

function operate() {
    console.log(equation);
}

function clear() {
    equation.textContent = "";
    workingValue = "";
    operator = "";
    totalValue = "";
}

equation = document.querySelector(".calculation-text");

numberButtons = document.querySelector(".number-section");
numberButtons.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case "zero":
            equation.textContent += "0";
            break;
        case "one":
            equation.textContent += "1";
            break;
        case "two":
            equation.textContent += "2";
            break;
        case "three":
            equation.textContent += "3";
            break;
        case "four":
            equation.textContent += "4";
            break;
        case "five":
            equation.textContent += "5";
            break;
        case "six":
            equation.textContent += "6";
            break;
        case "seven":
            equation.textContent += "7";
            break;
        case "eight":
            equation.textContent += "8";
            break;
        case "nine":
            equation.textContent += "9";
            break;
        case "clear":
            clear();
            break;
    }
});

operatorButtons = document.querySelector(".operator-section");
operatorButtons.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case "plus":
            operator = "+";
            break;
        case "minus":
            operator = "-";
            break;
        case "divide":
            operator = "/";
            break;
        case "multiply":
            operator = "*";
            break;
        case "equals":
            switch (operator) {
                case "+":
                    workingValue = add(workingValue,tempValue);
                    break;
                case "-":
                    workingValue = subtract(workingValue,tempValue);
                    break;
                case "/":
                    workingValue = divide(workingValue,tempValue);
                    
                    break;
                case "*":
                    workingValue = multiply(workingValue,tempValue);
                    
                    break;
                default:
                    break;
            }
            break;
    }
});