




/*

The lion Object has properties for colour, name of group (e.g. pride),
 tail (boolean), habitat, walking speed and running speed in kms per hour.



The lion Object has a method speedDifference that returns the
 difference between its walking and running speeds.


*/


var lion = 
	{

	
		//properties
		colour:"brown", //element1

		groupName:"pride",//element2

		tail: true,//element3

		habitat:"jungle",//element4

		walkingSpeed: 2,//element5

		runningSpeed: 15, //element6


					//method
					speedDifference: function(){

					//var speed;

					return this.runningSpeed - this.walkingSpeed;

					}
	};



// document.write("the lions colour is      "+lion.colour);



var element_1 = document.getElementById("colr");
element_1.textContent = lion.colour;



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



document.write("The speed difference is:");










