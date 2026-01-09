---
name: Dice Roller - DOM manipulation JS
about: Exercise Dice Roller - DOM JS manipulation
title: Dice Roller
labels: ""
assignees:
---

## Objectif

[_lien vers l'exercice_](https://codephenix.fr/interface/exercices/new_exo_JS/exo-dice-roller.zip)

Nous allons créer un programme pour lancer des dés, de manière aléatoire.

## Instructions

TOUT ECRIRE DANS LE FICHIER `script.js`.

**Attention**, dans le fichier JS, les étapes ne se suivent pas forcément dans l'ordre de haut en bas ; **bien lire les instructions ci-dessous !**

## Etape 1 : Commençons par créer un dé

On va créer un dé en JavaScript :
- Dans `script.js`, créons tout d'abord une `div` (Astuce : la méthode permettant ça commence par *crea* et finit par *ment*) que l'on place dans une constante.
- On va ajouter une classe `dice` à cette constante (Astuce : utiliser la méthode *add* d'une certaine propriété commençant par *class* et finissant par *ist*...) :
  - _Ca tombe bien_ ! Tous les styles (y compris `.dice`) sont déjà _définis_ dans `style.css` pour dimensionner et appliquer une image d'arrière-plan à l'élément qui porte cette classe.
  - _Tiens d'ailleurs_ ! L'image appliquée en arrière plan est ce qu'on appelle un **sprite** : c'est une image comportant en fait plusieurs images. On n'affichera qu'une partie de l'image en arrière plan. Et jouant sur la position de l'arrière-plan, on affichera telle ou telle portion de l'image (en partie 2). Les sprites, c'est très pratique pour ne charger qu'une seule image au lieu de plusieurs et améliorer ainsi l'expérience utilisateur.
- On n'a plus qu'à insérer la constante de la `div` créée dans le DOM en JavaScript. Pour ça, il faudrait l'ajouter dans le container qui possède l'id `player` :
  - il faut aller chercher ce container,
  - l'afficher en lui imposant une nouvelle classe (la classe ne sera plus 'hidden' mais '**board**' : pour cela, on n'utilise non pas la propriété classList (avec les méthodes add, contains, remove ou toggle) mais la propriété `className` qui remplace toutes les classes ajoutées jusque là)
  - placer la div du dé créée dans la div du container 'player' à l'aide de la méthode commençant par *app* et finissant par *ild*.

<details>
<summary>Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça :</summary>

![Etape 1](screenshots/etape1.png)

</details>

## Etape 2 : Tirer un nombre aléatoire

Bon c'est bien beau tout ça mais ça ne nous tire que des 1 pour le moment, on ne risque pas de gagner...

- En haut de `script.js`, on va créer une fonction (qu'on appelle comme on veut, `generateRandomNumber()`, `rollRandomDiceNumber()`, peu importe) qui aura entre parenthèses 2 paramètres (on appelle ça des **arguments**), `min` et `max`, séparés par une virgule.
- Dans cette fonction, on va utiliser une formule pour tirer un nombre aléatoire entre 1 et 6 :
`Math.floor(Math.random() * (max - min + 1)) + min;`.
> Math.random() renvoie un nombre flottant (nombre à virgules) aléatoire compris entre 0 inclus et 1 exclu.

> Math.random() * (max - min + 1) multiplie ce nombre aléatoire par la taille de l’intervalle (entre min et max, qui seront des variables que nous allons définir).

> (max - min + 1) correspond au nombre total d’entiers possibles entre min et max inclus :
  - Exemple : si min = 2 et max = 5 → (5 - 2 + 1) = 4
  - Cela nous donne `Math.random() * 4`
  - Math.random() produit un nombre dans `[0, 1[`, donc si on multiplie par 4 → `[0 * 4, 1 * 4[ = [0, 4[`
  - Donc on obtient un nombre aléatoire flottant entre 0 (inclus) et 4 (exclus)

> Math.floor(...) arrondit à l’entier inférieur :
  - Exemple avec (max = 5, min = 2) : Math.random() * 4 peut donner 0.7 → Math.floor(0.7) = 0
  - On obtient donc un entier en nombre ici.

> + min : On décale l’intervalle pour qu’il commence à min. Exemple :
  - Math.floor(Math.random() * 4) + 2 peut donner 0+2=2, 1+2=3, 2+2=4, 3+2=5
  - Résultat : un entier aléatoire compris entre min et max inclus (dans l'exemple, soit 2, 3, 4 ou 5).

**Conclusion** : `Math.floor(Math.random() * (max - min + 1)) + min` renvoie un entier aléatoire inclusif, c’est-à-dire dans [min, max] : Très pratique pour : lancer un dé : Math.floor(Math.random() * 6) + 1 → 1 à 6 / ou tirer un nombre aléatoire entre 10 et 20 : Math.floor(Math.random() * 11) + 10

On va donc définir une constante qui sera égale à la formule définie plus haut (adaptée à un dé à 6 faces : pour l'instant, laisser `max` et `min`).

- On retourne cette constante avec `return` : faire `return nomDeLaConstante` va permettre une fois qu'on appelle la fonction qu'on a déclaré, de recevoir en retour un nombre aléatoire compris entre min et max (qu'il va donc falloir donner à la fonction au moment de l'appeler).

- Fin de la fonction.

- On appelle cette fonction au sein d'une constante (pour l'exemple, diceNumber, qui sera égale à la fonction déclarée plus haut, avec entre parenthèses **1** et **6**, séparés d'une virgule = c'est ici qu'on envoie à la fonction notre indication de *min* et *max*).

- On créé une autre constante (ici, dicePosition), qui sera égale à `(diceNumber - 1) * 100` : si je tombe sur 5, cette constante va me renvoyer 400 ; si je tombe sur 3, elle me renvoie 200.

- On va se servir du nombre obtenu dans dicePosition pour modifier la position de l'arrière plan du dé :
  - Sous la création de la div de l'étape 1, on va ajouter à cette div (appelée ici 'diceDiv') un nouveau style (qui sera le visuel de la face du dé) : `diceDiv.style.backgroundPosition = "-" + dicePosition + "px 0";`

>Pour info chaque face de dé fait exactement 100px de large sur le sprite de l'image des dés. Notre image de base est l'image du dé à 1 si on ne déplace par le `background-position` donc si le dé donne le résultat de 3, on doit déplacer l'image contenant toutes les faces du dé de -200px (de 200px vers la gauche). Si le dé donne 6, on déplace l'image de -500px, etc. (c'est pour ça qu'on a gardé en mémoire la constante dicePosition).

<details>
<summary>Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça :</summary>

3 ou un autre chiffre compris entre 1 et 6, de manière aléatoire : rafraichir la page plusieurs fois pour vérifier

![Etape 2](screenshots/etape2.png)

</details>

## Etape 3 : Lancer plusieurs dés

Chouette on y est presque ! Maintenant, il faudrait lancer plusieurs dés.

- Après la fonction tout en haut `generateRandomNumber()` (ou `rollRandomDiceNumber()` ou autre), il faudrait définir une variable qui sera le nombre de dés lancé : lui donner une valeur pour l'instant fixe comprise entre 1 et 8 (inutile d'en faire trop...).
- On pourrait créer une fonction contenant les instructions permettant la création d'un dé. Ca tombien bien, on a déjà écrit ces instructions faites dans les étapes d'avant : il faut donc encapsuler tout le reste du code dans une fonction (l'appeler comme vous voulez).
- Et enfin, il faudrait executer la fonction autant de fois que de dés demandés par l'utilisateur : pour cela, utilisons une boucle for, allant de 0 au nombre de dés défini dans la variable au dessus, s'incrémentant 1 par 1, qui à chaque fois, va lancer la nouvelle fonction créant un dé = donc si nptre variable est à 4, elle lancera quatre fois la fonction chargée de créer un dé (et 4 dés aléatoires seront créés).

<details>
<summary>Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça :</summary>

Si vous avez décidé de définir votre variable du nombre de dés à 4 :

![Etape 3](screenshots/etape3.png)

</details>

## Etape 4 : Choisir le nombre de dés à lancer

On aimerait bien pouvoir lancer le nombre de dés que l'on souhaite (par exemple, entre 1 et 8 dés), mais depuis la page, et pas en changeant la variable dans le code.

- Il faudrait demander à l'utilisateur de saisir combien de dés il veut lancer lorsqu'il arrive sur la page, grâce à l'input de type `range` (aller voir dans le fichier html) ; il faut donc dans un premier aller le chercher, lui, sa `<div>` parente et le `<span>` contenant la valeur du nombre de dés marquée, puis rendre visible la div (lui enlever une certaine classe...),
- Il va également falloir aller chercher le bouton qui permet de lancer les dés, et l'afficher (là aussi, en lui enlevant une classe),
- Lorsqu'on bouge le curseur (donc quand l'input est modifié ; le **type** du addEventListener sera donc `input` et non pas `click`), il faut que :
  - le texte de la valeur du nombre de dés affichée (dans le `span`) doit se modifier et être égal à la valeur du curseur,
  - la variable du nombre de dés (dans l'étape 3, elle a été déclarée comme étant fixe pour le moment) doit être égale à la valeur du curseur = comme cette dernière est une chaîne de caractères il faut la transformer en Number grâce à la fonction `Number()`.
- Enfin, il va falloir gérer les conséquences du clic sur le bouton permettant de lancer le ou les dé(s) :
  - il faut aller chercher la `div` du 'player' (son espace de jeu, dans lequel on créé les dés),
  - le vider (Astuce : on utilise la propriété commençant par `inner` et finissant par `ML`...)
  - et déplacer la fin de l'étape 3 avec la boucle for dans cet addEventListener.

<details>
<summary>Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça :</summary>

Si vous avez décidé de définir votre variable du nombre de dés à 7 :

![Etape 4](screenshots/etape4.png)

</details>

## Etape 5 Bonus <strong>facultatif</strong> : Ajouter un adversaire ?

<details>
<summary>
De l'aide ?
</summary>

On a peut être prévu une div à ce sujet dans le html...

Dans la dernière partie de l'étape 4 (dans le addEventListener au clic sur le bouton "Valider et lancer"), il va falloir aller chercher cette div, l'afficher en transformant sa classe `hidden` en classe `board`, la vider (à chaque clic pour réinitialiser le plateau de jeu du player 2), et dans la boucle `for`, lancer également la fonction de création de dés une deuxième fois...

*Mais quel intérêt de lancer une même fonction deux fois de suite ?*

Justement, il va falloir la modifier, et changer ses appels dans la boucler `for` ; maintenant, elle va recevoir un argument entre parenthèses = l'emplacement de la création des dés. C'est pour ça qu'on l'appelle deux fois, une première fois en lui indiquant `#player` et la deuxième `#player2`.

*Pourquoi ?*

Parce qu'on va modifier la fonction maintenant ; à la place de la sélection du container avec l'id 'player' avec le addEventListener, on va indiquer l'élément passé en argument (qui doit donc aussi être indiqué entre parenthèses au moment de la déclaration de la fonction), qui sera donc la constante dans laquelle on va injecter l'image du dé = comme ça, les dés seront aussi créés dans l'espace de jeu du player 2.

<details>
<summary>Checkpoint : lorsque cette étape est validée, la page pourrait bien ressembler à ça :</summary>

![Etape 5](screenshots/etapebonus.png)

</details>

</details>

## Cours associés

I - 3/ JS

II - 1/ Dynamisme JS

## Definition of Done:

- [ ] Toutes les étapes sont terminées.

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

Pas de soucis si l'étape bonus n'est pas faite, elle est facultative, l'idée est que vous soyez plus à l'aise avec les fonctions et leur appel après cet exercice, ainsi qu'avec la manipulation du DOM et l'utilisation des boucle for.

**Courage !**