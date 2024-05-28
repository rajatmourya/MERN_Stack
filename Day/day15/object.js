console.log("Object");


const myObj = {
    age: 35,
    ishuman: true,
    hobbies: ['Singing','Coding']
}

myObj.skill = "MERN";
myObj.name = "Rajat Mourya"

console.log(myObj);
console.log(myObj.name);
console.log(myObj["skill"]);
myObj.age = 24;
console.log(myObj);

for (const key in myObj) {
    console.log(myObj[key]);
}


function getVehicle() {
    return {
        type: 'Car',
        wheels: 4
    }
}

const myv1 = getVehicle();
const myv2 = getVehicle();

myv2.wheels = 2;

console.log(myv1);
console.log(myv2);

console.log(typeof myv1);


// object destructring ES6

console.log(myObj);
// const age = myObj.age;
// const myIsHuman = myObj.ishuman;

myObj.walk = function() {
    console.log('person is wolking');;
}

let {age: myAge, ishuman: myIsHuman, name, walk} = myObj;

console.log(name,myAge,myIsHuman);

myObj.walk();

walk();


function shouting() {
    console.log('I am shouting');
}

function talking(shouting) {
    console.log('I am talking');
    shouting()
}
talking(shouting);


const student = {
    name: "Rajat",
    marks:35,
    talk: function () {
        console.log(`my name is ${this.name} and marks are ${this.marks}`);
    }
}

student.talk();

const age = 26;

// const message = "my age is " + age;

const message = `my age is ${age}`;

console.log(message);