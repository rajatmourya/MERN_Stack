
// ---------------------------Creating and appending new HTML-------------------------------------------------------------------------------
// const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
// const box3 = document.getElementById('box-3');
// const box4 = document.getElementById('box-4');
// const box5 = document.getElementById('box-5');
// const box6 = document.getElementById('box-6');
// const box7 = document.getElementById('box-7');
const divs = document.getElementsByTagName('div');
const container = document.getElementsByClassName('container');

for (let i = 0; i < 10; i++) {
    const boxElement = document.createElement('div');
    boxElement.classList.add( 'box');

    container[0].append(boxElement);
    
}