---
name: Form validation
about: Validation de formulaires
title: "[FORM] Validation"
labels: ""
assignees:
---

## Objectif

Dans la quasi totalité des sites, nous sommes amenés à un moment ou à un autre à recueillir les données de
l'utilisateur. Les formulaires sont l'outil qui répond à ce besoin. Ils servent entre autres au SignUp (création de compte),
au SignIn (connexion), aux formulaires de contact, aux formulaire de paiements ...

L'objectif ici est de travailler la partie validation des formulaires.

En reprenant le formulaire que vous aviez recemment créé, ajoutez les validations détaillées dans la section DoD

## Cours associés

IV. Formulaire -> 2/ Validation

## Definition of Done

_Une tache est considérée comme complétée lorsque chacune des sous-taches de cette section ont été complétées._

[cf exemple](https://codephenix.fr/interface/cours/exercices/5-2-1-verification-form.gif)

Les contraintes suivantes sont contrôlées dynamiquement et un message est affiché en cas d'erreur:

- [ ] les champs "Nom" et "Prénom" ne sont pas vides et ne contiennents que des lettres, espaces et tirets
- [ ] le champs "Numéro de téléphone" a le bon format (8 chiffres et commençant par 0)
- [ ] le champs "Code postal" a le bon format (5 chiffres)
- [ ] les champs "email" et "confirmation email" ont un format d'adresse email

Au clique sur l'envoi du formulaire,

- [ ] on vérifie que, email et confirmation emails sont identiques
- [ ] on vérifie que, mot de passe et confirmation mot de passe sont identiques
- [ ] si tout est bon, on affiche un message de confirmation

Et bien sûr:

<!-- CODE_QUALITY_START -->
<!-- CODE_QUALITY_END -->

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._

- [ ] ...
