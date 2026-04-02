---
name: [CSS] Animations
title: [CSS] Animations
labels: ""
assignees:
---

## Objectif

Découvrir les animations CSS **de façon très basique** et savoir créer :

- une rotation perpétuelle (loader)
- un fade-in
- un translate

## Cours associés

- `animation`
- `@keyframes`
- `transform`
- `opacity`

---

## Mini tuto express

Une animation CSS se fait en 2 étapes :

1. Définir les étapes avec `@keyframes`
2. Appliquer l'animation à un élément avec la propriété `animation`

### 1) Définir des étapes

```css
@keyframes monAnimation {
  from {
    /* état de départ */
  }
  to {
    /* état d'arrivée */
  }
}
```

### 2) Appliquer l'animation

```css
.element {
  animation: monAnimation 1s linear infinite;
}
```

Ce raccourci signifie :

- `monAnimation` = nom des keyframes
- `1s` = durée
- `linear` = vitesse constante
- `infinite` = répète sans fin

---

## Exercice 1 — Rotation perpétuelle (loader)

### But

Créer un loader qui tourne en boucle.

### HTML de départ

```html
<div class="loader"></div>
```

### Exemple de résultat attendu

```css
.loader {
  width: 60px;
  height: 60px;
  border: 6px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

### À faire

1. Donner une taille au loader (`width` / `height`)
2. Faire un rond avec `border-radius: 50%`
3. Créer un effet d'anneau avec `border`
4. Faire tourner le loader en continu de `0deg` à `360deg`

### Indices

- Utilise `transform: rotate(...)`
- Utilise `animation: ... infinite`

---

## Exercice 2 — Fade-in

### But

Faire apparaître un bloc progressivement.

### HTML de départ

```html
<section class="card fade-in">
  <h2>Bienvenue</h2>
  <p>Ce bloc doit apparaître en douceur.</p>
</section>
```

### Exemple de résultat attendu

```css
.fade-in {
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### À faire

1. Commencer avec `opacity: 0`
2. Finir avec `opacity: 1`
3. Lancer l'animation une seule fois au chargement
4. Garder l'état final visible

### Indices

- Durée recommandée : `700ms` à `1s`
- Utilise `forwards` pour conserver l'état final

---

## Exercice 3 — Translate

### But

Faire entrer un élément en glissant depuis la gauche.

### HTML de départ

```html
<button class="btn slide-in">Commencer</button>
```

### Exemple de résultat attendu

```css
.slide-in {
  animation: slideIn 0.6s ease-out forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(-40px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### À faire

1. Position de départ : décalée à gauche (`translateX(-40px)`)
2. Position finale : normale (`translateX(0)`)
3. Option bonus : combiner avec un léger fade-in

### Indices

- Utilise `transform: translateX(...)`
- Tu peux animer `transform` et `opacity` ensemble

---

## Défi final (optionnel)

Sur une mini page HTML :

- afficher un loader pendant 2 secondes
- puis afficher un bloc avec un fade-in
- puis faire glisser un bouton avec un translate

Objectif : enchaîner les 3 effets vus dans la séance.

## Definition of Done

_Une tache est considérée comme complétée lorsque chacune des sous-taches de cette section ont été complétées._

- [ ] Je sais créer un loader avec une rotation infinie.
- [ ] Je sais créer une animation de fade-in.
- [ ] Je sais créer une animation avec translate.
- [ ] J'ai réalisé les 3 exercices.

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._
