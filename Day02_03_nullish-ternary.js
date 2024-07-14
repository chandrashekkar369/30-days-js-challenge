//Nullish coalescing operator
const x39 = null;
const x40 = 25;
let y21 = x39 ?? x40;
console.log(`${x39} ?? ${x40} ===> ${y21}`);

const x41 = undefined;
const x42 = 47;
let y22 = x41 ?? x42;
console.log(`${x41} ?? ${x42} ===> ${y22}`);

const x43 = true;
const x44 = 97;
let y23 = x43 ?? x44;
console.log(`${x43} ?? ${x44} ===> ${y23}`);

const x45 = false;
const x46 = 97;
let y24 = x45 ?? x46;
console.log(`${x45} ?? ${x46} ===> ${y24}`);

//Ternary operator
const x47 = 45;
const x48 = 87;
let y25 = x47 == x48 ? true : false;
console.log(`"${x47} == ${x48} ? true : false "===> ${y25}`);

const x49 = 45;
const x50 = 45;
let y26 = x49 == x50 ? true : false;
console.log(`"${x49} == ${x50} ? true : false "===> ${y26}`);
