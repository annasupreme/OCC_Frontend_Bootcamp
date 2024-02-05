//Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating!`);
    }
}


class Dog extends Animal {
    bark() {
        console.log('Woof woof');
    }
}

const myDog = new Dog("Blue");
myDog.eat();
myDog.bark();
console.log(myDog.name); //remember the myDog that we created is now an object

// another example:
class Cat extends Animal {
    makesound() {
        console.log('Meooww');
    }
}

const myCat = new Cat("Sheeba");
myCat.makesound();