console.log("Class");

class Vehicle { 

    // constructor() {
    //     this.model = "XUV";
    //     this.wheels = 4;
    // }

    constructor(model, wheels) {
        this.model = model;
        this.wheels = wheels;
    }

    start() {
        console.log('vehicle stating');
    }
}

const obj1 = new Vehicle('truck',10);
const obj2 = new Vehicle('Bus',6);

console.log(obj1);
console.log(obj2);

obj1.start();