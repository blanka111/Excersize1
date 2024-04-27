/*
values and variables

Declare variables called country, continent and population and assign their values according to your own country (population in millions).

Log their values into console

*/
const country = 'Czech republic';
const continent = 'Europe';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

/*
Data types

Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

Log the types of isIsland, population, country and language to console


 */

const isIsland = false;

console.log(isIsland);
console.log(population);
console.log(country);


/*
Let, const, var

Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.

 */

let language='czech language';
console.log(language);

/*
Basic operators

If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak Portuguese'.

 */


function splitInTwoPopulation (population) {
    let populationInTwo=  population / 2;
    console.log ('In each half live: ' + populationInTwo);
    return populationInTwo;
}

let populationInTwo = splitInTwoPopulation(population);

population=population+1;
console.log(population);

let populationFIN=6;
function isItMore (population, populationFIN) {
    let isOrNot=population >= populationFIN;
    console.log('Is living more people in your country than in Finland?: ' + isOrNot)
    return isOrNot;
}
let isOrNot=isItMore(population, populationFIN);

let populationAVG = 33;
function isItMoreAvg (population, populationAVG) {
    let isOrNotAvg=population >= populationAVG;
    console.log('Is living more people in your country than in average country?: ' + isOrNotAvg)
    return isOrNotAvg;
}
let isOrNotAvg=isItMoreAvg(population, populationAVG);

const countryP = ('Portugal');
const languageP = ('portuguese');
console.log(countryP + '  is in ' + continent + ' and it is '  + population + ' million people speak ' + languageP + '.');
