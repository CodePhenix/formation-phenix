---
name: Form validation
about: Validation de formulaires
title: [FORM] Validation
labels: ""
assignees:
---

## Objectif

L'objectif ici est de travailler la partie validation des formulaires.

En reprenant le formulaire que vous aviez recemment créé, ajoutez les validations détaillées dans la section DoD.

## Cours associés

IV. Formulaire - 2/ Validation : {{ codephenix_url }}/cours/index.php#js-formulaire

## Definition of Done

Les contraintes suivantes sont contrôlées dynamiquement et un message est affiché en cas d'erreur:

- [ ] les champs "Nom" et "Prénom" ne sont pas vides
- [ ] le champs "Numéro de téléphone" a le bon format (vérifié par une regex) : chaîne commençant éventuellement par +, contenant uniquement des chiffres, des espaces, et avoir entre 10 et 15 caractères après le + optionnel
- [ ] les champs "email" et "confirmation email" ont un format d'adresse email
- [ ] le champ "mot de passe" a le bon format (vérifié par une regex) : au moins une minuscule, au moins une majuscule, au moins un chiffre, au moins un caractère spécial, une longueur minimale de 8 caractères
- Au clique sur l'envoi du formulaire,
    - [ ] on vérifie que "email" et "confirmation email" sont identiques
    - [ ] on vérifie que "mot de passe" et "confirmation mot de passe" sont identiques
    - [ ] si il y a des erreurs, afficher la raison de l'erreur
    - [ ] si tout est bon, on affiche un message de confirmation, comme dans le visuel suivant :

Visuel de l'apparition du message de confirmation : {{ codephenix_url }}/cours/exercices/5-2-1-verification-form.gif

{% include 'common/CODE_QUALITY.md' %}

{% include 'common/ATTITUDE.md' %}

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._

- [ ] ...
