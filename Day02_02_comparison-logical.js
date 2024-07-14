//Activity#03 Comparison Operators
const x1 = 34;
const x2 = 34;
let y1 = x1 == x2;
console.log(`${x1} == ${x2} => ${y1}`);

const x3 = 94;
const x4 = "94";
let y2 = x3 == x4;
console.log(`${x3} !== "${x4}" => ${y2}`);

const x5 = 77;
const x6 = 56;
let y3 = x5 != x6;
console.log(`${x5} != ${x6} => ${y3}`);

const x7 = 77;
const x8 = "56";
let y4 = x7 != x8;
console.log(`${x7} != "${x8}" => ${y4}`);

const x9 = 77;
const x10 = 77;
let y5 = x9 === x10;
console.log(`${x9} === ${x10} => ${y5}`);

const x11 = 77;
const x12 = "77";
let y6 = x11 === x12;
console.log(`${x11} === "${x12}" => ${y6}`);

const x13 = 77;
const x14 = 77;
let y7 = x13 !== x14;
console.log(`${x13} !== ${x14} => ${y7}`);

const x15 = 77;
const x16 = "77";
let y8 = x15 !== x16;
console.log(`${x15} !== "${x16}" => ${y8}`);

const x17 = 77;
const x18 = 57;
let y9 = x17 < x18;
console.log(`${x17} < ${x18} => ${y9}`);

const x19 = 27;
const x20 = 17;
let y10 = x19 > x20;
console.log(`${x19} > ${x20} => ${y10}`);

const x21 = 47;
const x22 = 57;
let y11 = x21 <= x22;
console.log(`${x21} <= ${x22} => ${y11}`);

const x23 = 27;
const x24 = 17;
let y12 = x23 >= x24;
console.log(`${x23} >= ${x24} => ${y12}`);

const x25 = 47;
const x26 = 47;
let y13 = x25 <= x26;
console.log(`${x25} <= ${x26} => ${y13}`);

const x27 = 96;
const x28 = 96;
let y14 = x27 >= x28;
console.log(`${x27} >= ${x28} => ${y14}`);

//Activity#04 Logical Operators
const x29 = true;
const x30 = true;
let y15 = x29 && x30;
console.log(`${x29} && ${x30} => ${y15}`);

const x31 = true;
const x32 = false;
let y16 = x31 && x32;
console.log(`${x31} && ${x32} => ${y16}`);

const x33 = true;
const x34 = true;
let y17 = x33 || x34;
console.log(`${x33} || ${x34} => ${y17}`);

const x35 = true;
const x36 = false;
let y18 = x35 || x36;
console.log(`${x35} || ${x36} => ${y18}`);

const x37 = true;
let y19 = !x37;
console.log(`!${x37} => ${y19}`);

const x38 = false;
let y20 = !x38;
console.log(`!${x38} => ${y20}`);

//Nullish coalescing operator
let x39;
console.log(`Initialization value of x39 = ${x39}`);
x39 ??= 25;
console.log(`x39 ??= 25 ===> ${x39}`);
