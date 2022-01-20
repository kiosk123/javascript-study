'use strict'

/**
 * for 문
 */
for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

for (let i = 10; i >= 0; i-=2) {
    console.log(i)
}

const names = ['puppy', 'kitty', 'bird']
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

/**
 * while 문
 */
let i = 0
while (i < 10) {
    console.log(i)
    i++
}


/**
 * for..of 문 - 배열을 반복하면서 값을 바로 가져올때
 */
const numbers = [10, 20, 30, 40, 50]

for (let number of numbers) {
    process.stdout.write(`${number} `) // 10 20 30 40 50
}

/**
 * for..in 문 - 객체를 반복하면서 객체의 키와 값을 가져올때
 */
const doggy = {
    name: 'puppy',
    sound: 'bark bark',
    age: 2
}

// Object.keys(obj) - 자바스크립트 객체 key를 배열로 출력
console.log(Object.keys(doggy))  // [ 'name', 'sound', 'age' ]

// Object.entries(obj) - 자바스크립트 객체를 [key, value] 형태의 배열로 출력
console.log(Object.entries(doggy)) // [ [ 'name', 'puppy' ], [ 'sound', 'bark bark' ], [ 'age', 2 ] ]

// Object.values(obj) 자바스크립트 객체 key의 value를 배열로 출력
console.log(Object.values(doggy)) // [ 'puppy', 'bark bark', 2 ]

for (let key in doggy) {
    process.stdout.write(`${doggy[key]} `) // puppy bark bark 2
}

// 반복문 continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) 
        continue
    console.log(i)
}

// 반복문 break
for (let i = 0; i < 10; i++) {
    if (i === 7) 
        break
    console.log(i)
}

