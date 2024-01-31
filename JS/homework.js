

{let score = parseInt(prompt("Enter the score:"))}

{let score = 87;
if (score >= 90){
    console.log("The grade for the score is: A"); 
} else if (score >= 80 && score < 90 ){
    console.log("The grade for the score is: B");
} else if (score >= 70 && score < 80 ){
    console.log("The grade for the score is: C");
} else if (score >= 60 && score < 70 ){
    console.log("The grade for the score is: D");
} else if (score < 60 && score < 0 ){
    console.log("The grade for the score is: F");
}
}


/* Note: 
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
== equal to
*/