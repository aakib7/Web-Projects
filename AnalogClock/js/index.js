setInterval(()=>{
    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    hour_rotation = 30*hours + minutes/2 
    minutes_rotation = 6 * minutes;
    seconds_rotation = 6 * seconds;

    hour.style.transform = `rotate(${hour_rotation}deg)`
    minute.style.transform = `rotate(${minutes_rotation}deg)`
    second.style.transform = `rotate(${seconds_rotation}deg)`

},1000);