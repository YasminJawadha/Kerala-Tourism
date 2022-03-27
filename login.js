let form = document.getElementById("form");
let email = document.getElementById("form2Example18");
let pwd = document.getElementById("form2Example28");
let error = document.getElementById("error");

    
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values of the input
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

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
