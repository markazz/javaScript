




var msg ="";




function checkNumber(inputNumber)
{


	if((inputNumber>=10) && (inputNumber<=50))
	{
		msg="You submitted a valid number";
	}

			else
			{
				
			msg= "Valid numbers are between 10 and 50. Try again!";

			}


}



// calling the function
checkNumber(51);


//assigning the elements in html
var element = document.getElementById("myAnswer1");
element.textContent = msg;







/*
Extra:
		Rewrite the checkNumber function to 
		determine if the submitted number is even or odd.
*/


var msg2 ="";


function checkNumberEvenOrOdd(evenOrOddNumber)
{


	if((evenOrOddNumber%2) == 0)
	{

		msg2 ="even";
	}

		else
		{
			msg2 ="odd";
		}


}




//calling the function 
checkNumberEvenOrOdd(7);


//assigning the elements in html
var element2 = document.getElementById("myAnswer2");
element2.textContent = msg2;





