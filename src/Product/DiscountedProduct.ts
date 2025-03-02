import { Product } from "./Product";

export class DiscountedProduct extends Product {
    constructor(id: string, name: string, price: number) {
        super(id, name, price)
    }

    public discountProduct(discount: number): void {
        const result = super.getPrice() * (100 - discount) / 100
        super.setPrice(result)
        console.log(`ใช้ส่วนลด ${discount}%`)
    }

    public toString(): string {
        return `DiscountedProduct = [${super.toString()}]`
    }
}