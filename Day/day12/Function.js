
// ----------------------Declaring funcion-----------------------
function greetings(){
    console.log("Hi");
    console.log("Namaste");
    console.log("Wassup");
}

// ----------------------Calling funcion-----------------------

greetings();

// ----------------------Function Parameters--------------------

function greetings(name){
    console.log("Hi",name);
    console.log("Namaste",name);
    console.log("Wassup",name);
}

greetings("Rajat")


// -------------------------Addition Function---------------------------

function addition(a,b){
    console.log(a+b);
}

addition(3,5);

// -------------------------Function return the value---------------------------

function subtraction(a,b){
    return a-b;
}

let x = 230;
let y = 10;
let result = subtraction(x,y);
console.log("Subtration of",x,"&",y,"is:",result);

// ------------------------- Function Expressions/ Anonymous Function-------------------------------

let div = function (a,b) { 
    return a/b;
}

console.log("Division of",x,"&",y,"is:",div(x,y));

// -----------------------------Arow Function-----------------

let mul = (a,b) =>{
    return a*b;
}

console.log("Multiply of",x,"&",y,"is:",mul(x,y));

// ----------------------------ForEach loop------------------

let a = [10,4,23,'hi'];

const myFunction = (element,index) => {
    console.log('printing',element,'index is',index);
}

a.forEach(myFunction);

// ---------------- custome sort---------------

a.sort((p,q) => {
    // if(p >q) return 1;
    // if (p <q) return -1;   
    // return 0;

    return p-q;

    // return q-p;
});

console.log(a);
