//Group name: TeamArrow
//Date: OCT 1st, 2021
// IIFE -- Immediately Invoked Function Expression
(function () {

    function start() {
        console.log("App Started...");
    }

    window.addEventListener("load", setUpPage, false);

    let formFields = [];


    function setUpPage() {
        start();
        createInputFieldsEventListener();
        createClearFormEventListener();
        setUpFormData();
        createRegisterAccountEventListener();
    }

    function setUpFormData() {
        var inputs = document.querySelectorAll("#registerForm input");
        inputs.forEach(element => {
            formFields[element.id] = {
                value: element.value,
                valid: false
            };
        });
        console.log(formFields);
    }

    function validateInputFields() {
       // let form = document.getElementById("form");
       let username = document.getElementById("username");

        let firstname = document.getElementById("firstname");
        let lastname = document.getElementById("lastname");
        let password = document.getElementById("password");
        let password2 = document.getElementById("password2");
    
        let email = document.getElementById("email");
        let usernameValue = username.value.trim();

        let firstnameValue = firstname.value.trim();
        let lastnameValue = lastname.value.trim();
        let passwordValue = password.value.trim();
        let password2Value = password2.value.trim();

        let emailValue = email.value.trim();
        if (usernameValue === "") {
            setErrorFor(username, "username cannot be blank");
            formFields[username.id].valid = false;
        } else {
            formFields[username.id].valid = true;
            setSuccessFor(username);
        }

        if (firstnameValue === "") {
            setErrorFor(firstname, "first name cannot be blank");
            formFields[firstname.id].valid = false;
        } else {
            formFields[firstname.id].valid = true;
            setSuccessFor(firstname);
        }

        if (lastnameValue === "") {
            formFields[lastname.id].valid = false;
            setErrorFor(lastname, "last name cannot be blank");

        } else {
            formFields[lastname.id].valid = true;
            setSuccessFor(lastname);
        }

        emailValidation(emailValue);
     
        passwordValidation(passwordValue, password2Value);
    }



    function emailValidation(emailValue) {
        if (emailValue === "") {
            formFields[email.id].valid = false;
            setErrorFor(email, "Email cannot be blank");

        } else if (!validateEmail(emailValue)) {
            formFields[email.id].valid = false;
            setErrorFor(email, " Email field must contain the @ and . characters");

        } else {
            formFields[email.id].valid = true;
            setSuccessFor(email);
        }
    }


    function passwordValidation(passwordValue, password2Value) {
        if (passwordValue === "") {
            formFields[password.id].valid = false;
            setErrorFor(password, "password cannot be blank");

        } else if (!validatePassword(passwordValue)) {
            formFields[password.id].valid = false;
            setErrorFor(password, "Passwords must have 6 characters at least one digit and one upper-case");
        } else {
            formFields[password.id].valid = true;
            setSuccessFor(password);
        }

        if (password2Value === "") {
            formFields[password2.id].valid = false;
            setErrorFor(password2, "Repeat password cannot be blank");
        } else if (password2Value !== passwordValue) {
            formFields[password2.id].valid = false;
            setErrorFor(password2, "passwords does not match");
        } else {
            formFields[password2.id].valid = true;
            setSuccessFor(password2);
        }
    }


    
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        small.innerHTML = message;
        formControl.className = "form-control error";
    }


    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function validateEmail(emailValue) {
        var regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        var isEmail = regEx.test(emailValue);
        // console.log(isEmail ? "It's an email" : "Not an email");
        return isEmail;
    }

    function validatePassword(passwordValue) {
        var regEx = /^(?=.*\d)(?=.*[A-Z]).{6,}.*$/;
        var isPassword = regEx.test(passwordValue);
        return isPassword;
    }

    function validateForm() {
        validateInputFields();
        var isFormValid = true;

        var inputs = document.querySelectorAll("#registerForm input");
        inputs.forEach((element) => {
            // console.log("Element:,", formFields[element.id]);
            if (formFields[element.id].valid === false) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    function  registerAccount() {
       // e.preventDefault();
        var successResult = document.getElementById("successResult");
        var validationResult = document.getElementById("validationResult");
        var isFormValid = validateForm();
        if (!isFormValid) {
            validationResult.innerHTML = "Your form can not be submitted. Please check the input";
            successResult.innerHTML = "";
            validationResult.style.visibility = "visible";
            successResult.style.visibility = "hidden";
        } else {
            successResult.innerHTML = "Congratulations! Your form is successfully submitted!";
            validationResult.innerHTML = "";
            validationResult.style.visibility = "hidden";
            successResult.style.visibility = "visible";
            console.log("Submitting Form")
           //  document.forms['registerForm'].submit();
           // document.forms['registerForm'].submit();
          let f= document.getElementById('registerForm');
             console.log(f);
            f.submit();
            // let form = document.getElementById("form");
            // form.submit();
            console.log("Form Submitted", registerForms[0].value);

        }
        return false;
    }
    

    function createRegisterAccountEventListener() {
        // var btnRegisterAccount = document.getElementById("btnRegisterAccount");
        // if (btnRegisterAccount.addEventListener) {
        //     btnRegisterAccount.addEventListener("click", registerAccount, true);
        // } else if (btnRegisterAccount.attachEvent) {
        //     btnRegisterAccount.attachEvent("onclick", registerAccount);
        // }

        document.querySelector('#registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let x = document.querySelector('#registerForm').elements;
            console.log("Username: ", x['username'].value);
            console.log("Password: ", x['password'].value);
            let f =  document.getElementById('registerForm');
            console.log(f);
           // f.submit();
            registerAccount();
    
          });
    }

    function createClearFormEventListener() {
        var btnClear = document.getElementById("btnClear");
        if (btnClear.addEventListener) {
            btnClear.addEventListener("click", clearForm, false);
        } else if (btnClear.attachEvent) {
            btnClear.attachEvent("onclick", clearForm);
        }
    }

    function createInputFieldsEventListener() {
        var inputs = document.querySelectorAll("input");
        inputs.forEach(element => {
            if (element.addEventListener) {
                element.addEventListener("blur", validateInputFields, false);
                element.addEventListener('input', validateInputFields, false);
            } else if (element.attachEvent) {
                element.attachEvent("blur", validateInputFields);
                element.attachEvent('input', validateInputFields);
            }
        });
    }

    function clearForm() {
        var registerForm = document.getElementById("registerForm");

        if (registerForm != null) {
            confirm("Are you sure to clear the form?");
            successResult.innerHTML = "";
            validationResult.innerHTML = "";
            validationResult.style.visibility = "hidden";
            successResult.style.visibility = "hidden";

            registerForm.reset();

            var fromControls = document.querySelectorAll(".form-control");
            fromControls.forEach(formControl => {
                formControl.className = "form-control";
            });
        }
        return false;
    }
    // <!-- // ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$ : Email-->
    // <!-- ^[A-Z]\d[A-Z]\d[A-Z]\d$ : postalCode -->
    // <!-- ^(?=.*\d)(?=.*[A-Z]).{6,}.*$ :  password

})();