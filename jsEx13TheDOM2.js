/*
Author: mark rasheed
date: 12/01/2016
updated: 13/01/2016
*/



/*1.	Using getElementById(), assign a class to the first div
This should result in a 2px dashed blue border surrounding the div.
*/


// get the element
var firstDiv = document.getElementById("content");

// update or change
firstDiv.className = "myFirstDiv";




//************************************


//2.Using querySelector(), assign a class to the first abbr element here: div#content p abbr

//get the location
var qSelector1 = document.querySelector("div#content p abbr");


// update or change

qSelector1.className = "qSel1";


//************************************


//3.Using getElementsByTagName(), assign a class to all strong elements.


// get the nodeList
var strongNodeList = document.getElementsByTagName("strong");


// use for loop 
// check if there are elements 
if(strongNodeList.length > 0)
{

	for(var i=0; i< strongNodeList.length; i++)
		{

		//update or change
		strongNodeList[i].className = "stronger";

		}
}

//************************************

//4.Assuming that the h1 and h2 elements employ the same class, use getElementsByClassName() to change  that class.

//updated: 13/01/2016
// reference: Conor Casey (cork training centre)
var els = document.getElementsByClassName("headingClass");
var elsSize = els.length;
if(elsSize > 0)
{
	// working backwards in the nodelist array due to bug caused by live nodelist behaviour
	for(var j= elsSize-1; j>=0; j--)
		{
			 els[j].className = "headerColour";
		}	
}
//************************************
//5.Using querySelectorAll(), 
//loop through all the li element 
//nodes: div#menu li.className  and change the name of the class in use.

var listItemsNodeList = document.querySelectorAll("div#menu li.listItems");

//check if there are items
if(listItemsNodeList.length > 0)
{

//loop through the items
for(var b=0; b < listItemsNodeList.length; b++)
{
	//update or change the value of class attribute
	listItemsNodeList[b].className = "listItemsColour";
}
}


//********************************************
//6.	Modify your code so that you can observe the difference between a live nodelist and a static nodelist.

// updated: 13/.1/206
// reference: Conor Casey (ctc)

// first make changes in the html file 
// keeps the data of the live elements 
var liveNodeList = document.getElementsByClassName("orderList");
	// stores the number of elements in the liveNodeList array
	var liveNodeListLength = liveNodeList.length;

// stores the data of initial assigned elements 
var staticNodeList = document.querySelectorAll(".orderList");

	// if the number of elements in the array are greater than zero 	
	if(liveNodeListLength > 0)
		{

		// updating the second element in the array 
		//rede is dummy class..... can be a class name in css or html file 
		liveNodeList[1].className= "rede";
	
		}






















