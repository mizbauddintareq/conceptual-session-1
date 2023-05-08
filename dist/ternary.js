"use strict";
const isAdmin = false;
const checkAdmin = isAdmin ? "Welcome admin" : "unauthorized";
// console.log(checkAdmin);
// nullish
const inputSomething = 3;
const checkInput = inputSomething !== null && inputSomething !== void 0 ? inputSomething : "No input";
console.log(checkInput);
