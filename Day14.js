// Day 14: Classes
// Tasks/Activities:

// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
//   Create an instance of the class and log the greeting message.
class Task1Person {
  constructor(name, age) {
    // super(name, age); //super is used when we extend another class.
    this.name = name;
    this.age = age;
  }
  greetingMesage() {
    return `Hello my name is ${this.name}, and I am ${this.age} years old. `;
  }
}
const person1 = new Task1Person("vijay", 30);
console.log(person1.greetingMesage());
//• Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Task2Person {
  constructor(name, age) {
    // super(name, age); //super is used when we extend another class.
    this.name = name;
    this.age = age;
  }
  greetingMesage() {
    return `Hello my name is ${this.name}, and I am ${this.age} years old. `;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`age is updated to ${this.age}`);
  }
}
const person2 = new Task2Person("vijay", 30);
person2.updateAge(33);
console.log(person2.greetingMesage());

// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class.
//   Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Task3Student extends Task1Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentID() {
    return this.studentId;
  }
}
const student1 = new Task3Student("Abhishek Bacchan", 19, "abhishek_110BA24");
console.log(
  `${student1.greetingMesage()} My student id is ${student1.getStudentID()}`
);
// • Task 4: Override the greeting method in the Student class to include the student ID in the message.
//   Log the overridden greeting message.
class Task4Student extends Task1Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  greetingMesage() {
    return `Hello my name is ${this.name}, I am ${this.age} years old, and my student id is ${this.studentId}.`;
  }
  getStudentID() {
    return this.studentId;
  }
}
const student2 = new Task4Student("John Ibrahim", 21, "john_111BS24");
console.log(`${student2.greetingMesage()}`);

// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message.
//   Call this static method without creating an instance of the class and log the message.
//   Note: static method is a method that belongs to the class itself, not to any particular instance.
class Task5Person {
  constructor(name, age) {
    // super(name, age); //super is used when we extend another class.
    this.name = name;
    this.age = age;
  }
  greetingMesage() {
    return `Hello my name is ${this.name}, and I am ${this.age} years old. `;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`age is updated to ${this.age}`);
  }
  static genericGreetingMesage() {
    return `Hello, welcome to my home!`;
  }
}

const genericGreeting = Task5Person.genericGreetingMesage(); //static method is the method that is called on class itself and not the instances
console.log(genericGreeting);

// • Task 6: Add a static property to the Student class to keep track of the number of students created.
//   Increment this property in the constructor and log the total number of students.
class Task6Student extends Task1Person {
  static totalStudentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Task6Student.totalStudentCount++;
  }
  getStudentID() {
    return this.studentId;
  }
}
const student3 = new Task6Student("Abhishek Bacchan", 19, "abhishek_110BA24");
const student4 = new Task6Student("John Ibrahim", 21, "john_111BS24");
const student5 = new Task6Student("Ritesh Deshmukh", 20, "ritesh_112BCA24");
console.log(`Total students created: ${Task6Student.totalStudentCount}`);

// Activity 4: Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property).
//   Create an instance and log the full name using the getter.
class Task7Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  get FullName() {
    return `Fullname is ${this.firstname} ${this.lastname}`;
  }
}
const person3 = new Task7Person("vijay", "chauhan", 30);
console.log(person3.FullName);

// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName).
//   Update the name using the setter and log the updated fullname.
class Task8Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  get fullName() {
    return `Fullname is ${this.firstname} ${this.lastname}`;
  }
  set fullName(newFullname) {
    const [firstname, lastname] = newFullname.split(" ");
    this.firstname = firstname;
    this.firstname = lastname;
  }
}
const person4 = new Task8Person("vijay", "chauhan", 30);
console.log(person4.fullName);
person4.fullname = "Tom Cruise";
console.log(
  `Firstname: ${person4.firstname} and Lastname: ${person4.lastname}`
);
// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.
//   Ensure that the balance can only be updated through these methods.
// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods,
//   logging the balance after each operation.
//  both of above tasks implemented in below code
class Task9Account {
  #balance = 0;

  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Balance can not be below 0.");
    }
    this.#balance = initialBalance;
  }

  depositMoney(amountDiposited) {
    this.#balance = this.#balance + amountDiposited;
  }

  withdrawMoney(amountToBeWithdrawn) {
    if (amountToBeWithdrawn > this.#balance) {
      throw new Error(
        `Insufficient amount!, available balance = ${this.#balance}`
      );
    }
    this.#balance = this.#balance - amountToBeWithdrawn;
  }

  get getBalance() {
    return `balance amount in the account is ${this.#balance}`;
  }
}

const account1 = new Task9Account(1000);
account1.depositMoney(500);
console.log(account1.getBalance);
account1.withdrawMoney(1000);
console.log(account1.getBalance);
account1.withdrawMoney(1000);
console.log(account1.getBalance);
