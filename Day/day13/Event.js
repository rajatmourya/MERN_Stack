const box = document.getElementById("box");
const container = document.getElementById("container");

// function logMessage(){
//     console.log('Hi This is a log');
// }

const coordinates = document.createElement('p');
document.body.append(coordinates);

// let count = 0;
const logMessage = (event) => {
    // console.log('Clicked',count++);
    // console.log(event);
    coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`
    box.style.left = `${event.offsetX}px`;
    box.style.top = `${event.offsetY}px`;

}

const onPageScroll = (event) =>{
    // console.log(event);
    document.body.style.backgroundColor = "rgb(48, 200, 119)";
}




// box.addEventListener('click',logMessage);
// box.addEventListener('mousemove',logMessage);

document.addEventListener('scroll', onPageScroll);

container.addEventListener('mousemove',logMessage);