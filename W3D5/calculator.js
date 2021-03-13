"use strict";


// function pageLoad(){

// }

function calculator(){
    let c = parseInt(document.getElementById("first").value);
    let d = parseInt(document.getElementById("second").value);
    let result = c * d/100;
    document.getElementById('result').value = result
   }

//    function pageLoad() {
//     document.getElementById("ok").onclick = okayClick;
//     }
// function okayClick() {
//     alert(" You clicked ok!!");
//     }
// window.onload = pageLoad; // onload is a browser event