# 25. HTML과 자바스크립트 연동 - 카운터 만들기

## index.html
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>카운터</title>
</head>
<body>
    <h2 id="number">0</h2>
    <div>
        <button id="increase">+1</button>
        <button id="decrease">-1</button>
    </div>
    <script src="src/index.js"></script> <!-- 자바스크립트 경로 설정 -->
</body>
</html>
```

## src/index.js
```js
const $number = document.querySelector('#number')

document.querySelector("#increase").addEventListener("click", (event) => {
    let number = parseInt($number.textContent)
    $number.textContent = ++number
})

document.querySelector("#decrease").addEventListener("click", (event) => {
    let number = parseInt($number.textContent)
    if (number <= 0) {
        return
    }
    $number.textContent = --number
})
```