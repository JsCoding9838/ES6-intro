const numbers = [23, 65, 99, 34];
// console.log(numbers);
// console.log(...numbers);

const max        = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);



/* spreat operator     ...     */

// const numbers2 = numbers;
// get only value from anothe array
// const numbers2 = [...numbers];
// can add first and last also
const numbers2 = [33, ...numbers, 88];

numbers.push(55);

// console.log(numbers);
// console.log(numbers2);