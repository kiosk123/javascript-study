# 10. 객체 - 객체 안에 함수 넣기

```js
'use strict'

const dog = {
    name: 'Puppy',
    sound: 'bark bark',
    say: function() {
        console.log(this.sound) // this는 자신의 객체(dog)를 가르킴
    },

    say2: () => {
        console.log(this.sound) // this는 undefined - 화살표 함수에서 this는 객체를 가르키지 않는다
    }
}

dog.say()  // bark bark
dog.say2() // undefined

const cat = {
    name: 'cat',
    sound: 'miu~'
}

cat.say = dog.say // this는 자신의 객체를 가르키므로 cat를 가르킴
cat.say()         // miu~

const catSay = cat.say;
catSay()         // this가 뭔지 알 수 없으므로 `TypeError: Cannot read property 'sound' of undefined` 발생

```