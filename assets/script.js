const gameBoard = document.querySelector('#tabuleiro');
const infoDisplay = document.querySelector('#info');

const startCells =[
    "","","","","","","","",""
]

let go = "circle"
infoDisplay.textContent = "circle goes first"

function createBoard(){
    startCells.forEach ((_cell, index) =>{
       const cellElement = document.createElement ('div')
       cellElement.classList.add('square')
       cellElement.id = index
       cellElement.addEventListener('click', addGo)
       gameBoard.append(cellElement)
    })
}
createBoard()

function addGo(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = " It's now " + go + "'s go."
    e.target.removeEventListener("click", addGo)
}