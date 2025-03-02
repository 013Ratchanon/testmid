"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, balance, ownerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}, new balance: ${this.balance}`);
        }
        else {
            console.log(`Deposit faild! Amount must be a positive number.`);
        }
    }
    withdraw(amount) {
        if (amount <= this.balance && amount > 0) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}, remaining balance: ${this.balance}`);
        }
        else {
            console.log('Withdraw faild! Insufficient balance');
        }
    }
    getBalance() {
        return this.balance;
    }
    getOwnerName() {
        return this.ownerName;
    }
    toString() {
        return `BankAccount [accountNumber=${this.accountNumber}, balance=${this.balance}, ownerName=${this.ownerName}]`;
    }
}
exports.BankAccount = BankAccount;
