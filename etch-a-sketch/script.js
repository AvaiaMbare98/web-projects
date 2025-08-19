const bigdiv = document.querySelector(".container");
const SCREEN_WIDTH = 500;
const squarePerLine = 80;
let widthSquare = SCREEN_WIDTH/squarePerLine;
let totalSquares = (squarePerLine ** 2);

console.log(totalSquares);
console.log(widthSquare);


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

for(let i = 0; i < totalSquares; i++){ 
    const div = document.createElement("div");
    div.style.width = `${widthSquare}px`;
    div.style.height = `${widthSquare}px`;
    // div.classList.add("square");
    bigdiv.appendChild(div);
}


bigdiv.addEventListener("mouseover", (e) => applyStyle(e.target));