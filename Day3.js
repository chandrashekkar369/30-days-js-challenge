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

const age = 18;
if (age >= 18) {
  console.log("person is eligible to vote");
} else {
  console.log("person is not eligible to vote");
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

//Activity#03
const day = 5;
switch (day) {
  case 1:
    console.log("Day of the week is Monday");
    break;
  case 2:
    console.log("Day of the week is Tuesday");
    break;
  case 3:
    console.log("Day of the week is Wednesday");
    break;
  case 4:
    console.log("Day of the week is Thursday");
    break;
  case 5:
    console.log("Day of the week is Friday");
    break;
  case 6:
    console.log("Day of the week is Saturday");
    break;
  case 7:
    console.log("Day of the week is Sunday");
    break;
}

const score = 80;
switch (true) {
  case score < 35:
    console.log("Grade is F");
    break;
  case score >= 35 && score < 60:
    console.log("Grade is D");
    break;
  case score >= 60 && score < 70:
    console.log("Grade is C");
    break;
  case score >= 70 && score < 80:
    console.log("Grade is B");
    break;
  case score >= 80 && score < 100:
    console.log("Grade is A");
    break;
}

//Activity#03
const number = 46;
let result = number % 2 === 0 ? "Even number" : "Odd Number";
console.log(`${number} is a ${result}`);

//Activity#04
const year = 2004;
if (year % 4 === 0) {
  if (year % 100 !== 0 || year % 400 === 0) {
    console.log(`The ${year} is a leap year!`);
  }
} else {
  console.log(`The ${year} is not a leap year!`);
}
