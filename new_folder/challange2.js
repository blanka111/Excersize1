/*
/*
 0. Vypiste cislo, ktore vam uzivatel zadal v tvare "Uzivatel zadal cislo: CISLO SEM a to je peklne cislo
 1. Vypis cisla od 1 - 20
 2. Vypis cisla od 20 - 1
 3. Vypis cisla, ktore su delitelne 3
 4. Vypis cisla, ktore su delitelne 4 a 6
 */


/*const prompt = require('prompt-sync')();

let vstup = prompt ('vloz cislo : ');

console.log(vstup);

console.log(`Uzivatel zadal cislo ${vstup} a to je peklne cislo `);

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}*/


const prompt = require('prompt-sync')();

/*let vstup = prompt ('vloz cislo : ');
console.log(vstup);

/*
if (vstup % 3 === 0)
{
console.log('Cislo delitelne 3');
}
else {
    console.log('Cislo neni delitelne 3');
}
*/


/*
for (let i = 0; i < vstup; i++)
{
    if ((i % 2 === 0) && (i % 4 === 0)) {
        console.log(i);

    }
}  */


/*
If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

*/
let population = 10;
if (population < 33){
    console.log(`Czech's population is ${33 - population} million below average.`);
}
else {
    console.log(`Czech's population is ${population-33} million above average.`);
}

/*
'How many neighbour countries does your contry have?');
If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.
Use an else block to log 'No borders' (this block will be executed when numNeighboursis 0 or any other value).
Test the code with different values of numNeighbours, including 1 and 0.
Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?
    Finally, convert numNeighbours to a number, and watch what happens now when you input 1.
Reflect on why we should use the === operator and type conversion in this situation.

Nechapu, proc se to chova jinak pro moznost ==1 a ===1 ?? */


let NumNeighbour = prompt (' How many neighbour countries does your contry have?: ');
console.log(NumNeighbour);

if (NumNeighbour === 1){
    console.log(`Only 1 border!`);
}
else if (NumNeighbour > 1)
{ console.log('More than 1 border.');
}
else {
    console.log('No borders');
}

/* Comment out the previous code so the prompt doesn't get in the way.
Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.
Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.
    Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true
*/

let language='Chinese';
let isIsland = false;

if (isIsland = false) {
        if(language = 'English' && population < 50 )
    {
   console.log('You should live in Czech :)');
    }
        else { onsole.log('Czech doesnt meet you criteria');
    }
}
else {
    console.log('Czech doesnt meet you criteria');
}

/*Use a switch statement to log the following string for the given language:
chinese or mandarin: 'MOST number of native speakers!';
spanish: '2nd place in number of native speakers';
english: '3rd place';
hindi: 'Number 4';
arabic: '5th most spoken language';
for all other simply log 'Great language too :D'.
*/

switch (language) {
    case 'Spanish':
    {console.log('2nd place in number of native speakers');
        break;}
    case 'English':
    {console.log('3rd place');
        break;}
    case 'Chinese':
    {console.log('MOST number of native speakers!');
        break;}
    case 'Mandarin':
    {console.log('MOST number of native speakers!');
        break;}
    case 'Hindi':
    {console.log('Number 4');
        break;}
    case 'Arabic':
    {console.log('5th most spoken language');
        break;}
    default:
    {console.log('Great language too :D');
        break;}
}
