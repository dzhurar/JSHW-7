// 1
const numbersOne = [4, 15, 24];
numbersOne[1] = 10;
console.log(numbersOne);

// 2
const stringOne = ['Mango', 'Kiwi', 'Grape'];
stringOne[3] = 'apple'; stringOne[4] = 'pineapple';
console.log(stringOne);

// 3
const numbersTwo = [5, 13, 22];
let sum = 0;
for (let i = 0; i < numbersTwo.length; i++) {
    sum += numbersTwo[i];
}
console.log(sum);

// 4
const numbersThree = [5, 13, 22, 34, 49];
for (let i = 0; i < numbersThree.length; i ++) {
    console.log(numbersThree[i]);
}

// 5
const stringTwo = ['tea', 'village', 'data', 'weekly', 'union'];
for (let i = 0; i < stringTwo.length; i ++) {
    if (stringTwo[i].length >= 5) {
        console.log(stringTwo[i]);
    }
}

// 6
const numberFour = ['30', '76', '82', '75', '15', '87', '53', '48', '1', '64'];
let maxNumber = numberFour[0];

for (let i = 0; i < numberFour.length; i ++) {
    if (numberFour[i] > maxNumber) {
        maxNumber = numberFour[i];
    }
}
console.log(maxNumber);

// 7
const numberFive = ['30', '76', '82', '75', '15', '87', '53', '48', '1', '64'];
let evenNumber = [];

for (let i = 0; i < numberFive.length; i ++) {
    let remain = numberFive[i] % 2;
    if (remain === 0) {
        evenNumber.push(numberFive[i]);
    }
}
console.log(evenNumber);