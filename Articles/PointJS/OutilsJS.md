# Bien s'équiper pour développer en JavaScript


Les bases — Épisode 2


### Utiliser un éditeur de texte moderne

L’éditeur de texte, c’est la deuxième maison du développeur. Alors autant bien le choisir.

Je vous recommande vivement [Visual Studio Code](https://code.visualstudio.com/), VS code pour les intimes. Gratuit, open source (et oui, c’est bien un outil Microsoft), il est conçu en priorité pour le développement web tout en restant relativement généraliste.

![](https://cdn-images-1.medium.com/max/800/0*Bh37fx-uObIdz52A.png)

L’interface de VS Code, qui permet l’installation facile d’extensions pour tous les langages de programmation.

Si vous n’accrochez pas, [Atom](https://atom.io/) (gratuit, open source) et [Sublime Text](https://www.sublimetext.com/) (peu cher, sans durée limite d’essai) sont deux alternatives.

Enfin, vous pouvez utiliser des IDE plus complets, par exemple ceux créés par [JetBrains](https://www.jetbrains.com/products.html#lang=js) (WebStorm, PhpStorm, IntelliJ, etc.).

### Naviguer sur la toile et déboguer côté client

L’éternel débat… Chrome contre Firefox contre Safari contre Opéra ou même IE et Edge… Stoppons net, voici comment choisir votre navigateur pour le développement, étape par étape :

1.  **Choisissez Chrome.**

Voilà, c’est dit. Chrome est un navigateur puissant, fiable, mis à jour, embarqué dans Electron, pour lequel le plus d’outils de développement sont disponibles.

On fera une exception si vous êtes vraiment très familier des outils de développement d’un autre navigateur _et qu’il s’agit de Firefox_, mais c’est vraiment tout.

Les autres navigateurs sont cependant utiles pour tester votre application :

-   Safari pour les appareils Apple
-   Firefox, pour couvrir la majorité des navigateurs et tester votre application en dehors de Chrome
-   Internet Explorer quand vous êtes en entreprise ou sur des machines qui peuvent dater
-   Android < 4.3, via un émulateur Android, pour couvrir la majorité des smartphones

En général, c’est surtout le style CSS qui pose problème lors du passage d’un navigateur à un autre. Si vous utilisez des fonctionnalités JavaScript expérimentales, vous pourrez toujours installer un polyfill pour émuler une fonctionnalité sur tous les navigateurs même lorsqu’ils ne la supportent pas par défaut.

### Trouver les bugs : DevTools

DevTools est l’ensemble des outils de développement de Chrome. Pour les ouvrir, accéder au menu suivant et notez bien le raccourci pour plus tard :

![](https://cdn-images-1.medium.com/max/800/1*r6NpqRjepyxUtUQp49Pl5g.png)

Vous obtenez alors les outils suivants, tous aussi pratiques les uns que les autres :

![](https://cdn-images-1.medium.com/max/800/1*TG_cHLva4_xS_yxqaiCOOA.png)

### De la doc : DevDocs et MDN

Le langage JavaScript et les navigateurs sont riches de fonctionnalités, vous allez avoir besoin de documentation.

[DevDocs](https://devdocs.io/) vous permet de retrouver en quelques clics les API de nombreux langages, CSS, HTML et JavaScript y compris.

La plupart des articles sont issus de la doc [MDN (Mozilla Developper Network)](https://developer.mozilla.org/fr/), relativement complète et en partie traduite en français, même si elle est difficile d’accès.

Et surtout, Google reste votre ami ! Les mots clés `gist` ou `fiddle` vous permettent de retrouver des exemples, et [Stack Overflow](https://stackoverflow.com/) est la référence absolue pour poser vos questions techniques ou trouver des réponses aux questions déjà posées. Même les pros l’utilisent au quotidien.

### Pour essayer tranquillement : JSFiddle

[JSFiddle](https://jsfiddle.net/) est un outil bien pratique, qui vous permet de tester et de partage du code HTML/JS/CSS avec un format 4 cadrans intuitif.

![](https://cdn-images-1.medium.com/max/800/1*dFgkBSJN-AFNnNOyqpE93Q.png)

Ainsi, pas besoin de mettre en place un serveur pour tester une fonctionnalité et expérimenter avec JavaScript.

### Supporter les navigateurs les plus anciens et utiliser les dernières fonctionnalités : Can I use

Même si les polyfills et les transpileurs nous permettent d’avoir une unique base de code pour tous les navigateurs, il peut être nécessaire de vérifier si une fonctionnalité est bien supportée.

[Can I use](https://caniuse.com/) vous permet d’avoir une vue d’ensemble sur le support des fonctionnalités récentes.

**Ces quelques outils et liens vous permettront de démarrer votre pratique du JavaScript, en particulier côté frontend.**

**Bien entendu, cette liste va s’enrichir au fil de votre progression. Nous présenterons de manière plus détaillée les outils modernes tels que Babel ou Webpack dans nos futurs articles, alors suivez PointJS pour ne rien rater !**

### Sources

-   [Chrome DevTools](https://developer.chrome.com/devtools)
-   [DevDocs](http://devdocs.io/)
-   [JSFiddle](https://jsfiddle.net/)
-   [Stack Overflow](https://stackoverflow.com/)
-   [Can I use](https://caniuse.com/)
