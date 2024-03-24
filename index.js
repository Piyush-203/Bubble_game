// creating  bubbles through js
var time = 60;
var hitrn =0;
var scoreval = 0;
function makebuble(){
    
var cluster =" "

for(let i=1;i<=102;i++){
    let rn = Math.floor(Math.random()*10);
    // random generates the any value which is between 0-1 and floor remove fractions.
    cluster += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = cluster;
}

function incScore(){
    scoreval += 10;
    document.getElementById("score").innerHTML = scoreval;
}
function newHitval(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function timer(){
     
    var timeint = setInterval(()=>{
        // so that time does not get negative.
        if(time>0)
        {time--;
        document.querySelector("#timeval").innerHTML = time;
    }
    else{
        // this make the setInterval to stop otherwise the it run all the time. 
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><br/><h1>Score:${scoreval}</h1>`;
        clearInterval(timeint);
        
    }
},1000);

}

document.querySelector("#pbtm")
.addEventListener("click",function(detail){
    // target will return element on which we clicked.
    var hitval = Number(detail.target.textContent);
    if(hitval === hitrn){
        incScore();
        makebuble();
        newHitval();
    }
});
newHitval();
timer();
makebuble();