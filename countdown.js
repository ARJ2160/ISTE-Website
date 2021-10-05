//<------------------------------------------------------------- Countdown ------------------------------------------------------------->
const countDown = () => {
    const countDate = new Date('Oct 3, 2021 22:10:00').getTime();
    const now = new Date().getTime();
    const diff = countDate - now;
    document.querySelector(".registration--text").innerText = "REGISTRATIONS CLOSES IN";

    //Set Time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate Time
    const textDay = Math.floor(diff / day);
    const textHour = Math.floor((diff % day) / hour);
    const textMin = Math.floor((diff % hour) / minute);
    const textSec = Math.floor((diff % minute) / second);
    
    //Set ID's
    document.getElementById("days").innerText = textDay;
    document.getElementById("hours").innerText = textHour;
    document.getElementById("minutes").innerText = textMin;
    document.getElementById("seconds").innerText = textSec;

    //Remove Registration Button
    if(diff === "null"){
        document.getElementById("#register--button").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.querySelector(".registration--text").innerText = "REGISTRATIONS CLOSED";
        clearInterval(countDown);
    }
}
setInterval(countDown, 1000);

