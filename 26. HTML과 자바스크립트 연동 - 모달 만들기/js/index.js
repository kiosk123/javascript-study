const $closeModalButton = document.querySelector(".modal-wrapper .modal .close-wrapper button")
const $openModalButton = document.querySelector("#open-modal")
const $modal = document.querySelector(".modal-wrapper")

$openModalButton.onclick = () => {
    $modal.style.display = 'flex'
}

$closeModalButton.onclick = () => {
    $modal.style.display = 'none'
}