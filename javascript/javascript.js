function changeStyle(newStyle){
	document.getElementById('color').setAttribute('href', newStyle);
}

let visitorName = prompt("Welcome to my site!\nPlease tell use your name. ");

document.getElementById('pageWelcome').innerHTML = "Welcome " + visitorName;

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "main-nav nav-bg nav-button topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "main-nav nav-bg nav-button topnav";
	}
  }

  function newFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "main-nav nav-bg nav-button topnav mobile") {
	  x.className += " responsive";
	} else {
	  x.className = "main-nav nav-bg nav-button topnav mobile";
	}
  }

  function thirdFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "main-nav nav-bg nav-button topnav phone-nav") {
	  x.className += " responsive";
	} else {
	  x.className = "main-nav nav-bg nav-button topnav phone-nav";
	}
  }