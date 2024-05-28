
//------------------------Access by id----------------------- 

const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');
const box6 = document.getElementById('box-6');
const box7 = document.getElementById('box-7');
console.log(box1);
console.log(box2);
console.log(box3);
console.log(box4);
console.log(box5);
console.log(box6);
console.log(box7);

// -------------------Access by Tag Name--------------------

const divs = document.getElementsByTagName('div');
console.log(divs);


// -----------------------Access by Class Name-------------
const container = document.getElementsByClassName('container');
console.log(container);

// -------------------Access using Selector----------------
const sel = document.querySelector('#box-3');
console.log(sel);

const boxMultiples = document.querySelectorAll('.container div');
console.log(boxMultiples);
console.log(boxMultiples[0]);

// --------------------Changing HTML----------------------
box2.innerHTML = "<h2>This is h2</h2>";
box2.style.borderRadius = '50%';
box2.style.backgroundColor = 'brown';


// -----------------------Change HTML attribute valuee------------------

// document.getElementById('my-img').src = "https://via.placeholder.com/100";
document.getElementById('my-img').src = "https://i.pinimg.com/736x/60/d4/da/60d4da7eb2bac7c5814e783394c91c71.jpg";

// ---------------------------------------adding class in html---------------------------------------------------------------------

// ---------- adding the css----------
// box2.classList.add('fancy');

// ---------- Removing the css----------
// box6.classList.remove('box');

// box1.classList.toggle('box');





