# Les bases de l'algorithmie pour JavaScript
JavaScript est un langage incontournable dans le développement web complémentaire au HTML et au CSS. La ou le HTML permet de coder ce que contient une page web, le CSS comment la page s'affoche, le JavaScriptvaScript permet de controler comment la page se comporte.
C'est donc le langage qui sera derrière les comportement dynamiques conditionnels "faire ci si il y a ça", les actions "ce qui se passe quand je fais ça"...

Mais le JavaScript est un langage à part entière ! Le but de ce tutorial et d'introduire les concepts de l'algorithmie au travers de ce langage. C'est à dire :
- Les **variables** qui permette de manipuler avec des noms les données que l'on manipule
- Les **statements** commes les conditions, les boucles qui permettent de faire la manipulation
- Les **fonctions** qui permette de regrouper un certains nombre de manipulation sur une _entrée_ pour donner une _sortie_
- Les types de données **data type** classque comme les string, les liste, les chiffres, les dates et les manipulation qui leur sont propre
- Des exemples d'**algorithmes classique** sur ces types. C'est à dire l'utilisation de manipulation sur nos types pour un but précis : rechercher dans une liste, renversement d'une liste...
- La notion d'**objet** et d'attruibu qui permet de regrouper ensemble plusieurs caractéristique de type classique (nombre, chaine de caractére) autour d'une meme eentité qui peut à son tour etre manipulé

## Introduction
Le Javascript est un langage de script incorporé dans un document HTML. Historiquement il s'agit même du premier langage de script pour le Web. Ce langage est un langage de programmation qui permet d'apporter des améliorations au langage HTML en permettant d'exécuter des commandes du côté client, c'est-à-dire au niveau du navigateur et non du serveur web.

Ainsi le langage Javascript est fortement dépendant du navigateur appelant la page web dans laquelle le script est incorporé, mais en contrepartie il ne nécessite pas de compilateur, contrairement au langage Java, avec lequel il a longtemps été confondu. 

Pour tester et faire nos exercices en JavaScript on va donc devoir "interpreter" le code qu'on écrit. Pour cela on écrira les morceaux de codes dans des fichiers `.js` et on pourra les interpreter directement avec **SublimeText** dans un terminal ou alors directement interagir avec une console Javascript d'un navigateur web.

### Dans sublime text
#### Configuration
On va configurer un systeme de build pour interpreter notre javascript. Pour créer ce système :
* `Tools > Build System > New Build System...`
* Copier le code suivant :
```json
{
"cmd": ["node", "$file"],
"selector": "source.js"
}
```
* Enregistrer le fichier dans la localisation par défault avec le nom `node.sublime-build`

Il suffira ensuite d'ouvrir le fichier `XXXX.js` avec le code JavaScript à tester puis faire `Ctrl` + `B` 

#### Tester proprement son code
Dans un nouveau fichier que l'on va enregistrer au nom de `test.js`, copier puis enregistrez le code suivant :
```js
var a;
a=6;
```
`Ctrl` + `B` devrait simplement ouvrir un bandeau précisant que le code à bien tourné et en combien de temps :
![console-sublime](./images/console-sublime.png)
Ce qui est assez peut pratique pour vérifier que tout c'est bien passé. Pour controler ce que l'on fait, on va utiliser le "logging" de la console. ajouter la ligne suivante et relancez le build
```js
var a;  // Ceci est un commentaire
a=6;
console.log(a);
```
Et voilà ! Il suffira d'utiliser `console.log()` sur toutes les varaibles dont on voudra vérifier la valeur dans les exercices.
> On peut noter ici que les commentaire au sein d'une ligne s'écrivent à l'aide de `//` en JavaScript !


### Dans le terminal
Dans le terminal, le principe est le meme, il faut enregistrer le code javascripte dans un fichier `.js` puis l'exeecuter à l'aide de la commande `node`
![console-terminal](./images/console-terminal.png)


### Dans un navigateur web
Comme on l'a vu pour le Html et le Css, le role d'un navigateur web est de transformer le code en une page web utilisable. Etant donné que le JavaScript est une des composantes du code des pages web, les navigateur dispose d'une console JavaScript.
C'est ici que l'on pourra observer les `console.log()` des morceaux de JavaScript de la page web qui seront executé lors du chargement ou des interactions de la page web.

