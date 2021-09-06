var displayclockid = document.getElementById('displayclockid');
var displaydtopwatchid = document.getElementById('displaystopwatchid');
var displaytimerid = document.getElementById('displaytimerid');

var clockboxid = document.getElementById('clockboxid');
var clockboxtxtid = document.getElementById('clockboxtxtid');

var stopwatchboxid = document.getElementById('stopwatchboxid');
var stopwatchboxtxtid = document.getElementById('stopwatchboxtxtid');

var timerboxid = document.getElementById('timerboxid');
var timerboxtxtid = document.getElementById('timerboxtxtid');

var runningclock24id = document.getElementById('runningclock24id');
var runningclock12id = document.getElementById('runningclock12id');

var stopwatchstartboxid = document.getElementById('stopwatchstartboxid');
var stopwatch4boxid = document.getElementById('stopwatch4boxid');

var headid = document.getElementById('headid');
var headtxtid = document.getElementById('headtxtid');

var stopwatchdeletboxid = document.getElementById('stopwatchdeletboxid');
var stopwatchlapboxid = document.getElementById('stopwatchlapboxid');
var stopwatchrestartboxid = document.getElementById('stopwatchrestartboxid');

var animationboxid = document.getElementById('animationboxid');

var timerstartbuttonid = document.getElementById('timerstartbuttonid');
var timer2buttonid = document.getElementById('timer2buttonid');

var timernumberupid = document.getElementById('timernumberupid');
var timernumberdownid = document.getElementById('timernumberdownid');

var clicksound = document.getElementById('clicksound');
var scrollsound = document.getElementById('scrollsound');
var alarmsound = document.getElementById('alarmsound');

var bottomblackid = document.getElementById('bottomblackid');
var timesofjin = document.getElementById('timesofjin');

var sleepnap = document.getElementById('sleepnap');

function jinclock(){
    if(soundon === 1){
        clicksound.play();
    }
    displayclockid.style.display = 'block'
    displaydtopwatchid.style.display = 'none';
    displaytimerid.style.display = 'none';

    clockboxid.style.boxShadow = '4px 4px 6px white';
    stopwatchboxid.style.boxShadow = 'none';
    timerboxid.style.boxShadow = 'none';

    createlap.style.display = "none";
    headtxtid.style.display = 'block';
}

function jinstopwatch(){
    if(soundon === 1){
        clicksound.play();
    }
    displayclockid.style.display = 'none'
    displaydtopwatchid.style.display = 'block';
    displaytimerid.style.display = 'none';

    clockboxid.style.boxShadow = 'none';
    stopwatchboxid.style.boxShadow = '4px 4px 6px white';
    timerboxid.style.boxShadow = 'none';

    if(lapcount > 0){
        createlap.style.display = "block";
        headtxtid.style.display = 'none';
    }
    else if(lapcount === 0){
    createlap.style.display = "none";
    headtxtid.style.display = 'block';
    }
}

function jintimer(){
    if(soundon === 1){
        clicksound.play();
    }
    displayclockid.style.display = 'none'
    displaydtopwatchid.style.display = 'none';
    displaytimerid.style.display = 'block';

    clockboxid.style.boxShadow = 'none';
    stopwatchboxid.style.boxShadow = 'none';
    timerboxid.style.boxShadow = '4px 4px 6px white';
    
    createlap.style.display = "none";
    headtxtid.style.display = 'block';
}



var soundon = 1;

function soundonofffun(){ 
    if(soundon === 1){
        clicksound.play();
    }
    soundon += 1;
    bottomblackid.style.color = 'rgb(97, 92, 92)';
    bottomblackid.style.boxShadow = "none";
    if(soundon === 3){
        soundon = 1;
        bottomblackid.style.color = 'white';
        bottomblackid.style.boxShadow = "1px 1px 6px yellow";
    }
}

