"use strict";
const Account = require("./account")


class SavingAccount extends Account{
constructor(interest){
    super(balance, number)
    this._interest= 0 || interest;
    this._balance = balance;
    this._number = number;   
}
getInterest(){
    return this._interest;
}
setInterest(){
    return this._interest = interest;
}
addInterest(){
    let interest = this._getBalance() * this.getInterest() /100;
    if(interest>0) this.deposite(interest)
    return interest;
}
toString() {
    return "Saving Account " + this._number + "balance: " + this._balance + "interest " + this_interest;
}
endOfMonth() {
    return `Interest added ${this.addInterest()} SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this.getInterest()}`;
}

}

exports.SavingAccount = SavingAccount;