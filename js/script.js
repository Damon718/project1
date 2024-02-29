function validateForm(){
    var username = document.forms["myForm"]["username"].value; 
    var password = document.forms["myForm"]["password"].value; 
    var email = document.forms["myForm"]["email"].value; 
  
}
window.onload = function() {
    var html = document.getElementById("html"); 
    html.classList.add("hasjs"); 
    html.classList.remove("nojs");
};