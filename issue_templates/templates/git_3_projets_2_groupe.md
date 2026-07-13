---
name: Multi projets à 2 - Demande client
about: Exercise focusing on understanding git commands, client requirements, problem solving, writing comments, and peer review.
title: Multi projets à 2
labels: ""
assignees:
---

## Objectif

L'objectif est d'apprendre à utiliser les commandes git et les bonnes pratiques dans un travail de groupe, tout en apprenant à lire du code déjà existant, le comprendre, le commenter, utiliser du langage professionnel de développeur, travailler en équipe et faire des peer reviews.

*Travailler à plusieurs, comment on fait ?*

Déjà, en local (sur sa session sur son ordinateur), **chacun travaille sur sa branche !**

Pour ça, dès que vous allez cloner un dépôt (ou *repository* en anglais), on ne touche pas au code ni aux dossiers et fichiers pour le moment.

Avant ça, allez lire la fin du document accessible ici, à partir de "Bonnes pratiques de travail" :

- {{ codephenix_url }}/connaissances/autre/cours-git-howto.pdf

*Et la peer review, en quoi ça consiste ?*

Une peer review est une relecture du code effectuée par un autre collègue développeur.

La peer review permet de :
- Détecter des bugs plus tôt
- Améliorer la qualité du code
- Partager les bonnes pratiques dans l'équipe
- Rendre le code plus lisible et maintenable
- Monter en compétence (autant pour celui qui relit que pour celui qui reçoit les retours)

Selon le contexte, le pair va vérifier par exemple :
- La logique du code (est-ce que ça fait bien ce qui est attendu ?)
- La lisibilité (noms de variables, clarté, structure)
- Le respect des standards, des conventions de nommages
- La performance et la sécurité
- Les tests (présents, pertinents, suffisants)

Comment ça se passe en pratique ?

