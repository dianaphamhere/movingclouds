document.getElementById("demo").innerHTML = "hello world";

var fifty = "50%";
var eighty ="80%";

// document.getElementById("cloud").style.right = eighty;


var small = document.getElementById("small");
var big = document.getElementById("big");
var w = window.innerWidth;
var pos = 0;
var posB = -60;
var id = setInterval(smallFrame, 50);
var bI = setInterval (bigInterval, 40);

function smallFrame() {
	if (pos > w) {
		pos = -10;
	} else {
		pos++;
		small.style.right = pos + "px";
	}
}

function bigInterval() {
	if (posB > w) {
		posB = -10;
	} else {
		posB++;
		big.style.right = posB + "px";
	}
}

function movement(pos){
	var random = Math.floor(Math.random() * 3);
	pos = pos + random;
	return pos;
}
