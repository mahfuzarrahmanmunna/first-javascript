const price = 3000;
if (price >= 5000) {
    // 10% discount
    const discount = price * 0.1;
    const payAmount = price - discount;
    console.log(payAmount)
} else if (price >= 2500) {
    // 5% discount
    const discount = price * 0.05;
    const payAmount = price - discount;
    console.log(payAmount);
} else {
    console.log(price)
}