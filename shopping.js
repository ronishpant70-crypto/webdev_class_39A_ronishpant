let purchaseAmount = 120;
let discount = 0;

if (purchaseAmount >= 100) {
    discount = 20;
} else if (purchaseAmount >= 50) {
    discount = 10;
}

let finalPrice = purchaseAmount - (purchaseAmount * discount / 100);

console.log("Final Price: $" + finalPrice);