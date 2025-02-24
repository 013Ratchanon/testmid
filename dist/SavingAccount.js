"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class SavingAccount extends BankAccount_1.BankAccount {
    constructor(accountNumber, balance, ownerName, interestRate) {
        super(accountNumber, balance, ownerName);
        this.interestRate = interestRate;
    }
    applyInterest() {
        const interest = this.getBalnce() * this.interestRate;
        this.deposit(interest);
        console.log(`Applied interest:${this.interestRate}, new balance: ${this.getBalnce()}`);
    }
    getinterestRate() {
        return this.interestRate;
    }
    toString() {
        return `SavingAccount [intersetrRate =${this.interestRate}, Bankaccount = ${super.toString()} ]`;
    }
}
exports.SavingAccount = SavingAccount;
