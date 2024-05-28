import * as highOrder from "./HighOrder.js";

const a = [11,23,34,45,57,63,76,82];

const b = a.filter(highOrder.isEven);

// const c = a.filter((element, index, arr) => {
//     console.log(element, index, arr);
//     return true;
// });

const c = a.filter((element) => {
    return true;
});

const d = a.filter((element) =>{
    return element % 3 == 0;
});

console.log(b);
console.log(c);
console.log(d);




// ----------------------------------------map------------------------------------

function square(num){
    return num*num;
}

function negative(num){
    return -num;
}

const e = a.map(square);
const f = a.map(negative);
const g = a.map((num) => 2*num);

console.log(e);
console.log(f);
console.log(g);



// ----------------------find-----------------------------------------

const h = a.find((element) => element % 7 == 0);

console.log(h);

const student = [{
    name: "Anuj",
    marks: 12
}, {
    name: "Shivam",
    marks: 72
}, {
    name: "Sanchita",
    marks: 68
}, {
    name: "Raj",
    marks: 87
}];

const i =  student.find((element) => {
    return element.marks < 50;
})

console.log(i);


const grades = student.map((element) => {
    if(element.marks <50){
        element.isPassed = false;
    }else{
        element.isPassed = true;
    }
    return element;
});

console.log(grades);