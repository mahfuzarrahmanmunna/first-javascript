const car = {
    model: "BMW",
    color: "Black",
    price: "25000$",
    accelerate: function () {
        console.log("Write something print console") // This is method
    },
    "why favorite": ["this color", "this brand", "this vive"]
}
car.model = "Supra"
// console.log(car)
car['color'] = "Navy Blue"
console.log(car)