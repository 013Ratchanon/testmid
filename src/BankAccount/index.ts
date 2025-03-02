
import { BankAccount } from "./BankAccount";
import { SavingAccount } from "./SavingAccount";

const bankAccount = new BankAccount('653', 50000, 'Ratchanon Leechareon')
const savingAccount = new SavingAccount('s653', 100000, 'Ratchanon Leechareon', 0.09)


console.log('############################')
console.log(savingAccount.getOwnerName())
console.log(savingAccount.getBalance())
savingAccount.applyInterest();
console.log('############################')
console.log(savingAccount.withdraw(2000000))
console.log('############################')
