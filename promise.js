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