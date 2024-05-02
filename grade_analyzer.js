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
        if (el % 2 === 0) {
            evenSum++;        }
    });
    return evenSum;
};

function avg(sum, length) {
    return sum / length;
};

console.log (`Soucet cisel je :  ${sum(numbers)}`);

/* Objective: The objective of this assignment is to create a JavaScript program that analyzes a list of student grades and provides various statistics using conditions and loops.
Task Description: You are given an array of student grades (each grade is a number between 0 and 100). Your task is to create a JavaScript program that performs the following tasks:
Calculate the average grade of all the students.
Determine the highest and lowest grades in the array.
Count how many students passed (grades >= 60) and how many failed (grades < 60).
Identify the number of students in each grade range: 0-59, 60-69, 70-79, 80-89, 90-100.
Instructions:
Create a JavaScript file named grade_analyzer.js.
Define an array named grades containing a list of integers representing student grades.
Implement functions to perform the tasks described above. You can define separate functions for each task or combine them as per your preference.
Use loops to iterate over the array and conditions to perform the necessary calculations.
Ensure your program provides clear and informative output, including the calculated statistics and any relevant messages.
Test your program with different sets of grades to ensure it works correctly under various conditions.
Add comments to your code to explain the purpose of each function and any complex logic.
Example Output:
Grade Data: [85, 72, 56, 90, 65, 78, 45, 88, 92, 70]
Average Grade: 73.3
Highest Grade:92
Lowest Grade: 45
Number of Passing Grades: 7
Number of Failing Grades: 3
Number of Students with Grades:
0-59: 1
60-69: 2
70-79: 2
80-89: 3
90-100: 2
*/

let grades = [85, 72, 56, 90, 65, 78, 45, 88, 92, 70];

let gradeSummary=sum(grades);
console.log(gradeSummary);
console.log (`Prumer znamek  je :  ${avg(gradeSummary, grades.length)}`);