var random = Math.floor(Math.random() * 6) + 1;;

var imga="dice" + random + ".png";

var randompic ="images/" + imga;

var final=document.querySelectorAll("img")[0];

final.setAttribute("src", randompic);


var random2=Math.floor(Math.random() * 6)+1;

var imga2="dice"+random2+".png";
var randompic2="images/"+imga2;
var final2=document.querySelectorAll("img")[1];

final2.setAttribute("src", randompic2);

if(random>random2){
    document.querySelector("h1").innerHTML="player 1 win";
}
else if(random<random2){
    document.querySelector("h1").innerHTML="player 2 win";
}
else{
    document.querySelector("h1").innerHTML="draw";
}



