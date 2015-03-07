var night = "";
var day = "";
var dawn = "";
var sunset = "";

var c = 0;  //variable for checkHour to see if hour changes
var k = 0;  //variable for checkHour to

$(document).ready(function () {
    $(".button").fadeTo("fast",0.2);
    $(".button").mouseenter(function () {
        $(this).fadeTo("fast",0.5);
    });
    $(".button").mouseleave(function () {
        $(this).fadeTo("fast",0.2);
    });
    $(".mountains").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".mountains").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".beach").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".beach").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".sky").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".sky").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".city").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".city").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".arctic").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".arctic").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".forest").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".forest").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".desert").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".desert").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".earth").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".earth").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".custom").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".custom").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".options").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".options").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });


    $(".displayAge").mouseenter(function () {
        $(this).addClass("optionHighlight");
    });
    $(".displayAge").mouseleave(function () {
        $(this).removeClass("optionHighlight");
    });
    $(".displayClock").mouseenter(function () {
        $(this).addClass("optionHighlight");
    });
    $(".displayClock").mouseleave(function () {
        $(this).removeClass("optionHighlight");
    });



    $(".button").click(function () {
        $(".list").fadeTo("fast",0.7);
    });
    $(".list").mouseleave(function () {
        $(this).hide("fast");
    });
    $(".i").click(function () {
        $(".description").fadeTo("fast", 0.7);
        $(".optionsmenu").hide("fast");
    });
    $(".i").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".i").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".options").click(function () {
        $(".optionsmenu").fadeTo("fast", 0.7);
        $(".description").hide("fast");
    });
    $(".i").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".i").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });
    $(".close").click(function () {
        $(".description").hide("fast");
        $(".optionsmenu").hide("fast");
        $(".afterAgeClick").hide("fast");
    });
    $(".close").mouseenter(function () {
        $(this).fadeTo("fast",0.6);
    });
    $(".close").mouseleave(function () {
        $(this).fadeTo("fast",1);
    });



    $(".mountains").click(function () {
        $.cookie("scene", "mountains", {expires:365});
        checkCookie();
    });
    $(".beach").click(function () {
        $.cookie("scene", "beach", {expires:365});
        checkCookie();
    });
    $(".sky").click(function () {
        $.cookie("scene", "sky", {expires:365});
        checkCookie();
    });
    $(".city").click(function () {
        $.cookie("scene", "city", {expires:365});
        checkCookie();
    });
    $(".arctic").click(function () {
        $.cookie("scene", "arctic", {expires:365});
        checkCookie();
    });
    $(".forest").click(function () {
        $.cookie("scene", "forest", {expires:365});
        checkCookie();
    });
    $(".desert").click(function () {
        $.cookie("scene", "desert", {expires:365});
        checkCookie();
    });
    $(".earth").click(function () {
        $.cookie("scene", "earth", {expires:365});
        checkCookie(); 
    });
    $(".custom").click(function () {
        $.cookie("scene", "custom", {expires:365});
        checkCookie();
    });



    $(".displayAge").click(function () {
        $(".afterAgeClick").show("fast");
        if ($.cookie('ifAgeSaved') == 'true') {
            $.cookie("displayTxt", "age", {expires:365});
        }
    });
    $(".displayClock").click(function () {
        $.cookie("displayTxt", "clock", {expires:365});
        $(".afterAgeClick").hide("fast");
    });
});



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var o = "";
    if (h <= 11) {
        o = "AM";
        if (h == 0)
            h = 12;
    }
    else {
        if (h != 12) {
            h-=12;
        }
        o = "PM";
    }
    if ($.cookie("displayTxt") === undefined || $.cookie("displayTxt") === "clock") {
        $("#agetxt").hide();
        $("#small").show();
        document.getElementById('txt').innerHTML = h + ":" + m;
        document.getElementById('smaller').innerHTML = ":" + s;
        document.getElementById('small').innerHTML = o;
    }
    else if ($.cookie("displayTxt") === "age") {
        $("#agetxt").show();
        $("#small").hide();
        var mo = parseInt($.cookie('bmonth'));
        var dy = parseInt($.cookie('bday'));
        var yr = parseInt($.cookie('byear'));
        console.log(mo);
        console.log(dy);
        console.log(yr);
        calcAge(mo, dy, yr);
    }
    
    var t = setTimeout(function(){startTime()},500);
    // checkCookie();
    checkHour();
}

