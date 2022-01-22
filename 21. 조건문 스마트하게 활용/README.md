# 21. 조건문 스마트하게 활용

```ja
function isAnimal(text) {
    return (
        text === '고양이' || text === '게' || text === '거북이' || text === '너구리'
    );
}

/**
 * 위 코드를 리팩토링
 */

function isAnimal2(text) {
    const animals = ['고양이', '개', '거북이', '너구리']
    return animals.includes(text)
}

function getSound(animal) {
    const sounds = {
       '개': '멍멍',
       '고양이': '야옹',
       '비둘기': '구구',
       '참새': '짹짹'
    }

    return sounds[animal] || "...?"
}

getSound('개') //멍멍


function makeSound(animal) {
    const tasks = {
        "개": () => {console.log("멍멍")},
        "고양이": () => {console.log("야옹")},
        "비둘기": () => {console.log("구구")},
        '참새': () => {console.log("짹짹")}
    }
    return tasks[animal] || function() { console.log("...?")}
}

makeSound('개')() // a멍멍
makeSound('똥깨')() // ...?
```