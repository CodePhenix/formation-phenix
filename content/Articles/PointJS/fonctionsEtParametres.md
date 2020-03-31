# Syntaxe ES6 : des fonctions et des paramètres


Les bases — Épisode 6


### En JavaScript les fonctions sont des variables

Les fonctions ont une place particulière dans le cœur des développeurs, car elles rendent leur code réutilisable. Et qui dit ré-utilisabilité… dit moins de travail !

Dans beaucoup de langages, les fonctions sont traitées comme des objets à part, et sont finalement difficiles à manipuler.

En JavaScript, c’est tout l’inverse, les fonctions sont des **_first-class citizen_** : vous pouvez créer dynamiquement des fonctions, les passer en paramètres, les stocker dans des variables, etc. Vous allez voir, c’est très pratique !

Cela est surtout vrai depuis l’arrivée d’ES6, qui facilite encore la manipulation et la définition des fonction.

### Des paramètres par défaut

Premier bon point, ES6 introduit la notion de paramètres par défaut, avec une syntaxe triviale: `maFonction(monParam = valeurParDéfautDeMonParam)`

```
function showValues(x, y=42, me={name:'anonymous'}){  
  console.log("hello", me.name, "x=", x, "and y=", y)  
}  
showValues(3.14)
```
Comme vous le voyez, cela marche même avec les objets.

Les paramètres qui n’ont pas de valeur par défaut vont toujours en premier, pour éviter d’avoir à écrire des choses du type `maFonction(undefined, undefined, 42, undefined)` .

