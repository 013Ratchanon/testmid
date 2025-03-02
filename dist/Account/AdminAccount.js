"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccount = void 0;
const Account_1 = require("./Account");
class AdminAccount extends Account_1.Account {
    constructor(username, password, email) {
        super(username, password, email);
    }
    resetPassword(newPassword) {
        super.setPassword(newPassword);
    }
    toString() {
        return `${super.toString()}`;
    }
}
exports.AdminAccount = AdminAccount;
