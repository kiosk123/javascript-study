'use strict'

let result = !undefined
console.log(result) // true

result = !null
console.log(result) // true

result = !0
console.log(result) // true

result = !''
console.log(result) // true

result = !NaN
console.log(result) // true

result = !false
console.log(result) //true


//===============================
// 빈 배열을 truthy한 값
result = ![]
console.log(result) // false

result = !![]
console.log(result) // true