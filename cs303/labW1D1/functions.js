"use strict";


"use strict";

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number} returns the largest of the numbers
 */
function maxOfThree(a,b,c){
return Math.max(a,b,c);
}
console.log(maxOfThree(-4,-2,-5))

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} returns the sum of all elements in the array
 */
function sum(arr){
    let sum =0;
for(let num of arr){
    sum +=num;
}
return sum;
}
console.log(sum([2,5,3,4]))
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} returns the multiplies of all elements in the array
 */
 function multiply(arr){
    let mul =1;
for(let num of arr){
    mul *=num;
}
return mul;
}
console.log(multiply([2,5,3,4]))

/**
 * 
 * @param {array} arr of words
 */
function findLongestWord(arr){
    let longWord = '';
    for(let word of arr){
        if(word.length>longWord.length){
            longWord= word;
        } 
    }
    return longWord;
}
console.log(findLongestWord(['simon', 'abrish', 'kiflay the great', 'sam']))

/**
 * 
 * @param {Array} arr 
 * @returns {array} return reversed array
 */
function reverseArray(arr){
return arr.reverse();
}

/**
 * 
 * @param {Array} arr 
 * @returns {array} returns reversed array
 */
function reverseArrayInPlace(arr){
    return arr.reverse();
}

/**
 * 
 * @param {array} arr1 array of arrys
 * @param {array} arr2 array
 * @returns {array} array of the correct answers
 */

function scoreExams(stdScore,rightAns){
    let score=[]
    for(let eachAnswer of stdScore ){
    let answer=0
    for(let i=0;i<eachAnswer.length;i++){
    if(eachAnswer[i]===rightAns[i])
    answer++;
    }
    score.push(answer)
    }
    return score;
    }
    console.log(scoreExams([[1, 1, 2], [2, 1, 2], [3, 1, 3]], [3, 1, 2]))
