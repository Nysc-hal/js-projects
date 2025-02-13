 let is24hourformat = false;

 function updateclock(){
    let now = new Date;
    let  hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if(!is24hourformat){
        let ampm = hours >= 12 ? "PM":"AM";
        hours = hours % 12 || 12;
        document.getElementById("clock").innerHTML = 
        `${formattime(hours)}:${formattime(minutes)}:${formattime(seconds)} ${ampm}`;
    }else{
        document.getElementById("clock").innerHTML = 
        `${formattime(hours)}:${formattime(minutes)}:${formattime(seconds)}`;
    }
}   
    function formattime(time){
        return time <10 ? "0"+time:time;
    }
    function toggleformat(){
        is24hourformat =!is24hourformat;
        updateclock();
    }
    setInterval(updateclock,1000);

    updateclock();