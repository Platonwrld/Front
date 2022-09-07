
// переменная let живет либо в контексте определнного блока, либо вне
// let a = 65
//
// if (true) {
//     let a = 24
//     console.log(a) // 24
// }
//
// console.log(a) // 65

// возможно объявить переменную let после функции
// function hoisted() {
//     age = 26
// }
//
// let age
// console.log(26) // 26

// like append in python
// const arr = [1, 2, 3, 5, 8]
// arr.push(13)
// console.log(arr)

// было
// function a (a, b) {
//     return a + b
// }
// console.log(a(5, 6))
//
// // стало
// const c = (h, j) => h + j
// console.log(c(2, 3))
//
// // context
// function log () {
//     console.log(this)
// }
//
// const person = {
//     name: "Lol",
//     age: 22,
//     log: log,
// }
// person.log()    // { name: 'Lol', age: 22, log: [Function: log] }

//Параметры по умолчанию
// const a = 20
// const getDef = b => b * 2
//
// function compute(a = 20, b = getDef(a)) {
//     return a + b
// }
// console.log(compute())

// // Rest / Spread
// // Опреатор Rest
// function average (a, ...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
// }
// console.log(average(5, 2, 3, 4, 5, 6))      // 4
//
// // Оператор Spread как *list в питоне, берет и разворачивает массив
// const arr = [1, 2, 3, 5, 8]
// console.log(...arr)     // 1 2 3 5 8
//
// const fib = [1, ...arr]
// console.log(fib)    // [ 1, 1, 2, 3, 5, 8 ]
//
// // Destructuring
// // т о можно получить значения массива по заданному индексу
// arr_1 = [1, 2, 3, 4, 5]
// const [a, b] = arr_1
// console.log(a, b)       // 1 2

// // Object
// const cityF = 'city'
// const job = 'gey'
//
// const person = {
//     name: 'Lol',
//     [cityF]: 'Xz',
//     job: job,
//     age: 23,
//     'country-live': 'Moscow',
//     start () {
//         return Object.keys(this).filter(key => key !== 'start').map(key => this[key]).join(' ')
//     }
// }
//
// console.log(person.start())     // Lol Xz gey 23 Moscow

