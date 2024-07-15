//if-else Statements

//Activity#01
const num1 = -12;
if (num1 > 0) {
  console.log("The number is positive");
} else if (num1 < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

//Activity#02
let a = 64;
let b = 66;
let c = 75;
if (a > b) {
  if (a > c) {
    console.log("largest number is ", a);
  }
} else if (b > a) {
  if (b > c) {
    console.log("largest number is ", b);
  } else {
    console.log("largest number is ", c);
  }
}

const number = 46;
let result = number % 2 === 0 ? "Even number" : "Odd Number";
console.log(`${number} is a ${result}`);
