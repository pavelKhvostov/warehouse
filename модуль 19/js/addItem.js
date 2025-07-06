import renderTable from "./render.js";

export default function addItem(item) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));

    renderTable()
}
