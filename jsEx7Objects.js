

function Animal(name, color, age, place, tail, hunt)
{

this.name = name;
this.color = color;
this.age = age;
this.place = place;
this.tail = tail;
this.hunt = hunt;

//insert method speedDifference.

 this.speedDifference = function()
{
	//return ;
};
}


//creating 5 animals

var myTiger = new Animal("tiger","yellow" , 2, "india" , true , false);

/*var myCheetah = new Animal("cheetah","yellow", 6, "india", true,false);
var myZebra = new Animal("zebra","black and white",1 ,"india" ,true , false);
var myElephant = new Animal("elephant", "gray", 3,"india" ,true ,false);
var myWolf = new Animal("wolf","white" , 2,"india" ,true ,false);
*/




//assigning variables 

var tigerDetails = myTiger.name+"  "+myTiger.color+"  ";

tigerDetails += myTiger.age+"  "+myTiger.place+"  "+myTiger.tail+"  "+
	myTiger.hunt;

/*if including method
	tigerDetails += myTiger.speedDifference();
*/



//tranfer into html

var myElement1 = document.getElementById("tigerDet");
myElement1.textContent = tigerDetails ;


/*
var myElement2 = document.getElementById("cheetahDet");
myElement2.textContent =  ;

var myElement3 = document.getElementById("zebraDet");
myElement3.textContent =  ;

var myElement4 = document.getElementById("elephantDet");
myElement4.textContent =  ;

var myElement5 = document.getElementById("wolfDet");
myElement5.textContent =  ;

*/











