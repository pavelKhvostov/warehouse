
import { getCardEl, getTitle, getAddBtn, getForm, getInput } from "./components.js"
import handleFormSubmit from "./handleFormSubmit.js"

export default function createAdd(containerEl) {

    containerEl.innerHTML = ""

    const card = getCardEl()
    card.classList.add("card-add")
    const titleEl = getTitle("Добавить запись")
    const formEl = getForm()
    const inputName = getInput()
    const inputShelf= getInput()
    const inputWeight = getInput()
    const inputTime = getInput()
    const btnAddEl = getAddBtn("Добавить запись")
    btnAddEl.classList.add("btn-add")

    inputName.classList.add("input")
    inputShelf.classList.add("input")
    inputWeight.classList.add("input")
    inputTime.classList.add("input")

    inputName.type = "text"
    inputName.placeholder = "Название"
    inputName.id = "name"
    inputShelf.type = "text"
    inputShelf.placeholder = "Полка"
    inputShelf.id = "shelf"
    inputWeight.type = "text"
    inputWeight.placeholder = "Вес"
    inputWeight.id = "weight"
    inputTime.type = "date"
    inputTime.id = "time"
    btnAddEl.type = "submit"


    formEl.append(inputName,inputShelf,inputWeight,inputTime, btnAddEl)
    card.append(titleEl, formEl)
    containerEl.append(card)


    

    document.querySelector(".form").addEventListener("submit", handleFormSubmit);


}