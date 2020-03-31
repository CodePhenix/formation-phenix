# RexEX Cheatsheet

Référence des éléments de RegEx



## Structure

```js
var regex = /motif/flags;
```



## Éléments

### Groupes

| Symbole | Comportement         |
| ------- | -------------------- |
| (  )    | Groupe capturant     |
| (?:  )  | Groupe non-capturant |



### Caractères

| Symbole  | Comportement                                                 |
| -------- | ------------------------------------------------------------ |
| f        | Matche le caractère `f` littéralement                        |
| [ABC]    | Ce groupe de caractères matche `A`, `B`, OU `C` littéralement |
| [A-Za-z] | Matche tout l'alphabet, majuscule comme minuscule            |
| \d       | Equivalent à [0-9]                                           |
| \s       | Matche l'espace et le retour à la ligne (les *whitespace* en général) |
| .        | Matche *n'importe quel caractère*                            |
| \$       | Echappe le caractère `$` pour le matcher littéralement       |



### Ancres

| Symbole | Comportement   |
| ------- | -------------- |
| ^       | Début de ligne |
| $       | Fin de ligne   |





### Quantificateurs

| Symbole | Comportement                                             |
| ------- | -------------------------------------------------------- |
| {x, y}  | Répète l'élément précédent entre x et y fois             |
| {x, }   | Répète l'élément précédent au moins x fois (sans limite) |
| *       | Equivalent à {0, }                                       |
| +       | Equivalent à {1, }                                       |
| ?       | Equivalent à {0, 1}                                      |



### Exemples

Pour sélectionner tout ce qui est après "Composition: "
Composition: 100% Coton

```
(?:Composition:)(.*)(?:)
```



