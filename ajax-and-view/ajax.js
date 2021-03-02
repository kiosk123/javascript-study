const requestGet = () => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
            if (xhr.status === 200 || xhr.status === 201) { // 응답코드가 200 또는 201이면
                console.log("success")
                console.log(xhr.responseText) // 응답값 출력
            } else {
                console.error(xhr.responseText)
            }
        }
    }
    xhr.open('GET', 'https://www.zerocho.com/api/get')
    xhr.send()
}

requestGet()

// POST로 JSON데이터 보낼 경우 처리
// const requestPost = () => {
//     let xhr = new XMLHttpRequest()
//     let data = {
//         name: 'zerocho',
//         birth: 1994
//     }

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
//             if (xhr.status === 200 || xhr.status === 201) { // 응답코드가 200 또는 201이면
//                 console.log("success")
//                 console.log(xhr.responseText) // 응답값 출력
//             } else {
//                 console.error(xhr.responseText)
//             }
//         }
//     }
//     xhr.open('POST', 'https://www.zerocho.com/api/post')
//     xhr.setRequestHeader('Content-Type', 'application-json')
//     xhr.send(JSON.stringify(data))
// }

// requestPost()


// onreadystatechange 대신 onload나 onerror로 성공과 실패를 처리 할 수도 있음
const requestAjax = () => {
    let xhr = new XMLHttpRequest()
    xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(xhr.responseText)
        }
    }
    xhr.onerror = () => {
        console.error(xhr.responseText)
    }
    xhr.open('GET', 'https://www.zerocho.com/api/get')
    xhr.send()
}

requestAjax()

// 폼 데이터 예제
const formDataExample = () => {
    const formData = new FormData()
    formData.append('name', 'zerocho')
    formData.append('item', 'orange')
    formData.append('item', 'melon')
    formData.append('test', ['hi', 'zero'])

    console.log(formData.has('item')) // item 키에 해당하는 값이 있는 지 여부 확인 - true
    console.log(formData.has('money')) //false
    console.log(formData.get('item')) // orange
    console.log(formData.getAll('item'))
    console.log(formData.get('test')) // hi, zero

    formData.delete('test')
    console.log(formData.get('test')) //null

    formData.set('item', 'apple')
    console.log(formData.getAll('item')) // ['apple']
}

formDataExample()

// 폼 데이터 전송
const requestForm = () => {
    let xhr = new XMLHttpRequest()
    let formData = new FormData()
    formData.append('name', 'zerocho')
    formData.append('birth', 1994)

    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
            if (xhr.status === 200 || xhr.status === 201) { // 응답코드가 200 또는 201이면
                console.log("success")
                console.log(xhr.responseText) // 응답값 출력
            } else {
                console.error(xhr.responseText)
            }
        }
    }
    xhr.open('POST', 'https://www.zerocho.com/api/post/formdata')
    xhr.send(formData)
}

requestForm()


// 요청 URL에 한글이 들어가는 경우 - encodeURIComponent(보내는 쪽), decodeURIComponent(받는 쪽)
// const requestEncodeGet = () => {
//     let xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
//             if (xhr.status === 200 || xhr.status === 201) { // 응답코드가 200 또는 201이면
//                 console.log("success")
//                 console.log(xhr.responseText) // 응답값 출력
//             } else {
//                 console.error(xhr.responseText)
//             }
//         }
//     }
//     xhr.open('GET', 'https://www.zerocho.com/api/search/' + encodeURIComponent('노드'))
//     xhr.send()
// }

// requestEncodeGet()

/*
ajax의 요청 결과 값을 뷰에 뿌려줄때 javascript변수가 아닌 html의 'data-' 프로퍼티를 이용하여 값을 저장가능
<li data-id="1" data-user-job="programmer">Zero</li>
<li data-id="2" data-user-job="designer">Nero</li>
<li data-id="3" data-user-job="programmer">Hero</li>
<li data-id="4" data-user-job="ceo">Kero</li>

위에서는 data- 속성을 이용하여 data-id와 data-user-job을 선언함
document.querySelector('li').dataset을 이용하여 값을 가져오면 첫번째 li 태그에 접근하게 되고
출력하면 {id: '1', userJob: 'programmer'}를 출력한다.
data-id에서 id만 추출하여 객체 프로퍼티가 되고
data-user-job은 data-가 사라지고 user-job은 케밥케이스에서 카멜케이스로 변경되어 userJob이 된다.

반대로 dataset에 값을 넣어요 HTML태그에 반영된다.
dataset.monthSalary = 10000을 넣으면 data-month-salary="10000" 속성이 생긴다.
*/

function exmpleDataSet() {
    console.log(document.querySelector('li').dataset) // DOMStringMap {id: "1", userJob: "programmer"}
    const firstDataSet = document.querySelector('li').dataset
    console.log(firstDataSet['id']) //1
    console.log(firstDataSet['userJob']) //programmer

    firstDataSet.monthSalary = 10000
}

exmpleDataSet()