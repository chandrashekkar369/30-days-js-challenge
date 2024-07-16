//Activity01
const length = 10;
for (let i = 1; i < length + 1; i++) {
  console.log(`${i}`);
}

const tableOf = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//Activity02
let i = 1;
let sum = 0;
while (i <= length) {
  sum += i;
  i++;
}
console.log(`Sum of first 10 numbers is ${sum}`);

let start = 10;
while (start > 0) {
  console.log(`${start}`);
  start--;
}

//Activity03
let j = 1;
do {
  console.log(`${j}`);
  j++;
} while (j <= 5);

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

//Activity04
i = 1;
j = 1;
let line = "";
for (i = 1; i < 6; i++) {
  for (j = 1; j < i + 1; j++) {
    line = line + "* ";
  }
  console.log(line);
  line = "";
}

//Activity05
for (let i = 1; i < 11; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`${i}`);
}

for (let i = 1; i < 11; i++) {
  if (i === 7) {
    break;
  }
  console.log(`${i}`);
}
