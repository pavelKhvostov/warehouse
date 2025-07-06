import removeItem from "./removeItem.js";


export default function renderTable() {
    const response =  JSON.parse(localStorage.getItem("items")) || []

    const tBodyEl = document.querySelector(".t-body")

    tBodyEl.innerHTML = ""

    response.forEach(item => {
        const row = document.createElement("tr")
         const btnDelete = document.createElement("button")
         btnDelete.classList.add("btn-delete")
         btnDelete.textContent = "Удалить"


        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.shelf}</td>
        <td>${item.weight}</td>
        <td>${item.time}</td>
        `
        
        row.append(btnDelete)
        tBodyEl.append(row)

        btnDelete.addEventListener("click", () => removeItem(item))
    });



}

