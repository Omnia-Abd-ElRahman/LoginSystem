let welcomeMsg = document.getElementById("welcomeMsg");
let logOutBtn = document.getElementById("logOutBtn");

window.addEventListener('load', function () {
  displayUserName();
});

function displayUserName() {
  const signName = localStorage.getItem("signName");
  if (signName !== null) {
    const capitalizedSignName = signName.charAt(0).toUpperCase() + signName.slice(1);
    welcomeMsg.innerHTML = `Welcome, ${capitalizedSignName}`;
  } else {
    welcomeMsg.innerHTML = "";
  }
}

logOutBtn.addEventListener('click', function () {
window.location.href =`./index.html`
});

