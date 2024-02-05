const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", handleSubmit);
//form submission event handler
function handleSubmit(event){
    event.preventDefault(); //Prevents form from submitting (thats what prevent default is)

    //validate form inputs
    const isValid = validateForm();

    if(isValid) {
        console.log("Form submitted successfully");
        form.reset();
        nameError.textContent = "";
        emailError.textContent = ""
    }
}

//Form input validation
function validateForm() {
    const nameValue = nameInput.value.trim(); //trim removes the whitespace before and after the value
    const emailValue = emailInput.value.trim();
    let isValid = true;

    if (nameValue === ""){ // triple equal means strict comparison?
        nameError.textContent = "Name is required"
        isValid = false;
    }   else {
        nameError.textContent = "";
    }

    if (emailValue === ""){
        emailError.textContent = "Email is required"
        isValid = false;
    } else {
        emailError.textContet = "";
    }

    return isValid;
}