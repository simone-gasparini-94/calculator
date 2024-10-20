const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equals = document.querySelector("#equals");

let operator = null;
let firstNumber = null;
let secondNumber = null;
let result = null;

const updateDisplay = (value) => {
    if (display.textContent === "0" || display.textContent === operator) {
        display.textContent = value;
    } else {
    display.textContent += value;
    };
};

const createFirstNumber = (symbol) => {
    if (firstNumber !== null && operator !== null) {
        createSecondNumber();
        createResult();
    };
    firstNumber = parseFloat(display.textContent);
    operator = symbol;
    display.textContent = operator;
    console.log("first number: ", firstNumber);
    console.log("operator: ", operator);
};

const createSecondNumber = () => {
    secondNumber = parseFloat(display.textContent);
    if (isNaN(secondNumber)) {
        secondNumber = 0;
    }
    console.log("second number: ", secondNumber);
};

const createResult = () => {
    let result;
    console.log("first number: ", firstNumber);
    console.log("second number: ", secondNumber);
    console.log("operator: ", operator);

    if (operator === null) {
        result = secondNumber;
    };
    if (operator === "+") {
        result = firstNumber + secondNumber;
    };
    if (operator === "-") {
        result = firstNumber - secondNumber;
    };
    if (operator === "*") {
        result = firstNumber * secondNumber;
    };
    if (operator === "/") {
        result = firstNumber / secondNumber;
    };

    display.textContent = result;
    console.log("result: ", result);
    firstNumber = result;
    secondNumber = null;
    operator = null;
    console.log("first number: ", firstNumber);
    console.log("second number: ", secondNumber);
};

equals.addEventListener("click", () => {
    createSecondNumber();
    createResult();
});

plus.addEventListener("click", () => {
    createFirstNumber("+");
});

minus.addEventListener("click", () => {
    createFirstNumber("-");
});

multiplication.addEventListener("click", () => {
    createFirstNumber("*");
});

division.addEventListener("click", () => {
    createFirstNumber("/");
});

clear.addEventListener("click", () => {
    display.textContent = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    console.log("first number: ", firstNumber);
    console.log("second number: ", secondNumber);
    console.log("operator: ", operator);

});

num0.addEventListener("click", () => {
    updateDisplay(0);
});

num1.addEventListener("click", () => {
    updateDisplay(1);
});

num2.addEventListener("click", () => {
    updateDisplay(2);
});

num3.addEventListener("click", () => {
    updateDisplay(3);
});

num4.addEventListener("click", () => {
    updateDisplay(4);
});

num5.addEventListener("click", () => {
    updateDisplay(5);
});

num6.addEventListener("click", () => {
    updateDisplay(6);
});

num7.addEventListener("click", () => {
    updateDisplay(7);
});

num8.addEventListener("click", () => {
    updateDisplay(8);
});

num9.addEventListener("click", () => {
    updateDisplay(9);
});