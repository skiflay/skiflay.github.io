"use strict"
// module.exports = { sum,factorial,fibonacchi };
/**
 * 
 * @param {number} num
 * @returns{numner}number; 
 */
function sum(num){
if(num===1){
return num;
 }
else{
return num+sum(num-1)
 }
 }
/**
 * 
 * @param {number} num
 * @returns {number};
 */
function factorial(num){
if(num===1){
return num;
 }
else{
return num * factorial(num-1);
 }
}
//console.log(factorial(5));
/**
 * 
 * @param {number} num
 * @returns {number}number;
 */
function fibonacchi(num){
if(num<=1){
return num;
 }
else {
return fibonacchi(num-1) + fibonacchi(num-2);
 }
}