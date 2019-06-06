# La gestion du temps

La gestion du temps est importante en JavaScript ! Elle vous permet de temporiser vos codes et donc de créer, par exemple, des animations, des compteurs à rebours et bien d'autres choses qui nécessitent une temporisation dans un code.

En plus de cela, nous allons aussi apprendre à manipuler la date et l'heure.

## Le système de datation

L'heure et la date sont gérées par un seul et même objet qui se nomme `Date`. 

```js
var dateLiterale = Date();
```

Avant de l'étudier de fond en comble, nous allons d'abord comprendre comment fonctionne le système de datation en JavaScript.

### Introduction aux systèmes de datation

Nous, humains, lisons la date et l'heure de différentes manières, peu importe la façon dont cela est écrit, nous arrivons toujours à deviner de quelle date ou heure il s'agit. En revanche, un ordinateur, lui, possède une manière propre à son système pour lire ou écrire la date. Généralement, cette dernière est représentée sous un seul et même nombre qui est, par exemple : 1301412748510. Vous avez ici, sous la forme d'un nombre assez long, l'heure et la date à laquelle nous avons écrit ces lignes.

Et ce nombre signifie quoi ?

Il s'agit en fait, en JavaScript, du nombre de millisecondes écoulées depuis le 1er janvier 1970 à minuit. Cette manière d'enregistrer la date est très fortement inspirée du système d'horodatage utilisé par les systèmes Unix. La seule différence entre le système Unix et le système du JavaScript, c'est que ce dernier stocke le nombre de millisecondes, tandis que le premier stocke le nombre de secondes. Dans les deux cas, ce nombre s'appelle un **timestamp**.

On l'obtient avec la méthode `now()`

```js
var dateMillisecondes = Date.now();
```



Au final, ce nombre ne nous sert vraiment qu'à peu de choses à nous, développeurs, car nous allons utiliser l'objet `Date` qui va s'occuper de faire tous les calculs nécessaires pour obtenir la date ou l'heure à partir de n'importe quel timestamp.

### L'objet `Date`

L'objet `Date` nous fournit un grand nombre de méthodes pour lire ou écrire une date. Il y en a d'ailleurs tellement que nous n'allons en voir qu'une infime partie.

#### Le constructeur

Commençons par le constructeur ! Ce dernier prend en paramètre de nombreux arguments et s'utilise de différentes manières. Voici les quatre manières de l'utiliser :

```js
new Date();
new Date(timestamp);
new Date(dateString);
new Date(année, mois, jour [, heure, minutes, secondes, millisecondes ]);
```

À chaque instanciation de l'objet `Date`, ce dernier enregistre soit la date actuelle si aucun paramètre n'est spécifié, soit une date que vous avez choisie. Les calculs effectués par les méthodes de notre objet instancié se feront à partir de la date enregistrée. Détaillons l'utilisation de notre constructeur :

- La première ligne instancie un objet `Date` dont la date est fixée à celle de l'instant même de l'instanciation.
- La deuxième ligne vous permet de spécifier le timestamp à utiliser pour notre instanciation.
- La troisième ligne prend en paramètre une chaîne de caractères qui doit être interprétable par la méthode `parse()`, nous y reviendrons.
- Enfin, la dernière ligne permet de spécifier manuellement chaque composant qui constitue une date, nous retrouvons donc en paramètres obligatoires : l'année, le mois et le jour. Les quatre derniers paramètres sont facultatifs (c'est pour cela que vous voyez des crochets, ils signifient que les paramètres sont facultatifs). Ils seront initialisés à 0 s'ils ne sont pas spécifiés, nous y retrouvons : les heures, les minutes, les secondes et les millisecondes.

#### Les méthodes statiques

L'objet `Date` possède deux méthodes statiques, mais nous n'allons aborder l'utilisation que de la méthode `parse()`.

Vu le nom de cette méthode vous pouvez déjà plus ou moins deviner ce qu'elle permet de faire. Cette méthode prend en unique paramètre une chaîne de caractères représentant une date et renvoie le timestamp associé. Cependant, nous ne pouvons pas écrire n'importe quelle chaîne de caractères, il faut respecter une certaine syntaxe qui se présente de la manière suivante :

