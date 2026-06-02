---
name: Input / const / let / DOM manipulation JS
about: JS Exercise input / const / let / DOM manipulation
title: Input / const / let / DOM manipulation JS
labels: ""
assignees:
---

## Objectif

L'**objectif** sera d'aller chercher des éléments dans le DOM rempli par l'utilisateur, puis de les convertir pour les réafficher sur la page, en utilisant les écouteurs d'évènements.

## Instructions

Télécharger le dossier zippé de cet exercice ici : {{ codephenix_url }}/cours/exercices/exo-js-input-dom.zip

Dézipper le dossier et le placer dans un dossier 'exercices'.

TOUT ECRIRE DANS LE FICHIER `script.js` en suivant les étapes.

Pour chaque étape, coder sous les indications `========== DEBUT DE L'ETAPE [...] ==========` et s'arrêter lorsqu'il est indiqué `========== FIN DE L'ETAPE [...] ==========`.

### Etape 1 : Sélectionner les éléments HTML avec querySelector()
Il nous faut les éléments suivants (allez vérifier dans le fichier HTML !) :
- le bouton de conversion Minuscules (btn-lower),
- le bouton de conversion température Convertir en °C (btn-to-c),
- le bouton de thème Mode sombre (btn-dark).

---

### Etape 2 : Gérer la conversion du texte
– Ajouter un écouteur d'événement "click" sur le bouton Minuscules,
- Quand on clique, récupérer le contenu de l'input de texte,
- Vérifier si le texte n'est pas vide,
- Convertir le texte qu'on a récupéré en minuscules avec toLowerCase(), et afficher le résultat dans la zone text-output.

---

### Etape 3 : Convertir en température
– Ajouter un écouteur "click" sur le bouton Convertir en °C
- Récupérer la valeur de l'input température et la convertir en nombre avec Number()
- Appliquer la formule de conversion de fahrenheit en celsius : (°F − 32) × (5/9)
- Afficher le résultat à l'écran dans temp-output avec la méthode .toFixed(1) pour 1 décimale (1 chiffre après la virgule)

---

### Etape 4 : Gérer le thème dark de la page
– Ajouter un écouteur "click" sur le bouton Mode sombre
- Ajouter ou retirer la classe "dark-theme" sur le document.body en utilisant classList.toggle

---


## Cours associés

- I - 3/ JS : {{ codephenix_url }}/cours/index.php#js-initiation
- II - 2/ Dynamisme JS : {{ codephenix_url }}/cours/index.php#js-initiation2

## Definition of Done:

- [ ] Toutes les étapes du fichier JS sont terminées.
- [ ] Toutes les conversions fonctionnent
- [ ] Je peux changer ma page de thème clair à thème sombre.

{% include 'common/CODE_QUALITY.md' %}

{% include 'common/ATTITUDE.md' %}

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._

- [ ] ...

### Le mot de la fin ?

C'est la première étape pour apprendre à stocker, transformer et réutiliser de la donnée dans le DOM, ça sera utile pour les formulaires plus tard !

**Courage !**