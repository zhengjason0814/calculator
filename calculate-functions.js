let workingValue;
let totalValue;
let operator;
let resetDisplay = false;

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
    if (workingValue === "" || totalValue === "") {
        return;
    }
    switch (operator) {
        case "+":
            totalValue = add(totalValue,workingValue);
            equation.textContent = totalValue;
            workingValue = "";
            break;
        case "-":
            totalValue = subtract(totalValue,workingValue);
            equation.textContent = totalValue;
            workingValue = "";
            break;
        case "/":
            if (workingValue == "0" || totalValue == "0") {
                clear();
                equation.textContent = "Divide by 0 Error";
                resetDisplay = true;
                return;
            }
            totalValue = divide(totalValue,workingValue);
            equation.textContent = totalValue;
            workingValue = "";
            break;
        case "*":
            totalValue = multiply(totalValue,workingValue);
            equation.textContent = totalValue;
            workingValue = "";
            break;
        default:
            break;
    }
}

function clear() {
    equation.textContent = "";
    workingValue = "";
    operator = "";
    totalValue = "";
    resetDisplay = false;
}

equation = document.querySelector(".calculation-text");

numberButtons = document.querySelector(".number-section");
numberButtons.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case "zero":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "0";
            workingValue = equation.textContent;    
            break;
        case "one":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "1";
            workingValue = equation.textContent;
            break;
        case "two":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "2";
            workingValue = equation.textContent;
            break;
        case "three":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "3";
            workingValue = equation.textContent;
            break;
        case "four":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "4";
            workingValue = equation.textContent;
            break;
        case "five":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "5";
            workingValue = equation.textContent;
            break;
        case "six":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "6";
            workingValue = equation.textContent;
            break;
        case "seven":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "7";
            workingValue = equation.textContent;
            break;
        case "eight":
            if (resetDisplay === true) {
                equation.textContent = "";
                resetDisplay = false;
            }
            equation.textContent += "8";
            workingValue = equation.textContent;
            break;
        case "nine":
            if (resetDisplay == true) {
                equation.textContent = "";
                resetDisplay == false;
            }
            equation.textContent += "9";
            workingValue = equation.textContent;
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
            if (totalValue === "" && operator === "") {
                totalValue = workingValue;
                workingValue = "";
            } else if (operator !== "") {
                operate();
            }
            operator = "+";
            break;
        case "minus":
            if (totalValue === "" && operator === "") {
                totalValue = workingValue; 
                workingValue = "";
            } else if (operator !== "") {
                operate();
            }
            operator = "-";
            break;
        case "divide":
            if (totalValue === "" && operator === "") {
                totalValue = workingValue;
                workingValue = "";
            } else if (operator !== "") {
                operate();
            }
            operator = "/";
            break;
        case "multiply":
            if (totalValue === "" && operator === "") {
                totalValue = workingValue;
                workingValue = "";
            } else if (operator !== "") {
                operate();
            }
            operator = "*";
            break;
        case "equals":
            operate();
            break;
    }
    resetDisplay = true;
});