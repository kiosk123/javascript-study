# 변수
변수와 상수 선언 및 변수에 타입별 값 할당 방법
### 변수와 상수
- let - 블록 스코프
- var - 함수 스코프 (권장하지 않음)
- const - 상수 표현

```js
'use stict';

let value = 1 // 변수에 값 할당 - block scope
var value2 = 2 // 변수에 값 할당 - functional scope 
const readOnly = "CONST VALUE" // 상수

console.log(value)
console.log(value2)
console.log(readOnly)


/* 문자열 - '' 나 " "로 값을 감싼다*/
let name = 'hello javascript'
let text = "hello"

console.log(name)
console.log(text)

/* 논리 값 참 거짓 표현 */
let good = true 
let loading = false

/* null과 undefined */
let nullValue = null /* 일반적인 개념의 null - 값이 없다*/
let undefinedValue = undefined /* 아직 정의되지(지정하지) 않는 값 */
```