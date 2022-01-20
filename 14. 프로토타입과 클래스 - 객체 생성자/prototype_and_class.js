/**
 * 객체 생성자
 */

 function Animal(type, name, sound) {
    this.type = type
    this.name = name
    this.sound = sound
    // this.say = function () { // 객체 생성될때마다 새로운 say 함수가 만들어지고 있어서 비효율 적임
    //     console.log(this.sound);
    // }
}

// prototype을 활용하여 어떤 값이나 함수를 재활용 할 수 있음
Animal.prototype.say = function() {
    console.log(this.sound);
}

Animal.prototype.sharedValue = 1

const dog = new Animal('개', '멍멍이', '멍멍')
const cat = new Animal('고양이', '야옹이', '야옹')

dog.say()  // 멍멍
cat.say()  // 야옹

dog.sharedValue  // 1
cat.sharedValue  // 1