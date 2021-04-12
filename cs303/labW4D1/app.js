"use strict";

//Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };

  function f() {
    console.log("Hello!");
  }
  
  //f.defer(1000); // shows "Hello!" after 1 second

// Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
function f(a, b) {
    console.log( a + b );
  }
  
  //f.defer(1000)(1, 2); // shows 3 after 1 second

  // test
  const quiz = {};
  quiz.students = [{sid:10, answers:[{qid:2, ans:"b"}, {qid:3, ans:"a"}, {qid:1, ans:"b"}]},
                {sid:11, answers:[{qid:1, ans:"e"}, {qid:2, ans:"a"}, {qid:3, ans:"b"}]},
                {sid:12, answers:[{qid:3, ans:"b"}, {qid:2, ans:"a"}, {qid:1, ans:"d"}]},   
]
  quiz.key = [{qid:1, ans:"b"}, {qid:2, ans:"a"}, {qid:3, ans:"b"} ]

  function answersComparator(ans1, ans2){
    let count = 0;
    let scoreArr = []
    for(let std of quiz.students){
      std.answers.sort((a,b)=>a.qid - b.qid)
     for(let ans of std.answers){
       for(let key of quiz.key){
         if(ans.ans ===key.ans){
          count ++
         }
       }  
     }
    }
    scoreArr.push(count)
    console.log(scoreArr)
  }
  console.log(answersComparator(quiz.students, quiz.key))

  // let b = {answers:[{qid:1, ans:"e"}, {qid:2, ans:"a"}, {qid:3, ans:"b"}]}
  // console.log(b.answers.sort((a,b)=> a.qid - b.qid))