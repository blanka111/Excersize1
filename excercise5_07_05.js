/*Easy: Check Even or Odd: Write a JavaScript function that takes an integer as input and returns "Even" if the number is even and "Odd" if it's odd.
Easy: Temperature Classifier: Create a function that takes a temperature in Celsius as input and returns a message based on the temperature:
If the temperature is less than 0, return "Freezing".
If the temperature is between 0 and 15 (inclusive), return "Cold".
If the temperature is between 16 and 25 (inclusive), return "Moderate".
If the temperature is greater than 25, return "Hot".
Medium: Validate Email Format: Write a function that takes an email address as input and returns true if the email address is valid based on a simple format check (e.g., it contains an "@" symbol and a domain).
Medium: Leap Year Checker: Create a function that takes a year as input and returns true if it's a leap year and false if it's not. A leap year is divisible by 4 but not by 100 unless it is also divisible by 400.
Medium: Find the Greatest Number: Write a JavaScript function that takes three numbers as input and returns the greatest number among them.
Hard: Palindrome Checker: Create a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
Hard: Prime Number Checker: Write a JavaScript function that takes an integer as input and returns true if it's a prime number and false if it's not.
Hard: Anagram Checker: Implement a function that takes two strings as input and returns true if they are anagrams of each other (contain the same characters in any order) and false otherwise.
Advanced: Password Strength Checker: Create a function that takes a password as input and returns a strength rating based on the following criteria:
Weak: Less than 8 characters.
Medium: 8 or more characters but doesn't contain both uppercase and lowercase letters.
Strong: 8 or more characters and contains both uppercase and lowercase letters.
*/

const prompt = require('prompt-sync')();
/*
let vstup = prompt ('vloz cislo : ');
//1//
vstup % 2 ===0 ? console.log ('Sude cislo') : console.log ('Liche cislo');
//2//
let temperature = prompt ('Vloz teplotu : ');
if (temperature<0){
    console.log('Freezing');
}
else if ((temperature >= 0) && (temperature < 15))  {
    console.log('Cold');
}
else if ((temperature >= 15) && (temperature < 25)){
    console.log('Moderate');
}
else if (temperature >= 25)
{
    console.log('Hot');
};
//3//
let email = prompt ('Email:');
if ((email.includes('@')) && (email.includes('/./'))){
    console.log('Email valid');
}
else {
    console.log('Email not valid');
};

//Medium: Leap Year Checker: Create a function that takes a year as input and returns true if it's a leap year and false if it's not. A leap year is divisible by 4 but not by 100 unless it is also divisible by 400.
// Medium: Find the Greatest Number: Write a JavaScript function that takes three numbers as input and returns the greatest number among them.
// Hard: Palindrome Checker: Create a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

let year = prompt ('Vloz rok : ');
if (((year % 4 ===0) && (year % 100 !== 0)) || ((year % 4 ===0) && (year % 400 === 0))) {
    console.log('Prestupny rok');
}
else {
    console.log('Neprestupny rok');
}
numbers=[];

for(i=0;i<=2;i++)
    {
    let number = prompt ('Vloz cislo : ');
    numbers.push(Number(number));
    };


function max(num){
    let max = numbers[0];
    numbers.forEach((el) => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}

console.log(`Max hodnota je cislo: ${max(numbers)}`);


function palidrom(text){
    let isPalindrom = true;
    for(let i=0;i<text.length;i++){
        if(text[i]=== text [text.length -1-i]){
            console.log(text[i]);
        }
    else{
        isPalindrom= false
        return false;
    }
}
    return isPalindrom;
}
console.log(palidrom('ahhhha')); */

/*Hard: Prime Number Checker: Write a JavaScript function that takes an integer as input and returns true if it's a prime number and false if it's not.
*/

let prvocislo = prompt ('Vloz cislo pro prvocislo: ');
prvocislo = parseInt(prvocislo);


let nasobek = 0;

for (let i = 0; i < prvocislo; i++) {
    let postupne = (prvocislo-i);
    let vysledek = prvocislo % postupne;
    let vysledek0 = prvocislo / postupne;

    if (vysledek  == 0)
    {
        nasobek ++;
    }
}

let isPrvocislo = false;
if (nasobek == 2)
{
    isPrvocislo = true;
}
else {
    isPrvocislo = false;
}
console.log(isPrvocislo);






