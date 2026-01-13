---
name: JS quiz
about: JS quiz, JSON manipulation, fetch, time manipulation
title: JS quiz
labels: ""
assignees:
---

## Objectif

[_lien vers l'exercice_](https://codephenix.fr/interface/exercices/new_exo_JS/exo-js-quiz.zip)

Aujourd'hui, l'objectif va être de réaliser un quiz interactif : selon les réponses de l'utiilisateur derrière son écran, il faudra les garder en mémoire pour afficher le score final à la fin du quiz.

Pour ça, on a déjà tout prévu dans un fichier **JSON** contenant les questions, leurs réponses, et si les réponses sont justes ou fausses (vous pouvez déjà aller regarder comment est stockée la donnée dans ce fichier, intitulé `quiz.json`).

Tout ce qu'il reste à faire, c'est aller chercher ces questions et leurs réponses avec la fonction native **`fetch`**, les afficher dans le DOM, écouter les clics sur les réponses et stocker les réponses, bonnes ou mauvaises, pour afficher le résultat final à la fin du quiz...

*Facile à dire.*

Suivez les instructions pas à pas, ça va le faire !

**N'oubliez pas de vérifier en permanence dans votre navigateur quand vous apportez des modifications. L'étape bonus 7 est assez complexe, vous n'êtes pas obligés de la terminer maintenant !**

## Instructions

**NE PAS TOUCHER AU FICHIER `index.html` NI A `style.css`, CODER SEULEMENT DANS `script.js` !**

Chacune des étapes est définie plus bas, mais tout d'abord, un point sur JSON et sur le fetch.

JSON signifie JavaScript Object Notation, c’est un format de données, pas un langage de programmation. Il sert à représenter et échanger des données (souvent entre un serveur et une application).

Exemple de JSON :

```json
{
  "name": "John",
  "age": 25,
  "isDev": true,
  "languages": ["JavaScript", "Python"]
}
```

*Et fetch alors ?*

fetch est une fonction JavaScript intégrée au navigateur ; elle permet de faire des requêtes HTTP : GET (lire des données), POST (envoyer des données), PUT / PATCH (modifier), DELETE (supprimer).

*Mais alors, fetch : backend ou frontend ?*

Les deux ! En frontend, on peut aller récupérer une liste d’utilisateurs, charger des produits, envoyer un formulaire, appeler une API météo... Ces données sont souvent sur un autre serveur, et fetch sert de messager.

*Donc il va falloir un serveur ?*

Oui, **sans serveur, pas de fetch** : fetch ne lit pas le disque, il parle uniquement HTTP / HTTPS, donc même pour intéragir avec un fichier local, il faut passer par un serveur. L'avantage, c'est que même sans internet, avec l'extension **LiveServerCode** de VSCode, on peut lancer un mini serveur local, qui permet d'exploiter `fetch` (sauf pour accéder à une API externe où il faudra forcément internet, mais ça ne nous intéresse pas ici).

Et ça tombe bien, car on a un fichier `quiz.json` qui contient des données, que nous aimerions aller récupérer pour les exploiter dans notre fichier `script.js` ; on va pouvoir le faire avec `fetch` !

Avec cette syntaxe : `fetch("quiz.json")`, le navigateur fait une requête HTTP GET (pour aller chercher les données), vers un serveur (notre serveur local en l'occurence), qui renvoie les données du fichier *quiz.json*.

>Si jamais cela peut vous intéresser, vous pourrez par exemple par la suite aller `fetch` tout un fichier html (par exemple un header ou un footer) pour l'intégrer à vos multiples pages web directement sans avoir à le copier coller !

*Par quoi on commence alors ?*

Déjà, on peut commencer par ouvrir notre fichier `index.html` dans le navigateur. Mais attention ; cette fois, on ne va pas le lancer en l'ouvrant dans le navigateur en cliquant dessus, comme ça : *file:///C:/monProjet/index.html*, mais en faisant un clic droit dans VSCode sur le fichier html, puis *Open with Live Server* ; cela nous donne par exemple : *http://127.0.0.1:5500/monProjet/index.html* ou *http://localhost:5500/monProjet/index.html*.

`127.0.0.1` est l’adresse IP locale de votre propre ordinateur, on l'appelle couramment `localhost`, et *5500* ici correspond au port par défaut qui est utilisé par VSCode, c'est le service sur notre ordinateur que l'on souhaite atteindre: l’adresse IP dit où, le port dit quelle application ou service.

Pour la suite, suivez les étapes :

### Etape 1

Créer les constantes qui viennent récupérer tous les éléments du DOM

>Coder sous chaque commentaire comportant les deux étoiles comme ceci : `**`

### Etape 2

Afficher correctement la question actuelle à l'écran

>Coder sous chaque commentaire comportant les deux étoiles comme ceci : `**`


### Etape 3

Afficher correctement les réponses possibles à la question actuelle à l'écran

>Coder sous chaque commentaire comportant les deux étoiles comme ceci : `**`

### Etape 4

Afficher le résultat final du quiz

>Coder sous chaque commentaire comportant les deux étoiles comme ceci : `**`

### Etape 5 Bonus : Ajouter l'indicateur du nombre de questions

<details>
<summary>Un peu d'aide ?</summary>

- Aller chercher l'élément qui affichera le numéro de la question (présent dans `index.html`) et définissez le dans une constante,
- Au début de la fonction `showQuestion()`, lui enlever la classe 'hidden',
- Son texte doit contenir le currentIndex + 1 (car currentIndex commence à 0), suivi de / ou -, puis de la longueur du tableau des questions.

</details>

### Etape 6 Bonus : Ajouter la possibilité de relancer le quiz lors de l'affichage des résultats

<details>
<summary>Un peu d'aide ?</summary>

- Aller chercher le bouton pour recommencer le quiz (présent dans `index.html`) et définissez le dans une constante.

- Lui enlever la classe 'hidden'.

- Lorsque l'on clique dessus, lancer la fonction restartQuiz().

- Définissez le fonction restartQuiz() : 

    - la variable 'currentIndex' doit revenir à 0,
    - le tableau 'userAnswers' doit redevenir un tableau vide,
    - 'selectedAnswer' et 'selectedBtn' doivent revenir à une valeur nulle,
    - le conteneur des résultats détaillés doit être vidé,
    - la div qui affiche le score final doit être vidée,
    - la section qui affiche le résultat final du quiz doit être cachée,
    - la div principale qui est le conteneur de tout le quiz doit être visible,
    - lancer la fonction showQuestion()

</details>

### Etape 7 Bonus : Ajouter un compteur de temps pour chaque question

<details>
<summary>Un peu d'aide ?</summary>

On va commencer par définir de nouvelles variables : 
```js
let time = 20;                  // Temps imparti par question (en secondes)
let timerInterval = null;       // Référence à l'intervalle du timer pour pouvoir l'arrêter
```

Ainsi que de nouvelles constantes basées sur des éléments présents dans le DOM : 
```js
const progressBar = document.querySelector("#progress-bar");            // Conteneur de la barre de progression
const progressFill = document.querySelector("#progress-fill");          // Barre de progression
const circleContainer = document.querySelector("#timer-circle");        // Conteneur du timer
const circle = document.querySelector("#timer-circle circle");          // Cercle du timer (SVG)
const circleLength = 188;                                               // Longueur du cercle pour l'animation
circle.style.strokeDasharray = circleLength;                            // Initialise l'animation du cercle
const timeElem = document.querySelector("#time");                       // Élément affichant le temps restant
```

Ensuite, il va falloir créer une fonction (par exemple `startTimer()`), qui va permettre de :

 - s'assurer qu'aucun timer précédent grâce à la fonction native `clearInterval()` (lui donner en argument la variable `timerInterval`)
 - réinitialiser le temps à 20 secondes (par exemple, ce peut être plus ou moins par question),
 - afficher le temps initial,
 - réinitialiser l'animation du cercle (indiquant le temps qui passe),
 - créer un intervalle qui décrémente le temps toutes les secondes : la variable `timerInterval` doit être égal à la fonction native setInterval(), qui s'ouvre et :
    - diminuer de -1 la variable `time`,
    - mettre à jour l'affichage du temps, 
    - mettre à jour l'animation du cercle avec la formule `circle.style.strokeDashoffset = circleLength - (time / 20) * circleLength`
    - si la variable time <= 0 (si le temps est écoulé) :
        - stoper le timer,
        - appeller la fonction `onTimeout()`, fonction de timeout (passage auto à la question suivante)
 - fermeture de la fonction setInterval(), et précision du nombre de secondes (1 en l'occurence, soit 1000 millisecondes).

Au début de la fonction `showQuestion()`, afficher la barre de progression.

Placer cette ligne : `startTimer(() => autoNext());` à la fin de la fonction `showQuestion()`, et ajouter la fonction suivante en dehors des fonctions : 

```js
function autoNext() {
    if (!selectedAnswer) selectedAnswer = null;   // Si aucune réponse n'est sélectionnée, reste null
    goNextQuestion();                             // Passe à la question suivante
}
```

Dans la fonction `goNextQuestion()`, il faut : 
- stoper le timer actuel avec la fonction `clearInterval()`,
- afficher la barre de progression du temps
- au moment du `if (current < questions.length)` :
    - si c'est le cas, ajouter ces lignes : 
    ```js
    const progress = (current / questions.length) * 100;    // Calcule la progression
    progressFill.style.width = progress + "%";              // Met à jour la barre de progression`
    ```
    - sinon, ajouter cette ligne : `progressFill.style.width = "100%"; `
    - plutôt que de lancer directement la fonction `showResult()`, on peut décider de la lancer après un léger délai, grâce à `setTimeout()`.

</details>

## Cours associés

I - 3/ JS

II - 1/ Dynamisme JS

III - 2/ Gestion du temps

## Definition of Done:

- [ ] Etape 1 terminée !
- [ ] Etape 2 terminée !
- [ ] Etape 3 terminée !
- [ ] Etape 4 terminée !
- [ ] Etape 5 Bonus terminée !
- [ ] Etape 6 Bonus terminée !
- [ ] Etape 7 Bonus terminée !

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