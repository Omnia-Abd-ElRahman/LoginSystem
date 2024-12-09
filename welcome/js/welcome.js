let welcomeMsg =document.getElementById("welcomeMsg")

window.addEventListener('load',function(){
  displayUserName()

});

function displayUserName() {
  if (localStorage.getItem("signName") !== null) {
    welcomeMsg.innerHTML = `Welcome ${localStorage.getItem("signName")}`;
  } else {
    welcomeMsg.innerHTML = "";
  }
}