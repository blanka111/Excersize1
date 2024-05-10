let pole =[1,2,3,4,5,6,7,8,'cat',10];

//Výpis čísel od 1 do 10: Použite cyklus na výpis čísel od 1 do 10.
// Výpis párnych čísel od 1 do 20: Použite cyklus na výpis len párnych čísel od 1 do 20.
// Výpis nepárnych čísel od 1 do 20: Použite cyklus na výpis len nepárnych čísel od 1 do 20.
// Súčet čísel od 1 do 100: Spočítajte súčet všetkých čísel od 1 do 100.
// Súčet len párnych čísel od 1 do 100: Spočítajte súčet iba párnych čísel od 1 do 100.
// Výpočet faktoriálu čísla: Napíšte funkciu, ktorá vypočíta faktoriál zadaného čísla.
// Zoradenie pola: Zoraďte dané pole čísel od najmenšieho po najväčšie.
// Generovanie prvých n čísel Fibonacciovej postupnosti: Napíšte funkciu, ktorá vygeneruje prvých n čísel Fibonacciovej postupnosti.
// Vyhľadanie prvku v poli: Nájdite zadaný prvok v danom poli čísel.
// Výpočet mocniny čísla: Napíšte funkciu, ktorá vypočíta zadanú mocninu zadaného čísla.
//
// BONUS: Triangulárna hviezdičková pyramída spolu s obrátenou pyramídou: Vytvorte funkciu, ktorá vygeneruje triangulárnu pyramídu spolu aj s obrátenou triangulárovou pzramídou z hviezdičiek so zadaným počtom riadkov.

//1//
/*
pole.forEach((el) => {
    console.log(el);
}); */

for (let i= 1; i<11; i++) {
    console.log(i);
};

//2//
let parne =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
parne.forEach((el) => {
    el % 2 === 0 ? console.log(el):{};
});

//3//
parne.forEach((el) => {
    el % 2 === 0 ? {}:console.log(el);
});

//4//
// Súčet čísel od 1 do 100: Spočítajte súčet všetkých čísel od 1 do 100.//

let sum100 = 0;
for (let i=1; i<101; i++) {
    sum100 =  sum100 + i;
}
console.log(sum100);

//5//
// Súčet len párnych čísel od 1 do 100: Spočítajte súčet iba párnych čísel od 1 do 100.  (i % 2 === 0 ? (sum100 =  sum100 + i) : {});
// } //

let sumsude = 0;
for (let i= 1; i<101; i++) {
    i % 2 === 0 ? (sumsude =  sumsude + i) : {}
}
console.log(sumsude);

//6//
// Výpočet faktoriálu čísla: Napíšte funkciu, ktorá vypočíta faktoriál zadaného čísla. //
let faktorial = 6;
let sumfaktorial = 1;

for (let i= faktorial;  i > 0 ; i--) {
    sumfaktorial = (sumfaktorial * i);
};

console.log(sumfaktorial);

//7//
//Zoradenie pola: Zoraďte dané pole čísel od najmenšieho po najväčšie.//

let polerada = [1,2,3,4,5,6,7,8,9,10];
let nejemnsi = 0
let polerazeni =[];

polerada.forEach((el) => {
    ;
})

/* for (let i= 0; i < polerada.length; i++) {
    if (polerada[i] < nejemnsi ) {
    polerazeni.push(polerada[i]);
    }
} */

//9//
// Vyhľadanie prvku v poli: Nájdite zadaný prvok v danom poli čísel.//

const prompt = require('prompt-sync')();
let najit = prompt ('Vloz hodnotu, kterou chces najit :');
let elVpoli=false;

pole.forEach((el) => {
    el == najit ? elVpoli=true : {};
});
console.log(elVpoli);

//10//
// Výpočet mocniny čísla: Napíšte funkciu, ktorá vypočíta zadanú mocninu zadaného čísla.//
let mocnina = prompt ('Zadej cislo, ze ktereho chces vypocitat mocininu :  ');
function mocn (nums) {
    mocnim = nums * nums;
    return mocnim;
};
console.log(`Mocina cisla je : ${(mocn(mocnina))} `);




