

let numbers = [10, 5, 17, 23, 8, 12];

function sum(nums) {
    let sum = 0;
    nums.forEach((el) => {
        sum = sum + el;
    });
    return sum;     //ukladam si hodnotu //
}
let summary = sum(numbers);   //priradim si hosnot do cisel//


function min(nums) {
    let min = nums[0];
    nums.forEach((el) => {
        el < min ? min = el : {};
    });

    return min;
}

function max(nums) {
    let max = nums[0];
    nums.forEach((el) => {
        el > max ? max = el : {};
    });

    return max;
}

function odd(nums) {
    let oddSum = 0;
    nums.forEach((el) => {
        el % 2 ? oddSum++ : {}   //v pripade , ze mam se zbytkem TRUE - 1, FALSE -0  if el % 2 == 1 ..mam zbytek 1 ..je to liche cislo //
    });
    return oddSum;
}

function even(nums) {
    let evenSum = 0;
    nums.forEach((el) => {
        //el % 2 ? oddSum++ : {}   //v pripade , ze mam se zbytkem TRUE - 1, FALSE -0  if el % 2 == 1 ..mam zbytek 1 ..je to liche cislo //
        if (el % 2 === 0) evenSum++ {
            evenSum++;
        }
    }
