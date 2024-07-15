//Activity#04
const year = 2004;
if (year % 4 === 0) {
  if (year % 100 !== 0 || year % 400 === 0) {
    console.log(`The ${year} is a leap year!`);
  }
} else {
  console.log(`The ${year} is not a leap year!`);
}
