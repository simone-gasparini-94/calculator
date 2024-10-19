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

