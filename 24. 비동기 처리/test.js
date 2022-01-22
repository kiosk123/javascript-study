'use strict'

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const getDog = async () => {
    const start = Date.now()
    await sleep(1000)
    const end = Date.now()
    const waitingTime = end - start

    if (waitingTime > 500) {
        throw new Error("Dog is crazy")
    }
    return '멍멍이'
}

const getRabbit = async () => {
    await sleep(500)
    return '토끼'
}

const getTurtle = async () => {

    await sleep(3000)
    return '거북이'
}

async function process() {
    try {
        const result = await Promise.race([getDog(), getRabbit(), getTurtle()])
        console.log(result)
    } catch (e) {
        console.log(e) 
    }
}

process() // '토끼' 만 출력됨

