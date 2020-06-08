

const buttonsearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")


//Abre a página de  busca
buttonsearch.addEventListener("click", () => {

    modal.classList.remove("hide")

})

//Fecha a página de busca
close.addEventListener("click", () => {

    modal.classList.add("hide")

})