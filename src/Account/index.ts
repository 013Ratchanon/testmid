import { Account } from "./Account";
import { AdminAccount } from "./AdminAccount";

console.log('################ Acount ################')
const account = new Account("Tae", "777", "dewtete@gmail.com")
console.log(account.toString())
account.changePassword('123', '456')
console.log(account.getPassword())
console.log('################ Acount ################')
console.log('################ Admin Account ################')
const adminaccount = new AdminAccount("Admin", 'admin123', "admin@gmail.com")
console.log(adminaccount.toString())
adminaccount.resetPassword('8admin88')
console.log(adminaccount.getPassword())
console.log('################ Admin Account ################')