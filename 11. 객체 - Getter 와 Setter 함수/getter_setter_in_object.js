'use strict'

const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!')
        return this.a + this.b
    },
}

let result = numbers.sum // getter 함수 실행
console.log(result)      //3

const dog = {
    _name: 'Puppy', // setter 함수 name과 겹치치 않도록 하기 위해 _name으로 선언함
    set name(value) {
        this._name = value
    }
}

console.log(dog._name) // Puppy

dog.name = '멍멍이'     // setter 함수 실행
console.log(dog._name) // 멍멍이

const numbers2 = {
    _a: 1,
    _b: 2,
    _sum: 3,
    calculate() {
        console.log('calculate')
        this._sum = this._a + this._b
    },

    get a() {
        return this._a
    },

    get b() {
        return this._b
    },

    set a(value) {
        this._a = value
        this.calculate()
    },

    set b(value) {
        this._b = value
        this.calculate()
    },
    
    get sum() {
        return this._sum
    }
}

console.log("-------------------")
console.log(numbers2.sum)  // 3
numbers2.a = 5             // calculate
numbers2.b = 7             // calculate
numbers2.a = 9             // calculate
console.log(numbers2.sum)  // 16