const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(divide(4, 6));

let a;
let b;
let operator;

const operate  = function(a, operator, b) {
    if (operator === "+") {
        return add(a, b);
    };
    if (operator === "-") {
        return subtract(a, b);
    };
    if (operator === "*") {
        return multiply(a, b);
    };
    if (operator === "-") {
        return divide(a, b);
    }
};

console.log(operate(1, "+", 4));

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
const clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
    display.textContent = "0";
})

num1.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "1";
    } else {
    display.textContent += "1";
    };
});

num2.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "2";
    } else {
    display.textContent += "2";
    };
});

num3.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "3";
    } else {
    display.textContent += "3";
    };
});

num4.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "4";
    } else {
    display.textContent += "4";
    };
});

num5.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "5";
    } else {
    display.textContent += "5";
    };
});

num6.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "6";
    } else {
    display.textContent += "6";
    };
});

num7.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "7";
    } else {
    display.textContent += "7";
    };
});

num8.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "8";
    } else {
    display.textContent += "8";
    };
});

num9.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = "9";
    } else {
    display.textContent += "9";
    };
});