let form = document.getElementById("form");
let email = document.getElementById("form2Example18");
let pwd = document.getElementById("form2Example28");
let error = document.getElementById("error");


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     checkInputs();
// })
function submitData(){  nm 
        document.getElementById("form1").submit();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
    return true;
    }
    else
    {
        error.innerHTML ="You have entered an invalid email address!";
        error.style.color = "red";
        return false;
    }
    
}

function checkInputs(){

    // const email = email.value.trim();
    // const pwd = pwd.value.trim();
    


    
    // let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    // if(regexp.test(email.value)){
    //     error.innerHTML = "valid";
    //     error.style.color= "green";
    //     return true;
    // }
    // else{
    //     error.innerHTML ="invalid";
    //     error.style.color = "red";
    //     return false;
    // }


}
