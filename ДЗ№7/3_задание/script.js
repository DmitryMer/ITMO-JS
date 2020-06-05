let svetofor = document.querySelector('traffic_lights');

let redColor = document.getElementById('red');
let yellowColor = document.getElementById('yellow');
let greenColor = document.getElementById('green');


function changeLight() {
	setTimeout( function() {redColor.classList.add('red')} , 0);
	setTimeout( function () {redColor.classList.remove('red')}, 2000);

	setTimeout( function() {yellowColor.classList.add('yellow')}, 3000);
	setTimeout( function() {yellowColor.classList.remove('yellow')}, 5000);

	setTimeout( function() {greenColor.classList.add('green')}, 6000);
	setTimeout( function() {greenColor.classList.remove('green')}, 8000);

	setTimeout( function() {yellowColor.classList.add('yellow')}, 9000);
	setTimeout( function() {yellowColor.classList.remove('yellow')}, 11000);

	return setTimeout(changeLight, 12000);
}

changeLight();