// brak up with var

// variable diclear
let balance = 1240;
balance = 1340;
const userName = 'janpakhi potas potas';
const weTogether= 'Ami' + userName;
// console.log(weTogether);
// userName = 'moyna pakhi'; not allowed  reassign

// array
const numbers = [44, 45, 344, 2, 34];
// numbers = [88, 134, 12];   not allowed

numbers.push(555);
numbers[1] = 222;


let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}
// console.log(sum);



// object
const student = {roll: 101, name: 'Modij', job: 'intern'};
student.name = 'Mofazzol';
// student = {name: 'Mofazzol'};
// console.log(student);