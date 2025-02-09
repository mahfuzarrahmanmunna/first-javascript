const mobile = {
    name: "Samsung",
    price: 25000,
    color: 'Black',
    camera: '12mp',
    isNew: true
}
// for of : use in array 
// for in : use in object 😊😊
for (const prop in mobile) {
    //     console.log(prop)
    //     console.log(mobile[prop])
}

const keys = Object.keys(mobile);
// console.log(keys)

for (const key of keys) {
    console.log(key, ':', mobile[key])
}