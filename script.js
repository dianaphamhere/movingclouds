document.getElementById("demo").innerHTML = "hello clouds";

var small = document.getElementById("small");
var big = document.getElementById("big");
var w = window.innerWidth;

function movement(cloud, frame, beginpos, w) {
	setInterval(function(){
			if (beginpos > w) {
				beginpos = -60;
			} else {
				beginpos++;
			cloud.style.right = beginpos + "px";
		}
	}, frame)
}

movement(small, 50, 0, w);
movement(big, 40, -60, w);