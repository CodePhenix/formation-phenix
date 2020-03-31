# Syntaxe ES6 : Des classes très class


Les bases — Épisode 7



### L’héritage par prototype, késako ?

Vous avez déjà programmé en Java, en PHP, en Ruby ou encore en C++ ? Vous avez déjà utilisé la notion d’héritage pour créer des classes spécialisées (`Animal` -> `Chat`) ?

Si oui, oubliez tout ce que vous avez appris. Sinon, tant mieux. JavaScript ne fonctionne pas comme ça, du moins, _pas vraiment_ comme ça.

JavaScript utilise **l’héritage par prototype** (_prototypal inheritance_), par opposition à l’héritage dit “classique”. Nous ne rentrerons pas dans les détails ici, car il s’agit d’une notion relativement complexe.

Ce qu’il faut retenir c’est que JavaScript utilise un mécanisme de clonage des objets. Vous avez un animal, et vous voulez un chien ? Clonez cet animal, ajoutez lui 4 pattes, des oreilles et de quoi aboyer. Vous voulez faire aboyer un canard ? Clonez un chien et croisez le avec votre canard, il saura aboyer.

![classes-science](https://cdn-images-1.medium.com/max/800/1*Foor2xTLl9-m9bBr_Mrxsw.png)

A ce stade, ce n’est plus de la science, c’est de la sorcellerie

Pas d’interfaces, de classes abstraites etc., tout passe uniquement par le **prototype** de la classe, qui est un objet comme un autre. Le problème, comme souvent en JavaScript avant l’avènement d’ES6, c’est la syntaxe…

### 🐍Deux exemples pour bien comprendre

#### `function`, mot-clé polyvalent pour une syntaxe perturbante

Attention, ça va piquer : voici une classe définie en JavaScript “traditionnel”.

```js
**// La classe Animal  
**function Animal(name){  
  this.name = name  
}

**// Une méthode de la classe Animal  
**Animal.prototype.showName = function(){  
  console.log(this.name)  
}  
​

**// Une classe chien qui hérite d'"Animal"** function Dog(name){  
  Animal.call(this, name)  
}

**// Object.create fait une copie du prototype,  
// pour bien distinguer Dog et Animal**  
Dog.prototype = Object.create(Animal.prototype)  
Dog.prototype.bark = function(){  
  console.log(this.name + " says: BARK")  
}  
​

**// Exemple d'utilisation  
**const rex = new Dog('rex')  
rex.showName()  
rex.bark()
```
Si cela vous paraît carrément bizarre, c’est normal. Mais lisez jusqu’au bout ! Vous verrez que la syntaxe ES6, présentée dans la section suivante, rend tout ça très naturel.

`function`, en JavaScript, c'est un peu notre homme à tout faire. Ici, ce mot-clé nous permet de créer un **constructeur de classe**, qui permet d'initialiser le contenu de l'objet `this` et de renvoyer un nouvel objet. **Equivalent classique : constructor()**

Une fois la fonction définie, on peut modifier son champ `prototype`, un champ spécial qui va contenir toutes les méthodes de la classe. **Equivalent classique : les méthodes définies dans la classe**

Notez l’utilisation de `Animal.call` et the `Object.create` lorsque l'on définit la sous-classe Dog.

`call` permet d’appeler une méthode, en changeant son contexte. Ici, on demande à la classe `Animal` d'initialiser notre chien. **Equivalent classique : super()**

`Object.create` permet de faire une copy de l'objet. Comme ça, même si la classe `Animal` est modifiée par la suite, nos chiens eux ne changent pas. **Equivalent classique : pas vraiment d'équivalent**

![classes-lights](https://cdn-images-1.medium.com/max/800/1*l6L72qPu34Bvte8g88swJQ.png)

Hmmm… pas si simple tout ça

C’est un peu surprenant au début, mais encore compréhensible. Passons donc à un exemple plus complexe.

#### Version 2, toujours bizarre
```
**// Un canard qui aboit**  
function BarkingDuck(name){  
  Animal.call(this, name)  
}

**// Dans cet exemple, on ne clone pas le prototype  
// les modifications sur la classe Dog seront répercutées  
// sur la class BarkingDuck**  
BarkingDuck.prototype = Dog.prototype  
BarkingDuck.prototype.couac = function(){  
  console.log('COUAC COUAC')  
}

**// Exemple :**  
const daffy = new BarkingDuck("daffy")  
daffy.bark()

**// Exemple de modification sur Dog   
// repercutée sur BarkingDuck​**  
Dog.prototype.bark = function(){  
  console.log(this.name + " is barking loudly")  
}  
daffy.bark()  
daffy.couac()
```
Voilà une classe pour le moins… originale. D’après son constructeur, un canard est un animal. Mais l’on remplace son prototype par celui du chien, auquel on ajoute une méthode couac.

Notez que l’on utilise pas `Object.create` dans cet exemple. Si l'on modifie la classe `Dog`, tous nos canards vont aussi être modifiés.

Et après tout, pourquoi pas ? L’héritage par prototype nous offre une grande souplesse. Mais n’oublions pas : un grand pouvoir implique de grandes responsabilités…

![classes-cat-crowned](https://cdn-images-1.medium.com/max/800/1*QO2I6H1SPuTuEdCSQw-xJA.png)

Personnification des classes ES6

### Les classes ES6, enfin des classes plus class

Vous êtes circonspects après cette présentation ? Alors oubliez tout ça et rappelez vous comment fonctionnent les classes Java, PHP, Ruby.

ES6 intègre une nouvelle syntaxe qui obfusque complètement l’héritage par prototype, et vous laisse écrire des classes comme vous en avez l’habitude.

Le fonctionnement reste le même, mais cela vous évite d’avoir à aborder des notions complexes d’héritage qui ne sont pas forcément utiles en pratique.

Une classe en ES6 ressemble tout simplement à une classe Java :
```
class Vehicle {  
  constructor(nbWheels){  
    this.nbWheels = nbWheels  
  }  
  makeVroom(){  
    console.log("vroom ")  
  }  
}
```
Le constructeur s’appelle systématiquement `constructor` et est obligatoire.

### Héritage avec extends, accès à la classe parent

Et pour l’héritage, même chose.
```
class SpaceCraft extends Vehicle {  
  constructor(nbWheels = 2, hasLaserGuns = true){  
    super(nbWheels)  
    this.hasLaserGuns = hasLaserGuns  
  }  
  makeVroom(){  
    super.makeVroom()  
    console.log("fiiiiush pew pew")  
  }  
  shoot(){  
    console.Log("pew pew")  
  }  
  land(){  
    console.log("deploying " +  
      this.nbWheels + " wheels" +  
      " and landing")  
  }  
}  
const ship = new SpaceCraft(2)  
ship.makeVroom() **// vroom fiiiiush pew pew**  
ship.land() **// deploying 2 wheels and landing**
```
`super` correspond à la classe parent, on l'utilise notamment dans le constructeur pour initialiser l'objet ou pour améliorer une méthode sans pour autant l'écraser, par exemple ici dans la méthode `makeVroom`.

### static, getters et setters

Là encore, la syntaxe est très classique :
```
class AutonomousCar extends Vehicle {  
  constructor(nbWheels = 4, anger = "cool"){  
    super(nbWheels)  
    this._anger = anger  
  }  
  static getCompanies() {  
    return [  
      "Tesla",  
      "Google",  
      "Uber"  
    ]  
  }  
​  
  get anger() {  
    switch (this._anger){  
      case "cool": return "It's cool to drive by myself"  
      case "angry": return "HONK HONK! Move off my way!"  
      case "terminator": return "Where is Sarah Connor ?"  
    }  
  }  
  set anger(anger) {  
    if (anger === "terminator"){  
      console.log("War against the machines has begun")  
    }  
    this._anger = anger  
  }  
}  
​  
const christine = new AutonomousCar()  
console.log(AutonomousCar.getCompanies())  
**// Seule la classe à accéès aux méthodes statiques,  
// ce code plantera  
//console.log(christine.getCompanies())  
**​  
console.log(christine.anger) **// "It's cool to drive by myself"**  
christine.anger = "terminator" **// "War against the machines has begun"**
```
Les getters et les setters ne sont pas vraiment des nouveautés, mais ES6 facilite leur utilisation.

Ils permettent de gérer les champs complexes, par exemple lorsqu’un calcul est nécessaire à chaque modification d’un champ ou que d’autres champs en découlent.

**Attention, si vous écrivez `set anger(anger){this.anger = anger }`, vous allez déclencher une boucle infinie**, puisque vous déclenchez un nouveau set. Il faut donc modifier le nom de la variable interne pour qu'il soit différent du nom de la méthode `set`, on utilise généralement un underscorepour différencier la variable de classe de son setter/getter (`this._anger` et `set anger`).

Le mot-clé `static` permet quant à lui dé définir des méthodes qui ne dépendant pas d'une instance précise. Peu importe votre voiture, cela ne change pas la liste des fabriquants de voitures autonomes, on utilisera donc une méthode statique.

**Note :** il n’est pas encore possible de faire la même chose avec des constantes. Il faudra donc écrire `AutonomousCar.MY_CONSTANT = 42` en dehors de la classe si l'on veut définir une constante statique.

**Voilà, vous avez tous les outils en main pour écrire des classes ES6 faciles à lire, et utiliser l’héritage pour rendre votre code réutilisable.**

### Sources

-   [Prototypal inheritance vs classical inheritance](https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical)
