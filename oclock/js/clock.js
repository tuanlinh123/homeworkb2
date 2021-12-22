const dayNode = document.getElementById("day");
const hoursNode = document.getElementById("hour");
const minutesNode = document.getElementById("minute");
const seconNode = document.getElementById("second");
const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const now = new Date();
let second = now.getSeconds();;
let minutes= now.getMinutes();
let hours = now.getHours();
function getTime () {
const now = new Date();

    dayNode.innerText = day[now.getDay()];
    let second = now.getSeconds();
    if(second<10){
        seconNode.innerText=`0${second}`    
    } else{
        seconNode.innerText = second;
    }
    if(minutes<10){
        minutesNode.innerHTML=`0${minutes}`
    }else{
        minutesNode.innerText = minutes;
    }
    if(hours<10){
        hoursNode.innerHTML =`0${hours}`
    }else{
        hoursNode.innerText = hours;
    }
}
setInterval(getTime,1000);