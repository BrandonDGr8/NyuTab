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

var dawn = "url(img/1/1.jpg)"; //variables to hold background
var day = "url(img/1/2.jpg)";
var sunset = "url(img/1/3.jpg)";
var night = "url(img/1/4.jpg)";

function checkBackground() {
    var today = new Date();
    var h = today.getHours();
        if (h < 5) {
            $(".container").css("background-image", night);
        }
        else if (h < 9) {
            $(".container").css("background-image", dawn);
        }
        else if (h < 17) {
            $(".container").css("background-image", day);
        }
        else if (h < 21) {
            $(".container").css("background-image", sunset);
        }
        else {
            $(".container").css("background-image", night);
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
	setTimeout('clock()',1000);
	checkBackground();
}

var mouseX = 0;
var mouseY = 0;
var menuOpen = false;

$("body").mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    if (menuOpen==false && mouseX < 21) {
    	$('.menu').css("width","280px");
    	menuOpen = true;
    }
    if (menuOpen && mouseX > 280) {
    	$('.menu').css("width","0px");
    	menuOpen = false;;
    };
})

$(".option-button").click(function(){
	$(".option-button").hide();
	$(".info-button").show();
	$(".option-back-button").show();
	$(".scenery-text").hide();
	$(".option-text").show();
	$('.info-text').hide();
	$(".info-back-button").hide();
});

$(".info-button").click(function(){
	$(".option-button").show();
	$(".info-button").hide();
	$(".info-back-button").show();
	$(".scenery-text").hide();
	$(".option-text").hide();
	$('.info-text').show();
	$(".option-back-button").hide();
	$(".age-input").hide();
	document.getElementById("description").style.display = "-webkit-box";
});

$(".back-button").click(function(){
	$(".back-button").hide();
	$(".info-button").show();
	$(".option-button").show();
	$(".option-text").hide();
	$(".scenery-text").show();
	$(".age-input").hide();
	$('.info-text').hide();
});

$(".age-button").click(function(){
	$(".age-input").show();
});


//

