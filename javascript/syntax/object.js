let obj = {
    name: 'lol',
    age: 45,
    city: 'Volgograd',
    bar: [1, 2, 3],
}

// // заморозка объекта, изменить его врядли получится
// Object.freeze(obj)
// obj.newProperty = true
// console.log(obj)        // { name: 'lol', age: 45, city: 'Volgograd' }
//
// obj.age = 65
// console.log(obj.age)
//
// // а вот вложенные объекты не замораживаются
// obj.bar.push(10)
// console.log(obj.bar)        //[ 1, 2, 3, 10 ]

// // Object methods
//
// let a = {lol: 'lol', age: 23}
// let b = {a: 'b', b: 'a'}
// const abc = Object.assign(a, b)
// console.log(abc)        // { lol: 'lol', age: 23, a: 'b', b: 'a' }
//
// console.log(Object.entries(abc))        // [ [ 'lol', 'lol' ], [ 'age', 23 ], [ 'a', 'b' ], [ 'b', 'a' ] ]
// console.log(Object.keys(abc))           // [ 'lol', 'age', 'a', 'b' ]
// console.log(Object.values(abc))         // [ 'lol', 23, 'b', 'a' ]


// creation the object with help a global object Object
// you can call different methods from Object
// method create take a couple of parametres - objects
// first object it's prototype person
const person = Object.create({}, {
    name: {
        value: 'Danil'
    },

    age: {
        value: 23,
    }

})

for (let key in person) {
    console.log('Key', key, person(key))
}