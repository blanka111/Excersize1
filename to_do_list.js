const prompt = require('prompt-sync')();
let toDoList = [];
let vstup = 0;

// const fs = require('fs');
// const data = (toDoList);
//
// function saveDataToFile() {
//     const filePath = 'data.txt';
//     fs.writeFile(filePath, data, (err) => {
//         if (err) {
//             console.error('Error writing to file', err);
//         } else {
//             console.log('File has been written successfully');
//         }
//     });
// }

// function saveDataToFile(textData, fileName) {
//     const blob = new Blob([textData], { type: "text/plain;charset=utf-8" });

// let vstup = prompt ('Vloz ukol / Datum dokonceni ve formatu DD.MM.RRRR (pro ukonceni napis konec): ');
//
// while ((vstup !== 'konec') && (vstup !== '')) {
//         toDoList.push({
//             task: vstup.split('/')[0],
//             date: vstup.split('/')[1],
//             completion : false
//         })
//         vstup = prompt('Vloz ukol / Datum dokonceni ve formatu DD.MM.RRRR (pro ukonceni napis konec): ');
//
// }
//     console.log(toDoList);

function toAdd(vstup) {
    vstup = prompt('Vloz ukol / Datum dokonceni ve formatu DD.MM.RRRR (pro ukonceni napis konec):');
    while ((vstup !== 'konec') && (vstup !== '')) {
        toDoList.push({
            task: vstup.split('/')[0],
            date: vstup.split('/')[1],
            completion: false
        })
        vstup = prompt('Vloz ukol / Datum dokonceni ve formatu DD.MM.RRRR (pro ukonceni napis konec):');
    }
    console.log(toDoList);
}

function toPrint(array) {
    if (array.length >= 1) {
        console.log(array);
    } else {
        console.log('Nic k zobrazeni - neexistuje zadny ukol. ');
    }
}

function todayTask(array) {
    let todayToDoList = [];
    let today = new Date();
    today = today.getDate() + '.' + (today.getMonth() + 1) + '.' + (today.getFullYear());
    let nothing = 0;
    toDoList.forEach((el) => {
        el.date === today ? todayToDoList.push(el.task) : nothing = nothing + 1;
    })
    if (nothing === todayToDoList.length) {
        console.log('Na dnesni den neni zadny ukol.');
    } else {
        todayToDoList.forEach((el) => {
            console.log(el);
        })
    }
}

function toComplete(array) {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].completion === false) {
                console.log(array, i);
                let vyberIndex = prompt('Vyber task ktery chces oznacit jako COMPLETE - podle polohy radku: ');
                toDoList[vyberIndex].completion = true
            } else {
                console.log('Nic k zobrazeni - neexistuje zadny NEKOMPLETNI ukol. ');
            }
        }
    }
    else {
        console.log('Nic k zobrazeni - neexistuje zadny ukol. ');
    }

}

function toDelete(array) {
    if (toDoList.length > 0) {
        toDoList.forEach((element, index) => {
            console.log(element, index);
        })

        let vyberIndex = prompt('Vyber task ktery chces SMAZAT - podle indexu radku: ');
        toDolist2 = toDoList.splice(vyberIndex, vyberIndex + 1);
        console.log ('vymazano :')
        console.log(toDolist2);
    }
    else {console.log ('Neexistuje task ke smazani')
    }
}


let value = prompt('Vloz cislo pro vyvolani funkce: 1- vypis dnesnich ukolu, 2-zadani novych ukolu, 3- zobrazeni vsech ukolu, 4-completion, 5-deletion, 0-ukonceni : ');
while (parseInt(value) !== 0) {
    switch (parseInt(value)) {
        case 1:
            todayTask(toDoList);
            value = prompt('Vloz cislo pro vyvolani funkce: 1- vypis dnesnich ukolu, 2-zadani novych ukolu, 3- zobrazeni vsech ukolu, 4-completion, 5-deletion, 0-ukonceni : ');
            break;
        case 2:
            toAdd(vstup);
            value = prompt('Vloz cislo pro vyvolani funkce: 1- vypis dnesnich ukolu, 2-zadani novych ukolu, 3- zobrazeni vsech ukolu, 4-completion, 5-deletion, 0-ukonceni : ');
            value = parseInt(value);
            break;
        case 3:
            toPrint(toDoList);
            value = prompt('Vloz cislo pro vyvolani funkce: 1- vypis dnesnich ukolu, 2-zadani novych ukolu, 3- zobrazeni vsech ukolu, 4-completion, 5-deletion, 0-ukonceni : ');
            break;
        case 4:
            toComplete(toDoList);
            value = prompt('Vloz cislo pro vyvolani funkce: 1- vypis dnesnich ukolu, 2-zadani novych ukolu, 3- zobrazeni vsech ukolu, 4-completion, 5-deletion, 0-ukonceni : ');
            break;
        case 5:
            toDelete(toDoList);
            value = prompt('Vloz cislo pro vyvolani funkce: 1- vypis dnesnich ukolu, 2-zadani novych ukolu, 3- zobrazeni vsech ukolu, 4-completion, 5-deletion, 0-ukonceni :');
            break;
        default:
            console.log('Nebyla zadana spravna hodnota.');
            saveDataToFile(data);
            value = prompt('Vloz cislo pro vyvolani funkce: 1- vypis dnesnich ukolu, 2-zadani novych ukolu, 3- zobrazeni vsech ukolu, 4-completion, 5-deletion, 0-ukonceni : ');
    }
}