Cependant, la Console du Navigateur affiche les messages venant du :
* Contenu web contenu dans tous les onglets du navigateur
* Code du navigateur
* Contenu des modules complémentaires.

Pour acceder à la console sur un navigateur il existe le raccourcis `Ctrl` + `Maj` + `J`.

Alors pour tester du code javascript avec cette console il existe deux options :

**Ligne à ligne**
On écrit ligne par ligne les commandes que l'on veut executer. Celle-ci sont interprété en temps réel au moment on l'on fait entréer par la console.
![console-browser](./images/console-browser.png)

**Lecture d'un fichier html contenant le code**
Le navigateur a pour role d'executer le code javascript des pages web. Or il existe une balise pour fournir du code JavaScript que le navigateur doit executer au chargement de la page : `<script type="text/javascript">`

Creez un fichier `test.html` contenant le code suivant :
```html
<!DOCTYPE html>
<html>
  <script type="text/javascript">
    console.log("Hello JavaScript console");
    var a;
    a=6;
    console.log(a);
  </script>
</html>
```
Ouvrez le fichier avec votre navigateur puis ouvrez la console. Vous pouvez voire les logs de l'execution de votre code JavaScript !
![console-browser2](./images/console-browser2.png)

> Vous avez choisi la méthode qui vous convient le mieux ? Allez c'est parti !

## Variables et littéral

### Fonctionnement
La syntax de JavaScript defini deux types de valeur :
* Les valeurs fixe appelé *literal* comme les nombres `6` et `6.4` ou les chaines de caractères comme `'hello world'`
* Les *variables* qui se manipule grâce à leur nom.

En informatique, les variables sont des symboles qui associent un nom (l'identifiant) à une valeur. Le nom est unique.

Il existe deux types de variables en JavaScript. Celles qui peuvent changer de valeur au cours du temps (dynamique) et celles qui restent constante à toute épreuve (statique).

Pour dire qu'un nom va servir pour l'un ou l'autre des types de variable, il faut le *déclarer* en précédant le mot clef `var` ou `const` avant le nom.

Apres sa declaration, une variable n'a pas encore de valeur. Il faut d'abord lui en assigner une à l'aide du sign `=` (qui est le symbole pour assigner et non pour parler d'égalité) et de la syntaxe `nom=valeur`.

La valeur peut provenir d'une autre variable indiqué par son nom ou d'un *litéral*. Les literal sont les valeurs directement écrite dans le code :

```js
var x, y, z;              // Declaration des variables
const c;                  // Declaration d'une constante
x = 6; y='Hello world';   // On assigne un littéral à x et y
c = 4                     // On assigne un littéral à c
z = x;                    // On assigne la valeur de x à la variable z
console.log(c, x, y, z)
```

> Dans la dernière ligne que c'est la valeur de x qui est associé à z. On aurait le meme résultat avec `z=6`. Et si x est amené à changer de valeur, ce n'est pas le cas de z.

> Les noms utilisés pour les variables sont sensible aux majuscules. Ils doivent toujours ccommencer par une lettre ou `_`

> La déclaration et l'assignement de variable peut se faire en une ligne : `var carName = "Volvo";`

> Une variable peut etre déclarer une deuxième fois, cela n'affectera pas sa valeur si elle a été assignée

Dans la console, ajoutez la ligne `c=3` pour constater l'erreur lorsque l'on essaye d'assigner de nouveau une variable constante.

### Les différents litéraux
Les litéraux correspondent au *types* "simple" (on verra les type plus compliqué par la suite).
* Les entier comme `6`
* Les nombre réels `6.4`
* Les chaines de caractères `'Hello world'`
* Les booléans qui sont `true` et `false` qui nous permette de faire de la logique.

> Les chaines de charactères peuvent etre declarer avec `"` ou `'`
> Par exemple `'` est lui même un caractère. Il peut etre saisi dans une chaine entre `"` ou précédé de `\` entre `'`

Une variable peut changer de type au cours du temps comme elle peut changer de valeur au cours du temps ! Ca peut venir d'un re-assignement ou du resultat d'une opération qui a changer le type.

```js
var x;           // x n'est as défini
x = 5;           // x est un entier
x = "John";      // x est une chaine de charactère
```


### Les opérateurs
#### Opérations
L'interet des variables est qu'ils peuvent etre manipulés pour creer la valeur de nouvelles variables. Les opérateurs sont les suivants :

