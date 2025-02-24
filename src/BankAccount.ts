export class BankAccount{
    readonly accountNumber: string
    private balance:number
    protected ownerName:string
    
    constructor(accountNumber: string,balance:number,ownerName:string){
        this.accountNumber = accountNumber
        this.balance = balance
        this.ownerName = ownerName
    }

    public getBalnce():number{
        return this.balance
    }

    public getownerName():string{
    return this.ownerName
    }

    public deposit(amount:number):void{
        if(amount > 0){
        this.balance += amount;
        console.log(`Deposit ${amount}, new balance: ${this.balance}`);
        }else{
            console.log("Deposit faild Amount must be a positive number.")
        }
    }
    
    public withdraw(amount: number):void{
    if(amount<= this.balance && amount > 0){
        this.balance -= amount; 
        console.log(`withdraw ${amount}, remaining balance: ${this.balance}`);
    }else{
            console.log("Withdraw faild Insufficient balance.")
        }
    }
    

    public toString():string{
        return `BankAccount [AccountNumber = ${this.accountNumber}, Balance = ${this.balance}, OwnerName = ${this.ownerName}`
    }
}
