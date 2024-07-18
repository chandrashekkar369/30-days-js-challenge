//Activity#01
function checkEvenOrOdd(n) {
  if (n % 2 == 0) {
    return "Even";
  }
  return "Odd";
}

const num1 = 106;
console.log(`The number ${num1} is ${checkEvenOrOdd(num1)}`);

function squareOfNumber(n) {
  return n ** 2;
}
const num2 = 16;
console.log(`The square of number ${num2} is ${squareOfNumber(num2)}`);

//Activity#02
function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2 === 0) {
    return n1;
  }
  return n2;
}

const num3 = 106;
const num4 = 107;
console.log(
  `The largest of numbers ${num3} and ${num4} is ${maxOfTwoNumbers(num3, num4)}`
);

function concateTwoStrings(str1, str2) {
  return str1 + str2;
}

const str1 = "National";
const str2 = "Anthem";
console.log(
  `The concatanetion of string "${str1}" and "${str2}" is "${concateTwoStrings(
    str1,
    str2
  )}"`
);

//Activity#03
const sumOfTwoNumbers = (n1, n2) => {
  return n1 + n2;
};

const num5 = 106;
const num6 = 107;
console.log(
  `The sum of numbers ${num5} and ${num6} is ${sumOfTwoNumbers(num5, num6)}`
);

const checkCharInString = (str, chr) => {
  if (str.includes(chr)) {
    return true;
  }
  return false;
};

const str = "India";
const chr = "x";
console.log(
  `The character ${chr} present in string ${str}: ${checkCharInString(
    str,
    chr
  )}`
);

//Activity#04
const productOfTwoNumbers = (n1, n2 = 6) => {
  return n1 * n2;
};

const num7 = 10;
const num8 = 5;
console.log(
  `The product of numbers ${num7} and ${num8} is ${productOfTwoNumbers(
    num7,
    num8
  )}`
);

const greetingMessage = (name, age = 10) => {
  return `Hello ${name}, you are ${age} years old!`;
};

const name1 = "Shreya";
const age1 = 5;
console.log(`${greetingMessage(name1, age1)}`);

//Activity#05
const HOC_1 = (func, n2 = 6) => {
  for (let i = 0; i < n2; i++) {
    func();
  }
};

function func4() {
  console.log("Hello my friends!");
}
HOC_1(func4, 3);

const HOC_2 = (f1, f2, n2) => {
  return f2(f1(n2));
};

function func1(n) {
  return n ** 2;
}

function func2(m) {
  return m ** 3;
}
console.log(`${HOC_2(func1, func2, 3)}`);
