// продолжение объектов, методы, json, мутация в js



// глобальные объекты: window(cobsole in web), global(node.js). globalThis - унифицированное название объектов
// глобальные объекты имееют свойства
// объект console является свойством объекта global, window (window.console.log = console.log)



// метод - это свойство объекта, значение которого это функция

const myCity = {
    city: 'New-York',
    citygreeting: function () {
        console.log('Hello World')
    }
}

myCity.city                 // доступ к занчению
myCity.citygreeting()       // вызов метода
console.log(myCity)

//схожая запись без function
const myCity1 = {
    city: 'New-York',
    citygreeting () {
        console.log('Hello World')
    }
}



// JSON - формат рбмена данными между компьютерами в интернете



// мутация объекта

const person = 
{
    name: 'Bob',
    age: 12
}

const person2 = person

person2.age = 13
person2.city = 'Volgograd'

console.log(person, person2)

// как избежать мутацию?
// способ 1
const person3 = 
{
    name: 'Bob',
    age: 12
}

const person4 = Object.assign({}, person3)                  // Object - это свойство(и тип и класс js) объекта global, assign - это метод Object, с его помощью можно создавь новый объект

person4.age = 43

console.log(person3, person4)

// способ 2
const person5 = 
{
    name: 'Danil',
    age: 14
}

const person6 = { ...person5 }                    // оператор разделения объекта на свойства                   

person6.age = 43

console.log(person5, person6)

// способ 3
const person7 = 
{
    name: 'Vitalik',
    age: 67
}

const person8 = JSON.parse(JSON.stringify(person7))

person8.age = 43

console.log(person7, person8)