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
        var inputs = document.querySelectorAll("#loginForm input");
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
        let password = document.getElementById("password");
    
        let usernameValue = username.value.trim();
        let passwordValue = password.value.trim();
        

        if (usernameValue === "") {
            setErrorFor(username, "username cannot be blank");
            formFields[username.id].valid = false;
        } else {
            formFields[username.id].valid = true;
            setSuccessFor(username);
        }
       
        passwordValidation(passwordValue);
    }

    function passwordValidation(passwordValue) {
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

    function validatePassword(passwordValue) {
        var regEx = /^(?=.*\d)(?=.*[A-Z]).{6,}.*$/;
        var isPassword = regEx.test(passwordValue);
        return isPassword;
    }

    function validateForm() {
        validateInputFields();
        var isFormValid = true;

        var inputs = document.querySelectorAll("#loginForm input");
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
          let f= document.getElementById('loginForm');
             console.log(f);
            f.submit();
            successResult.innerHTML = "An user with provided details is not in the system";
            // let form = document.getElementById("form");
            // form.submit();
        }
        return false;
    }
    

    function createRegisterAccountEventListener() {
      
        document.querySelector('#loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let x = document.querySelector('#loginForm').elements;
            console.log("Username: ", x['username'].value);
            console.log("Password: ", x['password'].value);
            let f =  document.getElementById('loginForm');
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
        var registerForm = document.getElementById("loginForm");

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