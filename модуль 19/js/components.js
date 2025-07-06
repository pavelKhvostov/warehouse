
export function getCardEl() {
    const cardEl = document.createElement("div")
    cardEl.classList.add("card")
    return cardEl
}

export function getTitle(text) {
    const titleEl = document.createElement("h1")
    titleEl.textContent = text
    titleEl.classList.add("main-title")
    return titleEl
}

export function getAddBtn(text) {
    const btnEl = document.createElement("button")
    btnEl.textContent = text
    btnEl.classList.add("btn-add")
    return btnEl
}

export function getWrapTitleBtn() {
    const wrapEl = document.createElement("div")
    wrapEl.classList.add("wrap-header")
    return wrapEl
}

export function getTable() {
    const tableEl = document.createElement("table")
    const tHeadEl = document.createElement("thead")
    const thEl1 = document.createElement("th")
    const btnThEl1 = document.createElement("button")
    const thEl2 = document.createElement("th")
    const btnThEl2 = document.createElement("button")
    const thEl3 = document.createElement("th")
    const btnThEl3 = document.createElement("button")
    const thEl4 = document.createElement("th")
    const btnThEl4 = document.createElement("button")
    const thEl5 = document.createElement("th")

    const tBodyEL = document.createElement("tbody")
    tBodyEL.classList.add("t-body")

    tHeadEl.classList.add("t-head")

    thEl1.classList.add("th")

    btnThEl1.textContent = "Название"
    btnThEl2.textContent = "Полка"
    btnThEl3.textContent = "Вес"
    btnThEl4.textContent = "Время хранения"

    btnThEl1.classList.add("btn-head")
    btnThEl2.classList.add("btn-head")
    btnThEl3.classList.add("btn-head")
    btnThEl4.classList.add("btn-head")

    thEl1.append(btnThEl1)
    thEl2.append(btnThEl2)
    thEl3.append(btnThEl3)
    thEl4.append(btnThEl4)

    tHeadEl.append(thEl1)
    tHeadEl.append(thEl2)
    tHeadEl.append(thEl3)
    tHeadEl.append(thEl4)
    tHeadEl.append(thEl5)


    tableEl.append(tHeadEl, tBodyEL)

    return tableEl
}

export function getForm() {
    const formEl = document.createElement("form")
    formEl.classList.add("form")
    return formEl
}

export function getInput() {
    const inputEl = document.createElement("input")
    return inputEl
}


