const container = document.querySelector('#container');
let gridSize = 16;
const MAX = 100;

// button for size


// grid
let divSize = 960/gridSize;
for (let i = 1; i < gridSize * gridSize + 1; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i);
    div.style.height = divSize; // need to push to html
    div.style.width = divSize; // need to push to html
    container.append(div);
}

// hover
const divs = container.querySelectorAll('div');
divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.setAttribute('style', 'background-color: red;');
    });
});