const canvas = document.querySelector('#canvas');
let gridSize = 16;

// add grid
function addGrid(gridSize) {
    let divSize = Math.floor(700/gridSize);
    for (let i = 1; i < gridSize * gridSize + 1; i++) {
        const div = document.createElement('div');
        div.style.height = (divSize + 'px'); // need to push to html
        div.style.width = (divSize + 'px'); // need to push to html
        canvas.append(div);
    }
    // hover
    const divs = canvas.querySelectorAll('div');
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'red';
        });
    });
};

function removeGrid() {
    const divs = canvas.querySelectorAll('div');
    divs.forEach((div) => {
        canvas.removeChild(div);
    })
};

// radio for size
function newGrid(size) {
    removeGrid()
    addGrid(size)
}

addGrid(gridSize);