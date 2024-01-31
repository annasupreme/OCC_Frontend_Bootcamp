//Arrow Functions 

// function greet(name) {
    //code block
// }

const greet = (name) => {
    //code block
    console.log(name);
}

greet("John");

const square = (a) => a * a;
console.log(square(5));

//Enhanced Object Literals (how to write messages easier inside objects)
const person = {
	name: "TJ",
	age: 21,

    greeting(){
        return "Good Evening!"
    }
}

console.log(person.greeting());
//its like writing shortcuts in your code. more advanced stuff to get into once we get more into JS


// Spread and Rest Operators - provides a convenient way for us to manipulate ??
// Rest
//function myFunction(firstArg, secArg){  <- instead of typing out all the arguments, use '...restOfArgs'
//}

function myFunction(firstArg, ...restOfArgs){
    console.log(firstArg);
    console.log(restOfArgs);
}

myFunction('one', 'two', 'three', 'four');

//Spread
function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//JS Built-in Methods (there is a lot that JS offers. We will only learn the more common ones):

//Array Methods
//Filter 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const even = nums.filter((number) => number  % 2 == 0);
console.log(even);

const odd = nums.filter((number) => number  % 2 == 1);
console.log(odd);

// String Methods - manipulate strings
// Split (split object into an array of strings? )

const message = "Hello, World!";
const words = message.split(', ');
console.log(words);

// Includes
const sentence = "The quick brown fox jumps over the lazy dog";
const containsWord = sentence.includes('fox');  //case sensitive. if you make it capital Fox it wont find it and say false
console.log(containsWord); 

// Length
const sampleString = "Welcome to Modern JS Features!"
console.log(sampleString.length); //will count. 30 characters including the spaces

//Object Methods (useful for when your object has alot of values/keys)
const person1 = {
    name: "John",
    age: 30, 
    city: "New York"
}

// keys
console.log(Object.keys(person1));

// Values
console.log(Object.values(person1));

console.log(person1);

// Math Methods - Very important method that JS has included. We can use this to make our lives easier
// max and min - finding max and min in a couple of numers
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

const minNum = Math.min(10, 5, 20);
console.log(minNum);

// Random - generating a random number (decimals). for whole number use Nested Math
const randomValue = Math.random();
console.log(randomValue);

// Rounding - rounds up
const roundedNumber = Math.round(3.6);
console.log(roundedNumber);

// Floor - //rounds down
const roundedFloor = Math.floor(3.6); 
console.log(roundedFloor);

// Ceiling (better known as Ceil) - rounds up
const roundedCeil = Math.ceil(3.2)
console.log(roundedCeil);

// Nested Math Methods (this is to generate a random whole number)
const randomNum = Math.floor(Math.random() * 100); //< generate to number 100. we can put any number 
console.log(randomNum);

// Other Methods
//toFixed

const pi = 3.141592;
console.log(pi.toFixed(3));

//date
// const currentDate = new Date();
// console.log(currentDate);

const christmas = new Date(2024, 12, 25);
console.log(christmas);

// toString - converts number to a string (you cant add a string to a number)
const num = 38;
const parsedString = num.toString();
console.log(parsedString + 1);