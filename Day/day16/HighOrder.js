
const a = [1,2,3,4,5,6];

export function filterNumbers(consditionFunction) {
    const b = [];
    for (let i = 0; i< a.length; i++) {
        if(consditionFunction(a[i])){ // logic for check even number
            b.push(a[i]);
        }
    }
    return b;
}

export function isEven(num) {
    return num % 2 == 0;
}

export function isOdd(num) {
    return num % 2 != 0;
}

const evenNumber = filterNumbers(isEven);
const OddNumber = filterNumbers(isOdd);

console.log(evenNumber);
console.log(OddNumber);