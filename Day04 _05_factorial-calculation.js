let k = 1;
const n = 10;
let factorial = 1;
if (n < 0) {
  console.log(`Factorial of 0 is not possible!`);
} else if (n === 0) {
  console.log(`Factorial of 0 is 1`);
} else {
  do {
    factorial = factorial * k;
    k++;
  } while (k < n + 1);
  console.log(`Factorial of ${n} is ${factorial}`);
}
