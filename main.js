let color = "black";
document.addEventListener("DOMContentLoaded", () =>{
    createBorder(6);

    const num = document.querySelector("#popup");
    num.addEventListener("click" , () => {
        let size = getUserNumber();
        createBorder(size);
    });
});

function createBorder(size){
     const border = document.querySelector(".container");
     border.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
     border.style.gridTemplateRows = `repeat(${size} , 1fr)`; 
     let boxNum = size * size;

     for (let x = 0; x < boxNum; x++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", () => {
            div.style.background = "black";
        });
        border.appendChild(div);
     }
}

function getUserNumber(){
    const msg = document.querySelector(".msg");
    let userNum = prompt("Enter how many boxes u want between 1 and 100", "");
    if (userNum < 1 || userNum >100){
        msg.textContent = "Please enter any number between 1 and 100";
    }
    else{
        msg.textContent = "You can start drawing";
    }
    return userNum;
}

function setColor(color){
    
}