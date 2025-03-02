"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
console.log(`################ Car ################`);
const car = new car_1.Car('MG');
car.accelerate(100);
car.brake(20);
console.log(car.toString());
console.log(`################ Car ################`);
