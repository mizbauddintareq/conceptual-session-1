"use strict";
// Normal function
function add(num1, num2) {
    const sum = num1 + num2;
    return `Total ${sum}`;
}
console.log(add(10, 20));
// Arrow Function
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(5, 4));
