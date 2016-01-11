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


/*
Alternate method:
Reference: Conor Casey (Cork Training Cork)
Date: 11/01/2016


var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var i = 0;
var msg = '';
var d = new Date();
var today = d.getDay();
while (i < weekDays.length)
{
    if(i=== today){
        msg += '<p>' + weekDays[i] + ' .... That\'s today!</p>';
    }
    else{
    msg += '<p>' + weekDays[i] + '</p>';    
    }
    i++;
}
var el = document.getElementById('result');
el.innerHTML = msg;
*/






