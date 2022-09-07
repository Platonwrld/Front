// Замыкания
// функция в функции

// ex1
function createCulcFunction(a) {
    return function() {
        console.log(a * 1000)
    }
}

// здесь мы замыкаем значение 42
const culc = createCulcFunction(42)
createCulcFunction(45)      // будет пустота, тк функция вывода замкнута
culc()      // 42000


// ex2 
function createIncrimentor(a) {
    return function incr(num) {
        console.log(a * num)
    }
}

// здесь мы делаем замыкание функции на 10
const incrim = createIncrimentor(10)
incrim(2)   // 20


// ex3
function genDomain(domain) {
    return function genUrl(url) {
        console.log(`https://${url}.${domain}`)
    }
}

const clouser = genDomain('com')
clouser('danil')        // https://danil.com
