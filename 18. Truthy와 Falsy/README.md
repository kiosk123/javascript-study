# 18. Truthy와 Falsy

자바스크립트에서 falsy한 값으로 인식되는 것들
- undefinded
- null
- 0
- '', "" 비어있는 문자
- NaN(숫자가 아닌 값을 나타냄)
- false

위의 정의된 값의 정반대는 truthy한 값들이다
```js
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
```