![fonctions-fruits](https://cdn-images-1.medium.com/max/800/1*obxefNQoKyP0nWfcAjNJjw.jpeg)

### Décomposer pour mieux régner

#### Spread operator et rest parameter

L’opérateur `...` fait une entrée fracassante dans la syntaxe ES6. Il permet de décomposer les éléments d'une valeur itérable (un tableau, un string et même un objet) de façon intuitive.

On parle au sens large d’**opérateur de décomposition (_spread operator_)**. Lorsque cet opérateur est utilisé pour décrire le reste d’un tableau, on parle plus précisément de **paramètre de reste (_rest parameter_)**.
```
// spread operator  
const even = [2,4]; const odd = [1,3]  
const allNumbers = [...even, ...odd]  
console.log(allNumbers.sort()) // 1, 2, 3, 4  
​  
// rest parameter  
const numbers=[06,12,34,56,78]  
const [areaCode, ...rest] = numbers  
console.log(areaCode) // 06  
console.log(rest) // [12, 34, 56, 78]
```
Les exemples parlent d’eux-mêmes. Lorsque l’on applique l’opérateur `...` a un tableau, cela revient à écrire `élément1, élément2, ..., élémentN` pour tous les éléments du tableau. On évite alors l'écriture d'une boucle ou l'utilisation d'un `concat` un peu lourd.

Et lorsque l’on utilise cette syntaxe du côté gauche du signe égal, cela revient à créer une variable qui contient le reste du tableau. Parlons justement plus en détails de la création de variables à partir d’un tableau ou d’un objet.

Par ailleurs, tout cela marche aussi pour les objets :
```
const me = {name:"me", id:42, age: 200}  
const { name, ...otherFields } = me  
console.log({name: "me (copy)", ...otherFields})
```
**Note :** techniquement le spread operator pour les objets ne fait pas partie d’ES6 mais plutôt d’**ES7**, la norme à venir. Pensez à utiliser [le module Babel adapté](https://babeljs.io/docs/plugins/transform-object-rest-spread/).

#### Affectation par décomposition

L’affectation par décomposition est un outil très puissant pour manipuler des variables objets et tableaux, et est aussi utilisable pour manipuler les paramètres d’une fonction. On parle alors de _matching_, car cela revient à faire le lien entre le contenu de l’objet et de nouvelles variables.
```
// with an object  
const john = {name:'John', age:200}  
const { age, name, pi = 3.14 } = john  
console.log(age); console.log(name); console.log(pi);
```
Au lieu d’avoir a écrire systématiquement `john.name`, on crée directement une variable `name` indépendante de l'objet. **Attention, c'est une copie, modifier** **`name`** **ne modifiera pas** **`john.name`** **!** On peut par ailleurs en profiter pour créer une variable par défaut lorsque l'on est pas sûr qu'un champ soit présent.

Comme on a pu le voir plus haut, cela marche bien entendu aussi avec les tableaux :
```
// with an array  
const all = [1,2,3,4]  
const [ one, two, , four, five=5 ] = all  
console.log(one) // 1  
console.log(four) // 4  
console.log(five) //5
```
### Application aux paramètres des fonctions

Ces syntaxes vont typiquement servir à manipuler les paramètres d’une fonction, en particulier dans deux situations :

-   Les paramètres contiennent un objet générique. Par exemple, un composant React prendra systématiquement un objet `props` en paramètres, dont le contenu varie. La décomposition permet de récupérer le contenu des `props` sous forme de variables.
-   Il y a un nombre indéfini de paramètres, mais vous n’avez pas envie d’utiliser un tableau. Cela permet de créer des fonctions avec une API du type `console.log(a,b,c,d,e)`, plus naturelle dans certains contextes.
-   Au sens large, les paramètres sont nombreux et complexes, vous préférez donc utiliser un objet pour tous les stocker, mais vous n’avez pas envie d’alourdir le contenu de votre fonction.

Vous pouvez ainsi écrire des fonctions semblables à celles-ci :
```
// Return the user complete name  
function completeName({firstName, lastName}){  
  return firstName + ' ' + lastName  
}  
const user = {  
  id: 42, age: 200, firstName: 'John',  
lastName:'Doe', email:'john@doe.com'  
}  
console.log(completeName(user))  
​  
// Add various stuffs together  
function addStuffs(firstStuff, ...rest){  
  console.log("We start with", firstStuff)  
  return rest.reduce((sum, stuff) => sum+stuff, firstStuff)  
}  
console.log(addStuffs("hello ", " world"))  
console.log(addStuffs(1,2,3,4))
```
![fonctions-arrow](https://cdn-images-1.medium.com/max/800/1*twdtILGsp7FVC5rdPY5JBw.jpeg)

### Fat arrows 🏹

#### Des fonctions légères

Les **fat arrows**, _contrairement à ce que leur nom indique_, sont des fonctions définies avec une syntaxe très légère.
```
function add1(x){ return x + 1 }  
// est équivalent à :  
const add1 = x => x +1  
​  
function add(a,b) { return a + b }  
// est équivalent à :  
const add = (a,b) => a+b

// on peut écrire des fonctions complexes​  
const addSquare = (a,b) => {  
  const c = a*a + 2*a*b + b*b  
  return c  
}  
​  
// quand on utilise des parenthèses au lieu des crochets {},  
// le "return" est implicite   
//(mais on ne peut écrire qu'une seule expression)  
const addSquareNoReturn = (a,b) => (  
  a*a + 2*a*b + b*b  
)
```
La syntaxe parle d’elle-même, les fat arrows sont des fonctions comme les autres, mais écrites avec un minimum de mots-clés, ce qui allège le code. Un exemple avec un `map`:
```
// map example  
const add1ToArray = (array) => (  
  array.map( arrayElement => arrayElement + 1 )  
)  
add1ToArray([1,2,3]) // [2,3,4]
```
**Moins de code, c’est aussi moins de bugs !**

#### 🐍this lexical, la spécificité des fat arrows

Outre la simplicité de leur syntaxe, le mot-clé `this` a un comportement plus intuitif lorsqu'il est utilisé dans une fat arrow.

Le nom _fat arrow_ provient justement du fait qu’elles encapsulent le contexte courant, ce qui les rend “grosses”. Le contenu du `this` va en quelques sortes être copié, au lieu d'être écrasé comme c'est le cas habituellement avec le mot clé `function`.

Cela facilite l’écriture de fonctions renvoyant d’autres fonctions. On parle plus précisément de **closure,** un concept important en programmation fonctionnelle.
```
function Field(field){  
  this.field = field  
}  
​  
Field.prototype.withoutFatArrow = function prefixer(prefix){  
  return function(){  
    // "this" est un tout nouveau "this", this.field n'existe pas !  
    return prefix  + this.field  
  }  
}  
    
Field.prototype.withFatArrow = function prefixer(prefix) {  
  return () => {  
   // "this" est celui de l'objet Field, comme attendu  
   return prefix + this.field   
  }  
}  
​  
const fourtyTwo = new Field(42)  
console.log(fourtyTwo.withoutFatArrow("field: ")()) // undefined  
console.log(fourtyTwo.withFatArrow("field: ")()) // 42
```
La fonction `prefixer` prend en paramètre un préfixe, et construit une nouvelle fonction qui applique ce préfixe à la variable contenue dans le champ `field`.

Sans fat arrow, on aurait été embêté, car comme on le voit sur cette exemple, définir une nouvelle fonction définit aussi un nouveau `this` : notre champ est perdu.

Les fat arrows nous évitent d’avoir à utiliser des `var self = this` ou des `myFunction.bind(this)` particulièrement illisibles pour résoudre ce problème, ce qui simplifie fortement le code.

### function vs fat arrow

**On va donc utiliser le mot clé `function` :**

-   pour créer des classes, quoique l’on utilise désormais plutôt le mot-clé `class` apparu avec ES6, plus naturel
-   pour créer des méthodes qui exploitent le contexte courant contenu dans `this`

**Et les fat arrows :**

-   pour créer des fonctions à l’intérieur d’une autre fonction, sans pour autant écraser le contexte courant
-   pour écrire de petites fonctions réutilisables

**Voilà, vous savez tout des nouvelles possibilités de la syntaxe ES6 pour les fonctions, variable et paramètres. Si vous êtes curieux, je vous conseille de vous intéresser à la programmation fonctionnelle, une façon d’écrire son code qui a beaucoup de qualités. Je vous conseille aussi de suivre PointJS pour être informés de nos prochains articles !**

### Liens utiles

-   [Object rest spread transform](https://babeljs.io/docs/plugins/transform-object-rest-spread/) avec Babel
