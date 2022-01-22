const $number = document.querySelector('#number')

document.querySelector("#increase").addEventListener("click", (event) => {
    let number = parseInt($number.textContent)
    $number.textContent = ++number
})

document.querySelector("#decrease").addEventListener("click", (event) => {
    let number = parseInt($number.textContent)
    if (number <= 0) {
        return
    }
    $number.textContent = --number
})

