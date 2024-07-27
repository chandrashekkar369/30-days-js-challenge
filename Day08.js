//Activity#01 Template Literals use
const name = "Rahul";
const age = 33;
console.log(`${name} is ${age} years old!`);

const str1 = `Hi bro,
what do you do?
Where are you from?`;
console.log("displaying multiline string:", str1);

//Activity#02
//1. Array Destructuring
let a, b, rest;
const arr1 = [10, 20, 30, 40, 50];
[a, b, ...rest] = arr1;
console.log("first element extracted using destructuring:", a);
console.log("second element extracted using destructuring:", b);

//2. Object Destructuring
const obj1 = {
  x: "cab",
  y: "33",
};

const { x, y } = obj1;
console.log("example of object destructuring:");
console.log(x);
console.log(y);

//Activity#03
//1. Spread operator
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [...arr2, 60, 70, 80];
console.log("using rest operator with array:");
console.log(arr3);

//2. Rest operator
const arr4 = [10, 20, 30, 40, 50];
function usingRestOperator(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

const result = usingRestOperator(10, 20, 30, 40, 50);
console.log("result: ", result);

//Activity#04
//1. Default Parameters
function productOfTwoNumbers(a, b = 1) {
  return a * b;
}
console.log("result: ", productOfTwoNumbers(18));

//Activity#05
//1. Enhanced Object literals
let model = "Dell 4503";
let price = "65789";
let year = "2024";
let showProduct = () => {
  console.log(`${model} made in ${year} costing ${price}`);
};
const laptop = {
  model,
  price,
  year,
  showProduct,
};
console.log(laptop);
//2. Enhanced Object literals
function getProduct(model, price, year) {
  return {
    model,
    price,
    year,
  };
}
console.log(getProduct("Dell 4503", "65789", "2024"));
