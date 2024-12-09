let registerForm = document.getElementById("registerForm");
let signName = document.getElementById("signName");
let signEmail = document.getElementById("signEmail");
let userpassword = document.getElementById("userPassword");
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");
let allUsers =[];

if(localStorage.getItem("allUsers")!==null){
    allUsers= JSON.parse(localStorage.getItem("allUsers"))
}

registerForm.addEventListener("submit",function(e){
    e.preventDefault();
   
    if(checkAllInputsAreValid()){
        addUser();
        
    }
})
function addUser(){
    let newUser= {
        name:signName.value,
        email:signEmail.value,
        password:userpassword.value,
    };
    if (userExist(newUser)==true){
        console.log("email already exist");
        existAlert.classList.replace("d-none", "d-block"); 
        successAlert.classList.replace("d-block","d-none"); 
        return true;


    }else{

        console.log(newUser);
        allUsers.push(newUser);
        console.log(allUsers);
        localStorage.setItem("allUsers",JSON.stringify(allUsers))
        successAlert.classList.replace("d-none", "d-block"); 
        existAlert.classList.replace("d-block","d-none"); 
        
        setTimeout(function(){ window.location.href="../signin/login.html";

        },2000); 
    }

}
function userExist(newUser){
    for (let i = 0; i <allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == newUser .email.toLowerCase()) {
            return true;
            }
            
          

        
    }
}
function validateallinputs(regex,element,alertMsg){
    let pattern= regex;
    if(pattern.test(element.value)== true){
        console.log("valid");
        alertMsg.classList.replace("d-block","d-none")
        return true;    
    }else{
        console.log("invalid");
        alertMsg.classList.replace("d-none","d-block")
        return false;
    }
    
}
function checkAllInputsAreValid() {
    if (
        validateallinputs(/^[a-zA-Z]{2,}$/, signName, nameAlert) &&
        validateallinputs(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, signEmail, emailAlert) &&
        validateallinputs(/^(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/, userpassword, passwordAlert)
    ) {
        console.log("all valid");
        return true;
    } else {
        console.log("all invalid");
        return false;
    }
}

