const bigdiv = document.querySelector(".container");
const SCREEN_WIDTH = 960;

function applyStyle(target){
    if(target === bigdiv){
        return;
    }
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    target.style.backgroundColor = 
        "rgb(" + r + ", " + g + ", " + b + ")";
}

for(let i = 0; i < 256; i++){ //256 perché è 16x16
    const div = document.createElement("div");
    // div.classList.add("square");
    bigdiv.appendChild(div);
}

bigdiv.addEventListener("mouseover", (e) => applyStyle(e.target));