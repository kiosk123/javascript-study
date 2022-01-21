'use strict'

/**
 * 삼항 연산자
 */

const array = []
let text = ''
if (array.length === 0) 
    text = 'Array is empty'
else 
    text = 'Array is not empty'

console.log(text)

// 위 코드를 삼항 연산자로 변환
text = array.length === 0 
    ? 'Array is empty' 
    : 'Array is not empty'

console.log(text)

const condition1 = false
const condition2 = false

const value = condition1
    ? 'Wow'
    : condition2 
        ? 'bla bla'
        : 'foo'
console.log(value)  //foo

let op1 = undefined
let op2 = { name: 'john'}

let result = op1 && op2
console.log(result) // undefined

result = op1 || op2
console.log(result) // { name: 'john'}

op1 = { name: 'merry'}
op2 = { name: 'steve'}

result = op1 && op2
console.log(result) // { name: 'steve'}

result = op1 || op2
console.log(result) // { name: 'merry'}
