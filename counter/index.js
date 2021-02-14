const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')
const number = document.querySelector('#number')

increase.addEventListener('click', (event) => {
    let num = parseInt(number.innerText)
    num++;
    number.innerText = num
})

decrease.addEventListener('click', (event) => {
    let num = parseInt(number.innerText)
    num--;
    number.innerText = num
})