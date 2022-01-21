'use strict'

const object = {a: 1}

/**
 * 객체의 비구조화 할ㄹ당 
 */
// 비구조화 할당
function print({a, b = 2}) {
    console.log(a)
    console.log(b || 2)
}

// 비구조화 할당시에 기본값 할당도 가능
const { a, b = 2} = object

const animal = {
    name: '멍멍이',
    type: '개'
}

// 비구조화 할당시 이름 바꾸기 여기서는 name을 nickname으로 변환
const { name: nickname } = animal
console.log(nickname) // 멍멍이

const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
}

const {name, languages: [first, second]} = deepObject.state.information
const {value} = deepObject

let extracted = {
    name,
    first,
    second,
    value
}

/**
 * { name: 'velopert', first: 'korean', second: 'english', value: 5 }
 */
console.log(extracted)

/**
 * 배열의 비구조화 할당
 */
const array = [ 1, 2 ]
const [ one, two = 3] = array

console.log(one)  // 1
console.log(two)  // 2 


