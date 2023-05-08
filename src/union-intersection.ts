type HeroTypeA = {
  name: string;
  age: number;
};
type HeroTypeB = {
  position: string;
  salary: number;
};

type HeroTypeC = HeroTypeA &
  HeroTypeB & {
    movies: object;
    review: [string, number, boolean];
  };

const heroInfo1: HeroTypeC = {
  name: "Alom",
  age: 23,
  position: "Nayok",
  salary: 2300,
  movies: {
    name: "gorucodA",
    age: 23,
  },
  review: ["aboul", 22, false],
};

const heroInfo2: HeroTypeA | HeroTypeB = {
  name: "Mizba",
  age: 23,
  position: "nayok",
  salary: 5000,
};
