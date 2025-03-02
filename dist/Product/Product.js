"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        if (typeof newPrice === 'number') {
            if (newPrice >= 0) {
                this.price = newPrice;
                console.log(`เปลี่ยนราคาสินค้าเรียบร้อย`);
            }
            else {
                console.log(`ใส่มากกว่า 0 หรือ เท่ากับ 0`);
            }
        }
        else {
            console.log(`ใส่ได้แค่เฉพาะตัวเลขเท่านั้น`);
        }
    }
    toString() {
        return `Product = [id=${this.id}, name=${this.name}, price=${this.price}]`;
    }
}
exports.Product = Product;
