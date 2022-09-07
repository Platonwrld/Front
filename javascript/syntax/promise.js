console.log('Request data')
// Этот кусок кода раюотает, но он не очень хороший, так как много вложенностей и дальше его будет сложно модифицировать
// setTimeout(() => {
    
//     console.log('Preparing data')

//     const backData = {
//         name: 'Lol',
//         age: 32,
//         city: 'Lol'
//     }

//     setTimeout(() => {
//         backData.lol = true
//         console.log(backData)
//     }, 2000)

// }, 2000)

// На помощь приходят Promise
// Promise - это глобальный класс, от котогоро создается экземпляр
// в него надо передавать callback function
// Promise всегда принимает 2 парматера resolve и reject(функции)
// в теле функции прописывается асинхронный код
// resolve вызывается тогда, когда асинхронный код выполнился 
// переменная prom - это фактически промис с набором методов
// ex1
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data')

        const backData = {
            name: 'Lol',
            age: 32,
            city: 'Lol'  
        }

        // в then передается объект с данными
        resolve(backData)

    }, 2000)
})

// например метод then, читается как: когда выполнится промис 
// then принимает объект с данными, который передает resolve
// также есть метод catch для ловли ошибок
prom.then((data) => {
    
    const prom2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.lol = 'sasamba'
            resolve(data)
        }, 1000)
    })

    prom2.then((clientData) => {
        console.log(clientData)
    })

})

// ex2 
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(() => {console.log('Sosi 2')})
sleep(3000).then(() => {console.log('Sosi 3')})