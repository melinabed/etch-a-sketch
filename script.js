//Calls the createContainer function and gives logic to the select button letting users
//determine the size of the squares

let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function() {
    createContainer(16);

    document.querySelector("body").addEventListener('click', function(e) {
        if (e.target.tagName != "BUTTON") {
            click = !click
            let draw = document.querySelector("#draw");
            if (click) {
                draw.innerHTML = "Now you draw!";
            } else {
                draw.innerHTML = "Draw inside the square."
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener('click', function() {
        let size = userSelection();
        createContainer(size);
    })
})

//Lets the columns and rows repeat to give board container dimensions of height and width.
//Also grabs the container from the html.
function createContainer(size) {
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 

    let numDiv = size * size;

    for(let i = 0; i < numDiv; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        container.insertAdjacentElement('beforeend', div);
    }

}

//Prompts the user to select the number of squares and gives conditions if the input is invalid
function userSelection() {
    let input = prompt("How many squares?");
    let message = document.querySelector("#message");
        if (input === "") {
            message.innerHTML = "Please provide a number.";
        } else if (input < 0 || input > 100) {
            message.innerHTML = "Please provide a number between 1 and 100.";
        } else {
            message.innerHTML = "Play!";
            return input;
        }
}

function colorDiv() {
    if(click) {

    if (color == "color") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == "white") {
        this.style.backgroundColor = "white";
    }
     else {
        this.style.backgroundColor = 'black';
    }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetContainer() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}