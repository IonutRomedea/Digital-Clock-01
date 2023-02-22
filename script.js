let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let meridian = document.getElementById('ampm');

function showTime () {
    let time = new Date;

        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        if(hours <=9) {
            hours = "0" + hours;
        }

        if(minutes<=9) {
            minutes = "0" + minutes;
        }

        if(seconds <=9) {
            seconds = "0" + seconds;
        }

        if(hours > 12) {
            ampms = "PM";
        }else {
            ampms = "AM"
        }

        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
        meridian.textContent = ampms;
}

setInterval(showTime, 1000)
