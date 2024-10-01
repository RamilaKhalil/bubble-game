function makebubble(){

var clutter = "";
for (let i = 0; i <=183; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}


// @ts-ignore
document.querySelector(".panelbottom").innerHTML= clutter;
}

var timer =60;
var score = 0;
var hitrn ;
function runtimer() {
    
var timerend  =setInterval(function(){
    if (timer>0) {
        timer--;
        // @ts-ignore
        document.querySelector("#timervalue").textContent = timer;  
    }else{
        clearInterval(timerend);
        alert("Time's up!");
        // @ts-ignore
        document.querySelector(".panelbottom").innerHTML =`<h1>GAME OVER<h1>
        <h2> you thought will i give you punishment ? <-> <h2>`;
    }
    
    }, 1000);
}

function newhit( ) {
     hitrn = Math.floor(Math.random() * 10);
    // @ts-ignore
    document.querySelector("#hitval").textContent = hitrn;
}


function increaseScore() {
    score +=10;

    // @ts-ignore
    document.querySelector("#scoreval").textContent= score;
}

// @ts-ignore
document.querySelector(".panelbottom").addEventListener("click", function(det) {


  // @ts-ignore
  var clicknum = Number(det.target.textContent);
    if(clicknum === hitrn){
        increaseScore();
        makebubble();
        newhit();
        if (score >= 100){
            victory();
        }
    }
  
   });

   function victory() {
     alert("Congratulations! You've reached the victory point!");
     // @ts-ignore
     document.querySelector(".panelbottom").innerHTML = 
     `<h1>you did it !<h1>
     
     <h1>Wait your cute punishment  <-> <h1>`
     ;

   }

newhit();
runtimer();
makebubble();