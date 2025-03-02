"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = void 0;
const Product_1 = require("./Product");
class DiscountedProduct extends Product_1.Product {
    constructor(id, name, price) {
        super(id, name, price);
    }
    discountProduct(discount) {
        const result = super.getPrice() * (100 - discount) / 100;
        super.setPrice(result);
        console.log(`ใช้ส่วนลด ${discount}%`);
    }
    toString() {
        return `DiscountedProduct = [${super.toString()}]`;
    }
}
exports.DiscountedProduct = DiscountedProduct;
