import renderTable from "./render.js"

export function filterName() {
    const items = JSON.parse(localStorage.getItem("items")) || []

    items.sort((a, b) => a.name.localeCompare(b.name))

    localStorage.setItem("items", JSON.stringify(items))

    console.log();

    renderTable()
}

export function filterShelf() {
    const items = JSON.parse(localStorage.getItem("items")) || []

    items.sort((a, b) => a.shelf.localeCompare(b.shelf))

    localStorage.setItem("items", JSON.stringify(items))

    console.log();

    renderTable()
}

export function filterNum() {
    const items = JSON.parse(localStorage.getItem("items")) || []

    items.sort((a, b) => a.weight - b.weight)

    localStorage.setItem("items", JSON.stringify(items))

    console.log();

    renderTable()
}
