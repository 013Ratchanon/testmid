"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password = newPassword;
            console.log(`เปลี่ยนรหัสผ่านเรียบร้อย`);
        }
        else {
            console.log(`รหัสผ่านไม่ถูกต้อง`);
        }
    }
    setPassword(password) {
        if (typeof password === 'string') {
            this.password = password;
        }
        else {
            console.log(`Error`);
        }
    }
    getPassword() {
        return this.password;
    }
    toString() {
        return `Account [username=${this.username}, password=${this.password}, email=${this.email}]`;
    }
}
exports.Account = Account;
