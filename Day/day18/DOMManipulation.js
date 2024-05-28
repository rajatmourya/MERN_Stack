const headingElement = document.getElementById('heading');
const subheadingElement = document.getElementById('subheading');

const containerDiv = document.getElementById('container');

containerDiv.innerHTML = `<h1>This is inside the container</h1> 
                            <p>this is also there</p>`;


const newElement = document.createElement('h1');
newElement.innerHTML = 'This is new H1';

containerDiv.appendChild(newElement);

const numberInput = document.getElementById('number-input');
numberInput.value = "Rajat";

const submitbutton = document.getElementById('submit-btn');
const dummyforms = document.getElementById('dummy-form');
submitbutton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(numberInput.value);
});