function windowopenfun(){ 
    if(soundon === 1){
        clicksound.play();
    }
    window.open('time.html','_self');
}

function napfun(){
    
    jintimer();

    timermin01fun();
    timermin01fun();
    timermin01fun();
    timermin01fun();
    
    timermin11fun();
    timermin11fun();
    timermin11fun();
    timermin11fun();
    timermin11fun();

    timerstartfun();

    sleepnap.style.display = 'none';
    
}



function offalarmfun(){
    alarmsound.pause();
    timesofjin.innerHTML = "TIMES OF JIN &#9763;";
}

/*---------- C L O C K -----------*/







var digitalclock = document.getElementById('digitalclockid');
var clock12 = 0;

    var clockloop = setInterval(function(){

        var clocktime = new Date();
        var clockhour = clocktime.getHours();
        var clockmin = clocktime.getMinutes();
        var clocksec = clocktime.getSeconds();
        var ampm = "AM";

        clockhour = clockhour < 10 ? "0" + clockhour : clockhour;
        clockmin = clockmin < 10 ? "0" + clockmin : clockmin;
        clocksec = clocksec < 10 ? "0" + clocksec : clocksec;
        
        if(clock12 === 1){

            if(clockhour > 12){
                clockhour -= 12;
                ampm = "PM";
            }
            if(clockhour === 0){
                clockhour = 12;
                ampm = "AM";
            }
            var currenttime = clockhour+" : "+clockmin+" : "+clocksec+" "+ampm;
            digitalclock.innerHTML = currenttime;
        }
        else{
            var currenttime = clockhour+" : "+clockmin+" : "+clocksec;
            digitalclock.innerHTML = currenttime;
        }
    },1000);
    
function clock12fun(){
    if(soundon === 1){
        clicksound.play();
    }
    clock12 = 1;
    runningclock12id.style.boxShadow = "4px 4px 6px white";
    runningclock24id.style.boxShadow = "none";
}

function clock24fun(){
    if(soundon === 1){
        clicksound.play();
    }
    clock12 = 0;
    runningclock24id.style.boxShadow = "4px 4px 6px white";
    runningclock12id.style.boxShadow = "none";
}





/*---------- S T O P  W A T C H -----------*/





var hour0 = document.getElementById('hour0');
var hour1 = document.getElementById('hour1');

var min0 = document.getElementById('min0');
var min1 = document.getElementById('min1');

var sec0 = document.getElementById('sec0');
var sec1 = document.getElementById('sec1');

var pause = document.getElementById('pause');

var createlap = document.getElementById('createlap');
var hour0value = 0, hour1value = 0, min0value = 0, min1value = 0, sec0value = 0, sec1value = 0;

var hour0sec = 0, hour1sec = 0, min0sec = 0, min1sec = 0, sec0sec = 0, sec1sec = 0;

var hour0ini = parseInt(0), hour1ini = parseInt(0), min0ini = parseInt(0), min1ini = parseInt(0), sec0ini = parseInt(0), sec1ini = parseInt(0);

var pausevar = 0, resetvar = 0,restartvar = 0, lapcount = 0;

