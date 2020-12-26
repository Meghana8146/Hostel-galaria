

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

 if(username =='')
		{
			alert("please enter user name.");
		}
		else if(password=='')
		{
        	alert("enter the password");
		}

else{
	alert ("Login successfully");
window.location = "dash.html"; 
return false;

}
}
