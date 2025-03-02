"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand) {
        this.speed = 0;
        this.brand = brand;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`เร่งความเร็วเป็น ${this.speed} กม./ซม`);
    }
    brake(amount) {
        this.speed = Math.max(0, this.speed - amount); // ไม่ให้ความเร็วต่ำกว่า 0
        console.log(`ลดความเร็วลงเหลือ ${this.speed}`);
    }
    toString() {
        return `Car = [brand=${this.brand}, speed=${this.speed}]`;
    }
}
exports.Car = Car;
