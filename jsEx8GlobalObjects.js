
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













