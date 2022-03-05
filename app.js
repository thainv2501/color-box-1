const container = document.querySelector('.container')
const resetBtn = document.createElement('button')
const newGridBtn = document.createElement('button')
const buttonContainer = document.querySelector('.buttons')

container.style.border = "1px solid black";
//create grid

let rows = 16
let cols = 16

function divGrid(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        const div = document.createElement('div')
        div.style.border = '1px solid white'
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}

divGrid(rows, cols);

//Change colour of individual grids by hovering over them
function colourBox() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        let rng1 = Math.floor(Math.random() * 255)
        let rng2 = Math.floor(Math.random() * 255)
        let rng3 = Math.floor(Math.random() * 255)
        box.style.background = `rgb(${rng1}, ${rng2}, ${rng3})`
    }));
}
colourBox();


//Reset grid colours to white
function resetGrid() {
    const boxes = container.querySelectorAll('.box')
    resetBtn.textContent = 'Reset'
    resetBtn.addEventListener('click', () => {
        boxes.forEach(box => box.remove())

        while (container.firstChild) {
            container.firstChild.remove()
        }

        divGrid(16, 16);
        colourBox()
    });
    buttonContainer.appendChild(resetBtn).classList.add('btn')
}
resetGrid();

function changeGrid() {
    newGridBtn.textContent = 'New Grid Size'
    newGridBtn.addEventListener('click', () => {
        size = window.prompt('Enter size of new grid (>50)', '32');
        if (size == null || size < 1 || size > 51) {
            colourBox()
        }
        else {
            resetGrid()
            while (container.firstChild) {
                container.firstChild.remove()
            }
            divGrid(size, size);
            colourBox()
        }
    })
    buttonContainer.appendChild(newGridBtn).classList.add('btn')
};


changeGrid()