Le plus souvent :
- Sur GitHub/GitLab, on va créer une Pull Request/Merge Request (faire venir le code d'une branche vers une autre)
- Un ou plusieurs collègues relisent le code avant de réunir les deux branches
- Ils laissent des commentaires (suggestions, questions, corrections)
- Suite à ces retours, on peut ajuster le code si nécessaire
- La Pull Request/Merge Request est validée et fusionnée (ou non)

Exemple de commentaire de peer review :
- "Cette fonction est claire, mais on pourrait la découper en deux pour faciliter les tests."
- "Attention, cette requête n'est pas protégée contre les injections SQL."

**Important : l'état d'esprit**

Une bonne peer review :
- Critique le code, pas la personne
- Est constructif et bienveillant
- Cherche à améliorer le produit, pas à avoir raison

*Oui mais en pratique, on fait comment ?*

Tout d'abord, vous aller récupérer différents projets (un site web de restaurant et un site web de réservation de voyages) disponibles dans un dépôt distant sur GitHub/GitLab avec seulement une branche distante master (ou main) ; pour faire ça, suivez les instructions.

## Instructions

Vous êtes dans un cas de figure où vous travaillez à deux : apprenant A et apprenant B

### Etape 1
**Cloner le dépôt sur sa session/son ordinateur** :
- Dans votre page d'accueil sur GitHub/GitLab, vous avez deux nouveaux projets disponibles, intitulés "Mon Restoto", et "Horizons": vous allez faire la même chose pour les deux projets :
    - Chacun doit cliquer sur "Code" (en bleu à droite sur GitLab ou en vert en haut à droite sur GitHub), puis sur l'image à droite de "Clone with HTTP" ("Copy URL") sur GitLab, ou de l'onglet "HTTPS" ou "SSH" pour GitHub.
    - Dans le terminal, se placer là où on souhaite déposer son projet, puis taper la commande `git clone <url-du-repo>` (à la place de `<url-du-repo>`, mettez l'URL que vous venez de copier ; ne pas oublier de rajouter un `-s` après `http`).
    - Rentrer son username et son mot de passe si besoin ; c'est bon, le projet est cloné en local (sur votre ordinateur).

### Etape 2
**Création de la branche dev** :
- A partir de maintenant, **ON COMMUNIQUE !!!** : pour chaque projet, vous allez effectuer les instructions suivantes :
    - Commencer par un premier projet (par exemple "Horizons") : l'un de vous deux va créer une branche locale appelée "dev", puis la pousser sur GitHub/GitLab ; pour faire ça, l'apprenant B (par exemple) doit se placer dans le terminal sur le projet (`cd horizons` ou `cd mon-restoto`), puis taper : `git checkout -b dev`, puis `git push -u origin dev`
    - L'apprenant B vient de créer une branche en locale appelée "dev" avec la commande `git checkout -b dev`, puis il a poussé cette branche locale "dev" sur le dépôt distant sur GitHub/GitLab avec la commande `git push -u origin dev`, en créant une branche distante appelée également "dev".
    - La personne qui n'a pas fait la manip (l'apprenant A par exemple) doit maintenant récupérer la branche distante "dev", et la mettre en locale sur son ordinateur à lui ; une fois le projet cloné, il faut se déplacer dessus dans le terminal (`cd horizons` ou `cd mon-restoto`), puis taper : `git fetch origin`, puis `git checkout -b dev origin/dev`.
    - L'apprenant A vient de venir chercher toutes les branches et les commits distants de GitHub/GitLab pour les placer en attente sur son ordinateur, puis il a créé une branche locale qu'il a appelée "dev" à partir de la branche distante d'origine "dev".
    - Vous avez donc tous les deux des branches locales "master" (ou "main") et "dev", qui pointent vers les mêmes branches distantes sur GitHub/GitLab.
- Pour le deuxième projet (si vous avez fait ça pour "Horizons", vous pouvez passer à "Mon Restoto"), vous pouvez inverser les rôles (comme ça, chacun fait la manip une fois).
- Pour passer à la prochaine étape, il faut que chacun ait terminé et en soit à la même étape.

### Etape 3
**Corriger le code existant (ajouter des commentaires, changer les noms des classes/IDs/constantes), etc. en travaillant sur une branche locale avant de pousser vers une branche distante** :
- Maintenant, chacun travaille de son côté : l'apprenant A va travailler sur le projet "Mon Restoto" et l'apprenant B va travailler sur le projet "Horizons".
- Le code que je vous ai donné ne fonctionne pas entièrement bien, ou en tout cas il manque certains éléments ; il va falloir le corriger.
- Chacun de votre côté, dans votre terminal, vous allez vous placer sur le dossier local du projet qui vous a été confié, et vous allez :
    - Créer une branche locale à partir de la branche locale "dev" avec la commande `git checkout -b [nom_apprenant/correction_code]` (par exemple : `git checkout -b apprenantA/correction_code`).
    - Si vous tapez la commande `git branch`, vous allez voir toutes vos branches locales.
    - Dans VSCode, ouvrez votre projet, puis lancer un serveur local avec l'extension LiveServer de VSCode, ou utilisez la commande http-server pour servir les fichiers en local (on en a besoin pour utiliser le `fetch()`).
    - Corriger le code existant : il peut y avoir des erreurs d'affichage, des problèmes dans la console (ouvrez la !), des éléments du DOM mal appelés en JS, etc. ; il va falloir corriger tout ça, pour chaque page du site (pour l'instant, ne vous occupez pas du fichier "customer-request.md").
    - Commenter le code, dans les fichiers HTML, CSS, et JS.
    - Une fois votre travail de correction terminé, effectuez les commandes suivantes dans le terminal : `git add .`, `git commit -m blabla`, puis `git push -u origin [nom_branche]` (par exemple `git push -u origin apprenantA/correction_code`).
    - Vous venez de pousser les modifications de votre branche locale sur GitHub/GitLab en créant une branche distante ; maintenant, chaque fois que vous voudrez pousser de nouvelles modifications après avoir fait `git add .` et git `git commit -m "monmessage"`, vous aurez juste besoin de taper la commande `git push`.
    - Normalement, si tout va bien, votre collègue doit voir votre branche que vous venez de pousser apparaître dans le projet sur GitHub/GitLab.
- Pour passer à la prochaine étape, il faut que chacun ait terminé ses corrections sur son projet, et en soit à la même étape.

