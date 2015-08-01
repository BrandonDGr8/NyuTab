function checkTime(i) { //checks if time is before or after 10; applies for minutes and seconds
	if (i<10) {i = "0" + i};
	return i;
}

function checkHour(i) {
	if (i <= 11) {
		if (i == 0) i = 12;
	}
	else {
		if (i != 12) {
			i-=12;
		}
	}
	return i;
}

function getPeriod(i) { //checks if time is AM or PM
	if (i <= 11) {
		return "AM";
		if (i == 0) i = 12;
	}
	else {
		if (i != 12) {
			i-=12;
		}
		return "PM"
	}
}

function clock() { //gets the time
	var today = new Date();
	var hour = today.getHours(); //gets current hour of time
	var minute = today.getMinutes(); //gets current minute of time
	var second = today.getSeconds(); //gets current second of time
	hour = checkHour(hour);
	minute = checkTime(minute); //makes sure minute and seconds dont display 10 on the clock
	second = checkTime(second);
	var period = getPeriod(hour); //gets AM or PM
	var timeString = hour + ":" + minute + ":" + second;
	document.getElementById('main').innerHTML = timeString;
	document.getElementById('sub').innerHTML = period;
	
	console.log(hour + ":" + minute + ":" + second + period)
	setTimeout('clock()',1000);
}