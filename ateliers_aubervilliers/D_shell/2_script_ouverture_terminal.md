# Script du matin

L'objectif de cet exercice est de réaliser un script qui vous dit bonjour à chaque fois
qu'on ouvre le terminal !

## Etape 1: Création du script

Dans le repo `morning_script`:

1. Créez un fichier `ouverture.sh` qui vous dit "Bonjour" en utilisant la commande `echo`
2. Le rendre executable avec `chmod +x ouverture.sh`
3. Tester votre script avec `./ouverture.sh`

## Etape 2: Créer un alias

1. Vous rendre dans votre home avec un simple `cd`
2. Ouvrir à l'aide de `nano` le fichier `.bashrc`
3. Ajouter à la FIN la ligne suivante `alias ouverture="<chemin absolu vers votre repo>/ouverture.sh"`
4. Recharger votre terminal via `source ~/.bashrc` ou en réouvrant un nouveau terminal
5. Testez votre nouvelle commande `ouverture`

## Etape 3: Lancement de la commande au lancement du terminal

1. A la fin de votre `~/.bashrc` ajoutez simplement la ligne suivante

```
ouverture
```

## Etape bonus: "Pimper" votre message

1. Aller sur https://www.asciiart.eu/text-to-ascii-art pour créer une belle version de votre message
2. Dans `ouverture.sh` remplacez votre `echo` en vous inspirant du bout de code suivant

```sh
cat << "EOF"
 _____                    _                       _ _ _                   _
|_   _|   _    ___  ___  | | ___   _ __ ___   ___(_) | | ___ _   _ _ __  | |
  | || | | |  / _ \/ __| | |/ _ \ | '_ ` _ \ / _ \ | | |/ _ \ | | | '__| | |
  | || |_| | |  __/\__ \ | |  __/ | | | | | |  __/ | | |  __/ |_| | |    |_|
  |_| \__,_|  \___||___/ |_|\___| |_| |_| |_|\___|_|_|_|\___|\__,_|_|    (_)
EOF
```
