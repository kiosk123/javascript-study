
/**
 * ES6 클래스 선언
 */
class Animal {
    constructor(type, name, sound) {
        this.type = type
        this.name = name
        this.sound = sound
    }

    // 자동으로 프로토타입으로 등록
    say() {
        console.log(this.sound)
    }
}

let dog = new Animal('개', '멍멍이', '멍멍')
let cat = new Animal('고양이', '야옹이', '야옹')

dog.say()
cat.say()

//====================================================
/**
 * ES6 상속
 */
class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound)
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound)
    }
}

dog = new Dog('멍멍이', '멍멍~')
cat = new Cat('야옹이', '야옹~')

dog.say()
cat.say()