//Objects - another data type. non primitive data type, similar to arrays, more complex. not as static or primitive 
// these are things or items in our js that rep real life objects. eg. a person having properties, hobbies, greet someone, eat, talk etc. Objects are the same. can create objects for a car - model, brand name, diff features (manual or auto), drives, stop etc 
// we use curly braces {}. for array we use square braces []

//Objects. we call it key value pair. eg. with below firstName is the key. and value/string is Jane. 
// can also put other data types and arrays
// in JS it reads from top to bottom

const person = {
    //Object Properties
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    hobbies: ['reading', 'coding', 'hiking'],

    //Object Methids
    greet: function(){
        console.log('Hello, my name is', this.firstName, this.lastName, 'Nice to meet you.')
    }
};

//Access Object Properties
console.log(person.firstName);
console.log(person.age);

//Modifying Object Properties
person.lastName = 'Smith'; 
console.log(person.lastName);

//Accessing Object Methods
person.greet();

//Adding new properties to the object
person.nationality = 'American'
console.log(person.nationality);


//Example of incorporating arrays:
//console.log(person.hobbies[0]);

//Adding new methods to the object
person.introduce = function(){
    //Template literal
    console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`)
} 
person.introduce();

// Now to complex part of objects:
//Nesting Objects (can put objects in objects)
const address = {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
};

person.address = address; 
console.log(person.address.street);

// In our case, we created a new property in our 'person' object called 'address1' and assigned an object "address" as its value and so we have to call 'person' first if we want to access it.


//Objects destructuring - extracting the properties of the object easily. like putting a box inside a bigger box.
const fName = person.firstName; 
const lName = person.lastName;

const { firstName, lastName , age } = person; 
console.log(firstName)


