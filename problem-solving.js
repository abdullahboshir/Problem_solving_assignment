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






// --------------------Task-3---------------
const square = x => x * x;
const double = x => x * 2;
const addFive = x => x + 5;

const composed = (x) => addFive(double(square(x)));



// --------------------Task-4---------------
const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2008 },
  { make: "Ford", model: "Focus", year: 2015 }
];

const sortCarsByYear = (arr) => arr.sort((a, b) => a.year - b.year);





// --------------------Task-5---------------
const persons = [
  { name: "Ali", age: 24 },
  { name: "Nora", age: 28 },
  { name: "Jamal", age: 30 }
];

const updateAge = (arr, personName, newAge) => {
  const person = arr.find(p => p.name === personName);
  if (person) person.age = newAge;
  return arr;
};



// --------------------Task-6---------------
const numbers = [1, 2, 3, 4, 5, 6];

const sumEven = (arr) =>
  arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);




// --------------------Task-7---------------
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};





// --------------------Task-8---------------

const nums = [1, 2, 2, 3, 4, 4, 5];



const uniqueNumbers = (arr) => [...new Set(arr)];









// --------------------Task-9---------------

const values = [12, 5, 78, 22, 9];

const findMax = (arr) => Math.max(...arr);







// --------------------Task-10---------------

const students = [

  { name: "Amina", grades: [90, 80, 85] },

  { name: "Rahim", grades: [70, 60, 75] },

  { name: "Tania", grades: [95, 92, 90] }

];



const sortByAverage = (arr) =>

  arr.sort((a, b) => {

    const avgA = a.grades.reduce((s, n) => s + n, 0) / a.grades.length;

    const avgB = b.grades.reduce((s, n) => s + n, 0) / b.grades.length;

    return avgB - avgA;

  });
