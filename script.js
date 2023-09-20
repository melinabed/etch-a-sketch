document.addEventListener("DOMContentLoaded", function() {
    createContainer(16);
    userSelection();
    console.log("hi")
})

function createContainer(size) {
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 

    let numDiv = size * size;

    for(let i = 0; i < numDiv; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = "yellow";
        container.insertAdjacentElement('beforeend', div);
    }

}

function userSelection() {
    let input = prompt("How many squares?");
    let message = document.querySelector("#message");
        if (input == "") {
            message.innerHTML = "Please provide a number";
        } else if (input < 0 || input > 100) {
            message.innerHTML = "Please provide a number between 1 and 100.";
        } else {
            message.innerHTML = "Play!";
        }
}