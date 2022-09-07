// циклы


// циклы
// типы циклов: for, while, for .. in, do .. while, for .. of
// все циклы это иснтрукции
// когда в цикле for создается переменная к примеру для итерации свойств, то каждую итерацию переменная будет новой


// for (начальная инструкция; условие; итерационное действие)
// { блок кода выполняемый на каждой итерации }

for (let i = 1; i <= 5; ++i)
{
    console.log(i)
}


// в массивах лучше использовать метод forEach

const barArray = [45, 'lol', true, 22]

barArray.forEach((element, index) => 
{
    console.log(element, index)
})


// цикл while 
// выполняется пока условие true, если false, то код в цикле не будет выполняться

// цикл do while, выполнться 1 раз, если будет false
let k = 0

do 
{
    console.log(k)
    k++
} 
while(k < 5)


// цикл for in
const kalN = 
{
    name: 'Danil',
    age: 23,
    city: 'Moscow'
}

for (const k in kalN)
{
    console.log(k, kalN[k])
}


// другой способ получение всех свойств объекта с помощтю forEach
// создается объект, далее он ковертируется в массив и далее с помощью метода forEach идет перебор значений этого массива
const myObject = 
{
    name: 'Danil',
    age: 23,
    city: 'Moscow',
    sex: 'yes'
}

Object.keys(myObject).forEach(key => {          // метод keys переменной Object
    console.log(key, myObject[key])
})

console.log('')

const myObject2 = 
{
    name: 'Danil',
    age: 23,
    city: 'Moscow',
    sex: 'yes'
}

Object.values(myObject2).forEach(value => {
    console.log(value)
})

console.log('')

// цикл for of (он не для объектов)
// здесь иет перебор по символам
// на каждой итерации переменная letter будет новая
const myString = 'Hey'
for (const letter of myString) 
{
    console.log(letter)
}