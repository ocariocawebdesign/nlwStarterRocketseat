
console.log('Carregou o script')


function populateUfs() {

    const ufSelect = document.querySelector('select[name=uf]')

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json()) // arrow function
        .then(states => {

            for (const state of states)

                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        })
}

populateUfs()


function getCities(event) {


    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    console.log(event.target.value)

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>";

    citySelect.disabled = true



    fetch(url)

        .then(res => res.json()) // arrow function
        .then(cities => {


            for (const city of cities) {

                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

            }

            citySelect.disabled = false

        })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


/*itens de coleta*/
//pegar todos o "li"

const itensToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itensToCollect) {

    item.addEventListener("click", handleSelectedItem)
}

const collectedItens = document.querySelector("input[name=itens]")

let selectedItens = []

function handleSelectedItem(event) {

    const itemLi = event.target

    //adicionar ou remover uma classe css com javascript
    //Adicionar:  itemLi.classList.add("selected")
    //remover:  itemLi.classList.remove("selected")
    //toggle adiciona ou remove

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //Lógica
    //Verificar se há itens selecionados
    //Pegar os itens selecioandos

    const alreadySelected = selectedItens.findIndex(item => {

        const itemFound = item == itemId // Esse retorno será true ou false
        return itemFound

    })
     
        //Se já estier selecionado, tirar a seleção
        if(alreadySelected >= 0 ) {
            ///tirar da seleção

            const filterdItens = selectedItens.filter(item => {
                const itemIsDifferent = item != itemId // false
                return itemIsDifferent

                 
            })

            selectedItens = filterdItens

        } else {
            //Senão estiver selecionado
            // Adicionar seleção
            selectedItens.push(itemId)

        }

        collectedItens.value = selectedItens
        console.log(selectedItens)
    
    // Se já estiver selecionado, adicionar à seleção
    //Atualizar o campo escondido com os itens selecionados
    


}
