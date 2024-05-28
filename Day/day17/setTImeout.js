// ------------------------------------------------- setTimeout---------------------------------------------------------

function greetObj(obj) {
    console.log('Hello ' + obj.name);
}

function greet(name) {
    console.log('Hello ' + name);
}

console.log('before greet');

// setTimeout(greet,2000,'Rajat');

const greetObjTimeOutId = setTimeout(() => {
    greetObj({
        name:"Rajat Mourya"
    });
}, 3000);

const greetTimeOutId = setTimeout(() => {
    greet('Rajat');
}, 5000);

const goodnightTimeOutId = setTimeout(() => {
    console.log('Good night');
}, 4000);

clearTimeout(greetTimeOutId);
// clearTimeout(goodnightTimeOutId);

console.log('Thi is written after paragraph');

