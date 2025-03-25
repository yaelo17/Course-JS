function calculateDiscountedPrice(price, discountpercentage) {
    const discountedPrice = (price * discountpercentage) / 100
    const priceWithDiscount = price - discountedPrice

    return priceWithDiscount
}

const originalPrice = 1000
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice) 
console.log('Discount Percentage: ' + discountPercentage + '%')
console.log('Final Price: $' + finalPrice)