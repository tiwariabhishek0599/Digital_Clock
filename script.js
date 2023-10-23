let hr=document.querySelector(".hrs");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");
let Am_Pm=document.querySelector(".Am-Pm");

setInterval(()=>{
    let currentTime=new Date();
    let h=currentTime.getHours()
    let m=currentTime.getMinutes()
    let s=currentTime.getSeconds()
    let hour_timig="";
    if(h>=6 && h<18){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
    if(h>=12){
     hour_timig="PM";
    }
    else{
     hour_timig="AM";
    }
    Am_Pm.innerText=`${hour_timig}`;
    if(h>=12){
        h=h-12;
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s; 
    }
    hr.innerText=h;
    min.innerText=m;
    sec.innerText=s;   
},1000 );