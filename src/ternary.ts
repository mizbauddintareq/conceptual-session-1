const isAdmin: boolean = false;
const checkAdmin = isAdmin ? "Welcome admin" : "unauthorized";
// console.log(checkAdmin);

// nullish
const inputSomething: unknown = 3;

const checkInput = inputSomething ?? "No input";

console.log(checkInput);
