# Les bases de l'algorithmie pour JavaScript
JavaScript est un langage incontournable dans le développement web complémentaire au HTML et au CSS. La ou le HTML permet de coder ce que contient une page web, le CSS comment la page s'affoche, le JavaScriptvaScript permet de controler comment la page se comporte.
C'est donc le langage qui sera derrière les comportement dynamiques conditionnels "faire ci si il y a ça", les actions "ce qui se passe quand je fais ça"...

Mais le JavaScript est un langage à part entière ! Le but de ce tutorial et d'introduire les concepts de l'algorithmie au travers de ce langage. C'est à dire :
- Les **variables** qui permette de manipuler avec des noms les données que l'on manipule
- Les **statements** commes les conditions, les boucles qui permettent de faire la manipulation
- Les **fonctions** qui permette de regrouper un certains nombre de manipulation sur une _entrée_ pour donner une _sortie_
- Les types de données **data type** classque comme les string, les liste, les chiffres, les dates et les manipulation qui leur sont propre
- Des exemples d'**algorithmes classique** sur ces types. C'est à dire l'utilisation de manipulation sur nos types pour un but précis : rechercher dans une liste, renversement d'une liste...
- La notion d'**objet** et d'attruibut qui permet de regrouper ensemble plusieurs caractéristique de type classique (nombre, chaine de caractére) autour d'une meme eentité qui peut à son tour etre manipulé


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

| Operateur |          Description |
| --------- | -------------------: |
| +         |             Addition |
| -         |          Subtraction |
| *         |       Multiplication |
| **        |          Exponentiel |
| /         |             Division |
| %         | Reste de la division |

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

| Operateur |                                               Description |
| --------- | --------------------------------------------------------: |
| ==        |                                    Les valeurs sont égale |
| ===       |             Les valeurs sont égales et c'est le meme type |
| !=        |                              Les valeurs sont différentes |
| !==       | Les valeurs sont différentes ou ce n'est pas le même type |
| >         |                                               Supérieur à |
| <         |                                               Inférieur à |
| >=        |                                      Supérieur ou égale à |
| <=        |                                      Inférieur ou égale à |

Les 4 premiers opérateurs marche pour tous les types puisqu'il ne s'agit que de dire si les valeurs sont les mêmes ou non. Il marche même parfois entre plusieurs type comme par exemple : `var a = '5'==5` qui donnera `true`.

> ATTENTION, les relations d'ordre pour les chaines de caractère se font lettre à lettre en partant du début ! Ainsi `'abc' < 'b'`. La nuane est importante surtout dans le cas des chiffres puis qu'on a `5 < 12` qui vaut `true` mais `'5' < '12'` qui vaut `false`.

#### Logique
Enfin, `true` et `false` et donc toute expression de comparaison comme celles que l'on a vu au dessus possèdent elles mêmes des opérations de comparaisons :

| Operateur |                                                  Description |
| --------- | -----------------------------------------------------------: |
| a && b    |  Qui verifie si a est vrai (vaut true) ET b aussi (les deux) |
| a \|\| b  | Qui verifie si a est vrai (vaut true) OU b l'est (un des deux) |
| ! a       |                                  Qui donne le contraire de a |

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


| Expression |     Effet |
| ---------- | --------: |
| x++        | x = x + 1 |
| x--        | x = x - 1 |
| x += y     | x = x + y |
| x -= y     | x = x - y |
| x \*= y    | x = x * y |
| x /= y     | x = x / y |
| x %= y     | x = x % y |

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

