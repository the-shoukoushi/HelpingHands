// Select elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formTitle = document.getElementById('form-title');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

// Show Signup Form
showSignup.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    formTitle.innerText = "Sign Up";
});

// Show Login Form
showLogin.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    formTitle.innerText = "Login";
});


function validateEmail(fieldId, errorId) {
    const email = document.getElementById(fieldId).value.trim();
    const emailError = document.getElementById(errorId);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check

    if (email === "") {
        emailError.textContent = "Email is required.";
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validateName() {
    const name = document.getElementById("FullName").value.trim();
    const nameError = document.getElementById("fullNameError");
    const nameRegex = /^[a-zA-Z ]*$/;  // Allows only letters

    if (name === "") {
        nameError.textContent = "This field is required.";
        return false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = "Only letters and spaces are allowed.";
        return false;
    } else if (name.length > 25) {
        nameError.textContent = "Name should not be more than 50 letters."
        return false;

    } else {
        nameError.textContent = "";
        return true;
    }
}

function validatePass(fieldId, errorId) {
    const pass = document.getElementById(fieldId).value.trim();
    const passsError = document.getElementById(errorId);
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/; // Basic email format check

    if (pass === "") {
        passsError.textContent = "Email is required.";
        return false;
    } else if (!passRegex.test(pass)) {
        passsError.textContent = "Password must be of 8 characters and atmost 20 characters with atleast one uppercase, one lowercase, one digit and also include atlease one special character with no white spaces ";
        return false;
    } else {
        passsError.textContent = "";
        return true;
    }
}

function validateConfirmPass() {
    const confirmPass = document.getElementById("confirmPass").value.trim();
    const confirmPassError = document.getElementById("confirmPassError");
    // const nameRegex = /^[a-zA-Z ]*$/;  // Allows only letters
    const pass = document.getElementById("signupPass").value.trim();

    if (confirmPass === "") {
        confirmPassError.textContent = "Please confirm your password.";
        return false;
    } else if (pass !== confirmPass) {
        confirmPassError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPassError.textContent = "";
        return true;
    }
}

document.getElementById("signup-form").addEventListener("submit", function (event) {
    let isValid = true;

    // Validate all fields before submission
    if (!validateName()) isValid = false;
    if (!validateEmail('signupEmail', 'signupEmailError')) isValid = false;
    if (!validatePass('signupPass', 'signupPassError')) isValid = false;
    if (!validateConfirmPass()) isValid = false;


    // Prevent form submission if any validation fails
    if (!isValid) {
        event.preventDefault();
    }
});

document.getElementById("login-form").addEventListener("submit", function (event) {
    let isValid = true;

    // Validate all fields before submission
    if (!validateEmail('loginEmail', 'loginEmailError')) isValid = false;
    if (!validatePass('loginPass', 'loginPassError')) isValid = false;


    // Prevent form submission if any validation fails
    if (!isValid) {
        event.preventDefault();
    }
});