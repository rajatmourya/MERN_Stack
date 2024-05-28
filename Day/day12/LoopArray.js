const n = 10

// --------------- for Loop -----------
for (let index = 0; index <= n; index++) {
    console.log(index);
    
}

let n1 = n;

// --------------- while Loop -----------
while (n1 >= 0) {
    console.log(n1);
    console.log("hi");
    n1-=1;
}

// --------------- do-while Loop -----------

do{
    console.log(n1);
    console.log("hi");
    n1+=1;
}while(n1 <=11);

// ---------------------------------------Array-----------------

const arr = ["Ram","Shyam","Mohan","Sohan"];

// --------------foreach loop-----------------
arr.forEach(element => {
    console.log(element);
});

//---------------forin loop-------------------
console.log("-----------------------forin loop-------------");
for (const key in arr) {
    console.log(arr[key]);
}

//-------------sort Array-------------------
console.log("----------------Sort the Array---------------");

arr.sort();

for (const key in arr) {
    console.log(arr[key]);
}


// ---------------------------push element------------------------

console.log(arr);
arr.push("Rakesh");
console.log("Inserting Rakesh:",arr);

// ---------------------------pop element------------------------

console.log(arr);
arr.pop();
console.log("Deleting last element from the array:",arr);


// ----------------------------Serching element -------------------

const ispersent = arr.includes("Ram");
console.log("Ram is Persent", ispersent);

//-----------------------------Get Index --------------------------
 
const index = arr.indexOf("Shyam");
console.log("Shyam's Index value is:", index);

//------------------------------splice ----------------------------


console.log(arr);
// arr.splice(1,2);
// arr.splice(1,2,"Ghan","Ramesh","Suresh");
arr.splice(2,0,"Shivam");
console.log(arr);

// ----------------------------type of element-------------------

let a = [10, 4, 23];
console.log("Type of element: ",typeof(a));

console.log(a);
a.sort();
console.log(a);
