x=0;
y=0;
drawcircle="";
drawrectangle="";
function setup(){
    Canvas=createCanvas(900,600);
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHtml = "System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognized as : " + content;
    if (content=="1."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    
    if (content=="2."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);;
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    if (content=="3."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    
    if (content=="4."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);;
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    if (content=="5."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    
    if (content=="6."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);;
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    if (content=="7."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    
    if (content=="8."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);;
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    if (content=="9."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    }
    }
    if (content=="10."){
        x=Math.floor(Math.random() * 900);
        y=Math.floor(Math.random() * 600);;
        drawapple="set";
        src="https://th.bing.com/th/id/OIP.dtvmRrGcB9d0M3m2D9m-NgHaH_?w=201&h=217&c=7&r=0&o=5&pid=1.7";
    
}

function draw(){
    if (drawcircle=="set"){
        radius=Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        drawcircle="";
    }
    if (drawrectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn";
        drawrectangle="";
    }
}