createGrid(100);

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mousemove', () => {
        square.classList.add('coloured');
    }, {once: true}) 
});

function createGrid(size) {
    const container = document.createElement('div');
    container.classList.add('container');

    for(let i = 0; i < size*size; i++) {
        const temporary = document.createElement('div');
        temporary.classList.add('square');
        container.appendChild(temporary);
    }
    document.body.prepend(container);
    
    const stylesheet = document.styleSheets[0];
    for(let i = 0; i < stylesheet.cssRules.length; i++) {
        if(stylesheet.cssRules[i].selectorText === 'div.container div') {
            elementRules = stylesheet.cssRules[i];
        }
    }

    elementRules.style.setProperty('height', `${1000/size}px`);
    elementRules.style.setProperty('width', `${1000/size}px`);
}

