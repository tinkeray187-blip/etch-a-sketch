//  js-script.js  //


const container = document.querySelector("#container");
const totalSize = 960;

function makeGrid(size) {
    const gridTotal = size * size;
    const squareSize = totalSize / size;

    for (let i = 0; i < gridTotal; i++) {
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        container.appendChild(div);
    }
}

function clearGrid() {
    container.innerHTML = "";
}

let isDrawing = false;

container.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("gridSquare")) {
        isDrawing = true;
        e.target.style.backgroundColor = "black";
    }
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

container.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("gridSquare")) {
        e.target.style.backgroundColor = "black";
    }
});


// container.addEventListener("mouseover", (e) => {
//     if (e.target.classList.contains("gridSquare")) {
//         e.target.style.backgroundColor = "black";
//     }
// });

const btn = document.querySelector("#reset");
const input = document.querySelector("#gridSizeSelect");

btn.addEventListener("click", () => {
    let size = Number(input.value);  
    if (!size) {
        size = 16;
    }
    if (size < 10 || size > 100) {
        alert("Please enter a number between 10 and 100.");
        return;
    }

    clearGrid();
    makeGrid(size);
});

makeGrid(16);



// Now, when the button is clicked:

// prompt() for size

// validate size

// clear old grid

// call makeGrid(size)

// grid appears

// hover still works

// Refresh, test, repeat.

// Selects #container

// Creates a new <div>

// Gives it a class like "grid-square"

// Appends it to the container


// How do you think you could set the width from JS instead of hardcoding it in CSS?

// (Think: .style.width = ...)

// 4. Build the Actual Loop

// <Choose how many squares per side (start with 16).

// <Compute total squares.

// <Loop that many times

// <For each loop:

// <create div

// <add "grid-square" class

// <set its width and height dynamically (using the 960px logic)

// <append to container