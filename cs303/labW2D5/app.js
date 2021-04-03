"use strict";
exports.filter1To7= filter1To7;
exports.filter3to6= filter3to6;
// exports.inBetween = inBetween;
exports.nameSortedAnswer = nameSortedAnswer;
exports.ageSortedAnswer =ageSortedAnswer;
exports.surnameSortedAnswer = surnameSortedAnswer;


let arr = [1, 2, 3, 4, 5, 6, 7];
/**
 * 
 * @param {number} number 
 * @returns {boolean} returns true if num is in the arr, else false
 */
function filter1To7(n){
let filter = filtered(n)
    return filter;  
}
let filtered = n=>{
    if(arr.includes(n)){
        return true; 
    }
     return false;
} 
console.log("expect true", filter1To7(5) )

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {boolean} true if num is b/n a & b, else false
 */
 const arr2 = [0, 4, 5, 10, 6, 100];
function filter3to6(a,b) {
    let inNum = filtered(a)
    return inNum;  
  }

//   function filter3to6(a,b){
//     return arr2.filter(inBetween(a,b))
// }
function inBetween(a, b) {
    return function(x) {
      return x > a && x < b;
    };
  }
//   function filter3to6(a,b){
//     return arr2.filter(inBetween(a,b))
// }
  
console.log("expect [4,5]", filter3to6(5))
console.log(filter3to6(3,6))

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];
  function nameSortedAnswer(){
      return users.sort((a, b) => a.name > b.name ? 1 : -1)
  }
  console.log(nameSortedAnswer(users))

  function ageSortedAnswer(){
    return users.sort((a, b) => a.age > b.age ? 1 : -1) 
  }
  console.log(ageSortedAnswer(users))

  function surnameSortedAnswer(){
    return users.sort((a, b) => a.surname > b.surname ? 1 : -1) 
  }
  console.log(surnameSortedAnswer(users))
    