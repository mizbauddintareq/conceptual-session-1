type HeroIncomeType = number | string;
const heroIncome: HeroIncomeType = 23;
const heroIncome2: HeroIncomeType = "40";

type HerosType = {
  name: string;
  age: number;
};
const hero3: HerosType = {
  name: "alom",
  age: 24,
};
const hero4: HerosType = {
  name: "jalil",
  age: 40,
};
const hero5: HerosType = {
  name: "sakib",
  age: 45,
};

type ArrType = string[];

const favHero: ArrType = ["abul", "kabul", "mabul", "sabul"];

type TupleType = [boolean, string, number, object];
const mixedTuple: TupleType = [false, "hello", 23, { name: "mia", age: 23 }];
