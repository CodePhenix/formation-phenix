<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
  	<link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/cours.css">
    <link rel="stylesheet" href="../assets/bootstrap/icons/icons-1.5.0/font/bootstrap-icons.css">
  	<title>&lt;CodePhenix&gt; Cours</title>
  </head>
  <body>
    <?php include '../assets/structure/header.php' ;?>
    <main>
      <a href="#" id="back-to-top" class="btn btn-default">&uarr;</a>
      <aside>
        <ol class="nav">
          <li>Initiation
            <ol>
                <li>
                  <button class="active" id="html-initiation">
                    HTML
                  </button>
                </li>
                <li>
                  <button id="css-initiation">
                    CSS
                  </button>
                </li>
                <li>
                  <button id="js-initiation">
                    Javascript
                  </button>
                </li>
            </ol>
          </li>
          <li>Approfondissement
            <ol>
                <li>
                  <button id="positionnement">
                    Positionnement <span class="tag">CSS</span>
                  </button>
                </li>
                <li>
                  <button id="js-initiation2">
                    Dynamisme <span class="tag">JS</span>
                  </button>
                </li>
                <li>
                  <button id="responsive">
                    Responsive <span class="tag">CSS</span>
                  </button>
                </li>
            </ol>
          </li>
          <li>
            <button id="bootstrap">
              Bootstrap
            </button>
          </li>
          <li>Animation
            <ol>
                <li>
                  <button id="css-animation">
                    Animation <span class="tag">CSS</span>
                  </button>
                </li>
                <li>
                  <button id="js-temps">
                    Gestion du temps <span class="tag">JS</span>
                  </button>
                </li>
            </ol>
          </li>
          <li>Formulaire
            <ol>
                <li>
                  <button id="formulaires">
                    Structure <span class="tag">HTML</span>
                  </button>
                </li>
                <li>
                  <button id="js-formulaire">
                    Vérification <span class="tag">JS</span>
                  </button>
                </li>
            </ol>
          </li>
          <li>Git
            <ol>
                <li>
                  <button id="git-intro">
                    Introduction
                  </button>
                </li>
                <li>
                  <button id="git-init">
                    Initiation
                  </button>
                </li>
                <li>
                  <button id="git-group">
                    Travail en groupe
                  </button>
                </li>
            </ol>
          </li>
          <li>
            <button id="portfolio">
              Portfolio
            </button>
          </li>
      </ol>
      </aside>
      <!-- contenu -->
      <section>
        <article class="active" id="html-initiation-article">
          <h3>HTML initiation</h3>
           <iframe src="supports/html.pdf" title="HTML initiation"></iframe>
            <h4>Exercice</h4>
            <p><b><u>Astuce pour bien réussir</u> : Utilisez la sémantique des balises, sectionnez votre page et utilisez la notion de parent/enfant.</b></p>
            <p>À l'aide du cours, reproduisez le CV selon la maquette ci-dessous : </p>
            <a class="cta dl" target="_blank" href="exercices/1-1-1-initiation-html.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
        </article>
        <article id="css-initiation-article">
          <h3>CSS initiation</h3>
          <iframe src="supports/css.pdf" title="HTML initiation"></iframe>
          <h4>Demo CSS</h4>
            <a class="cta link zen-garden" href="#"><span>Changer la CSS</span> <i class="bibi bi-square-half"></i></a>
          <h4>Exercice</h4>
          <ol>
            <li>
              <h6>Mise en forme</h6>
              <p><b><u>Astuce pour bien réussir</u> : Utilisez les bons sélecteurs en prenant en compte l'importance et l'héritage CSS. </b></p>
              <p>À l'aide du cours, mettez en forme le CV de l'exercice précédent, selon la maquette ci-dessous : </p>
              <a class="cta dl" target="_blank" href="exercices/1-2-1-initiation-css.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
            </li>
            <li>
              <h6>CSS DINER</h6>
              <p>Cet exercice va vous permettre de vous exercer et d'apprendre les différents sélecteurs CSS. <br>
              <b>Les niveaux de 1 à 17 puis de 27 à 29 sont important à connaître</b>.</p>
              <p><small style="color:red">Attention, le nom des balises dans cet exercice ne sont pas de vrai nom de balise.</small></p>
              <a target="_blank" class="cta link" href="exercices/css-diner/index.html"><span>Commencer l'exercice</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
            </li>
          </ol>
          <script>
            let zenGarden = document.querySelector('.zen-garden'),
                body = document.querySelector('body');

            zenGarden.addEventListener('click', function(){
              body.classList.toggle('style2');

              let newMenu = document.querySelector(".style2 aside")
              newMenu.addEventListener('click', function(){
                  if(newMenu.classList.contains("show")){
                    newMenu.classList.remove("show")

                  }else{
                    newMenu.classList.add("show")

                  }
              });
            })


          </script>
        </article>
        <article id="formulaires-article">
          <h3>HTML : <small>Les formulaires</small></h3>
          <iframe src="supports/formulaire.pdf" title="HTML les formulaires"></iframe>
          <h4>Exercice</h4>
          <p>À partir des maquettes, réalisez un formulaire d'inscription.</p>
          <a class="cta dl" href="exercices/5-1-1-formulaire.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
        </article>
        <article id="positionnement-article">
          <h3>CSS : <small>Le positionnement des éléments</small></h3>
          <iframe src="supports/positionnement.pdf" title="HTML positionnement"></iframe>
          <h4>Fiche mémo</h4>
          <p>Voici une fiche mémo sur le <code>display flex;</code> vous pouvez l'enregistrer sur votre ordinateur.
          Utilisez ce mémo pour vous aider à faire les exercices suivants.</p>
          <a class="cta dl" target="_blank" href="supports/flexbox-memo.jpg"><span>Voir la fiche mémo</span> <i class="bi bi-image"></i></a>
          <h4>Exercices</h4>
          <ol>
            <li>
              <h6>Faire un site à partir d'une maquette : MyFood</h6>
              <p>
                Le header sera fixe dans la page, au click sur le menu burger, une fenêtre s'ouvre avec les liens de navigation et le bouton pour fermer cette fenêtre.
                Selon les maquettes mobile :
              </p>
              <a class="cta dl" href="exercices/2-1-1-positionnement.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
            </li>
            <li>
              <h6>Flexfroggy</h6>
              <p>Cet exercice va vous permettre de vous exercer et d'apprendre les différentes propriétés liées au <code>display flex;</code></p>
              <a target="_blank" class="cta link" href="exercices/flexfroggy/index.html"><span>Commencer l'exercice</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
            </li>
            <li>
              <h6>Faire un site à partir d'une maquette : Analytics</h6>
              <p>
                Le header sera fixe dans la page, au click sur le menu burger, une fenêtre s'ouvre avec les liens de navigation et le bouton pour fermer cette fenêtre.
                Selon les maquettes mobile :
              </p>
              <a class="cta dl" href="exercices/2-1-3-positionnement.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
            </li>
          </ol>
        </article>
        <article id="responsive-article">
          <h3>CSS : <small>Le responsive design</small></h3>
          <iframe src="supports/responsive.pdf" title="HTML responsive"></iframe>
          <h4>Exercice</h4>
          <ol>
            <li>
              <h6>Site responsive : MyFood</h6>
              <p>
                À partir de l'exercice sur le positionnement du site myFood, Adaptez-le pour les versions tablettes et ordinateur, selon la maquette :
              </p>
              <a class="cta dl" target="_blank" href="exercices/2-3-1-myfood-maquette-ordinateur.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
            </li>
            <li>
              <h6>Site responsive : Analitycs</h6>
              <p>
                À partir de l'exercice sur le positionnement du site Analytics, Adaptez-le pour les versions tablettes et ordinateur, selon la maquette :
              </p>
              <a class="cta dl" target="_blank" href="exercices/2-3-2-analytics-maquette-ordinateur.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
            </li>
          </ol>
          <h4>Connaissances</h4>
          <p>Pour aller plus loin vous pouvez vous renseigner avec les articles suivant :</p>
          <a class="cta link" target="_blank" href="../connaissances/UX/arquen/blog/ergonomie-ux-mobile-tablette/index.htm"><span>Les bases de l’Ergonomie</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
          <a class="cta link" target="_blank" href="../connaissances/web/zenuacademie/statistiques/statistiques-utilisation-internet/index.htm"><span>Statistiques internet 2022</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
        </article>
        <article id="css-animation-article">
            <h3>CSS : <small>Les animations</small></h3>
            <iframe src="supports/animation.pdf" title="CSS animation"></iframe>
            <h4>Exercices</h4>
            <h6>Animation des éléments d'un site : Analitycs</h6>
            <p>En reprennant le site analytics, ajoutez les transitions et animations suivantes :</p>
            <ul>
              <li>Au click sur le menu, la navigation apparait de gauche à droite et un fond s'affiche progressivement.</li>
              <li>Les barres de pourcentages sont animées, elles augmentent progressivement de zéro jusqu'au pourcentage indiqué, puis le numéro du pourcentage apparait.</li>
              <li>En vue ordinateur seulement :
                <ul>
                  <li>Pour les encadrés de couleurs, on ne voit que l'icone, puis au survol de la souris apparaissent les informations (intitulé et chiffre).</li>
                  <li>Le fond des tableaux devient gris foncé au survol de la souris.</li>
                  <li>Sur le bouton "more countries", au survol de la souris le fond devient gris claire et l'icone part vers la droite.</li>
                </ul>
              </li>
            </ul>
            <p>Comme dans l'exemple :</p>
            <a class="cta dl" target="_blank" href="exercices/4-1-1-nav-animation.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
        </article>
        <article id="validation1-article">
            <h3>Validation des connaissances : <small>HTML/CSS</small></h3>
            <h4>Exercices</h4>
            <p>Reproduisez le site, selon la maquette en prenant en compte les précisions suivantes :</p>
            <ul>
              <li>Le site doit être responsive (mobile first).</li>
              <li>La position du menu est fixé.</li>
              <li>En vue ordinateur : pour les encadrés de couleurs, on ne voit que l'icone, puis au survol de la souris apparaissent les informations (intitulé et chiffre).</li>
              <li>Les barres de pourcentages sont animées, elles augmentent progressivement de zéro jusqu'au pourcentage indiqué. Puis le numéro du pourcentage apparait.</li>
              <li>Le fond des tableaux devient gris foncé au survol de la souris.</li>
              <li>Sur le bouton "more countries", au survol de la souris le fond devient gris claire et l'icone part vers la droite.</li>
            </ul>
            <br>
            <a class="cta dl" href="exercices/html-css/exercice-validation1.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
        </article>
        <article id="js-initiation-article">
          <h3>JavaScript initiation : <small>Première partie</small></h3>
           <iframe src="supports/javascript.pdf" title="JS initiation"></iframe>
           <h4>Exercices</h4>
            <ol>
              <li>
                <h6>Compteur de click</h6>
                <p>
                  Faire un bouton, au click sur ce bouton, on va augmenter la valeur d'un numéro qui indiquera le nombre de fois que ce bouton a été cliqué.
                  Comme dans l'exemple :
                </p>
                <a class="cta dl" target="_blank" href="exercices/1-3-1-initiation-js.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li>
              <li>
                <h6>Menu burger</h6>
                <p>
                  À l'aide du cours, ajoutez un menu burger à votre CV de l'exercice précédent.
                  Au click sur le bouton, une fenêtre s'ouvre avec les liens de navigation qui redirigent vers les différentes sections de la page et le bouton pour fermer cette fenêtre.
                  Comme dans l'exemple :
                </p>
                <a class="cta dl" target="_blank" href="exercices/1-3-2-initiation-js.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li>
            </ol>
        </article>
        <article id="js-initiation2-article">
          <h3>JavaScript initiation : <small>Deuxième partie</small></h3>
           <iframe src="supports/js2.pdf" title="JS initiation"></iframe>
           <h4>Exercices</h4>
           <ol>
             <li>
               <h6>Liste de nom</h6>
               <p>En reprenant le site myFood, les "popular tags" doivent être créés à partir d'un tableau en javascript.
                 Au click sur un tag, il est mis en valeur avec un fond noir et un texte plus grand.
                 Comme dans l'exemple :</p>
               <a class="cta dl" target="_blank" href="exercices/2-2-1-tableau-boucle.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
             </li>
             <li>
               <h6>Fiche d'information</h6>
               <p>En reprenant le site myFood, les articles doivent être créés à partir d'un objet en javascript.
                 Ils comprennent donc une image, un titre et un texte descriptif. Comme dans l'exemple :</p>
               <a class="cta dl" target="_blank" href="exercices/2-2-2-informations-objet.png"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
             </li>
             <li>
               <h6>Compteur de click</h6>
               <p>En reprenant l'exercice du compteur de click, ajouté les conditions suivante :</p>
                <ul>
                  <li>Au dessus de 5 click, la couleur du texte et du bouton change pour être en bleu foncé.</li>
                  <li>Entre 10 et 15 click, la couleur change pour être en violet et on affiche une image.</li>
                  <li>Au dessus de 15 click, la couleur devient rouge et on affiche une autre image.</li>
                  <li>Au 21ème click, un message "stop" est affiché et on ne peut plus cliquer.</li>
                </ul>
                <p>Comme dans l'exemple :</p>
               <a class="cta dl" target="_blank" href="exercices/2-2-3-conditions.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
             </li>
           </ol>
        </article>
        <article id="js-formulaire-article">
          <h3>JavaScript : <small>Vérification d'un formulaire</small></h3>
           <iframe src="supports/verif-form.pdf" title="JS initiation"></iframe>
           <h4>Outils</h4>
           <p>Pour vous aider avec les expressions regulières (ReGex) vous pouvez utiliser l'outil ci-dessous :</p>
           <a class="cta link" target="_blank" href="http://codephenix.com:8456/"><span>Utiliser l'outil ReGex</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
           <h4>Exercices</h4>
           <p>Reprenez et faite la vérification du formulaire d'inscription de l'exercice précédent :</p>
           <ul>
               <li>Les champs "Nom", "Prénom" et "Code postal" doivent être contrôlés dynamiquement pour contenir les bonnes informations (code postal uniquement en chiffre, etc.).
               Un message est affiché en cas d'erreur.</li>
               <li>Au clique sur l'envoi du formulaire, on vérifie que la valeur des champs email et confirmation email sont identiques,
               il en va de même pour le mot de passe.</li>
              <li>Si tous les champs sont bien remplis, à l'envoi du formulaire on affiche un message de confirmation.</li>
           </ul>
           <p>Comme dans l'exemple :</p>
           <a class="cta dl" target="_blank" href="exercices/5-2-1-verification-form.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
        </article>
        <article id="bootstrap-article">
          <h3>Bootstrap</h3>
          <ol>
              <li>
                <h6>Télécharger Bootstrap</h6>
                <p>Dans un premier temps télécharger Bootstrap.</p>
                <a class="cta dl" href="../assets/download/bootstrap-5.1.3-dist.zip"><span>Télécharger bootstrap</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
              </li>
          </ol>
          <iframe src="supports/bootstrap-intro.pdf" title="introduction à bootstrap"></iframe>
          <ol start="2">
              <li>
                <h6>Lier la bibliothèque Bootstrap</h6>
                <p>Ensuite, lier les feuilles de style CSS et les fichiers JavaScript, avec le code ci-dessous :</p>
                <div class="bg-dark">
                  <code>
                    <span class="commentaire">&lt;!-- Liaison CSS Bootstrap --&gt;</span></br>
                     &lt;<span class="balise">link</span> <span class="attribut">href</span>=<span class="valeur">"bootstrap/css/bootstrap.css"</span>
                                                          <span class="attribut">rel</span>=<span class="valeur">"stylesheet"</span>&gt;<br>
                    <span class="commentaire">&lt;!-- Liaison de la bibliothèque d'icones --&gt;</span></br>
                    &lt;<span class="balise">link</span> <span class="attribut">href</span>=<span class="valeur">"bootstrap/icons/icons-1.5.0/font/bootstrap-icons.css" </span>
                                                          <span class="attribut">rel</span>=<span class="valeur">"stylesheet"</span>&gt;<br>
                    <span class="commentaire">&lt;!-- Liaison au script Bootstrap --&gt;</span></br>
                    &lt;<span class="balise">script</span> <span class="attribut">src</span>=<span class="valeur">"bootstrap/js/bootstrap.js"</span>
                                                          <span class="attribut">type</span>=<span class="valeur">"text/javascript"</span>&gt;&lt;/<span class="balise">script</span>&gt;<br>
                  </code>
                </div>
              </li>
              <li>
                <h6>Réaliser l'exercice</h6>
                <p>Enfin, à l'aide de la documentation et des fichiers fournis, reproduisez la maquette de l'exercice pour vous exercer.</p>
                <p>Vous devez uniquement vous servir des classes bootstrap (sans utiliser de CSS) afin de finir et compléter la page HTML présente dans le dossier.</p>
                <p>Dans le fichier HTML fournis, les liaisons CSS et JS sont déjà faites et des indications sont mises en commentaire.</p>
                <a class="cta dl" href="exercices/3-1-1-bootstrap.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
                <a class="cta link" href="../documentations/bootstrap.php"><span>Accéder à la documentation Bootstrap</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
              </li>
        </article>
        <article id="js-temps-article">
          <h3>JavaScript : <small>Gestion du temps</small></h3>
           <iframe src="supports/gestion-tps.pdf" title="JS Gestion du temps"></iframe>
           <h4>Exercices</h4>
           <ol>
             <li>
               <h6>Test de réactivité</h6>
               <p>Au bout de 3 secondes, affichez un bouton qui au click donne le temps de réaction <b>en secondes et millisecondes</b>, entre l'affichage du bouton et le click.
                 Si le bouton n'est pas cliqué au bout de 3 secondes un message apparait.
                 Comme dans l'exemple suivant :</p>
                 <a class="cta dl" target="_blank" href="exercices/4-2-1-temps-reaction.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
             </li>
             <li>
               <h6>Carousel</h6>
               <p>En reprennant le site analytics, on va créer un carousel qui va remplacer la section "recent comments".</p>
                 <ul>
                   <li>Il contient trois slides, avec une image, un titre et du texte. </li>
                   <li>Quand on affiche un slide suivant, le slide part vers la droite et le nouveau slide arrive de la gauche.</li>
                   <li>Lorsqu'on affiche un slide précédent, le slide part vers la gauche et le nouveau slide arrive de la droite. </li>
                   <li>Quand il n'y a plus de slide suivant ou précédent on retire le bouton qui correspond.</li>
                </ul>
                 <p>Comme dans l'exemple suivant :</p>
                 <a class="cta dl" target="_blank" href="exercices/4-2-2-carousel-animation.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
             </li>
           </ol>
        </article>
        <article id="validation2-article">
            <h3>Validation des connaissances : <small>JavaScipt</small></h3>
            <h4>Exercices</h4>
            <p>Réaliser un carousel, en prenant en compte les précisions suivantes :</p>
            <ul>
              <li>Les slides sont des objets en JS et non en HTML.</li>
              <li>Chaque slide comporte une image, un texte descriptif de l'image et un lien.</li>
              <li>Au click sur le bouton précédent, ou suivant, on affiche le slide  qui correspond.</li>
              <li>Un point est créé pour chaque slide, au click sur celui-ci on affiche le slide qui correspond.</li>
              <li>Quand on affiche un slide suivant, le slide part vers la gauche et le nouveau slide arrive de la droite.
                Lorsqu'on affiche un slide précédent, le slide part vers la droite et le nouveau slide arrive de la gauche. </li>
            </ul>
            <a class="cta dl" target="_blank" href="exercices/js/exercice-validation-js.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
            <h4>Quiz</h4>
            <a class="cta link" href="quiz/js-intermediaire.html"><span>Commencer le quiz intermédiaire JavaScript</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
        </article>
        <article id="git-intro-article">
            <h3>Git : <small>introduction</small></h3>
            <iframe src="supports/git-intro.pdf" title="Introduction à Git"></iframe>
            <h4>Exercices</h4>
            <ol>
              <li>
                <h6>Trouvez la commande</h6>
                <p>Depuis votre terminal, entrez la commande : <code>telnet 192.168.67.8 23</code><br>
                Le terminal va alors vous demander un login et un password qui sont respectivement :</p>
                <ul>
                  <li>login: intro</li>
                  <li>password: formation</li>
                </ul>
                <p>L'objectif est d'atteindre le dernier niveau.</p>
                <p><b>Attention, pour passer du niveau 1 au niveau 2, il faut entrer <code>su level2</code> et non <code>su level1</code> comme indiqué</b></p>
              </li>
              <li>
                <h6>Création d'un projet</h6>
                <p>Dans votre dossier « Documents », créez un dossier « git » avec un sous-dossier « projet-git ». Créez à l'intérieur de celui-ci les fichiers « index.html » et « style.css ».
              </li>
            </article>
        <article id="git-init-article">
            <h3>Git : <small>initiation</small></h3>
            <iframe src="supports/git-init.pdf" title="Introduction à Git"></iframe>
            <h4>Exercices</h4>
            <ol>
              <li><p>Reproduisez le site, en mobile first, selon les maquettes. Vous devrez créer 2 commits :</p>
                  <ul>
                    <li>Une fois la version mobile finalisée.</li>
                    <li>Une fois le responsive pour les différentes tailles d'écrans finalisé.</li>
                  </ul>
                  <a class="cta dl" href="exercices/git/exercice-git-local.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
                </li>
                <li>
                  <p>Apportez la modification suivante et faites un nouveau commit.</p>
                  <a class="cta dl" target="_blank" href="exercices/git/exercice-git-local.png"><span>Voir la modification</span> <i class="bi bi-image"></i></a>
                </li>
                <li>
                  <p>Maintenant que la modification est apportée, nous souhaitons revenir sur la version précédente (la version "maquette-ordinateur").
                    Pour cela aidez-vous de <code>git reset</code> pour revenir sur votre 2ème commit.</p>
                </li>
            </ol>
        </article>
        <article id="git-group-article">
            <h3>Git : <small>travail en groupe</small></h3>
            <iframe src="supports/git-group.pdf" title="Introduction à Git"></iframe>
            <h4>Exercices</h4>
            <p>Ces exercices sont réalisable en groupe de deux.</p>
            <ol>
              <li>
                <h6>Mise en place du projet</h6>
                  <ul>
                    <li>Un des deux membre du groupe va récupérer le fichier ci-dessous et le mettre sur gitLab.</li>
                    <li>Le deuxième membre du groupe va récupérer le projet depuis gitLab.</li>
                    <li>Les deux membres du groupe vont chacun créer une branche pour pouvoir travailler chacun de leur côté.</li>
                  </ul>
                  <a class="cta dl" href="exercices/git/exercice-git-group.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
                </li>
                <li>
                  <h6>Répartition des tâches</h6>
                  <ul>
                    <li>
                      <p>Un des deux membre du groupe va s'occuper de mettre en place le js pour ajouter un produit au panier :</p>
                      <ul>
                        <li>Au survol d'un produit on va afficher la possibilité d'ajouter le produit au panier.</li>
                        <li>Au click sur ce bouton on va afficher un message pour avertir que le produit est ajouté au panier.</li>
                        <li>À côté du panier on va indiquer le nombre de produit qui sont dedans.</li>
                      </ul>
                      <a class="cta dl" target="_blank" href="exercices/git/add-to-cart.png"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
                    </li>
                    <li>
                      <p>Le deuxième membre du groupe va s'occuper de mettre en place le js pour le menu accordéon de la navigation : </p>
                      <ul>
                        <li>Les catégories "jeans" et "shoes" peuvent être déployés ou non.</li>
                        <li>Il faudra aussi ajouter un élément graphique pour indiquer l'état de cette catégorie et la sous-catégorie qui est sélectionné.</li>
                        <li>Des animations devront être mise en place pour que le changement soit fluide.</li>
                      </ul>
                      <a class="cta dl" target="_blank" href="exercices/git/nav-accordion.png"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
                    </li>
                    <li>Les deux membres du groupe vont ajouter leur modification au projet sur le remote.</li>
                  </ul>
                </li>
                <li>
                  <h6>Gestion des conflits</h6>
                  <ul>
                    <li>Un des deux membre du groupe va changer la couleur rouge avec la couleur : <code>teal</code>.</li>
                    <li>Le deuxième membre du groupe va changer la couleur rouge avec la couleur : <code>slateblue</code>.</li>
                    <li>Les deux membres du groupe vont ajouter leur modification au projet sur le remote.</li>
                  </ul>
                </li>
            </ol>
        </article>
        <article id="portfolio-article">
          <h3>Félicitation !</h3>
          <p>Vous avez fini le programme, vous avez désormais toutes les notions de bases en HTML/CSS et JavaScript.
            Il est conseillé de mettre toutes ces compétences en pratique dans votre portfolio.</p>
          <p>
            Un portfolio est indispensable pour toute personne travaillant dans le milieu du web.
            C'est un support d'embauche et de communication plus important que le CV.
            Il permet de montrer vos meilleurs projets et vos compétences. Il permet également d'y intégrer votre CV.
          </p>
          <p>Nos conseils :</p>
          <ul>
            <li>Pensez le en mobile first.</li>
            <li>Faites un formulaire de contact avec une verification en javaScript.</li>
            <li>À la validation du formulaire de contact faites apparaître un message de confirmation.</li>
            <li>Faites des transition et des animations sur vos éléments.</li>
            <li>Utilisez des fonctionnalités comme un carroussel, une fenêtre modal, menu à onglet, etc.</li>
            <li>Utilisez Git pour la gestion de votre Portfolio afin de pouvoir faire des points de sauvegardes.</li>
          </ul>
            <a class="cta dl" href="../assets/download/templates-portfolio.zip"><span>Télécharger des exemples de portfolio</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
            <a class="cta dl" href="../assets/download/templates-cv.zip"><span>Télécharger des exemples de cv</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
            <a class="cta link" target="_blank" href="../connaissances/UX/intervenant/Introduction au design - focus portfolio.pdf"><span>Voir des conseils en design UX</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
        </article>
      </section>
    </main>
    <?php include '../assets/structure/footer.php' ;?>
    <script type="text/javascript">
        let contentArticles = document.querySelectorAll("main article");
        let links = document.querySelectorAll("aside li button");
        let urlHash = document.location.hash.replace("#", "");

        for (var link of links){
          link.addEventListener('click', function(){
            window.scrollTo(0,0)
            for (var article of contentArticles){
              let tab = this.id+"-article"
              article.classList.remove("active")
              if(article.id==tab){
                article.classList.add("active")
              }
            }
            for (var link of links){
              link.classList.remove("active")
            }
            this.classList.add("active")

             urlHash=document.location.hash=this.id;
             window.scrollTo(0,0)
          })
        }

        hashCheck();
        window.addEventListener("hashchange", hashCheck)
          function hashCheck(){
            let activeSection = urlHash+"-article";
            console.log(urlHash)

            if(activeSection!="-article"){
              for (var article of contentArticles){
                article.classList.remove("active")
                if(article.id==activeSection){
                  article.classList.add("active")
                }
              }
              for (var link of links){
                link.classList.remove("active")
                if(link.id==urlHash){
                  link.classList.add("active")
                }
              }
              window.scrollTo(0,0)
            }
        }
    </script>
  </body>
</html>
