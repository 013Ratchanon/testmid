import { BankAccount } from "./BankAccount";

export class SavingAccount extends BankAccount{
    private interestRate:number
    constructor(accountNumber: string,balance:number,ownerName:string,interestRate:number){
        super(accountNumber,balance,ownerName)
        this.interestRate = interestRate
    }

    applyInterest():void{
        const interest = this.getBalnce() * this.interestRate
        this.deposit(interest);
        console.log(`Applied interest:${this.interestRate}, new balance: ${this.getBalnce()}`)
    }

    public getinterestRate():number{
        return this.interestRate
    }

    public toString ():string{
    return `SavingAccount [intersetrRate =${this.interestRate}, Bankaccount = ${super.toString()} ]` 
    }
}