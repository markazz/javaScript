
/*
1.	Use
 
if (condition1)
   statement1
else if (condition2)
   statement2
else
*/


var passwordName = "mark";

	function myFunct(passwordName)
	{
		var passwordIdDiv = document.getElementById("passwordId");

			if(myPasswordElement.value === passwordName)
				{
					passwordIdDiv.textContent = "Password accepted........You are cool !!!!!!! ";
				}

				 else if (myPasswordElement.value != passwordName) 
				 {
					passwordIdDiv.textContent = "try again.........dumboooo";
				 }
			else
			{
				passwordIdDiv.textContent = "you are pathetic !!!!!!! ";	
			}

	}

var myPasswordElement = document.getElementById("myPassword");
myPasswordElement.addEventListener('blur', function(){ myFunct(passwordName);} , false);




//*******************************************************************

// using switch 
// function takes no args/ parameters 
function myfunc()
{

var userPw = passElement.value;
var passwordIdDiv = document.getElementById("passwordId");

	switch (userPw)
	 {
		case "jack":
			passwordIdDiv.textContent = "wrong";
			break;


	case "mark":
			passwordIdDiv.textContent = " u r right";
	break;

		default:
			
		passwordIdDiv.textContent = "ok .... try again";
			break;
	}
}

var passElement = document.getElementById("myPassword");
passElement.addEventListener('blur', function(){myfunc();}, false);




