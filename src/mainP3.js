//! 1. Fonction afficherLivres(tableau)

//TODO Affiche tous les livres avec leur statut.

let livres = [ 
    ["1984", "Orwell", 1949, true], 
    ["Le Seigneur des Anneaux", "Tolkien", 1954, false], 
    ["Harry Potter", "Rowling", 1997, true], 
    ["Fondation", "Asimov", 1951, true] 
]

function afficherLivres(tableau) {
    console.log('=== Catalogue de la bibliothèque ===');
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i][3] === true) {
            console.log(i + 1 + ". " + tableau[i][0] + " par " + tableau[i][1] + " (" + tableau[i][2] + ") - Disponible");
        } else {
            console.log(i + 1 + ". " + tableau[i][0] + " par " + tableau[i][1] + " (" + tableau[i][2] + ") - Emprunté");
        }
    }
};

afficherLivres(livres);


//! 2. Fonction rechercherLivre(tableau, titre)

//TODO Cherche un livre par son titre (recherche séquentielle).

function rechercherLivre(tableau, titre) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i][0] === titre) {
            return i
        }
    }
    return -1;
};

console.log("Livre trouvé à la position " + rechercherLivre(livres, "Fondation"));


//! 3. Fonction emprunterLivre(tableau, position)

//TODO Gère l'emprunt d'un livre.

function emprunterLivre(tableau, position) {
    if (tableau[position]) {
        if (rechercherLivre(tableau, tableau[position][0]) != -1) {
            if (tableau[position][3]) {
                console.log("Emprunt réussi : " + tableau[position][0]);
                return tableau[position][3] = false;
            }
        return console.log("Ce livre est déjà emprunté");   
        }
    }
    return console.log("Livre non trouvé");
};

// emprunterLivre(livres, 3);


//! 4. Fonction trierParAnnee(tableau)

//TODO Trie les livres par année de publication (ordre croissant).

function trierParAnnee(tableau) {
    for (let i = 0; i < tableau.length - 1; i++) {
        let index = i;
        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j][2] < tableau[index][2]) {
                index = j
            }
        }
        if (index !== i) {
            let temp = tableau[index];
            tableau[index] = tableau[i];
            tableau[i] = temp
        }
    } 
};

trierParAnnee(livres);
afficherLivres(livres);


//! BONUS

//TODO Exécution sur la page

function afficherCatalogue(tableau) {
    let affichage = `       === Catalogue de la bibliothèque ===`;
    for (let i = 0; i < tableau.length; i++) {
        let dispo = 'Disponible';
        let temp = '';
        if (tableau[i][3] !== true) {
            dispo = 'Emprunté';
        }
        temp = temp + `
    ${i + 1}. ${tableau[i][0]} par ${tableau[i][1]} (${tableau[i][2]}) - ${dispo}`;
        affichage =`${affichage}
            ${temp}`;
    }
    return affichage
};

const catalogue = document.getElementById('catalogue');

catalogue.addEventListener('click', () => {
    const afficherLeCatalogue = document.getElementById('catalogueDiv');
    afficherLeCatalogue.innerText = afficherCatalogue(livres);
});

const rechercher = document.getElementById('rechercher');

rechercher.addEventListener('click', () => {
    const livreTrouve = document.getElementById('rechercherDiv');
    const titreLivre = document.getElementById('titre');
    // rechercherLivre(livres, titreLivre.value);
    if (rechercherLivre(livres, titreLivre.value) !== -1) {
        livreTrouve.innerText = `    Livre numéro ${rechercherLivre(livres, titreLivre.value) + 1}`
    } else {
        livreTrouve.innerText = '    Livre non trouvé'
    }
});

function emprunterLivreExe(tableau, position) {
    if (tableau[position - 1]) {
        if (rechercherLivre(tableau, tableau[position - 1][0]) != -1) {
            if (tableau[position - 1][3]) {
                console.log();
                return `    Emprunt réussi : ${tableau[position - 1][0]}`
            }
        return `    Ce livre est déjà emprunté`;   
        }
    }
    return false;
};

const emprunter = document.getElementById('emprunter');

emprunter.addEventListener('click', () => {
    const livreEmprunter = document.getElementById('emprunterDiv');
    const numeroLivre = document.getElementById('numeroLivre');
    if (emprunterLivreExe(livres, numeroLivre.value)) {
        livreEmprunter.innerText = emprunterLivreExe(livres, numeroLivre.value);
        livres[numeroLivre.value - 1][3] = false;
    } else {
    livreEmprunter.innerText = `    Livre non trouvé`;
    }       
})

function rendreLivreExe(tableau, position) {
    if (tableau[position - 1]) {
        if (rechercherLivre(tableau, tableau[position - 1][0]) != -1) {
            if (!tableau[position - 1][3]) {
                console.log();
                return `    Retour réussi : ${tableau[position - 1][0]}`
            }
        return `    Nous avons déjà ce livre`;   
        }
    }
    return false;
};

const rendre = document.getElementById('rendre');

rendre.addEventListener('click', () => {
    const livreEmprunter = document.getElementById('emprunterDiv');
    const numeroLivre = document.getElementById('numeroLivre');
    if (rendreLivreExe(livres, numeroLivre.value)) {
        livreEmprunter.innerText = rendreLivreExe(livres, numeroLivre.value);
        livres[numeroLivre.value - 1][3] = true;
    } else {
    livreEmprunter.innerText = `    Livre que nous ne faisons pas`;
    }       
})