| Operateur     | Description                    |
| ------------- | -----------------------------: |
| +             | Addition                       |
| -             | Subtraction                    |
| *             | Multiplication                 |
| **            | Exponentiel                    |
| /             | Division                       |
| %             | Reste de la division           |

Ces opérateur concerne les valeur de *type* chiffre (litteraux entier ou réel ou variable ayant reçu comme valeur un chiffre).
Cependant l'opérateur `+` sert également pour les chaines de caractères. Il correspond à la concatenation (il crée une chaine de caractère des chaines mises bout à bout)


```js
var nb1 = 3;
var nb2 = 2;
var nb3 = nb1 + nb2 - 1;

var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
```

Javascript autorise parfois les opérations entre différent type, essayez les codes suivant :
```js
var a = "Hello" + 5;
var b = "5" + 5;
var c = b + 4;
var d = c + "Stop";
var e = 16 + 4 + "Volvo";
console.log(typeof a)
console.log(typeof b)
console.log(typeof d)
console.log(typeof e)
```

> `typeof` permet d'afficher le type de valeur qu'est un littera ou une variable

> Les chaines de characteres de chiffres sont transformé en chiffre

> L'ajout de n'importe quoi à une chaine de charactère contenant au moins une lettre donne une chaine de charactère

> Les réels donne leur type aux entiers dans les opérations

> Exercice : Faites afficher à la console une phrase disant que "Le résultat de la multiplication de 1265 par 246 est : XXX" avec XXX le bon résultat


#### Comparaisons
Une autre famille d'opérateurs important sont les opérateurs de comparaison. Il comparent deux valeur (litterale ou variable) et crée une nouvelle valeur booléenne qui dit si la comparaison est vrai ou fausse.

| Operateur     | Description                                               |
| ------------- | --------------------------------------------------------: |
| ==            | Les valeurs sont égale                                    |
| ===           | Les valeurs sont égales et c'est le meme type             |
| !=            | Les valeurs sont différentes                              |
| !==           | Les valeurs sont différentes ou ce n'est pas le même type |
| >             | Supérieur à                                               |
| <             | Inférieur à                                               |
| >=            | Supérieur ou égale à                                      |
| <=            | Inférieur ou égale à                                      |

Les 4 premiers opérateurs marche pour tous les types puisqu'il ne s'agit que de dire si les valeurs sont les mêmes ou non. Il marche même parfois entre plusieurs type comme par exemple : `var a = '5'==5` qui donnera `true`.

> ATTENTION, les relations d'ordre pour les chaines de caractère se font lettre à lettre en partant du début ! Ainsi `'abc' < 'b'`. La nuane est importante surtout dans le cas des chiffres puis qu'on a `5 < 12` qui vaut `true` mais `'5' < '12'` qui vaut `false`.

#### Logique
Enfin, `true` et `false` et donc toute expression de comparaison comme celles que l'on a vu au dessus possèdent elles mêmes des opérations de comparaisons :

| Operateur     | Description                                                    |
| ------------- | -------------------------------------------------------------: |
| a && b        | Qui verifie si a est vrai (vaut true) ET b aussi (les deux)    |
| a \|\| b      | Qui verifie si a est vrai (vaut true) OU b l'est (un des deux) |
| ! a           | Qui donne le contraire de a                                    |

Nous verrons que les comparaisons seront très utile pour géré des boucles et des programmes conditionels !

```js
var a = 3;
var b = 3*a > 6;
var c = false;
var d = b && c;
console.log(d);
```
> Exercice : Que va valoir d ?

### Reassignement
Comme on a vu, le but des variables non-constance est de varier au cours du temps, au cours de l'execution du programme.
Dans le code simple suivant, après une manipulation sur `b`, on change la valeur de `a`. On parle d'update
```js
var a = 2;
var b = 3*a;
a = b;
```
Très souvent, l'update des variable a lieu en fonction de leur ancienne valeure. Et donc JavaScript a developper une palette de raccourcis pour l'update de variables :


| Expression     | Effet          |
| -------------- | -------------: |
| x++            | x = x + 1      |
| x--            | x = x - 1      |
| x += y         | x = x + y      |
| x -= y         | x = x - y      |
| x \*= y        | x = x * y      |
| x /= y         | x = x / y      |
| x %= y         | x = x % y      |

