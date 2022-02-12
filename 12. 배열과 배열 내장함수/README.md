# 12. 배열과 배열 내장함수

```js
'use strict'

/* 배열 선언 */

const array = [1, 2, 3, 4, 5]
console.log( array )    // [ 1, 2, 3, 4, 5 ]

const array1 = [1, 'blabla', {}, 4]
console.log( array1[2]) // {}

const objects = [
    {name: 'doggy'},
    {name: 'kitty'}
]

console.log(objects[0]) // { name: 'doggy' }

//=====================================================================================
/**
 * push - 배열에 새로운 항목을 배열의 맨 마지막에 추가
 */
objects.push({name: 'doggy2'})

console.log(objects)   // [ { name: 'doggy' }, { name: 'kitty' }, { name: 'doggy2' } ]

console.log(objects.length) // 배열의 길이 확인

//=====================================================================================
/**
 * forEach 함수
 */
const superheroes = [
    'ironMan',
    'Tor',
    'Doctor Strange',
    'Captain America'
]

superheroes.forEach((heroName, index) => {
    console.log(`index : ${index}, heroName: ${heroName}`)
})

//=====================================================================================
/**
 * map - 기존의 배열 데이터를 이용하여 새로운 데이터를 가공하여 새로운 배열을 만들어 낸다 
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const squares = numbers.map((number, index) => {
    return number * number
})

console.log(squares) // [ 1,  4,  9, 16, 25, 36, 49, 64 ]


const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
]

const texts = items.map((item, index) => {
    return item.text
})

console.log(texts)  // [ 'hello', 'bye' ]

//=====================================================================================
/**
 *  indexOf 데이터가 어느 위치에 있는지 알려주는 함수
 */
const index = superheroes.indexOf('Tor')
console.log(index) // 1

//=====================================================================================
/**
 * includes 데이터가 배열에 포함되어 있는지 확인
 */
const isInclude =  superheroes.includes('Tor')
console.log(isInclude)  // true

//=====================================================================================
/**
 * findIndex - 특정 조건에 맞는 데이터가 위치한 배열의 인덱스를 찾는다
 */
const todos = [
    {
        id: 1,
        text: 'Introduction to javascript',
        done: true
    },
    {
        id: 2,
        text: 'Learn function',
        done: true
    },
    {
        id: 3,
        text: 'Learn Object and Array',
        done: true
    },
    {
        id: 4,
        text: 'Inner function in Array',
        done: false
    },
]

const indexInTodos = todos.indexOf(3); // 객체로 이루어진 배열을 찾는 경우에는 indexOf 사용하기 부적함
console.log(indexInTodos)  // -1

const foundIndex = todos.findIndex((obj, index) => {
    return obj.id === 3
})
console.log(foundIndex) // 2

//=====================================================================================
/**
 * find - 특정 조건에 맞는 배열의 데이터를 찾아낸다
 */
const searchedObj = todos.find(obj => obj.id === 3)
console.log(searchedObj) // { id: 3, text: 'Learn Object and Array', done: 'true' }

//=====================================================================================
/**
 * filter - 특정 조건을 만족하는 원소를 찾아서 조건에 맞는 원소들로 배열을 만든다
 */
const tasksNotDone = todos.filter(obj => obj.done === false)
console.log(tasksNotDone)  // [ { id: 4, text: 'Inner function in Array', done: false } ]

//=====================================================================================
/**
 * splice - 배열의 특정 부분을 잘라낸다. 특정부분을 잘라내면 원본 배열은 특정 부분을 잘라낸 나머지 데이터만 존재
 * ※ 주의 - 원본 배열도 결국 조작되기 때문에 원본 배열 데이터의 무결성을 보장할 수 없다. 
 */
const numbers1 = [ 10, 20, 30, 40 ]
const searchedIndex1 = numbers1.indexOf(30)
const spliced = numbers1.splice(searchedIndex1, 2); //특정 인덱스부터 2개를 잘라내겠다

console.log(spliced)  // [ 30, 40 ]
console.log(numbers1) // [ 10, 20 ] - 원본 배열은 30, 40을 제외한 

//=====================================================================================
/**
 * slice - 기존 배열을 건드리지 않고 배열의 특정 부분만 잘라 낸다
 */
const sliced = numbers1.slice(0, 2) // 0번 인덱스 부터 1번 인덱스의 데이터까지 추출
console.log(sliced) // [ 10, 20 ]

//=====================================================================================
/**
 * shift - 배열의 첫번째 원소 부터 추출해준다 
 * ※ 주의 - 원본 배열도 결국 조작되기 때문에 원본 배열 데이터의 무결성을 보장할 수 없다. 
 */
const numbers3 = [ 10, 20, 30, 40 ]
const value = numbers3.shift()
console.log(value)    // 10
console.log(numbers3) // [ 20, 30, 40 ]

//=====================================================================================
/**
 * pop - 배열의 마지막 원소 부터 추출해준다.
 * ※ 주의 - 원본 배열도 결국 조작되기 때문에 원본 배열 데이터의 무결성을 보장할 수 없다. 
 */
const numbers4 = [ 10, 20, 30, 40 ]
const popValue = numbers4.pop()
console.log(popValue)  // 40
console.log(numbers4)  // [ 10, 20, 30 ]

//=====================================================================================
/**
 * unshift - 원본 배열의 맨앞부터 값을 채운다
 */
 const numbers5 = [ 10, 20, 30, 40 ]
 numbers5.unshift(5)
 console.log(numbers5)  // [ 5, 10, 20, 30, 40 ]
 
//=====================================================================================
/**
 * concat - 배열을 합쳐서 새로운 배열을 만든다
 */
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const concated = arr1.concat(arr2)
console.log(concated) // [ 1, 2, 3, 4, 5, 6 ]


//=====================================================================================
/**
 * join - 배열안의 값들을 문자열 형태로 합쳐줄때 사용한다.
 */
const arr = [1, 2, 3, 4, 5]
let joinResult = arr.join()
console.log(joinResult) // 1,2,3,4,5

joinResult = arr.join(' ')
console.log(joinResult) // 1 2 3 4 5

joinResult = arr.join(', ')
console.log(joinResult) // 1, 2, 3, 4, 5


//=====================================================================================
/**
 * reduce - 배열 안의 모든 값들을 사용하여 어떤 값을 연산해야 될 때 사용
 */

const numbers6 = [1, 2, 3, 4, 5]
let reduceResult = numbers6.reduce((accumulator, curValue) => {
    return accumulator + curValue
}, 0) 
console.log(reduceResult) // 15

reduceResult = numbers6.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length
    }
    return accumulator + current
}, 0)
console.log(reduceResult) // 3

const alphabets = ['a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'e']
reduceResult = alphabets.reduce((accumulator, current) => {
    if (!accumulator[current]) {
        accumulator[current] = 1
    } else {
        accumulator[current]++
    }
    return accumulator
}, {})

console.log(reduceResult)  // { a: 3, b: 2, c: 2, d: 1, e: 1 }
```