function startfun(){
    if(soundon === 1){
        clicksound.play();
    }
    stopwatchstartboxid.style.display = "none";
    stopwatch4boxid.style.display = "block";
    hour0.style.boxShadow = '2px 2px 6px white';
    hour1.style.boxShadow = '2px 2px 6px white';
    min0.style.boxShadow = '2px 2px 6px white';
    min1.style.boxShadow = '2px 2px 6px white';
    sec0.style.boxShadow = '2px 2px 6px white';
    sec1.style.boxShadow = '2px 2px 6px white';

    resetvar = 0;
    pausevar = 0;
    restartvar = 0;
    
    var hour0loop = setInterval(function(){
        hour0sec += 1;
        if(pausevar === 1){
            hour0sec -= 1;
            
        }
        else if(resetvar === 1){
            hour0sec = 0;
            hour0.innerHTML = 0;
            hour0value = 0;
            clearInterval(hour0loop);
        }
        else if(restartvar === 1){
            hour0sec = 0;
            hour0value = 0;
            hour0.innerHTML = 0;
        }
        else{
            if(hour0sec === 36000){
            if(hour0value<9){
              hour0value += 1;
              hour0.innerHTML = hour0value;
            }
            else{
              hour0value = 0;
              hour0.innerHTML = hour0value;
            }
            hour0sec = 0;
            }
        }
    },1000);
    
    var hour1loop = setInterval(function(){
        hour1sec += 1;
        if(pausevar === 1){
            hour1sec -= 1;
        }
        else if(resetvar === 1){
            hour1sec = 0;
            hour1.innerHTML = 0;
            hour1value = 0;
            clearInterval(hour1loop);
        }
        else if(restartvar === 1){
            hour1sec = 0;
            hour1value = 0;
            hour1.innerHTML = 0;
        }
        else{
            if(hour1sec === 3600){
            if(hour1value<9){
              hour1value += 1;
              hour1.innerHTML = hour1value;
            }
            else{
              hour1value = 0;
              hour1.innerHTML = hour1value;
            }
            hour1sec = 0;
            }
        }
    },1000);
    
    var min0loop = setInterval(function(){
        min0sec += 1;
        if(pausevar === 1){
            min0sec -= 1;
        }
        else if(resetvar === 1){
            min0sec = 0;
            min0.innerHTML = 0;
            min0value = 0;
            clearInterval(min0loop);   
        }
        else if(restartvar === 1){
            min0sec = 0;
            min0value = 0;
            min0.innerHTML = 0;
        }
        else{
            if(min0sec === 600){
            if(min0value<5){
              min0value += 1;
              min0.innerHTML = min0value;
            }
            else{
              min0value = 0;
              min0.innerHTML = min0value;
            }
            min0sec = 0;
            }
        }
    },1000);
    
    var min1loop = setInterval(function(){
        min1sec += 1;
        if(pausevar === 1){
            min1sec -= 1;
        }
        else if(resetvar === 1){
            min1sec = 0;
            min1.innerHTML = 0;
            min1value = 0;
            clearInterval(min1loop);
        }
        else if(restartvar === 1){
            min1sec = 0;
            min1value = 0;
            min1.innerHTML = 0;
        }
        else{
            if(min1sec === 60){
            if(min1value<9){
              min1value += 1;
              min1.innerHTML = min1value;
            }
            else{
              min1value = 0;
              min1.innerHTML = min1value;
            }
            min1sec = 0;
            }
        }
    },1000);
    
    var sec0loop = setInterval(function(){
        sec0sec += 1;
        if(pausevar === 1){
            sec0sec -= 1;
        }
        else if(resetvar === 1){
            sec0sec = 0;
            sec0.innerHTML = 0;
            sec0value = 0;
            clearInterval(sec0loop);
        }
        else if(restartvar === 1){
            sec0sec = 0;
            sec0value = 0;
            sec0.innerHTML = 0;
        }
        else{
            if(sec0sec === 10){
            if(sec0value<5){
              sec0value += 1;
              sec0.innerHTML = sec0value;
            }
            else{
              sec0value = 0;
              sec0.innerHTML = sec0value;
            }
            sec0sec = 0;
            }
        }
    },1000);
    
    var sec1loop = setInterval(function(){
        sec1sec += 1;
        if(pausevar === 1){
            sec1sec -= 1;
        }
        else if(resetvar === 1){
            sec1sec = 0;
            sec1.innerHTML = 0;
            sec1value = 0;
            clearInterval(sec1loop);
        }
        else if(restartvar === 1){
            sec1sec = 0;
            sec1value = 0;
            sec1.innerHTML = 0;
            restartvar = 0;
        }
        else{
            
            if(sec1sec === 1){
            if(sec1value<9){
              sec1value += 1;
              sec1.innerHTML = sec1value;
            }
            else{
              sec1value = 0;
              sec1.innerHTML = sec1value;
            }
            sec1sec = 0;
            }
        }
    },1000);

}

