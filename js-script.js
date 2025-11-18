const container = document.getElementById('container');

const div = document.createElement('div');
div.classList.add('gridSquare');

container.appendChild(div);






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