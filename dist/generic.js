"use strict";
const myNumbers = [12, 13, 14, 15, 16, 17];
const myNames = ["abol", "babul", "Kabul"];
const myTrueFalse = [true, false, false, true, false];
const myInfo2 = [
    { name: "kalu", age: 23 },
    { name: "pagol", age: 43 },
    { name: "Abal", age: 30 },
];
const myArray1 = [12, "sakib", false];
const myArray2 = ["1", "2", 2];
// Generic in function
const printInfo = (param1, param2) => {
    console.log(`Param1: ${param1} Param2: ${param2}`);
};
printInfo("Habib", 23);
printInfo(23, false);
const myInfo3 = {
    name: "Mizba",
    age: 23,
    mark: "2.3",
};
const myMovieData = {
    name: "Omg",
    duration: 2.3,
    budget: "2 core",
};
const data = "duration";
console.log(myMovieData[data]);
