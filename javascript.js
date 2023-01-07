function createGrid(size) {
    const container = document.createElement('div');
    container.classList.add('container');

    for(let i = 0; i < size*size; i++) {
        const temporary = document.createElement('div');
        temporary.textContent = 'X';
        container.appendChild(temporary);
    }
    document.body.prepend(container);
}