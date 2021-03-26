"use strict";

// exports.ucFirst = ucFirst;
// exports.checkSpam = checkSpam;
// exports.truncate = truncate;
// exports.extractCurrencyValue= extractCurrencyValue;
// exports.getMaxSubSum= getMaxSubSum;
// exports.camelize= camelize;
/**
 * 
 * @param {string} str 
 * @returns {string} returns the first Upper case of the string
 */
function ucFirst(str){
let fchar= str.charAt(0).toUpperCase()//S
let strSpl = str.substr(1) //imon
return fchar+strSpl // Simon

}
console.log(ucFirst('simon'))

/**
 * 
 * @param {string} str 
 * @returns {boolean} returns true if contains spam, otherwise false
 */
function checkSpam(str) { 
    let lowerStr = str.toLowerCase();

    if(lowerStr.includes('viagra') || lowerStr.includes('free xxxxx')){
        return true;
    }
    return false;
  }
  //console.log(checkSpam('buy ViAgRA now'))

/**
 * 
 * @param {string} str 
 * @param {number} n 
 * @returns {string} truncated string equal to the number
 */
  function truncate(str,n){
    // let st= str.slice(0,n)
    if(str.length<=20){ 
   return str 
    } 
    str = str.slice(0,n-1)
    return str.concat("…")
  }
console.log(truncate("What I'd like to tell on this topic is:", 20))

function extractCurrencyValue(str){
    str= str.slice(1)
    return +str;
}
console.log(extractCurrencyValue('$120'))

/**
 * 
 * @param {array} arr 
 * @returns {number} returns the maximun subsum of the array
 */
function getMaxSubSum(arr){
    let max = 0;
    let sum = 0;
    for(let num of arr){
        sum = Math.max(num, sum +num);
        max = Math.max(max, sum)
    }
    return max;
}
console.log((getMaxSubSum([-1, 2, 3, -9, 11]), 11))

/**
 * 
 * @param {string} str 
 * @returns {string} returns camelize string
 */
function camelize(str){
let sep; 
if(typeof(sep)==="undefined"){
    sep = "-";
}
let words = str.split(sep);
let cap="";
for(let i=1; i<words.length; i++){
    let capWord = words[i]
     cap = words[0]+capWord.charAt(0).toUpperCase()+capWord.slice(1)
    
}
return cap;
}
//console.log(camelize("list-style-image"))

/**
 * 
 * @param {string} str 
 * @returns {string} returns camelized string
 */
function camelize(str){
 
    let camel = false;
    let camelString = '';
    
    for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === '-'){
    camel = true;
    
    } else if(camel) {
    camelString += str.charAt(i).toUpperCase();
    camel = false;
    } else {
    camelString += str.charAt(i);
    }
    } 
    return camelString;
    }
    console.log(camelize("list-style-image"))

