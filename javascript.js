const createdButton = document.createElement('button');
createdButton.textContent = 'Change size';
document.body.prepend(createGrid(16));
addSquareEvents();
document.body.prepend(createdButton);

const button = document.querySelector('button');

function addSquareEvents() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mousemove', () => {
            square.classList.add('coloured');
        },) 
    });
};

button.addEventListener('click', () => {
    const newSize = prompt('Size from 16 to 100');
    const oldContainer = document.querySelector('.container');
    newContainer = createGrid(newSize);
    document.body.replaceChild(newContainer, oldContainer);
    addSquareEvents();
});

function createGrid(size) {
    const container = document.createElement('div');
    container.classList.add('container');
    
    
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    console.log(container.style);

    for(let i = 0; i < size*size; i++) {
        const temporary = document.createElement('div');
        temporary.classList.add('square');
        container.appendChild(temporary);
    }
    return container;
}