function pausefun(){
    if(soundon === 1){
        clicksound.play();
    }
    pause.style.boxShadow = '4px 4px 6px white';
    pausevar += 1;
    pause.innerHTML = "Resume";
    if(pausevar === 2){
        pause.innerHTML = "Pause";
        pause.style.boxShadow = 'none';
    }
    if(pausevar === 3){
        pausevar = 1;
    }
}

function resetfun(){
    if(soundon === 1){
        clicksound.play();
    }
    resetvar += 1;
    stopwatchrestartboxid.style.boxShadow = "none";
    pause.style.boxShadow = "none";
    stopwatchstartboxid.style.display = "block";
    stopwatch4boxid.style.display = "none";
    hour0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
    hour1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
    min0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
    min1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
    sec0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
    sec1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
    pausevar = 0;
    pause.innerHTML = "Pause";
    pause.style.boxShadow = 'none';
}

function restartfun(){
    if(soundon === 1){
        clicksound.play();
    }
    restartvar += 1;
    stopwatchrestartboxid.style.boxShadow = "4px 4px 6px white";
    pausevar = 0;
    pause.innerHTML = "Pause";
    pause.style.boxShadow = 'none';
}

function lapfun(){

    if(soundon === 1){
        clicksound.play();
    }
    stopwatchdeletboxid.style.display = "block";
    headtxtid.style.display = 'none';
    createlap.style.display = 'block';
    stopwatchlapboxid.style.boxShadow = "4px 4px 6px white";

    var hour0int = parseInt(hour0.innerHTML), hour1int = parseInt(hour1.innerHTML), min0int = parseInt(min0.innerHTML), min1int = parseInt(min1.innerHTML), sec0int = parseInt(sec0.innerHTML), sec1int = parseInt(sec1.innerHTML);
    var laptimediffsec, laptimediffmin, laptimediffhour;
    var x = "+";
    var totallapsum1 = 0;
    var totallapsum2 = 0;
    var totallapdifference = 0;
    var totallapdifferencehour = 0;

    totallapsum1 = (sec1int+(sec0int*10)+(min1int*60)+(min0int*600)+(hour1int*3600)+(hour0int*36000));
    totallapsum2 = (sec1ini+(sec0ini*10)+(min1ini*60)+(min0ini*600)+(hour1ini*3600)+(hour0ini*36000));

    if(totallapsum1 > totallapsum2){
        totallapdifference = totallapsum1 - totallapsum2;
    }
    else if(totallapsum1 < totallapsum2){
        totallapdifference = totallapsum2 - totallapsum1;
        x = '-';
    }

    if(totallapdifference < 60){
        laptimediffhour = 0;
        laptimediffmin = 0;
        laptimediffsec = totallapdifference;
    }
    else if(totallapdifference >= 60 && totallapdifference < 3600){
        laptimediffhour = 0;
        laptimediffmin = Math.floor(totallapdifference / 60);
        laptimediffsec = totallapdifference - (laptimediffmin*60);
    }
    else if(totallapdifference >= 3600){
        laptimediffhour = Math.floor(totallapdifference / 3600);
        totallapdifferencehour = totallapdifference - (laptimediffhour*3600);

        if(totallapdifferencehour === 0){
            laptimediffmin = 0;
            laptimediffsec = 0;
        }
        else if(totallapdifferencehour < 60){
            laptimediffmin = 0;
            laptimediffsec = totallapdifferencehour;
        }
        else if(totallapdifferencehour >= 60){
            laptimediffmin = Math.floor(totallapdifferencehour / 60);
            laptimediffsec = totallapdifferencehour - (laptimediffmin*60);
        }
    }

    
    if(laptimediffsec < 10){
        laptimediffsec = "0"+laptimediffsec;
    }


    if(laptimediffmin < 10){
        laptimediffmin = "0"+laptimediffmin;
    }


    if(laptimediffhour < 10){
        laptimediffhour = "0"+laptimediffhour;
    }

    hour1ini = parseInt(hour1.innerHTML);
    hour0ini = parseInt(hour0.innerHTML);
    min1ini = parseInt(min1.innerHTML);
    min0ini = parseInt(min0.innerHTML);
    sec1ini = parseInt(sec1.innerHTML);
    sec0ini = parseInt(sec0.innerHTML);


    lapcount += 1;
    var laptimedata = lapcount+".\xa0 \xa0 \xa0 "+hour1.innerHTML+" "+hour0.innerHTML+"  :  "+min1.innerHTML+" "+min0.innerHTML+"  :  "+sec0.innerHTML+" "+sec1.innerHTML;
    var lapelement = document.createElement("div");
    var lapdata = document.createTextNode(laptimedata+" "+"\xa0 \xa0 \xa0 "+x+" "+laptimediffhour+" : "+laptimediffmin+" : "+laptimediffsec);
    lapelement.appendChild(lapdata);
    createlap.appendChild(lapelement);
}

