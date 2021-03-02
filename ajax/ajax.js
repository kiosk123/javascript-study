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
const requestPost = () => {
    let xhr = new XMLHttpRequest()
    let data = {
        name: 'zerocho',
        birth: 1994
    }

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
    xhr.open('POST', 'https://www.zerocho.com/api/post')
    xhr.setRequestHeader('Content-Type', 'application-json')
    xhr.send(JSON.stringify(data))
    xhr.send()
}

requestPost()


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