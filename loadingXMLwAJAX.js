// TITLE: loading XML with AJAX




/*

AJAX consists of 2 steps:

1. request
2. response


*/


// creating XMLHttpRequest object first

var myRequest = new XMLHttpRequest();




// 2. response

// put the condition XMLHttpRequest() load's  property
// when the response has loaded
myRequest.onload = function()
	{

		// check condition
		// if the server is successful
		if(myRequest.status === 200)
			{


//  sort out the xml file and add it into html file
// step 1. get xml from the server
var response = myRequest.responseXML;

var events = response.getElementsByTagName('event');


	// to get at each  stuff - use LOOP
	for()
	{
		// creating variables
		var container, image, location, city, newline;



			 //create div container
			 container = document.createElement('div');

			 //give the container class name 
		     container.className = 'event';
        
						// add map
						// create img tag
						image = document.createElement('img');
						// setting the attributes for the image tag
						image.setAttribute('src', getNodeValue(events[i], 'map')	);
						// connecting the text node
						image.appendChild(document.createTextNode(getNodeValue(events[i],'map')));

			// attach image tag to the div container
			container.appendChild(image);

				

						// add location data (similar to image tag steps)

						/* remeber 2 steps involved in DOM:
step1:
create the node :

code:
a. createElement('tagName');
b. createTextNode(name);



step2:
append the node 

code: 
parentNode.appendChild(nameOfChildOfNode);



						*/

						location = document.createElement('p');

					// you want the location to be displayed bold
					// create the bold tag 
					city = document.createElement('b');

					// creating a new line 
					newline = document.createElement('br');

					// putting data in city tag
					city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));

					//attaching and and arranging stuff in the html file 
					location.appendChild(newline);

					//but city is before newline
					// use insertBefore() 
					location.insertBefore(city, newline);

					// apending the event date 
					location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));

					// lastly append the location to the container
					container.appendChild(location);



// lastly append all this to the content tag in the html 
document.getElementById('content').appendChild(container);
	}// for close

							// to insert the values
							// creating function to get contents from the xml file
							// inshort this is the data from the xml file 
							function getNodeValue(obj, tag)
								{
									return obj.getElementsByTagsName(tag)[0].firstChild.nodeValue;
								}

			}// if close

	}


//1. request
/*
 request has 2 steps: 

				1. prepare the request
				2.send the request
*/


//1. prepare the request
myRequest.open('GET','myXMLfile.xml;',true);

		// 2.send the request
		myRequest.send(null);

/*
The XML for each event is transformed into the following html structure:

<div class="events"> 

	<img src="file.png" alt="location" >

		<p>
			 <b> Location </b> 

			 <br> 
				 Event date
		</p>
</div>
*/



/*
XML CODE:

<!-- creating list of events  -->
<events>

	<!-- event 1  -->
	<event>
		<location> San Francisco, CA</location>
		<date> May 1</date>
		<map>image1.png</map>
	</event>


		<!-- event 2  -->
		<event>
			<location> London</location>
			<date> May 13</date>
			<map>image13.png</map>
		</event>

			<!-- event 3  -->
			<event>
				<location> Dublin</location>
				<date> May 17</date>
				<map>image17.png</map>
			</event>
</events>


*/














// 1. request
/*
is refined into 2 more steps:

1. setting up request(open)
2. sending the request (send)

*/


// 1. setting up / preparing  (open method)
myRequest.open('GET','myXMLfile.xml',true);


// send the request
myRequest.send(null);




