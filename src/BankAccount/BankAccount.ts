export class BankAccount {
    private readonly accountNumber: string
    private balance: number
    protected ownerName: string

    constructor(accountNumber: string, balance: number, ownerName: string) {
        this.accountNumber = accountNumber
        this.balance = balance
        this.ownerName = ownerName
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount
            console.log(`Deposited ${amount}, new balance: ${this.balance}`)
        } else {
            console.log(`Deposit faild! Amount must be a positive number.`)
        }
    }

    public withdraw(amount: number): void {
        if (amount <= this.balance && amount > 0) {
            this.balance -= amount
            console.log(`Withdrawn: ${amount}, remaining balance: ${this.balance}`)
        } else {
            console.log('Withdraw faild! Insufficient balance')
        }
    }

    public getBalance(): number {
        return this.balance
    }

    public getOwnerName(): string {
        return this.ownerName
    }

    public toString(): string {
        return `BankAccount [accountNumber=${this.accountNumber}, balance=${this.balance}, ownerName=${this.ownerName}]`
    }
}