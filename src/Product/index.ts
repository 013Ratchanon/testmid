import { DiscountedProduct } from "./DiscountedProduct"
import { Product } from "./Product"



console.log('############### Product ###############')
const product = new Product('P01', 'speaker', 2000)
console.log(product.toString())
console.log('############### Product ###############')
console.log('############### DiscountedProduct ###############')
const discountedProduct = new DiscountedProduct('P01', 'speaker', 200)
console.log(discountedProduct.getPrice())
discountedProduct.discountProduct(25)
console.log(discountedProduct.getPrice())
console.log(discountedProduct.toString())
console.log('############### DiscountedProduct ###############')