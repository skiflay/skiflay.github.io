"use strict";
//Closure
//• Does a function pickup latest changes?
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? Pete
/* Yest it does pick the latest change. When a function wants a variable, 
it takes the current value from its own Lexical Environment or the outer one. */

//• Which variables are available?
function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show? “Pete” or “John”? // Pete
  /*The work() function in the code below gets name from the place of its origin 
  through the outer lexical environment reference:
  */

// • Are counters independent? 
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // ? 0
  alert( counter2() ); // ? 1
  /*Functions counter and counter2 are created by different invocations of makeCounter.
    So they have independent outer Lexical Environments, each one has its own count.*/

// • Counter object
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
  
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // 1
  alert( counter.up() ); // 2
  alert( counter.down() ); // 1
  /* Surely it will work just fine.Both nested functions are created within 
  the same outer Lexical Environment, so they share access to the same count variable: */

// • Function in if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
/* The result is an error.
The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside. */

// • Sum with closures ==> Write function sum that works like this: sum(a)(b) = a+b.
function sum(a) {

    return function(b) {
      return a + b; // takes "a" from the outer lexical environment
    };
  }
  
  alert( sum(1)(2) ); // 3
  alert( sum(5)(-1) ); // 4

// • Is variable visible?
let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
/*  ReferenceError: Cannot access 'x' before initialization */