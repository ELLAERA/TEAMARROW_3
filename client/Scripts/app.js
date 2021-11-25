
//Student Name: Ferdowsi Rumi
//Student Number: 301168815
//Date: OCT 1st, 2021
// IIFE -- Immediately Invoked Function Expression
(function () {

    function start() {
        console.log("App Started...");
    }


    // author: Ferdowsi Rumi 301168815
    // assignment 4: Form validation

    window.addEventListener("load", setUpPage, false);

    let formFields = [];


    function setUpPage() {
        start();
        createInputFieldsEventListener();
        createRegisterAccountEventListener();
        createClearFormEventListener();
        setUpFormData();
    }

    function setUpFormData() {
        var inputs = document.querySelectorAll("#registerForm input");
        inputs.forEach(element => {
            formFields[element.id] = {
                value: element.value,
                valid: false
            };
        });
        //console.log(formFields);
    }

    function validateInputFields() {
        let form = document.getElementById("form");
        let firstname = document.getElementById("firstname");
        let lastname = document.getElementById("lastname");
        let password = document.getElementById("password");
        let password2 = document.getElementById("password2");
        // let province = document.getElementById("province");
        // let postalcode = document.getElementById("postalcode");
        let email = document.getElementById("email");
        // let address = document.getElementById("address");
        // let city = document.getElementById("city");
        // let age = document.getElementById("age");

        let firstnameValue = firstname.value.trim();
        let lastnameValue = lastname.value.trim();
        let passwordValue = password.value.trim();
        let password2Value = password2.value.trim();

        let emailValue = email.value.trim();
        //     let addressValue = address.value.trim();
        //     let cityValue = city.value.trim();
        //     let ageValue = age.value.trim();
        //  let provinceValue = province.value.trim();
        //     let postalcodeValue = postalcode.value.trim();

        if (firstnameValue === "") {
            setErrorFor(firstname, "firstname cannot be blank");
            formFields[firstname.id].valid = false;
        } else {
            formFields[firstname.id].valid = true;
            setSuccessFor(firstname);
        }

        if (lastnameValue === "") {
            formFields[lastname.id].valid = false;
            setErrorFor(lastname, "lastname cannot be blank");

        } else {
            formFields[lastname.id].valid = true;
            setSuccessFor(lastname);
        }
        // if (addressValue === "") {
        //     formFields[address.id].valid = false;
        //     setErrorFor(address, "address cannot be blank");

        // } else {
        //     formFields[address.id].valid = true;
        //     setSuccessFor(address);
        // }
        // if (cityValue === "") {
        //     formFields[city.id].valid = false;
        //     setErrorFor(city, "city cannot be blank");
        // } else {
        //     formFields[city.id].valid = true;
        //     setSuccessFor(city);
        // }

        emailValidation(emailValue);
        // proviceValidation(provinceValue);
        // postalcodeValidation(postalcodeValue);
        passwordValidation(passwordValue, password2Value);
        // ageValidation(ageValue);

        // console.log("after validation", formFields);
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

    function postalcodeValidation(postalcodeValue) {
        if (postalcodeValue === "") {
            formFields[postalcode.id].valid = false;
            setErrorFor(postalcode, "Postal code cannot be blank");
        } else if (!validatePostalcode(postalcodeValue)) {
            formFields[postalcode.id].valid = false;
            setErrorFor(postalcode, " postal code has to be in the a0a0a0 format");
        } else {
            formFields[postalcode.id].valid = true;
            setSuccessFor(postalcode);
        }
    }

    function proviceValidation(provinceValue) {
        if (provinceValue === "") {
            formFields[province.id].valid = false;
            setErrorFor(province, "Province cannot be blank");
        } else if (!validateProvince(provinceValue)) {
            formFields[province.id].valid = false;
            setErrorFor(province, "Province is not valid. Should be one of (QC, ON, MN, SK, BC)");
        } else {
            formFields[province.id].valid = true;
            setSuccessFor(province);
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


    function ageValidation(ageValue) {
        if (ageValue === "") {
            formFields[age.id].valid = false;
            setErrorFor(age, "age cannot be blank");

        } else if (ageValue < 18) {
            formFields[age.id].valid = false;
            setErrorFor(age, "you are not eligialbe if your age is under 18");
        } else {
            formFields[age.id].valid = true;
            setSuccessFor(age);
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


    function validateProvince(provinceValue) {
        var regEx = /^(ON|QC|MN|SK|AB|BC)$/i;
        var isProvince = regEx.test(provinceValue);
        return isProvince;
    }

    function validatePostalcode(postalcodeValue) {
        var regEx = /^[A-Z]\d[A-Z]\d[A-Z]\d$/i;
        var isPostalcode = regEx.test(postalcodeValue);
        return isPostalcode;
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

    function registerAccount() {
        var successResult = document.getElementById("successResult");
        var validationResult = document.getElementById("validationResult");
        var isFormValid = validateForm();
        if (!isFormValid) {
            validationResult.innerHTML = "Your order can not be submitted. Please check the validation result.";
            successResult.innerHTML = "";
            validationResult.style.visibility = "visible";
            successResult.style.visibility = "hidden";
        } else {
            successResult.innerHTML = "Congratulations! Your order is successfully submitted!";
            validationResult.innerHTML = "";
            validationResult.style.visibility = "hidden";
            successResult.style.visibility = "visible";
        }
    }

    function createRegisterAccountEventListener() {
        var btnRegisterAccount = document.getElementById("btnRegisterAccount");
        if (btnRegisterAccount.addEventListener) {
            btnRegisterAccount.addEventListener("click", registerAccount, false);
        } else if (btnRegisterAccount.attachEvent) {
            btnRegisterAccount.attachEvent("onclick", registerAccount);
        }
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