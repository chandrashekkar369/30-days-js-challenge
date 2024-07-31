// Day 13: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules
// • Task 1: Create a module that exports a function to add two numbers.
//   Import and use this module in another script.
function task1Add2Numbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("input must be of number type only!");
  }
  return a + b;
}

// • Task 2: Create a module that exports an object representing a person with properties and methods.
//   Import and use this module in another script.
const task2Object = {
  name: "shekhar",
  email: "shekhar@gmail.com",
  age: "33",
};
// Activity 2: Named and Default Exports
// • Task 3: Create a module that exports multiple functions using named exports.
//   Import and use these functions in another script.
function task1Subtract2Numbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("input must be of number type only!");
  }
  return a - b;
}
// • Task 4: Create a module that exports a single function using default export.
//   Import and use this function in another script.
function task1Multiply2Numbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("input must be of number type only!");
  }
  return a * b;
}

// Activity 3: Importing Entire Modules
// • Task 5: Create a module that exports multiple constants and functions.
//   Import the entire module as an object in another script and use its properties.
//already done with above tasks 1,2 and 3

// Activity 4: Using Third-Party Modules
// • Task 6: Install a third-party module (e.g., lodash) using npm.
//   Import and use a function from this module in a script.
import pkg from "lodash";
const { compact } = pkg;
let arr = [1, null, 3, null, 5];
let res = compact(arr);
console.log(res);

// • Task 7: Install a third-party module (e.g., axios) using npm.
//   Import and use this module to make a network request in a script.
// Import the 'axios' module
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts/1";
axios
  .get(url)
  .then((response) => {
    console.log("Data:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a
//   single file. Write a script to demonstrate the bundling process.

export { task1Add2Numbers, task2Object, task1Subtract2Numbers };
export default task1Multiply2Numbers;
