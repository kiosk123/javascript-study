const a = 1
const b = 2

/** 
 * 함수 선언 방법 
 */

// 함수 선언 - 1
function add (op1, op2) {
    return op1 + op2
}

let result = add(1, 2)
console.log(result) // 3

// 함수 선언 - 2
const minus = function (op1, op2) {
    return op1 - op2 
}

result = minus(1, 2)
console.log(result) // -1

// 함수 선언 - 3 (화살표 함수)
const div = (op1, op2) => {
    return op1 / op2
}

result = div(a, b)
console.log(result) // 0.5

/**
 * Template Literal
 */

function hello(name) {
    return `Hello ${name}!` //name 변수의 값을 매핑
}

const helloStr = hello('John') 
console.log(helloStr) // Hello John!
