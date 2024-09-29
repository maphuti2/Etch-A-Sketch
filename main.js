
document.addEventListener("DOMContentLoaded", () =>{
    createBorder(16);
});

function createBorder(size){
     let border = document.querySelector(".container");
     border.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
     border.style.gridTemplateRows = `repeat(${size} , 1fr)`; 
     let boxNum = size * size;

     for (let x = 0; x < boxNum; x++){
        let div = document.createElement("div");
        div.style.border = '1px solid blue';
        border.appendChild(div);
     }
}