// // Символы аболютно уникальны
// const d = Symbol('name')
// const b = Symbol('name')
// console.log(b == d)     // false

// // Итераторы. Возможность получать каждый элемент массива или строки по итерации
// const arr = [1, 2, 3, 4, 5]
// const wrd = 'Hello'
//
// console.log(arr[Symbol.iterator])   // [Function: values]
// console.log(wrd[Symbol.iterator])   // [Function: [Symbol.iterator]]
//
// const iter = arr[Symbol.iterator]()
// console.log(iter.next())    // { value: 1, done: false }
// console.log(iter.next())    // { value: 2, done: false }

// const country = {
//     values: ['uk', 'us', 'kz', 'ru'],       // есть массив со значениями
//     // создаем функцию итерации
//     [Symbol.iterator]() {
//         let i = 0   // обявляем индекс
//             // будем возвращать следущее
//             return {
//                 // стрелочная функция next
//                 next: () => {
//                     const value = this.values[i]    // итерируемое значения
//                     i++    // инкремент индекса
//                     return {
//                         done: i > this.values.length,
//                         value
//                     }
//                 }
//             }
//         }
//     }
// for (let item of country) {
//     console.log(item)
// }
//
// // uk
// // us
// // kz
// // ru
