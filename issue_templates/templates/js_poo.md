---
name: POO
about: Exercice sur la programation orianter objet
title: [JS] POO
labels: ""
assignees:
---

# POO
## Objectif

### 📚 1. C’est quoi la POO ?

La Programmation Orientée Objet (POO), c’est une façon d’organiser ton code autour d’objets plutôt que juste des fonctions.

👉 Un objet = un truc qui contient :

des données (propriétés)
des actions (méthodes)

Il peut représenter quelque chose de physique comme une voiture, un stylo, un arbre, et même quelque chose de plus abstrait comme une idée ou encore une émotion.

### 🧠 2. Exemple simple sans POO

```javascript
const user1 = {
  name: "Amine",
  age: 34,
  sayHello: function() {
      console.log("Salut je suis l'objet qui représente " + this.name);
  }
};
```

👉 Ici tu fais déjà de la POO sans le savoir, car la constante user1 est déjà un objet. Mais on va voir qu’on peut aller beaucoup plus loin.

### 🏗️ 3. Le problème avec cette méthode, c’est que c’est peu efficace

Si tu veux créer plusieurs utilisateurs :
```javascript
const user1 = { name: "Amine", age: 25 };
const user2 = { name: "John", age: 30 };
const user3 = { name: "Sara", age: 22 };
```
👉 Tu répètes le code ❌

Pour avoir accès aux éléments de l’objet, il suffit de faire par exemple user1.name, ce qui donne "Amine".

### 🧱 4. Les classes (base de la POO)

En JavaScript moderne, on utilise des classes.

✅ Exemple :
```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Salut " + this.name);
  }
}
```
👉 Explication : on commence par écrire le mot-clé class, puis on donne un nom à cette classe selon les conventions (ici User). Ensuite, tout le contenu de la classe se trouve entre accolades {}.

### ⚙️ 5. Le constructeur

C’est une fonction spéciale qui s’exécute automatiquement à chaque nouvelle instance (on verra ce qu’est une instance juste après).
```javascript
constructor(name, age) {
  this.name = name;
  this.age = age;
}
```

### 🧪 6. Créer des objets (instances)

Pour créer une nouvelle instance de notre objet User, il suffit d’utiliser le mot-clé new suivi du nom de la classe avec les éventuels paramètres :
```javascript
const user1 = new User("Amine", 25);
const user2 = new User("Sara", 22);

user1.sayHello(); // Salut Amine
user2.sayHello(); // Salut Sara
```
👉 Ici, user1 et user2 sont deux objets bien distincts. Ces deux objets peuvent appeler la méthode sayHello() qui affiche un texte dans la console.

### 🧩 7. Les méthodes

Les méthodes sont tout simplement les fonctions de la classe. On les appelle "méthodes" dans le cadre de la POO.

Dans notre classe User, il y a une méthode :
```javascript
sayHello() {
  console.log("Salut " + this.name);
}
```
### 👉 8. Le mot-clé this

Quand this est utilisé dans un objet, il fait référence à l’objet courant.

Exemple :
```javascript
let obj = {
  name: "Rachid",
  hello: function() {
    console.log(this.name);
  }
};
```

👉 Pour accéder à la propriété name depuis l’extérieur, on fait obj.name.

Mais à l’intérieur de l’objet, on utilise this.name.

⚠️ Important :
On ne peut pas utiliser directement obj.name dans une classe, car le nom de l’objet peut changer. C’est pour ça qu’on utilise this.

Exemple : 
```javascript
class obj{
    constructor(){
        obj.name = "amine"
    }
}
console.log(new obj());
```
Dans l’exemple ci-dessus, ça ne va pas fonctionner, mais vous allez avoir l’erreur Uncaught TypeError: "name" is read-only dans le navigateur. En revanche, si vous remplacez obj qui est dans le constructeur par this, cela va fonctionner comme ci-dessous.

```javascript
class obj{
    constructor(){
        this.name = "amine"
    }
}
console.log(new obj());
```

👉 Tu verras souvent que this fait référence à l’objet courant, et c’est vrai.

Il y a toujours un objet en cours, même dans le scope global. Par exemple, dans le navigateur, si tu fais :
```javascript
console.log(this);
```
👉 Tu verras window.


### 🧪 Exercice 1 — Objet simple
👉 Crée un objet car avec :

une propriété brand (ex: "BMW")
une propriété color (ex: "noir")
une méthode describe() qui affiche :
👉 "Cette voiture est une BMW de couleur noir"

### 🧪 Exercice 2 — Classe
👉 Crée une classe Animal avec :

un constructor(name)
une méthode speak() qui affiche :
👉 "Je suis [name]"
👉 Puis crée 2 instances :

un animal "Chat"
un animal "Chien"

