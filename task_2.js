// Subtask - 1:

// Display sum of all the odd numbers from 81 to 131.

let num = 81;
let sum = 0;

// while (num <= 131) {
//     if (num % 2 !== 0) {
//         sum += num
//     }
//     num++
// }
// console.log("Odd number of Sumation : ", sum);

// for loop use of this program 
for (i = 81; i <= 131; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log("Odd number of Sumation : ", sum);

/* Subtask-2:

Display sum of all the even numbers from 206 to 311.
*/
// let evenNum = 206;
// while (evenNum <= 311) {
//     if (evenNum % 2 === 0) {
//         sum += evenNum;
//     }
//     evenNum++
// }
// console.log("Even Number of Sumation is : ", sum)


// Use for loop
for (i = 206; i <= 311; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum)
