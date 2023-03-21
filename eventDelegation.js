// TASK 1
// create function to get the target 
function getTheTargetElement(e){

    return e.target;
}


// TASK 2
//create function to remove item 
function removeItem(e){

// create the variables 
var target, parent, grandParent;

// get the item Clicked 
target = getTheTargetElement(e);

// get its list item 
parent = target.parentNode;

// get its list  
grandParent = target.parentNode.parentNode;

// remove the element
grandParent.removeChild(parent);

}

// TASK 3
//  prevent the button to take you else where 
e.preventDefault();


// TASK 4
//  add event listener to the items 

// get the html element 
var el = document.getElementById('myUserName');

el.addEventListener('click', function(e){
    removeItem(e);
}, false);





