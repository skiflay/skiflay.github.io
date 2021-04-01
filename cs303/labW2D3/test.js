"use strict";
// const assert = require("assert");
// const pureFun = require("./app");

describe("High order functions", function(){
    const arr = [1,2,3,4,5];
    it("multiply elements by 2", function(){
        assert.deepEqual(pureFun.myMap(arr, pureFun.dblFun), [2,4,6,8,10])
    });
    it("double elements", function(){
        assert.deepEqual(pureFun.myMap(arr, pureFun.squareFun), [1,4,9,16,25])
});
});

describe("High order functions", function(){
    const arr = [1,2,3,4,5];
    it("sum elements of array", function(){
        assert.deepEqual(pureFun.myReduce(arr, pureFun.sumFun), 15)
    });
    it("multiply elements of array", function(){
        assert.deepEqual(pureFun.myReduce(arr, pureFun.mulFun), 120)
    });
});

describe("High order functions", function(){
    const arr = [1,2,3,4,5];
    it("filter elements grather than 1", function(){
        assert.deepEqual(pureFun.myFilter(arr, pureFun.gratherThan1), [false, true,true,true, true])
    });
    it("filter elements less than 4", function(){
        assert.deepEqual(pureFun.myFilter(arr, pureFun.lessThan4), [true, true,true,false, false])
    });
});