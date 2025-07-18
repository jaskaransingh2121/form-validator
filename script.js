let form = document.getElementById("myform")

let namefield = document.getElementById("name")
let emailfield = document.getElementById("email")
let passwordfield = document.getElementById("password")
let confirmfield = document.getElementById("confirmpassword")

let nameerror = document.getElementById("nameerror")
let emailerror = document.getElementById("emailerror")
let passworderror = document.getElementById("passworderror")
let confirmerror = document.getElementById("confirmerror")
let successmessage = document.getElementById("successmessage")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let valid = true;

    if (namefield.value.trim() === "") {
        nameerror.textContent = "Name is required"
        valid = false;
    } else {
        nameerror.textContent = "";
    }
    if (!emailfield.value.includes("@") || !emailfield.value.includes(".")) {
        emailerror.textContent = "Invalid Email Address"
        valid = false;
    } else {
        emailerror.textContent = "";
    }
    if (passwordfield.value.length <= 8) {
        passworderror.textContent = "Password must at least 8 Characters";
        valid = false;
    } else {
        passworderror.textContent = "";
    }
    if (confirmfield.value !== passwordfield.value) {
        confirmerror.textContent = "Password do not Match"
        valid = false;
    } else {
        confirmerror.textContent = "";
    }
    if (valid) {
        successmessage.textContent = "Form submitted successfully!"
    } else {
        successmessage.textContent = "";
    }
})