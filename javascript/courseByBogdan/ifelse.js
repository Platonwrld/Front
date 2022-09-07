// условные инструкции if else, switch, тернарный оператор, циклы


// ложные значения: false, 0, undefined, ''
//if (условие)
{
    // если условие true, то блок крда внутри конструкции будет выполнен
}


const iAm = {
    name: 'Danil',
    mom: 'Olga'
}

if (!iAm.age)
{
    console.log('Man, you are idiot')
}

// if 
// else if
// else


// инструкция switch - это альтернатива использованию if else if, когда много условий 

const month = 1

switch (month)      // условие, значение переменной 2
{
    case 12:
        console.log('December')
    break

    case 1:
        console.log('January ')
    break

    case 2:
        console.log('Febraury')
    break

    default:
        console.log('Это не зимний месяц')
}

// тернарный оператор возвращает значения, имеет три операнда
// Синтаксис: условие ? выражение 1 : выражение 2
// если выражение true - выражение 1, если false - выражение 2
// в тернарном операторе используютя только выражения, инструкции не используются 

const value = 0

value
? console.log('Условие истинно')        // выполнится, если условие false
: console.log('Условие ложно')          // выполнится, если условие true


// в этом случае в функцию падает аргументы, если они true
const val1 = 23
const val2 = 56

val1 && val2
//? myFunction(val1, val2)
//: myFunction()

// в этом случае тернарный оператор выполняется сразу в переменной 
const y = 13
console.log(y >= 0 ? y : -y)

const u = -13
const res = u >= 0 ? u : -u
console.log(res)


// циклы
// типы циклов: for, while, for .. in, do .. while, for .. of
// все циклы это иснтрукции

// 