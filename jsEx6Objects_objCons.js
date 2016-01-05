



/// the object constructor notation




/*

The lion Object has properties for colour, name of group (e.g. pride),
 tail (boolean), habitat, walking speed and running speed in kms per hour.



The lion Object has a method speedDifference that returns the
 difference between its walking and running speeds.


*/


var lion = new Object();


lion.colour = "red";

lion.groupName = "pride";

lion.tail = false;

lion.habitat = "india";

lion.walkingSpeed = 32;

lion.runningSpeed = 50;

lion.speedDifference = function()
{

return lion.runningSpeed-lion.walkingSpeed;
};




//get the element from DOM tree and replace it variables



var myelement1 = document.getElementById("colr");
myelement1.textContent = lion.colour;


var element_2 = document.getElementById("element2");
element_2.textContent = lion.groupName;


var element_3 = document.getElementById("element3");
element_3.textContent = lion.tail;


var element_4 = document.getElementById("element4");
element_4.textContent = lion.habitat;


var element_5 = document.getElementById("element5");
element_5.textContent = lion.walkingSpeed;


var element_6 = document.getElementById("element6");
element_6.textContent = lion.runningSpeed;




// to display the method

var myElement7 = document.getElementById("element7");
myElement7.textContent = lion.speedDifference();








