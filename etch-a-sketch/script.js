const bigdiv = document.querySelector(".container");

function applyStyle(target){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    target.style.backgroundColor = 
        "rgb(" + r + ", " + g + ", " + b + ")";
}

for(let i = 0; i < 256; i++){ //256 perché è 16x16
    const div = document.createElement("div");
    div.classList.add("square");
    bigdiv.appendChild(div);
}

for(let i = 0; i < 256; i++){
    
    bigdiv.addEventListener("mouseover", (e) => applyStyle(e.target));
}