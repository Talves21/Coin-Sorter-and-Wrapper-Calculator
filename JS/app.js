// Value of coins
let pValue = .01;
let nValue = .05;
let dValue = .1;
let qValue = .25;

// Amount of coins
let numPennies = prompt('Enter amount of pennies');
let numNickels = prompt('Enter amount of nickels');
let numDimes = prompt('Enter amount of dimes here');
let numQuarters = prompt('Enter amount of quarters here');

// Total value of the amount of coins present
let pSum = numPennies * pValue;
let nSum = numNickels * nValue;
let dSum = numDimes * dValue;
let qSum = numQuarters * qValue;
let totalSum = pSum + nSum + dSum + qSum;
console.log(`Total value of all the coins is ${totalSum.toFixed(2)}.`);

// Amount of coins that fit into wrappers
let pWrap = 50;
let nWrap = 40;
let dWrap = 50;
let qWrap = 40;

// Calculating the amount of wrappers needed for the amount of coins present
let pWrapAmount = Math.floor(numPennies / pWrap);
let nWrapAmount = Math.floor(numNickels / nWrap);
let dWrapAmount = Math.floor(numDimes / dWrap);
let qWrapAmount = Math.floor(numQuarters / qWrap);

console.log(`Total amount of penny wrappers is ${pWrapAmount}.`);
console.log(`Total amount of nickel wrappers is ${nWrapAmount}.`);
console.log(`Total amount of dime wrappers is ${dWrapAmount}.`);
console.log(`Total amount of quarter wrappers is ${qWrapAmount}.`);

// Calculating remaining coins outside of wrappers
let pRemainder = numPennies % pWrap;
let nRemainder = numNickels % nWrap;
let dRemainder = numDimes % dWrap;
let qRemainder = numQuarters % qWrap;

console.log(`Remaining number of pennies is ${pRemainder}.`);
console.log(`Remaining number of nickels is ${nRemainder}.`);
console.log(`Remaining number of dimes is ${dRemainder}.`);
console.log(`Remaining number of quarters is ${qRemainder}.`);

// Calculating how much is the amount of the remaining coins
let pRemainderSum = pRemainder * pValue;
let nRemainderSum = nRemainder * nValue;
let dRemainderSum = dRemainder * dValue;
let qRemainderSum = qRemainder * qValue;

console.log(`The sum of remaining pennies is ${pRemainderSum.toFixed(2)}.`);
console.log(`The sum of remaining nickels is ${nRemainderSum.toFixed(2)}.`);
console.log(`The sum of remaining dimes is ${dRemainderSum.toFixed(2)}.`);
console.log(`The sum of remaining quarters is ${qRemainderSum.toFixed(2)}.`);
 




