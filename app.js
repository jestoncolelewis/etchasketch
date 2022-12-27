const container = document.querySelector('#container');

// 16 x 16 grid
for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', i);
    container.append(div);
}
