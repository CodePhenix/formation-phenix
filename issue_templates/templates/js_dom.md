---
name: Box - DOM manipulation JS
about: Exercise DOM JS manipulation
title: Box - DOM manipulation JS
labels: ""
assignees:
---

## Objectif

Le DOM (Document Object Model) est la représentation du fichier HTML par le navigateur.

Quand le navigateur lit ce fichier, il le transforme en une structure d’objets : cet arbre peut être modifié en JavaScript.

Nous allons donc manipuler le DOM via notre fichier `script.js` pour apprendre à intéragir avec ses différents éléments.

## Instructions

Télécharger le dossier zippé de cet exercice ici : {{ codephenix_url }}/cours/exercices/exo-js-dom.zip

Dézipper le dossier et le placer dans un dossier 'exercices'.

TOUT ECRIRE DANS LE FICHIER `script.js` (sauf pour le bonus où il faudra aussi ajouter quelque chose dans le fichier `style.css`) en suivant les étapes.

Pour chaque étape, coder sous les indications `========== DEBUT DE L'ETAPE [...] ==========` et s'arrêter lorsqu'il est indiqué `========== FIN DE L'ETAPE [...] ==========`.

### Etape 1 : Sélectionner les éléments HTML

Utiliser querySelector pour sélectionner le bouton 'toggle-btn' et la div 'box', en leur assignant des constantes.

### Etape 2 : Ajouter un écouteur d’événement au bouton 'toggle-btn'

Quand on clique dessus, il doit :
- ajouter OU retirer la classe 'color-change' à la boîte
>Astuce : Utiliser classList.toggle

### Etape 3 : Sélectionner les autres boutons

Utiliser querySelector pour sélectionner les boutons 'move-btn-left' et 'move-btn-right', en leur assignant des constantes.

### Etape 4 : Ajouter un autre écouteur d’événement pour les boutons 'move-btn-left' et 'move-btn-right'

Quand on clique sur le bouton gauche, il doit :
- supprimer la classe 'move-right'
- ajouter la classe 'move-left'
- changer le texte dans la boîte pour afficher "Déplacée à gauche"

Quand on clique sur le bouton droit, il doit :
- supprimer la classe 'move-left'
- ajouter la classe 'move-right'
- changer le texte dans la boîte pour afficher "Déplacée à droite"

### Etape 5 Bonus : Ajouter un écouteur d’événement au bouton secret

Commencer par sélectionner le bouton secret

Pour qu'il apparaisse, utiliser la formule : `nom-de-la-constante-du-bouton-secret.style.display = "block"`

Créer une classe dans le fichier CSS, la nommer comme vous préférez

Quand on clique sur le bouton secret :
- la boîte doit revenir au centre
- on doit pouvoir ajouter OU retirer à la boîte la classe que vous avez créé dans le fichier CSS
- le texte de la boîte est changé en "Transformation !"

Dans votre fichier CSS, faites-en sorte que cette classe arrondissent les angles de la boîte...

## Cours associés

- I - 3/ JS : {{ codephenix_url }}/cours/index.php#js-initiation
- II - 2/ Dynamisme JS : {{ codephenix_url }}/cours/index.php#js-initiation2

## Definition of Done:

- [ ] Toutes les étapes du fichier JS sont terminées.
- [ ] Tous les boutons fonctionnent une fois qu'on clique dessus.

{% include 'common/CODE_QUALITY.md' %}

{% include 'common/ATTITUDE.md' %}

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._

- [ ] ...

### Le mot de la fin ?

C'est visuel, donc si ça marche, ça se voit, mais n'oubliez pas d'aller dans la console du navigateur pour voir si (et où) vous avez des erreurs !

**Courage !**