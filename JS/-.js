

//50
console.log(globalVar);
//console.log(localVar);

function calculate(operation, num1, num2){ 
        return operation(num1, num2)
}

function addEventListener(ab,b) {
    return a + b;
}

function subtract(a ,b){
    return a - b;
}

let Sum = calculate(add, 6,7)
let Difference = calculate(subtract, 7,6)

console.log(`Result of addition: ${Sum}`)
console.log(`Result of Subtraction: ${Difference}`)