Le type des variables est définit au moment de l'assignement de la valeur. Les litéraux ont leur type dans la façon dont ils sont écrit. Les autres variable ont le type résultant lors de l'assignation comme résultat des opérations entre valeur qui lui est assigné (ou comme sortie d'une fonction).

```js
var w, x, y, z;
w = '2';
x = 3;
y = w + x;
z = yu + 'hello'
```
Dans l'exemple précédent `'hello'` et `'2'` et donc directement `w` sont de type string (chaine de caractère), `3` et donc directement `x` sont de type number.

En JavaScript il y à 6 types réels, c'est à dire de résultat qui peuvent être donné par l'instruction `typeof`
* string : `'xxxx'`
* number : `xxxx`
* boolean : `true` et `false`
* undefined : le type d'une variable déclaré mais non assigné
* function : quelquechose qui peut être *appellé*, c'est à dire qui s'utilise de cette façon `xxx(...)`
* object : tout le reste en JavaScript est de typeof object

On a déjà parlé des 3 premiers types mais on va les détailler, le 4e permet simplement de faire le lien entre déclaration et assignement.

Le type "function" est à concept à part entière qui sera traité plus tard.

Le type "object" regroupe tous le reste !
Enfait ce type peut etre vu comme une grande famille qui contient des sous-type :
* les lites (que l'on verra dans ce chapitre)
* les objets décrits (que l'on verra dans ce chapitre)
* les objets qui sont le résultat de fonctions particulières qu'on appelle "Classe" (on verra le cas de Date dans ce chapitre). On peut voire les Classes comme des usines à objets. Le concept sera traité plus tard

On peut transforer volontairement les valeurs du type string au type number (si c'est une string de nombre) et vice vers ça
```js
var a, b, c, d;
a = 12;
b = String(a);
c = '12';
d = Number(a);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
```

En plus de l'effet des opérateurs sur les variables, le type définit les *méthodes* que l'on peut appliquer aux variables. Une méthode est une fonction (voir section fonction) propre au type, et que seule les variables de ce type peuvent utiliser.

On écrit : `variable.methode(argument1, argument2, ...)`.

Une méthode (comme une fonction) est un miçni programme qui va s'éfectuer lorsque on l'appel (utilisation de `()`) et qui peut parfois retourner une nouvelle valeur.

```js
var a, b;
a = 'Hello world';
b = a.substr(0, 5);
console.log(b);
console.log(typeof a);
console.log(typeof b);
```
> `substr` est une méthode du type `string` il renvoie une sous-partie de la chaine de charactère qui utilise la méthode
> Et oui ! `log` est une méthode de la variable spéciale `console` ! C'est le programme qui crée l'affichage.

Les string, number, boolean, liste ont leur méthodes définit dont on va voir les plus importantes dans ce chapitre.
Les méthodes des `object` sont définit dans l'objet décrit ou dans la Classe qui l'a créé. On ne verra que le cas utile de `Date`


### number
Ce premier type de valeur, on l'a déjà vu, ce sont tous les nombres ou chiffres, qu’il soit positif, négatif, entier ou à virgule.

Pour affecter une valeur de type Number à une variable, on n’utilise ni guillemet ni apostrophe.

***Faites attention*** : *lorsque nous codons nous utilisons toujours des notations anglo-saxonnes, ce qui signifie qu’il faut remplacer nos virgules par des points pour les nombres décimaux.*

```js
var x = 25;
var y = -75;
var z = 3.14;
```

### string
Le type de valeurs String va représenter les chaînes de caractères, c’est-à-dire les textes.

Si l’on veut stocker une chaîne de caractères dans une variable, il faut entourer notre chaîne par des apostrophes ou des guillemets.

Ce sont justement ces apostrophes ou guillemets qui vont indiquer au JavaScript que l’on stocke une valeur de type String.

```js
var prenom = "Jacques";
var nom = "Martin";
var sexe = "Homme";
```

Au niveau des apostrophes / guillemets, vous pouvez choisir les uns ou les autres selon votre préférence.

Cependant, si la valeur stockée contient elle même des apostrophes ou des guillemets, il faudra les échapper au moyen d’un antislash selon ce que vous aurez choisi pour entourer la valeur comme ceci :

```js
var prenom = "Je m'appelle Pierre";
var nom = 'On me surnomme "Pierrot"';
```

Même un nombre sera considéré comme étant de type String, c’est-à-dire comme une chaîne de caractères si on l’entoure de guillemets ou d’apostrophes.

Faites bien attention à cela, car ça va avoir une grande influence sur les manipulations que l’on va pouvoir faire sur telle ou telle variable !

```js
var x = 25;
var y = "25";
// x  et y n'ont pas le même type
```



**Opérations sur les chaînes de caractères**

***La concaténation***

Concaténer signifie tout simplement mettre bout à bout deux chaînes de caractères afin d’en former une troisième, nouvelle.

Concaténer, c’est donc « additionner » des chaînes de caractères.

En JavaScript, on va pouvoir concaténer grâce à l’opérateur « + ».

Evidemment, nous allons pouvoir appliquer cet opérateur directement à nos variables afin de concaténer leurs contenus respectifs.



Par exemple,

```js
var prenom = "Pierre", espace = ' ', nom = "Dupont";
var moi = prenom + espace + nom;
// moi est égal à "Pierre Dupont"

var sport = "courir";
var hobbie = "J'aime " + sport;
// hobbie est égal à "J'aime courir"
```



***Attention***: *Si l’on tente « d’additionner » un nombre et une chaîne de caractères, tout ce qu’il y a derrière la chaîne de caractères sera également considéré comme une chaine de caractères par le JavaScript.*

```js
var x = 4 + 2 + "1"; //61
var y = "1" + 2 + 4; //124
var z = 2 + "un" + 4; // 2un4
```

**Méthode sur les chaînes de caractères**

Obtenir la longueur d'une chaîne
Pour obtenir la longueur d'une chaîne (c'est-à-dire le nombre de caractères qui la composent, qu'on appelle également sa taille), il suffit de lui ajouter.length. On obtient la longueur sous la forme d'une valeur entière.

```js
console.log("ABC".length); // 3
console.log("Je suis une chaîne".length); // 18
```

Bien entendu,.length peut être appliqué sur des variables de type chaîne. Son résultat peut être stocké dans une variable en vue d'une utilisation ultérieure.

```js
const mot = "Kangourou";
const longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // 9
```
La syntaxe qui consiste à utiliser un point (.) entre la chaîne de caractères et le motlength s'appelle la notation pointée.

Convertir une chaîne en minuscules ou en majuscules
Une valeur de type chaîne peut être convertie en minuscules en lui ajoutant.toLowerCase(). De même, on peut lui ajouter `.toUpperCase()` pour la convertir en majuscules. Ces méthodes renvoient toutes deux une nouvelle chaîne.

```js
const motInitial = "Bora-Bora";
console.log(motInitial.toLowerCase());  // "bora-bora"
console.log(motInitial.toUpperCase());  // "BORA-BORA"
console.log(motInitial);  // "Bora-Bora"
```
La méthode `substr`
```js
var browser = 'Mozilla';

console.log(browser.substr(1, 2)); // expected output: "oz"
```

Il est essentiel de comprendre que la chaîne initiale n'est pas modifiée par ces méthodes, ni par aucune autre méthode appelée sur une chaîne de caractères. Toutes les opérations applicables aux chaînes de caractères ne modifient JAMAIS la chaîne initiale, mais renvoient de nouvelles chaînes. Une fois créée, une chaîne de caractères JavaScript ne peut plus être modifiée. On dit qu'elle est immuable (en anglais : immutable).

On peut également manipuler les chaines comme une succession de charactère. Avec une boucle for :
```js
const prenom = "Odile";
for (const lettre of prenom) {
  console.log(lettre);
}
```

** Rechercher dans une chaîne **
Il arrive fréquemment qu'on souhaite rechercher des valeurs à l'intérieur d'une chaîne de caractères. JavaScript propose plusieurs solutions pour cela.

La méthode  `indexOf()`  prend en paramètre la sous-chaîne recherchée. Si cette valeur est présente dans la chaîne, elle renvoie l'indice de sa première occurrence. Sinon, elle renvoie -1.

```js
const chanson = "Honky Tonk Women";
console.log(chanson.indexOf("onk")); // 1
console.log(chanson.indexOf("Onk")); // -1 (à cause du O)
```
Vous pouvez également utiliser les méthodes  `startsWith()`  et  `endsWith()`  pour rechercher une valeur au début ou à la fin de la chaîne. Ces deux méthodes renvoient  true  ou  false  selon que la valeur soit trouvée ou non. Attention, elles sont sensibles à la casse.

```js
const chanson = "Honky Tonk Women";

console.log(chanson.startsWith("Honk")); // true
console.log(chanson.startsWith("honk")); // false
console.log(chanson.startsWith("Tonk")); // false

console.log(chanson.endsWith("men")); // true
console.log(chanson.endsWith("Men")); // false
console.log(chanson.endsWith("Tonk")); // false
```


**Décomposer une chaîne en sous-parties**
Une chaîne de caractères est parfois composée de plusieurs sous-parties séparées par un caractère particulier (point, tiret, point-virgule, etc). Dans ce cas, on peut obtenir toutes ces parties à l'aide de la méthode  split(). Elle prend en paramètre le séparateur et renvoie un tableau contenant les sous-parties.

```js
const plusieursprenoms = "Yann,Kevin,Justin";
for (const prenom of plusieursprenoms.split(",")) {
  console.log(lettre);
}
```

```js
const mois = "Jan,Fev,Mar,Avr,Mai,Jun,Jul,Aou,Sep,Oct,Nov,Dec";
```
> Exercice : ecrivez un programme qui affiche à partir de mois, seulement les mois commençant par la lettre "M"


### Boolean
Une variable en JavaScript peut encore stocker une valer de type Boolean, c’est-à-dire un booléen.

Un booléen, en algèbre, est une valeur binaire (soit 0, soit 1). En informatique, un booléen va être soit la valeur true (vrai), soit la valeur false (faux).

Ce type de valeur peut sembler plus compliqué à appréhender à première vue. Pas d’inquiétude, nous allons souvent l’utiliser par la suite car il va nous être très utile pour effectuer des tests et vérifier si une condition est vérifiée (true) ou non (false).

Une nouvelle fois, faites bien attention : pour qu’une variable stocke bien un booléen, il faut lui faire stocker la valeur true ou false, sans guillemets ou apostrophes.

Si vous rajoutez des guillemets ou des apostrophes, la variables stockera alors la chaîne de caractères true ou la chaîne de caractères false.


```js
var a = true;
var b = false;

var c = "true";
// c n'est pas un booléen mais une chaîne de caractère
```


### liste
On dit parfois *array* en anglais ou encore *tableau* dans certains language. Il s'agit d'un objet constitué d'une succession de valeur.

Imaginez que vous souhaitiez informatiser la liste de toutes les capitales d'Europe. Une première solution serait de créer une variable par ville, comme dans l'exemple suivant.

```js
const ville1 = "Paris";
const ville2 = "Rome";
const ville3 = "Berlin";
// ...
```
Si vous êtes géographe, vous risquez rapidement de vous retrouver avec un grand nombre de variables dans votre programme. Pire, toutes ces variables sont entièrement indépendantes. Il n'existe aucun moyen pour, par exemple, afficher la liste complète des villes ou rechercher une ville dans la liste.

On pourrait stocker toutes les velles dans une unique chaîne de caractères, en choisissant un caractère pour délimiter les titres.

```js
const films = "Paris - Rome - Berlin";
```
Mais la chaine de charactère serait compliquée à manipuler.

Pour ça ont crée une liste :
```js
const villes = ["Paris", "Rome, "Berlin"];
```

On crée un tableau à l'aide d'une paire de crochets  []  . Tout ce qui se trouve entre les crochets correspond au contenu du tableau. Les différents éléments stockés sont séparés par des virgules.

Avec JavaScript, on peut stocker dans un tableau des éléments de différents types, comme dans l'exemple ci-dessous.

```js
const tableau = ["Bonjour", 7, true];
```

> Astuce : on nomme les tableaux avec un s à la fin du nom de la variable.

#### taille
Le nombre d'éléments stockés dans un tableau est appelé sa taille. Voici comment l'obtenir.

```js
const villes = ["Paris", "Rome, "Berlin"];

console.log(villes.length); // 3

```
La taille d'un tableau s'obtient en lui applicant la propriété (après un .) `length` sans parenthèse. Bien entendu, cette propriété renvoie 0 dans le cas d'un tableau vide (sans aucun élément).

```js
const tableauVide = []; // Création d'un tableau vide

console.log(tableauVide.length); // 0
```

#### Accéder à un élément d'un tableau
Chaque élément présent dans un tableau est identifié par un numéro, appelé son indice (index en anglais). On peut représenter graphiquement un tableau comme un ensemble de cases, chacune stockant une valeur spécifique et associée à un indice. Voici comment on pourrait représenter le tableau `villes`.

L'accès à un élément s'effectue en plaçant cet indice entre crochets, comme dans l'exemple ci-dessous.

```js
const villes = ["Paris", "Rome, "Berlin"];

console.log(villes[0]); // "Paris"
console.log(villes[1]); // "Rome"
console.log(villes[2]); // "Berlin"
```
L'indice du premier élément d'un tableau est 0 et non 1 comme on aurait pu s'y attendre. Le plus grand indice utilisable est donc égal à la taille du tableau - 1.

Utiliser un indice invalide pour accéder à un élément d'un tableau JavaScript renvoie la valeur spécialeundefined.

```js
const villes = ["Paris", "Rome, "Berlin"];

console.log(villes[3]); // undefined : le dernier indice valide est 2
```

#### Parcourir un tableau
Il existe plusieurs solutions pour parcourir un tableau élément par élément.

La première consiste à utiliser la boucle `for` que vous connaissez déjà. L'exemple ci-dessous permet d'afficher la liste des films présents dans le tableau.

```js
const villes = ["Paris", "Rome, "Berlin"];

for (let i = 0; i < villes.length; i++) {
  console.log(villes[i]);
}
```

La seconde est une utilisation du `for` spécifique à l'aide du mots `of` :
```js
const villes = ["Paris", "Rome, "Berlin"];

for (const ville of villes) {
  console.log(ville);
}
```
Le `of` dans la declaration du for permet de faire un for avec un compteur de boucle un peru special qui est en réalité successivement (et dans l'ordre) chaque élément de la liste après le `for`

> Exercice : Coder une fonction qui prend une liste et renvoie la liste "à l'envers".


#### Methodes de manipulatioon

**Ajouter un élément dans un tableau**
Ajoutons les villes Madrid et Lisbonne à notre liste :

```js
const villes = ["Paris", "Rome, "Berlin"];

villes.push("Madrid"); // Ajoute la ville à la fin du tableau
villes.unshift("Lisbonne"); // Ajoute la ville au début du tableau

console.log(villes);
```

L'ajout d'un nouvel élément dans un tableau se fait avec la méthode :
* `push()` Elle prend en paramètre l'élément à insérer, qui est ajouté à la fin du tableau.
* `unshift()`. Elle permet d'ajouter l'élément au début du tableau.


On peut supprimer le premier et le dernier élément d'un tableau grâce à la méthode  pop().

```js
const villes = ["Paris", "Rome, "Berlin"];

villes.pop(); // Supprime le dernier élément
villes.shift(); // Supprime le premier élément

console.log(villes.length); // 1
console.log(villes[2]); // undefined
```

Une autre méthode de suppression, `splice()`, permet de supprimer plusieurs éléments d'un coup. Son premier paramètre est l'indice à partir duquel supprimer, et le second est le nombre d'éléments à supprimer.

```js
const villes = ["Paris", "Rome, "Berlin"];

villes.splice(0, 1); // Supprime 1 element à partir de l'indice 0
console.log(villes.length); // 2
console.log(villes[0]); // "VRome"
console.log(villes[1]); // "Berlin"
```

#### Autres méthodes
`join()`
```js
const villes = ["Paris", "Rome, "Berlin"];

var villes_string = villes.join(' - ');
console.log(villes_string); // "Paris - Rome - Berlin"
```
Qui est en fait la méthode inverse de la méthode split de la chaine de charactère.

Split coupe à l'aide d'un symbole la chaine de charactère en une liste de chaine de charactère et split, réunis une liste de chaines de charactères en une chaine de charactère en inserrant un symbole entre les éléments.

La concatenation de liste.

On peut ajouter une liste à la suite d'une autre. Pour cela on appelle la méthode `concat` sur la première liste et elle prend en argument la suivante.

```js
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren)
```

> Exercice : Ecrire une fonction qui prend en entrée une liste et un entier n, et qui renvoit une liste étant n fois la répétition de la liste en entrée.


### Objets décrit

Voici la représentation JavaScript d'un stylo à bille Bic qui écrit en bleu.
```js
const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};
```
Le éléments avant les `:` sont les attributs ou parfois appelé propriété. On y accère de la façon suivante :
```js
const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

console.log(stylo.type); // "bille"
console.log(stylo.couleur); // "bleu"
console.log(stylo.marque); // "Bic"
```
L'accès à une propriété d'un objet est une expression qui produit une valeur. On peut inclure ces accès dans d'autres expressions plus complexes. Voici par exemple comment afficher les caractéristiques du stylo en une seule ligne.

Une fois un objet créé, on peut modifier les valeurs de ses propriétés avec la syntaxe `monObjet.maPropriete = nouvelleValeur`.
```js
const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

// Modification de la propriété "couleur"
stylo.couleur = "rouge";

// "J'écris avec un stylo bille rouge de marque Bic"
console.log(`J'écris avec un stylo ${stylo.type} ${stylo.couleur} de marque ${stylo.marque}`);
```

JavaScript offre même la possibilité d'ajouter dynamiquement de nouvelles propriétés à un objet déjà créé.
```js
const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

// Ajout de la propriété "prix"
stylo.prix = "2.5";

// "Mon stylo coûte 2.5 euros"
console.log(`Mon stylo coûte ${stylo.prix} euros`);
```

L'objet null est l'objet qui n'a rien ! Pas d'attributs, pas de méthode, rien... Il est comme undefined, mais c'est quand meme un objet.
```js
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
```

#### Méthode
A la différente d'un objet bien défini comme celui des listes que l'on a vu, dans un objet, générique, on définit nous même ses méthodes.

Prenons un exemple en créant un objet représentant un personnage de jeux video :
```js
const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25
};
```
Aurora est représentée par un objet `aurora` ayant trois propriétés : `nom`, `sante` et `force`. Elles ont chacune une valeur et, ensemble, définissent l'état de notre personnage à un instant donné.

Maintenant, Aurora va vire une  aventure :
```js
const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25
};

// "Aurora a 150 points de vie et 25 en force"
console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

console.log("Aurora est blessée par une flèche");
aurora.sante = aurora.sante - 20;
console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

console.log("Aurora trouve un bracelet de force");
aurora.force = aurora.force + 10;
console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

// "Aurora a 130 points de vie et 35 en force"
console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);
```
On voit que l'instruction `console.log('${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force');` est répété, enfait c''est une maniopulatiçon de l'objet que l'on va etre amené à faire souvent. On prefere donc creer une *méthode*, c'est a dire une fonction interne à lobjet qui va faire l'instruction :
```js
const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25,

  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`;
  }
};

// "Aurora a 150 points de vie et 25 en force"
console.log(aurora.decrire());
```
L'objet  aurora  possède à présent une nouvelle propriété nommée  decrire. La valeur de cette propriété est une fonction qui renvoie la description du personnage sous forme textuelle. Le résultat de l'exécution est exactement le même que précédemment.

Une propriété dont la valeur est une fonction est appelée une méthode. Une méthode permet de définir une action pour un objet. On dit également qu'une méthode ajoute à cet objet un comportement.

Un nouveau mot-clé y apparaît :  this  . Il est défini automatiquement par JavaScript à l'intérieur d'une méthode et représente l'objet sur lequel la méthode a été appelée.

La méthode  decrire()  ne prend plus de personnage en paramètre : elle utilise  this  pour accéder aux propriétés de l'objet sur lequel elle a été appelée.


On peut aussi creer une méthode qui nous dit si le personnage est en vie.
```js
const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25,

  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`;
  },

  isAlive() {
    return this.sante > 0;
  }
};

