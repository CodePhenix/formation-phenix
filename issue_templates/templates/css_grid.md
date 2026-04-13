--
name: exos Grid css
about: Exercice sur les grid CSS
title: [CSS] grid
labels: ""
assignees:
---

## Objectif

En CSS, l’essentiel du positionnement se gère avec les propriétés de Flexbox. Cependant, Grid offre un meilleur contrôle sur les éléments et facilite davantage la création de mises en page responsives.
Ces propriétés sont relativement simples mais demandent pas mal de pratique pour être bien comprises et maitrisées.
vous feront réalisés des séries d'exercices pour pratiquer.

Pour débuter, terminez le [mini-jeu](https://cssgridgarden.com/)
il vous aidera à maîtriser les propriétés CSS de Grid de manière ludique.


```html
    <div class="container">
        <div class="item header"></div>
        <div class="item section"></div>
        <div class="item section"></div>
        <div class="item section"></div>
        <div class="item section"></div>
        <div class="item footer"></div>
    </div>
```

Tout d’abord, on crée le conteneur. Il représente la grille où les éléments vont être placés. Pour créer la grille, il suffit de donner la propriété grid à display. ```display: grid;```

```css
.container{
    width: 800px;
    height: 1000px;

    border: solid 1px black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;
}
```

Ensuite, on peut définir pour chaque élément l’espace qu’il occupe dans la grille grâce à grid-column et grid-row.

```css
.header{
    grid-column: 1 / 5;
    grid-row: 1 / 2 ;
}
.section{
    grid-row-start: 2 ;
    grid-row-end: 6 ;
}
.footer{
    grid-column: 1/5;
}
```

[Maquette](https://github.com/CodePhenix/formation-phenix/tree/main/interface/exercices/grid_css/maquette.png)


## Definition of Done

_Une tache est considérée comme complétée lorsque chacune des sous-taches de cette section ont été complétées._

Pour **chacune** des maquettes:
- [ ] Finalisez le mini-jeu
- [ ] Les maquettes ont été fidèlement reproduites.

{% include 'common/CODE_QUALITY.md' %}

{% include 'common/ATTITUDE.md' %}

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._