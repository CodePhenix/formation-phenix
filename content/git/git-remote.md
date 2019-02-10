### Le travail à distance

Jusqu'à présent nous avons vu comment travailler avec `git` en local (sur notre machine) pour ajouter des points de sauvegarde (`commits`) et ainsi garder une trace de chaque changement apporté au fil du temps à notre code.

De cette manière, en cas de besoin et/ou si on a fait une grosse boulette dans notre code et que plus rien ne fonctionne par exemple, il est totalement possible de revenir en arrière dans un état précédent du code plus stable et donc en état de marche.

Maintenant, comme je le disais plus haut, ces modifications et cet historique de commit est toujours localisé sur notre machine.

Maintenant imaginez ce scénario :

Après une longue journée ou quelques semaines de dure labeur, vous avez fièrement bien avancé sur votre projet. Consciencieusement, vous avez fait vos commits qui étaient magnifiquement intitulés et possédant chacuns une description très descriptive de chaque modification apportées.

Vous quitter donc votre ordinateur avec le sentiment du travail bien accompli.

Malheur! Durant la nuit, votre ordinateur à été anéhanti par une horde de zombie atomique de l'espace. Vous le retrouvez donc fumant le lendemain et ceci sans mot d'excuse aucun évidement.

En plus de râler sévèrement de pas avoir souscrit une assurance contre ce type de dommage matériel vous vous rendez compte avec effroi que TOUT votre travail à lui aussi été détruit. Tant d'heures de travail parties dans ces volutes de fumée.

Bon, perdre votre ordinateur c'est déja assez furstrant mais perdre votre travail ça l'est encore plus. Surtout si vous travailliez sur une application qui aurait peut-être pû éradiquer la faim du monde ou juste envoyer des images de perroquets portant des chapeaux mexicains à vos amis. (Chacun son ambition hien :-) ).

Bref, grâce à git et ses fonctionalitées pour le travail à distance, cette situation aurait pû être évitée.

**Mais comment ce pourrait-ce ?**

En effet, grâce à `git` nous pouvons communiquer directement avec des machines situés à distance . Des machines que l'on nomme dans le jargon des `remote` (distant, en anglais).

Ces remotes peuvent être de deux types :

1. Interne : un autre ordinateur que vous possédez par exemple.

2. Externe : un service tiers qui hébergera sur internet votre code. `GitHub` , `GitLab`, `BitBucket`, ... sont autant de site internet permettant l'hébergement de code et étant accessible via `git`.

Ici notre scénario catastrophe aurait pû être éviter si nous avions utiliser ces services tiers pour y pousser (`push`) régulièrement notre code. Ansi, en plus d'avoir une version sur notre ordinateur, nous aurions eu une version qui co-existerait sur internet.

Déjà que la destruction totale de notre machine par une horde de zombie est peu probable, la destruction totale simultanée de notre ordinateur ET d'un serveur sécurisé l'est encore moins.

Toute probalitité gardée, en poussant notre code sur ce type de service, notre travail aurait toujours été acccessible.

Un autre avantage non négligeable du travail avec ces `remote` est que cela favorise et facilite aussi énormément le travail collaboratif.

En effet, une fois ayant reçue l'autorisation de se connecter via `git` (via SSH ou autre) à un `remote`, chaque collaborateur d'un projet pourra récupérer et ainsi aider à la construction d'un projet.

#### Modifions notre façon de travailler.

Depuis le début du cours, nous avons apprès à commiter notre code en utilisant la commande `git commit` ou sa version raccourcie `git commit -m <mon message de commit>`.

Pour ceci rien ne change. Cependant une fois que nous avons bien avancé sur notre projet, il va être temps de le mettre en sécurité et de le rendre disponible pour nos cammarades de travail.

Pour ce faire nous pouvons utiliser la commande `git push`

**Décortiquons cette commande :**

Ici nous demandons à git de pousser notre code sur un `remote`.

Petite astuce, en réalité la commande éxectuée par git va être un peu plus complexe. En tapant cette commande `git push`, git va l'interprété comme étant `git push origin/<la branche où nous nous trouvons - master par défaut>`.

Nous allons voir un peu plus en détail par la suite cette notion de branche. Ici retenons simplement que,par défaut, git va essayer de `push` notre code sur un serveur distant que git connaîtra sous le nom de `origin`.

Il est tout à fait possible de choisir de pousser notre code sur un autre `remote` que `origin` mais ceci est une thématique encore un poil trop avancée pour nos connaissances actuelles. Chaque chose en son temps.

**Petite Note importante**

Pour des raisons techniques, nous n'allons pas pouvoir travailler directement avec des serveurs distants. Donc en l'état actuel, la commande `git push` risque de ne pas fonctionner. Malheureusement, vous allez devoir me croire sur parole. J'en suis désolé :(

Donc ainsi notre manière de travailler (`workflow`, en anglais) pourrait être le suivant :