// "Aurora a 150 points de vie et 25 en force"
console.log(aurora.isAlive());
aurora.sante -= 200
console.log(aurora.isAlive());
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
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
```
ou :
```js
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```
> Exercice : Vous avez une variable `gender` qui vaut "homme" ou "femme", une variable `birth_year` qui est l'année de naissance, une variable `birth_month` qui est le mois de naissance en toute lettre et une variable `zipcode` du code postale. Créer une variable `sécu` qui prévoit les 7 premiers chiffres de la carte vitale.

### Boucles

Essayons d'écrire un programme qui affiche tous les nombres entre 1 et 5. Voici ce que nous pouvons écrire avec nos connaissances actuelles.

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```



Même s'il reste relativement court, ce programme est très répétitif. Que se passerait-il si nous devions afficher non pas 5, mais 100 ou même 1000 nombres ? On doit pouvoir faire mieux !

Pour cela, le langage JavaScript offre la possibilité de répéter l'exécution d'un ensemble d'instructions en plaçant ces instructions à l'intérieur d'une **boucle**. Le nombre de répétitions peut être connu à l'avance ou dépendre de l'évaluation d'une condition. A chaque répétition, les instructions contenues dans la boucle sont exécutées. C'est ce qu'on appelle un **tour de boucle** ou encore une **itération**.

