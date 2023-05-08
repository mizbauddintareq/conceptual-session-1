"use strict";
// Spread Operator
const heroArr1 = ["alom", "sakib", "bappi"];
const heroArr2 = ["manna", "sani", "faruk"];
const mixedArr = [...heroArr1, ...heroArr2];
// console.log(mixedArr);
heroArr1.push(...heroArr2);
// console.log(heroArr1);
// Rest Parameter
const scoreCount = (...score) => {
    let total = 0;
    score.map((number) => {
        total += number;
    });
    return total;
};
console.log(scoreCount(1, 2, 3, 4, 10));
const names = (...params) => {
    params.map((n) => console.log(n));
};
names("abul", "babul", "kabul");
