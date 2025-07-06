import renderTable from "./render.js"


export default function removeItem(item) {

    let respons = JSON.parse(localStorage.getItem("items")) || []


    console.log(respons);


    respons = respons.filter(i => i.name != item.name)

    localStorage.setItem("items", JSON.stringify(respons))

    renderTable()
}
