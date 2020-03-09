const form = document.getElementById('form');
const username =document.getElementById("username");
const password =document.getElementById("password");
const email =document.getElementById("email");
const pass2 =document.getElementById("pass2");

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    if(username.value =="" || password.value==""||email.value ==""||pass2.value==""){
        alert("Feilds cannot be empty");
        username.classList.add('error');
        password.classList.add('error');
        email.classList.add('error');
        pass2.classList.add('error');
    }else{
        username.classList.add("success");
        password.classList.add("success");
        email.classList.add("success");
        pass2.classList.add("success");
    }
    
    if(password.value !== pass2.value){
        alert("Password do not match");
    }
});