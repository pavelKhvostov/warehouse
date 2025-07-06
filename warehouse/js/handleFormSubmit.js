import addItem from "./addItem.js";
import creetList from "./list.js";

const containerEl = document.querySelector('.app');

export default function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const shelf = document.getElementById("shelf").value;
    const weight = document.getElementById("weight").value;
    const time = document.getElementById("time").value;

    const item = {
        name,
        shelf,
        weight,
        time
    };

    if (!name || !shelf || !weight) {
        alert("заполните все поля!")
        return
    }

    creetList(containerEl)
    addItem(item)
}