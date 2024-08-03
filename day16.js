// Day 16: Recursion
// Tasks/Activities:

// Activity 1: Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number.
// Log the result for a few test cases.
function factorial(num) {
  if (num < 0) {
    throw new Error("Factorial of negative number does not exists!");
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(`factorial(5): ${factorial(5)}`);
console.log(`factorial(6): ${factorial(6)}`);
// • Task 2: Write a recursive function to calculate the nth Fibonacci number.
// Log the result for a few test cases.
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(`fibonacci(5): ${fibonacci(5)}`);
console.log(`fibonacci(6): ${fibonacci(6)}`);

// Activity 2: Recursion with Arrays
// • Task 3: Write a recursive function to find the sum of all elements in an array.
// Log the result for a few test cases.
function arraySumRecursive(arr) {
  console.log(arr);
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arraySumRecursive(arr.slice(1)); //slice(1) removes 1st element from array
}
let arr1 = [1, 5, 7, 8, 4, 3];
console.log(arraySumRecursive(arr1));

// • Task 4: Write a recursive function to find the maximum element in an array.
// Log the result for a few test cases.
function maxElementInArray(arr) {
  if (arr.length === 0) {
    return -Infinity;
  }
  let max = arr[0];
  arr.shift();
  let maxInRest = maxElementInArray(arr);
  if (max > maxInRest) {
    return max;
  } else {
    return maxInRest;
  }
}
console.log(maxElementInArray(arr1));

// Activity 3: String Manipulation with Recursion
// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString1(str) {
  if (str === "") {
    return "";
  }
  return reverseString1(str.substring(1)) + str.charAt(0);
}
console.log(reverseString1("black"));

function reverseString2(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseString2(str.slice(1)) + str[0];
}
console.log(reverseString2("black"));

// • Task 6: Write a recursive function to check if a string is a palindrome.
// Log the result for a few test cases.
function checkPaliandrome(str) {
  const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (normalizedStr.length === 1) {
    return true;
  }
  if (
    normalizedStr.charAt(0) !== normalizedStr.charAt(normalizedStr.length - 1)
  ) {
    return false;
  }
  return checkPaliandrome(normalizedStr.slice(1, -1));
}
console.log(checkPaliandrome("racecar"));
console.log(checkPaliandrome("hello"));

// Activity 4: Recursive Search
// • Task 7: Write a recursive function to perform a binary search on a sorted array.
// Log the index of the target element for a few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  }

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1); // Search left half
  } else {
    return binarySearch(arr, target, mid + 1, right); // Search right half
  }
}
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(sortedArray, 7));
console.log(binarySearch(sortedArray, 15));

// • Task 8: Write a recursive function to count the occurrences of a target element in an array.
// Log the result for a few test cases.
function countOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  }
  const countInRest = countOccurrences(arr.slice(1), target);
  return (arr[0] === target ? 1 : 0) + countInRest;
}

// Test cases
const array1 = [1, 2, 3, 4, 2, 2, 5];
const array2 = [10, 20, 30, 10, 40, 10];
const array3 = [1, 1, 1, 1, 1];
const array4 = [5, 6, 7, 8, 9];

console.log(countOccurrences(array1, 2));
console.log(countOccurrences(array2, 10));

// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree.
// Log the nodes as they are visited.
// • Task 10: Write a recursive function to calculate the depth of a binary tree.
// Log the result for a few test cases.
