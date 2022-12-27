const container = document.querySelector('#container');

// 16 x 16 grid
for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i);
    container.append(div);
}

const divs = container.querySelectorAll('div');
divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.setAttribute('style', 'background-color: red');
    });
});