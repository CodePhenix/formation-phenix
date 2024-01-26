# Script du matin

L'objectif de cet exercice est de réaliser votre premier script en shell.
Un script est un petit programme qui exécute une série d'instruction.
Notre but ici est de créer un petit outil que l'on pourra lancer chaque matin qui:

- A/ dit bonjour
- B/ affiche la date actuelle
- C/ lance vscode
- D/ ouvre le board GitHub dans le navigateur

## Etape 0: Initialisation du repo sur GitHub

1. Se rendre sur GitHub et créer un nouveau repo `morning_script`

- privé
- avec un Readme.md

2. Cloner le repo sur votre ordinateur

## Etape 1: Initialisation du script

Dans le nouveau repo:

1. Créez un fichier `matin.sh` avec le contenu suivant

```sh
#!/bin/bash

echo "Bonjour <Mettre votre nom ici>!";
```

2. Rendre ce fichier executable:

```sh
# cd au niveau du fichier matin.sh
ls -al # pour voir les permissions sur le fichier
chmod +x matin.sh
ls -al # constater la différence
```

3. Tester votre script avec `./matin.sh`

Félicitation vous avez écrit votre premier script !

## Etape 2: Réalisation du script

### Date du jour

1. Chercher sur google comment afficher la date du jour
2. Ajouter la commande au script
3. Sauvegardez votre code via un commit

### Lancer VSCODE

1. Chercher sur google comment lancer VSCODE
2. Ajouter la commande au script
3. Sauvegardez votre code via un commit

### Ouvrir le board GitHub sur le navigateur

1. Chercher sur google comment ouvrir une url
2. Ajouter la commande au script pour ouvrir "https://github.com/orgs/CodePhenix/projects/5/views/2"
3. Sauvegardez votre code via un commit

## Etape 3: Créer un alias

Le matin ce n'est pas très pratique de devoir se rendre dans le dossier pour pouvoir lancer `./matin.sh`
Nous allons donc créer un alias pour pouvoir lancer directement notre commande. Pour ceci:

1. Ouvrir à l'aide de `nano` le fichier `~/.bashrc`
2. Ajouter à la fin la ligne suivante `alias matin="./<chemin vers votre repo>/matin.sh"`
3. Recharger votre terminal via `source ~/.bashrc` ou en réouvrant un nouveau terminal
4. Testez votre nouvelle commande `matin`
