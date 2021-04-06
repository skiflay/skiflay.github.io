"use strict";

/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */
/**
 * 
 * @param {fun} ok callback function
 * @param {fun} fail callback function
 * @returns {boolean} true, if password is correct, otherwise false
 */

function askPassword(ok, fail) {
    let password ="rockstar";
    if (password === "rockstar") return ok();
    else return fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      return`${this.name} logged in`;
    },
  
    loginFail() {
      return`${this.name} failed to log in`;
    },
  
  };
  //askPassword = askPassword.bind(user)
 console.log(askPassword(user.loginOk.bind(user), user.loginFail.bind(user)));

/**
 * 
 * @param {fun} ok callback function
 * @param {fun} fail callback function
 * @returns {boolean} true, if password is correct, otherwise false
 */

 function askPassword2(ok, fail) {
     let password ="1234";
    if (password === "rockstar") return ok();
    else return fail(); 
  }
  
  let user2 = {
    name: 'John',
  
    login(result) {
      return( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  console.log(askPassword2(()=>user2.login(true), ()=>user2.login(false))); 

  // Arrow function and lexical ‘this’
  /**
   * @parameter {object}
   * @returns {object} list of the group
   */
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList(){
    this.students.forEach(student=> 
    console.log(`${this.title}: ${student}`));
    }
   };
   //console.log(group.showList());
   



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests