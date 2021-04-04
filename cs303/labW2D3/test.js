"use strict";
/* eslint-disable */

/* //comment out the node specific code when going to the browser
const assert = require("assert");  //always need this with node
const myExports = require("./recursive.js");  //with node need the name of your file with your functions here
const sumTo = myExports.sumTo; 
const factorial = myExports.factorial;
const fib = myExports.fib;
const printList = myExports.printList;
const  printReverseList = myExports.printReverseList; */

describe("Sum of numbers", function () {

    it("Sume to 100 is 5050", function () {        
        assert.deepEqual(sumTo(100), 5050);
    });
    it("Sume to 2 is 3", function () {        
        assert.deepEqual(sumTo(2), 3);
    });
    it("Sume to 1 is 1", function () {        
        assert.deepEqual(sumTo(1), 1);
    });
 
});
    
describe("Factorial of a number", function () {

    it("factorial of 5 is 120", function () {    
        assert.deepEqual(factorial(5), 120);    

    });
    it("factorial of 4 is 24", function () {
      
        assert.deepEqual(factorial(4), 24);
    });
    it("factorial of 1 is 1", function () {
        
        assert.deepEqual(factorial(1), 1);

    });
 
 
});

describe("Fibonacci numbers", function () {

    it("Fibonacci of 3 is 2", function () {    
        assert.deepEqual(fib(3), 2);    

    });
    it("Fibonacci of 7 is 13", function () {
      
        assert.deepEqual(fib(7), 13);
    });
    
    it("Fibonacci of 8 is 21", function () {
        
        assert.deepEqual(fib(8), 21);

    });
  
});

describe("Output a single-linked list", function () {

    it("print a list ", function () { 
        let list = {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: {
                  value: 4,
                  next: null
                }
              }
            }
          };   
        assert.deepEqual(printList(list), undefined);    

    });
   
});

describe("Output a single-linked list in the reverse order", function () {
  
        it("print a reversed list ", function () { 
            
            let list = {
                value: 1,
                next: {
                  value: 2,
                  next: {
                    value: 3,
                    next: {
                      value: 4,
                      next: null
                    }
                  }
                }
              };
            assert.deepEqual(printReverseList(list), undefined);
        });
       
    });