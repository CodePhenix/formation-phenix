// Récuperer les éléments HTML
let monTexte = document.querySelector("#monTexte");
let monBouton = document.querySelector("#monBouton");

// Fonctions pour charger la couleur du texte
function changerCouleur() {
    monTexte.style.color = "yellow";
}
// Ajouter l'écouteur d'évènement
monBouton.addEventListener("click",changerCouleur);

//ajout de regex
const adresseRegex = /^[0-9]{1,5}\s+[a-zA-ZÀ-ÿ\s\-']+(?:rue|avenue|boulevard|place|route|chemin|villa|impasse|cour|quai|allée|esplanade|large|bou|rd|route)\s+[0-9]{5}\s+[a-zA-ZÀ-ÿ\s\-']+$/i;


