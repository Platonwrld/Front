// Операторы Rest / Spread

// Оператор Spread отдает набор строк, как распакова к питоне *list
const cities = ['Москва', 'Волгоград', 'Воронеж', 'Чита']
console.log(cities)         // ['Москва', 'Волгоград', 'Воронеж', 'Чита']
console.log(...cities)      // Москва Волгоград Воронеж Чита

// Где его можно использовать?
function average (a, ...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
}
console.log(average(5, 2, 3, 4, 5, 6))      // 4

// Spread
const myData = {
    name: 'lol',
    age: 45,
    city: 'Chita'
}

const myFiends = {
    friend1: 'Misha',
    friend2: 'Artem'
}

console.log(myData)     // {name: 'lol', age: 45, city: 'Chita'}
// некая конкатенация объектов
console.log({...myData, ...myFiends})       // {name: 'lol', age: 45, city: 'Chita', friend1: 'Misha', friend2: 'Artem'}

//Rest
// ex1
function sum(a, b, ...args) {
    console.log(args)       // [3, 4, 5, 6, 7]
    return a + b
}
const numbers = [1, 2, 3, 4, 5, 6, 7]
// а здесь мы применяем Spread
console.log(sum(...numbers))        // 3


// ex2
const my_data = {
    name: 'Danil',
    age: 23,
    city: 'Chita'
}
const {name, age, ...argss} = my_data
console.log(argss)      // {city: 'Chita'}
console.log(my_data)    // {name: 'Danil', age: 23, city: 'Chita'}



// Destructuring
// т о можно получить значения массива по заданному индексу
// arr_1 = [1, 2, 3, 4, 5]
// const [a, b] = arr_1
// console.log(a, b)       // 1 2
