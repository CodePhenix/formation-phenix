---
name: Fruit - IF / DOM manipulation JS
about: JS Exercise condition if/else and DOM manipulation
title: Fruit - IF / DOM manipulation JS
labels: ""
assignees:
---

## Objectif

[_lien vers l'exercice_](https://codephenix.fr/interface/exercices/new_exo_JS/exo-js-fruit.zip)

L'instruction `if…else` exécute une instruction si une condition donnée est équivalente à vrai. Si la condition est équivalente à faux, ce sera l'instruction de la clause optionnelle `else` qui sera exécutée.

Via l'utilisation du `if`, nous allons donc exécuter une instruction si la condition est remplie (_exemple ::_ je définis ma condition, qui est la suivante : si le mot tapé dans la barre de recherche d'un utilisateur est `bleu`, alors mon instruction sera de donner un `background-color` bleu au body de ma page).

Pour apprendre à utiliser le `if…else`, nous allons manipuler le DOM via notre fichier `script.js`, (Document Object Model) qui est la représentation du fichier HTML par le navigateur : en récupérant une donnée remplie par l'utilisateur sur notre page web, la conséquence/instruction de notre `if` sera d'afficher visuellement une différence sur la page.

L'**objectif** sera de réaliser un affichage conditionnel en changeant la couleur de fond du body et en affichant un texte personnalisé, selon les réponses de l'utilisateur qui répondra à la question : "Quel est votre fruit préféré ?"

## Instructions

TOUT ECRIRE DANS LE FICHIER `script.js` en suivant les étapes.

Pour chaque étape, coder sous les indications `========== DEBUT DE L'ETAPE [...] ==========` et s'arrêter lorsqu'il est indiqué `========== FIN DE L'ETAPE [...] ==========`.

### Etape 1 : Sélectionner les éléments HTML

Il nous faut les éléments suivants (allez vérifier dans le fichier HTML !) :

- L'input de type texte pour récupérer la réponse à la question
- Le bouton "Valider"
- Le paragraphe prévu pour afficher le texte personnalisé (la réponse)
- Le bouton "Changer de thème"
  > Astuce : utilisez une méthode JavaScript commençant par query... et finissant par ...tor

### Etape 2 : Ajouter un écouteur d’événement sur le clic du bouton "Valider"

Quand on clique dessus, on doit :

- récupérer la valeur du champ texte via la déclaration d'une nouvelle constante
  > Astuce : utiliser la propriété `.value`
- convertir cette valeur en minuscules avec la méthode .toLowerCase() (pour être sûr d'avoir le bon texte à comparer ensuite) via la déclaration d'une autre constante

> Conseil : Bien sûr, adaptez le nom des constantes pour qu'elles soient compréhensibles facilement !

### Etape 3 : Vérifier le contenu de la réponse et agir en conséquence

Utilisation du if (la condition qui suit doit être entre parenthèses) :

- si la réponse (ma constante dernière constante déclarée, celle qui capte la réponse de l'utilisateur convertie en minuscule) inclus le mot "pomme" (utilisez soit la méthode `includes()` soit l'opérateur `===` ), alors conséquence (ouvrez les accolades)
- afficher un message adapté (ex : "Votre fruit préféré est la pomme, excellent choix" ou encore : "Vous avez choisi la pomme, le fruit des bretons, kenavo !", comme vous voulez), en sélectionnant la constante représentant le paragraphe prévu pour afficher le texte personnalisé (la réponse), et lui donner un nouveau texte...
  > Astuce : la propriété JS commence par text... et finit par ...tent
- fin de la conséquence/instruction, début du else if pour une autre condition : refaites le même procédé pour les fruits suivants : "fraise", "poire", "banane", "ananas" (à chaque fois, personnalisez le message de la réponse)
- si le champ est vide, afficher un message spécifique (ex : "Vous n'avez pas de fruit préféré ?"
  > Astuce : un champ vide peut s'écrire `""`
- sinon (donc juste else, pas de else if, car il n'y a pas de condition), afficher un message par défaut (ex : "Je ne connais pas le nom de ce fruit")

### Etape 4 : Ajouter un écouteur d’événement sur le bouton "Changer de thème"

Quand on clique dessus, on doit :

- ajouter OU retirer la classe "dark" sur document.body
  Cela permet de basculer entre le thème clair et le thème sombre (quelle chance, la classe dark est déjà prévue pour le body dans le fichier CSS, allez y faire un tour !)

### Etape 5 Bonus : Afficher un fond différent au body pour chaque fruit

Là, il va falloir retourner dans la partie codée pendant les étapes 2 et 3 :

- dans l'écouteur d'évènement du bouton Valider, avant les if, enlever les classes "pomme", "fraise", "poire", "banane", et "ananas" au document.body
- dans chaque condition du if/else...if, ajouter la classe correspondant au fruit renseignée par l'utilisateur au body (ça tombe bien, toutes les classes dont le nom est égal à ces fruits ont déjà des propriétés css affiliées au body, et même au body en mode dark)

> _exemple_ : si la réponse inclus le mot "pomme", alors non seulement nous allons afficher du texte personnalisé pour cette réponse, mais nous allons aussi ajouter la classe "pomme" à mon document.body

## Cours associés

I - 3/ JS - II - 1/ Dynamisme JS

## Definition of Done:

- [ ] Toutes les étapes du fichier JS sont terminées.
- [ ] J'obtiens bien une réponse personnalisée selon mes conditions lorsque je recherche un des fruits nommés plus haut dans la barre de recherche.
- [ ] Je peux changer ma page de thème clair à thème sombre.

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

Etre développeur face à un problème, c'est comme mener une enquête, il faut aller inspecter ! Alors n'hésitez pas à utiliser la console du navigateur pour chercher la ligne du fichier JS qui pose problème.

**Courage !**
