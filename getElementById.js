// need to declare the variable before using it in the function 
var centerName ="the river side";
var placeName = "killarney";

// creating function for the linking html elements
 function linkingElements(idName, text)
    {
      	var element = document.getElementById(idName);
      	element.textContent = text;
    }

// using the functions 
linkingElements("span1", centerName);
linkingElements("span2", placeName);
