//Control Structures

//Conditional Statement - Allows you to execute different block of codes based on a condition

//Conditionals - if statement
let age = 15;

if (age >= 18) { 
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//if-else if-else statement (Multiple conditions)
let temperature = 20;
if (temperature < 0){
    console.log("It's freezing!"); 
} else if (temperature >= 0 && temperature < 20 ){
    console.log("It's cool outside");
} else {
    console.log("It's a warm day");
}

//Conditionals - switch statement
let day = 'Monday'; 
switch (day){
    case 'Monday':
        console.log("Start of the week")
        break; 
    case 'Friday':
        console.log("It's the end of the week");
        break;
    default:
        console.log("It's a regular day!");
        break
}



/* Note: 
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
== equal to
*/