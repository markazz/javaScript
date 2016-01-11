/*
1.	Write a Javascript for loop to display the
 six different heading elements available in HTML, i.e. <h1>.........</h6>

*/

var headingsArray = ["<h1>  </h1>","<h2>  </h2>","<h3>  </h3>","<h4>  </h4>","<h5>  </h5>","<h6>  </h6>"];

//array size
var headingsArraySize = headingsArray.length;
var j;
var msg1 = "";

for(j=0; j<headingsArraySize; j++)
{
	msg1 += "heading  "+(j+1)+" : ";
	msg1 += "  "+headingsArray[j] +"  ";
}

	document.getElementById("theHeadings2").textContent = msg1;

// does not display line 17
//document.getElementById("theHeadings2").innerHTML = msg1;

//******************************************************************************

/*
2.	Modify the loop so that your HTML page actually displays
six different headings, all generated by the loop.
*/

var myArray = [11,20,82,33,554,74,12];
//size of array
var myArraySize = myArray.length;
// to display
var msg ="";
//counter
var i;

// to display the headings 
for(i=1; i<myArraySize; i++)
{
	msg += "<br>";
	// displaying the headings
	msg +=  "<h"+i+">"+"heading"+i+"</h"+i+">";
}

//to link the elements in html 
document.getElementById("theHeadings").innerHTML = msg;


/*
ALTERNATE METHOD
Reference: Conor Casey (Cork Training centre)


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
var msg = '';
for(var i = 0; i<6; i++){
msg += (i+1) + '<br>';
}
var el1 = document.getElementById('result1');
el1.innerHTML = msg;
 
var msg2 = '';
for(var i = 1; i<7; i++){
    msg2 += '&lt;h' + i + '&gt;' + '<br>';
}
var el2 = document.getElementById('result2');
el2.innerHTML = msg2;
 
var msg3 = '';
for(var i = 1; i<7; i++){
    msg3 += '<h' + i + '>' + 'Heading' + i + '</h' + i + '>' + '<br>';
}
var el3 = document.getElementById('result3');
el3.innerHTML = msg3;







*/





