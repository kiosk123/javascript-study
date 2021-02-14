const open = document.querySelector('#open')
const close = document.querySelector('#close')
const modal = document.querySelector('.modal-wrapper')

open.addEventListener('click', (event) => {
    modal.style.display = 'flex'
})

close.addEventListener('click', (event) => {
    modal.style.display = 'none'
})