```js
var x = 2;
var y;
x += 3;
y = x*3;
x -= y;
y++;
console.log(x)
```
> Exercice : Que va valoir x ?

```js
var x, y;
x = 5;
y = 3;
y += '2';
x += y;
```
> Exercice : Quel est le type de x ?

## Types
### Généralitées
On a commencé à en parler.

En informatique, un type de donnée, ou simplement un type, définit la nature des valeurs que peut prendre une donnée, ainsi que les opérateurs qui peuvent lui être appliqués.

On a par exemple vu que l'effet des opérateurs dépendait du type des variable auquel on les applique.

Le type des variables est définit au moment de l'assignement de la valeur. Les litéraux ont leur type dans la façon dont ils sont écrit. Les autres variable ont le type résultant lors de l'assignation comme résultat des opérations entre valeur qui lui est assigné.

```js
var w, x, y, z;
w = '2';
x = 3;
y = w + x;
z = yu + 'hello'
```
Dans l'exemple précédent `'hello'` et `'2'` et donc directement `w` sont de type string (chaine de caractère), `3` et donc directement `x` sont de type number.

En JavaScript il y à 5 types "simples" que l'on peut l'on peut définir de façon literal :
* string : `'xxxx'`
* number : `xxxx`
* boolean : `true` et `false`
* object : `{'xxxx': nimporte_quoi, 'yyyy': nimporte_quoi}`
* array : `[nimporte_quoi, nimporte_quoi, nimporte_quoi]`

On a également le type simple `unasigned` qui est le type d'une variable qui a été déclaré mais pas assigné.
On a également le type simple `date` qui ne peut pas être définit de façon litéral mais de la façon suivante :
```js
var a;
a = new Date(2017,3,24);
```

On peut transforer les valeurs d'un type à un autre en appliquant le nom du type à la variable à transformer :
```js
var a, b;
a = 12;
b = String(a);
console.log(typeof a);
console.log(typeof b);
```

