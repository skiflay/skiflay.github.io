"use strict";

// this is not working 
// document.getElementById("ok").onclick = okClick; // null
// function okClick(){
//     alert(" You clicked ok!! ")
// } 

//this is how we can handle 
function pageLoad() {
    document.getElementById("ok").onclick = okayClick;
    }
function okayClick() {
    alert(" You clicked ok!!");
    }
window.onload = pageLoad; // onload is a browser event
