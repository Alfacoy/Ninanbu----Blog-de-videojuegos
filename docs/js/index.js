
//BOTONES ANALISIS//
var btnA = document.getElementById('btn-a');
btnA.addEventListener("click",ask);
var btnB = document.getElementById('btn-b');
btnB.addEventListener("click",ask);
var btnC = document.getElementById('btn-c');
btnC.addEventListener("click",ask);
var btnD = document.getElementById('btn-d');
btnD.addEventListener("click",ask);
var btnE = document.getElementById('btn-e');
btnE.addEventListener("click",ask);
var btnF = document.getElementById('btn-f');
btnF.addEventListener("click",ask);
var btnG = document.getElementById('btn-g');
btnG.addEventListener("click",ask);
var btnH = document.getElementById('btn-h');
btnH.addEventListener("click",ask);
var btnI = document.getElementById('btn-i');
btnI.addEventListener("click",ask);
var btnJ = document.getElementById('btn-j');
btnJ.addEventListener("click",ask);
var btnK = document.getElementById('btn-k');
btnK.addEventListener("click",ask);
var btnL = document.getElementById('btn-l');
btnL.addEventListener("click",ask);
var btnM = document.getElementById('btn-m');
btnM.addEventListener("click",ask);
var btnN = document.getElementById('btn-n');
btnN.addEventListener("click",ask);
var btnO = document.getElementById('btn-o');
btnO.addEventListener("click",ask);
var btnP = document.getElementById('btn-p');
btnP.addEventListener("click",ask);
var btnQ = document.getElementById('btn-q');
btnQ.addEventListener("click",ask);
var btnR = document.getElementById('btn-r');
btnR.addEventListener("click",ask);
var btnS = document.getElementById('btn-s');
btnS.addEventListener("click",ask);
var btnT = document.getElementById('btn-t');
btnT.addEventListener("click",ask);
var btnU = document.getElementById('btn-u');
btnU.addEventListener("click",ask);
var btnV = document.getElementById('btn-v');
btnV.addEventListener("click",ask);
var btnW = document.getElementById('btn-w');
btnW.addEventListener("click",ask);
var btnX = document.getElementById('btn-x');
btnX.addEventListener("click",ask);
var btnY = document.getElementById('btn-y');
btnY.addEventListener("click",ask);
var btnZ = document.getElementById('btn-z');
btnZ.addEventListener("click",ask);

var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');


function ask(){
    
//Armar una funcion que obtenga la ID que estamos clickeando y se 
//la pase por parametro a la funcion ASK. De este modo con una sola
//funcion vamos a poder hacer funcionar el tablero.

    if(a.classList.contains('on') == true){
        a.classList.remove('on');
        a.classList.add('off');
    }else{
        a.classList.remove('off');
        a.classList.add('on');
    }
   

}