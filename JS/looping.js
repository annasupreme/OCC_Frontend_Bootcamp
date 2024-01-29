//Looping Statements - repeatedly excute a block of codes until a specific condition is met
//Use to automate repetitive task


//Loops: for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count:" , i)
}

/* Note: 
i++  increment variable by one ( i+1 )
i--  decrement variable by one ( i-1 )
*/

/* infinite loop - performing an indefinite action, may be throwing errors. when this happens, close the browser and re-open the live server */


//Loops: While loop
let count = 1;
while (count <= 5){
console.log("My Count:", count)
    count++;
};

//Loops: do-while-loop
let a = 1; 
do {
    console.log("Do while count:", a);
    a++;
} while (a <= 5 );
