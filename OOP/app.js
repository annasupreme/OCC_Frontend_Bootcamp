//Exercise 1 - encapsulation

class Shape {
    constructor(rectangle, area){
        this.width = width;
        this.height = height;
    }

    area(width){
        this.width += amount; 
    }

    area(height){
        this.height += amount;
    }

    calculateArea(area){
        if (amount > this.height) {
            this.height -= amount;
        } else {
            console.log("Method not Implemented.");
        }
    }

    getcalculateArea(){
        return `Calculate Area: ${this.width}, ${this.height}`;
    }
}

const calculateArea = new rectangle();
myArea.area();
console.log(calculateArea.getcalculateArea());


//Exercise 2 - inheritance


class Shape {
    constructor(shape) {
        this.shape = shape;
    }

    displayFormula() {
        console.log(`${this.shape} is a shape`);
    }
}

class Rectangle extends Shape {
    Area() {
            console.log('');
    }
}


//Exercise 3 - polymorphism

class Shape {
    calculateArea() {
        return 'shapel'
    }
}

class Rectangle extends Shape {
    calculateArea() {
        return super.calculateArea() + ', is a shapel';
    }
}

const newRectangle = new Rectangle();

console.log(newRectangle.cArea());





/*Answer
class Shape {
    constructor (w, h) {
        this.width = w;
        this.height = h;
    }

    calculateArea() {
        throw new Error("Method not implemented.")
    }
}

class Rectangle extends Shape {
    displayFormula() {
        console.log("Width * Height = Area of a Rectangle");
    }

    calculateArea() {
        let area = this.width * this.height;
        console.log(`${this.width} * ${this.height} = ${area}`);
    }
}

const shape1 = new Rectangle(7, 3);
shape1.displayFormula();
shape1.calculateArea(); */ 