![bart](images/bart-simpson-generator.png)



#### La boucle while

La boucle `while` permet de répéter des instructions **tant qu'une condition est vérifiée**.

**Exemple d'utilisation**

Voici notre programme d'exemple réécrit avec une boucle`while`.

```javascript
console.log("Début du programme");
var nombre = 1;
while (nombre <= 5) {
  console.log(nombre);
  nombre++;
}
console.log("Fin du programme");
```



**Fonctionnement**

La syntaxe de l'instruction `while` est la suivante.

```javascript
while (condition) {
  // instructions exécutées tant que la condition est vérifiée
}
```

Avant chaque tour de boucle, la condition associée au `while` est évaluée.

- Si elle est vraie, les instructions du bloc de code associé au `while` sont exécutées. Ensuite, l'exécution revient au niveau du `while` et la condition est à nouveau vérifiée.
- Si elle est fausse, les instructions du bloc ne sont pas exécutées et le programme continue juste après le bloc `while`.

Le bloc d'instructions associé à une boucle est appelé le **corps de la boucle**.



#### La boucle for

On a fréquemment besoin d'écrire des boucles dont la condition est basée sur la valeur d'une variable qui est modifiée dans le corps de la boucle, comme dans notre exemple. Pour répondre à ce besoin, JavaScript et la plupart des autres langages disposent d'un autre type de boucle : le `for`.

**Exemple d'utilisation**

Voici notre programme d'exemple réécrit avec une boucle`for`.

```javascript
var compteur;
for (compteur = 1; compteur <= 5; compteur++) {
  console.log(compteur);
}
```



**Fonctionnement**

La syntaxe de l'instruction for est la suivante.

