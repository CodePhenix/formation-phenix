# Syntaxe ES6 : les variables


Les bases — Épisode 5

### Des variables, mais des constantes aussi

`var var var...` Mot-clé universel du JavaScript, et grand incompris. Non vraiment, `var` a connu des jours meilleurs.

`var`, c'est un cauchemar pour les amoureux du _clean code_. Pourquoi ? Pour une question de _scope_. Le scope est la zone du code dans laquelle une variable est utilisable dans le code, et **le scope des variables JavaScript se situe au niveau des fonctions, pas au niveau des blocs**.

```js
var x = 42  
if (true == true){  
  var y = 43 // y est défini ici  
}  
console.log('x vaut', x) // 42  
console.log('y vaut', y) // 43 ! y est encore défini !  
​  
function f (){  
  var z = 43  
}  
// ne marche pas, z est défini uniquement dans le scope de la   
console.log('z vaut', z) // ReferenceError: z is not defined
```


La bizarrerie dans ce code, c’est `y`, qui est encore défini même en dehors du `if`. Dans beaucoup d'autres langages, le **scope** de la variable `y` se serait limité aux crochets du `if`.

Quand on a beaucoup de variables, ce genre de petits détails peuvent conduire à des bugs relativement vicieux. L’astuce est d’utiliser à tout va des fonctions pour créer des scopes locaux, mais cela nuit à la visibilité du code. ES6 permet de limiter cette prolifération du mot-clé `function`.

Deuxième problème, les `var`... sont des variables. Les utiliser pour définir des constantes n'est pas très propre, un code pourrait tout à fait les modifier par erreur.

ES6 va corriger ce problème en nous fournissant deux mots-clés très pratiques : **`let`** et **`const`**

![variables-snow](https://cdn-images-1.medium.com/max/800/1*ezDBcALZIlU-8BgFK1PcaQ.jpeg)

### `let`, pour des variables scopées, pour de vrai

`let`, c'est le mot-clé qui va tout simplement nous permettre d'avoir un comportement "normal" pour les variables, c'est-à-dire le même que dans la majorité des langages de programmation.
```js
let foo = "bar"  
foo = "foo"  
console.log("foo vaut", foo)  
if (true == true){  
  let hello = "world"  
}  
// ne marche pas, "hello" est défini uniquement dans le scope du if  
console.log("hello vaut", hello) // ReferenceError: hello is not defined
```
Voilà un code déjà plus cohérent, la variable `hello` n'est définie que dans le bloc `if`, un comportement moins propice aux erreurs.

### Et `var` alors ?

**Honnêtement, vous ne devriez plus jamais avoir besoin du mot-clé** **`var`** Vraiment jamais.

Mais comme il y a un thread StackOverflow pour toutes les questions tordues du monde, je vous laisse allez voir plus en détails [celui concernant les cas d’usage de var après l’arrivée de l’ES6](https://stackoverflow.com/questions/31836796/what-is-the-use-case-for-var-in-es6).

En résumé, il s’agit surtout de questions de compatibilité avec certaines librairies ou de cas extrêmes nécessitant d’utiliser le scope global.

![pyramides](https://cdn-images-1.medium.com/max/800/1*2G7jzK0GBdsdmaCUEumyfg.jpeg)

4500 après, une constante JavaScript n’aura toujours pas bougé d’un poil.

### `const`, pour des vraies constantes

Les variables déclarées avec `const` ont le même scope que les variables déclarées avec `let`, mais ont un avantage supplémentaire : elles ne peuvent pas être modifiées. Des variables qui ne varient pas en somme.
```js
const PI = 3.14  
PI = 3.15 // TypeError: Assignment to constant variable
```
#### Ne sous-estimons pas les constantes

On confond parfois variables globales et constantes, ce qui nous amène à limiter l’usage du mot-clé `const` aux constantes universelles (PI, le niveau de log, un seuil, etc.).

Utiliser `const` est au contraire plutôt une bonne pratique, qui nous rapproche de la logique de **l'immutabilité**. L'idée est de se forcer à créer une nouvelle variable dès que l'on fait une modification.

Avec `let`, aucune garantie sur le contenue de la variable :
```js
let x = "salut"  
x = x + " les développeurs"  
// 20 000 lignes et 40 imports plus tard  
console.log("x vaut", x) // aucune idée de ce que x va afficher
```
Avec des `const`, on est sûr de ce que l'on affiche :
```js
const x = "salut"  
const xWithDevs = x + " les développeurs"  
// 20 000 lignes et 40 imports plus tard  
console.log(xWithDevs) // salut les développeurs
```
Et avec un meilleur _naming_ :
```js
const salut = "salut"  
const peopleType = "les développeurs"  
const greetings = salut + " " + peopleType  
// 20 000 lignes et 40 imports plus tard  
console.log(greetings) // salut les développeurs
```
Pour ne pas créer de bugs, le plus simple reste de s’interdire d’écrire des bugs, ce que le mot-clé `const` vous incite à faire.

### 🦂 Les objets, l’immutabilité et Object.freeze

Attention aux objets, **les champs d’un objet défini avec** `const` **ne sont pas eux-mêmes constants**.

Déclarer un objet avec `const`, c'est comme parler avec un ami : vous êtes sûr de savoir à qui vous parlez, mais vous serez incapable de dire ce qu'il a dans les poches.
```js
const johnDoe = {  
  pockets : "2$"  
}  
console.log("john doe possède", johnDoe.pockets) // 2$  

// ne fonctionne pas, car cela reviendrait à détruire John Doe  
// pour le remplacer par une nouvelle personne  
johnDoe = {  
  pockets : "empty"  
} // Erreur  

// parcontre, rien ne vous interdit de lui faire les poches  
johnDoe.pockets = '0$'  
console.log("john doe possède", johnDoe.pockets) // 0$
```
C’est un peu étrange a priori, mais pas incohérent, les objets JavaScript sont par nature faits pour bouger et il est rare d’avoir un besoin absolu de figer un objet.

#### Des objets vraiment constants

Si vous voulez vraiment figer vos objets, par exemple si vous êtes un vrai développeur fonctionnel, un dur de dur, vous pouvez soit utiliser une librairie externe pour l’immutabilité, comme par exemple [**immutable.js**](https://facebook.github.io/immutable-js/), ou simplement utiliser la fonction `Object.freeze`.
```js
// Object.freeze permet de verrouiller un objet, y compris ses champs  
const johnDoe = { pockets: "2$" }  
Object.freeze(johnDoe)  
// vous pouvez toujours essayer de renflouer John, ça ne marchera pas !  
johnDoe.pockets = "4$"  
console.log("john doe possède", johnDoe.pockets) // toujours 2$ !
```
Pour le moment, gardez simplement en tête qu’utiliser `const` et `let` dès que possible permet de rendre votre code plus solide et plus facile à déboguer, sans pour autant vous forcer à changer radicalement votre façon de code.

**En résumé,** **`var`** **est mort, longue vie à** **`let`** **et** **`const`** **!**

### Ressources utiles

-   [Syntaxe des variables scopées](http://es6-features.org/#BlockScopedVariables)
-   [Syntaxe des constantes](http://es6-features.org/#Constants)
-   [Hoisting](https://www.w3schools.com/js/js_hoisting.asp)
-   [Immutable](https://facebook.github.io/immutable-js/)
-   [Rôle de var](https://stackoverflow.com/questions/1470488/what-is-the-purpose-of-the-var-keyword-and-when-to-use-it-or-omit-it)
