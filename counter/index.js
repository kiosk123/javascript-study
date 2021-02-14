const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')
const number = document.querySelector('#number')

increase.addEventListener('click', (event) => {
    let num = parseInt(number.textContent)
    num++;
    number.textContent = num
})

decrease.addEventListener('click', (event) => {
    let num = parseInt(number.textContent)
    num--;
    number.textContent = num
})