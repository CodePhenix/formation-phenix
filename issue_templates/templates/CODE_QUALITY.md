Code quality:

- [ ] HTML: 0 erreurs/warnings selon les standards du [W3C]({{html_validator_url}})
- [ ] HTML: Les textes visibles ne comportent pas de fautes d'orthographe
- [ ] HTML: Les textes visibles commencent tous par une majuscule
- [ ] HTML - SEO: title, description et favicon ont été renseignés
- [ ] HTML - SEO: Si c'est pertinent, les balises sémantiques <header>, <footer>, <main>, <nav>, <section> ont été utilisées
- [ ] CSS: Aucun padding ni margin négatif sauf exception dûment documentée
- [ ] CSS: Aucun padding ni margin supérieur à 50px sauf exception dûment documentée
- [ ] CSS: Le css comporte un "reset CSS" (cf plus bas)
- [ ] CSS: Tous les élements cliquables (liens, boutons, autres) ont un cursor de type pointer
- [ ] JS: Le code est commenté
- [ ] JS: Pas d'erreur ni de logs inutiles dans la console
- [ ] Global: Les `class`, `id` et `name` et autres variables ont des noms respectables et porteurs de sens

Reset CSS de Codephenix

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
