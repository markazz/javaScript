


function testJS()
{
 var b = document.getElementById("name").value, url="file:///C:/Users/lorraine/Documents/YARD/next.html?name="+encodeURIComponent(b);

	document.location.href = url;

}//function closes



//  SECOND FUNCTION using onLoad

// window.onload = function() REPLACE WITH 
function onLoad()
{
//  get the complete URL of the next.html 
//  and store it in a variable called url 

var url = document.location.href;


// get the parameters MAYBE
params = url.split('?')[1].split('&'), data={},tmp;

	for(var i=0, l = params.length; i<1; i++)
	{
		tmp = params[i].split('=');
		data[tmp[0]] = tmp[1];
	}//for loop closed

	document.getElementById("here").innerHTML = data.name;
}//function onload closed





