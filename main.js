// starting my code
let color = "black"
const btnBlack = document.querySelector(".black");
const btnColor = document.querySelector(".colors");
let click = false;

// function that waits for HTML and CSS to load first
document.addEventListener("DOMContentLoaded", () =>{
    createBorder(6);

    const num = document.querySelector("#popup");
    num.addEventListener("click" , () => {
        let size = getUserNumber();
        createBorder(size);
    });    

    // putting pencil down or up
    document.querySelector("body").addEventListener("click" , (e) =>{
        if(e.target.tagName !== "button"){
            click = !click;
            let draw = document.querySelector("#info");
            if(click){
                draw.textContent = "You Can Draw";
            }
            else{
                draw.textContent = "Click On The Broad To start Drawing";
            }
        }
    });

});

// function for pencil to drawing on the broad
function createBorder(size){
     const border = document.querySelector(".container");
     border.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
     border.style.gridTemplateRows = `repeat(${size} , 1fr)`; 
     let boxNum = size * size;

     for (let x = 0; x < boxNum; x++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", getColor);
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

function setColor(choice){
    color = choice;
    return color;
}

function getColor(){
    let style;
    if (click){
        if (color === "colors"){
            style = this.style.background = `hsl(${Math.random() * 360}, 100% , 50%)`;
        }
        else if(color === "erase"){
            style = this.style.background = 'white';
        }
        else{
            style = this.style.background = 'black';
        }
    }
    return style;
}

function clearDrawing(){
    let box = document.querySelectorAll("div");
    box.forEach((div) => div.style.background = "white");
}

