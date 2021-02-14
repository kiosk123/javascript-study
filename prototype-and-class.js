
/**
 * es5 스타일의 클래스 정의
 */
function AnimalBasic(type, name, sound) {
    this.type = type
    this.name = name
    this.sound = sound

    this.say = function() {
        console.log(this.sound)
    }
}

let dog = new AnimalBasic('dog', 'puppy', 'bark bark')
let cat = new AnimalBasic('cat', 'kitty', 'meow')

dog.say()
cat.say()

/**
 * es5 스타일의 클래스 정의 - 메소드를 prototype에 설정하기
 */
function AnimalProto(type, name, sound) {
    this.type = type
    this.name = name
    this.sound = sound
}

AnimalProto.prototype.say = function() {
    console.log(this.sound)
}

dog = new AnimalProto('dog', 'puppy', 'bark bark')
cat = new AnimalProto('cat', 'kitty', 'meow')

dog.say()
cat.say()

/**
 * es5 스타일의 상속
 */
function Animal(type, name, sound) {
    this.type = type
    this.name = name
    this.sound = sound
}

Animal.prototype.say = function() {
    console.log(this.sound)
}

function Dog(type, name, sound) {
    Animal.call(this, type, name, sound)
}

Dog.prototype = Animal.prototype

dog = new Dog('dog', 'puppy', 'bark bark')
dog.say()

/**
 * es6 스타일의 클래스 선언
 */
class AnimalEs6 {
    constructor(type, name, sound) {
        this.type = type
        this.name = name
        this.sound = sound
    }

    say = function() {
        console.log(this.sound)
    }

    getName() {
        console.log(this.name)
    }
}

dog = new AnimalEs6('dog', 'puppy', 'bark bark')
dog.say()
dog.getName()

/**
 * es6 스타일의 클래스 상속
 */
class Animal1 {
    constructor(type, name, sound) {
        this.type = type
        this.name = name
        this.sound = sound
    }

    say = function() {
        console.log(this.sound)
    }

    getName() {
        console.log(this.name)
    }
}

class Dog1 extends Animal1 {
    constructor(name, sound) {
        super('dog', name, sound)
    }
}

dog = new Dog1('puppy', 'bark bark bark')
dog.say()
dog.getName()