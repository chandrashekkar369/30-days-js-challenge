// Day 11: Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let task1Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2ms!");
  }, 2000);
});
task1Promise.then((message) => {
  console.log(message);
});
//this can be done using funct
// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
let task2Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise rejected due to an error!");
  }, 2000);
});
task2Promise.catch((errorMessage) => {
  console.error(errorMessage);
});

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server.
//           Chain the promises to log messages in a specific order.
let fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetching done successfully!");
    }, 2000);
  });
const processData = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} processing done successfully!`);
    }, 2000);
  });
const displayData = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} displayed successfully!`);
    }, 2000);
  });

fetchData()
  .then((result) => {
    // console.log(result);
    return processData(result);
  })
  .then((result) => {
    // console.log(result);
    return displayData(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.error("Error occurred, data fetching failed!");
  });

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const task4Promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved successfully using async-await!");
    }, 3000);
  });
const task4Funmction = async () => {
  const result = await task4Promise();
  console.log(result);
};
task4Funmction();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const task5Promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        "Promise rejected due to timeout using async-await and try-catch!"
      );
    }, 3000);
  });
const task5Funmction = async () => {
  try {
    const result = await task5Promise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
task5Funmction();

// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const task6ApiUrl = "https://jsonplaceholder.typicode.com/users";
fetch(task6ApiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("server down!");
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  });

// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const task7ApiUrl = "https://jsonplaceholder.typicode.com/users";
const fetchApi = async () => {
  try {
    const response = await fetch(task7ApiUrl);
    if (!response.ok) {
      throw new Error("server down!");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};
// fetchApi();

// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const fetchUsers = async () => {
  try {
    const response = await fetch(usersUrl);
    if (!response.ok) {
      throw new Error("server down!");
    }
    // const data = await response.json();
    // console.log(data);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};
const fetchPosts = async () => {
  try {
    const response = await fetch(postsUrl);
    if (!response.ok) {
      throw new Error("server down!");
    }
    // const data = await response.json();
    // console.log(data);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

const fetchUsersAndPostsData = async () => {
  try {
    const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
    console.log("Users:", users);
    console.log("Posts:", posts);
  } catch (error) {
    console.error(error.message);
  }
};
fetchUsersAndPostsData();

// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
//Example#01
const fetchUsersAndPostsDataCheckRace = async () => {
  try {
    const winner = await Promise.race([fetchUsers(), fetchPosts()]);
    console.log("First resolved promise:", winner);
  } catch (error) {
    console.error(error.message);
  }
};
fetchUsersAndPostsDataCheckRace();

//Example#02
const promise_1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 3000);
});

const promise_2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 1000);
});

const promise_3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3 resolved"), 2000);
});

Promise.race([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log("First resolved promise:", result);
  })
  .catch((error) => {
    console.error("Error in promise race:", error);
  });
