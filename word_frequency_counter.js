const fs =require ('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {   //vraci error nebo data//
if (err) {
    console.error(err);
    return;
}

console.log(data);  // nactu data//
    let words = data.replace('.',' ').;  //nahrazeni pouze u prvniho nalezeneho znaku //

    let words=data.split(' ');  // oddeleni slov na zaklade toho, co je v zavorkach - mezera //

    let wordsUnique =[];

    words.forEach((el) => {
            if(wordsUnique.includes(word.toLowerCase()))   // v danem poli je obsazeno toto slovo //
            {
            }
            else {
                wordsUnique.push(word.toLowerCase());
            }

    });
})

/*
1. Nacist data ze souboru
2.Rozdelit vetu na slova.
3. Zjistit vyskyt slova ve vete.
 */