### 🧪 Exercice 3 — Comprendre this
👉 Corrige ce code pour qu’il fonctionne :

```javascript 
const user = {
  name: "Mario",
  sayHello: function() {
    console.log("Salut " + name);
  }
};
```

### 🧪 Exercice 4 — Classe avec méthode
👉 Crée une classe User avec :

name et age dans le constructor
une méthode isAdult() qui affiche :
"Majeur" si âge ≥ 18
"Mineur" sinon

### 🧪 Exercice 5
👉 Crée une classe Rectangle avec :

width et height
une méthode getArea() qui retourne l’aire
Rappel : pour calculer l’aire d’un rectangle, on doit faire largeur multipliée par la hauteur.

👉 Exemple attendu :
```javascript
const rect = new Rectangle(5, 10);
console.log(rect.getArea()); // 50
```

### 🧪 Exercice 6 — Ajouter une méthode utile
👉 Reprends la classe User et ajoute :

une méthode introduce() qui affiche :
👉 "Je m'appelle [name] et j'ai [age] ans"
afficher "an" si age ≤ 1 ou "ans" si age > 1

### 🧪 Exercice 7 — Modifier une propriété
👉 Crée une classe BankAccount avec :

owner
balance

👉 Ajoute 2 méthodes :

deposit(amount) → ajoute de l’argent
withdraw(amount) → retire de l’argent

👉 Test :
```javascript
const acc = new BankAccount("Amine", 100);

acc.deposit(50);
acc.withdraw(30);

console.log(acc.balance); // 120
```

### 🧪 Exercice 8 — Condition dans une méthode
👉 Dans BankAccount, améliore withdraw :

❌ Tu ne peux pas retirer plus que ton solde

👉 Si c’est le cas, affiche :
"Fonds insuffisants"

### 🧪 Exercice 9 — Tableau d’objets
👉 Crée plusieurs utilisateurs avec une classe User

👉 Mets-les dans un tableau :
```javascript
const users = [user1, user2, user3];
```
👉 Fais une boucle pour afficher tous les noms

### 🧪 Exercice 10 — Compter quelque chose
👉 Dans la classe User, ajoute une propriété :

isOnline (true ou false)

👉 Fais une fonction qui compte combien d’utilisateurs sont en ligne

### 🧪 Exercice 11 — Héritage (niveau au-dessus)
👉 Crée une classe Animal :

name
méthode speak() → "Je suis un animal"

👉 Crée une classe Dog qui hérite de Animal

👉 Modifie speak() :
👉 "Je suis un chien et je m'appelle Rex"

### 🧪 Exercice 12 — Méthode qui retourne une valeur
👉 Crée une classe Calculator avec :

add(a, b)
multiply(a, b)
subtract(a, b)
divide(a, b)

👉 Attention : ici tu dois return le résultat, pas juste console.log

### 🧪 Exercice 13 — Petit projet (important 🔥)
👉 Crée une classe Todo :

title
isDone (false au début)

👉 Méthodes :

markAsDone() → passe à true

👉 Puis :

Crée plusieurs todos
Mets-les dans un tableau
Affiche seulement celles qui ne sont pas faites

### 🧪 Exercice 14 — Niveau logique
👉 Crée une classe Product :

name
price

👉 Crée un tableau de produits

👉 Fais une fonction qui calcule le prix total

### 🧪 Exercice 15 — Petit challenge 🧠
👉 Crée une classe Counter :

propriété count = 0

👉 Méthodes :

increment()
decrement()
reset()

👉 Test :
```javascript
const c = new Counter();

c.increment();
c.increment();
c.decrement();

console.log(c.count); // 1
```

## Definition of Done

_Une tache est considérée comme complétée lorsque chacune des sous-taches de cette section ont été complétées._

Pour **chacune** des maquettes:
- [ ] Exercice 1 — Objet simple
- [ ] Exercice 2 — Classe
- [ ] Exercice 3 — Comprendre this
- [ ] Exercice 4 — Classe avec méthode
- [ ] Exercice 5
- [ ] Exercice 6 — Ajouter une méthode utile
- [ ] Exercice 7 — Modifier une propriété
- [ ] Exercice 8 — Condition dans une méthode
- [ ] Exercice 9 — Tableau d’objets
- [ ] Exercice 10 — Compter quelque chose
- [ ] Exercice 11 — Héritage (niveau au-dessus)
- [ ] Exercice 12 — Méthode qui retourne une valeur
- [ ] Exercice 12 — Méthode qui retourne une valeur
- [ ] Exercice 13 — Petit projet
- [ ] Exercice 14 — Niveau logique
- [ ] Exercice 15 — Petit challenge

{% include 'common/CODE_QUALITY.md' %}

{% include 'common/ATTITUDE.md' %}

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._