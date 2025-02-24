import { BankAccount } from './BankAccount';
import { SavingAccount } from './SavingAccount';

const bankAccount = new BankAccount("001",1000000,"Ratchanon Leechareon");
const savingAccount1 = new SavingAccount("s001",10000000,"Ratchanon Leechareon",0.09)
console.log (bankAccount.getBalnce())
console.log(bankAccount.getownerName())

savingAccount1.applyInterest();
console.log (bankAccount.getBalnce())
console.log(bankAccount.getownerName())
savingAccount1.withdraw(50000)
console.log("-----------------------------------------------------------")





