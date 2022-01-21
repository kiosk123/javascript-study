'use strict'

function calculateCircleArea(r) {
    const radius = r || 1 // r 이없을 때 1을 기본값
    return Math.PI * radius * radius
}

/**
 *  ES6에서 함수 파라미터 기본 값 지정 방법
 */
function calculateCircleArea2(r = 1) {
    return Math.PI * r * r
}

let area = calculateCircleArea()
console.log(area) // 3.141592653589793

area = calculateCircleArea2()
console.log(area) // 3.141592653589793