function deletalllap(){
    if(soundon === 1){
        clicksound.play();
    }
    stopwatchdeletboxid.style.display = "none";
    headtxtid.style.display = "block";
    createlap.style.display = 'none';
    stopwatchlapboxid.style.boxShadow = "none";

    while(createlap.hasChildNodes){
        createlap.removeChild(createlap.firstChild);
        lapcount = 0;
    }
}



/*------------T I M E R--------------*/


var timerhr0 = document.getElementById('timerhr0');
var timerhr1 = document.getElementById('timerhr1');

var timermin0 = document.getElementById('timermin0');
var timermin1 = document.getElementById('timermin1');

var timersec0 = document.getElementById('timersec0');
var timersec1 = document.getElementById('timersec1');

var timerpauseid = document.getElementById('timerpauseid');

var addhr0 = 0, addhr1 = 0, addmin0 = 0, addmin1 = 0, addsec0 = 0, addsec1 = 0;

var timersec1sec = 0;

var totalsec = 0;

var animationid = document.getElementById('animationid');
var initialanimationwidth = animationid.style.width;

var timerpause = 0, timercancel = 0;
function timerhr00fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black'; 
    addhr0 -= 1;
    if(addhr0 >= 0){
        timerhr0.style.boxShadow = '2px 2px 6px white';
        timerhr0.innerHTML = addhr0;
    }
    else{
        timerhr0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addhr0 = 9;
        timerhr0.innerHTML = addhr0;
    }
}

function timerhr10fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addhr1 -= 1;
    if(addhr1 >= 0){
        timerhr1.style.boxShadow = '2px 2px 6px white';
        timerhr1.innerHTML = addhr1;
    }
    else{
        timerhr1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addhr1 = 9;
        timerhr1.innerHTML = addhr1;
    }
}

function timermin00fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addmin0 -= 1;
    if(addmin0 >= 0){
        timermin0.style.boxShadow = '2px 2px 6px white';
        timermin0.innerHTML = addmin0;
    }
    else{
        timermin0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addmin0 = 5;
        timermin0.innerHTML = addmin0;
    }
}

function timermin10fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addmin1 -= 1;
    if(addmin1 >= 0){
        timermin1.style.boxShadow = '2px 2px 6px white';
        timermin1.innerHTML = addmin1;
    }
    else{
        timermin1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addmin1 = 9;
        timermin1.innerHTML = addmin1;
    }
}

function timersec00fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addsec0 -= 1;
    if(addsec0 >= 0){
        timersec0.style.boxShadow = '2px 2px 6px white';
        timersec0.innerHTML = addsec0;
    }
    else{
        timersec0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addsec0 = 5;
        timersec0.innerHTML = addsec0;
    }
}

