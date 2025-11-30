---
name: JS/CSS Dark Theme and --var
about: Training Exercice JS DOM manipulation for dark theme and CSS --var replace
title: JS/CSS Dark Theme and --var
labels: ""
assignees:
---

## Objectif

[*lien vers l'exercice*](https://codephenix.fr/interface/exercices/new_exo_CSS_JS/exo-dark-theme.zip)

Bon, on a eu un retour du client, le visuel de son site web de distribution de panier de fruits ne lui plaît pas...

Il souhaite plusieurs choses :
- changer toutes les couleurs (heureusement, il nous a donné les nouvelles références des couleurs héxadécimales à appliquer).
- pouvoir mettre un **dark-theme** à son site (notre collègue devait s'en occuper...) ; en cliquant dessus, toutes les couleurs de la page sont censées changer.

Il va falloir reprendre le projet de notre collègue qui s'était occupé de ce site, et avait créé les fichiers `index.html`, `style.css` et `script.js` (qui est vide, il ne s'est pas foulé !).

Par contre, changer toutes les couleurs à la main va être long, on pourrait se permettre de factoriser tout ça (si jamais le client décide de changer les couleurs encore une fois, ça prendra moins de temps !).

Allez, on suit les instructions pas à pas, ça va le faire !

## Instructions

**NE PAS TOUCHER AU FICHIER `index.html` !**

Chacune des étapes est définie plus bas, mais tout d'abord, un peu de contexte :

Pour factoriser notre fichier `style.css`, on va déclarer des **variables** en CSS (oui, oui, c'est possible), qu'on va pouvoir réutiliser dans tout le fichier.

Voilà comment ça marche :
- **on peut déclarer tout en haut du fichier CSS nos variables, que l'on nomme comme on veut, dans la pseudo-classe `:root`** (elle permet de cibler la racine de l'arbre représentant le document HTML : la spécificité sera plus forte que de sélectionner uniquement la balise `<html>`), comme ceci :
    ```css
    :root {
        --color-background: #662626ff;
        --color-text: #fff;
        --color-header-bg: #fff;
        --color-border: #4c62cdff;
    }
    ```
- comme les mêmes couleurs sont appelées plusieurs fois dans le fichier CSS dans différentes propriétés et pour différents éléments, plutôt que de modifier une à une les valeurs, on va mettre le nom de notre variable déclarée dans `:root` dans la fonction CSS `var()`, qui permet d'insérer la valeur d'une propriété personnalisée, comme ceci :
    ```css
    header {
        border: solid 2px var(--color-border);
        background-color: var(--color-header-bg);
    }

    #main-container {
        padding: 10px;
        margin: 0 5px;
        background-color: var(--color-background);
        color: var(--color-text);
    }

    #article-container {
        border-radius: 9px;
        background-color: var(--color-background);
        color: var(--color-text);
        border: solid 2px var(--color-border);
    }
    ```

Ce sera bien plus pratique si jamais on a des ajustements à faire, on aura seulement à modifier la couleur des variables déclarées dans  `:root`, et tout le reste se mettra à jour automatiquement !

*Bon, mais pour le **dark-theme** ?*

Là, il va falloir faire du JavaScript, pas le choix. On va :
- récupérer le bouton qui servira à actionner le thème **dark**,
- on va *écouter* le clic de l'utilisateur :
- à chaque clic, on va ajouter/enlever une classe au body, qui modifiera toutes les couleurs de la page

L'avantage, c'est qu'en ayant préalablement défini des variables CSS dans `:root`, on va pouvoir les redéfinir lorsque le body aura le **dark-theme**, comme ça, pas besoin de toucher quoi que ce soit dans les propriétés CSS de nos éléments.

*Par quoi on commence alors ?*

Déjà, on peut commencer par ouvrir notre fichier `index.html` dans le navigateur.

Pour la suite, suivez les étapes :

### Etape 1 : Ajouter les nouvelles couleurs dans des variables CSS dans le fichier `style.css`

Le client m'a donné toutes les couleurs à modifier, voici leurs nouvelles références héxadécimales :
- couleur du background général: `#f1f1f1`
- couleur du texte général: `#000`
- couleur de background du header: `#b8b800`
- couleur de texte du header: `#fff`
- couleur principale des éléments rouges: `#fa685e`
- couleur principale des éléments bleus: `#2196f3`
- couleur principale des éléments verts: `#009688`
- couleur principale des éléments oranges: `#f3b251`
- couleur secondaire des éléments rouges: `#f44336`
- couleur secondaire des éléments bleus: `#5e27e0`
- couleur secondaire des éléments verts: `#42ce47`
- couleur secondaire des éléments oranges: `#be7200`
- couleur de texte des boutons: `#fff`
- couleur de background des boutons: `#616161`
- couleur de texte du footer: `#888`

Vous allez devoir **déclarer des variables tout en haut du fichier CSS**, nommées de manière explicite (pas de `--couleur-texte-partout: #fff;`), **dans la pseudo-classe `:root`**


---

### Etape 2 : Remplacer les anciennes valeurs par les nouvelles variables

Maintenant, il va falloir remplacer les anciennes couleurs qui ne convenaient pas au client par les nouvelles.

Double bonne nouvelle :
- vous venez de définir les nouvelles couleurs,
- et le client m'a aussi donné la correspondance entre anciennes couleurs → couleurs à remplacer :

    - background général: **ancienne couleur : `#fff`** → nouvelle couleur : `#f1f1f1`
    - texte général: **ancienne couleur : `##050505`** → nouvelle couleur : `#000`
    - background du header: **ancienne couleur : `#888800`** → nouvelle couleur : `#b8b800`
    - texte du header: **ancienne couleur : `#eeeded`** → nouvelle couleur : `#fff`
    - couleur 1 des éléments rouges: **ancienne couleur : `#f7685e`** → nouvelle couleur : `#fa685e`
    - couleur 1 des éléments bleus: **ancienne couleur : `#3698e7`** → nouvelle couleur : `#2196f3`
    - couleur 1 des éléments verts: **ancienne couleur : `#00796d`** → nouvelle couleur : `#009688`
    - couleur 1 des éléments oranges: **ancienne couleur : `#eea941`** → nouvelle couleur : `#f3b251`
    - couleur 2 des éléments rouges: **ancienne couleur : `#ff1706`** → nouvelle couleur : `#f44336`
    - couleur 2 des éléments bleus: **ancienne couleur : `#4b17c5`** → nouvelle couleur : `#5e27e0`
    - couleur 2 des éléments verts: **ancienne couleur : `#3aa33d`** → nouvelle couleur : `#42ce47`
    - couleur 2 des éléments oranges: **ancienne couleur : `#d1830f`** → nouvelle couleur : `#be7200`
    - texte des boutons: **ancienne couleur : `#eeeded`** → nouvelle couleur : `#fff`
    - background des boutons: **ancienne couleur : `#727272`** → nouvelle couleur : `#616161`
    - texte du footer: **ancienne couleur : `#7a7a7a`** → nouvelle couleur : `#888`

**Hop hop hop**, mais on ne va pas faire ça *à la main*, un par un !

On a un raccourci clavier bien pratique dans VS Code ou Sublime Text qui pourrait nous aider : `ctrl+maj+H` : il permet de remplacer toutes nos anciennes valeurs par le nom de vos variables (celles que vous venez de déclarer dans `:root`) dans la fonction `var()`.

Si je veux par exemple remplacer toutes les occurences de la couleur de texte des boutons, il me suffit de faire `ctrl+maj+H`, puis de remplacer `#eeeded` par `var(--color-button-text)` (si c'est le nom de ma variable déclarée plus haut, égale à `#fff`), en cliquant sur *Replace all*.

Ca va aller bien plus vite comme ça !

C'est parti pour le test ! Si ce n'est pas déjà fait, on lance notre fichier `index.html` dans le navigateur, sinon on rafraichit la page et on regarde si les couleurs ont changé !

---

### Etape 3 : Ajouter les nouvelles couleurs du thème *dark*

Bon, il faut maintenant s'occuper de la gestion de ce thème **dark**.

Là aussi, heureusement, le client m'a donné les références héxadécimales des couleurs qu'il souhaitait attribuer aux éléments HTML :
- couleur du background général: `#121212db`
- couleur du texte général: `#f1f1f1`
- couleur de background du header: `#1e1e1e`
- couleur de texte du header: `#aaaaaa`
- couleur principale des éléments rouges: `#640606`
- couleur principale des éléments bleus: `#073a75`
- couleur principale des éléments verts: `#02463e`
- couleur principale des éléments oranges: `#753500`
- couleur secondaire des éléments rouges: `#c62828`
- couleur secondaire des éléments bleus: `#8574ad`
- couleur secondaire des éléments verts: `#2e7d32`
- couleur secondaire des éléments oranges: `#ed6414`
- couleur de texte des boutons: `#c0cc11`
- couleur de background des boutons: `#333`
- couleur de texte du footer: `#aaa`

*Super, mais on les mets où ?*

On va se préparer une classe, pour l'instant non présente dans le fichier HTML, qui sera associée au body, et on va mettre ces nouvelles valeurs de couleurs dans les mêmes variables déclarées dans `root`. Concrètement, ça va ressembler à ça : 
```css
    :root {
        --color-button-text: #fff;
        /* ...
        la suite de mes variables
        ... */
    }

    body.dark-theme {
        --color-button-text: #c0cc11;
        /* ...
        la suite de mes variables
        ... */
    }
```

Comme ça, dès que le body aura la classe `dark-theme` (appelez là comme vous préférez !), les nouvelles valeurs des mêmes variables prendront le dessus sur les anciennes valeurs déclarées dans `:root`, et les éléments HTML changeront de couleur, sans qu'on ait à modifier quoi que ce soit de leur côté !

---

### Etape 4 : Gestion du thème *dark* en JavaScript

Fini le CSS !

Maintenant, tout se joue dans le fichier `script.js`, en trois actions :
- on va déclarer une constante, qui va récupérer le bouton qui servira à changer de thème : utilisez pour cela la méthode JavaScript `querySelector()` en allant chercher l'id du bouton en question (allez jeter un coup d'oeil dans le fichier `index.html`).
- utilisez la méthode JavaScript `addEventListener()` pour pouvoir *écouter* le `click` sur ce bouton.
- à l'intérieur de la fonction qui réagira à chaque clic, on va ajouter/enlever la classe que vous avez défini dans le fichier `style.css` au body. Pour cela, utilisez la propriété `classList`, suivie de sa méthode qui vous semblera la plus appropriée :
    - `classList.add` ajoute une classe à un élément,
    - `classList.remove` enlève une classe à un élément,
    - `classList.contains` vérifie qu'une classe est attribuée à un élément,
    - `classList.toggle` ajoute une classe à un élément si elle ne lui est pas attribuée, et enlève la classe si elle lui est déjà attribuée.

Une fois la fonction terminée (on oublie pas de fermer parenthèses et accolades), on teste ! On lance notre fichier `index.html` dans le navigateur, on clique sur le bouton, et si les couleurs ne changent pas, on enquête : on ouvre la console dans l'inspecteur, on vérifie qu'il n'y ait pas d'erreurs, on regarde dans les fichiers...

---

### Etape 5 Bonus : 

Si vous en voulez encore, on peut se lancer dans une étape bonus : à l'intérieur de la fonction du `addEventListener`, on va se rajouter une condition :
- si le body possède la classe `dark-theme` (adaptez au nom que vous lui avez donné), changez le texte du bouton en "Mode clair",
- sinon, changez le texte du bouton en "Mode sombre".

<details>
<summary>Un peu d'aide ?</summary>

L'instruction `if...else` pourrait être pertinente ici...

Quant à la méthode pour vérifier si le body contient bien la bonne classe, elle a été nommée plus haut...

</details>

## Cours associés

- I - 3/ JS --- II - 1/ Dynamisme JS
- Raccourcis Clavier VSCode et Sublime Text

## Definition of Done:

- [ ] Etape 1 terminée !
- [ ] Etape 2 terminée !
- [ ] Etape 3 terminée !
- [ ] Etape 4 terminée !
- [ ] Etape 5 Bonus terminée !

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

**N'oubliez pas de vérifier en permanence dans votre navigateur quand vous apportez des modifications. Courage, il y a pas mal d'étapes à faire, mais si on suit les instructions pas à pas, ça va le faire !**