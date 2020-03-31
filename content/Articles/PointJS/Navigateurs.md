# Un JavaScript, des navigateurs


Les bases — Épisode 3
### IE, Firefox, Chrome… un Safari de navigateurs !

Si vous êtes un développeur web consciencieux, vous travaillez certainement avec Chrome, Firefox ou Safari dans le pire cas. Mais vos utilisateurs eux, peuvent utiliser virtuellement n’importe quoi pour se connecter à Internet, de Firefox à IE en passant par les navigateurs mobiles ou des aliens, comme le navigateur 100% texte Lynx.

Et n’oubliez pas que certains internautes sont en situation de handicap et comptent sur vous pour produire des sites accessibles avec les navigateurs spécifiques (meta tags, alternatives textes sur les images, etc.).

![](https://cdn-images-1.medium.com/max/800/1*84oJrQzxvxVgDViQm9-Zcw.png)

Chrome est de très loin le navigateur le plus utilisé. Mais près de 40% des utilisateurs passent par d’autres navigateurs, ne les ignorez pas !

Bref, l’idée est qu’il existe une infinité de navigateurs. Or, si c’est le navigateur qui est chargé d’exécuter votre code JavaScript, comment être sûr qu’il l’exécute correctement ?

Plusieurs technologies permettent traiter ce problème de manière automatisée, sans avoir à écrire une base de code pour chaque moteur d’exécution. Avant de les voir, découvrons plus en détail le fonctionnement d’un navigateur.

### Sous le capot, des moteurs

#### Moteur de rendu HTML (layout engine)

L’objectif premier des navigateurs est d’afficher des pages HTML. Pour ce faire, ils utilisent des moteurs de rendu indépendants, spécialisés dans l’affichage de pages web. Ce ne sont d’ailleurs pas les seuls, les clients mails incluent eux aussi un moteur de rendu HTML.

Safari utilise à l’heure où nous écrivons ces lignes le moteur WebKit, Chrome et Opéra le moteur Blink (un fork de WebKit), et Firefox le moteur Gecko.

Le moteur de rendu HTML n’a pas d’impact sur l’exécution du JavaScript, mais c’est lui le responsable lorsque votre CSS ne s’affiche pas correctement d’un navigateur à l’autre, selon s’il respecte plus ou moins bien les standards imposés par la W3C.

On utilise parfois des préfixes (`-moz-machin`) pour activer des fonctionnalités CSS encore standard, [PostCSS](https://postcss.org/) nous permettra de les générer automatiquement.

#### Moteur d’exécution du JavaScript

**_Un standard de l’ECMA pas toujours respecté_**

Le second moteur, qui nous intéresse le plus, est le moteur JavaScript :

-   V8 pour Chrome (utilisé aussi par Node)
-   SpiderMonkey pour Firefox
-   Nitro pour Safari
-   Chakra chez IE et Edge

Cette fois, le moteur a un impact direct sur l’exécution de votre code. De façon résumée, le JavaScript est une implémentation d’un standard de l’Ecma International, d’où les noms d’ECMAScript, avec des numéros de version (ES6, et bientôt ES7, ES8).

Malheureusement tout le monde ne respecte pas ce standard, surtout les navigateurs mobiles ou léger (et bien sûr, Internet Explorer, dernier de la classe en la matière). En particulier, les fonctionnalités les plus récentes peuvent mettre du temps à être réellement disponibles dans les navigateurs.

#### Transpileur et polyfill pour le support de tous les navigateurs

L’utilisation d’un _transpileur_ (Babel, présenté dans sa propre fiche) nous permet d’utiliser du JS dernière génération en le traduisant automatiquement en un code lisible par tous.

Si une fonctionnalité native (`fetch` pour envoyer une requête par exemple) n'est pas supportée, là, pas échappatoire : la seule alternative est un _polyfill_, un morceau de JavaScript qui implémente (si possible) la fonctionnalité manquante mais sera nécessairement plus lent ou moins complet.

### BOM DOM BOUM💣

#### Le Browser Object Model (`window`)

Le Browser Object Model est tout simplement la définition de l’ensemble des fonctions fournies par un navigateur dans l’objet `window`. Ça y est, vous connaissez enfin son nom officiel !

Vous y trouverez les fonctions qui vous permettent de manipuler le navigateur, comme par exemple la `console` pour afficher des messages.

Deux fonctionnalités vous intéresseront en particulier :

-   `window.location`, `window.history` pour naviguer entre les pages et manipuler l'historique
-   Et surtout `window.document`, une représentation de la page HTML ouverte dans l'onglet courant. C'est justement l'occasion de parler du DOM.

#### Le DOM (`window.document`)

Le DOM est l’API qui vous permet de manipuler la page HTML. Elle est particulièrement riche, vous pourrez vous référer à la [documentation MDN](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model) pour plus de détails.

`document.querySelector(*selector*)` vous permet de récupérer un élément de la page, comme le ferait jQuery avec `$("#whatever")`, il s'agit de la fonction du DOM la plus importante pour nous.

Elle renvoie un `Element` (`HTMLELement` en général, `SVGElement` pour le SVG), dont vous pouvez manipuler les attributs. [La documentation suivante décrit l'API Element](https://developer.mozilla.org/fr/docs/Web/API/Element).

Note : le `window` est implicite, `window.document` équivaut à `document`, de même que `window.x = 42` est équivalent à `x = 42`.

**Heureusement, comprendre les arcanes profondes du navigateur n’est pas crucial pour produire du code JavaScript, surtout grâce aux frameworks modernes tels que React, Vue ou Angular.**

**Ces APIs sont aujourd’hui plutôt utiles aux développeurs qui souhaitent construire leurs propres framework (peut-être vous un jour ?) ou créer du code très optimisé.**

### Sources

-   [Usage des navigateurs](https://www.w3counter.com/globalstats.php)
-   [Principe d’accessibilité](https://www.w3.org/WAI/intro/people-use-web/principles)
-   [Can I use](https://caniuse.com/)
-   [Référence du BOM](https://www.w3schools.com/js/js_window.asp)
-   [Référence du DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model)
