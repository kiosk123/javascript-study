# 5. 비교연산자, 문자열붙이기

```js
'use strict'

const a = 1
const b = 2
const c = 2

// 비교 연산시 == 보다 ===을 사용할 것 === 은 타입 체킹까지 함
const equals = a === b // === 같을 경우

console.log(equals) // false

const notEquals = a !== b  // !== 같지 않을 경우
console.log(notEquals) // true


a < b // true
a > b // false
a <= b // true
a >= b // false
b >= c // true

const str1 = '안녕'
const str2 = '하세요'

// 문자열 합치기
const str3 =  str1 + str2
console.log(str3) // 안녕하세요
```