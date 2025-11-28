---
name: [Terminal] Alias 2 (apt)
about:
title: "[Terminal] Alias 2 (apt)"
labels:
assignees:
---

## Objectif

Régulièrement, pour mettre à jour l'ordinateur, il faut taper plusieurs commandes `apt` dans le terminal.

```
$ sudo apt update
$ sudo apt upgrade
```

On peut déjà le simplifier en regroupant les deux commandes en une seule:

```
$ sudo apt update && sudo apt upgrade
```

Mais on peut aller plus loin en créant un alias pour cette commande.
Pour cela, modifiez le fichier de configuration du terminal `.bashrc` ou `.zshrc` pour ajouter un alias `maj` qui exécute cette commande.

## Definition of Done

_Une tache est considérée comme complétée lorsque chacune des sous-taches de cette section ont été complétées._

- [ ] Lorsque je lance `maj` dans le terminal, cela exécute `sudo apt update && sudo apt upgrade`