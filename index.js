setInterval(() => {
    date = new Date();
    hourTime = date.getHours();
    secondsTime = date.getSeconds();
    minuetsTime = date.getMinutes();
    mllitime=date.getMilliseconds()
 
    hRoatation = 30 * hourTime + minuetsTime / 2
    mRoatation = 6 * minuetsTime + 0.1*secondsTime
   
    sRoatation = 6 * secondsTime +0.006 * mllitime
    hour.style.transform = `rotate(${hRoatation}deg)`
    minute.style.transform = `rotate(${mRoatation}deg)`
    second.style.transform = `rotate(${sRoatation}deg)`
}, 10);