### Etape 4
**Pull Request/Merge Request et Peer Review** :
- Maintenant, sur GitHub/GitLab, la personne qui a travaillé sur son projet doit faire une Pull Request/Merge Request de sa branche distante de correction vers la branche distante "dev" :
    - par exemple, l'apprenant A a travaillé sur le projet "Mon Restoto" sur sa branche locale "apprenantA/correction_code",
    - il a poussé sa banche locale sur GitHub/GitLab en créant une branche distante du même nom,
    - il doit maintenant choisir "Pull Request/Merge Request" à gauche, préciser qu'il veut fusionner sa branche "apprenantA/correction_code" vers la branche "dev", décider de la personne qui va faire la Peer-Review dans "Reviewers" (la personne qui va vérifier ses changements puis accepter ou non de fusionner sa branche vers le branche "dev") qui sera ici l'apprenant B, puis confirmer la Pull Request/Merge Request.
- Chacun fait ça pour son projet, en mettant l'autre en "Reviewer".
- L'autre personne (le reviewer) va donc pouvoir décider ou non de fusionner les deux branches en comparant les différences sur GitHub/GitLab.
- Une fois la PR/MR (Pull Request/Merge Request) acceptée (pour l'instant, vous pouvez accepter sans tester, regardez juste si il n'y a pas d'erreurs apparentes), les deux branches sont fusionnées, donc la branche distante "dev" possède maintenant le code corrigé :
    - si l'apprenant A a corrigé le code du projet "Mon Restoto", l'apprenant B après avoir accepté la PR/MR doit donc récupérer les modifications de la branche distante "dev" sur sa branche locale "dev" ; pour ça, l'apprenant B doit commencer par se placer dans son terminal sur le projet "mon-restoto" (l'apprenant A doit se placer sur le projet "horizons"),
    - le reviewer doit donc dans son terminal se placer sur sa branche locale "dev" (pour se déplacer de branche en branche, on utilise la commande `git checkout [nombranche]` comme ceci : `git checkout dev` si je veux aller sur la branche "dev" ou `git checkout master` (ou `git checkout main`) si je veux aller sur la branche "master" ou "main"),
    - puis le reviewer doit venir chercher les modifications de la branche "dev" distante sur GitHub/GitLab vers sa branche locale "dev" sur son ordinateur ; pour ça, vous allez devoir taper le commande `git pull` (c'est l'équivalent d'un git fetch suivi d'un git merge).
    - vous avez maintenant les modifications de votre collègue en local !
- Pour passer à la prochaine étape, il faut que chacun ait terminé et en soit à la même étape.

### Etape 5
**Compréhension de la requête client et transformation en langage professionnel, en poussant sur une autre branche distante un fichier texte indiquant les changements à effectuer** :
- Maintenant, **ON INVERSE** : si l'apprenant A a corrigé le code du projet "Mon Restoto", il doit passer sur le projet "Horizons".
- Vous avez peut-être remarqué que vous avez un fichier intitulé "customer-request.md" dans chacun de votre projet ; il faut commencer par le lire.
- Vérifier que vous êtes bien placés sur la branche "dev" (utilisez la commande `git branch`, ou encore la commande `git status` pour vérifier).
- Puis, vous allez créer une autre branche locale avec la commande `git checkout -b [nom_apprenant/comprehension_requete_client]` (par exemple : `git checkout -b apprenantA/comprehension_requete_client`).
- Ouvrez maintenant le fichier "customer-request.md", et complétez la partie sous "Compréhension et transformation de la demande en langage pro :" ;
    - pour faire ça, parcourez les fichiers de code (HTML, CSS et JS) du projet, et observez comment il est structuré, et ce que votre collègue a apporté comme modifications et comme commentaires,
    - analysez bien ce que le client demande, même si il n'utilise pas du langage technique, c'est à vous de transformer ce langage d'amateur en langage professionnel : pour chaque fonctionnalité, écrivez toutes les modifications qu'il faudrait faire, dans chaque fichier, pour arriver au résultat attendu par le client.
- Une fois le fichier "customer-request.md" complété et enregistré, vous allez pousser votre branche locale vers GitHub/GitLab ; dans le terminal, on enchaîne donc les commandes `git add .`, `git commit -m blabla`, puis `git push -u origin [nom_branche]` (par exemple `git push -u origin apprenantA/comprehension_requete_client`).
- Sur GitHub/GitLab, la personne qui a travaillé sur son nouveau projet ("Horizons" pour l'apprenant A, "Mon restoto" pour l'apprenant B) doit faire une Pull Request/Merge Request de la branche distante "comprehension_requete_client" qu'il vient de pousser vers la branche distante "dev" :
    - **PAS LA PEINE DE DEMANDER UN REVIEWER POUR CETTE PULL REQUEST/MERGE REQUEST** ; vous n'avez modifié qu'un fichier markdown.
    - acceptez directement la fusion entre les deux branches.
