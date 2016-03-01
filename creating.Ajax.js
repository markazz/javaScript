// steps showing creating AJAX in javascript:

// creating the XMLHttpRequest object to use AJAX
var xhr = new XMLHttpRequest();

/*
 2 steps involved in AJAX: 
							 1.Request 
							 2.Response 
*/

// STEP 2: RESPONSE

// using XMLHttpRequest object's onload property 
// using onload property coz when the response has loaded

//creating function for checking condition and put in onload property 
xhr.onload = function()
	{
		// check condition
		//  using XMLHttpRequest object's status property
		// to check if server status was ok
		// 200 stands for server working properly
		if(xhr.status === 200) // if its ok, then execute the following line 
			{
					// using XMLHttpRequest object's responseText property
					//and adding it into html file 

					var htmlElement = document.getElementById('contentHtml');

					// update the html section or add into the html section called contentHtml
					htmlElement.innerHTML = xhr.responseText;

			}
	}


// STEP 1: RQUEST
/*
 Request is refined into two further steps:
											1. formulate 
											2. send
*/

		//1. formulate
		// formulate is only setting up stuff 
		// use XMLHttpRequest object's open method
		xhr.open('GET','myHTMLfile.html', true);


					//2. send
					// use XMLHttpRequest object's send method
					// using null coz do not want to attach anything to the retrieving data
					xhr.send('null');






