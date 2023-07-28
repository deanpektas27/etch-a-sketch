const container = document.querySelector('.container');
const gridbtn = document.querySelector('.gridBtn');

// Create 16x16 grid of 'square divs'
function createSquareDivs(gridsize) {
    for(let i = 0; i < gridsize * gridsize; i++) {
        const divBox = document.createElement('div');
        container.appendChild(divBox);
        divBox.addEventListener("mouseover", () => {
            divBox.style.cssText = "background-color: black;"
            setTimeout(() => {
                divBox.style.cssText = "background-color: #eee;"
            }, 2000);
        });
        divBox.setAttribute('id', 'box');
    }
    container.setAttribute('style', 'background: #d34444');
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
    

}

function removeSquares() {
    container.innerHTML = '';
}

gridbtn.addEventListener('click', () => {
    const getBoxes = document.querySelectorAll('div');
        if (getBoxes.length > 2){
            removeSquares();
        }
    let gridsize = prompt("How many squares would you like per side?");
    if(gridsize > 100){
        while(gridsize > 100) {
            gridsize = prompt("The maximum size is 100 per side");
        }
    }
    createSquareDivs(gridsize);

});

