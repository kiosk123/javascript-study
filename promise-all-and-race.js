const sleep = (ms) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

const getDog = async () => {
    await sleep(1000)
    return '멍멍이'
}

const getRabbit = async () => {
    await sleep(1000)
    return '토끼'
}

const getTurtle = async () => {
    await sleep(3000)
    return '거북이'
}

const process = async () => {
    // 비동기 함수 동시 처리
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()])
    console.log(dog)
    console.log(rabbit)
    console.log(turtle)
}

process()