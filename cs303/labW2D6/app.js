"use strict";
/* eslint-disable */

/**
 * 
 * @param {number} from 
 * @param {number} to 
 * @returns {number} prints numbers from-to in 1 secord time interval
 */
function printNumbers(from, end){
    let start = from;
    let timerId = setInterval(()=>{
        console.log(start);
    if(start ===end){
        clearInterval(timerId);
    }
    start++;
}, 1000)    
}
//console.log("expect 1,2,3,4,5", printNumbers(1,5))


/**
 * 
 * @param {number} from 
 * @param {number} end
 * @returns {number} prints numbers from-end in 1 secord time interval
 */
function printNumbers2(from, end){
    let start = from;
    setTimeout(function go(){
        console.log(start)
        if(start < end){
            setTimeout(go, 1000)
        }
        start++;
    },1000)
}
//console.log("expect 1,2,3,4,5", printNumbers2(1,5))


//Write a makeBank function that will encapsulate and return the bank object.
function makeBank(){
    const bank = {};
     bank.transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];
        return bank.getBalance = function(){
            let totalBal = 0
            for(let trans of bank.transactionsDB){
                for(let bal of trans.customerTransactions){
                    totalBal += bal;
                }
            }
            return totalBal;
        }    
}
const checkBal= makeBank();
console.log("expect 85", checkBal())

