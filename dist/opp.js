"use strict";
// create a class
class MyInfoClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const A = new MyInfoClass("Mizba", 23);
console.log(A);
// inheritance
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
class Person2 extends Person1 {
    constructor(name, age, position, salary) {
        super(name, age);
        this.position = position;
        this.salary = salary;
    }
    show() {
        console.log(`Name: ${this.name} Age: ${this.age} Position: ${this.position} Salary: ${this.salary}`);
    }
}
const p = new Person2("Aboul", 23, "Nayok", 29748585);
console.log(p.show());
