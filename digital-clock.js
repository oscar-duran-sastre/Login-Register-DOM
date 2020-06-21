
const showTime = () => {

    let now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.querySelector('#digitalClock').innerHTML = hours + ":" + minutes + ":" + seconds;

}

window.onload = function () {
    setInterval(showTime, 500);
};

export { showTime };