- j'initialise mon projet avec `git init`
- je modifie du code
- je commit `git commit -m <mon message>`
- je modifie du code
- je commit `git commit -m <mon message>`
- ...
- ...
- je suis satistafait et je vais donc pusher mon code via la commande `git push`
- je modifie du code
- je commit `git commit -m <mon message>`
- je modifie du code
- je commit `git commit -m <mon message>`
- ...
- ...
- je suis satistafait et je vais donc pusher mon code via la commande `git push`

et ainsi de suite jusqu'à la fin du projet.

### Une histoire de branche et de tronc

En plus de nous permettre de travailler avec des branches et donc de facilement passer notre CAP d'arboriculeteur.

C'est quand même magique `git`.

Sauf qu'en fait non...

Je vous ai menti malheureusement `git` ne ne va pas nous être suffisant pour passer ce certificat. Cependant nous allons tout de même pouvoir créer d'autres type de branches d'un autre type seulement.

Pour comprendre prenons cette métaphore de l'arbre :

Quand vous avez initialiser votre repo `git` (avec la commande `git init` donc) vous avez créer une première branche nommée `master`

Dans notre métaphore, `master` est le tronc de notre arbre. Ce tronc devrait exister par défaut dans notre répertoire `git`.

Pour le vérifier, ouvrez votre `terminal` et placer vous (si ce n'est déjà pas fait) à l'endroit où ce situe
le dossier `ProjetGit` et tapez le commande suivante

```bash
git branch
```

nomralement vous devriez voir apparaître quelque chose comme ceci

```bash
git branch
* master
```

avec le mot `master` surligné.

**Décortiquons cette commande :**

Ici avec cette commande nous avons demander à `git` de lister toutes les branches connues de notre repository.

Ici nous n'avons que `master`, notre tronc d'arbre.

Travailler uniquement sur master est tout à fait possible. Cependant en cas de travail en équipe, il est fortement déconseillé de travailler directement sur master.

**Mais pourquoi ??**

Sur beaucoup de projet et pour beaucoup d'équipe de développement, `master` revêt une importance particulière. En effet, cette branche doit toujours conserver la version du code la plus `stable` c'est-à-dire la version du code dont on est certains qu'elle contient le moins de bug possible et dont ont est certains de vouloir la mettre en `production`.

_Point vocabulaire :_

Mettre en `production` un site web ou une application signifie la mettre `en ligne` sur internet et donc disponnible pour tout le monde.

Vous comprenez aisément que il est important de vouloir présenter la meilleure version de notre travail et surtout éviter que les utilisateurs de notre site se plaigne car celui-ci ne fonctionne qu'à peu près ou voir pas du tout.

Souvenez vous la furstration que vous pouvez peut-être ressentir face à quelque chose qui ne fonctionne pas comme il devrait. Un de nos objectifs principaux en tant que développeur et d'éviter que nos utilisateurs ressente ce type de furstration.

```
VOUS ( avec un regard confu ) :

- D'accord mais si je ne peux pas travailler sur master, cela veut donc dire que je ne peux pas travailler du tout ?
```

Ben oui effectivement, on peut remballer. C'est chômage technique ...

Mais non malheureux, `git` à tout prévu : nous pouvons rajouter des branches à notre tronc !

Pour ce faire il nous suffit d'utiliser la commande `git` :

```bash
git branch <nom-de-la-branche>

// remplacer <nom-de-la-branche> par le nom de votre branch.
```

**Décortiquons cette commande :**

Ici nous demandons à `git` de créer une nouvelle branche qui portera le nom que vous lui aurez donné.

#### Un peu de pratique :

Actuellement sur votre terminal, vous devriez toujours être placé dans sur le dossier `ProjetGit`. C'est parfait.

Maintenant tapez la commande `git branch test-branches`.

Ici nous allons créer une nouvelle branche qui se nomme `test-branches`

**_Point culture de l'informatique _**

Souvent quand on développe une site web, on se rend compte que l'on passe beaucoup de temps à essayer de nommer des choses même si ces élements sont abstrait ou n'ont pas beaucoup lien avec quelque chose en dehors du monde de l'informatique.

Nommer les choses et les concepts de la bonne manière est assez capital surtout si l'on travaille avec d'autres personnes. En effet, nous devons nous assurer que notre collaborateur comprenne vraiment ce que l'on essaye d'exprimer ou de faire.

Ici, il est donc important de choisir un nom de banche assez explicite par rapport à ce que l'on souhaite faire.

Dans notre cas, nous souhaitons `test`er les `branches` git. `test-branches` est donc un nom assez explicite.

Donc normalement après avoir taper la commande `git branch test-branches` dans votre terminal, la branche `test-branche` devrait être crée.

**_ Petit Challange _**

Maintenant vous devriez être en mesure de vérifier si cette branche existe bel et bien. Pour ceci vous devez utiliser la commande qui permet de lister toutes les branches disponnible.

--- Barrière anti-spoil ---

Pour ce faire, il faut utiliser la commande `git branch`

En l'utilisant,
