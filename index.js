const DEFAULT_SIZE = 2;

const grid = document.getElementById('grid');

function setupGrid (size) {

    for (let i = 0 ; i < size * size; i++) {
        const gridElement = document.createElement('div');
        grid.appendChild(gridElement);
    }

}

function changeColor () {
    
}


window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}