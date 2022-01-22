# 23. spread와 rest 연산자

... 세개를 사용하는 연산자
- spread : ...를 사용하면 객체나 배열을 펼친다.(기존객체를 복사하고 값을 넣어줄때)
- rest : 특정 인자를 지정한 나머지 객체나 배열값을 표현한다

```js
'use strict'

/**
 * 객체에서 spread 연산자 사용
 */
const slime = {
    name: 'slime'
}

const cuteSlime = {
    ...slime,
    attribute: 'cute'
}

const pupleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
}

console.log(slime)             // { name: 'slime' }
console.log(cuteSlime)         // { name: 'slime', attribute: 'cute' }
console.log(pupleCuteSlime)    // { name: 'slime', attribute: 'cute', color: 'purple' }

//==============================================================================================
/**
 * 배열에서 spread 연산자 사용
 */
const animals = ['개', '고양이', '참새']
const anotherAnimals = [...animals, '비둘기']

console.log(anotherAnimals)  // [ '개', '고양이', '참새', '비둘기' ]

const numbers = [1, 2, 3, 4, 5]
const spreadNumbers = [...numbers, 1000, ...numbers]

console.log(spreadNumbers) // [ 1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5 ]

//==============================================================================================
/**
 * 객체에서 rest 연산자 사용
 */

const blueCuteSlime = {
    name: 'slime',
    attribute: 'cute',
    color: 'purple'
}

// color를 뺀나머지 프로퍼티를 세팅
const { color, ...rest } = blueCuteSlime

console.log(`${color} ${rest.attribute} ${rest.name}`) // purple cute slime

//==============================================================================================
/**
 * 배열에서 rest 연산자 사용 - 배열에서 rest는 맨 마지막에 와야 됨 [...rest, last] (x)
 */
const [one, ...numbersRest] = numbers
console.log(one)         // 1
console.log(numbersRest) // [ 2, 3, 4, 5 ]

//==============================================================================================
/**
 * 함수에서 인자에서 spread
 */
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8]
const sum1 = (...numberArr) => {
    return numberArr.reduce((accumulator, current) => accumulator + current, 0)
}
console.log( sum1(...numberArr) ) // spread 연산자 사용 - 출력 값 : 36


//==============================================================================================
/**
 * 함수 인자에서 rest
 */

function sum( [a, ...rest]) {
    let init = a
    const sum = rest.reduce((accumulator, current) => {
        const result = accumulator += current
        return result
    }, init)
    return sum
}

function mul(...rest) {
    return rest.reduce((accumulator, current) => accumulator * current)
}

let result = sum(numbers)
console.log(result) // 15

// rest 연산자를 이용한 가변인자 처리
result = mul(1, 2, 3, 4, 5, 6, 7, 8)
console.log(result) // 40320

```

