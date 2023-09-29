let [seconds,minute,hours]=[0,0,0];
let displaytime=document.getElementById("displaytime");

function stopwatch(){   //function of setting the values and manupulating the values of time
    seconds++;
    if(seconds==60){
        seconds=0;
        minute++;
        if(minute==60){
            minute=0;
            hours++;
        }
    }
    let h= hours<10 ? "0"+hours : hours;
    let m= minute<10 ? "0"+minute : minute;
    let s= seconds<10 ? "0"+seconds : seconds;
    displaytime.innerHTML=h+ ":"+m+":"+s;
}

let timer=null;
let flag=0;
let playpauseel=document.getElementById("playstop");
function watchstart(){
    if(flag===0){
       playpauseel.classList.remove("fa-play");
       playpauseel.classList.add("fa-pause");
    }
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}

document.getElementById("watchstop").addEventListener("click",function(){
    clearInterval(timer);
    playpauseel.classList.remove("fa-pause");
    playpauseel.classList.add("fa-play");
});

document.getElementById("watchreset").addEventListener("click",function(){
    clearInterval(timer);
    playpauseel.classList.remove("fa-pause");
    playpauseel.classList.add("fa-play");
    [seconds,minute,hours]=[0,0,0];
    displaytime.innerHTML="00:00:00";
})

