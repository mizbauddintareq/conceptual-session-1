// create a class
class MyInfoClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const A = new MyInfoClass("Mizba", 23);
console.log(A);

// inheritance

class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}

class Person2 extends Person1 {
  position: string;
  salary: number;

  constructor(name: string, age: number, position: string, salary: number) {
    super(name, age);
    this.position = position;
    this.salary = salary;
  }

  show() {
    console.log(
      `Name: ${this.name} Age: ${this.age} Position: ${this.position} Salary: ${this.salary}`
    );
  }
}

const p = new Person2("Aboul", 23, "Nayok", 29748585);
console.log(p.show());
