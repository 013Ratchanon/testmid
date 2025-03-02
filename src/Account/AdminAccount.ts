import { Account } from "./Account";

export class AdminAccount extends Account {
    constructor(username: string, password: string, email: string) {
        super(username, password, email)
    }

    public resetPassword(newPassword: string): void {
        super.setPassword(newPassword)
    }

    public toString(): string {
        return `${super.toString()}`
    }
}