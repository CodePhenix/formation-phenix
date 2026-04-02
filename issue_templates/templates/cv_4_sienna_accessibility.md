---
name: CV - Accessibilité - Widget Sienna
title: CV - Accessibilité - Widget Sienna
labels: ""
assignees:
---

## Contexte

Il est très important de prendre en compte l'accessibilité de votre site quand vous codez. En gros, il faut le coder
de telle manière à ce que les personnes mal-voyantes puissent quand même naviguer sur votre site.

#### Bonnes pratiques

Pour se faire, voici les bonnes pratiques:

- Respecter les standards du W3C
- HTML sémantique (header, nav, main, button… → éviter les div partout)
- Toujour mettre des alt à vos balises images
- Bien faire attention aux contrastes des couleurs: vous avez ce site pour le tester https://coolors.co/contrast-checker/112a46-acc8e5
- Utiliser l'attribut aria
- Navigation clavier OK (tab, focus visible, pas de piège)
- Formulaires accessibles (label, erreurs claires)
- Responsive & zoom (200% sans casse)
- Ne pas dépendre uniquement de la couleur

#### Outils

- Un autre outil très utile et facile à installer est le Widget - Sienna que vous allez installer sur votre site CV.
- L'autre outil, très utile pour **tester** est l'outil lighthouse disponible dans la console de google chrome. Attention il ne marche que avec des sites en ligne.

## Definition of Done

- [ ] En suivant la documentation, https://accessibility-widget.pages.dev/, vous avez installé le widget sur votre CV
- [ ] En utilisant l'outil LightHouse, donnez en commentaire du ticket, le score du site https://codephenix.fr et des préconisations pour l'améliorer.
- [ ] En commentaire de ce ticket, vous avez répondu à la question suivante: "c'est quoi l'attribut ARIA"
