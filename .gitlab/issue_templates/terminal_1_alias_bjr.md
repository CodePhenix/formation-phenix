---
name: [Terminal] Alias 1 (bjr)
about:
title: "[Terminal] Alias 1 (bjr)"
labels:
assignees:
---

## Objectif

Apprendre à créer des alias dans le terminal pour simplifier les commandes courantes.
1/ Découverte de `echo`

- ouvrir un terminal et lancer la commande `echo coucou` pour afficher un message simple.

2/ Création d'un alias simple

Créer un alias qui me dit "Bonjour".

```
$ bjr
Bonjour Sofien ! Je te souhaite une excellente journée !
```

Pour cela il faut créer un alias dans le fichier de configuration du terminal `.bashrc` ou `.zshrc`:
Pour modifier le fichier de configuration, vous pouvez utiliser un éditeur de texte en ligne de commande comme `nano` ou `vim`. Par exemple, pour ouvrir le fichier `.bashrc` avec `nano`, vous pouvez utiliser la commande suivante :

```

nano ~/.bashrc

```

Ensuite, ajoutez la ligne suivante à la fin du fichier pour créer l'alias `bjr` :

```alias bjr='echo "Bonjour Sofien ! Je te souhaite une excellente journée !"'


## Definition of Done

_Une tache est considérée comme complétée lorsque chacune des sous-taches de cette section ont été complétées._

- [ ] Lorsque je lance `bjr` dans le terminal, cela affiche "Bonjour Sofien ! Je te souhaite une excellente journée !"
- [ ] Lorsque je lance `bsr` dans le terminal, cela affiche "Bonne soirée !"
```