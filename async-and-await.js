
/**
 * 비동기 함수는 async 붙인다.
 * await 키워드는 async 함수가 붙은 함수 내부에서 사용되며, 대상은 반환타입이 Promise이거나 async가 붙은 함수가 대상이다 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {
    console.log('안녕하세요')
    await sleep(1000)
    console.log('반갑습니다.')
    return true
}

// async 반환 타입은 promise기 때문에 then() 체이닝 가능
process().then(console.log) // true 출력

async function makeError() {
    await sleep(1000)
    throw new Error("make error")
}

// 비동기 함수 에러 catch 처리
async function errorProcess() {
    try {
        await makeError()
    } catch (e) {
        console.log("ERROR CAUGHT")
        console.log(e)
    }
}

errorProcess()

// 비동기 함수에서 에러 throw
async function throwError() {
    await makeError()
}

// 비동기 함수에서 에러 throw시 catch 체이닝 가능
throwError().catch(console.log)