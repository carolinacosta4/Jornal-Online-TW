const name = document.getElementById("name");
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const outname = document.getElementById("nameoutput");
const outemail = document.getElementById("emailoutput");
const outuser = document.getElementById("useroutput");
    
function funName(){
  outname.innerHTML = name.value;
}

function funEmail(){
  outemail.innerHTML = email.value;
}

function funUser(){
  outuser.innerHTML = user.value;
}
    
btn.addEventListener("click", funName)
btn.addEventListener("click", funEmail)
btn.addEventListener("click", funUser)
