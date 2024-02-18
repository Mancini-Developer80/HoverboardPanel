const container = document.getElementById('container');
const colors = ['#bf1a2f', '#f00699', '#454e9e', '#018e42', '#f7d002'];
const SQUARE = 500;

for (let i = 0; i < SQUARE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColour(square));
    square.addEventListener('mouseout', () => removeColour(square));

    container.appendChild(square);
}

function setColour(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColour(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}