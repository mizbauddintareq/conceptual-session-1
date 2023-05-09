type FriendsType = {
  friend1: string;
  friend2: string;
  friend3: string;
  friend4: string;
};

type FriendsTypeReadOnly = {
  readonly [key in keyof FriendsType]: FriendsType[key];
};

const friends1: FriendsTypeReadOnly = {
  friend1: "Mizba",
  friend2: "abul",
  friend3: "Babul",
  friend4: "kabul",
};

// friends1.friend2 = "Mamam"
