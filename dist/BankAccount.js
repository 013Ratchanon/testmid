"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, balance, ownerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }
    getBalnce() {
        return this.balance;
    }
    getownerName() {
        return this.ownerName;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit ${amount}, new balance: ${this.balance}`);
        }
        else {
            console.log("Deposit faild Amount must be a positive number.");
        }
    }
    withdraw(amount) {
        if (amount <= this.balance && amount > 0) {
            this.balance -= amount;
            console.log(`withdraw ${amount}, remaining balance: ${this.balance}`);
        }
        else {
            console.log("Withdraw faild Insufficient balance.");
        }
    }
    toString() {
        return `BankAccount [AccountNumber = ${this.accountNumber}, Balance = ${this.balance}, OwnerName = ${this.ownerName}`;
    }
}
exports.BankAccount = BankAccount;
