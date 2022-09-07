// операторы, операнды, немного о стрелочных функциях, обработка ошибок


// оператор - это встроенная функция в js

// операторы - арифметические, сравнения, логические (! || &&), присванивания, текстовые (typeof, instanceof, new, delete)
// операнды - это что находится по сторонам оператора
// операторы - унарные и бинарные(= + -)

// инфиксная запись - это когда оператор стоит между операндами: a = 2
// префиксная запись - это когда оператор стоит перед операндом
// постфиксная запись - это когда оператор идет после операнда
// !! - оператор отрицания отрицания


// ... - это оператор разделения объекта на свойства, префиксный, унарный оператор
const button = 
{
    color: 'White',
    width: 50
}

const button3 =
{
    ...button,
    name: 'Lol',
}

console.table(button3)


// c помощью оператора + можно конкатеноировать строки
console.log('Hello ' + 'World')

// есть также шаблонные строки, как и форматирование строк в python
const lot1 = 'Hello'
const lot2 = 'World'
const lot3 = `${lot1} ${lot2}`
console.log(lot3)


// есть объявленные функции и есть функциональное выражение
// функциональные выражения всегда анонимны, они без имени
// обявленную функци. можно использовать автономно


// стелочные функции это выражение, они всегда анонимны
const myFunction = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c 
}

console.log(myFunction(6, 7))


// в функции можно присовить значение параметру заведомо
const multByFctor = (value, number=2) => {
    return value * number
}

console.log(multByFctor(20, 3))


const newPost = (post, addedAt = Date()) => 
({
    ...post,
    addedAt,
})

const firstPost = 
{
    name: 'Danil',
    age: 23
}

console.log(newPost(firstPost))


// обработка ошибок
const fnWithError = () => 
{
    throw new Error('New Error')
}

fnWithError()
console.log('Continue..')

// try catch - вкратце, если в блоке try будет ошибка, то будет переход к выполнению кода в catch
const fnWithError2 = () => 
{
    throw new Error('New Error')
}

try 
{
    fnWithError2()
} 
catch (error)                               // в переменной error лежит ошибка из блока try
{
    console.error(error)
    console.log(error.meassage)
}

console.log('Continue...')