En plus de l'effet des opérateurs sur les variables, le type définit les méthodes que l'on peut appliquer aux variables. Une méthode est une fonction (voir section fonction) intraséque à la variable. C'est à dire que c'est une commande qui va utiliser la variable pour donner une nouvelle valeur. La méthode peut prendre des arguments (d'autres variables) qui auront un impact sur le la valeur résultante.
On écrit : `variable.methode(argument1, argument2, ...)` pour obtenir la valeur.
```js
var a, b;
a = 'Hello world';
b = a.substr(0, 5);
console.log(typeof a);
console.log(typeof b);
```
> Et oui ! `log` est une méthode de la variaable spéciale `console` !

### String
_WIP_
substr et autre méthodes
```js
var browser = 'Mozilla';

console.log(browser.substr(1, 2)); // expected output: "oz"
```

### Date
_WIP_
manipulation et lien avec les string

### Array
_WIP_
```js
var cars = ["Saab", "Volvo", "BMW"];
```
Et les méthodes.

### Objet
_WIP_
```js
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName)
```
L'acces en attribut et les méthodes.
Avec le concept de méthode : this. Qui peut etre utilisé dans les functions défini dans un objet (méthode) et référe à l'objet donc aux autres arguments qu'il peut avoir et qu'on peut acceder avec `this.attribut`.
```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

### null et undefined
_WIP_
```js
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
```

## Statements
On appelle statement les mots clés réservé du langage qui servent à donner des instructions particulière à l'ordinateur dans le déroulement du programme.
Il s'agit de série d'instructions comme celles que l'on a déjà vu (déclaration, assignation, opérations) mais utilisé dans un contexte particulier :
* De façon conditionnelle, c'est à dire en fonction du vrai ou faux d'autres variables (booléenne)
* De façon répétée, soit un nombre de fois convenu, soit tant qu'une condition (sur des variables) est ou n'est pas vérifié

### Conditions
L'idée est de ne réaliser des instructions que si une variable booléenne, une comparaison ou n'importe quelle combinaison de variable donnant un booléen est vrai. Si c'est faut, l'instruction n'a pas lieu

#### assignement conditionnel
```js
var text, age;
text = "old" ; age = 15;
if (age < 18) text = "Too young";
```
Ici la variable text ne change de valeur que dans le cas ou l'age respecte une certaine condition.

#### Expression ternaire
Ici on a un groupe de de la forme `(condition) ? valeur_si_oui : valeur_si_non` qui est donc une valeur qui vaut la valeur avant les deux points si la condition est vérifié et celle apres sinon.

```js
var voteable = (age < 18) ? "Too young":"Old enough";
```
> Exercice : Demandez un nombre a votre voisin et mettez le dans une variable a, créer une variable b qui vaut "gagné si" a est un multiple de 7 et "perdu" sinon.

#### If ... else
Ici, on a directement le test d'une condition bouléenne puis l'ensemble d'instructions dans le cas ou la condition est validée :
```js
if (condition1) {
  //  block of code to be executed if condition1 is true
}
```
Auquel on peut ajouter les instructions dans le cas contraire
```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else {
  //  block of code to be executed if the condition1 is false and condition3 is false
}
```
Et meme d'autre condition avant le "dernier cas" qui est donc celui regroupé dans `else`
```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else if (condition3) {
  //  block of code to be executed if the condition1 is false and condition3 is true
} else {
  //  block of code to be executed if the condition1 is false and condition3 is false
}
```
Comme par exemple :
```js
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```
ou encore cette exemple qui utilise la fonction `isNaN` que l'on verra plus tard.
```
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
```
ou :

> Exercice : Vous avez une variable `gender` qui vaut "homme" ou "femme", une variable `birth_year` qui est l'année de naissance, une variable `birth_month` qui est le mois de naissance en toute lettre et une variable `zipcode` du code postale. Créer une variable `secu` qui devine les 7 premiers chiffres de la carte vitale à partir des variables précédentes.
> Pour l'exercice on pourra se servire de la *méthode* de string de charactère `substr(i, l)`

#### switch
_WIP_
On le fait ou pas ? La syntax est un peu plus complexe, et tout ce que l'on peut faire avec switch peut se faire avec if...else.

### Boucles
#### do ... while
#### for
#### break et continue

## Fonctions
### Généralitées
### Recursivité
### Built-in functions
_WIP_
isNaN, typeof

## Algorithmes et Exercices
### Exercices divers
_WIP_

_EXERCICE 1_
Ecrire une fonction qui prend deux réels a et b et résout l' équation aX+b=0 et renvoie b. Il faut traiter tous les cas particuliers (notamment les cas "tout x est solution" et "pas de solution").

_EXERCICE 2_

_EXERCICE 3_
Ecrire une fonction qui recoit un nombre X et qui affiche la valeur absolue de X (c'est à dire le nombre sans son signe)

_EXERCICE 4_
Ecrire une fonction qui prends 3 nombres A, B et C et qui indique si C est compris entre A et B.

_EXERCICE 5_
Ecrire une fonction qui prends 4 entiers A, B, C et D, puis qui renvoit les entiers E et F pour que [E, F] soit l'intersection de [A, B] et [C, D]. Comme sur le schéma suivant :

_EXERCICE 6_
Ecrire une fonction qui demande à l’utilisateur de saisir un entier A puis qui affiche "ERREUR" si A n'est pas un nombre impair compris entre 83 et 101 bornes incluses. Dans le cas contraire, on affiche "PAS D'ERREUR".

_EXERCICE 7_
Ecrire une fonction qui prends une liste et renvoie le plus grand élément de la liste
La fonction ne doit utiliser qu'une seule variable

_EXERCICE 8_
Ecrire une fonction qui prends une liste et renvoie une liste inversée

### Trier une liste
Quels algos de tris ?

### Algorithmes classiques


## Syntaxe et bonnes pratiques
### Syntaxe
* A la ligne quand on veut car c'est le `;` qui fait le taff. Du coup bonnes pratiques d'indentation et à la ligne
* Les espaces osef mais les bonnes pratique c'est de les mettes comme ci comme ça

### Naming
Bonne pratique de naming et camel case

### Commentaires
Mettre des commentaires ! Les pourquoi on écrit ça (clarté) et les ça ça fait ça (docstring).
```js
/*
Ceci est
un commentaire
multi ligne
*/
document.getElementById("myH").innerHTML = "My First Page"; // Commentaire sur la ligne
document.getElementById("myP").innerHTML = "My first paragraph.";
```

## Fonctionnalitées avancées
### Regex
### Aléatoire
### Conversion de type
### Erreurs
### json
Le json est la combinbaison d'objet et de liste :

```js
var a;
a = {
  "name": "coco";
  "employees":[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
};
```
### Scopes
let a la place de var en déclaration
