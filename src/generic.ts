type myArray<T> = Array<T>;

const myNumbers: myArray<number> = [12, 13, 14, 15, 16, 17];
const myNames: myArray<string> = ["abol", "babul", "Kabul"];
const myTrueFalse: myArray<boolean> = [true, false, false, true, false];

type DataType = { name: string; age: number };

const myInfo2: myArray<DataType> = [
  { name: "kalu", age: 23 },
  { name: "pagol", age: 43 },
  { name: "Abal", age: 30 },
];

// Tuple in generic

type TupleGeneric<X, Y, Z> = [X, Y, Z];

const myArray1: TupleGeneric<number, string, boolean> = [12, "sakib", false];
const myArray2: TupleGeneric<string, string, number> = ["1", "2", 2];

// Generic in function

const printInfo = <X, Y>(param1: X, param2: Y): void => {
  console.log(`Param1: ${param1} Param2: ${param2}`);
};

printInfo<string, number>("Habib", 23);
printInfo<number, boolean>(23, false);

// Generic in interface
interface IMyInfoGen<X, Y> {
  name: string;
  age: X;
  mark: Y;
}

const myInfo3: IMyInfoGen<number, string> = {
  name: "Mizba",
  age: 23,
  mark: "2.3",
};

type MyMovie = {
  name: string;
  duration: number;
  budget: string;
};

type MyMovieType = keyof MyMovie;

const myMovieData: MyMovie = {
  name: "Omg",
  duration: 2.3,
  budget: "2 core",
};

const data: MyMovieType = "duration";
console.log(myMovieData[data]);
