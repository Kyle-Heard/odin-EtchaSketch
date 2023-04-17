
const gridArray = [];
body = document.querySelector('body');

const resizeBtn = document.querySelector('button.resize');
resizeBtn.addEventListener('click', resizeGrid);

const myButton = document.querySelector('button.snippet');
myButton.addEventListener('click', function () {
    mainContainer.remove();
    resetGrid(16);
});

function resizeGrid(){
    let newSize = prompt("What Size should the Grid Be? ");
    mainContainer.remove();
    if (newSize < 2) resetGrid(2);
    else if (newSize > 100) resetGrid(100);
    else resetGrid(newSize);
}

function hoverSquare() {
    const currOpacity = Number(this.style.opacity) + .1;
    console.log(currOpacity);
    this.style.opacity = currOpacity;
    this.style.backgroundColor = randomColor();
    

}

function randomColor(){
    let hexValue = "#";
    const hexRange = '0123456789ABCDEF';
    for (x = 0; x < 6; x++){
        hexValue += hexRange.charAt(Math.floor(Math.random() * 16));
    }

    console.log(hexValue);
    return hexValue;
}


function resetGrid(gridSize) {
    mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    mainContainer.setAttribute('style', 'border: 5px solid; width: 960px; height: 960px;');

    for (x = 0; x < gridSize; x++) {
        const divRow = document.createElement('div');
        divRow.setAttribute('style', `display: flex; height:${100 / gridSize}%`)
        for (y = 0; y < gridSize; y++) {
            const divColumn = document.createElement('div');
            divColumn.classList.add('grid-square');
            divColumn.setAttribute('style', 'border: 1px solid black; flex: 1;');
            divRow.appendChild(divColumn);
            gridArray.push(divColumn);
        }
        mainContainer.appendChild(divRow);
    }
    gridArray.forEach(square => square.addEventListener('mouseover', hoverSquare));
    body.insertBefore(mainContainer, body.firstChild);
}

resetGrid(16);