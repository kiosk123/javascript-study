# 8. 객체

```js
'use strict'

/**
 * 객체 생성
 */
const dog = {
    name: 'Puppy',
    age: 2,
    cute: true,
    sample : {
        a: 1,
        b: 2
    },
    'key with space': 'are you ok?'
}

/** 
{
    name: 'Puppy',
    age: 2,
    cute: true,
    sample: { a: 1, b: 2 },
    'key with space': 'are you ok?'
}
*/
console.dir(dog)


const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
}

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
}

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다`
    console.log(text)
}

print(ironMan)         // 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다
print(captainAmerica)  // 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다
```