// Get elements
var rollStrBtn=document.querySelector("#roll-str-btn"),
    strResult=document.querySelector("#str-result"),
    effectsStrBtn=document.querySelector("#effects-str-btn"),
    thaco=document.querySelector('#thaco'),
    dmg=document.querySelector('#dmg'),
    bashing=document.querySelector('#bashing'),
    weight=document.querySelector('#weight'),
    saveStrBtn=document.querySelector("#save-str-btn");
    loadStrBtn=document.querySelector("#load-str-btn");

// Numbers
var min=1,
    max=100,
    gRandom;

// Events
rollStrBtn.addEventListener('click', function(){
    var random= Math.floor(Math.random() * (+max - +min)) + +min;
    if(random===100){
        strResult.innerHTML=00;
    }else if (random<10){
        strResult.innerHTML="0"+random;
    }else{
        strResult.innerHTML=random;
    }
    gRandom=random;

    if(rollStrBtn.value="ROLL"){
        rollStrBtn.value="REROLL";
    }
});

effectsStrBtn.addEventListener('click', ()=>{
    if(gRandom<=50){
        thaco.innerHTML="-1";
        dmg.innerHTML="+3";
        bashing.innerHTML="25";
        weight.innerHTML="220";
    } else if (gRandom<=75) {
        thaco.innerHTML="-2";
        dmg.innerHTML="+3";
        bashing.innerHTML="30";
        weight.innerHTML="250";
    } else if (gRandom<=90) {
        thaco.innerHTML="-2";
        dmg.innerHTML="+4";
        bashing.innerHTML="35";
        weight.innerHTML="280";
    } else if (gRandom<=99) {
        thaco.innerHTML="-2";
        dmg.innerHTML="+5";
        bashing.innerHTML="40";
        weight.innerHTML="320";
    } else if (gRandom=100) {
        thaco.innerHTML="-3";
        dmg.innerHTML="+6";
        bashing.innerHTML="45";
        weight.innerHTML="400";
    }
});

// Save to LS
saveStrBtn.addEventListener('click', function(){
    console.log(strResult);
    localStorage.setItem('str-roll', JSON.stringify(strResult.innerHTML));
});

// Load to LS
loadStrBtn.addEventListener('click', function(){
    let strRoll=localStorage.getItem('str-roll');
    strResult.innerHTML=JSON.parse(strRoll);
});