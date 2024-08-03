// Day 15: Closures
// Tasks/Activities:

// Activity 1: Understanding Closures
// • Task 1: Write a function that returns another function, where the inner function accesses a variable
//   from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
  let b = 10;
  return function innerFunction() {
    return 20 + b;
  };
}
console.log(outerFunction()());
// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get
//   the current value of the counter.
function counter() {
  let count = 0;
  return function incrementCount() {
    return (count += 1);
  };
}
console.log(counter()());

// Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated
//   ID and increment it with each call.
function uniqueIdGenerator() {
  let idCollection = new Set();
  function generateUnicId() {
    let Id;
    do {
      Id = Math.round(Math.random() * 10000000);
    } while (idCollection.has(Id));
    idCollection.add(Id);
    return Id;
  }
  function getIdCollection() {
    return Array.from(idCollection); // Return the collection as an array
  }
  return {
    generateUnicId,
    getIdCollection,
  };
}

const idGen = uniqueIdGenerator();
console.log(idGen.generateUnicId());
console.log(idGen.getIdCollection());

// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
//   Note: The outer function captures(input parameter) the input variable, The inner function uses the captured input
function captureUserName(name) {
  function greetUserName() {
    return `Hello ${name}!, How are you?`;
  }
  return greetUserName();
}
console.log(captureUserName("name"));

// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called.
//   Use a closure to ensure each function logs the correct index.
function createArrayOfFunctions(count) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    function logIndex(index) {
      function checkIndex() {
        console.log(index);
      }
      return checkIndex();
    }
    arr.push(logIndex(i));
  }
  return arr;
}

const arrayFunctions = createArrayOfFunctions(5);
for (let i = 0; i < arrayFunctions.length; i++) {
  arrayFunctions[i]; // Logs: 0, 1, 2, 3, 4
}
//Activity 4: Module Pattern
// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to
//   add, remove, and list items.
function collectionOfItems() {
  let arr = [];
  return {
    addItem: function addItems(item) {
      if (arr.includes(item)) {
        console.log(`${item} already exists!`);
      }
      arr.push(item);
    },

    removeItem: function addItems(item) {
      const index = arr.indexOf(item);
      if (index === -1) {
        console.log(`${item} does not exist!`);
      }
      arr.splice(index, 1);
    },

    listItem: function listItems() {
      if (arr.length === 0) {
        console.log(`No item to list`);
      }
      arr.forEach((value, index) => {
        console.log(`Element${index} = ${value}`);
      });
    },
  };
}
const itemCollection = collectionOfItems();
itemCollection.addItem("mango");
itemCollection.addItem("banana");
itemCollection.addItem("strawberry");
itemCollection.removeItem("banana");
itemCollection.listItem();

// Activity 5: Memoization
// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the
//   results of previous computations.

function memoizer(func) {
  let cache = new Map();
  return function computator(...args) {
    const key = JSON.stringify(args); //if args = 1,2,4 then this gives key = "[1,2,4]"
    if (cache.has(key)) {
      console.log("Cache hit for:", key);
      return cache[key];
    }
    console.log("Cache miss for:", key);
    const value = func(...args);
    cache.set(key, value); //{"[1,2,4]"=>value} an entry in map
    console.log(cache);
    return value;
  };
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function aggregator(...args) {
  // console.log(typeof args); //object type
  // const keys = JSON.stringify(args);
  // console.log(typeof keys); // string type
  return args.reduce((sum, val) => sum + val, 0);
}
const memoizedAggregator = memoizer(aggregator);
const memoizedFibonacci = memoizer(fibonacci);
console.log("memoizedAggregator: ", memoizedAggregator(2, 34, 5, 6));
console.log("memoizedAggregator: ", memoizedAggregator(2, 34, 5, 6, 8, 90));
console.log("memoizedAggregator: ", memoizedAggregator(2, 34, 5, 6));
console.log("memoizedFibonacci(6): ", memoizedFibonacci(6));
console.log("memoizedFibonacci(5): ", memoizedFibonacci(5));
console.log("memoizedFibonacci(4): ", memoizedFibonacci(6));

// • Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
const memoizedFactorial = memoizer(factorial);
console.log("memoizedFactorial(6): ", memoizedFactorial(6));
console.log("memoizedFactorial(5): ", memoizedFactorial(5));
console.log("memoizedFactorial(4): ", memoizedFactorial(6));
