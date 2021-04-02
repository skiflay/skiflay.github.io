"use strict";

// exports.dblFun= dblFun;
// exports.squareFun=squareFun;
// exports.myMap = myMap;
// exports.myReduce= myReduce;
// exports.mulFun = mulFun;
// exports.sumFun = sumFun;
// exports.myFilter = myFilter;
// exports.gratherThan1= gratherThan1;
// exports.lessThan4= lessThan4;

const arr = [1,2,3,4,5];
/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 */
function myMap(arr, cbk){
//IMPLEMENTATION NEEDED
let newArr = [];
for(let n of arr){
    newArr.push(cbk(n));
}
return newArr;
}

//const dblFun = num => num * 2;
function dblFun(num){ return num*2}
//const squareFun = num => num * num;
function squareFun(num){return num *num}

console.log("expect [1, 4, 6,8,10] ", arr.map(dblFun));
console.log("expect [1, 4, 9, 16, 25] ", myMap(arr, squareFun));

// console.log("expect [4, 16, 36, 64, 100] ", arr.map(squareFun));
// console.log("expect [4, 16, 36, 64, 100] ", myMap(arr, squareFun));

/**
 * 
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction
 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal){
//IMPLEMENTATION NEEDED
    let accum = initialVal;
for(const ele of arr){
    accum=cbk(accum, ele);
}
return accum;
}


//const sumFun = (accum, val) => accum + val;
function sumFun(accum=0, val){return accum + val};
//const mulFun = (accum, val) => accum * val;
function mulFun(accum=1, val){return accum * val};


console.log("expect: 15: ", arr.reduce(sumFun, 0));
console.log("expect: 15: ", myReduce(arr, sumFun, 0));

console.log("expect: 120: ", arr.reduce(mulFun, 1));
console.log("expect: 120: ", myReduce(arr, mulFun, 1));

/**
 * 
 * @param {array} arr to be processed
 * @param {*} cbf to filter elements
 * @returns {Array} of filtered elements
 */
function myFilter(arr, cbf){
    let newArr =[];
    for(let ele of arr){
        if(ele){
            newArr.push(cbf(ele));
        }
    }
    return newArr;
}

//const gratherThan1 = ele=> ele>1 
function gratherThan1(ele){return ele>1 } 
//const lessThan4 =ele=> ele<4;
function lessThan4(ele){return ele<4}

console.log("expecting [false, true,true,true, true]", myFilter(arr, gratherThan1))
console.log("expecting [true, true,true,false, false]", myFilter(arr, lessThan4))