## Code quality:

- [ ] HTML: 0 erreurs/warnings selon les standards du [W3C]({{html_validator_url}})
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
