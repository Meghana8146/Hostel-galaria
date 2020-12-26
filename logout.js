
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "jayamaggie" && password == "jm#123"){
alert ("Logout successfully");
window.location = "home.html"; 
return false;
}

}