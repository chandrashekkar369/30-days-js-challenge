//Activity#01
const arr1 = [1, 2, 3, 4, 5];
console.log("Displaying array contents");
arr1.forEach((element, index) => {
  console.log(`Index ${index} element of an array is ${element}`);
});
console.log("#########################################");

console.log("Displaying first and last element of an array");
const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(`First element of an array is ${arr2.at(0)}`);
console.log(`Last element of an array is ${arr2.at(arr2.length - 1)}`);
console.log("#########################################");

//Activity#02
const arr3 = [1, 2, 3, 4, 5];
arr3.push(9);
console.log("Displaying elements of an array after push operation");
arr3.forEach((element, index) => {
  console.log(
    `Index ${index} element of an updated array after push is ${element}`
  );
});
console.log("#########################################");

const arr4 = [1, 2, 3, 4, 5];
arr4.pop();
console.log("Displaying elements of an array after pop operation");
arr4.forEach((element, index) => {
  console.log(
    `Index ${index} element of an updated array after pop is ${element}`
  );
});
console.log("#########################################");

const arr5 = [1, 2, 3, 4, 5];
arr5.shift();
console.log("Displaying elements of an array after shift operation");
arr5.forEach((element, index) => {
  console.log(
    `Index ${index} element of an updated array after shift is ${element}`
  );
});
console.log("#########################################");

const arr6 = [1, 2, 3, 4, 5];
arr6.unshift();
console.log("Displaying elements of an array after unshift operation");
arr6.forEach((element, index) => {
  console.log(
    `Index ${index} element of an updated array after unshift is ${element}`
  );
});
console.log("#########################################");

//Activity#03 - Array Methods
const arr7 = [1, 2, 3, 4, 5];
console.log("Using map method on an array to get double of each value");
const arr8 = arr7.map((element) => element * 2);
arr8.forEach((element, index) => {
  console.log(
    `Index ${index} element of an updated array after applying map method is ${element}`
  );
});
console.log("#########################################");

const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Using filter method on an array to get even value elements");
const arr10 = arr9.filter((element) => element % 2 == 0);
arr10.forEach((element, index) => {
  console.log(
    `Index ${index} element of an updated array after applying filter method is ${element}`
  );
});
console.log("#########################################");

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Using reduce method on an array to sum of all the elements");
const initialValue = 0;
const arr12 = arr11.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(`Sum of all elements of given array ${arr11} is ${arr12}`);
console.log("#########################################");

//Activity#03 - Array Iteration
const arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Displaying elements of an array using for loop");
for (let i = 0; i < arr13.length; i++) {
  console.log(`Element ${i} of the given array is ${arr13[i]}`);
}
console.log("#########################################");

const arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Displaying elements of an array using forEach method");
arr14.forEach((element, index) =>
  console.log(`Element ${index} of the given array is ${element}`)
);
console.log("#########################################");

//Activity#03 - Multidimensional array
const array2D = [];
const row = 3;
const col = 3;
console.log("Displaying elements of a 2D array");
for (let i = 0; i < row; i++) {
  array2D[i] = [];
  for (let j = 0; j < col; j++) {
    array2D[i][j] = i + j;
  }
}
console.log(`The 2 dimensional array is `, array2D);
console.log("#########################################");

const array2D1 = [];
const row1 = 1;
const col1 = 2;
console.log("Displaying particular elements of a 2D array");
for (let i = 0; i < row; i++) {
  array2D1[i] = [];
  for (let j = 0; j < col; j++) {
    array2D1[i][j] = i + j;
  }
}
console.log(`The 2 dimensional array is `, array2D1);
console.log(
  `The element at row ${row1} and column ${col1} is`,
  array2D1[row1][col1]
);
console.log("#########################################");
