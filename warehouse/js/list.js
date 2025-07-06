
import { getCardEl, getTitle, getAddBtn, getWrapTitleBtn, getTable} from "./components.js"
import createAdd from "./createAdd.js"
import filter from "./filter.js"
import renderTable from "./render.js"


export default function creetList (containerEl) {
    containerEl.innerHTML = ""

    const card = getCardEl()
    const title = getTitle("Склад")
    const btnAdd = getAddBtn("Добавить запись")
    const wrap = getWrapTitleBtn()
    const table = getTable()

    wrap.append(title, btnAdd)
    card.append(wrap, table)

    containerEl.append(card)

    btnAdd.addEventListener("click", () => {
        createAdd(containerEl)
    })

    renderTable()
    filter()
}
