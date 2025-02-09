const address = "andorKilla";
const part = address.slice(5, 11)
console.log(part)



// Split 
const sentence = "I am a good person. And I am also loved Maria. She is my heart. 🥰🥰"
const arr = sentence.split(" ")
console.log(arr)

// Split divided is many way such as comma, space, letter, word and many think..
const friends = "Cat,dog,rat,mouse,tiger,beer,cow,crow,meu"
const friend = friends.split(",")
console.log(friend)

const friendName = ['Cat','dog','rat','mouse','tiger','beer','cow','crow','meu']
// const joined = friend.join("-")
// console.log(join)
console.log(friendName.join('-'))