```javascript
for (initialisation; condition; étape) {

    // instructions exécutées tant que la condition est vérifiée

}
```



Son fonctionnement est un peu plus complexe que celui d'un `while`. Lisez attentivement ce qui suit :

- **L'initialisation** se produit une seule fois, au début de l'exécution.
- La **condition** est évaluée *avant* chaque tour de boucle. Si elle est vraie, un nouveau tour de boucle est effectué. Sinon, la boucle est terminée.
- **L'étape**  est réalisée *après* chaque tour de boucle.

Le plus souvent, on utilise l'initialisation pour définir la valeur initiale d'une variable qui sera impliquée dans la condition de la boucle. L'étape sert à modifier la valeur de cette variable.



**Compteur de boucle**

La variable utilisée dans l'initialisation, la condition et l'étape d'une boucle for est appelée le compteur de la boucle.

Par convention, la variable compteur d'une boucle `for` est souvent nommée `i`.

Très souvent,  on n'a pas besoin d'utiliser la variable compteur en dehors du corps de la boucle. Dans ce cas, on peut la déclarer en même temps qu'on l'initialise dans la boucle. Notre programme d'exemple peut être réécrit ainsi :



```javascript
for (var i = 1; i <= 5; i++) {
    console.log(i); // OK
}
console.log(i); // Erreur : la variable i n'est pas visible ici
```



#### Erreurs fréquentes

**Boucle while infinie**

Le principal risque lié à la boucle `while` est la "boucle infinie". Il s'agit d'une erreur de programmation très facile à commettre, donc dangereuse.

Modifiez l'exemple de boucle `while` en oubliant volontairement la ligne qui incrémente la variable `nombre`.

```javascript
var nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    // La variable n'est plus modifiée : la condition sera toujours vraie
}
```

Lors de l'exécution de ce programme, on effectue un premier tour de boucle puisque la condition`nombre <= 5` est initialement vérifiée. Mais comme on ne modifie plus la variable`nombre` dans le corps de la boucle, la condition est indéfiniment vraie : il s'agit d'une **boucle infinie**.



***Conseil***: *Pour éviter d'écrire par mégarde une boucle infinie, il faut s'assurer que la variable impliquée dans la condition puisse être modifiée dans le corps de la boucle.*



**Manipulation du compteur d'une boucle for**

Imaginons qu'un accès de folie temporaire vous conduise à modifier le compteur d'une boucle`for` dans le corps de la boucle, comme dans l'exemple suivant.

```javascript
for (var compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
    compteur++; // La variable est modifiée dans le corps de la boucle
}
```



A chaque tour de boucle, la variable`compteur` est incrémentée deux fois : dans le corps de la boucle, puis dans l'étape exécutée à la fin de chaque tour.

***Attention***: *Quand on emploie une boucle`for`, la modification du compteur de boucle (le plus souvent une incrémentation) est réalisée à la fin de chaque tour de boucle. Sauf exception rarissime, Il ne faut surtout pas modifier le compteur dans le corps de la boucle.*



#### Choix entre un while et un for

Comment choisir le type de boucle à utiliser lorsqu'on doit répéter des instructions dans un programme ?

La boucle `for` a l'avantage d'intégrer la modification du compteur dans sa syntaxe, ce qui élimine le problème des boucles infinies. En revanche, son utilisation implique que le nombre de tours de boucle soit connu à l'avance. Les scénarios où le nombre de tours ne peut pas être prévu à l'avance seront plus simples à écrire avec un `while`. C'est notamment le cas lorsque la boucle sert à contrôler une donnée saisie par l'utilisateur, comme dans cet exemple.

```javascript
var lettre = "";
while (lettre !== "X") {
  lettre = prompt("Tapez une lettre ou X pour sortir : ");
}
```

Le nombre de tours de boucle dépend des valeurs saisies par l'utilisateur : il est imprévisible.

En conclusion, le choix entre un `while` et un `for` dépend du contexte. Toutes les boucles peuvent s'écrire avec un `while`. Si on peut prévoir à l'avance le nombre de tours de boucles à effectuer, la boucle `for` est le meilleur choix. Sinon, il vaut mieux utiliser le `while`.



#### Exercices

**Table de multiplication**

Créez un programme pour afficher la table de multiplication d'un nombre choisi



**Puissance**

Créer un programme qui permet de calculer les puissances d'un nombre choisi

*Rappel*: *a puissance 3 = a x a x a*



**FizzBuzz**

Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :

- Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
- Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
- Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.

Vous pouvez utiliser l'opérateur modulo `%` qui renvoie le reste de la division d'un entier par un autre.

Par exemple

```javascript
console.log(10 % 2); // 0
console.log(10 % 3); // 1
console.log(11 % 3); // 1
```


## Fonctions

### Introduction

Pour comprendre l'intérêt des fonctions, regardons cet algorithme qui décrit la préparation d'un plat de pâtes.

```
Début
    Sortir une casserole
    Mettre de l'eau dans la casserole
    Mettre la casserole sur le feu
    Tant que l'eau ne bout pas
      Attendre
    Verser les pâtes dans la casserole
    Tant que les pâtes ne sont pas cuites
        Attendre
    Verser les pâtes dans une passoire
    Remuer la passoire pour faire couler l'eau
    Remettre les pâtes dans la casserole
    Goûter
    Tant que les pâtes sont trop fades
        Ajouter du sel
        Goûter
    Si on préfère le beurre à l'huile
        Ajouter du beurre
    Sinon
        Ajouter de l'huile
Fin
```



Voici le même algorithme, écrit d'une manière différente.

```
Début
    Faire bouillir de l'eau
    Cuire les pâtes dans l'eau
    Egoutter les pâtes
    Assaisonner les pâtes
Fin
```



La première version détaille toutes les actions individuelles à réaliser. La seconde décompose la recette en sous-étapes regroupant plusieurs actions individuelles. Cette version est plus concise et plus facile à interpréter, mais elle introduit des concepts relatifs au domaine de la cuisine comme *cuire*, *égoutter*, ou *assaisonner*. On peut envisager de réutiliser ces concepts pour réaliser d'autres recettes, par exemple la préparation d'un plat de riz.

Jusqu'à présent, vos programmes étaient écrits sur le modèle du premier algorithme : des actions individuelles qui s'enchaînent. Vous allez maintenant apprendre à les concevoir sous la forme d'un ensemble de sous-étapes. En JavaScript, ces sous-étapes sont appelées des fonctions.



### Découverte des fonctions

Une **fonction** est un regroupement d'instructions qui réalise une tâche donnée.

Testez cet exemple utilisant une fonction.

```javascript
function direBonjour() {
  console.log("Bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");
```



Décomposons ce morceau de code!

**Déclaration d'une fonction**

Observons la première partie du programme d'exemple.

