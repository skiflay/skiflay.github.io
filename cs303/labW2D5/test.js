"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page. */

const assert = require("assert");  //always need this with node
const myExports = require("./app");  //with node need the name of your file with your functions here
//  const inArray = myExports.inArray;  //do this for all of the functions used in the Mocha tests
// const inBetween = myExports.inBetween; 
//const byField = myExports.byField; 
// const makeArmy = myExports.makeArmy;  


describe("inArray", function () {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    it("returns the filter for values in array", function () {
        //let filter1To7 = inArray(arr);
        assert.strictEqual(myExports.filter1To7(5), true);
        assert.strictEqual(myExports.filter1To7(0), false);

    });

    it("tests inArray works with Array.filter", function () {
        // let filter1To7 = inArray(arr);
        const arr2 = [0, 5, 10, 6, 100];
        assert.deepEqual(arr2.filter(myExports.filter1To7), [5, 6]);
    });
});

describe("inBetween", function () {

    it("returns the filter for values between", function () {
        //let filter3to6 = myExports.inBetween(3, 6);
        assert.strictEqual(myExports.filter3to6(5), true);
        assert.strictEqual(myExports.filter3to6(0), false);
    });

    // it("tests inBetween works with Array.filter", function () {
    //     //let filter3to6 = myExports.inBetween(3, 6);
    //     const arr2 = [0, 4, 5, 10, 6, 100];
    //     assert.strictEqual(arr2.filter(myExports.filter3to6), [4, 5]);
    // });
});


describe("byField", function(){

    let users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
    ];
  
    it("sorts users by name", function(){
      let nameSortedKey = [
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
        { name: "Pete", age: 18, surname: "Peterson" },
      ];
      //let nameSortedAnswer = users.sort(byField("name"));
      assert.strictEqual( myExports.nameSortedAnswer, nameSortedKey);
    });
  
    it("sorts users by age", function(){
      let ageSortedKey = [
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
      ];
      //let ageSortedAnswer = users.sort(byField("age"));
      assert.strictEqual(myExports.ageSortedAnswer, ageSortedKey);
    });
  
    it("sorts users by surname", function(){
      let surnameSortedKey = [
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
        { name: "Pete", age: 18, surname: "Peterson" },
      ];
      //let surnameSortedAnswer = users.sort(byField("surname"));
      assert.strictEqual(myExports.surnameSortedAnswer, surnameSortedKey);
    });
  

//     describe("army", function() {

//       let army = makeArmy();
      
    
//       it("army[0] shows 0", function() {
//         const shooter0 = army[0]();
//         assert.strictEqual(shooter0, 0);
//       });
    
    
//       it("army[5] shows 5", function() {
//         const shooter5 = army[5]();
//         assert.strictEqual(shooter5, 5);
//       });
   
//     });    
  });