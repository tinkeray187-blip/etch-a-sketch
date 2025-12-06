//  js-script.js  //


const container = document.querySelector("#container");
const totalSize = 960;
let currentMode = 'black'; 
let squareDarkness = new Map(); 
let shadingEnabled = true;

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
function updateShadingButton() {
  const shadingBtn = document.querySelector("#toggleShading");
  shadingBtn.textContent = `Shading: ${shadingEnabled ? 'ON' : 'OFF'}`;
  
  if (shadingEnabled) {
      shadingBtn.classList.remove('off');
      shadingBtn.style.backgroundColor = '#7ba8b2ff';
  } else {
      shadingBtn.classList.add('off');
      shadingBtn.style.backgroundColor = '#f5b3b3ff';
  }
}
let isDrawing = false;

container.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("gridSquare")) {
        isDrawing = true;
        applyColorEffect(e.target);
    }
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

container.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("gridSquare")) {
        applyColorEffect(e.target);
    }
});
function applyColorEffect(square) {
  if (currentMode === 'rainbow') {
      if (shadingEnabled) {
          applyRainbowColor(square);
      } else {
          square.style.backgroundColor = getRandomColor();
          const squareId = square.id || Math.random().toString(36).substr(2, 9);
          if (!square.id) square.id = squareId;
          squareDarkness.delete(squareId);
      }
  } else {
      if (shadingEnabled) {
          applyBlackDarkening(square);
      } else {
          square.style.backgroundColor = 'black';
          const squareId = square.id || Math.random().toString(36).substr(2, 9);
          if (!square.id) square.id = squareId;
          squareDarkness.delete(squareId);
      }
  }
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function applyRainbowColor(square) {
    const squareId = square.id || Math.random().toString(36).substr(2, 9);
    if (!square.id) square.id = squareId;
    
    let darknessLevel = squareDarkness.get(squareId) || 0;
    
    if (darknessLevel >= 10) {
        square.style.backgroundColor = 'black';
        return;
    }
    if (darknessLevel === 0) {
        square.style.backgroundColor = getRandomColor();
    }
    darknessLevel++;
    squareDarkness.set(squareId, darknessLevel);
    darkenSquare(square, darknessLevel);
}
function applyBlackDarkening(square) {
    const squareId = square.id || Math.random().toString(36).substr(2, 9);
    if (!square.id) square.id = squareId;
    let darknessLevel = squareDarkness.get(squareId) || 0;
    if (darknessLevel >= 10) {
        square.style.backgroundColor = 'black';
        return;
    }
    darknessLevel++;
    squareDarkness.set(squareId, darknessLevel);
    
    const brightness = 100 - (darknessLevel * 10);
    square.style.backgroundColor = `rgb(${brightness}%, ${brightness}%, ${brightness}%)`;
}
function darkenSquare(square, darknessLevel) {
    const brightness = 100 - (darknessLevel * 10);
    const currentColor = square.style.backgroundColor;
    if (currentColor && currentColor !== 'black') {
        const rgbValues = currentColor.match(/\d+/g);
        if (rgbValues && rgbValues.length >= 3) {
            const r = Math.floor(parseInt(rgbValues[0]) * (brightness / 100));
            const g = Math.floor(parseInt(rgbValues[1]) * (brightness / 100));
            const b = Math.floor(parseInt(rgbValues[2]) * (brightness / 100));
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }
}

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
  squareDarkness.clear();
  updateShadingButton();
});

const rainbowBtn = document.querySelector("#rainbowMode");
const blackBtn = document.querySelector("#blackMode");

rainbowBtn.addEventListener("click", () => {
    currentMode = 'rainbow';
    updateButtonStyles();
});

blackBtn.addEventListener("click", () => {
    currentMode = 'black';
    updateButtonStyles();
});

const shadingBtn = document.querySelector("#toggleShading");
shadingBtn.addEventListener("click", () => {
    shadingEnabled = !shadingEnabled;
    updateShadingButton();
});

updateShadingButton();

function updateButtonStyles() {
  if (currentMode === 'rainbow') {
      rainbowBtn.style.backgroundColor = '#7ba8b2ff';
      blackBtn.style.backgroundColor = 'antiquewhite';
  } else {
      blackBtn.style.backgroundColor = '#7ba8b2ff';
      rainbowBtn.style.backgroundColor = 'antiquewhite';
  }
}

makeGrid(16);
