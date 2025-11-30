//  js-script.js  //

// const container = document.querySelector("#container");
// const div = document.createElement("div");
// div.classList.add("gridSquare");

// container.appendChild(div);

const squaresPerSide = 16;
const gridTotal = squaresPerSide * squaresPerSide;
const container = document.querySelector("#container");
const totalSize = 960;
const squareSize = totalSize / squaresPerSide;

for (let i = 0; i < gridTotal; i++){
    const div = document.createElement("div");
    div.classList.add("gridSquare");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    container.appendChild(div)
}





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