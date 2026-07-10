---
name: Exo Algo 1
about: Algorithm exercises 1
title: Exo Algo 1
labels: ""
assignees:
---

## Objectif

**Réaliser les 10 exercices d'algorithmique en JavaScript**, en recopiant et en complétant les exercices dans un fichier JS lié à une page HTML vide, qui sera lancée dans un navigateur.

Observez les résultats de vos exercices dans la console.

Tous les exercices **ne doivent pas** utiliser les méthodes des tableaux (array) en JS telles que :

- filter
- find
- map
- reduce
- flat
- max
- ...

## Enoncés
### Exercice 1: Somme des Éléments

**Énoncé** : Écrivez une fonction qui prend un tableau de nombres et renvoie la somme de tous les éléments.

```javascript

function sommeElements(tableau) {
    // Votre code ici
}

// Exemple d'utilisation
let tableauDeNombres = [1, 2, 3, 4, 5];
let resultat = sommeElements(tableauDeNombres);
console.log(resultat); // Affiche 15
```


### Exercice 2: Trouver le Maximum
**Énoncé** : Écrivez une fonction qui renvoie le plus grand nombre dans un tableau.

```javascript
function maxNombre(tableau) {
    // Votre code ici
}

// Exemple d'utilisation
let tableauDeNombres = [3, 7, 2, 5, 8, 4];
let resultat = maxNombre(tableauDeNombres);
console.log(resultat); // Affiche 8
```

### Exercice 3: Filtrer les Nombres Pairs

**Énoncé** : Écrivez une fonction qui prend un tableau et renvoie un nouveau tableau contenant seulement les nombres pairs.

```javascript
function filtrerPairs(tableau) {
    // Votre 
    
    // Exemple d'utilisation
let tableauDeNombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultat = filtrerPairs(tableauDeNombres);
console.log(resultat); // Affiche [2, 4, 6, 8, 10]code ici
}
```

*Aide : 9 % 4 = 1, car 9 = 2×4 + 1 / 9 % 3 = 0 / 12 % 10 = 2 car 12 = 10 × 1 + 2*
*Opération modulo : opération binaire qui associe, à deux entiers naturels, le reste de la division euclidienne (divisio entière) du premier par le second.*

### Exercice 4: Compte à Rebours
**Énoncé** : Utilisez une boucle pour créer un compte à rebours à partir d'un nombre donné.

```javascript
function compteARebours(num) {
    // Votre code ici
}

// Exemple d'utilisation
compteARebours(10); // Démarre le compte à rebours à partir de 10
```

### Exercice 5: Dupliquer les Éléments

**Énoncé** : Écrivez une fonction qui prend un tableau et renvoie un nouveau tableau où chaque élément est dupliqué.

```javascript
function dupliquerElements(arr) {
    // Votre code ici
}

// Exemple d'utilisation
let tableauOriginal = [1, 2, 3];
let tableauResultat = dupliquerElements(tableauOriginal);
console.log(tableauResultat); // Affiche [1, 1, 2, 2, 3, 3]
```


### Exercice 6: Trouver les Éléments Communs

**Énoncé** : Écrivez une fonction qui prend deux tableaux et renvoie un tableau des éléments communs.

```javascript
function elementsCommuns(tableau1, tableau2) {
    // Votre code ici
}

// Exemple d'utilisation
let tableauA = [1, 2, 3, 4, 5];
let tableauB = [3, 4, 5, 6, 7];
let resultat = elementsCommuns(tableauA, tableauB);
console.log(resultat); // Affiche [3, 4, 5]
```

### Exercice 7: Rotation de Tableau

**Énoncé** : Écrivez une fonction qui effectue une rotation à droite d'un tableau.

```javascript
function rotationDroite(tableau) {
    // Votre code ici
}

// Exemple d'utilisation
let tableauOriginal = [1, 2, 3, 4, 5];
let tableauApresRotation = rotationDroite(tableauOriginal);
console.log(tableauApresRotation); // Affiche [5, 1, 2, 3, 4]
```

### Exercice 8: Vérifier l'Uniformité

**Énoncé** : Écrivez une fonction qui vérifie si tous les éléments d'un tableau sont identiques.

```javascript
function estUniforme(tableau) {
    // Votre code ici
}

// Exemples d'utilisation
console.log(estUniforme([1, 1, 1, 1])); // Affiche true
console.log(estUniforme([1, 2, 1, 1])); // Affiche false
```

### Exercice 9: Aplatir un Tableau

**Énoncé** : Écrivez une fonction qui aplatit un tableau de tableaux en un seul tableau.

```javascript
function aplatir(tableauDeTableaux) {
    // Votre code ici
}

// Exemple d'utilisation
let tableauImbrique = [[1, 2, 3], [4, 5], [6]];
let tableauResultat = aplatir(tableauImbrique);
console.log(tableauResultat); // Affiche [1, 2, 3, 4, 5, 6]
```

### Exercice 10: Longueur Moyenne des Mots

**Énoncé** : Écrivez une fonction qui prend un tableau de mots et renvoie la longueur moyenne des mots.

```javascript
function longueurMoyenneMots(tableauDeMots) {
    // Votre code ici
}

// Exemple d'utilisation
let mots = ["chat", "chien", "oiseau", "poisson"];
let longueurMoyenne = longueurMoyenneMots(mots);
console.log(longueurMoyenne); // Affiche la longueur moyenne des mots
```

## Definition of Done:

- [ ] Exercice 1 à 5 terminés
- [ ] Exercice 6 à 10 terminés

{% include 'common/ATTITUDE.md' %}

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._

- [ ] ...