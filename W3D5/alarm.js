"use strict";

function alarm(){
    let colorChange = document.getElementById("highlighted");
    let min = parseInt(document.getElementById("first").value);
    let sec = parseInt(document.getElementById("second").value);
    let result = (min*60) + (sec)
    let final = result * 1000;
    colorChange.style.backgroundColor = "red"
    let a = setInterval(() => {
        colorChange.style.backgroundColor = "white"
    }, final);
//clearInterval(a)

}







 

  