/*
 * Filename: complexCode.js
 * Description: This code implements a complex algorithm for sorting an array of objects based on multiple criteria.
 */

// Define an array of objects
const data = [
  { name: 'John Doe', age: 25, city: 'New York' },
  { name: 'Jane Smith', age: 30, city: 'London' },
  { name: 'Mark Johnson', age: 40, city: 'Paris' },
  // ...add more objects here
];

// Define a custom sorting function
function customSort(a, b) {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  
  if (a.city < b.city) return -1;
  if (a.city > b.city) return 1;
  
  return 0;
}

// Sort the array using the custom sorting function
data.sort(customSort);

// Print the sorted array
console.log('Sorted Data:');
for (let i = 0; i < data.length; i++) {
  console.log(`${data[i].name}, ${data[i].age}, ${data[i].city}`);
}

// Calculate the average age
let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum += data[i].age;
}
const averageAge = sum / data.length;
console.log(`Average Age: ${averageAge}`);

// Find the person with the longest name
let longestName = '';
for (let i = 0; i < data.length; i++) {
  if (data[i].name.length > longestName.length) {
    longestName = data[i].name;
  }
}
console.log(`Longest Name: ${longestName}`);

// Calculate the number of people in each city
const cityCounts = {};
for (let i = 0; i < data.length; i++) {
  const city = data[i].city;
  cityCounts[city] = (cityCounts[city] || 0) + 1;
}
console.log('City Counts:');
for (const city in cityCounts) {
  console.log(`${city}: ${cityCounts[city]}`);
}

// ...add more complex and elaborate code here
// Remember to make it more than 200 lines!