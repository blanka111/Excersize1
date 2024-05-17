/*
1. Implementuj Array metódu find
2. Implementuj Array metódu forEach
3. Implementuj Array metódu filter
4. Implementuj Array metódu reverse
5. Implementuj Array metódu sort
6. Nacitaj od uzivatela 10 mien a vypis len tie, ktoré obsahujú písmeno R
7. Vytvor 2D pole s hodnotami 1 - 10 a vypíš ich
8. Vytvor 2D pole a najdi max hodnotu v poli
9. Vytvor 2D pole a spocitaj celkovu hodnotu pola

 */
//1 - pri hodine//
// The find() method returns the value of the first element that passes a test.//
// The find() method executes a function for each array element.//
// The find() method returns undefined if no elements are found.//
// The find() method does not execute the function for empty elements.//
// The find() method does not change the original array. //
let pole = [1, 2, 3, 4, 5];

function findTest(value) {
    return value > 3;
}

console.log(pole.find(findTest))

function poleFind(array, value, operator) {
    array.forEach((el) => {
        switch (operator) {
            case '<' :
                if (el < value) {
                    console.log(el);
                    return true;
                }
                break;
            case '>' :
                if (el > value) {
                    console.log(el);
                    return true;
                }
                break;
            case '===' :
                if (el < value) {
                    console.log(el);
                    return true;
                }
                break;
            case '==' :
                if (el < value) {
                    console.log(el);
                    return true;
                }
                break;
        }
    })
}

poleFind(pole, 1, '>');

//2 - pri hodine//
//Implementuj Array metódu forEach//
// The forEach() method calls a function for each element in an array.
//    The forEach() method is not executed for empty elements.

for (let i = pole.length - 1; i >= 0; i--) {
    console.log(pole[i]);
}

//3//
//Implementuj Array metódu filter//
//The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
pole2 = [];
pole.forEach((el) => {
    if (el > 2) {
        pole2.push(el);
    }
})
console.log(pole2);

// 4 - pri hodine//
// Implementuj Array metódu reverse //
// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.

let poleRevers = [];
for (let j = pole.length - 1; j >= 0; j--) {
    poleRevers.push(pole[j]);
}
console.log(poleRevers);

//5//
//Implementuj Array metódu sort
//


let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//6//
// Nacitaj od uzivatela 10 mien a vypis len tie, ktoré obsahujú písmeno R //
let jmena = ["Jana", "Renata", "Jarka", "Kristina", "Blanka", "Katka", "Roman"];

jmena.forEach((el) => {
    if (el.toLowerCase().includes('r')) {
        console.log(el);
    }
})


// 7 - pri hodine//
// Vytvor 2D pole s hodnotami 1 - 10 a vypíš ich - pri hodine //
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
        console.log(array2d[i][j]);
    }
}


//8 - pri hodine//
//Vytvor 2D pole a najdi max hodnotu v poli//
let max = array2d[0][0];
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
        if (array2d[i][j] > max) {
            max = array2d[i][j];
        }
    }
}
console.log(`Max. hodnota v poli :  ${max}`);

//9 - pri hodine //
// Vytvor 2D pole a spocitaj celkovu hodnotu pola //

let sum = 0;
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {

        sum = sum + array2d[i][j];
    }
}
console.log(`Soucet hodnot v poli :  ${sum}`);
