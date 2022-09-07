// reduce
const arr = [1, 2, 3, 5, 6, 7, 8]
// когда начинается работа методы, то total становится первым числом, а amount второе число
// 1 + 2 = 3 + 3 = 6 + 5 = 11 + 6 = 17 + 7 = 24 + 8 =32
const sum = arr.reduce((total, amount) => total + amount)        // total и amount - число, с которым сейчас идет работа
console.log(sum)        // 32

const average = arr.reduce((total, amount) => total + amount) / arr.length
console.log(average)