```javascript
function direBonjour() {

  console.log("Bonjour !");

}
```

Cet extrait permet de créer une fonction nommée `direBonjour()`. Elle n'est constituée que d'une seule instruction qui affiche sur la console le message "Bonjour !".

L'opération de création d'une fonction s'appelle la **déclaration**. Voici sa syntaxe.

```javascript
// Déclaration d'une fonction nommée maFonction

function maFonction() {

  // Instructions de la fonction

}
```

La déclaration d'une fonction s'effectue à l'aide du mot-clé JavaScript `function` suivi du nom de la fonction et d'une paire de parenthèses. Les instructions qui composent la fonction constituent le **corps** de la fonction. Ces instructions sont placées entre accolades et indentées.



**Appel d'une fonction**

Voici la seconde partie de notre programme d'exemple.

```javascript
console.log("Début du programme");

direBonjour();

console.log("Fin du programme");
```

La première et la troisième instructions affichent des messages dans la console.  La deuxième effectue un appel à la fonction `direBonjour()` déclarée plus haut.

**L'appel** d'une fonction s'effectue en écrivant le nom de la fonction suivi d'une paire de parenthèses. 

```javascript
// ...

maFonction(); // Appel de la fonction maFonction

// ...
```

L'appel d'une fonction déclenche l'exécution des instructions qui la constituent, puis l'exécution reprend à l'endroit où la fonction a été appelée. Ce fonctionnement est illustré par le schéma ci-dessous.

![](images/schema_fonction.png)

**Avantages des fonctions**

Lorsqu'on cherche à résoudre un problème complexe, il est généralement efficace de le décomposer en sous-problèmes plus simples.

Les fonctions permettent d'appliquer ce principe à la création de logiciels : on va décomposer le programme en écrivant plusieurs fonctions, chacune dédiée à un objectif particulier. Le programme fera appel aux fonctions au fur et à mesure de son exécution.

Ecrit sous la forme d'une combinaison de fonctions, le programme sera plus lisible et plus facile à faire évoluer qu'un programme écrit de manière monobloc. De plus, il sera parfois possible de réutiliser certaines fonctions dans d'autres programmes.

Enfin, la création d'une fonction permet de lutter contre la duplication de code : plutôt que de dupliquer le même code dans un programme, on centralise ce code sous la forme d'une fonction et on y fait appel depuis tous les endroits où c'est nécessaire. C'est le même principe que d'externaliser les fichiers CSS



### Que faire avec les fonctions ?

#### Valeur de retour

Voici une variante de notre programme d'exemple.

```javascript
function direBonjour() {
  return "Bonjour !";
}

console.log("Début du programme");
const resultat = direBonjour();
console.log(resultat); // "Bonjour !"
console.log("Fin du programme");
```



Ce programme produit exactement le même résultat que le précédent.

Dans cet exemple, le corps de la fonction `direBonjour()` a été modifié : l'instruction `console.log("Bonjour !")` a été remplacée par la ligne `return "Bonjour !"`.

L'utilisation du mot-clé `return` dans une fonction permet de lui donner une **valeur de retour**. Son appel produit un résultat qui correspond à la valeur placée juste après le `return` dans la fonction. Ce résultat peut être récupéré par le programme appelant. Ici, la fonction `direBonjour()` renvoie la valeur chaîne`"Bonjour !"`. Cette valeur est stockée par le programme dans la variable `resultat`, qui est ensuite affichée.



Une fonction incluant une instruction `return` renvoie une **valeur de retour** lorsqu'elle est appelée : cette valeur résulte de l'évaluation de l'expression située immédiatement après le `return`.

Cette valeur de retour peut être de n'importe quel type (nombre, chaîne, etc). En revanche, une fonction ne peut renvoyer qu'une seule valeur.

Rien n'oblige à récupérer la valeur de retour d'une fonction, mais dans ce cas, cette valeur est "oubliée" par le programme qui appelle la fonction !



***Conseil***: *Si on essaie de récupérer la valeur de retour d'une fonction qui n'inclut pas d'instruction`return`, on obtient la valeur JavaScript`undefined`.*

```javascript
function maFonction() {
  // Pas d'instruction return
}

var resultat = maFonction();
console.log(resultat); // undefined
```

*Une fonction qui ne renvoie pas de valeur est parfois appelée une **procédure**.*



***Remarque***: *L'exécution de l'instruction`return` renvoie immédiatement vers le programme appelant. Il ne faut jamais ajouter d'instructions après un`return` dans une fonction : elles ne seraient jamais exécutées.*



On peut simplifier un peu notre exemple en affichant directement le résultat de l'appel à la fonction`direBonjour()` sans utiliser de variable. Ici, la valeur de retour de`direBonjour()` est directement affichée dans la console.

```javascript
function direBonjour() {
  return "Bonjour !";
}

console.log(direBonjour()); // "Bonjour !"
```

#### Des variables dans la fonction
Il est possible de déclarer des variables à l'intérieur d'une fonction, comme dans l'exemple ci-dessous.

```js
function direBonjour() {
  const message = "Bonjour !";
  return message;
}

console.log(direBonjour()); // "Bonjour !"
```

La fonction `direBonjour()` déclare une variable nommée `message`, puis renvoie sa valeur.

Les variables déclarées dans le corps d'une fonction sont appelées des variables locales. En effet, elles ne sont utilisables qu'à l'intérieur de la fonction. Ainsi, l'exécution du programme suivant provoquera une erreur.

```js
function direBonjour() {
  const message = "Bonjour !";
  return message;
}


console.log(direBonjour()); // "Bonjour !"
console.log(message); // Erreur : la variable message n'existe pas ici
```

A chaque appel d'une fonction qui déclare des variables locales, ces variables sont recréées. On peut donc appeler plusieurs fois la même fonction, et chaque appel sera parfaitement indépendant des autres !

Ne pas pouvoir utiliser de variables locales en dehors des fonctions où elles sont déclarées peut sembler une limitation. C'est au contraire un double avantage :

Pour comprendre le risque encouru :
Ici a est déclaré en dehors de la fonction. ALors le resultat de la fonction dépend des utilisation précédentes !
```js
var a = 0;
function obtenira() {
  a ++
  return a;
}


console.log(obtenira()); // 1
console.log(obtenira()); // 2
console.log(a); // 2
```

```js
var a = 0;
function obtenira() {
  var a = 0;
  a ++
  return a;
}


console.log(obtenira()); // 1
console.log(obtenira()); // 1
console.log(a); // 0
```


#### Paramètres et arguments d'une fonction
Un paramètre est une information dont une fonction a besoin pour jouer son rôle. Les paramètres d'une fonction sont définis entre parenthèses juste après le nom de la fonction. On peut ensuite utiliser leur valeur dans le corps de la fonction. 

