class Person {

    // данная переменная может вызываться только черз класс, но не через инстансы
    static type = 'sosa'

    constructor(options) {
        this.name = options.name
        this.age = options.age
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}

const men = new Person('Viktor', 45)
console.log(men.greet)

class Programmer extends Person 
{
    constructor(name, job) {
        super(name);
        this.job = job
    }

    greet() {
        super.greet();
    }
}

const backend = new Programmer('Viktor', 'Backend')
backend.greet()             // Hello
console.log(backend)        // Programmer { name: 'Viktor', job: 'Backend' }
