var squares = document.querySelectorAll(".squares");
var rgbDisplay = document.querySelector("#rgbDisplay");


for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}
var randomColor = squares[Math.floor(Math.random() * squares.length)].style.backgroundColor;
rgbDisplay.textContent = randomColor;