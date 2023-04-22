const container = document.querySelector('#container');
let gridSize = 16;

// add grid
function addGrid(gridSize) {
    let divSize = Math.floor(700/gridSize);
    for (let i = 1; i < gridSize * gridSize + 1; i++) {
        const div = document.createElement('div');
        div.style.height = (divSize + 'px'); // need to push to html
        div.style.width = (divSize + 'px'); // need to push to html
        container.append(div);
    }
    // hover
    const divs = container.querySelectorAll('div');
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'red';
        });
    });
};

function removeGrid() {
    const divs = container.querySelectorAll('div');
    divs.forEach((div) => {
        container.removeChild(div);
    })
};

// radio for size
function newGrid(size) {
    removeGrid()
    addGrid(size)
}

addGrid(gridSize);