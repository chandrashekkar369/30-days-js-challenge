// Day 12: Error Handling Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate
//   message to the console.
function dummyFunction() {
  throw new Error("Intentionally thown error!");
}

function handleError() {
  try {
    dummyFunction();
  } catch (message) {
    console.error(message);
  }
}
handleError();

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero.
//    Use a try-catch block to handle this error.
function divide2Numbers(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero error!");
  }
  return a / b;
}
console.log("Result of division: ", divide2Numbers(10, 4));

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and
//   finally blocks to observe the execution flow.
function divideTwoNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Divide by zero error occured!");
    }
    return a / b;
  } catch (message) {
    console.error(message);
  } finally {
    console.log("operation done!");
  }
}
console.log("Result of division: ", divideTwoNumbers(10, 5));

//Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function
//   and handle it using a try-catch block.
class customErrorHandler extends Error {
  constructor(errorMessage, errorCode) {
    super(errorMessage);
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }
}

function newDivideTwoNumbers(a, b) {
  try {
    if (b === 0) {
      throw new customErrorHandler("Divide by zero error occured!", 1001);
    }
    return a / b;
  } catch (error) {
    if (error instanceof customErrorHandler) {
      console.log(
        `Error message: ${error.errorMessage}, Error code: ${error.errorCode}`
      );
    } else {
      console.error(error.message);
    }
  } finally {
    console.log("operation done!");
  }
}
console.log("Result of division: ", newDivideTwoNumbers(9, 0));

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the
//  validation fails. Handle the custom error using a try-catch block.
class validateError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

function validateInput(input) {
  if (typeof input !== "string") {
    throw new validateError("invalid type of input, enter a valid number!");
  }
  if (input.trim() === "") {
    throw new validateError("invalid type of input, enter a valid number!");
  }
  return true;
}

function validateUserInput(input) {
  try {
    validateInput(input);
    console.log(`${input} is a valid input!`);
  } catch (error) {
    if (error instanceof validateError) {
      console.log(error.message);
    } else {
      console.error(error.message);
    }
  }
}
validateUserInput("india");
validateUserInput("");
validateUserInput(25);

// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message
//  to the console.
let task6PromiseAndErrorHandling = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise rejected due to an error!");
  }, 2000);
});
task6PromiseAndErrorHandling.catch((errorMessage) => {
  //   console.error(errorMessage);
});
// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error
// message.
const task7Promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        "Promise rejected due to timeout using async-await and try-catch!"
      );
    }, 3000);
  });
const task7Funmction = async () => {
  try {
    const result = await task7Promise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
// task7Funmction();
// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message
//   to the console.
const task7ApiUrl = "https://jsonplaceholder.typicode.com/invalidendpoint";

fetch(task7ApiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("server down!");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  });

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch.
//   Log an appropriate error message.
const task8ApiUrl = "https://jsonplaceholder.typicode.com/invalidendpoint";
const fetchApi = async () => {
  try {
    const response = await fetch(task8ApiUrl);
    if (!response.ok) {
      throw new Error("invalid url!");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};
fetchApi();
