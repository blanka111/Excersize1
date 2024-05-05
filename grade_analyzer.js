

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

/*let grades2 = [85, 72, 56, 90, 65, 78, 45, 88, 92, 70];*/
const prompt=require ('prompt-sync')();
let i=0
let grades =[];

let end=true; //zacatek//
while (end) {
    let value = prompt(`Vlozte znamku, pokud chces skoncit vloz 999 :`);
    value ==999 ? end=false : grades.push(value);
};

function sum(nums) {
    let sum = 0;
    nums.forEach((el) => {
        sum = sum + el;
    });
    return sum;     //ukladam si hodnotu //
};

function avg(sum, length) {
    if (grades.length > 0){
        return sum / length;
    }
    else{
        return 0;
    }
};

let gradeSummary=sum(grades);

function min(nums) {
    let min = nums[0];
    nums.forEach((el) => {
        el < min ? min = el : {};
    });
    if (grades.length === 0) {
        return 0;
    }
    return min;
}

function max(nums) {
    let max = nums[0];
    nums.forEach((el) => {
        el > max ? max = el : {};
    });
    if (grades.length === 0) {
        return 0;
    }
    return max;
}

function passingGrade(nums) {
    let numPassed = 0;
    nums.forEach((el) => {
        el >= 60 ? numPassed++ : {}
    });
    return numPassed;
};

function failingGrade(nums) {
    let numFailed = 0;
    nums.forEach((el) => {
        el < 60 ? numFailed++ : {}
    });
    return numFailed;
};


function grade(nums, leftInterval, rightInterval) {
    let gradeX = 0;
    nums.forEach((el) => {
        ((el > leftInterval) && (el <=rightInterval)) ? gradeX++ : {}
    });
    return gradeX;
};


console.log (`Prumer znamek  je :  ${avg(gradeSummary, grades.length)}`);
console.log (`Nejlepsi znamka  je :  ${max(grades)}`);
console.log (`Nejhorsi znamka  je :  ${min(grades)}`);
console.log (`Pocet postupujicich je :  ${passingGrade(grades)}`);
console.log (`Pocet nepostupujicich je :  ${failingGrade(grades)}`);
console.log (`Pocet znamek v rozmezi 0-59 :  ${grade(grades,0,59)}`);
console.log (`Pocet znamek v rozmezi 60-69 :  ${grade(grades,60,69)}`);
console.log (`Pocet znamek v rozmezi 70-79 :  ${grade(grades,70,79)}`);
console.log (`Pocet znamek v rozmezi 80-89 :  ${grade(grades,80,89)}`);
console.log (`Pocet znamek v rozmezi 90-100 :  ${grade(grades,90,100)}`);