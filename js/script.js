function validateForm(){
    var username = document.forms["myForm"]["username"].value; 
    var password = document.forms["myForm"]["password"].value; 
    var email = document.forms["myForm"]["email"].value; 
    
    if(username == "" || password == ""||email==""){ 
        alert("username or password or email cannot be empty");
        return false; 
    }else{
        alert("Register Success");
        return true; 
    }
}
window.onload = function() {
    var html = document.getElementById("html"); 
    html.classList.add("hasjs"); 
    html.classList.remove("nojs");
};