function checkHour() {
    $(document).ready(function () {
        var today = new Date();
        var h = today.getHours();

            //set to time of day once; check cookie once it does.

            //put c before
            console.log("Before: " + c);

            if (h < 4 && c !== 1) {

                $("#image").attr("src", night);
                checkCookie();
                c = 1;

            }
            else if (h < 10 && c != 2) {

                $("#image").attr("src", dawn);
                checkCookie();
                c = 2;
                
            }
            else if (h < 15 && c != 3) {

                $("#image").attr("src", day);
                checkCookie();
                c = 3;

            }
            else if (h < 20 && c != 4) {

                $("#image").attr("src", sunset);
                checkCookie();
                c = 4;

            }

            // if (h < 4) {

            //     if (k !== 1) {
            //         $("#image").attr("src", night);
            //         k = 1;
            //     }
                
            //     if (c !== 1) {
            //         checkCookie();
            //         c = 1;
            //     }

            // }
            // else if (h < 10) {

            //     if (k !== 2) {
            //         $("#image").attr("src", dawn);
            //         k = 2;
            //     }
                
            //     if (c !== 2) {
            //         checkCookie();
            //         c = 2;
            //     }
                
            // }
            // else if (h < 15) {

            //     if (k !== 3) {
            //         $("#image").attr("src", day);
            //         k = 3;
            //     }
                
            //     if (c !== 3) {
            //         checkCookie();
            //         c = 3;
            //     }
            // }
            // else if (h < 20) {

            //     if (k !== 4) {
            //         $("#image").attr("src", sunset);
            //         k = 4;
            //     }
                
            //     if (c !== 4) {
            //         checkCookie();
            //         c = 4;
            //     }
            // }
            else {
                $("#image").attr("src", night);
            }

            
            console.log("After: " + c);
    });
    // var z = setTimeout(function(){checkHour()},5000)

    //future idea: find a way to set image after time period has changed so gifs can loop without interruption
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

function checkCookie() {
    var s = $.cookie("scene");
    if (s == undefined) {
        night = "img/mountains-night-1.jpg";
        day = "img/mountains-day-1.jpg";
        dawn = "img/mountains-dawn-1.jpg";
        sunset = "img/mountains-sunset-1.jpg";
    }
    else if (s == "mountains") {
        night = "img/mountains-night-1.jpg";
        day = "img/mountains-day-1.jpg";
        dawn = "img/mountains-dawn-1.jpg";
        sunset = "img/mountains-sunset-1.jpg";
    }
    else if (s == "beach") {
        night = "img/beach-night-1.jpg";
        day = "img/beach-day-1.jpg";
        dawn = "img/beach-dawn-1.jpg";
        sunset = "img/beach-sunset-1.jpg";
    }
    else if (s == "sky") {
        night = "img/sky-night-1.jpg";
        day = "img/sky-day-1.jpg";
        dawn = "img/sky-dawn-1.jpg";
        sunset = "img/sky-sunset-1.jpg";
    }
    else if (s == "city") {
        night = "img/city-night-1.jpg";
        day = "img/city-day-1.jpg";
        dawn = "img/city-dawn-1.jpg";
        sunset = "img/city-sunset-1.jpg";
    }
    else if (s == "arctic") {
        night = "img/arctic-night-1.jpg";
        day = "img/arctic-day-1.jpg";
        dawn = "img/arctic-dawn-1.jpg";
        sunset = "img/arctic-sunset-1.jpg";
    }
    else if (s == "forest") {
        night = "img/forest-night-2.jpg";
        day = "img/forest-day-1.jpg";
        dawn = "img/forest-dawn-1.jpg";
        sunset = "img/forest-sunset-1.jpg";
    }
    else if (s == "desert") {
        night = "img/desert-night-1.jpg";
        day = "img/desert-day-1.jpg";
        dawn = "img/desert-dawn-1.jpg";
        sunset = "img/desert-sunset-1.jpg";
    }
    else if (s == "earth") {
        night = "img/earth-night-1.jpg";
        day = "img/earth-day-1.jpg";
        dawn = "img/earth-dawn-1.jpg";
        sunset = "img/earth-sunset-1.jpg";
    }
    else if (s == "custom") {
        if ($.cookie('nightcustom') == undefined)
            night = "img/customerror.jpg";
        else
            night = $.cookie('nightcustom');
        if ($.cookie('sunsetcustom') == undefined)
            sunset = "img/customerror.jpg";
        else
            sunset = $.cookie('sunsetcustom');
        if ($.cookie('daycustom') == undefined)
            day = "img/customerror.jpg";
        else
            day = $.cookie('daycustom');
        if ($.cookie('dawncustom') == undefined)
            dawn = "img/customerror.jpg";
        else
            dawn = $.cookie('dawncustom');
    }
    
    // var r = setTimeout(function(){checkCookie()},5000);
}

function saveCustom(input) {
    var customlink = document.getElementById(input).value;
    switch(input) {
        case 'dawnbox':
            console.log(input);
            $.cookie("dawncustom", customlink, {expires:365});
            break;
        case 'daybox':
            $.cookie("daycustom", customlink, {expires:365});
            break;
        case 'sunsetbox':
            $.cookie("sunsetcustom", customlink, {expires:365});
            break;
        case 'nightbox':
            $.cookie("nightcustom", customlink, {expires:365});
            break;
    }

}

function calcAge(month, day, year) {
    var today = new Date();
    var presentDate = ((today.getMonth()+1)/12)+(today.getDate()/365.25);
    var bday = (month/12)+(day/365.25);
    var h = ((today.getHours())/8766);
    var m = (today.getMinutes())/525960;
    var s = (today.getSeconds())/31557600;
    var ms = (today.getMilliseconds()+1)/31557600000;
    var timeSince = (today.getFullYear() + presentDate + h + m + s + ms) - (year + bday);
    var decimal = timeSince - Math.floor(timeSince);
    document.getElementById('txt').innerHTML = (round(timeSince, 10)).toFixed(10) | 0;
    document.getElementById('smaller').innerHTML = ((decimal.toFixed(10))).replace(/^0+/, '');
    // var t = setTimeout(function(){calcAge(month,day,year)},400);
}

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