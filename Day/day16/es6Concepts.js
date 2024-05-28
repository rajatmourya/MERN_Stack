// destructuring

const obj = {
    name: "Anuj",
    age:26
}

const {name, age} = obj;
console.log(name,age);

// default paraameter

function greet(name = "Lerner") {
    console.log("Hello " + name);
};

greet();
greet("Rajat");

//--------------------------  spread operator  --------------------------

function gret(...a) {
    console.log('hello ', a[0]);
}

gret("anuj", "shivam", 12);

const a = [1,2,3];

const b = [a, 4, 5, 6];
const c = [...a, 4, 5, 6];

console.log(a);
console.log(b);
console.log(c);

const animal = {
    name:'Simba',
    age:23
}

const fullInformation = {
    // animal,
    ...animal,
    address: 'pahaad',
    legs:4
}

console.log(fullInformation);
