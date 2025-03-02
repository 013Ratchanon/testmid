export class Car {
    private readonly brand: string
    private speed: number = 0

    constructor(brand: string) {
        this.brand = brand
    }

    public accelerate(amount: number): void {
        this.speed += amount
        console.log(`เร่งความเร็วเป็น ${this.speed} กม./ชม`)
    }

    public brake(amount: number): void {
        this.speed = Math.max(0, this.speed - amount) // ไม่ให้ความเร็วต่ำกว่า 0
        console.log(`ลดความเร็วลงเหลือ ${this.speed}`)
    }

    public toString(): string {
        return `Car = [brand=${this.brand}, speed=${this.speed}]`
    }

}
