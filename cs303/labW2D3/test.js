// "use strict"
// const assert = require("assert"); //always need this with node
// const myExports = require("./myRecursion.js");
// const sum = myExports.sum;
// const factorial = myExports.factorial;
// const fibonacchi = myExports.fibonacchi;
 
 
describe("numbers using recursion",function(){
    it("get a sum number",function (){
    assert.equal(sum(5),15)
    })
    
    it("get a factor of a number",function (){
    assert.equal(factorial(5),120)
    })
    
    it("fibonacci of a number",function (){
    assert.equal(fibonacchi(8),21)
    })
    
    })