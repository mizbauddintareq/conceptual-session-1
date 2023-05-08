const heroInfo: {
  name: string;
  age: number;
  isMarried: boolean;
  readonly wife: number;
} = {
  name: "sakib",
  age: 32,
  isMarried: true,
  wife: 2,
};

heroInfo.name = "sakib Khan";
console.log(heroInfo);
