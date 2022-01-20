'use strict';

/* 사칙연산 */
let value = 1 + 3 - (3 * 4) / 4
console.log(value)

/* 증감 연산 */
console.log( value++ ) // 1 출력 - 값을 먼저 할당하거나 출력 후 증가 
console.log( ++value ) // 3 출력 - 값을 먼저 증가후 값을 할당하거나 출력

value--  // 위와 원리 동일
--value  // 위와 원리 동일

