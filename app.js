let bodyElement = document.querySelector('body');
bodyElement.addEventListener('click', handleOnClick);
bodyElement.addEventListener('keydown', undoBox);
let boxList = [];

function handleOnClick(event) {
    let color = randomColorGenerator();
    const x = event.clientX;
    const y = event.clientY;

    const boxData = {
        x,
        y,
        color,
    }

    boxList.push(boxData);

    renderBoxes();
}

function randomColorGenerator() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

function renderBoxes() {
    document.body.innerHTML = '';
    boxList.forEach((boxData, index) => {
    const boxHTML = 
        `<div style= "
            top: ${boxData.y}px;
            left: ${boxData.x}px;
            background: ${boxData.color};
            z-index: ${index};
            "
        >
        
        </div>`;

        bodyElement.innerHTML += boxHTML;
    });
}

function undoBox(e) {
    const isUPressed = e.key === 'u';
    if (isUPressed) {
        boxList.pop();
        renderBoxes();
    }
}