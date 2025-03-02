import { BankAccount } from "./BankAccount";

export class SavingAccount extends BankAccount {

    private interestRate: number

    constructor(accountNumber: string, balance: number, ownerName: string, interestRate: number) {
        super(accountNumber, balance, ownerName)
        this.interestRate = interestRate
    }

    applyInterest(): void {
        const interest = this.getBalance() * this.interestRate
        this.deposit(interest)
        console.log(`Applied interest:${this.interestRate}, new balance: ${this.getBalance()}`)
    }

    public getInterestRate(): number {
        return this.interestRate
    }

    public setInterestRate(rate: number): void {
        this.interestRate = rate
    }

    public toString(): string {
        return `SavingAccount [interestRate=${this.interestRate}, bankaccount=${super.toString()}]`
    }
}