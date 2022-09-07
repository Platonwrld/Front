// пустой this будет указывать на глобальный объект Window this===window => true
function hello() {
    console.log('Hello', this)
}

// this указывает на контекст
// в данном объект, this скрыт, но контекст будет отдаваться в любом случае, контекстом будут свойста и значения объекта
const person = {
    name: 'Danil',
    age: 23,
    city: 'Vlg',
    sayHello: hello.bind(this),
    logInfo: function(job) {
        console.group(`${this.name} info:`)
        // фактически this ссылает на person
        console.log(`Hello ${this.name}`)   // Hello Danil
        console.log(`Age ${this.age}`)
        console.log(`Your job ${job}`)
        console.groupEnd()
    }
}

console.log(person.logInfo())

const lena = {
    name: 'Lena',
    age: 67
}

// биндим функцию из объекта person к объекту lena
// и вызвав ее, в контекст this будут передаваться значения об]екта lena
const logInfofuncForLena = person.logInfo.bind(lena, 'chlen')
logInfofuncForLena()


// ============================================

const arr = [1, 2, 3, 4, 5, 6]

    // чтобы не делать так
// function multBy(array, b) {
//     return array.map(function(i) {
//         return i * b
//     })
// }
// console.log(multBy(arr, 5))

// мы обращаемя к глобальному классу Array, который является родительским для массивов
// обращаемся к его прототипу и создаем новую функцию
// и с помощью контекста создаем функцию
Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(arr.multBy(20))