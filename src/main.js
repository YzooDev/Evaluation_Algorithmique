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


//! EXERCICE 2

//TODO fonction calculerPrixTTC(prixHT, tauxTVA)

function calculerPrixTTC(prixHT, tauxTVA) {
    if (prixHT > 0, tauxTVA > 0) {
        return prixTTC = prixHT + (prixHT * tauxTVA / 100)
    }
};

let prixTTC = 0;

console.log(calculerPrixTTC(10,2));

//TODO Algorithme principal

let buttonCalcul = document.querySelector('button');
buttonCalcul.addEventListener("click", () => {
    const inputPrixHT = document.getElementById('prixHT');
    const inputTauxTVA = document.getElementById('tauxTVA');
    let result = document.getElementById('result');
    const prixHT = inputPrixHT.value;
    const tauxTVA = inputTauxTVA.value;
    if (prixHT > 0 && tauxTVA > 0 && tauxTVA < 100) {
        result.innerText = ` ${calculerPrixTTC(parseInt(prixHT), parseInt(tauxTVA))}`;
        console.log(calculerPrixTTC(parseInt(prixHT), parseInt(tauxTVA)));
    } else {
        result.innerText = ' Veuillez saisir un prix HT et un taux de TVA valide';
    };
});
// console.log(calculerPrixTTC(inputPrixHT.value, inputTauxTVA.value));


//! EXERCICE 3

//TODO 1. Affichage

const notes = [ 
        [12, 15, 10, 14],
        [8, 11, 9, 13],
        [16, 18, 17, 19]
    ]

let note = 0;

for (let i = 0; i < notes.length; i++) {
    note = notes[i][0];
    for (let j = 1; j < notes[i].length; j++) {
           note = `${note}, ${notes[i][j]}` 
    }
    console.log("Elève " + (i + 1) + " : " + note);
}

//TODO 2. Fonction de calcul


function calculerMoyenneEleve(tableau, numeroEleve) {
    let sommeNotes = 0;
    let nombreNotes = 0;
    for (let j = 0; j < tableau.length; j++) {
        nombreNotes = nombreNotes + 1;
        sommeNotes = sommeNotes + tableau[j];
    }
    let moyenneEleve = sommeNotes / nombreNotes;
    if (moyenneEleve >= 0 && moyenneEleve <= 20) {
        return Math.round(moyenneEleve *100) / 100;
    } else {
        return 'Erreur : Notes invalides'
    }
}

console.log(calculerMoyenneEleve(notes[1], 1));

//TODO 3. Utilisation

// Afficher la moyenne de chaque élève

console.log("La moyenne de l'élève 1 est de " + calculerMoyenneEleve(notes[0], 0));
console.log("La moyenne de l'élève 2 est de " + calculerMoyenneEleve(notes[1], 1));
console.log("La moyenne de l'élève 3 est de " + calculerMoyenneEleve(notes[2], 2));

// Identifier et afficher la meilleure moyenne

let meilleureMoyenne = 0;
let numeroEleve = 0;

for (let i = 0; i < notes.length; i++) {
    if (calculerMoyenneEleve(notes[i], i) > meilleureMoyenne) {
        meilleureMoyenne = calculerMoyenneEleve(notes[i], i)
        numeroEleve = i + 1;
    }
};

console.log(`La meilleure moyenne de la classe est de ${meilleureMoyenne} obtenue par l'élève ${numeroEleve}`);


//! EXERCICE 4

//TODO Partie 1 : Écrire l'algorithme complet du tri à bulles (bubble sort)

const tableEx4 = [61, 34, 25, 12, 22, 11, 90];

for(let i = 0; i < tableEx4.length - 1; i++) {
    let tri = true;
    for(let j = 0; j < tableEx4.length - 1 - i; j++) {
        if(tableEx4[j] > tableEx4[j+1]) {
            let temp = tableEx4[j];
            tableEx4[j] = tableEx4[j+1];
            tableEx4[j+1] = temp;
            tri = false;
        }
    }
    if(tri) {
        break;
    }
}
console.log(tableEx4);

