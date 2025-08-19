const bigdiv = document.querySelector(".container");
const btn = document.querySelector(".reset");
const SCREEN_WIDTH = 500;
const squarePerLine = 20;
const widthSquare = SCREEN_WIDTH/squarePerLine;
const totalSquares = (squarePerLine ** 2);

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

function createGrid(){
    for(let i = 0; i < totalSquares; i++){ 
        const div = document.createElement("div");
        div.style.width = `${widthSquare}px`;
        div.style.height = `${widthSquare}px`;
        bigdiv.appendChild(div);
    }
}
createGrid();

btn.addEventListener("click", () => {
    const squares = Array.from(bigdiv.children);
    squares.forEach((element) => {
        element.style.backgroundColor = "#FFFFFF";
    });
});
bigdiv.addEventListener("mouseover", (e) => applyStyle(e.target));