const images = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1716762000~exp=1716765600~hmac=6be92a4963ca34966d028a5928f367989efcbc72f06ed60ed0673cd2ac97ee71&w=740',
    'https://images.pexels.com/photos/145683/pexels-photo-145683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2649394/pexels-photo-2649394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2131819/pexels-photo-2131819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://hd.wallpaperswide.com/thumbs/deadpool_and_wolverine_2024_superhero_comedy-t2.jpg',
    'https://hd.wallpaperswide.com/thumbs/godzilla_x_kong_the_new_empire_2024_movie-t2.jpg',
    'https://media.istockphoto.com/id/945065522/photo/cityscape-with-wi-fi-connection-conceptual-information-communication-technology-concept.jpg?s=1024x1024&w=is&k=20&c=8iRe7fXuFaaBu5fKrdu_SrJnnkcntQ-t269J0BziC0c=  '

];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const carouselNav = document.getElementById('carousel-nav');

const containerWidth = 80;
const flexContainerWidth = n * containerWidth;
flexContainer.style.width = flexContainerWidth;

for (let i = 0; i < n; i++) {
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);


    const dotDiv = document.createElement('div');
    dotDiv.style.width = '10px';
    dotDiv.classList.add('carousel-dot');  
    carouselNav.appendChild(dotDiv);
    dotDiv.addEventListener('click', (event) => {
        const index = [...carouselNav.childNodes].indexOf(event.target);
        showImg(index);
    })
    
}



let  curPosition = 0;
showImg(0);

leftButton.addEventListener('click', () => {
    if(curPosition > 0) {
        showImg(curPosition -1);
    } else {
        showImg(n-1);
    }
});

rightButton.addEventListener('click', () => {
    if(curPosition < n-1) {
        showImg(curPosition + 1);
    } else {
        showImg(0);
    }
});

function showImg(position) {

    const prevDot = carouselNav.children[curPosition];
    prevDot.classList.remove('active');
    curPosition = position;

    const curDot = carouselNav.children[curPosition];
    curDot.classList.add('active'); 

    const translateDistance = -curPosition * containerWidth;
    flexContainer.style.transform = `translateX(${translateDistance}vw)` ;

}