const user = {
  name: "Alice",
  getAddress() {
    return {
      city: "San Francisco",
      zipcode: "94105",
    };
  },
};

//Traditional approach
let city1;
if (user && user.getAddress) {
  const address = user.getAddress();
  if (address) {
    city1 = address.city;
  }
}

console.log("Traditional Approach:", city1); // Output: San Francisco

//ES20 Chaining operator approach
const city2 = user?.getAddress?.().city || "Unknown";
console.log("Optional Chaining Approach:", city2); // Output: San Francisco
