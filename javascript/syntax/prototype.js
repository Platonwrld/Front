// прототипом у person будет некий Object, как родительский объкт 
// поэтому объект person унаследует такие методы как toString() и тд
// переменная person является инстансом класса Object
const person = {
    name: 'DANIL',
    age: 23,
    city: 'Vlg'
}
console.log(person.name)
console.log(person.toString())      // [object Object]


Object.prototype.sayHello = function() {
    console.log('Hello')
}

// прототипом для объекта лена будет переменная person
const lena = Object.create(person)

// здесь мы вызываем метод прототипа от прототипа
console.log(lena.sayHello())