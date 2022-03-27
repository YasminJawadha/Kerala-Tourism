const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values of the input

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue ===''){
        //show error
        //add error class
        setErrorfor(username, "username cannot be blank");
    }
    else{
        //add success class
        setSuccessfor(username);
    }

    if (emailValue ===''){
        //show error
        //add error class
        setErrorfor(email, "email cannot be blank");
    }
    else if(!isEmail(emailValue)){
        setErrorfor(email, "email is incorrect");
    }
    else{
        //add success class
        setSuccessfor(email);
    }
    if (passwordValue ===''){
        //show error
        //add error class
        setErrorfor(password, "password cannot be blank");
    }
    else{
        //add success class
        setSuccessfor(password);
    }

    if (password2Value ===''){
        //show error
        //add error class
        setErrorfor(password2, "password cannot be blank");
    }
    else if(passwordValue!=password2Value){
        setErrorfor(password2, "password is not matching");
    }
    else{
        //add success class
        setSuccessfor(password2);
    }
}


function setErrorfor(input, message){
    const formControl = input.parentElement;//.form-control
    const small = formControl.querySelector('small');

    //add error message inside small tag
    small.innerText = message;

    //add error class
    formControl.className= 'form-control error';

}

function setSuccessfor(input){
    const formControl = input.parentElement;//.form-control
    
    formControl.className= 'form-control success';

}

function isEmail(email){
    return /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/.test(email);
}