# 9. 객체 - 비구조화 할당

```js
'use strict'

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
    const { name, actor, alias } = hero //비구조화 할당
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다`
    console.log(text)
}

/* 파라미터를 비구조화 할당 방식으로 선언 */
function print2({ name, actor, alias }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다`
    console.log(text)
}

print(ironMan)         // 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다
print(captainAmerica)  // 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다

print2(ironMan)         // 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다
print2(captainAmerica)  // 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다

/* 객체 프로퍼티 하나만 비구조화 할당으로 처리 */
const { alias } = ironMan
console.log(alias)      // 아이언맨

```