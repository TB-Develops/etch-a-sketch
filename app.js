//Creates a reference for elements
const container = document.querySelector('#container');
container.classList.add('box')

const heading = document.querySelector('h1');
heading.style.display = 'flex';
heading.style.flexDirection = 'column';
heading.style.alignItems = 'center';

const reset = document.createElement('button');
reset.textContent = 'RESET';
reset.style.display = 'block';

const colorPicker = document.createElement("input");
colorPicker.textContent = 'Color: ';
colorPicker.type = 'color';



heading.appendChild(reset);
heading.appendChild(colorPicker);




for (i=0; i < 256; i++){
    const div1 = document.createElement('div');
    div1.classList.add('gridBox')
    
    div1.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = colorPicker.value;
    })

    div1.style.width = '31.75px';
    div1.style.display = 'flex';
    div1.style.height = '31.75px';
    div1.style.border = 'solid black 1px'
    div1.style.backgroundColor = 'gray';

    container.appendChild(div1);
}

function generateGrid(){
    var gridSize = window.prompt('Enter new grid size')
    let area = gridSize * gridSize;
    let boxSize = (540/gridSize-2)+'px';

    for (i=0; i < area; i++){
        const div1 = document.createElement('div');
        div1.classList.add('gridBox')
        
        div1.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'red';
        })
    
        div1.style.width = boxSize;
        div1.style.display = 'flex';
        div1.style.height = boxSize;
        div1.style.border = 'solid black 1px'
        div1.style.backgroundColor = 'gray';
    
    
    
        container.appendChild(div1);
    }
}

function resetGrid(){
    const box = document.querySelectorAll('.gridBox');

    box.forEach(function(e) {
        // e.style.backgroundColor = 'grey';
        e.style.display = 'none';
    })

    generateGrid();
    
}

reset.addEventListener('click', () => {
    resetGrid();
})












