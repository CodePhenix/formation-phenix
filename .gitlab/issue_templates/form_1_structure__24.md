---
name: Form structure
about: Création de formulaires
title: "[FORM] Structure"
labels: ""
assignees:
---

## Objectif

In almost all websites, we are led at one point or another to collect user data. Forms are the tool that meets this need. They are used, among other things, for SignUp (account creation), SignIn (login), contact forms, payment forms, and more.

The goal here is to work on the HTML part of the forms, meaning their structure, by reproducing the form provided in the mockups.

Mockups: https://codephenix.com/cours/exercices/5-1-1-formulaire.zip

## Cours associés

IV. Formulaire -> 1/ Structure

## Definition of Done

_Une tache est considérée comme complétée lorsque chacune des sous-taches de cette section ont été complétées._

- [ ] Le formulaire reproduit précisemment les maquettes
- [ ] Le formulaire est responsive

## Code quality:

- [ ] HTML: 0 erreurs/warnings selon les standards du [W3C]()
- [ ] HTML: Les textes visibles ne comportent pas de fautes d'orthographe
- [ ] HTML: Les textes visibles commencent tous par une majuscule
- [ ] HTML: La langue du document est renseignée
- [ ] HTML - SEO: title, description et favicon ont été renseignés
- [ ] HTML - SEO: Si c'est pertinent, les balises sémantiques <header>, <footer>, <main>, <nav>, <section> ont été utilisées
- [ ] CSS: Aucun padding ni margin négatif sauf exception dûment documentée
- [ ] CSS: Aucun padding ni margin supérieur à 50px sauf exception dûment documentée
- [ ] CSS: Le css comporte un "reset CSS" (cf plus bas)
- [ ] CSS: Tous les élements cliquables (liens, boutons, autres) ont un cursor de type pointer
- [ ] CSS: Les `class`, `id` et autres attributs ont des noms respectables et porteurs de sens (pas de `aa` ou `toto` ou `texte2`)
- [ ] JS: Le code est commenté
- [ ] JS: Pas d'erreur ni de logs inutiles dans la console
- [ ] JS: Les variables ont des noms respectables et porteurs de sens

## Code quality ++ (Bonus)

- [ ] HTML - SEO: Description et preview image pour Facebook, Linkedin et Twitter sont renseignées
- [ ] CSS: Les couleurs principales du site sont renseignées dans des variables CSS (ex: `color: var(--main-blue)`)
- [ ] CSS: Les noms de `class` et `id` sont en "hyphens-case" c'est à dire avec des tirets. Bon ex: "btn-submit", mauvais "btnSubmit" ou "btn_submit"
- [ ] JS: Les noms de variables sont en "camel-case" c'est à dire avec des majuscules. Bon ex: "btnSubmit", mauvais "btn_submit"

NB: Reset CSS de Codephenix

```css
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style-type: none;
}
```

## Bonnes pratiques de communication

Vous êtes en phase d'apprentissage et s'il est crucial que vous développiez votre autonomie en essayant et en cherchant
par vous même il est tout de même courant pour un développeur de demander de l'aide.
Pour cela voici un petit florilège des phrases/choses à éviter:

- dire "Ca marche pas" sans expliquer précisément ce qui ne marche pas
- "J'comprends pas" sans donner de contexte
- "... du coup j'ai tout supprimé et j'ai tout recommencé"
- "J'ai dit à l'ordi de le faire mais il ne le fait pas"
- dire "JAVA" au lieu de "Javascript": ca n'a rien à voir !!!!!!!!!!!

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._

- [ ] ...