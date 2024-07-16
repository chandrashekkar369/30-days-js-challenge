//Activity01
const length = 10;
for (let i = 1; i < length + 1; i++) {
  console.log(`${i}`);
}

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
