# 15. 프로토타입과 클래스 - 객체 생성자 상속하기

```js
/**
 *  두번이나 클래스를 선언하는 낭비가 있음
 */

function Dog(name, sound) {
    this.type = '개'
    this.name = name
    this.sound = sound
}

function Cat(name, sound) {
    this.type = '고양이'
    this.name = name
    this.sound = sound
}


Dog.prototype.say = function() {
    console.log(this.sound);
}

Cat.prototype.say = Dog.prototype.say

const dog = new Dog('멍멍이', '멍멍')
const cat = new Cat('야옹이', '야옹')

dog.say()  // 멍멍
cat.say()  // 야옹


//============================================================================
/**
 * 상속 처리
 */
 function Animal(type, name, sound) {
    this.type = type
    this.name = name
    this.sound = sound
}

Animal.prototype.say = function() {
    console.log(this.sound);
}

// call 메서드를 활용하여 특정 객체의 컨텍스트에서 함수가 실행되도록 한다.
function Dog(name, sound) {
    Animal.call(this, '개', name, sound) 
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound) 
}

Dog.prototype = Animal.prototype
Cat.prototype = Animal.prototype

const dog = new Dog('멍멍이', '멍멍')
const cat = new Cat('야옹이', '야옹')

dog.say()  // 멍멍
cat.say()  // 야옹

```