La valeur d'un paramètre est fournie au moment de l'appel de la fonction : on dit que cette valeur est passée en paramètre. On appelle argument la valeur donnée à un paramètre lors d'un appel.

Modifions notre exemple pour construire un message de bienvenue personnalisé.

```js
function direBonjour(prenom) {
  const message = `Bonjour, ${prenom} !`;
  return message;
}

console.log(direBonjour("Baptiste")); // "Bonjour, Baptiste !"
console.log(direBonjour("Sophie")); // "Bonjour, Sophie !"
```

La déclaration de la fonction ‌direBonjour() a été modifiée : elle contient à présent un paramètre nommé prenom.

Dans cet exemple, le premier appel à la fonction `direBonjour()` est fait avec l'argument `"Baptiste"` et le second avec l'argument `"Sophie"`. Dans le premier cas, le paramètre `prenom` reçoit la valeur `"Baptiste"` et dans le second, la valeur `"Sophie"`.

Voici la syntaxe générale de la déclaration d'une fonction acceptant des paramètres. Leur nombre n'est pas limité, mais il est rarement nécessaire de dépasser 3 ou 4 paramètres.

```js
// Déclaration de la fonction maFonction
function maFonction(param1, param2, ...) {
  // Instructions pouvant utiliser param1, param2, ...
}

// Appel de la fonction maFonction
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maFonction(arg1, arg2, ...);
```
La portée des paramètres d'une fonction se limite au corps de cette fonction. Ainsi, on peut utiliser comme argument une variable externe portant le même nom qu'un paramètre. L'exemple suivant est donc parfaitement valide.

```js
function direBonjour(prenom) {
  // Ici, prenom est le paramètre de la fonction
  const message = `Bonjour, ${prenom} !`;
  return message;
}

// Ici, prenom est une variable utilisée comme argument
var prenom = "Baptiste";
console.log(direBonjour(prenom)); // "Bonjour, Baptiste !"
prenom = "Thomas";
console.log(direBonjour(prenom)); // "Bonjour, Thomas!"
```

Lors d'un appel à une fonction acceptant des paramètres, le nombre et l'ordre des paramètres doivent être respectés. Observez l'exemple suivant.

```js
function presentation(prenom, age) {
  console.log(`Tu t'appelles ${prenom} et tu as ${age} ans`);
}

presentation("Garance", 10); // "Tu t'appelles Garance et tu as 10 ans"
presentation(6, "Prosper"); // "Tu t'appelles 6 et tu as Prosper ans"
```

Lors du second appel, les valeurs données aux paramètres sont inversées :prenom reçoit la valeur 6 etage reçoit la valeur"Prosper"

#### Syntaxe alternative
Il existe d'autres façon d'écrire une fonction :
Comme une variable :
```js
const bonjour = function(prenom) {
  const message = `Bonjour, ${prenom} !`;
  return message;
}

console.log(bonjour("Thomas")); // "Bonjour, Thomas !"
```
Et en utilisant une fleche :
```js
// Affectation d'une fonction anonyme à la variable maVariable
const maVariable = (param1, param2, ...) => {
  // Instructions pouvant utiliser param1, param2, ...
}

// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);
```

### Built-in functions
Ce sont les fonctions déjà codées par JavaScript. La pluàart sont en réalité des méthodes d'objets. Pensez à les utiliser !
On peut tout de même mentionner `prompt()` qui permet de rendre le programme interactif.


### Fonction emboitée et recursivité
On peut aoppeler des fonctions dans les fonctions. Le but est de faire des programmes modulaire.

```js
function saluer(prenom) {
  console.log(`Salut ${prenom}`);
}


function presenter(prenom, age) {
  saluer(prenom);
  console.log(`Tu as ${age} année`);
}

console.log(presenter(prenom, age))
```
Il peut etre utile de decouper les fonctions lorsque l'on perçoit qu'un morceaau pourrait servir dans plusieurs fonctions.

Certaines fonction peuvent s'appeler elle-mêmes, on appelle cela les fonctions recursive.

Afin que la récursivité soit effective, deux fonctionnalités clés doivent nécessairement être implémentées. Il s'agit du cas de base et du cas de propagation, aussi parfois appelé simplement le cas récursif.

Le cas de base représente l'ensemble des lignes de code qui permet l'arrêt de la récursion. Habituellement, cet ensemble débute avec une clause conditionnelle comme if. Si cette notion n'est pas mise en place, la fonction sera répétée de manière infinie et le programme plantera. Le case de base est donc la condition de fin de la fonction récursive.

Le cas de propagation représente l'ensemble des lignes de code où aura lieu la récursivité. Il s'agit, en clair, du bloc de code où la fonction fera à nouveau appel à elle-même.

Un exemple simple, est la fonction de multiplication d'entier à partir de l'addition ! (imagiuneaons que vous n'avez pas le symbole `*` sur votre clavier...)
```js
function multiplication(a, b) {
  // Le cas de base
  if (b == 0) {
    return 0
  } else if (b == 1) {
    return a
  } else {
    return a + multiplication(a, b - 1)
  };
};

