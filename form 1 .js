function validateForm() {
    // Getting the value by id
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("mobileNumber").value;
    var address = document.getElementById("address").value;
    var course = document.getElementById("courses").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    // Validation for email and number
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regNumber = /^\d{10}$/; // Javascript reGex for Phone Number validation.
    // First name
    if (firstName === "") {
        alert("Please enter your first name");
        firstName.focus();
        return false;
    }
    // Last name
    if (lastName === "") {
        alert("Please enter your last name");
        lastName.focus();
        return false;
    }
    // Email id
    if (email === "" || !regEmail.test(email)) {
        alert("Please enter a valid e-mail address");
        email.focus();
        return false;
    }
    // Mobile number
    if (number === "") {
        alert("Please enter your mobile number");
        number.focus();
        return false;
    }
    // Mobile number reg validation
    if (!regNumber.test(number) || isNaN(number)) {
        alert("Invalid mobile number. Please enter a valid number");
        number.focus();
        return false;
    }
    // Address
    if (address === "") {
        alert("Address cannot be empty");
        address.focus();
        return false;
    }
    // Courses
    if (course === "") {
        alert("Please select a course");
        course.focus();
        return false;
    }
    // Password
    if (password === "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }
    // Password reg validation
    if (password.length < 8) {
        alert("Invalid password. Password must be at least 8 characters long");
        password.focus();
        return false;
    }
    // Confirm password
    if (confirmPassword === "") {
        alert("Please confirm your password");
        confirmPassword.focus();
        return false;
    }
    // If confirmpassword is equal to password
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        confirmPassword.focus();
        return false;
    }
    //  Form is valid, you can submit it
    {
        return true; 
        //If Type:1 is needed then this return is not needed
        //If Type:2 is needed then this return is needed and goes out of the block for button function
    }
    //  Type:1
    /* 
    //  If there is any empty fiels
     if (firstName === "" || lastName === "" || email === "" || number === "" || address === "" || course === "" || password === "" || confirmPassword === "") {
         alert("All fields are required!");
         return false;
     }
    // Form is valid, you can submit it
     alert("Form submitted successfully!");
     return true;
     */
}
// Type:2
// Add event listener to the submit button
/*
var submitButton = document.getElementById("submitbtn");
submitButton.addEventListener("click", function(event) {
    if (validateForm()) {
        alert("Form submitted successfully!");
    } else {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
*/
// Type 3  Using button function by declaring button function name
/*
var buttonClickEvent = document.getElementById("submitbtn");
buttonClickEvent.click(function () {
    buttonClick();  //Function name
});
function buttonClick(e){
    if(validateForm()){
        alert("Form submitted successfully!");
    }
    else{
        e.preventDefault(); // Prevent form submission if validation fails
    }
}
*/
// Type:4  Function declared in Html button tag
function validate(e){
    if(validateForm()){
        alert("Form submitted successfully!");
        document.write("Successfully submitted!!");
    }
    else{
        e.preventDefault(); // Prevent form submission if validation fails
    }
}

