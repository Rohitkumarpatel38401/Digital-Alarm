const clock=document.getElementById("clock");
const statusMsg=document.getElementById("status_msg");
const ringtone=document.getElementById("ringtone");
let alarmTime,alarmIntervalId,time;

function displayTime(){
    const now=new Date();
    let hh=now.getHours().toString().padStart(2,0);
    const mm=now.getMinutes().toString().padStart(2,0);
    const ss=now.getSeconds().toString().padStart(2,0);//mujhe padStart() ko study karna hai
    
    // if(hh > 12) hh=(hh%12).toString().padStart(2,0);
    
    time=`${hh}:${mm}`;
    clock.innerHTML=`${hh}:${mm}:${ss}`;
}
setInterval("displayTime()",1000);

function checkAlarm(){
    if(alarmTime===time){
        ringtone.play();
        statusMsg.innerHTML=`Alarm Activated & Play!!!`;
        clearInterval(alarmIntervalId);
    }
}
function activateAlarm(){
    alarmTime=document.getElementById("alarm_time").value;
    statusMsg.innerHTML=`Alarm is set for ${alarmTime} And Activated!!`;
    alarmIntervalId=setInterval("checkAlarm()",1000);
}

function stopAlarm(){
    ringtone.pause();
    statusMsg.innerHTML=`Alarm is Aborted by User!!!`;
}