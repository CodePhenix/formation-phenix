---
name: Pizza - Object / Array DOM JS
about: JS Exercise Object Array DOM manipulation
title: Pizza - Object / Array DOM JS
labels: ""
assignees:
---

## Objectif

[_lien vers l'exercice_](https://codephenix.fr/interface/exercices/new_exo_JS/exo-object-array-pizza.zip)

Dans cet exercice, nous allons manipuler différents types de données en JavaScript, pour les réinjecter dans le DOM : les objets et les tableaux (dont les tableaux d'objets).

Un objet peut comporter plusieurs propriétés, qui peuvent être des string, des number, des boolean... Voici sa syntaxe :

```js
const person = {
  firstname: "Mike",
  age: 23,
  password: "1234abc",
  isConnected: true,
};
```

Pour aller chercher la valeur d'une des propriétés de l'objet, on écrit `nomDeLObjet.nomDeLaPropriété`

Un tableau est encore un autre type de données en JavaScript, qui peut lui même être composé de différents types de données ; des string, des number, des boolean, des objets... Voici sa syntaxe :

```js
const fruitsArray = ["pomme", "banane", "fraise"];
```

ou encore :

```js
const grades = [14, 9, 12, 16];
```

ou même un tableau d'objets :

```js
const peopleArray = [
  { firstname: "Mike", age: 23, password: "1234abc" },
  { firstname: "Jane", age: 54, password: "Ab@Jc48Ff" },
  { firstname: "John", age: 7, password: "@j0hnY" },
  { firstname: "Bill", age: 48, password: "b!iLL" },
  { firstname: "Fred", age: 65, password: "freddy65" },
  { firstname: "Jill", age: 34, password: "593351" },
];
```

Dans les tableaux, chaque valeur a un index, c'est à dire son emplacement dans le tableau ; on commence par 0, puis 1, puis 2, etc

Pour reproduire un même fonctionnement pour chacun des éléments du tableau, on peut utiliser une boucle (for, for...in, for...of, forEach, while, while...in)

L'**objectif** sera de créer une page gérant différentes parties d'une pizzeria, l'affichage d'une pizza (objet), puis d'un tableau de prix (tableau de number) et enfin d'un menu avec un filtre sur les calzones (tableau d'objets).

## Instructions

TOUT ECRIRE DANS LE FICHIER `script.js` en suivant les étapes.

Pour chaque étape, coder sous les indications `========== DEBUT DE L'ETAPE [...] ==========` et s'arrêter lorsqu'il est indiqué `========== FIN DE L'ETAPE [...] ==========`.

### Etape 1 : Sélectionner la div 'pizza-objet'

> Astuce : utilisez une méthode JavaScript commençant par query... et finissant par ...tor

### Etape 2 : Afficher dans cette div le texte contenant : `nomdelapizza : descriptiondelapizza — prixdelapizza €`

**Pour cela, il faudra uniquement utiliser les valeurs des propriétés de l'objet onePizza**

> Astuce : la propriété JS commence par text... et finit par ...tent

### Etape 3 : Sélectionner la div 'prix-array'

Cette div va contenir les prix des pizzas.

> Astuce : utilisez une méthode JavaScript commençant par query... et finissant par ...tor

### Etape 4 : Boucle sur le tableau des prix

Pour chaque prix du tableau, on doit :

- créer un <p> et le nommer avec une constante
- ajouter du texte à cette constante : le prix 'price' suivi de "€"
- ajouter cette constante/paragraphe dans la div 'prix-array'

### Etape 5 : Sélectionner le paragraphe 'prix-moyen'

> Astuce : utilisez une méthode JavaScript commençant par query... et finissant par ...tor

### Etape 6 : Afficher le prix moyen calculé 'averagePrice' dans le paragraphe 'prix-moyen'

> Astuce : la propriété JS commence par text... et finit par ...tent

### Etape 7 : Créer une <div> et la nommer avec une constante 'card'

> Astuce : utilisez une méthode JavaScript commençant par crea... et finissant par ...ent

### Etape 8 : Ajouter la classe "pizza-card" à cette constante/div

> Astuce : ajouter se dit 'add' en anglais...

### Etape 9 : Condition

Si la pizza est une calzone, donc que sa propriété isCalzone est égale à 'true' → ajouter la classe "calzone" à cette constante/div.

### Etape 10 : Afficher la const/div 'card' dans le container 'menuPizzasContainer'

> Astuce : utilisez une méthode JavaScript commençant par app... et finissant par ...ild

## Cours associés

I - 3/ JS - II - 1/ Dynamisme JS

## Definition of Done:

- [ ] Les étapes 1 et 2 sont terminées (objet).
- [ ] Les étapes 3 à 6 sont terminées (tableau de number).
- [ ] Les étapes 7 à 10 sont terminées (tableau d'objets).

## Code quality:

- [ ] JS: Le code est commenté si besoin
- [ ] JS: Pas d'erreur ni de logs inutiles dans la console
- [ ] JS: Les variables ont des noms respectables et porteurs de sens

## Bonnes pratiques de communication

Vous êtes en phase d'apprentissage et s'il est crucial que vous développiez votre autonomie en essayant et en cherchant par vous même il est tout de même courant pour un développeur de demander de l'aide.

Pour cela voici un petit florilège des phrases/choses à éviter:

- Dire "Ca marche pas" sans expliquer précisément ce qui ne marche pas
- "J'comprends pas" sans donner de contexte
- "... du coup j'ai tout supprimé et j'ai tout recommencé"
- "J'ai dit à l'ordi de le faire mais il ne le fait pas"
- Dire "JAVA" au lieu de "Javascript": ca n'a rien à voir !

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._

- [ ] ...

### Le mot de la fin ?

Pas d'étape bonus cette fois-ci, mais vous pouvez vous amuser à modifier le tableau d'objets de pizza, en créer de nouvelles, sans toucher au HTML, et magie : toutes vos pizzas seront bien belles avec le même visuel !

**Courage !**
