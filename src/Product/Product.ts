export class Product {
    private readonly id: string
    protected name: string
    private price: number

    constructor(id: string, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    public getPrice(): number {
        return this.price
    }

    public setPrice(newPrice: number): void {
        if (typeof newPrice === 'number') {
            if (newPrice >= 0) {
                this.price = newPrice
                console.log(`เปลี่ยนราคาสินค้าเรียบร้อย`)
            } else {
                console.log(`ใส่มากกว่า 0 หรือ เท่ากับ 0`)
            }
        } else {
            console.log(`ใส่ได้แค่เฉพาะตัวเลขเท่านั้น`)
        }
    }

    public toString(): string {
        return `Product = [id=${this.id}, name=${this.name}, price=${this.price}]`
    }
}