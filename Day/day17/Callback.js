// function orderPizza(callback) {
//     setTimeout(() => {
//         const pizza = '🍕';
//         callback(pizza)
//         // return pizza;
//     }, 2000);
// };

function orderPizza (myFunction) {
    getCheese((cheese) =>{
        makeDough(cheese, (dough) => {
            bakePizaa(dough, (pizza) => {
                myFunction(pizza);
            });
        });
    });
}

function getCheese(next) { // next is the callback function
    setTimeout( () => {
        const cheese = '🧀';
        console.log(`Sending the ${cheese}`);
        next(cheese)
    },2000);
}

function makeDough(cheese, next) {
    setTimeout( () => {
        const dough = cheese + '🥖';
        console.log(`Sending the ${dough}`);
        next(dough)
    },2000);
}

function bakePizaa(dough, next) {
    setTimeout( () => {
        const pizza = dough + '🍕';
        console.log(`Sending the ${pizza}`);
        next(dough)
    },2000);
}

function notifyMeOrSuccess(pizza) {
    console.log(`here is my notification for ${pizza}`);
}

orderPizza(notifyMeOrSuccess);

// orderPizza((pizza) => {
//     console.log('here is my pizza', pizza);
// });

// const pizza = orderPizza();
// console.log(pizza);

console.log('visited nani');

console.log('rest');