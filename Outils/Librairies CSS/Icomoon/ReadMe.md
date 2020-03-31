# IcoMoon



IcoMoon fournit de nombreuses icônes facilement intégrables dans vos pages web.



**Quelles icônes ?**

Le fichier `demo.html` présente les différentes icônes que vous avez à disposition.  



**Comment en intégrer à ma page web ?**

Pour intégrer des icônes IcoMoon à votre page web, vous devez reliez le fichier `icomoon.css` à votre page web, comme ceci :

```html
<link rel="stylesheet" href="css/icomoon.css">
```



***Attention***, ce fichier fait appel aux 4 fichiers présents dans le dossier `fonts`, à savoir :

* `icomoon.eot`
* `icomoon.ttf`
* `icomoon.woff`
* `icomoon.svg`

Ainsi, si n'oubliez pas d'ajouter également ces fichiers dans l'arborescence de votre projet



Maintenant, il vous suffit de rajouter le nom de l'icône souhaitée, indiqué par le fichier `demo.html` comme nouvelle classe d'un `<span>` : 

```html
<span class="icon-glass"></span>
```



**Puis-je modifier l'icône ?**

Il est tout à fait possible de modifier la couleur et la taille l'icône intégrée, notamment.

Pour cela, il suffit de modifier le css comme ceci :

```html
<style>
    .monIcone {
        color: blue;
        font-size: 45px;
    }
</style>

<span class="icon-glass monIcone"></span>
```

