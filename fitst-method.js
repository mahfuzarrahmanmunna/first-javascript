const car = {
    model: "BMW",
    color: "Black",
    price: "25000$",
    accelerate: function () {
        console.log("Write something print console") // This is method
    },
    "why favorite": ["this color", "this brand", "this vive"]
}
// console.log(car.accelerate)
// dot notation
// console.log(car.price)
const cost = car.price
// console.log(cost)

// bracket Notation
// use of third bracket
const colour = car['color']
// console.log(car['price'])
// console.log(colour)
console.log(car['why favorite'])