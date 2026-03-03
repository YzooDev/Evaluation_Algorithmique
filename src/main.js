//! EXERCICE 1

//TODO 1. Crée un tableau contenant les nombres : [3, 15, 7, 22, 9, 18, 4, 12] 

const table = [3, 15, 7, 22, 9, 18, 4, 12];

//TODO 2. Affiche uniquement les nombres supérieurs à 10
// Avec la boucle for :
for (let i = 0; i < table.length; i++) {
    if (table[i] > 10) {
        console.log(table[i])
    }  
};

// Avec la boucle for each :
table.forEach(element => {
    if (element > 10) {
        console.log(element)
    }
});

//TODO 3. Compte et affiche combien de nombres sont supérieurs à 10 

let counter = 0;

// Avec la boucle for :
for (let i = 0; i < table.length; i++) {
    if (table[i] > 10) {
        counter++;
    }  
}
console.log(counter);

// // Avec la boucle for each :
// table.forEach(element => {
//     if (element>10) {
//         counter++;
//     }
// });
// console.log(counter);