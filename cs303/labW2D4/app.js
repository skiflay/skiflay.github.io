"use strict";

exports.treeNode2 =treeNode2;
exports.contains = contains;
exports.subtree = subtree;
/**
 * 
 * @param {value}
 * @returns {boolean} true if value exista, otherwise false
 */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}
/* replacemtn of above treenode clas code */
function treeNode2(value) {
    this.value = value;
    this.descendents;
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

/**
 * 
 * @param {*} node 
 * @returns{}
 */

function printName(node) {

    if (node.descendents === null) {
        console.log("name:", node.value)
    }
    else {
        /* the node reduction */
        console.log("name:", node.value)
        for (let child of node.descendents) {
            printName(child)
        }
    }
}

console.log(printName(abe));

/**
 * 
 * @param {node} node 
 * @param {target} target 
 * @returns {boolean} true if target exists, otherwise false
 */
function contains(node, target) {
    if (node.descendents === null) {
        if (node.value === target) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        let childresult = false;
        if (node.value === target) {
            return true;
        }
        for (let child of node.descendents) {
            childresult = contains(child, target)
            if (childresult === true) {
                return true;
            }
        }
        return childresult;
    }
}

console.log("expects true", contains(abe, "Lisa"));//this should be true;
console.log("expects true", contains(abe, "Crusty"));//this should be true;

/**
 * 
 * @param {treeNode} TreeNode 
 * @param {target} target 
 * @returns {subtree} with Homer as the root
 */
    function subtree(TreeNode, target) {
        /* base case -- if children is null or empty */
        if (subtree.descendents=== []) {
            if (TreeNode.value === target) {
                return TreeNode;
            } else {
                return undefined;
            }
        } else { //reductive recursion step
            let childResult = null;
            if (TreeNode.value === target) {
                return TreeNode;
            }
            for (let child of TreeNode.descendents) {
                childResult = subtree(child, target);
                if (childResult === TreeNode) {
                    return TreeNode;
                }
            }
            return undefined; //did not find the target 
        }
    }

console.log("expect true", subtree(abe, "Abe"));


/* 4. Create a new constructor function ListNode (based on TreeNode below) and use it to generate a
linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree. */
// const LEFT = 0;
// const RIGHT = 1;

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.descendants = [];
//     this.parent = null;
//   }

//   get left() {
//     return this.descendants[LEFT];
//   }

//   set left(node) {
//     this.descendants[LEFT] = node;
//     if (node) {
//       node.parent = this;
//     }
//   }

//   get right() {
//     return this.descendants[RIGHT];
//   }

//   set right(node) {
//     this.descendants[RIGHT] = node;
//     if (node) {
//       node.parent = this;
//     }
//   }
// }

/* 
5. Given a target value in the list, return the node that contains the target value or null if no match.
findListNode(list, “Bart”) */



/* 6. Write a recursive function, treeModifier, that will take a tree and a modifier function as
parameters. Walk through the tree and apply the function to each node. The function should
apply the following operations to each node. treeModifier(tree, modiferFunc)
• allCaps(node) will change the value of a node to be all caps.
• addStars(node) will change the value to have *** in front and behind the node value.
• reverseNode(node) will reverse the string of the node value. Abe -> ebA
Call your recursive function with each of these modifier functions. */

function treeModifier(treeNode, modFunc) {
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
        return undefined;
    } else {  //loop through the array of descendents and recursively call treeModifier
        for (const node of treeNode.descendents) {
            treeModifier(node, modFunc);
        }
    }
}

function caps(node) {
    node.value = node.value.toUpperCase();
}

console.log("the tree modifier reuls", treeModifier(abe, caps));
console.log('now tree has stars', abe);

/*7- Write a recursive function, treeCollector(tree) that will walk the tree and collect the values of
each node into an array [“Abe”, “Homer”, “Bart”, “Lisa”, “Maggie”] for this tree. You may want
to use an accumulator variable that is external to the function to hold the values. */
// let lisa = { name: "Lisa", next: null }
// let berta = { name: "Berta", next: null }
// let maggie = { name: "Maggie", next: null }
// let hommer = { name: "Hommer", next: [maggie, berta, lisa] }
// let abe = { name: "Abe", next: hommer }
//console.log(abe);

function linkedlist(arg) {
    let x = arg.name;
    let z = arg.next;
    if (z === null) {
        return x
    }
    else {
        for (let y in arg.name) {
            linkedlist(y)

        }
    }
    return x, z;
}
console.log(linkedlist(abe));



/* 
8. Find the bank.js file in 303Demos\d24recursiveStructures\bank.js. Complete the
implementation as indicated in the code. */

const bank = {
    transactionDB: [],
};

bank.transactionDB = [
    { custID: 1, custTrans: [10, 50, -40] }, // balance = 20
    { custID: 2, custTrans: [10, 10, -10] }, // balance = 10
    { custID: 3, custTrans: [5, -5, 55] }, // balance = 55
];

bank.checkId = function (id) {
    const foundCustmr = bank.transactionDB.find(customer => customer.custID === id);
    return foundCustmr;
};

bank.getBalance = function (id) {
    const customer = this.checkId(id);
    const balance = customer.custTrans.reduce((sum, item) => sum + item, 0);
    return balance
}

bank.saveTransaction = function (id, amount) {
    const customer = this.checkId(id);
    customer.custTrans.push(amount);
}

bank.debit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else if (amount > balance) {
        console.log("Insufficient balance. Please try again !");
    } else {
        amount = amount * -1;
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
};

bank.credit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else {
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
}

bank.totalBalance = function () {
    const custArr = this.transactionDB;
    let sum = 0;
    for (const customer of custArr) {
        const id = customer.custID;
        const custBalance = this.getBalance(id);
        sum += custBalance;
    }
    return sum;
}