
/*1.	Using the JavaScript examples on pages 128 – 129 as a reference, 
repeat the series of property and 
method requests for a string of 5 or more words.

2.	Use the Number object to 
a.	Determine if “abc” is not a number
b.	Round 23.98673495 to 3 decimal places
c.	Limit 765.7898 to 1 decimal place

3.	Use the Math object to 
a.	Round 143.436
b.	Derive the square root of 192
c.	Round 45.23 up to the nearest integer
d.	Round 38.91 down to the nearest integer
e.	Create a random number between 0 and 100.

4.	Using the Date object
a.	Create a date for the 2nd of April 1999
b.	Retrieve the value of minutes currently

*/




//********************************************************************

//Determine if “abc” is not a number
// result: working 

var originalNumber = "abc";

// var msg = originalNumber.isNaN(testValue)


var msg1 = isNaN(originalNumber);

var el1 = document.getElementById("myNumber1");
el1.textContent = msg1;

//********************************************************************

//Round 23.98673495 to 3 decimal places

var originalNumber = 23.98673495;

var msg2 = originalNumber.toFixed(3);

var el2 = document.getElementById("myNumber2");
el2.textContent = msg2;

//********************************************************************

//Limit 765.7898 to 1 decimal place

var originalNumber = 765.7898;

var  msg3 = originalNumber.toFixed(1);


var el3 = document.getElementById("myNumber3");
el3.textContent = msg3;


//********************************************************************

/*3.	Use the Math object to 
a.	Round 143.436
b.	Derive the square root of 192
c.	Round 45.23 up to the nearest integer
d.	Round 38.91 down to the nearest integer
e.	Create a random number between 0 and 100.
*/


//a.	Round 143.436

var roundedNumber = Math.round(143.436);

var el4 = document.getElementById("myNumber4");
el4.textContent = roundedNumber;


//********************************************************************

//b.	Derive the square root of 192


var squareRoot = Math.sqrt(192);

var el5 = document.getElementById("myNumber5");
el5.textContent = squareRoot;

//********************************************************************

//c.	Round 45.23 up to the nearest integer

var roundUp = Math.ceil(45.23);


var el6 = document.getElementById("myNumber6");
el6.textContent = roundUp;




//********************************************************************

//d.	Round 38.91 down to the nearest integer

var roundDown = Math.floor(38.91);

var el7 = document.getElementById("myNumber7");
el7.textContent = roundDown;

//********************************************************************

//e.	Create a random number between 0 and 100.

var randomNumber = Math.random()*100;

var el8 = document.getElementById("myNumber8");
el8.textContent = randomNumber;




//********************************************************************

/*4.	Using the Date object
a.	Create a date for the 2nd of April 1999
b.	Retrieve the value of minutes currently
*/


//a.	Create a date for the 2nd of April 1999


//creating the date object constructor
var myDate1 = new Date(1999,03,02);

var el9 = document.getElementById("myNumber9");
el9.textContent = myDate1 ;

//********************************************************************

//b.	Retrieve the value of minutes currently


var myDate2 = new Date();

var minutesCurrently = myDate2.getMinutes();

var el10 = document.getElementById("myNumber10");
el10.textContent =  minutesCurrently;

//********************************************************************



