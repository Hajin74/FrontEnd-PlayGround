const clock = document.querySelector(".clock");
const clockTime = clock.querySelector(".clock_inner");

function getTime()
{
    const date = new Date();
    const h = date.getHours() + 12;
    const m = date.getMinutes();
    const s = date.getSeconds();
    clockTime.innerText = `${h < 10? `0${h}` :  h} : ${m < 10? `0${m}` : m} : ${s < 10? `0${s}` : s}`
}

function init()
{
    getTime();
    setInterval(getTime, 1000);
}

init();