console.log(multiplication(2, 3))
```

> Exercice : Recoder avec une fonction recursive, la puissance n d'un nombre a que vous aviez obtenus à l'aide d'une boucle.


## Algorithmes et Exercices
### Trier une liste
Une problématique très présente en informatique est de trier une liste. En JavaScript il esiste la méthode `.sort()` qui renvoie la liste triée. Mais il est important de savoir recoder le tri d'une liste. Il ya déférente méthode :
* Tri par selection : il s'agit de boucler sur la liste pour trouver et mettre dans une nouvelle liste le plus petit élément et recommencer jusqu'a ce que toute la liste soit traitée
* Tri par insertion : On prend le premier élément une nouvelle liste. Cette nouvelle liste est donc triée puisque de seulement 1 élément ! Ensuite on boucle sur le reste de la liste et pour chaque élément on *l'insère* dans la nouvelle liste triée. C'est à dire on le met ou tous ceux avant sont plus petit et ceux après sont plus grand.
* Tri fusion : C'est un algorithme recursif. Si la liste est de taille 0 ou 1? c'est une liste triée. Sinon, on la coupe en deux, et on trie (par recursivité) chacune de ses moitiés. Alors, on *fusionne* à l'aide d'une double boucle while sur les deux moitièes triées. La fusioon doit permettre de reconstituer une liste triée à partir de deux listes triées.

> Saurez-vous coder un de ces tris ?

Schéma du tri par selction :
![selection](images/tri-selection.png)

Schéma du tri par selction :
![fusion](images/tri-fusion.png)


### Exercices divers
_EXERCICE 1_
Ecrire une fonction qui recoit un nombre X et qui affiche la valeur absolue de X (c'est à dire le nombre sans son signe)

_EXERCICE 2_
Ecrire une fonction qui prends 3 nombres A, B et C et qui indique si C est compris entre A et B ou pas.

_EXERCICE 3_
Ecrire une fonction qui demande à l’utilisateur de saisir un entier A puis qui affiche "ERREUR" si A n'est pas un nombre impair compris entre 83 et 101 bornes incluses. Dans le cas contraire, on affiche "PAS D'ERREUR".

_EXERCICE 4_
Ecrire une fonction qui prends une liste et renvoie le plus grand élément de la liste
La fonction ne doit utiliser qu'une seule variable

_EXERCICE 5_
Ecrire une fonction qui prends une liste et renvoie une liste inversée

_EXERCICE 6_
Écrire une fonction calculant le nombre de chiffres utilisé pour écrire

> On pourra faire une solution qui utilise le type string. Mais il existe une solution qui utilise seulement le type entier.

_EXERCICE 7_
Le but est de coder une fonctiçoàn qui permet de jouer au jeu + ou -. C'est un jeu à deux jouer, le premier choisit un nombre entre 0 et 100. Le but du deuxième joueur est de trouver ce nombre. Jusqu'a ce qu'il trouve le bon nombre, le second propose un nombre. Alors le premier jouer dit "plus" si la proposition du second joueur est en dessous du nombre choisit et "-" si la proposition est au dessus du vrai nombre. Le second joueur peut alors faire une nouvelle proposition. La partie s'arrete quand la proposition est la bonne !

Le but de cet exercice est de coder une fonction qui permet de jouer au jeu + ou -. La fonction fait le role du premier jour.

Ecrire une fonction qui :
* Qui initie une variable cible qui va etre un entier entre 1 et 100 comme ceci : `var cible = Math.floor(Math.random() * 100)`
* Demande via la console à l'utilisateur de proposer un nombre (via l'instruction `prompt()` jusqu'a ce que le nombre saisi soit le bon.
* A chaque proposition, le programme affichera "+" ou "-" comme dans les regles du jeu selon proposition.
* Lorsque la proposition est bonne, le programme affichera "gagné" et se terminera


# Pour aller plus loin
Les éléments suiivants feront l'objet de modules à part entière
## Syntaxe et bonnes pratiques
### Syntaxe
* Signification du à la ligne quand on veut car c'est le `;` qui fait le taff.
* Du coup bonnes pratiques d'indentation et à la ligne
* Les espaces (au delà de 1) n'ont pas d'effet, mais il y a des conventions

### Naming
JavaScript utilise la convention du camelCase pour le naming des variables.

### Commentaires
Il faut toujours mettre des commentaires ! Dans deux buts :
* Les "pourquoi on écrit ça" dans le code (clarté)
* Les "cette fonction ou cette classe fait ça" (documentation).
On peut écrire des commentaires sur une ligne de code ou sur plusieurs lignes.
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
## Le concept de classe : une usine à objet
Une classe est une fonction qui à une structure particulière :
* elle peut avoir des arguements
* elle crée des attributs à un objet non déclaré appelé `this`
* elle ne renvoie aucune valeur
* elle s'utilise toujorus au moment de l'assignement d'une variable avec le mot clé `new`

Son but est de regroupper lun certain nbombre de manipulation sur un objet vide pour en faire un objet utile.
Par example si on veut crée des objets qui référence les voitures, on a envie qu'ils aient la même structure et les mêmes attributs. En revanche le nom de la marque sera différente
```js
function Voiture(nom) {
  this.nom = nom;
  this.roues = 4;
}

var peugeot403 = new Voiture("peugeot403");
var peugeot403 = new Voiture("renaultclio");
console.log(peugeot403.nom)
console.log(peugeot403.roues)
```
Dans l'exemple précédent, en une ligne on a la création de touts les attributs, nom et roue. Cela utilise un argument.

Enfait `new` crée un objet vide `this` appelle la fonction écrite aprés `new` et affecte la valeur de `this` à la fin de l'execution de la fonction à la variable avant  `new`.

C'est très utile pour avoir des objets ayant la meme structure.

Et comme c'est une fonction, on peut faire des Classe qui crée de sobjets specialisé en fonction des arguments fournis :
```js
function Vehicule(nom, roues) {
  this.nom = nom;
  this.roues = roues;
  if (roues == 2) {
    this.type = 'moto'    
  }
  elif (roues == 4) {
    this.type = 'voiture' ;   
  }
  else {
    this.type = 'inconnu'  ;  
  };
}

var peugeot403 = new Vehicule("peugeot403", 4);
var scooter = new Vehicule("piagiot", 2);
console.log(peugeot403.type)
console.log(scooter.type)
```
Dans ces manipulations, la fonction peut definir des attributs qui sont des fonctions manipulant elles-aussis `this` se seront les *méthodes* de l'objets.
```js
function Personne(nom) {
  this.nom = nom;
  this.salutation = function() {
    alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
  };
}

var new_person = new Personne("Pierre")
console.log(new_person.salutation())
```

Le bus des classes est de définir des famille d'objet complexe mais facilement utilisable grâce à leur méthodes.

### Regex
Une technique *universelle* de manipulation de chaine de charactère.

### Aléatoire
En informatique il est parfois nécessaire de generer des actions aléatoire (tirage...)

### Erreurs
En informatique on développe des outils pour gerer les comportements non prévu des programme. On appelle cela la gestion d'erreures.

### json
Le json est un protocole de structuration de donnée normalisé qui permet de communiquer en réseaux ou entre différents languages.
Il s'agit de combiner les types élémentaires (liste, objet, nombre, chaine de charactére) de façon cohérente.

On parle d'*éléments*. On a deux familles d'éléments :
* les éléments granulaire : nombre ou chaine de charactère
* les éléments composés qui sont liés entre eux :
** les dictionnaires : ce sont des objet dont chaque clef commence par une lettre et chaque valeur est ou un élément granulaire ou une famille.
** les familles : ce sont des listes de dictionnaires ayant chacun toutes les mêmes clés 

Au global un json est un élément dictionnaire.

Un exemple de json :
```js
var a;
a = {  \\ a est un dictionnaire
  name: "coco"; \\ clé "name" ayant un élément simple de type chaine de charactère en valeur
  id: 123; \\ clé "name" ayant un élément simple de type nombre en valeur
  membres:[ \\ clé "membres" ayant une famille en valeur
    \\ chaque élément de la liste est un dictionnaire ayant deux clés "firstName" et "lastName"
    {
      firstName:"John",
      lastName:"Doe"
    }, 
    {
      firstName:"Anna",
      lastName:"Smith"
    },
    {
      firstName:"Peter",
      lastName:"Jones"
    }
  ];
  description: "Ceci est la description de coco"  \\ clé "description" ayant un élément simple de type chaine de charactère en valeur
};
```
