<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
  	<link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/documentation.css">
    <title>&lt;CodePhenix&gt; Documentation</title>
  </head>
  <body>
    <?php include '../assets/structure/header.php' ;?>
    <main class="tab-content" id="pills-tabContent">
      <a href="#" id="back-to-top" class="btn btn-default">&uarr;</a>
          <aside>
          <ul class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <li>
              <h2>Les bases de Git</h2>
            </li>
            <li>
              <button class="nav-link active" id="terminal-tab" data-bs-toggle="pill" data-bs-target="#terminal" type="button" role="tab" aria-controls="terminal" aria-selected="false">
                Rappel sur le terminal
              </button>
            </li>
            <li>
              <button class="nav-link" id="status-tab" data-bs-toggle="pill" data-bs-target="#status" type="button" role="tab" aria-controls="status" aria-selected="false">
                Statut des fichiers
              </button>
            </li>
            <li>
              <button class="nav-link" id="git-tab" data-bs-toggle="pill" data-bs-target="#git" type="button" role="tab" aria-controls="git" aria-selected="false">
                Commandes principales
              </button>
            </li>
            <li>
              <h2>Gestion de projet</h2>
            </li>
            <li>
              <button class="nav-link" id="branch-tab" data-bs-toggle="pill" data-bs-target="#branch" type="button" role="tab" aria-controls="branch" aria-selected="false">
                Système de branche
              </button>
            </li>
            <li>
              <button class="nav-link" id="remote-tab" data-bs-toggle="pill" data-bs-target="#remote" type="button" role="tab" aria-controls="remote" aria-selected="false">
                Travail distant
              </button>
            </li>
            <li>
              <button class="nav-link" id="group-tab" data-bs-toggle="pill" data-bs-target="#group" type="button" role="tab" aria-controls="group" aria-selected="false">
                Travail en groupe
              </button>
            </li>
          </ul>
          </aside>
          <section class="tab-content" id="v-pills-tabContent">
            <article class="tab-pane fade show active" id="terminal" role="tabpanel" aria-labelledby="terminal-tab">
              <h3>Commandes du terminal à connaître</h3>
              <table class="table table-striped table-hover">
                  <tbody>
                    <tr>
                       <th>Commande</th>
                       <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>pwd</code></td>
                        <td>Indique l’endroit où vous vous trouvez dans l’arborescence de fichiers.</td>
                    </tr>
                    <tr>
                        <td><code>ls</code></td>
                        <td>Permet de lister le contenu d'un répertoire.</td>
                    </tr>
                    <tr>
                        <td><code>cd</code></td>
                        <td>Naviguer d'un répertoire à un autre.</td>
                    </tr>
                    <tr>
                        <td><code>mkdir</code></td>
                        <td>Créé un répertoire.</td>
                    </tr>
                    <tr>
                        <td><code>touch</code></td>
                        <td>Créé un fichier.</td>
                    </tr>
                    <tr>
                        <td><code>cp</code></td>
                        <td>Copie un fichier</td>
                    </tr>
                    <tr>
                        <td><code>cp -r</code></td>
                        <td>Copie un répertoire.</td>
                    </tr>
                    <tr>
                        <td><code>mv</code></td>
                        <td>Déplace un élément.</td>
                    </tr>
                    <tr>
                        <td><code>rm</code></td>
                        <td>Supprime un fichier.</td>
                    </tr>
                    <tr>
                        <td><code>rm -r</code></td>
                        <td>Supprime un répertoire.</td>
                    </tr>
                    <tr>
                      <td><code>&lt;commande&gt; -h</code></td>
                      <td>Permet de savoir à quoi sert une commande.</td>
                    </tr>
                    <tr>
                      <td><code>clear</code></td>
                      <td>Vide le terminal de commande.</td>
                    </tr>
                  </tbody>
              </table>
              <h6>Autocomplétion</h6>
              <p>
              Après avoir tapé 2 ou 3 caractères, il est possible d'appuyer sur la touche <b>tab</b> (au-dessus de "verrouillage
              majuscule") qui permet de compléter la suite de la commande, du nom du dossier ou fichier. Cela évite les
              erreurs de frappe et est très appréciable pour éviter de saisir le nom de fichier parfois long et complexe
              comme le nom de certains paquets. Peut-être utilisé plusieurs fois si plusieurs noms ont une partie
              commune.
              </p>
              <p><b>Attention, c'est sensible à la casse majuscules/minuscules des caractères !</b></p>
            </article>
            <article class="tab-pane fade" id="status" role="tabpanel" aria-labelledby="status-tab">
              <h3>Le statut des fichiers</h3>
              <figure>
                <img src="../assets/img/documentation/git-status.png">
              </figure>
              <ul>
                <li>
                  <b>Non suivi</b> :
                  le fichier existe en local, mais n'est pas suivi par Git. En cas de modification de ce fichier, Git n'en tiendra pas compte et fera comme s'il n'existait pas.
                </li>
                <li>
                  <b>Non modifié</b> : le fichier est suivi par Git, et n'a pas été modifié en local. Il ne se passe rien.
                </li>
                <li>
                  <b>Modifié</b> :
                  le fichier a été modifié en local. Git est capable de dire qu'il y a eu des modifications, mais il ne les a pas stockées pour la prochaine écriture de l'historique.
                </li>
                <li>
                  <b>Stocké</b> : le fichier est "stocké" à part, et ses modifications seront incluses dans la prochaine écriture de l'historique.
                </li>
              </ul>
            </article>
            <article class="tab-pane fade" id="git" role="tabpanel" aria-labelledby="git-tab">
              <h3>Commandes principales</h3>
              <table class="table table-striped table-hover">
                  <tbody>
                    <tr>
                       <th>Commande</th>
                       <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>git init</code></td>
                        <td>Permet d'initialiser un repo git.</td>
                    </tr>
                    <tr>
                        <td><code>git add</code></td>
                        <td>Permet de suivre un projet ou de stocker une modification.</td>
                    </tr>
                    <tr>
                        <td><code>git rm</code></td>
                        <td>Permet de ne plus suivre un fichier.</td>
                    </tr>
                    <tr>
                        <td><code>git status</code></td>
                        <td>Permet de vérifier le statut des fichiers du projet.</td>
                    </tr>
                    <tr>
                        <td><code>git diff</code></td>
                        <td>Permet de voir les modifications d'un fichier.</td>
                    </tr>
                    <tr>
                        <td><code>git commit -m</code></td>
                        <td>Permet d'écrire dans l'historique.</td>
                    </tr>
                    <tr>
                        <td><code>git log</code></td>
                        <td>Permet d'afficher l'historique.</td>
                    </tr>
                    <tr>
                        <td><code>git reset</code></td>
                        <td>Permet d'annuler le suivit ou le stockage d'un fichier.</td>
                    </tr>
                    <tr>
                        <td><code>git checkout</code></td>
                        <td>Permet d'annuler la modification d'un fichier.</td>
                    </tr>
                    <tr>
                        <td><code>git help</code></td>
                        <td>Donne la liste des commandes disponibles pour Git.</td>
                    </tr>
                  </tbody>
              </table>
              <figure>
                <a target="_blank" href="../assets/img/documentation/schema-git-add.png">
                  <img src="../assets/img/documentation/schema-git-add.png">
                </a>
                  <figcaption>Schéma récapitulatif et explicatif des points de sauvegardes sous git.</figcaption>
              </figure>
            </article>
            <article class="tab-pane fade" id="branch" role="tabpanel" aria-labelledby="branch-tab">
              <h3>Système de branche</h3>
              <table class="table table-striped table-hover">
                  <tbody>
                    <tr>
                       <th>Commande</th>
                       <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>git branch</code></td>
                        <td>Permet d'afficher les branches d'un projet.</td>
                    </tr>
                    <tr>
                        <td><code>git checkout</code></td>
                        <td>Permet de changer de branche.</td>
                    </tr>
                    <tr>
                        <td><code>git checkout  -b</code></td>
                        <td>Permet de créer une branche et de mettre le pointeur sur celle-ci.</td>
                    </tr>
                    <tr>
                        <td><code>git fetch</code></td>
                        <td>Permet d'avoir les informations sur une branche.</td>
                    </tr>
                    <tr>
                        <td><code>git rebase</code></td>
                        <td>Permet de mettre une branche à jour par rapport à master.</td>
                    </tr>
                    <tr>
                        <td><code>git merge</code></td>
                        <td>Permet de mettre à jour master.</td>
                    </tr>
                    <tr>
                        <td><code>git branch -d</code></td>
                        <td>Permet de supprimer une branche.</td>
                    </tr>
                  </tbody>
              </table>
              <figure>
                <a target="_blank" href="../assets/img/documentation/schema-git-branch.png">
                  <img src="../assets/img/documentation/schema-git-branch.png">
                </a>
                  <figcaption>Schéma récapitulatif et explicatif d'utilisation d'une branche sous git.</figcaption>
              </figure>
            </article>
            <article class="tab-pane fade" id="remote" role="tabpanel" aria-labelledby="remote-tab">
              <h3>Travail distant</h3>
              <table class="table table-striped table-hover">
                  <tbody>
                    <tr>
                       <th>Commande</th>
                       <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>git clone</code></td>
                        <td>Permet de cloner un projet distant en local.</td>
                    </tr>
                    <tr>
                        <td><code>git pull</code></td>
                        <td>Permet de récupérer le projet distant et mettre à jour un projet local.</td>
                    </tr>
                    <tr>
                        <td><code>git push</code></td>
                        <td>Permet de mettre à jour un projet distant avec la version local.</td>
                    </tr>
                    <tr>
                        <td><code>push --set-upstream origin</code></td>
                        <td>Permet de mettre une branche sur un projet distant.</td>
                    </tr>
                  </tbody>
              </table>
              <figure>
                <a target="_blank" href="../assets/img/documentation/schema-git-remote.png">
                  <img src="../assets/img/documentation/schema-git-remote.png">
                </a>
                  <figcaption>Schéma récapitulatif et explicatif d'un projet distant sous git.</figcaption>
              </figure>
            </article>
            <article class="tab-pane fade" id="group" role="tabpanel" aria-labelledby="group-tab">
              <h3>Travail en groupe</h3>
              <p>Une fois que votre projet est sur un remote et que votre branche est crée. Votre méthode de travail à distance ressemblera à peu près à cela :</p>
              <figure>
                <a target="_blank" href="../assets/img/documentation/schema-git.jpg">
                  <img src="../assets/img/documentation/schema-git.jpg">
                </a>
              </figure>

              <ul>
                <li>Je modifie du code.</li>
                <li>Je commit <code>git commit -m "mon message"</code></li>
                <li>Je modifie du code.</li>
                <li>Je commit <code>git commit -m "mon message"</code></li>
                <li>...</li>
                <li>Une fois que je veux push sur le remote</li>
                <li>Je vais sur la branche master <code>git checkout master</code></li>
                <li>Je récupère le master du remote pour le mettre à jour <code>git pull</code></li>
                <li>Si j'ai eu des mises à jour, je vais sur ma branche  <code>git checkout ma-branche</code></li>
                <li>Et je met à jour <code>git rebase master</code>  (je gère les conflits s'il y en a)</li>
                <li>Après avoir vérifié que tout est ok, je retourne sur master <code>git checkout master</code></li>
                <li>Je fusionne ma branche  <code>git merge ma-branche</code></li>
                <li>Je met à jour le projet distant <code>git push</code></li>
                <li>Je me replace sur ma branche <code>git checkout ma-branche</code></li>
                <li>Je peux continuer de travailler.</li>
              </ul>
            </article>
          </section>
    </main>
    <?php include '../assets/structure/footer.php' ;?>
    <script src="../assets/js/doc.js" type="text/javascript"></script>
      <!-- Liaison au script Bootstap -->
      <script src="../assets/bootstrap/js/bootstrap.js" type="text/javascript"></script>
    </body>
  </html>
