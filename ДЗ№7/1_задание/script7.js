function zeroFormat(num) {
	if (num >=0 && num <=9) {
 		return '0' + num;
 	} else {
 		return num ;
 	}
}

let clock = document.getElementById('date_times');
clock.style.display = 'flex';


function dateTime() {
	let date = new Date();

	let hours = zeroFormat(date.getHours());
	let minutes = zeroFormat(date.getMinutes());
	let seconds = zeroFormat(date.getSeconds());

	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;

	let colorHours = document.getElementById('hours');
	colorHours.innerHTML = hours + ':';
	colorHours.style.color = 'red';

	let colorMinutes = document.getElementById('minutes');
	colorMinutes.innerHTML = minutes + ':';
	colorMinutes.style.color = 'blue';

	let colorSeconds = document.getElementById('seconds');
	colorSeconds.innerHTML = seconds;
	colorSeconds.style.color = 'green';
}

setInterval(dateTime, 100);