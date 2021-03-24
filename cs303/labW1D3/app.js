"use strict"

exports.Accumulator = Accumulator;
exports.Calculator = Calculator;
/**
 * @returns {Calculator} this is a constructor function
 */

function Calculator(a, b) {
 //implement this
    this.a = a,
    this.b= b,
    this.sum = function(){
        return this.a + this.b
    },
    this.mul = function(){
        return this.a * this.b
    }
  }

  let test = new Calculator(2,3)
  console.log(test.mul())
 
/**
 * 
 * @param {integer} initialValue 
 * @param {intiger} increment 
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){
    //implement this
    this.currentValue= initialValue,
    this.increment = increment,
    this.accumulate = function(){ 
        this.currentValue += increment
        return this.currentValue;  
    },
    this.report = function(){
        return this.currentValue;
    }
    
}

let sample = new Accumulator(5,10)
 console.log(sample)  
    

   