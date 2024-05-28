const a1 = [2,34,4,86,34,89,45];

const SquareRoot = a1.map((element) => {
    return Math.sqrt(element);
});

const numToString = a1.map((element) => {
    return element.toString(10);
});


console.log(SquareRoot);
console.log(numToString);