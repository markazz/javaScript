/*

Author: Mark Rasheed
Date Created: 08/01/2016
Last Modified: 11/01/2016
*/


//week array
var weekArray = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

//size of week array
var weekArraySize = weekArray.length;

//counter
var i=0;

//to display 
var msg="  ";


while (i < weekArraySize)
{
	msg += "<p>"+"the day:   " +weekArray[i]+ "</p>";

				i++;
}

//to link the elements in the html file
document.getElementById("week1").innerHTML = msg;









