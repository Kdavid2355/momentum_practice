const clock = document.querySelector("body");
const time = clock.querySelector("h3");


function getTime(){
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const mint = currentTime.getMinutes();
    const secs = currentTime.getSeconds();

    time.innerText = `${hour<10 ? `0${hour}` : hour}:${mint < 10 ? `0${mint}` : mint }:${secs < 10 ? `0${secs}` : secs}`;
}




function init(){

    getTime();
    setInterval(getTime, 0.1);
}


init()