function timersec10fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addsec1 -= 1;
    if(addsec1 >= 0){
        timersec1.style.boxShadow = '2px 2px 6px white';
        timersec1.innerHTML = addsec1;
    }
    else{
        timersec1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addsec1 = 9;
        timersec1.innerHTML = addsec1;
    }
}






function timerhr01fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addhr0 += 1;
    if(addhr0 < 10){
        timerhr0.style.boxShadow = '2px 2px 6px white';
        timerhr0.innerHTML = addhr0;
    }
    else{
        timerhr0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addhr0 = 0;
        timerhr0.innerHTML = addhr0;
    }
}

function timerhr11fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addhr1 += 1;
    if(addhr1 < 10){
        timerhr1.style.boxShadow = '2px 2px 6px white';
        timerhr1.innerHTML = addhr1;
    }
    else{
        timerhr1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addhr1 = 0;
        timerhr1.innerHTML = addhr1;
    }
}

function timermin01fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addmin0 += 1;
    if(addmin0 < 6){
        timermin0.style.boxShadow = '2px 2px 6px white';
        timermin0.innerHTML = addmin0;
    }
    else{
        timermin0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addmin0 = 0;
        timermin0.innerHTML = addmin0;
    }
}

function timermin11fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addmin1 += 1;
    if(addmin1 < 10){
        timermin1.style.boxShadow = '2px 2px 6px white';
        timermin1.innerHTML = addmin1;
    }
    else{
        timermin1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addmin1 = 0;
        timermin1.innerHTML = addmin1;
    }
}

function timersec01fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addsec0 += 1;
    timersec0.style.boxShadow = '2px 2px 6px white';
    if(addsec0 < 6){
        timersec0.innerHTML = addsec0;
    }
    else{ 
    timersec0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addsec0 = 0;
        timersec0.innerHTML = addsec0;
    }
}

function timersec11fun(){
    if(soundon === 1){
        scrollsound.play();
    }
    animationboxid.style.backgroundColor = 'black';
    addsec1 += 1;
    if(addsec1 < 10){
    timersec1.style.boxShadow = '2px 2px 6px white';
        timersec1.innerHTML = addsec1;
    }
    else{
    timersec1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        addsec1 = 0;
        timersec1.innerHTML = addsec1;
    }
}

