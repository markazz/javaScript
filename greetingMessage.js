
// create Date instance variable 
// representing single moment in time 
var todayDate = new Date();

// getting hour for the specified date depending 
// on local time  
var myHour = todayDate.getHours();


//empty variable to display greeting message 
var greeter;


// greeting depending on the time during the day

if(myHour>18)
	{
		greeter = 'Good Evening';
	}

	else if(myHour>12)
		{
			greeter = 'Good Afternoon';	
		}
		
			else if(myHour>0)
				{
					greeter = 'Good Morning';	
				}
		else
		{
			greeter = 'welcome ';
		}


// display the message  
document.write('<h5>'+greeting+'</h5>');



/*
HTML snippet

<p>
here goes the javascript code 
<script src=""myFile.js></script>
</p>




*/







