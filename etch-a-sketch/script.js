const bigdiv = document.querySelector(".container");
const btn = document.querySelector(".reset");
const squareSelector = document.querySelector(".square-selector");

let squarePerLine = 20;
const SCREEN_WIDTH = 500;

//coloring the squares
function applyStyle(target){
    if(target === bigdiv || target.classList.contains("horizontal")){
        return;
    }
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    target.style.backgroundColor = 
        "rgb(" + r + ", " + g + ", " + b + ")";
}

function createGrid(numSquarePerLine){
    const widthSquare = SCREEN_WIDTH/numSquarePerLine;
    const totalSquares = (squarePerLine ** 2);
    for(let i = 0; i < totalSquares; i++){ 
        const div = document.createElement("div");
        div.style.width = `${widthSquare}px`;
        div.style.height = `${widthSquare}px`;
        bigdiv.appendChild(div);
    }
}
createGrid(squarePerLine);

//event listeners
btn.addEventListener("click", () => {
    const squares = Array.from(bigdiv.children);
    squares.forEach((element) => {
        element.style.backgroundColor = "#FFFFFF";
    });
});

bigdiv.addEventListener("mouseover", (e) => applyStyle(e.target));

squareSelector.addEventListener("click", () => {
    squarePerLine = prompt(`Choose a number between 1 and 99: 
                            to resize the squares in the grid. 
                            The new grid will be: yourValue x yourValue`);
    while(bigdiv.firstChild){
        bigdiv.removeChild(bigdiv.lastChild);
    }
    createGrid(squarePerLine);
});