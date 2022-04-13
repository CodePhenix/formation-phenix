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
      <!-- <a href="#" id="back-to-top" class="btn btn-default">&uarr;</a> -->
      <aside>
      <ul class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <li>
          <button class="nav-link" id="scss-tab" data-bs-toggle="pill" data-bs-target="#scss" type="button" role="tab" aria-controls="scss" aria-selected="false">
            Sass/Scss
          </button>
        </li>
        <li>
          <button style="cursor:default;color:#ccc;" class="nav-link" id="css-initiation-tab" data-bs-toggle="pill" data-bs-target="#css-initiation" type="button" role="tab" aria-controls="css-initiation" aria-selected="false">
            jQuery
          </button>
        </li>
        <li>
          <button class="nav-link" id="gitahead-tab" data-bs-toggle="pill" data-bs-target="#gitahead" type="button" role="tab" aria-controls="gitahead" aria-selected="false">
            Git GUI/GitAhead
          </button>
        </li>
        <li>
          <button class="nav-link" id="vuejs-tab" data-bs-toggle="pill" data-bs-target="#vuejs" type="button" role="tab" aria-controls="vuejs" aria-selected="false">
            VueJS
          </button>
        </li>
        <li>
          <button class="nav-link" id="canvas-tab" data-bs-toggle="pill" data-bs-target="#canvas" type="button" role="tab" aria-controls="canvas" aria-selected="false">
            Canvas
          </button>
        </li>
        <li>
          <button class="nav-link" id="gimp-tab" data-bs-toggle="pill" data-bs-target="#gimp" type="button" role="tab" aria-controls="gimp" aria-selected="false">
            GIMP
          </button>
        </li>
        <li>
          <button class="nav-link" id="inkscape-tab" data-bs-toggle="pill" data-bs-target="#inkscape" type="button" role="tab" aria-controls="inkscape" aria-selected="false">
            Inkscape
          </button>
        </li>
      </ul>
      </aside>
      <!-- contenu -->
      <section class="tab-content" id="v-pills-tabContent">
      <article class="tab-pane fade show active" id="intro" role="tabpanel" aria-labelledby="intro-tab">
        <h3>Formation continue</h3>
        <p>Dans le milieu du web, la veille technologique est très importante.
          Cette section va vous permettre d'apprendre davantage et d'accroître vos connaissances, avec des méthodes et des pratiques courantes dans le domaine.
          Il est fortement conseillé de parcourir l'ensemble des sujets de cette section.
        </p>
      </article>
        <article class="tab-pane fade" id="scss" role="tabpanel" aria-labelledby="scss-tab">
          <h3>Sass/Scss</h3>
           <iframe src="supports/sass_tutoriel.pdf" title="scss"></iframe>
        </article>
        <article class="tab-pane fade" id="jquery" role="tabpanel" aria-labelledby="jquery-tab">
          <h3>jQuery</h3>
          <iframe src="supports/jquery.pdf" title="jQuery"></iframe>
        </article>
        <article class="tab-pane fade" id="gitahead" role="tabpanel" aria-labelledby="gitahead-tab">
          <h3>Git GUI/GitAhead</small></h3>
          <p>GitAhead est un GUI (Graphic User Interface), c'est une interface graphique, simple et intuitive pour utiliser Git.</p>
          <p>Il permet la gestion de projet avec Git sans avoir à utiliser le terminal de commande. GitAhead à déjà été installé sur votre ordinateur, vous pouvez donc l'utiliser depuis le menu des applications.</p>
          <img src="supports/gitahead.png">
        </article>
        <article class="tab-pane fade" id="vuejs" role="tabpanel" aria-labelledby="vuejs-tab">
          <h3>VueJS</small></h3>
          <iframe src="supports/Vue-js-Up-and-Running.pdf" title="vueJS"></iframe>
        </article>
        <article class="tab-pane fade" id="canvas" role="tabpanel" aria-labelledby="canvas-tab">
          <h3>Canvas</small></h3>
          <iframe src="canvas\fr\docs\Web\API\Canvas_API\Tutorial-1.html" title="vueJS"></iframe>
        </article>
        <article class="tab-pane fade" id="gimp" role="tabpanel" aria-labelledby="gimp-tab">
          <h3>GIMP</small></h3>
          <iframe src="gimp\magazin\tuto-gimp-bases-utilisation-du-logiciel-gimp/index.htm" title="inkscape"></iframe>
        </article>
        <article class="tab-pane fade" id="inkscape" role="tabpanel" aria-labelledby="inkscape-tab">
          <h3>Inkscape</small></h3>
          <iframe src="inkscape/index.htm" title="inkscape"></iframe>
        </article>
      </section>
    </main>
    <!-- Liaison au script Bootstrap -->
    <script src="../assets/bootstrap/js/bootstrap.js" type="text/javascript"></script>
  </body>
</html>
