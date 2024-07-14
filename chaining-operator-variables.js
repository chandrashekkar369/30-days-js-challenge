const user = {
  name: "John",
  address: {
    city: "New York",
    zipcode: "10001",
  },
};

//Traditional approach
let city1;
if (user && user.address && user.address.city) {
  city1 = user.address.city;
} else {
  city1 = "Unknown";
}

console.log("Traditional Approach:", city1); // Output: New York

//ES20 Chaining operator approach
const city2 = user?.address?.city || "Unknown";
console.log("Optional Chaining Approach:", city1); // Output: New York
