// Subtask - 1:

// Display sum of all the odd numbers from 81 to 131.

let num = 81;
let sum = 0;

while (num <= 131) {
    if (num % 2 !== 0) {
        sum += num
    }
    num++
}
console.log("Odd number of Sumation : ", sum)

/* Subtask-2:

Display sum of all the even numbers from 206 to 311.
*/
let evenNum = 206;
while (evenNum <= 311) {
    if (evenNum % 2 === 0) {
        sum += evenNum;
    }
    evenNum++
}
console.log("Even Number of Sumation is : ", sum)