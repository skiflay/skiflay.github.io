"use strict";

// const assert = require("assert"); 
// const myExports = require("./app");
//const subtree = myExports.subtree;



describe("Return subtree ", function () {
   let homer;
    it("Given a target value, return true value", function () {

          assert.deepEqual(myExports.subtree(homer, "Homer"), true);
    });

    it("Given a target value, return false value ", function () {
        let homer;
        assert.deepEqual(myExports.subtree(homer, "omer"), false);

    });
});