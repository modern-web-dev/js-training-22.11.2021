const myNumbers = [2, 4, 8, 12, 56, 13];

// let sum = 0;
// myNumbers.forEach(myNumber => {
//     const currentNumber = payTax(myNumber);
//     if (skipFreeTaxValues(currentNumber)) {
//         sum = calculateSum(sum, currentNumber);
//     }
// });

// map, filter, reduce
// shallow copy vs deep copy
const sum = myNumbers
    .map(payTax)
    .filter(skipFreeTaxValues)
    .reduce(calculateSum, 0);

function payTax(value) {
    return value - 1;
}

function skipFreeTaxValues(value) {
    return value > 4;
}

function calculateSum (sum, myNumber) {
    return sum + myNumber;
}

console.log(sum);
