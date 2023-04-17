let gridSize = 16;
const gridArray = [];

const myButton = document.querySelector('button');
myButton.addEventListener('click', function () {
    mainContainer.remove();
    resetGrid();
});

function hoverSquare() {
    console.log(this.style.backgroundColor);
    this.style.backgroundColor = "green";

}

body = document.querySelector('body');

function resetGrid() {
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

resetGrid();