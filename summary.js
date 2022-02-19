const priyoPerson = 'Koolsum Begum';
// priyoPerson       = 'Momotaj Begum';

const hubby       = 'Akbar the great';

// default parameter
function getName(first, last= 'Chowdhury'){
    return first + ' ' + last;
}

// template string
const myPeople = `My lovely person is are ${hubby} and his fulName is ${getName('akbar')}. My Name is ${priyoPerson}.`;
console.log(myPeople);

// arrow function
// one line of array function 
const addName = (first, last) => first + ' ' + last;
// small array function
const fiveTimes = x => x * 5;
// big array function
const bigArrayFunction = (x, y, z) => {
    const firstPart  = x + y;
    const secondPart = y * z;
    const thirdPart  = x / z;
    const result     = (firstPart + secondPart) * thirdPart;
    return result;
}
// spreat operator tripple dutted ...
const numbers = [2, 4, 67, 1, 54];
const min     = Math.min(...numbers);
console.log(min);

