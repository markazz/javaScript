
// PART 1

//sub Part 1
// ==========<<<<<<<<<<

//  create the hotel object 


var hotel = {

hotelName:'Mark International Hotel',


// room rate in Euros
roomRates: 68,


// discount in percentages
myDiscount: 20,


// function to calculate the offer 
myOfferPrice: function()
{
	// formula to calculate the discounted price
	var	myOfferRate= this.roomRates*(100-this.myDiscount/100);

	return myOfferRate;
}


}





//sub Part 2
//  write the hotel name 





// get the elements from the html file 

// get the hotel name 
var hotelName = document.getElementById('');

// get the room rate
var roomRate = document.getElementById('');

// get the special rate
var specialRate = document.getElementById('');



// write the details to the html file 
hotelName.textContent = hotel.hotelName;
roomRate.textContent = '€'+hotel.roomRates;
specialRate.textContent = '€'+hotel.myOfferPrice();




// **********************************************************












// PART 2













