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
      <ol class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <li>
          <button class="nav-link active" id="html-initiation-tab" data-bs-toggle="pill" data-bs-target="#html-initiation" type="button" role="tab" aria-controls="html-initiation" aria-selected="false">
            HTML initiation
          </button>
        </li>
        <li>
          <button class="nav-link" id="css-initiation-tab" data-bs-toggle="pill" data-bs-target="#css-initiation" type="button" role="tab" aria-controls="css-initiation" aria-selected="false">
            CSS initiation
          </button>
        </li>
        <li>
          <button class="nav-link" id="formulaires-tab" data-bs-toggle="pill" data-bs-target="#formulaires" type="button" role="tab" aria-controls="formulaires" aria-selected="false">
            Les formulaires
          </button>
        </li>
        <li>
          <button class="nav-link" id="positionnement-tab" data-bs-toggle="pill" data-bs-target="#positionnement" type="button" role="tab" aria-controls="positionnement" aria-selected="false">
            Positionnement
          </button>
        </li>
        <li>
          <button class="nav-link" id="responsive-tab" data-bs-toggle="pill" data-bs-target="#responsive" type="button" role="tab" aria-controls="responsive" aria-selected="false">
            Responsive
          </button>
        </li>
        <li>
          <button class="nav-link" id="css-animation-tab" data-bs-toggle="pill" data-bs-target="#css-animation" type="button" role="tab" aria-controls="css-animation" aria-selected="false">
            Animation
          </button>
        </li>
        <li>
          <button class="nav-link" id="validation1-tab" data-bs-toggle="pill" data-bs-target="#validation1" type="button" role="tab" aria-controls="validation1" aria-selected="false">
            Validation des connaissances <small>HTML/CSS</small>
          </button>
        </li>
        <li>
          <button class="nav-link" id="js-initiation-tab" data-bs-toggle="pill" data-bs-target="#js-initiation" type="button" role="tab" aria-controls="js-initiation" aria-selected="false">
            Javascript initiation <small>(part 1)</small>
          </button>
        </li>
        <li>
          <button class="nav-link" id="js-initiation2-tab" data-bs-toggle="pill" data-bs-target="#js-initiation2" type="button" role="tab" aria-controls="js-initiation2" aria-selected="false">
            Javascript initiation <small>(part 2)</small>
          </button>
        </li>
        <li>
          <button class="nav-link" id="js-formulaire-tab" data-bs-toggle="pill" data-bs-target="#js-formulaire" type="button" role="tab" aria-controls="js-formulaire" aria-selected="false">
            Vérification d'un formulaire
          </button>
        </li>
        <li>
          <button class="nav-link" id="bootstrap-tab" data-bs-toggle="pill" data-bs-target="#bootstrap" type="button" role="tab" aria-controls="bootstrap" aria-selected="false">
            Bootstrap
          </button>
        </li>
        <li>
          <button class="nav-link" id="js-temps-tab" data-bs-toggle="pill" data-bs-target="#js-temps" type="button" role="tab" aria-controls="js-temps" aria-selected="false">
            Gestion du temps
          </button>
        </li>
        <li>
          <button  class="nav-link" id="validation2-tab" data-bs-toggle="pill" data-bs-target="#validation2" type="button" role="tab" aria-controls="validation2" aria-selected="false">
            Validation des connaissances <small>JavaScript</small>
          </button>
        </li>
        <li>
          <button class="nav-link" id="git-intro-tab" data-bs-toggle="pill" data-bs-target="#git-intro" type="button" role="tab" aria-controls="git-intro" aria-selected="false">
            Git introduction
          </button>
        </li>
        <li>
          <button class="nav-link" id="git-init-tab" data-bs-toggle="pill" data-bs-target="#git-init" type="button" role="tab" aria-controls="git-init" aria-selected="false">
            Git initiation
          </button>
        </li>
        <li>
          <button class="nav-link" id="git-group-tab" data-bs-toggle="pill" data-bs-target="#git-group" type="button" role="tab" aria-controls="git-group" aria-selected="false">
            Travail en groupe
          </button>
        </li>
        <li>
          <button class="nav-link" id="portfolio-tab" data-bs-toggle="pill" data-bs-target="#portfolio" type="button" role="tab" aria-controls="portfolio" aria-selected="false">
            Portfolio
          </button>
        </li>
        <li>
          <button class="nav-link" id="avancee-tab" data-bs-toggle="pill" data-bs-target="#avancee" type="button" role="tab" aria-controls="avancee" aria-selected="false">
            Connaissances avancées
          </button>
        </li>
      </ol>
      </aside>
      <!-- contenu -->
      <section class="tab-content" id="v-pills-tabContent">
      <!-- HTML INITIATION-->
        <article class="tab-pane fade show active" id="html-initiation" role="tabpanel" aria-labelledby="html-initiation-tab">
          <h3>HTML initiation</h3>
           <iframe src="supports/html.pdf" title="HTML initiation"></iframe>
           <!--
           <a class="cta dl" href="download/templates-cv.zip"><span>Télécharger des exemples de CV</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
         -->
            <h4>Exercice</h4>
            <p><b><u>Astuce pour bien réussir</u> : Utilisez la sémantique des balises, sectionnez votre page et utilisez la notion de parent/enfant.</b></p>
            <p>À l'aide du cours, reproduisez le CV selon la maquette ci-dessous : </p>
            <a class="cta dl" target="_blank" href="exercices/html-css/initiation-html.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
           <h4>Quiz</h4>
          <a class="cta link" href="quiz/html-initiation.html"><span>Commencer le quiz d'initiation HTML</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
        </article>
        <article class="tab-pane fade" id="css-initiation" role="tabpanel" aria-labelledby="css-initiation-tab">
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
              <a class="cta dl" target="_blank" href="exercices/html-css/initiation-css.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
            </li>
            <li>
              <h6>CSS DINER</h6>
              <p>Cet exercice va vous permettre de vous exercer et d'apprendre les différents sélecteurs CSS. <br>
              <b>Les niveaux de 1 à 17 puis de 27 à 29 sont important à connaître</b>.</p>
              <p><small style="color:red">Attention, le nom des balises dans cet exercice ne sont pas de vrai nom de balise.</small></p>
              <a target="_blank" class="cta link" href="exercices/html-css/css-diner/index.html"><span>Commencer l'exercice</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
            </li>
          </ol>
          <h4>Quiz</h4>
            <a class="cta link" href="quiz/css-initiation.html"><span>Commencer le quiz d'initiation CSS</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
          <script>
            let zenGarden = document.querySelector('.zen-garden'),
                body = document.querySelector('body');

            zenGarden.addEventListener('click', function(){
              body.classList.toggle('style2');
            })
          </script>
        </article>
        <article class="tab-pane fade" id="formulaires" role="tabpanel" aria-labelledby="formulaires-tab">
          <h3>HTML : <small>Les formulaires</small></h3>
          <iframe src="supports/formulaire.pdf" title="HTML les formulaires"></iframe>
          <h4>Exercice</h4>
          <p><b><u>Astuce pour bien réussir</u> : faites attention à bien utiliser les attributs liés aux balises d'un formulaire. </b></p>
          <p>Reproduisez le formulaire d'inscription, selon la maquette suivante :</p>
          <a class="cta dl" target="_blank" href="exercices/html-css/exercice-form.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
        </article>
        <article class="tab-pane fade" id="positionnement" role="tabpanel" aria-labelledby="positionnement-tab">
          <h3>CSS : <small>Le positionnement des éléments</small></h3>
          <iframe src="supports/positionnement.pdf" title="HTML positionnement"></iframe>
          <h4>Fiche mémo</h4>
          <p>Voici une fiche mémo sur le <code>display flex;</code> vous pouvez l'enregistrer sur votre ordinateur.
          Utilisez ce mémo pour vous aider à faire les exercices suivants.</p>
          <a class="cta dl" target="_blank" href="supports/flexbox-memo.jpg"><span>Voir la fiche mémo</span> <i class="bi bi-image"></i></a>
          <h4>Exercices</h4>
          <ol>
            <!-- <li>
              <h6>Réaliser une barre de navigation</h6>
              <p>Faite un menu fixe dans la page, en positionnant les éléments selon la maquette suivante :</p>
              <a class="cta dl" target="_blank" href="exercices/html-css/exercice-menu.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
            </li>
            <li>
              <h6>Construire une box</h6>
              <p>Construisez, une box qui contient un formulaire de contact (tous les champs sont obligatoires) et positionnez la selon la maquette suivante :</p>
              <a class="cta dl" target="_blank" href="exercices/html-css/exercice-box.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
            </li> -->
            <li>
              <h6>Construire et positionner les éléments</h6>
              <p>Faite une barre de navigation fixée dans la page, en placant le titre du site et le menu.
                Puis centrer un formulaire de contact dans la page (tous les champs sont obligatoires).
                Positionnez les éléments selon la maquette suivante :</p>
              <a class="cta dl" target="_blank" href="exercices/html-css/exercice-positionement.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
            </li>
            <li>
              <h6>Flexfroggy</h6>
              <p>Cet exercice va vous permettre de vous exercer et d'apprendre les différentes propriétés liées au <code>display flex;</code></p>
              <a target="_blank" class="cta link" href="exercices/html-css/flexfroggy/index.html"><span>Commencer l'exercice</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
            </li>
          </ol>
        </article>
        <article class="tab-pane fade" id="responsive" role="tabpanel" aria-labelledby="responsive-tab">
          <h3>CSS : <small>Le responsive design</small></h3>
          <iframe src="supports/responsive.pdf" title="HTML responsive"></iframe>
          <h4>Exercice</h4>
          <h6>Refaire une maquette</h6>
          <p>Reproduisez le site en responsive (mobile first), selon la maquette :</p>
          <a class="cta dl" href="exercices/html-css/exercice-positions.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>

          <!-- <ol>
            <li>
              <h6>Adaptive design avec media query</h6>
              <p>Reprennez la maquette du site "my food" et adaptez-la pour mobile, selon la maquette :</p>
              <a class="cta dl" target="_blank" href="exercices/html-css/maquette-mobile.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
            </li>
            <li>
              <h6>Responsive en mobile first</h6>
              <p>Reproduisez le site en responsive (mobile first), selon la maquette :</p>
              <a class="cta dl" href="exercices/html-css/exercice-responsive.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
           </li>
          </ol> -->
          <h4>Connaissances</h4>
          <p>Pour aller plus loin vous pouvez vous renseigner avec les articles suivant :</p>
          <a class="cta link" href="../connaissances/UX/arquen/blog/ergonomie-ux-mobile-tablette/index.htm"><span>Les bases de l’Ergonomie</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
          <a class="cta link" href="../connaissances/web/zenuacademie/statistiques/statistiques-utilisation-internet/index.htm"><span>Statistiques internet 2022</span> <i class="bi bi-arrow-right-circle-fill"></i></a>

        </article>
        <article class="tab-pane fade" id="css-animation" role="tabpanel" aria-labelledby="css-animation-tab">
            <h3>CSS : <small>Les animations</small></h3>
            <iframe src="supports/animation.pdf" title="CSS animation"></iframe>
            <h4>Exercices</h4>
            <ol>
              <!-- <li>
                <h6>Ajouter une transition</h6>
                <p>En reprenant l'exercice précédent : au survol sur un élément du "menu", faites apparaitre l'initulé de celui-ci.</p>
                <a class="cta dl" target="_blank" href="exercices/html-css/exercice-hover.png"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li> -->
              <li>
                <h6>Menu déroulant</h6>
                <p>En reprenant le menu de l'exercice sur le positionnement.
                  Ajoutez une transition au sruvol de la souris, pour obtenir un menu déroulant.
                  Comme dans l'exemple :</p>
                  <a class="cta dl" target="_blank" href="exercices/html-css/exercice-transition.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li>
              <li>
                <h6>Apparition d'un élément</h6>
                <p>En reprenant la box de l'exercice sur le positionnement.
                  Ajoutez une animation à l'apparition de celle-ci.
                  Comme dans l'exemple :</p>
                  <a class="cta dl" target="_blank" href="exercices/html-css/exercice-animation.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li>
              <!-- <li>
                <h6>Faire une animation</h6>
                <p>Reproduisez l'animation suivante :</p>
                  <a class="cta dl" target="_blank" href="exercices/html-css/animation.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li> -->
            </ol>
        </article>
        <article class="tab-pane fade" id="validation1" role="tabpanel" aria-labelledby="validation1-tab">
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
            <h4>Quiz</h4>
            <a class="cta link" href="quiz/html-intermediaire.html"><span>Commencer le quiz intermédiaire HTML/CSS</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
        </article>
        <article class="tab-pane fade" id="js-initiation" role="tabpanel" aria-labelledby="js-initiation-tab">
          <h3>JavaScript initiation : <small>Première partie</small></h3>
           <iframe src="supports/javascript.pdf" title="JS initiation"></iframe>
           <h4>Exercices</h4>
            <ol>
              <li>
                <h6>Ouvrir une fênetre modale : menu</h6>
                <p><b>Pour cet exercice vous aurez besoin des notions suivante : déclaration de variable, faire un évènement et modifier le DOM.</b></p>
                 <p>En reprenant l'exercice précédent. En vue mobile : au clic sur le bouton "menu",
                 faites apparaitre le menu de la maquette ordinateur par dessus votre contenu.</p>
              </li>
              <li>
                <h6>Ouvrir une fênetre modale : formulaire</h6>
                <p><b>Pour cet exercice vous aurez besoin des notions suivante : déclaration de variable, faire un évènement et modifier le DOM.</b></p>
                 <p>En reprenant la box des exercices sur le positionement et l'animation.
                  Au clic, sur "contact" de votre menu, faite là apparaitre.
                  Il faudra également un bouton de fermeture, pour faire disparaitre cette fenêtre.
                  Comme dans l'exemple :</p>
                  <a class="cta dl" target="_blank" href="exercices/js/exercice-js1.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li>
              <li>
                <h6>Construire une modale en JavaScript</h6>
                <p><b>Pour cet exercice vous aurez besoin des notions suivante : déclaration de variable, faire un évènement et modifier le DOM.</b></p>
                <p>Reproduisez le site (en mobile first), avec ces fenêtres modal, en les construisant en JavaScript et non en HTML.
                  Selon les maquettes :</p>
                <a class="cta dl" href="exercices/js/exercice-modale.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
              </li>
            </ol>
        </article>
        <article class="tab-pane fade" id="js-initiation2" role="tabpanel" aria-labelledby="js-initiation2-tab">
          <h3>JavaScript initiation : <small>Deuxième partie</small></h3>
           <iframe src="supports/js2.pdf" title="JS initiation"></iframe>
           <h4>Exercices</h4>
           <ol>
             <li>
               <h6>Galerie d'image</h6>
               <p><b>Pour cet exercice, en plus des notions vues dans le cours précédent vous aurez besoin d'utiliser les boucles.</b></p>
               <p>Reproduisez le site (en mobile first), avec sa galerie d'image.
                 Au clic sur une image on ouvre une fenêtre modale pour l'afficher en grand.
                 Selon les maquettes :</p>
                 <a class="cta dl" href="exercices/js/exercice-johndoe.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
             </li>
             <li>
               <h6>Menu à onglet</h6>
               <p><b>Pour cet exercice, en plus des notions vues dans le cours précédent vous aurez besoin d'utiliser des boucles et des conditions.</b></p>
               <p>Reproduisez le site (en mobile first), avec son menu à onglet.
                 Au clic sur un onglet du menu, on affiche le contenu qui correspond.
                 Selon les maquettes :</p>
                 <a class="cta dl" href="exercices/js/exercice-cafe.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
             </li>
             <li>
               <h6>Manipulation des tableaux</h6>
               <p><b>Pour cet exercice, en plus des notions vues dans le cours précédent vous aurez besoin d'utiliser les tableaux, les boucles et les fonctions.
                 Aidez-vous de la documentation fournie pour utiliser les méthodes liées aux tableaux.</b></p>
               <p>Avec un tableau, construire une liste d'élément donné.
                 Au clic sur un élément de cette liste, retirez-le de la liste et ajoutez-le à un deuxième tableau.
                 Sur ce deuxième tableau faite le même procédé. Comme dans l'exemple suivant :</p>
                 <a class="cta dl" target="_blank" href="exercices/js/exercice-array.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
                 <a class="cta dl" target="_blank" href="../documentations/js.php"><span>Voir la documentation</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
             </li>
           </ol>
           <h4>Quiz</h4>
             <a class="cta link" href="quiz/js-initiation.html"><span>Commencer le quiz d'initiation JavaScript</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
        </article>
        <article class="tab-pane fade" id="js-formulaire" role="tabpanel" aria-labelledby="js-formulaire-tab">
          <h3>JavaScript : <small>Vérification d'un formulaire</small></h3>
           <iframe src="supports/verif-form.pdf" title="JS initiation"></iframe>
           <h4>Exercices</h4>
           <ol>
             <li>
               <h6>Formulaire d'inscription</h6>
               <p>Reprenez et faite la vérification du formulaire d'inscription, vue dans un précédent exercice :<br>
                 <ul>
                   <li>Les champs "Nom", "Prénom" et "Code postal" doivent être contrôlés dynamiquement pour contenir les bonnes informations (code postal uniquement en chiffre, etc.).
                   Un message est affiché en cas d'erreur.</li>
                   <li>Au clique sur l'envoi du formulaire, on vérifie que la valeur des champs email et confirmation email sont identiques,
                   il en va de même pour le mot de passe.</li>
                  <li>Les champs obligatoires sont vérifiés en JavaScript et non avec l'attribut <code>required</code>.</li>
                </ul>
                </p>
                <a class="cta dl" target="_blank" href="exercices/html-css/exercice-form.png"><span>Voir la maquette</span> <i class="bi bi-image"></i></a>
             </li>
             <li>
               <h6>Système de notation</h6>
               <p>Faite un système d'évaluation avec notation et commentaire, tous les champs sont obligatoires.
                 Comme dans l'exemple suivant :</p>
                 <a class="cta dl" target="_blank" href="exercices/js/exercice-form.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
             </li>
           </ol>
        </article>
        <article class="tab-pane fade" id="bootstrap" role="tabpanel" aria-labelledby="bootstrap-tab">
          <h3>Bootstrap</h3>
          <ol>
              <li>
                <h6>Télécharger Bootstrap</h6>
                <p>Dans un premier temps télécharger Bootstrap.</p>
                <a class="cta dl" href="download/bootstrap-5.1.3-dist.zip"><span>Télécharger bootstrap</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
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
                <a class="cta dl" href="exercices/bootstrap/Code-phenix-Atelier-Vogue-main.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
                <a class="cta link" href="../documentations/bootstrap.php"><span>Accéder à la documentation Bootstrap</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
              </li>
        </article>
        <article class="tab-pane fade" id="js-temps" role="tabpanel" aria-labelledby="js-temps-tab">
          <h3>JavaScript : <small>Gestion du temps</small></h3>
           <iframe src="supports/gestion-tps.pdf" title="JS Gestion du temps"></iframe>
           <h4>Exercices</h4>
           <ol>
             <li>
               <h6>Test de réactivité</h6>
               <p>Au bout de 3 secondes, affichez un bouton qui au clic donne le temps de réaction <b>en secondes et millisecondes</b>, entre l'affichage du bouton et le clic.
                 Si le bouton n'est pas cliqué au bout de 3 secondes un message apparait.
                 Comme dans l'exemple suivant :</p>
                 <a class="cta dl" target="_blank" href="exercices/js/exercice-temps1.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
             </li>
             <li>
               <h6>Prise de rendez-vous</h6>
               <p><b>Certaines notions ne sont pas dans le cours. À vous de chercher la solution avec les supports mis à disposition.</b></p>
               <p>Récupérez la valeur d'un <code>input</code> de type date (celle-ci ne peut être inférieur à la date du jour)
                 et d'un <code>input</code> de type time. Affichez le temps restant <b>en jours</b> entre aujourd'hui et cette date.
                 Comme dans l'exemple suivant :</p>
                 <a class="cta dl" target="_blank" href="exercices/js/exercice-temps2.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
             </li>
           </ol>
        </article>
        <article class="tab-pane fade" id="validation2" role="tabpanel" aria-labelledby="validation2-tab">
            <h3>Validation des connaissances : <small>JavaScipt</small></h3>
            <h4>Exercices</h4>
            <p>Réaliser un carousel, en prenant en compte les précisions suivantes :</p>
            <ul>
              <li>Les slides sont des objets en JS et non en HTML.</li>
              <li>Chaque slide comporte une image, un texte descriptif de l'image et un lien.</li>
              <li>Au clic sur le bouton précédent, ou suivant, on affiche le slide  qui correspond.</li>
              <li>Un point est créé pour chaque slide, au clic sur celui-ci on affiche le slide qui correspond.</li>
              <li>Quand on affiche un slide suivant, le slide part vers la gauche et le nouveau slide arrive de la droite.
                Lorsqu'on affiche un slide précédent, le slide part vers la droite et le nouveau slide arrive de la gauche. </li>
            </ul>
            <a class="cta dl" target="_blank" href="exercices/js/exercice-validation-js.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
            <h4>Quiz</h4>
            <a class="cta link" href="quiz/js-intermediaire.html"><span>Commencer le quiz intermédiaire JavaScript</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
        </article>
        <article class="tab-pane fade" id="git-intro" role="tabpanel" aria-labelledby="git-intro-tab">
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
        <article class="tab-pane fade" id="git-init" role="tabpanel" aria-labelledby="git-init-tab">
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
        <article class="tab-pane fade" id="git-group" role="tabpanel" aria-labelledby="git-group-tab">
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
                        <li>Au clic sur ce bouton on va afficher un message pour avertir que le produit est ajouté au panier.</li>
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
        <article class="tab-pane fade" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
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

            <a class="cta dl" href="download/templates-portfolio.zip"><span>Télécharger des exemples de portfolio</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
            <a class="cta dl" target="_blank" href="../connaissances/UX/intervenant/Introduction au design - focus portfolio.pdf"><span>Voir des conseils en design UX</span> <i class="bi bi-arrow-right-circle-fill"></i></a>

        </article>
        <article class="tab-pane fade" id="avancee" role="tabpanel" aria-labelledby="avancee-tab">
            <h3>Connaissances avancées</h3>
            <p>Dans cette partie certaines notions ne sont pas dans les cours précédents.
            À vous de chercher la solution avec les supports mis à disposition.</p>
            <h4>Exercices</h4>
            <ol>
              <li>
                <h6>Mini-jeu : parcours</h6>
                <p>Reproduisez le mini-jeu en HTML/CSS uniquement, selon la maquette et les objectifs demandés.</p>
                <a class="cta dl" target="_blank" href="exercices/html-css/exercice-validation2.pdf"><span>Voir les objectifs</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
                <a class="cta dl" target="_blank" href="exercices/html-css/exercice-validation2.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li>
              <li>
                <h6>Mini-jeu : labyrinthe</h6>
                <p>Reproduisez le mini-jeu en HTML/CSS uniquement, selon la maquette et les objectifs demandés.</p>
                <a class="cta dl" target="_blank" href="exercices/html-css/exercice-mini-jeu.pdf"><span>Voir les objectifs</span> <i class="bi bi-image"></i></a>
                <a class="cta dl" target="_blank" href="exercices/html-css/exercice-mini-jeu.gif"><span>Voir l'exemple</span> <i class="bi bi-image"></i></a>
              </li>
              <li>
                <h6>Application Hanjie <small>(réalisable en groupe)</small></h6>
                <p>Reproduisez l'application, selon la maquette et les objectifs demandés.</p>
                <p>Ce projet est réalisable en groupe de deux personne, en utilsant Git.</p>
                <a class="cta dl" href="exercices/js/exercice-hanjie.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
              </li>
              <li>
                <h6>Application 2048 <small>(réalisable en groupe)</small></h6>
                <p>Reproduisez l'application, selon la maquette et les objectifs demandés.</p>
                <p>Ce projet est réalisable en groupe de deux personne, en utilsant Git.</p>
                <a class="cta dl" target="_blank" href="exercices/js/projet-2048.pdf"><span>Voir les objectifs</span> <i class="bi bi-image"></i></a>
              </li>
              <!-- <li>
                <h6>Formulaire complexe <small>(Facultatif)</small></h6>
                <p>Reproduisez le site, avec son formulaire dynamique.
                  Selon les maquettes et les instructions :</p>
                  <a class="cta dl" href="exercices/js/exercice-cocoplant.zip"><span>Télécharger l'exercice</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
              </li> -->
            </ol>
            <h4>Quiz</h4>
            <a class="cta link" href="quiz/quiz-avance.html"><span>Commencer le quiz avancé</span> <i class="bi bi-arrow-right-circle-fill"></i></a>
        </article>
      </section>
    </main>
    <!-- Liaison au script Bootstrap -->
    <script src="../assets/bootstrap/js/bootstrap.js" type="text/javascript"></script>
  </body>
</html>
