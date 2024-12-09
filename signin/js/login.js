let loginForm = document.getElementById("loginForm");
let loginEmail = document.getElementById("LoginEmail");
let loginPassword = document.getElementById("LoginPassword");
let loginAlert = document.getElementById("loginAlert");
let loginSuccessAlert = document.getElementById("loginSuccessAlert");
let allUsers=[];

if (localStorage.getItem("allUsers")!==null){
  allUsers=JSON.parse(localStorage.getItem("allUsers"));
}
loginForm.addEventListener("submit",function(e){
  e.preventDefault(); 
  login();
})
function login(){
  let userData={
    email:loginEmail.value,
    password:loginPassword.value,
  };


  if (isLogInValid(userData)==true) {
    loginSuccessAlert.classList.replace("d-none", "d-block");
    loginAlert.classList.replace("d-block", "d-none");
setTimeout(function(){
  window.location.href = "../welcome/welcome.html";
},2000);
  }else{
    loginAlert.classList.replace("d-none", "d-block");
    loginSuccessAlert.classList.replace("d-block", "d-none");

  }
}
function isLogInValid(userData){
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email.toLowerCase() == userData.email.toLowerCase() &&
    allUsers[i].password == userData.password) {
      localStorage.setItem("signName",allUsers[i].name);
      return true;
    }
  }
 
}
    
  
