# Syntaxe ES6 : Les paroles, les paroles, les paroles


Les bases — Épisode 8




### Un langage pour manipuler des documents textes, vraiment ?

Concernant les chaînes de caractères, le JavaScript est un langage très classique. Les quotes simples `'` et doubles `"` sont équivalentes : `"foobar" == 'foobar'`.

Et comme dans tous les langages, nous pouvons accéder à quelques caractères spéciaux, pour revenir à la ligne ou ajouter une tabulation.
```
console.log("\tA tab and a line carriage return\n")
```
Pour **échapper les caractères**, c’est-à-dire annuler l’effet des caractères spéciaux, on utilise un **antislash** `\` .
```
console.log('file : \'home/my-file\'') // file : 'home/my-file'  
console.log("file : \"home/my-file\"") // file : "home/my-file"  
console.log("file : C:\\\\my-file") // file : C:\\my-file
```
Une chaîne de caractère est un simple tableau mutable avec des fonctions supplémentaires, détaillées comme toujours dans la doc MDN, et relativement classiques.
```
const hello = "world"  
console.log(hello[0], "===", hello.charAt(0)) /// w === w
```
Bref, rien de surprenant par rapport à n’importe quel autre langage.

![strings-code](https://cdn-images-1.medium.com/max/800/1*uy5dhCdOXyV8VNsuK6pNpg.jpeg)

### Les templates ES6

Générer des chaînes de caractères complexes à partir de variables était jusqu’à présent fastidieux, un comble pour un langage destiné à manipuler et générer dynamiquement du code HTML. Un exemple de code pour afficher un élément HTML complexe :
```
console.log(  
  "<h2> Let's talk about Pi (" + pi + ")</h2>\n" +  
  "<div><strong name=\"" + pi + "\">Pi*2 = " + pi*2 + "</strong></div>"  
)
```
Le code devient rapidement illisible. Une nouvelle syntaxe ES6 vient encore nous sauver, il s’agit des **template literals** ou **template strings**.

On les crée avec des **backticks** `` ` `` (en dessous de la touche 7 sur un clavier azerty), et l’on peut y insérer des expressions dans des blocs `${}`. Voici le même élément, beaucoup plus lisible grâce aux template literals :
```
console.log(  
  `  
<h2> Let's talk about Pi (${pi})</h2>  
<div><strong name="${pi}">Pi x 2 = ${pi * 2}</strong></div>  
  `  
)
```
Ces expression seront ensuite _interpolées_, c’est-à-dire remplacées par leur valeur, ce qui donnera le texte suivant :
```
<h2> Let's talk about Pi (3.14)</h2>  
<div><strong name="3.14">Pi x 2 = 6.28</strong></div>
```
**Cette syntaxe est nettement plus claire, surtout lorsque l’on manipule du HTML, alors surtout n’hésitez pas à en user et en abuser !**

### Sources

-   [Doc MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String)
-   [Doc Google pour les template strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)
