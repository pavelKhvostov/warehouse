import { filterName, filterNum, filterShelf } from "./filterNum.js"


export default function filter(){
    const btnHead = document.querySelectorAll(".btn-head")
    
    btnHead.forEach(e => {
        e.addEventListener("click", ()=> {
            if (e.textContent == "Название") {
                filterName()
                return
            }
            if (e.textContent == "Полка") {
                filterShelf()
                return
            }
            if (e.textContent == "Вес") {
                filterNum()
                return
            }
            if (e.textContent == "Время хранения") {
                filterNum()
                return
            }
        })
    })
}