```js
Sat, 04 May 1991 20:00:00 GMT+02:00
```

Cette date représente donc le *samedi 4 mai 1991 à 20h pile* avec un décalage de deux heures supplémentaires par rapport à l'horloge de Greenwich.

Il existe plusieurs manières d'écrire la date, cependant nous ne fournissons que celle-là, car les dérives sont nombreuses.

Enfin, pour utiliser cette syntaxe avec notre méthode, rien de plus simple :

```js
var timestamp = Date.parse('Sat, 04 May 1991 20:00:00 GMT+02:00');

alert(timestamp); // Affiche : 673380000000
```

#### Les méthodes des instances de l'objet `Date`

Étant donné que l'objet `Date` ne possède aucune propriété standard, nous allons directement nous intéresser à ses méthodes qui sont très nombreuses. Elles sont d'ailleurs tellement nombreuses (et similaires en terme d'utilisation) que nous n'allons en lister que quelques-unes (les plus utiles bien sûr) et en expliquer le fonctionnement de manière générale.

Commençons tout de suite par huit méthodes très simples qui fonctionnent toutes selon l'heure locale :

- `getFullYear()` : renvoie l'année sur 4 chiffres ;
- `getMonth()` : renvoie le mois (0 à 11) ;
- `getDate()` : renvoie le jour du mois (1 à 31) ;
- `getDay()` : renvoie le jour de la semaine (0 à 6, la semaine commence le dimanche) ;
- `getHours()` : renvoie l'heure (0 à 23) ;
- `getMinutes()` : renvoie les minutes (0 à 59) ;
- `getSeconds()` : renvoie les secondes (0 à 59) ;
- `getMilliseconds()` : renvoie les millisecondes (0 à 999).

Ces huit méthodes possèdent chacune une fonction homologue de type « set ». Par exemple, avec la méthode `getDay()` il existe aussi, pour le même objet `Date`, la méthode `setDay()` qui permet de définir le jour en le passant en paramètre.

Chacune de ces méthodes s'utilise d'une manière enfantine : vous instanciez un objet `Date` et il ne vous reste plus qu'à appeler les méthodes souhaitées :

```js
var myDate = new Date('Sat, 04 May 1991 20:00:00 GMT+02:00');

alert(myDate.getMonth()); // Affiche : 4
alert(myDate.getDay()); // Affiche : 6
```



> Grâce à ces méthodes, affichez la date du jour sur votre page web au format "Nous sommes le 19 mai 2019"



Deux autres méthodes pourront aussi vous êtres utiles :

- La méthode `getTime()` renvoie le timestamp de la date de votre objet. 

  *A noter* : Si vous faîtes `new Date().getTime()`, vous obtiendrez le même résultat que `Date.now()`

- La méthode `setTime()` vous permet de modifier la date de votre objet en lui passant en unique paramètre un timestamp.



### Mise en pratique : calculer le temps d'exécution d'un script

Dans de nombreux langages de programmation, il peut parfois être intéressant de faire des tests sur la rapidité d'exécution de différents scripts. En JavaScript, ces tests sont très simples à faire notamment grâce à la prise en charge native des millisecondes avec l'objet `Date` (les secondes sont rarement très intéressantes à connaître, car elles sont généralement à 0 vu la rapidité de la majorité des scripts).

Prenez une fonction que vous avez créé dans un autre projet. Imaginons que vous soupçonniez cette fonction d'être assez lente, vous allez vouloir vérifier sa vitesse d'exécution. Pour cela, rien de bien compliqué !

Commençons tout d'abord par exécuter notre fonction :

```js
fonctionLente();
```

Comment allons-nous opérer maintenant ? Nous allons récupérer le timestamp avant l'exécution de la fonction puis après son exécution, il n'y aura ensuite plus qu'à soustraire le premier timestamp au deuxième et nous aurons notre temps d'exécution ! Allons-y :

```js
var firstTimestamp = new Date().getTime(); // On obtient le timestamp avant l'exécution

fonctionLente(); // La fonction travaille…

var secondTimestamp = new Date().getTime(), // On récupère le timestamp après l'exécution
    result = secondTimestamp - firstTimestamp; // On fait la soustraction

alert("Le temps d'exécution est de : " + result + " millisecondes.");
```





## Les fonctions temporelles

Nous avons vu comment travailler avec les dates et l'heure, mais malgré ça il nous est toujours impossible d'influencer le délai d'exécution de nos scripts pour permettre, par exemple, la création d'une animation. C'est là que les fonctions `setTimeout()` et `setInterval()` interviennent : la première permet de déclencher un code au bout d'un temps donné, tandis que la seconde va déclencher un code à un intervalle régulier que vous aurez spécifié.

### Utiliser `setTimeout()` et `setInterval()`

#### Avec un simple appel de fonction

Ces deux fonctions ont exactement les mêmes paramètres : le premier est la fonction à exécuter, le deuxième est le temps en millisecondes.

Concernant le premier paramètre, il y a trois manières de le spécifier :

- En passant la fonction en référence :

  ```js
  setTimeout(myFunction, 2000); // myFunction sera exécutée au bout de 2 secondes
  ```

- En définissant une fonction anonyme :

  ```js
  setTimeout(function() {
      // Code…
  }, 2000);
  ```

- En utilisant une sale méthode que vous devez bannir de tous vos codes :

  ```js
  setTimeout('myFunction()', 2000);
  ```

  Pourquoi ne pas procéder de cette manière ? Tout simplement parce que cela appelle implicitement la fonction `eval()` qui va se charger d'analyser et exécuter votre chaîne de caractères. 

En ce qui concerne le deuxième paramètre, il n'y a pas grand-chose à dire mis à part qu'il s'agit du temps à spécifier (en ***millisecondes***) à votre fonction. Une bonne chose à savoir c'est que ce temps n'a que peu d'intérêt à être en dessous de 10 ms (environ, cela dépend des navigateurs !) pour la simple et bonne raison que la plupart des navigateurs n'arriveront pas à exécuter votre code avec un temps aussi petit. En clair, si vous spécifiez un temps de 5 ms, votre code sera probablement exécuté au bout de 10 ms.

Faites attention avec la fonction `setTimeout()`, il n'y a pas de « o » majuscule. C'est une erreur très fréquente !



#### Exercices

* Sur votre page web, affichez une horloge qui indiquera la date, l'heure, les minutes et les secondes à tout instant.

- Ajoutez un chronomètre au projet ***Hanjie***



#### Avec une fonction nécessitant des paramètres

Admettons que vous souhaitiez passer des paramètres à la fonction utilisée avec `setTimeout()` ou `setInterval()`, comment allez-vous faire ?

C'est bien simple, nos deux fonctions temporelles possèdent toutes les deux deux paramètres, mais en vérité il est possible d'en attribuer autant que l'on veut. Les paramètres supplémentaires seront alors passés à la fonction appelée par notre fonction temporelle, exemple :

```js
setTimeout(myFunction, 2000, param1, param2);
```

Ainsi, au terme du temps passé en deuxième paramètre, notre fonction `myFunction()`sera appelée de la manière suivante :

```js
myFunction(param1, param2);
```

Cependant, cette technique ne fonctionne pas sur les versions d'Internet Explorer antérieures à la 10, il nous faut donc ruser :

```js
setTimeout(function() {

    myFunction(param1, param2);

}, 2000);
```

Nous avons créé une fonction anonyme qui va se charger d'appeler la fonction finale avec les bons paramètres, et cela fonctionne sur tous les navigateurs !

### Annuler une action temporelle

Il se peut que vous ayez parfois besoin d'annuler une action temporelle. Par exemple, vous avez utilisé la fonction `setTimeout()` pour qu'elle déclenche une alerte si l'utilisateur n'a pas cliqué sur une image dans les dix secondes qui suivent. Si l'utilisateur clique sur l'image il va alors vous falloir annuler votre action temporelle avant son déclenchement, c'est là qu'entrent en jeu les fonctions `clearTimeout()` et `clearInterval()`. Comme vous pouvez vous en douter, la première s'utilise pour la fonction `setTimeout()` et la deuxième pour `setInterval()`.

Ces deux fonctions prennent toutes les deux un seul argument : l'identifiant de l'action temporelle à annuler. Cet identifiant (qui est un simple nombre entier) est retourné par les fonctions `setTimeout()` et `setInterval()`.

Voici un exemple logique :

```html
<button id="myButton">Annuler le compte à rebours</button>

<script>
    (function() {

        var button = document.getElementById('myButton');

        var timerID = setTimeout(function() { // On crée notre compte à rebours
            alert("Vous n'êtes pas très réactif vous !");
        }, 5000);

        button.addEventListener('click', function() {
            clearTimeout(timerID); // Le compte à rebours est annulé
            alert("Le compte à rebours a bien été annulé."); // Et on prévient l'utilisateur
        });

    })();
</script>
```

On peut même aller un peu plus loin en gérant plusieurs actions temporelles à la fois :

```html
<button id="myButton">Annuler le compte à rebours (5s)</button>

<script>
    (function() {

        var button = document.getElementById('myButton'),
            timeLeft = 5;

        var timerID = setTimeout(function() { // On crée notre compte à rebours
            clearInterval(intervalID);
            button.innerHTML = "Annuler le compte à rebours (0s)";
            alert("Vous n'êtes pas très réactif vous !");
        }, 5000);

        var intervalID = setInterval(function() { // On met en place l'intervalle pour afficher la progression du temps
            button.innerHTML = "Annuler le compte à rebours (" + --timeLeft + "s)";
        }, 1000);

        button.addEventListener('click', function() {
            clearTimeout(timerID); // On annule le compte à rebours
            clearInterval(intervalID); // Et l'intervalle
            alert("Le compte à rebours a bien été annulé.");
        });

    })();
</script>
```



### Mise en pratique : les animations avec JavaScript !

Nous avons déjà vu comment réaliser des animations avec CSS. Nous allons maintenant découvrir comment il est possible de le faire avec JS et les fonctions temporelles

Tout d'abord, qu'est-ce qu'une animation ? C'est la modification *progressive* de l'état d'un objet. Ainsi, une animation peut très bien être la modification de la transparence d'une image à partir du moment où la transparence est faite de manière progressive et non pas instantanée.

Concrètement, comment peut-on créer une animation ? Reprenons l'exemple de la transparence : on veut que notre image passe d'une opacité de 1 à 0,2.

```html
<img id="myImg" src="..." style="opacity: 1" />

<script>
    var myImg = document.getElementById('myImg');

	myImg.style.opacity = 0.2;
</script>
```

Le problème ici, c'est que notre opacité a été modifiée *immédiatement* de 1 à 0,2. Nous, nous voulons que ce soit progressif, il faudrait donc faire comme ceci :

```js
var myImg = document.getElementById('myImg');

for (var i = 0.9; i >= 0.2; i -= 0.1) {
    myImg.style.opacity = i;
}
```

Mais encore une fois, tout s'est passé en une fraction de seconde ! C'est là que les actions temporelles vont entrer en action et ceci *afin de temporiser notre code* et de lui laisser le temps d'afficher la progression à l'utilisateur ! Dans notre cas, nous allons utiliser la fonction `setTimeout()` :

```js
var myImg = document.getElementById('myImg');

function anim() {

    var s = myImg.style,
        result = s.opacity = parseFloat(s.opacity) - 0.1;

    if (result > 0.2) {
        setTimeout(anim, 50); // La fonction anim() fait appel à elle-même si elle n'a pas terminé son travail
    }

}

anim(); // Et on lance la première phase de l'animation
```



Et voilà, cela fonctionne sans problème et ce n'est pas aussi compliqué qu'on ne le pense au premier abord ! Alors après il est possible d'aller bien plus loin en combinant les animations, mais, maintenant que vous avez les bases, vous devriez être capables de faire toutes les animations dont vous rêvez !

Vous remarquerez que nous avons utilisé la fonction `setTimeout()` au lieu de `setInterval()` pour réaliser notre animation. Pourquoi donc ? Eh bien il faut savoir que `setTimeout()` est en fait bien plus « stable » que `setInterval()`, ce qui fait que vous obtenez des animations bien plus fluides. Dans l'ensemble, mieux vaut se passer de `setInterval()` et utiliser `setTimeout()` en boucle, quel que soit le cas d'application.

