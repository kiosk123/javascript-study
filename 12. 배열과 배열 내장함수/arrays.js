'use strict'

/* 배열 선언 */

const array = [1, 2, 3, 4, 5]
console.log( array )    // [ 1, 2, 3, 4, 5 ]

const array1 = [1, 'blabla', {}, 4]
console.log( array1[2]) // {}

const objects = [
    {name: 'doggy'},
    {name: 'kitty'}
]

console.log(objects[0]) // { name: 'doggy' }

/* 배열에 새로운 항목 추가 - push */
objects.push({name: 'doggy2'})

console.log(objects)   // [ { name: 'doggy' }, { name: 'kitty' }, { name: 'doggy2' } ]

console.log(objects.length) // 배열의 길이 확인


