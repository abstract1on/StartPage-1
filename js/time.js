setInterval(showTime, 1000); 

var clock = document.getElementById("clock");
            
function showTime() { 
    var time = new Date(); 

    var hour = time.getHours(); 
    var min = time.getMinutes();

    var day = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    var month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];

    var curDay = day[time.getDay()];
    var curMon = month[time.getMonth()];
    var date = time.getDate();

    switch (date){
        case 1:
        case 21:
        case 31:
            date += "<sup>st</sup>";
            break;
        case 2:
        case 22:
            date += "<sup>nd</sup>";
            break;
        case 3:
        case 23:
            date += "<sup>rd</sup>";
            break;
        default:
            date += "<sup>th</sup>";
    }

    var ampm = hour >= 12 ? " pm" : " am";
    hour = hour % 12;
    hour = hour ? hour : 12;

    min = min < 10 ? "0" + min : min; 
    hour = hour < 10 ? "0" + hour : hour;

    var curTime = hour + ":" + min + ampm;
    var curDate =  curDay + ". " + curMon + " " + date;

    clock.innerHTML = "[" + curTime + "] :: [" + curDate + "]"; 
} 

showTime(); 