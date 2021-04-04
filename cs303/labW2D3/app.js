"use strict";


/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { sumTo, factorial, fib, printList,  printReverseList}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} n 
 * @returns {number} sum of n number
 */
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

/**
 * 
 * @param {number} n 
 * @returns {number} factorial of n number
 */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

/**
 * 
 * @param {number} n 
 * @returns {number} calculates sume of numbers
 */
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

/**
 * 
 * @param {number} n 
 * @returns {number} calcultes the factorial of a number
 */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

/**
 * 
 * @param {number} n 
 * @returns {number} returns fibonachi numbers of n
 */
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

/**
 * 
 * @param {list} list 
 * @returns {list} prints list one by one
 */
function printList(list) {
  let result;
  if (list.next) {
    printList(list.next);
  }

}

/**
 * 
 * @param {list} list 
 * @returns {list} prints reversed list 
 */

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

}