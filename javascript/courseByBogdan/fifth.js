// инструкции, массивы, метод forEach, map, деструктуризация


// инструкции к примеру let к переменной 
// выражение всегда возвращает значение
// инструкции всегда надо выделять ;, но ; не требуется после блока инструкции

let a;  // инструкция

const b = 3;    // инструкция

// выражение может быть инструкцией
// инструкция не может быть трнсформирована в выражение
// выражения в отличие от инструкций могут быть вызваны аргументом в функции


// массив - это объект с цифровыми именами свойств
// свойства у массива называется от 0 и тд

const myArray = [1, 2, 3, 'bhg']
myArray[1] = 5
myArray[4] = 54

myArray.push(false)         // добавить элемент
myArray.pop()               // удалить элемент
myArray.unshift('lol')      // добавить элемент в начале массива
myArray.shift()             // удаляет 1 элемент массива

console.log(myArray)


// метод forEach используется для того, чтобы перебрать все элементы массива и выполнить определенные действия с этими элементами
// метод forEach не меняет оригинальный массив
const myArray1 = [0, 2, 4, 6]
console.log(myArray1)

myArray1.forEach(el => console.log(el * 2))     // внутри скобок - это коллбек функция, для каждого элемента массива будет применена эта функция

console.log(myArray1)


// метод Map делает практически все тоже самое, но вдобавок формирует новый измененный массив 
const myArray2 = [6, 2, 7, 8]
console.log(myArray2)

const newArray = myArray2.map(el => el * 2)
console.log(newArray)
console.log(myArray2)


// деструктуризация

// этот процесс называется дуструктуризацией объекта 
//есть объект
const userProfile = 
{
    name: 'Danil',
    age: 45,
    city:'Volgograd'
}
// создание новой переменной city со значением из объекта userProfile
// обявление новой переменной и присвоение значение в соответствии со значением свойства объекта
const {city} = userProfile
const {age} = userProfile

console.log(city)

// деструктуризация массива, в котором надо использовать квадратные скобки
const fruits = [4, false, 'ghjt']

const [fruitOne] = fruits       // fruitOne - это значение по индексу [0], js самостоятельно это делает

console.log(fruitOne)

// пример 
// параметр - это как правило переменная, которая будет ссылаться на переданный аргумент
const personProfile = 
{
    name: 'Danil',
    age: 45,
    city:'Volgograd',
    dick: 'have'
}

const newLol = ({name, dick}) =>
{
if (!dick) 
{
    return `User ${name} have not!`
}

    return `User ${name} dick ${dick}`

}

console.log(newLol(personProfile))