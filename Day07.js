//Activity#01 Object creation and access
const obj1 = {
  title: "achieve success with mistakes",
  author: "chandrashekkar",
  year: "2024",
};
console.log("book object:", obj1);
console.log(obj1.title);
console.log(obj1.author);
console.log(obj1.year);
console.log("#########################################");

//Activity#02 - object methods
const obj2 = {
  title: "achieve success with mistakes",
  author: "chandrashekkar",
  year: "2024",
  func: function () {
    console.log(this.title + " " + this.author);
  },
};
console.log("concatenation of title and author of book object:");
obj2.func();
console.log("#########################################");

const obj3 = {
  title: "achieve success with mistakes",
  author: "chandrashekkar",
  year: "2024",
  changeYear: function (newYear) {
    this.year = newYear;
  },
};
console.log("object before update: ", obj3);
obj3.changeYear(2025);
console.log("updated object: ", obj3);
console.log("#########################################");
//Activity#03 - Nested Objects
// const library = {
//   book1: {
//     name: "science",
//     books: [
//       {
//         title: "physics",
//         author: "singh",
//         year: "2010",
//       },
//       {
//         title: "organic chemistry",
//         author: "mishra",
//         year: "2012",
//       },
//       {
//         title: "Inorganic chemistry",
//         author: "gupta",
//         year: "2011",
//       },
//     ],
//   },

//   book2: {
//     name: "mathematics",
//     books: [
//       {
//         title: "linear algebra",
//         author: "singh",
//         year: "2012",
//       },
//       {
//         title: "applied mathematics",
//         author: "mishra",
//         year: "2013",
//       },
//       {
//         title: "trignometry",
//         author: "gupta",
//         year: "2014",
//       },
//     ],
//   },
// };

const library = {
  name: "science",
  books: [
    {
      title: "physics",
      author: "singh",
      year: "2010",
    },
    {
      title: "organic chemistry",
      author: "mishra",
      year: "2012",
    },
    {
      title: "Inorganic chemistry",
      author: "gupta",
      year: "2011",
    },
  ],
};

console.log("library: ", library);
console.log("library Name: ", library.name);
console.log("library books:");
library.books.forEach((book, index) => console.log(index, ":", book.title));
console.log("#########################################");

//Activity#04 - use of this keyword
const obj4 = {
  title: "achieve success with mistakes",
  author: "chandrashekkar",
  year: "2024",
  func: function () {
    console.log(this.title + " " + this.author);
  },
};
console.log("accessing object properties using this keyword:");
obj4.func();
console.log("#########################################");

//Activity#05 - object iteration
const obj5 = {
  title: "achieve success with mistakes",
  author: "chandrashekkar",
  year: "2024",
};
console.log("accessing object properties using for-in:");
for (key in obj5) {
  console.log(key);
}
console.log("All keys in the book object:", Object.keys(obj5));
console.log("All values in the book object:", Object.values(obj5));
console.log("#########################################");
