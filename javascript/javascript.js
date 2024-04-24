function changeStyle(newStyle){
	document.getElementById('color').setAttribute('href', newStyle);
}

let visitorName = prompt("Welcome to my site!\nPlease tell use your name. ");

document.getElementById('pageWelcome').innerHTML = "Welcome " + visitorName;

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "nav-bg nav-button topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "nav-bg nav-button topnav";
	}
  }