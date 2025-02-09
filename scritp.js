var number = [1, 2, 3, 4, 5, 6, 7];

var sum = number.reduce((preValue, currentValue, currentIndex, arr) => {
    return preValue + currentValue;
}, 0);
console.log(sum)