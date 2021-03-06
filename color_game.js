var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){

	if (numSquares === 6){
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		numSquares = 3;
		reset(numSquares);		
	}

})
hardBtn.addEventListener("click", function(){
	if (numSquares === 3){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		numSquares = 6;
		reset(numSquares);	
	}
})

resetButton.addEventListener("click", function(){
	reset(numSquares);
})


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//adding click listeners
	squares[i].addEventListener("click", function(){
		//grab color
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";

		}
	})
}


function changeColors(color){
//loop through all squares and change each color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;

	}
//change h1 to color

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array with num length 
	var arr = [];

	for (var i = 0; i < num; i++) {
		//get rand color and push into array
		arr.push(randomColor());
	}


	return arr;
}

function randomColor(){
	//pick red from 0-255
	//pick green from 0-255
	//pick blue from 0-255

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



function reset( numOfTiles){
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

	//generate all new colors
	colors = generateRandomColors(numOfTiles);
	//pick a new random color from array
	pickedColor = pickColor();

	//change color display to match changed color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		if (numOfTiles === 3 && i >= 3){
			squares[i].style.display = "none";
		}else{
			squares[i].style.display = "block";
		}
	}
}