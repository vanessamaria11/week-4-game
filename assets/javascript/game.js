// var targetnumber;

// var img1number;
// var img2number;
// var img3number;
// var img4number;

var score;

var min=19;
var max=120;
var random = Math.floor(Math.random()*(max - min + 1)) + min;
$("#randomnumber").html(random);
console.log(random);
var win=0;
var lose=0;

var total=0;

//set first click = to var first number
//set second click = to var second number
//set third click = to var third number
// function generateNumber(n, requiredSum){
// 	var remainder = n;
// 	var step= randomn - 2;
// 	var 
// }
// var crystal = {
// 	points:0
// }


//create an empty array for the four different crystals (which is why we have i<4)
//
var crystals = [];
for (var i=0; i<4; i++){
//creating crystal object at each index "i" 
	crystals[i]={
		// ":" says its a property
		points:10
	}
	//calling the AssignValue function below.
	AssignValue(crystals[i])
}
console.log(crystals);

//starting our count
var count=0;
//using the each local function callback
$(".pic").each(function(){
	//setting the variable as a jquery object
	var picture= $(this);
	//setting our value for the crystal
	picture.attr("data-crystal", count);
	picture.on("click", function()
		{
			//converts the variable into a jquery object
			var clickedPic = $(this);
			//"data-crystal"is our index for crystals array (line29)
			var crystalIndex = clickedPic.attr("data-crystal");
			//testing to see if points work
			console.log(crystals[crystalIndex]);
			// do not use "var total" because that would create a local variable, "total" retrieves it from line 18
			total=total+crystals[crystalIndex].points;
			$("#addpoints").html(total);

			if (total === random){
			win++;
			$("#numberofwins").html(win);
			ResetGame();
			console.log("win") ;
			}
			else if (total>random) {
			lose++
			$("#numberoflosses").html(lose);
			ResetGame();
			console.log("loser!")
			}

		});

	//sets up for the next object, not the current object
	count++;
});

//gives randomn values for the four crystals in the loop above.
function AssignValue(crystal){
	var min=1;
	var max=12;
	crystal.points = Math.floor(Math.random()*(max-min+1))+min;

}
//resetgame to reset the total score, randomn number, and crystal values.
function ResetGame(){
	//reset users total score to 0
	total=0;
	//updates the display from the points (on your html)
	$("#addpoints").html(total);
	//retrieves new random number for the user to try and guess
	random=Math.floor(Math.random()*(max-min+1))+min;
	//updates the display of the random number
	$("#randomnumber").html(random);
	//resets the array using the four loop
	for (var i=0; i<crystals.length; i++)
	{
		AssignValue(crystals[i])
	}

}
//AssignValue(crystal);
//console.log(crystal);

























