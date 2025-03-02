export class Account {
    private readonly username: string
    private password: string
    protected email: string

    constructor(username: string, password: string, email: string) {
        this.username = username
        this.password = password
        this.email = email
    }

    public changePassword(oldPassword: string, newPassword: string): void {
        if (this.password === oldPassword) {
            this.password = newPassword
            console.log(`เปลี่ยนรหัสผ่านเรียบร้อย`)
        } else {
            console.log(`รหัสผ่านไม่ถูกต้อง`)
        }
    }

    public setPassword(password: string): void {
        if (typeof password === 'string') {
            this.password = password
        } else {
            console.log(`Error`)
        }
    }

    public getPassword(): string {
        return this.password
    }

    public toString(): string {
        return `Account [username=${this.username}, password=${this.password}, email=${this.email}]`
    }
}