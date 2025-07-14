// --------------------Task-1---------------
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 27, gender: "female" }
];

const getMaleNames = (arr) => {
  return arr.filter(p => p.gender !== "female").map(p => p.name);
};




