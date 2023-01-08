createGrid(100);

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mousemove', () => {
        square.classList.add('coloured');
    },) 
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
    document.body.prepend(container);
}