- Pour passer à la prochaine étape, il faut que chacun ait terminé et en soit à la même étape.

### Etape 6
**Modification du code pour répondre à la demande client en travaillant sur une nouvelle branche locale avant de pousser vers la branche distante dev** :
- Vous vous en doutez, **ON INVERSE ENCORE** : l'apprenant A retourne sur le projet "Mon restoto", et l'apprenant B retourne sur le projet "Horizons".
- Vérifiez bien chacun que vous êtes sur la branche locale "dev".
- Faites un `git pull` pour récupérer les changements effectués sur le fichier texte "customer-request.md".
- Vous voyez donc chacun ce que votre collègue a écrit, en traduisant la demande client avec un langage professionel.
- Vous devez maintenant créer une branche locale à partir de la branche locale "dev" mise à jour et vous positionner dessus, avec la commande `git checkout -b [nom_apprenant/modif_client_juin_2026]` (par exemple : `apprenantB/modif_client_juin_2026`).
- Ensuite, ajoutez les nouvelles fonctionnalités demandées par le client en suivant les recommendations de votre collègue, en modifiant les fichiers de code (HTML, CSS et JS).
- Une fois toutes les modifications terminées, vous pouvez enchaîner les commandes `git add .`, `git commit -m [blabla]`, `git push -u origin [nom_branche]`,
- Sur GitHub/GitLab, faites une Pull Request/Merge Request de la branche distante nouvellement poussée vers la branche distante "dev" en demandant à votre collègue d'être le "Reviewer".
- Pour passer à la prochaine étape, il faut que chacun ait terminé et en soit à la même étape.

### Etape 7
**Pull Request/Merge Request de la branche nouvellement poussée sur GitHub/GitLab avec une peer review bien soignée** :
- On peut se le rappeler ici, lorsqu'on fait une peer review, on : 
    - critique le code, pas la personne,
    - est constructif et bienveillant,
    - cherche à améliorer le projet, pas à avoir raison.
- Le reviewer peut accepter ou non la Pull Request/Merge Request (selon la peer review qu'il vient de réaliser concernant les modifications qu'a fait son collègue sur le code lors de l'étape 6) : il faut justifier tous les commentaires faits lors de cette peer review (n'hésitez pas à relire le haut de ce ticket, ou à consulter le lien suivant : {{ codephenix_url }}/connaissances/autre/cours-peer-review.pdf ).
- Une fois la PR/MR acceptée, le reviewer peut récupérer le contenu des modifications de la branche "dev" distante dans sa branche locale "dev" avec la commande `git pull` dans son terminal (il faut être positionnée sur la branche "dev").
- Sur GitHub/GitLab, vous pourrez alors chacun faire une Pull Request/Merge request de la branche distante "dev" vers la branche distante "master" ou "main" (choisissez le projet de votre choix), sans "Reviewer" car rien n'a été modifié sur la branche "dev" depuis sa dernière fusion.
- Si vous le souhaitez, vous pouvez vous déplacer sur votre branche locale master ou main (`git checkout master` ou `git checkout main`), puis faire un `git pull` pour venir récupérer le nouveau contenu de la branche distante "master" ou "main".
- C'est terminé, les deux projets ont été modifiés, prêts à être envoyés au client. Félicitations !

## Cours associés

- V - Git - 2/ Initiation : {{ codephenix_url }}/cours/index.php#git-init
- V - Git - 3/ Travail en groupe : {{ codephenix_url }}/cours/index.php#git-group
- Guide des commandes Git : {{ codephenix_url }}/connaissances/autre/cours-git-howto.pdf
- Guide des peer-reviews : {{ codephenix_url }}/connaissances/autre/cours-peer-review.pdf

## Definition of Done:

- [ ] Toutes les étapes sont terminées.
- [ ] Vous avez été bienveillant lors de vos peer-review.

{% include 'common/CODE_QUALITY.md' %}

{% include 'common/ATTITUDE.md' %}

## Q&A

_Cette section sera complétée par votre formateur lors de la review des taches._

- [ ] ...

### Le mot de la fin ?

Bravo à vous si vous avez lu jusque là, et surtout bravo d'avoir terminé l'exercice si c'est le cas ! Si ce n'est pas le cas... **COURAGE !**