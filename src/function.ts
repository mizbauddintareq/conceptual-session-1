// Normal function
function add(num1: number, num2: number): string {
  const sum = num1 + num2;
  return `Total ${sum}`;
}
console.log(add(10, 20));

// Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addArrow(5, 4));