function timerstartfun(){
    if(soundon === 1){
        clicksound.play();
    }
    sleepnap.style.display = 'none';

    var totaltimersec = addsec1*1 + addsec0*10 + addmin1*60 + addmin0*600 + addhr1*3600 + addhr0*36000;


    timer2buttonid.style.display = 'block';
    timerstartbuttonid.style.display = 'none';
    timernumberupid.style.display = 'none';
    timernumberdownid.style.display = 'none';
    animationboxid.style.backgroundColor = 'black';
    timercancel = 0;
    timerpause = 0;
    timerpauseid.innerHTML = "Pause";
    
        var timerloophr0 = setInterval(function(){
            timersec1sec += 1;

    if(timercancel === 1){
        timersec1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        timersec0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        timermin1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        timermin0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        timerhr1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
        timerhr0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';

        timer2buttonid.style.display = 'none';
        timerstartbuttonid.style.display = 'block';

        timernumberupid.style.display = 'block';
        timernumberdownid.style.display = 'block';

        timersec1sec = 0;
        
        timersec1.innerHTML = 0;
        timersec0.innerHTML = 0;
        timermin1.innerHTML = 0;
        timermin0.innerHTML = 0;
        timerhr1.innerHTML = 0;
        timerhr0.innerHTML = 0;

        addsec1 = 0;
        addsec0 = 0;
        addmin1 = 0;
        addmin0 = 0;
        addhr1 = 0;
        addhr0 = 0;

        sleepnap.style.display = 'block';

        initialanimationwidth = 0;
        totalsec = 0;
        animationid.style.width = 0;

        clearInterval(animatloop);
        clearInterval(timerloophr0);
    }
    else{         
        if(timerpause === 0){  
            if(timersec1sec === 100){
               
                if(addsec1 === 0){ timersec1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
                    if(addsec0 === 0){ timersec0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
                        if(addmin1 === 0){ timermin1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
                            if(addmin0 === 0){ timermin0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
                                if(addhr1 === 0){ timerhr1.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
                                    if(addhr0 === 0){ timerhr0.style.boxShadow = '2px 2px 6px rgb(97, 92, 92)';
                                        timercancel = 1;
                                        if(totaltimersec > 0){
                                        alarmsound.play();
                                        timesofjin.innerHTML = "Click to Stop Alarm";
                                        var alarmloop = setInterval(function(){
                                            timesofjin.innerHTML = "TIMES OF JIN &#9763;";
                                            clearInterval(alarmloop);
                                        },10000);
                                        }
                                    }
                                    else if(addhr0 !== 0){
                                        addhr0 -= 1;
                                        timerhr0.innerHTML = addhr0;
                                        timerhr0.style.boxShadow = '2px 2px 6px white';
                                    }
                                    addhr1 = 9;
                                    timerhr1.innerHTML = addhr1;
                                }
                                else if(addhr1 !== 0){
                                    addhr1 -= 1;
                                    timerhr1.innerHTML = addhr1;
                                    timerhr1.style.boxShadow = '2px 2px 6px white';
                                }

                                addmin0 = 5;
                                timermin0.innerHTML = addmin0;
                            }
                            else if(addmin0 !== 0){
                                addmin0 -= 1;
                                timermin0.innerHTML = addmin0;
                                timermin0.style.boxShadow = '2px 2px 6px white';
                            }

                            addmin1 = 9;
                            timermin1.innerHTML = addmin1;
                        }
                        else if(addmin1 !== 0){
                            addmin1 -= 1;
                            timermin1.innerHTML = addmin1;
                            timermin1.style.boxShadow = '2px 2px 6px white';
                        }

                        addsec0 = 5;
                        timersec0.innerHTML = addsec0;
                    }
                    else if(addsec0 !== 0){
                        addsec0 -= 1; 
                        timersec0.innerHTML = addsec0;
                        timersec0.style.boxShadow = '2px 2px 6px white';
                    }
                    timersec0sec = 0;

                    addsec1 = 9;
                    timersec1.innerHTML = addsec1;
                }
                else if(addsec1 !== 0){
                    addsec1 -= 1;
                    timersec1.innerHTML = addsec1;
                    timersec1.style.boxShadow = '2px 2px 6px white';
                }
                timersec1sec = 0;
            }

            
        }
    }

        },10);



        
        initialanimationwidth = 0;
        totalsec = 0;
        animationid.style.width = 0;

        var animatloop = setInterval(function(){
            
            if(timerpause === 0){
                if(totalsec === totaltimersec){
                    animationboxid.style.backgroundColor = 'rgb(97, 92, 92)';
                    clearInterval(animatloop);
                }
                else{
                    totalsec += 1;
                    initialanimationwidth = initialanimationwidth+(100/totaltimersec)
                    animationid.style.width = initialanimationwidth + "%";
                }
            }
        },1000)
    }


function timerpausefun(){
    if(soundon === 1){
        clicksound.play();
    }
    timerpauseid.style.boxShadow = "4px 4px 6px white";
    timersec1sec = 0;
    timerpause += 1;
    timerpauseid.innerHTML = "Resume";
    if(timerpause === 2){
        clicksound.play();
        timerpauseid.style.boxShadow = "none"
        timerpause = 0;
        timerpauseid.innerHTML = "Pause";
    }
}

function timercancelfun(){
    if(soundon === 1){
        clicksound.play();
    }
    timercancel += 1;
}