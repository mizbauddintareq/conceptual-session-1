// Null
const myText = (text: string | null): void => {
  if (typeof text === null) {
    console.log("I have no text");
  } else {
    console.log(text);
  }
};
// myText(null);
// myText("I have something");

// Unknown
const myGuess = (guess: unknown): void => {
  if (typeof guess === "number") {
    console.log(`I am number ${guess}`);
  } else if (typeof guess === "string") {
    console.log(`I am string ${guess}`);
  } else if (typeof guess === "boolean") {
    console.log(`I am boolean ${guess}`);
  } else {
    console.log(`Please input something`);
  }
};
myGuess(undefined);
