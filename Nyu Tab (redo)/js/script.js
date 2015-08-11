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
        else if (h < 11) {
            $(".container").css("background-image", dawn);
        }
        else if (h < 16) {
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
}

function age(month, day, year) {
    var today = new Date();
    var presentDate = ((today.getMonth()+1)/12)+(today.getDate()/365.25);
    var birthday = (month/12)+(day/365.25);
    var h = ((today.getHours())/8766);
    var m = (today.getMinutes())/525960;
    var s = (today.getSeconds())/31557600;
    var ms = (today.getMilliseconds()+1)/31557600000;
    var timeSince = (today.getFullYear() + presentDate + h + m + s + ms) - (year + birthday);
    var decimal = timeSince - Math.floor(timeSince);
    document.getElementById('main').innerHTML = (round(timeSince, 10)).toFixed(10) | 0;
    document.getElementById('sub').innerHTML = ((decimal.toFixed(10))).replace(/^0+/, '');
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

var displayAge = false;

$(".clock-button").click(function(){
	displayAge = false;
});

$(".age-button").click(function(){
	displayAge = true;
});

function run() {
	if (displayAge == false){
		clock();
	}
	else if (displayAge){
		var date = document.getElementById("age-input").value;
		var y = date.substr(0,4);
		var m = date.substr(5,2);
		var d = date.substr(8,2);
		y = parseInt(y);
		m = parseInt(m);
		d = parseInt(d);
		age(m, d, y);
	}
	checkBackground();
	setTimeout('run()',1000);
}




//




function saveAge(month, day, year) {
    var m = document.getElementById(month).value;
    var d = document.getElementById(day).value;
    var y = document.getElementById(year).value;
    $.cookie('bmonth', m, {expires:365});
    $.cookie('bday', d, {expires:365});
    $.cookie('byear', y, {expires:365});
    $.cookie("ifAgeSaved", "true", {expires:365});
    $.cookie("displayTxt", "age", {expires:365});
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}

