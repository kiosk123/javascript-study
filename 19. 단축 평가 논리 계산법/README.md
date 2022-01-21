# 19. 단축 평가 논리 계산법

```js
'use strict'

const dog = {
    name: 'puppy'
}

function getName(animal) {
    if (animal) {
        return animal.name
    }
    return undefined
}

/** 위 코드를  단축 */
function getName(animal) {
    return animal && animal.name
}


// falsy && truthy -> falsy값 반환, truthy && truthy -> && 뒤의 truthy 값 반환

true && 'hello'  // hello
false && 'hello' // false
'hello' && 'bye' // bye 
null && 'hello'  // null
undefined && 'hello' // undefinded
'' && 'hello' // ''
0 && 'hello'  // 0
1 && 'hello'  // hello
1 && 1        // 1

// falsy || truthy -> truthy 값 반환, truthy || truthy -> || 앞의 truthy 값 반환

true || 'hello'  // true
false || 'hello' // hello
'hello' || 'bye' // hello 
null || 'hello'  // hello
undefined || 'hello' // hello
'' || 'hello' // hello
0 || 'hello'  // hello
1 || 'hello'  // 1
1 || 1        // 1
```