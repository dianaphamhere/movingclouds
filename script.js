document.getElementById("demo").innerHTML = "hello world";

var small = document.getElementById("small");
var big = document.getElementById("big");
var w = window.innerWidth;
var pos = 0;
var posB = -60;
var id = setInterval(smallInterval, 50);
var bI = setInterval (bigInterval, 40);

function smallInterval() {
	if (pos > w) {
		pos = -50;
	} else {
		pos++;
		small.style.right = pos + "px";
	}
}

function bigInterval() {
	if (posB > w) {
		posB = -60;
	} else {
		posB++;
		big.style.right = posB + "px";
	}
}