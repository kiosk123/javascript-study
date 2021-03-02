function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        const value = n + 1
        if (value > 5) {
            const error = new Error()
            error.name = "NumberOverError"
            error.message = 'Number is over 5'
            reject(error)
            return
        }
        console.log(value)
        resolve(value)
    })
}

increaseAndPrint(0)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(console.log)


// 프로미스를 여러개 한번에 실행
const promise1 = Promise.resolve('성공1') //resolve Promise 생성
const promise2 = Promise.resolve('성공2')

Promise.all([promise1, promise2])
 .then((result) => {
     console.log(result) // ['성공1', '성공2']
 })
 .catch((error) => {
     console.error(error)
 })