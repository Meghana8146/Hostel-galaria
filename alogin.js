var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "jayamaggie" && password == "jm#123"){
alert ("Login successfully");
window.location = "dashboard.html"; 
return false;
}
 else if(username =='')
		{
			alert("please enter user name.");
		}
		else if(password=='')
		{
        	alert("enter the password");
		}

else{
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}