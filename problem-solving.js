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





// --------------------Task-2---------------
const books = [
  { title: "1984", author: "Orwell", year: 1949 },
  { title: "The Alchemist", author: "Coelho", year: 1988 },
  { title: "Atomic Habits", author: "Clear", year: 2018 }
];

const getBookTitles = (arr) => arr.map(book => book.title);


