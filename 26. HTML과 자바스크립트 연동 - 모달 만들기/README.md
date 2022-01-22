# 26. HTML과 자바스크립트 연동 - 모달 만들기

## index.html
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' type='text/css' href='css/style.css'/>
    <title>Document</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>내용내용내용</p>
    <button id="open-modal">모달 열기</button>
    <div class="modal-wrapper modal-display">
        <div class="modal">
            <div class="modal-title">안녕하세요</div>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <div class="close-wrapper">
                <button>닫기</button>
            </div>
        </div>
    </div>
    <script src="js/index.js"></script> <!-- 자바스크립트 경로 설정 -->
</body>
</html>
```

## css/style.css
```css
body {
    font-family: 'sans-serif'
}

.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

     /*display: flex; or none; 자바스크립트 코드에서 으로 설정*/
    display: none;
    align-items: center;
    justify-content: center;
}

.modal {
    background: white;
    padding: 24px 16px;
    border-radius: 4px;
    width: 320px;
}

.modal-title {
    font-size: 24px;
    font-weight: bold;
}

.modal p {
    font-size: 16px;
}
```

## js/index.js
```js
const $closeModalButton = document.querySelector(".modal-wrapper .modal .close-wrapper button")
const $openModalButton = document.querySelector("#open-modal")
const $modal = document.querySelector(".modal-wrapper")

$openModalButton.onclick = () => {
    $modal.style.display = 'flex'
}

$closeModalButton.onclick = () => {
    $modal.style.display = 'none'
}
```