---
name: Exo Ctrl+maj+f / Ctrl+maj+h
about: Training Exercice command find and replace
title: Exo Ctrl+maj+f / Ctrl+maj+h
labels: ""
assignees:
---

## Objectif

[_lien vers l'exercice_](https://codephenix.fr/interface/exercices/new_exo_command/exo-ctrl-maj-f.zip)

Ouh là, un ancien collègue nous a laissé son projet web avant de partir en vacances, et rien ne marche : quand on ouvre le fichier `index.html` dans notre navigateur et qu'on clique sur le bouton `Débloquer`, rien ne se passe !

Il semblerait que les fichiers `index.html` et `style.css` soient bons, mais le fichier `script.js` est bourré de fautes : les constantes, fonctions, id et classes ont l'air d'être mal orthographiés.

Bon, on se retrousse les manches, il va falloir arranger tout ça. On sait que :

- **les noms des id et des classes s'écrivent en `kebab-case`**, c'est à dire tout en minuscules, avec un tiret `-` entre les mots (on les retrouve en HTML lorsqu'on donne un id ou une classe à un élément, en CSS lorsqu'on leur donne des propriétés, et en JavaScript quand on va chercher ces éléments pour les mettre dans des constantes).
- **les noms des variables, des constantes (dans la majorité des cas) et des fonctions en JavaScript s'écrivent en `camelCase`**, c'est à dire tout attaché, avec une majuscule à la première lettre de chaque mot, sauf du premier, comme ça : `const superExerciceDeCodePhenix`.
- il existe d'autres syntaxes, comme le `snake_case` utilisé par exemple pour les variables et les fonctions en python, ou encore le `UPPER_CASE` pour les constantes importantes qui qui représentent des valeurs fixes, universelles, qui ne changeront pas.

Mais revenons à nos moutons. Comme notre collègue n'a laissé aucun commentaire, et que le code a l'air long, on a du mal à s'y retrouver. Il va falloir savoir quels sont les noms à remplacer, et pour ça, il nous a laissé des instructions.

## Instructions

**NE PAS TOUCHER AUX FICHIERS `index.html` ET `style.css` !**

Il va falloir aller chercher dans les fichiers de documentation où sont enregistrés les noms de constantes/classes/id/fonctions à modifier. Mais eux aussi contiennent beaucoup de texte, c'est comme chercher une aiguille dans une botte de foin...

_Rappelez-vous :_

**Dans VSCode et dans SublimeText (vos éditeurs de code/texte), le raccourci clavier `ctrl+maj+f` permet de chercher un mot**

**Le raccourci clavier `ctrl+maj+h` permet de remplacer un mot : vous pouvez remplacer un à un tous les mots ou tout remplacer d'un coup**

Pour ça, suivez les étapes :

### Etape 1 : Ouvrir le fichier `doc.txt`

Là aussi, que du charabia... Ce fichier cache un mot de passe qui va nous permettre de mieux filtrer l'autre fichier `advanced-doc.txt`.

Une fois le fichier `doc.txt` ouvert, cherchez le mot **`password`**, il devrait nous donner le mot de passe...

Copiez-le bien avec le raccourci clavier `ctrl+c` !

### Etape 2 : Ouvrir le fichier `advanced-doc.txt`

Là aussi, il y en a du texte... Une fois le mot de passe en votre possession, vous allez pouvoir filtrer tous les dossiers pour aller chercher le bon dossier contenant tous les noms corrects des id/classes/fonctions/constantes.

> Astuce : Une fois `ctrl+maj+f` tapée, utilisez le raccourci clavier `ctrl+v` pour coller votre mot de passe, c'est plus rapide qu'avec la souris !

### Etape 3 : Ouvrir le fichier `script.js`

C'est là où c'est le bazar. Mais pas de panique !

J'ai reparé où étaient les erreurs dans le nommage, elles concernent ces éléments :

- unlock-button
- mainContainer
- Result
- HANDLE-UNLOCK
- success-message-container

Il va falloir les remplacer, mais pas _à la main_, ça prendrait trop de temps.

Grâce à l'étape 2, vous avez les bons noms, maintenant, il va falloir remplacer les mauvais par les bons.

> **ATTENTION** : il me semble que pour certains éléments, il ne faut pas tout remplacer d'un coup (en particulier ceux que l'on appelle depuis le fichier JavaScript mais qui correspondent à un id ou une classe existants en HTML/CSS) : vérifiez ce que vous remplacez !

## Cours associés

Raccourcis Clavier VSCode et Sublime Text

## Definition of Done:

- [ ] Etape 1 terminée !
- [ ] Etape 2 terminée !
- [ ] Etape 3 terminée !

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

**Courage !**
