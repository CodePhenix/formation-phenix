<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
  	<link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/documentation.css">
    <!-- color picker -->
    <link rel="stylesheet" type="text/css" href="../assets/js/spectrum/spectrum.css">
    <script type="text/javascript" src="../assets/js/spectrum/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="../assets/js/spectrum/spectrum.js"></script>
    <title>&lt;CodePhenix&gt; Documentation</title>
  </head>
  <body>
    <?php include '../assets/structure/header.php' ;?>
    <main>
      <a href="#" id="back-to-top" class="btn btn-default">&uarr;</a>
              <aside>
              <ul class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <li>
                  <h2>Les bases de la CSS</h2>
                </li>
                <li>
                  <button class="nav-link active" id="debut-tab" data-bs-toggle="pill" data-bs-target="#debut" type="button" role="tab" aria-controls="debut" aria-selected="false">
                    Débuter une CSS
                  </button>
                </li>
                <li>
                  <button class="nav-link " id="selecteurs-tab" data-bs-toggle="pill" data-bs-target="#selecteurs" type="button" role="tab" aria-controls="selecteurs" aria-selected="false">
                    Sélecteurs
                  </button>
                </li>
                <li>
                  <button class="nav-link" id="modele-tab" data-bs-toggle="pill" data-bs-target="#modele" type="button" role="tab" aria-controls="modele" aria-selected="false">
                    Modèle d'un élément
                  </button>
                </li>
                <li>
                  <button class="nav-link" id="positions-tab" data-bs-toggle="pill" data-bs-target="#positions" type="button" role="tab" aria-controls="positions" aria-selected="false">
                    Positionnement
                  </button>
                </li>
                <li>
                  <button class="nav-link" id="etats-tab" data-bs-toggle="pill" data-bs-target="#etats" type="button" role="tab" aria-controls="etats" aria-selected="false">
                    États d'un élément
                  </button>
                </li>
                <li>
                  <button class="nav-link" id="fonds-tab" data-bs-toggle="pill" data-bs-target="#fonds" type="button" role="tab" aria-controls="fonds" aria-selected="false">
                    Fonds
                  </button>
                </li>
                <li>
                  <button class="nav-link" id="textes-css-tab" data-bs-toggle="pill" data-bs-target="#textes-css" type="button" role="tab" aria-controls="textes" aria-selected="false">
                    Textes
                  </button>
                </li>
                <li>
                  <button class="nav-link" id="couleurs-tab" data-bs-toggle="pill" data-bs-target="#couleurs" type="button" role="tab" aria-controls="couleurs" aria-selected="false">
                    Couleurs
                  </button>
                </li>
                <li>
                  <button class="nav-link" id="liste-css-tab" data-bs-toggle="pill" data-bs-target="#liste-css" type="button" role="tab" aria-controls="liste-css" aria-selected="false">
                    Autres propriétés basiques
                  </button>
                </li>
                <li>
                  <h2>Animation</h2>
                </li>
                <li>
                  <button class="nav-link" id="transitions-tab" data-bs-toggle="pill" data-bs-target="#transitions" type="button" role="tab" aria-controls="transitions" aria-selected="false">
                    Transition
                  </button>
                </li>
                <li>
                  <button class="nav-link" id="animations-tab" data-bs-toggle="pill" data-bs-target="#animations" type="button" role="tab" aria-controls="animations" aria-selected="false">
                    Animation
                  </button>
                </li>
              </ul>
              </aside>
      <!-- Contenu CSS -->
              <section class="tab-content" id="v-pills-tabContent">
      <!-- Bases CSS -->
                <article class="tab-pane fade show active" id="debut" role="tabpanel" aria-labelledby="debut-tab">
                  <h3>Bien débuter une CSS</h3>
                    <div class="bg-dark">
                    <code>
                      <span class="balise">*</span>{margin: <span class="attribut">0</span>;padding: <span class="attribut">0</span>;}<br>
                      <span class="balise">html</span>{scroll-behavior: smooth; font-size:  <span class="attribut">62.5%</span>;}<br>
                      <span class="balise">body</span>{font-size:  <span class="function">calc</span>( <span class="attribut">1.4em</span>  <span class="var">+</span>  <span class="attribut">1vw</span>);}<br>
                      <span class="balise">img</span>{max-width:  <span class="attribut">100%</span>;}<br>

                      <span class="commentaire">/* RESPONSIVE */</span><br>
                      @<span class="var">media</span> <span class="attribut">screen</span> <span class="var">and</span> (min-width: <span class="attribut">768px</span>){<br>
                        <span class="commentaire">/* Tablettes */</span><br>
                      }<br>
                      @<span class="var">media</span> <span class="attribut">screen</span> <span class="var">and</span> (min-width: <span class="attribut">1024px</span>){<br>
                        <span class="commentaire">/* Ordinateurs */</span><br>
                      }
                    </code>
                  </div>
                </article>
                <article class="tab-pane fade" id="selecteurs" role="tabpanel" aria-labelledby="selecteurs-tab">
                  <h3>Les sélecteurs CSS</h3>
                  <hr>
                  <table class="table table-striped table-hover">
                        <tbody>
                          <tr>
                             <th>Sélecteur</th>
                             <th>Description</th>
                          </tr>
                          <tr>
                              <td><code>*</code></td>
                              <td>Cible tous les éléments.</td>
                          </tr>
                          <tr>
                              <td><code>balise</code></td>
                              <td>Cible la balise.</td>
                          </tr>
                          <tr>
                              <td><code>#exemple</code></td>
                              <td>Cible l'identifiant nommé (ici le nom de l'identifiant est "exemple").</td>
                          </tr>
                          <tr>
                              <td><code>.exemple</code></td>
                              <td>Cible la classe nommée (ici le nom de la classe est "exemple").</td>
                          </tr>
                          <tr>
                              <td><code>,</code></td>
                              <td>Permet d'ajouter un sélecteur.</td>
                          </tr>
                          <tr>
                              <td><code>balise .exemple</code></td>
                              <td>L'espace permet de cibler les enfants <br>(ici on cible les enfants de la balise dont la classe est "exemple").</td>
                          </tr>
                          <tr>
                              <td><code>></code></td>
                              <td>Cible tous les éléments enfants.</td>
                          </tr>
                          <tr>
                              <td><code>+</code></td>
                              <td>Cible l'élément placé directement après.</td>
                          </tr>
                          <tr>
                              <td><code>~</code></td>
                              <td>Cible l'élément placé après.</td>
                          </tr>
                          <tr>
                              <td><code>:first-child</code></td>
                              <td>Cible uniquement l'élément qui est le premier enfant.</td>
                          </tr>
                          <tr>
                              <td><code>:last-child</code></td>
                              <td>Cible uniquement l'élément qui est le dernier enfant.</td>
                          </tr>
                          <tr>
                              <td><code>:nth-child(n)</code></td>
                              <td>Cible l'élément enfant dont la valeur est <code>n</code>.</td>
                          </tr>
                          <tr>
                              <td><code>[attribut]</code></td>
                              <td>Cible tous les éléments dont l'attribut est <code>attribut</code>.</td>
                          </tr>
                          <tr>
                              <td><code>[attribut="valeur"]</code></td>
                              <td>Cible tous les éléments dont la valeur de l'attribut est <code>valeur</code>.</td>
                          </tr>
                          <tr>
                              <td><code>:before</code></td>
                              <td>Créé et cible un élément qui va être placé en tant que premier enfant d'un élément. Doit contenir une propriété <code>content</code>.</td>
                          </tr>
                          <tr>
                              <td><code>:after</code></td>
                              <td>Créé et cible un élément qui va être placé en tant que dernier enfant d'un élément. Doit contenir une propriété <code>content</code>.</td>
                          </tr>
                        </tbody>
                  </table>
                  <!--<hr>
                  <p>Exemple :</p>
                  <div class="row">
                    <div class="bg-dark col-md-6">
                      <code>
                        <span class="balise">p</span>{color:blue;}<br>
                        #exemple{color:red;}<br>
                        .exemple{color:green;}<br>
                        <span class="balise">div .exemple</span>{color:orange;}<br>
                        <span class="balise">p</span>:first-child{color:yellow;}<br>
                        <span class="balise">p</span>:last-child{color:purple;}

                      </code>
                    </div>
                    <div id="selecteurs-demo" class="row col-md-6">
                      <div>
                      	<p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                      	<p id="exemple">Lorem ipsum</p>
                      	<p> <span class="exemple">Lorem ipsum</span></p>
                      	<p class="exemple">Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                      </div>
                    </div>
                  </div>-->
                </article>
                <article class="tab-pane fade" id="modele" role="tabpanel" aria-labelledby="modele-tab">
                  <h3>Modèle d'un élément</h3>
                  <div class="accordion accordion-flush" id="modele-css">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="marges-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#marges-contenu" aria-expanded="false" aria-controls="marges-contenu">
                            <h4>Les marges</h4>
                          </button>
                        </h2>
                        <div id="marges-contenu" class="accordion-collapse collapse" aria-labelledby="marges-titre" data-bs-parent="#modele-css">
                          <div class="accordion-body">
                            <h5>margin et padding</h5>
                            <p>Le <code>margin</code> correspond aux marges extérieures de l'élément, tandis que le <code>padding</code> correspond aux marges intérieures du contenu (elles font partie de la taille du contenu).</p>
                            <h5>Liste de propriétés liées aux marges</h5>
                            <hr>
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>margin</code></td>
                                        <td>Regroupe les marges extérieures sur tous les côtés.</td>
                                    </tr>
                                    <tr>
                                        <td><code>margin-top</code></td>
                                        <td>Définit une marge en haut.</td>
                                    </tr>
                                    <tr>
                                        <td><code>margin-right</code></td>
                                        <td>Définit une marge sur le côté droit.</td>
                                    </tr>
                                    <tr>
                                        <td><code>margin-bottom</code></td>
                                        <td>Définit une marge en bas.</td>
                                    </tr>
                                    <tr>
                                        <td><code>margin-left</code></td>
                                        <td>Définit une marge sur le côté gauche.</td>
                                    </tr>
                                    <tr>
                                        <td><code>padding</code></td>
                                        <td>Regroupe les marges intérieures sur les côtés.</td>
                                    </tr>
                                    <tr>
                                        <td><code>padding-top</code></td>
                                        <td>Définit une marge en haut.</td>
                                    </tr>
                                    <tr>
                                        <td><code>padding-right</code></td>
                                        <td>Définit une marge sur le côté droit.</td>
                                    </tr>
                                    <tr>
                                        <td><code>padding-bottom</code></td>
                                        <td>Définit une marge en bas.</td>
                                    </tr>
                                    <tr>
                                        <td><code>padding-left</code></td>
                                        <td>Définit une marge sur le côté gauche.</td>
                                    </tr>
                                  </tbody>
                              </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="bordures-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bordures-contenu" aria-expanded="false" aria-controls="bordures-contenu">
                            <h4>Les bordures</h4>
                          </button>
                        </h2>
                        <div id="bordures-contenu" class="accordion-collapse collapse" aria-labelledby="bordures-titre" data-bs-parent="#modele-css">
                          <div class="accordion-body">
                            <h5>border et outline</h5>
                            <p>Les différences des contours (<code>outline</code>) par rapport aux bordures (<code>border</code>) :</p>
                            <ul>
                              <li>Les contours ne prennent pas d'espace et peuvent donc chevaucher d'autres éléments.</li>
                              <li>Ils ne modifient pas la taille ou la position de l'élément.</li>
                              <li>On ne peut pas définir un contour pour chaque bord, il est le même sur tous ses côtés.</li>
                              <li>Un contour ne peut pas être circulaire.</li>
                            </ul>
                            <div id="outline-exemple">
                              <p>Les différents types de bordures et contours :</p>
                              <div style="outline-style: dashed;">dashed</div>
                              <div style="outline-style: dotted;">dotted</div>
                              <div style="outline-style: solid;">solid</div>
                              <div style="outline-style: double;">double</div>
                              <div style="outline-style: ridge;">ridge</div>
                              <div style="outline-style: groove;">groove</div>
                              <div style="outline-style: inset;">inset</div>
                              <div style="outline-style: outset;">outset</div>
                            </div>
                            <h5>Liste de propriétés liées aux bordures</h5>
                            <hr>
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>border</code></td>
                                        <td>Regroupe les propriétés de taille, de style et de couleur sur tous les côtés.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-width</code></td>
                                        <td>Définit la taille de la bordure.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-style</code></td>
                                        <td>Permet de changer le style de bordure.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-color</code></td>
                                        <td>Change la couleur de la bordure.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-top</code></td>
                                        <td>Impacte uniquement la bordure en haut de l'élément.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-right</code></td>
                                        <td>Impacte seulement la bordure du côté droit.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-bottom</code></td>
                                        <td>Impacte uniquement la bordure en bas de l'élément.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-left</code></td>
                                        <td>Impacte seulement la bordure du côté gauche.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-radius</code></td>
                                        <td>Permet d'arrondir l'angle des bords.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-image</code></td>
                                        <td>Définit une image comme style de bordure.</td>
                                    </tr>
                                    <tr>
                                        <td><code>outline</code></td>
                                        <td>Regroupe les propriétés de taille, de style et de couleur des contours.</td>
                                    </tr>
                                    <tr>
                                        <td><code>outline-width</code></td>
                                        <td>Définit la taille du contour.</td>
                                    </tr>
                                    <tr>
                                        <td><code>outline-style</code></td>
                                        <td>Permet de changer le style du contour.</td>
                                    </tr>
                                    <tr>
                                        <td><code>outline-color</code></td>
                                        <td>Change la couleur du contour.</td>
                                    </tr>
                                    <tr>
                                        <td><code>outline-offset</code></td>
                                        <td>Permet de gérer l'espacement entre le contour et l'élément.</td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="display-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#display-contenu" aria-expanded="false" aria-controls="display-contenu">
                            <h4>Système de boite</h4>
                          </button>
                        </h2>
                        <div id="display-contenu" class="accordion-collapse collapse" aria-labelledby="disaply-titre" data-bs-parent="#modele-css">
                          <div class="accordion-body">
                            <p>Une balise à une propriété <code>display</code> par défaut, elle est soit de type <code>block</code> soit de type <code>inline</code>.</p>
                            <div class="row">
                              <div class="col-md-8">
                                <div class="demoContent" id="display-exemple">
                                  <div>Contenu</div>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="demoBtn">
                                  <code>display</code><br>
                                  <button id="block" class="active">block</button>
                                  <button id="inline">inline</button>
                                  <button id="inlineblock">inline-block</button>
                                </div>
                              </div>
                            </div>
                            <hr>
                            <h5>Paramètres de la propriété display</h5>
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>display</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>block</code></td>
                                        <td>L'élément prend 100% de la largeur de son élément parent.</td>
                                    </tr>
                                    <tr>
                                        <td><code>inline</code></td>
                                        <td>L'élément prend la largeur égale à la taille de son contenu uniquement. Il est impossible de lui préciser une taille.</td>
                                    </tr>
                                    <tr>
                                        <td><code>inline-block</code></td>
                                        <td>L'élément prend la largeur de son contenu. Mais il est possible de lui préciser une taille.</td>
                                    </tr>
                                    <tr>
                                        <td><code>flex</code></td>
                                        <td>Élément de type block dont les enfants sont placés de manière flexible en fonction d'autres propriétés données.</td>
                                    </tr>
                                    <tr>
                                        <td><code>inline-flex</code></td>
                                        <td>Élément de type inline dont les enfants sont flexibles.</td>
                                    </tr>
                                    <tr>
                                        <td><code>table</code></td>
                                        <td>Élément de type block dont les enfants vont se comporter comme les cellules d'un tableau.</td>
                                    </tr>
                                    <tr>
                                        <td><code>inline-table</code></td>
                                        <td>Élément de type inline dont les enfants vont se comporter comme les cellules d'un tableau.</td>
                                    </tr>
                                    <tr>
                                        <td><code>grid</code></td>
                                        <td>Élément de type block dont les enfants vont se comporter comme une grille.</td>
                                    </tr>
                                    <tr>
                                        <td><code>inline-grid</code></td>
                                        <td>Élément de type inline dont les enfants vont se comporter comme une grille.</td>
                                    </tr>
                                    <tr>
                                        <td><code>none</code></td>
                                        <td>L'élément ne s'affiche pas.</td>
                                    </tr>
                                  </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="contenu-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#contenu-contenu" aria-expanded="false" aria-controls="contenu-contenu">
                            <h4>Les tailles</h4>
                          </button>
                        </h2>
                        <div id="contenu-contenu" class="accordion-collapse collapse" aria-labelledby="contenu-titre" data-bs-parent="#modele-css">
                          <div class="accordion-body">
                            <h5>liste des propriétés liées aux tailles</h5>
                            <hr>
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>width</code></td>
                                        <td>Définit la largeur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>min-width</code></td>
                                        <td>Définit une largeur minimum.</td>
                                    </tr>
                                    <tr>
                                        <td><code>max-width</code></td>
                                        <td>Définit une largeur maximum.</td>
                                    </tr>
                                    <tr>
                                        <td><code>height</code></td>
                                        <td>Définit la hauteur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>min-height</code></td>
                                        <td>Définit une hauteur minimum.</td>
                                    </tr>
                                    <tr>
                                        <td><code>max-height</code></td>
                                        <td>Définit une hauteur maximum.</td>
                                    </tr>
                                  </tbody>
                              </table>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                    <div id="modele-exemple">
                      margin-top
                      <span class="left">margin-left</span>
                      <div>
                        border-top
                        <span class="left">border-left</span>
                          <div>
                            padding-top
                            <span class="left">padding-left</span>
                            <div>
                              Contenu
                            </div>
                            padding-bottom
                            <span class="right">padding-right</span>
                          </div>
                          border-bottom
                          <span class="right">border-right</span>
                      </div>
                      margin-bottom
                      <span class="right">margin-right</span>
                    </div>
                  </div>
                </article>
                <article class="tab-pane fade" id="positions" role="tabpanel" aria-labelledby="positions-tab">
                  <h3>Positionnement des éléments</h3>
                  <div class="accordion accordion-flush" id="positions-liste">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="display-flex-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#display-flex-contenu" aria-expanded="false" aria-controls="display-flex-contenu">
                            <h4>display : flex ;</h4>
                          </button>
                        </h2>
                        <div id="display-flex-contenu" class="accordion-collapse collapse" aria-labelledby="display-flex-titre" data-bs-parent="#positions-liste">
                          <div class="accordion-body">
                            <p>Les différentes propriétés liées au <code>display: flex;</code> se mettent sur le parent (le conteneur) dont on souhaite aligner les enfants.</p>
                            <div class="row">
                              <div class="col-md-8">
                                <div class="demoContent" >
                                  <div class="container-flex">
                                    <div class="item-flex">1</div>
                                    <div class="item-flex">2</div>
                                    <div class="item-flex">3</div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4 ">
                                <div class="demoBtn">
                                  <code>flex-direction</code>
                                    <button id="row" class="active">row</button>
                                    <button id="row-reverse">row-reverse</button>
                                    <button id="column">column</button>
                                    <button id="column-reverse">column-reverse</button>
                                </div>
                                <div class="demoBtn">
                                  <code>justify-content</code>
                                    <button id="justify-start" class="active">flex-start</button>
                                    <button id="justify-center">center</button>
                                    <button id="space-between">space-between</button>
                                    <button id="space-around">space-around</button>
                                    <button id="justify-end">flex-end</button>
                                </div>
                                <div class="demoBtn">
                                  <code>align-items</code>
                                    <button id="item-start">flex-start</button>
                                    <button id="item-center">center</button>
                                    <button id="stretch" class="active">stretch</button>
                                    <button id="baseline">baseline</button>
                                    <button id="item-end">flex-end</button>
                                </div>
                                <div class="demoBtn">
                                  <code>flex-wrap</code>
                                    <button id="nowrap">nowrap</button>
                                    <button id="wrap">wrap</button>
                                    <button id="wrap-reverse">wrap-reverse</button>
                                </div>
                                <div class="demoBtn">
                                  <code>align-content</code>
                                  <p><small class="commentaire">Doit avoir une propriété flex-wrap: wrap ou wrap-reverse</small></p>
                                    <button id="content-start">flex-start</button>
                                    <button id="content-center">center</button>
                                    <button id="content-stretch">stretch</button>
                                    <button id="content-between">space-between</button>
                                    <button id="content-around">space-around</button>
                                    <button id="content-end">flex-end</button>
                                </div>
                              </div>
                            </div>
                            <hr>
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>flex-direction</code></td>
                                        <td>Place les éléments en ligne ou en column et gère leurs directions.</td>
                                    </tr>
                                    <tr>
                                        <td><code>justify-content</code></td>
                                        <td>Change l'alignement horizontal des éléments.</td>
                                    </tr>
                                    <tr>
                                        <td><code>align-items</code></td>
                                        <td>Change l'alignement vertical des éléments.</td>
                                    </tr>
                                    <tr>
                                        <td><code>flex-wrap</code></td>
                                        <td>Gère le passage à la lige des éléments.</td>
                                    </tr>
                                    <tr>
                                        <td><code>align-content</code></td>
                                        <td>Gère l'alignement sur plusieurs lignes.</td>
                                    </tr>
                                    <tr>
                                        <td><code>flex-flow</code></td>
                                        <td>Regroupe les propriétés <code>flex-direction</code> et <code>flex-wrap</code>.</td>
                                    </tr>
                                    <tr>
                                        <td><code>place-content</code></td>
                                        <td>Regroupe les propriétés <code>align-content</code> et <code>justify-content</code>.</td>
                                    </tr>
                                  </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="position-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#position-contenu" aria-expanded="false" aria-controls="position-contenu">
                            <h4>position</h4>
                          </button>
                        </h2>
                        <div id="position-contenu" class="accordion-collapse collapse" aria-labelledby="position-titre" data-bs-parent="#positions-liste">
                          <div class="accordion-body">

                                  <div class="row">
                                    <div class="col-md-8">
                                      <div class="demoContent" id="position-exemple">
                                        <p>le flux</p>
                                        <div id="pos">Contenu</div>
                                      </div>
                                    </div>
                                    <div class="col-md-4 ">
                                      <div class="demoBtn">
                                        <div><code>position</code></div>
                                        <button id="static" class="active">static</button>
                                        <button id="relative">relative</button>
                                        <button id="absolute">absolute</button>
                                        <button id="fixed">fixed</button>
                                        <button id="sticky">sticky</button>
                                      </div>
                                    </div>
                                  </div>
                                    <hr>
                                    <h5>Paramètres pour la propriété position</h5>
                                    <table class="table table-striped table-hover">
                                          <tbody>
                                            <tr>
                                               <th>position</th>
                                               <th>description</th>
                                            </tr>
                                            <tr>
                                                <td><code>static</code></td>
                                                <td>Valeur par défaut d'un élément, il est positionné, selon son flux dans la page.</td>
                                            </tr>
                                            <tr>
                                                <td><code>relative</code></td>
                                                <td>Positionné de manière static mais peut être décalé de sa position d'origine.</td>
                                            </tr>
                                            <tr>
                                                <td><code>absolute</code></td>
                                                <td>Sort du flux, il est positionné de manière absolue par rapport à la page.</td>
                                            </tr>
                                            <tr>
                                                <td><code>fixed</code></td>
                                                <td>Positionné de manière absolue, mais fixé par rapport à l'écran.</td>
                                            </tr>
                                            <tr>
                                                <td><code>sticky</code></td>
                                                <td>Garde sa place dans le flux, mais va rester fixé à son emplacement.</td>
                                            </tr>
                                        </tbody>
                                    </table>

                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="zindex-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#zindex-contenu" aria-expanded="false" aria-controls="zindex-contenu">
                            <h4>z-index</h4>
                          </button>
                        </h2>
                        <div id="zindex-contenu" class="accordion-collapse collapse" aria-labelledby="zindex-titre" data-bs-parent="#positions-liste">
                          <div class="accordion-body">
                              <p>
                                La propriété <code>z-index</code> permet de changer le niveau d'empilement des éléments dans la page.
                                Plus sa valeur est importante plus il se placera devant les autres éléments.
                                Cette propriété fonctionne uniquement sur les éléments qui ont une <code>position</code>.
                              </p>
                              <p>Exemple :</p>
                              <div id="zindex-exemple">
                                <div style="z-index:3;">z-index : 3;</div>
                                <div style="top:-20px;left:100px;z-index:2;">z-index : 2;</div>
                                <div style="top:-40px;left:200px;z-index:1;">z-index : 1;</div>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </article>
                <article class="tab-pane fade" id="etats" role="tabpanel" aria-labelledby="etats-tab">
                  <h3>Les états d'un élément</h3>
                  <table class="table table-striped table-hover">
                        <tbody>
                          <tr>
                             <th>sélecteur</th>
                             <th>description</th>
                          </tr>
                          <tr>
                              <td><code>:hover</code></td>
                              <td>Cible l'élément qui est survolé par le curseur de la souris.</td>
                          </tr>
                          <tr>
                              <td><code>:active</code></td>
                              <td>Cible un élément au moment où il est cliqué.</td>
                          </tr>
                          <tr>
                              <td><code>:link</code></td>
                              <td>Cible un élément de type lien qui n'a pas été visité.</td>
                          </tr>
                          <tr>
                              <td><code>:target</code></td>
                              <td>Cible un élément de type lien qui vient d'être cliqué.</td>
                          </tr>
                          <tr>
                              <td><code>:visited</code></td>
                              <td>Cible un élément de type lien qui a été visité.</td>
                          </tr>
                          <tr>
                              <td><code>:focus</code></td>
                              <td>Cible l'élément de type <code>input</code> dans lequel le curseur de la souris est placé.</td>
                          </tr>
                          <tr>
                              <td><code>:checked</code></td>
                              <td>Cible l'élément de type <code>input</code> qui est checké ou sélectionné.</td>
                          </tr>
                      </tbody>
                  </table>
                </article>
                <article class="tab-pane fade" id="fonds" role="tabpanel" aria-labelledby="fonds-tab">
                  <h3>Le fond d'un élément</h3>
                  <hr>
                  <div class="row" id="fond-exemple">
                    <div class="col-md-8">
                      <div class="demoContent" >
                        <div id="background-content"></div>
                      </div>
                    </div>
                    <div class="col-md-4 ">
                      <div class="demoBtn">
                        <code>background-repeat</code><br>
                        <button id="repeat" class="active">repeat</button>
                        <button id="repeatx">repeat-x</button>
                        <button id="repeaty">repeat-y</button>
                        <button id="norepeat">no-repeat</button>
                      </div>
                      <div class="demoBtn">
                        <code>background-position</code><br>
                        <button id="lefttop" class="active">left top</button>
                        <button id="center">center</button>
                        <button id="rightbottom">right bottom</button>
                      </div>
                      <div class="demoBtn">
                        <code>background-size</code><br>
                        <button id="auto" class="active">auto</button>
                        <button id="contain">contain</button>
                        <button id="cover">cover</button>
                      </div>
                    </div>
                  </div>
                  <hr>
                  <h4>Les propriétés liés au fond</h4>
                  <table class="table table-striped table-hover">
                        <tbody>
                          <tr>
                             <th>propriété</th>
                             <th>description</th>
                          </tr>
                          <tr>
                              <td><code>background</code></td>
                              <td>Regroupe les propriétés de fond d'un élément <br>(dans l'ordre : color image repeat attachement position;).</td>
                          </tr>
                          <tr>
                              <td><code>background-color</code></td>
                              <td>Change la couleur d'un fond.</td>
                          </tr>
                          <tr>
                              <td><code>background-image</code></td>
                              <td>Permet d'afficher une image en fond.</td>
                          </tr>
                          <tr>
                              <td><code>background-repeat</code></td>
                              <td>Gère la répétition d'une image placée en fond.</td>
                          </tr>
                          <tr>
                              <td><code>background-attachement</code></td>
                              <td>Gère le défilement de l'image placée en fond.</td>
                          </tr>
                          <tr>
                              <td><code>background-position</code></td>
                              <td>Gère la position de l'image placée en fond.</td>
                          </tr>
                          <tr>
                              <td><code>background-size</code></td>
                              <td>Gère le comportement lié à la taille de l'image placée en fond.</td>
                          </tr>
                      </tbody>
                  </table>
                  <hr>
                  <div class="row">
                    <p class="col-md-6">Il est possible d'afficher plusieurs images de fond et de leur donner des propriétés différentes. Par exemple :</p>
                    <div class="col-md-6 bg-dark">
                      <code>
                        background-image: url(image1.png) url(image2.png);<br>
                        background-size: contain, cover;<br>
                        background-repeat:no-repeat;
                      </code>
                    </div>
                  </div>
                </article>
                <article class="tab-pane fade" id="textes-css" role="tabpanel" aria-labelledby="textes-css-tab">
                  <div class="accordion accordion-flush" id="textes-liste">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="selecteurs-textes-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#selecteurs-textes-contenu" aria-expanded="false" aria-controls="selecteurs-textes-contenu">
                                <h4>Sélecteurs liés aux textes</h4>
                          </button>
                        </h2>
                        <div id="selecteurs-textes-contenu" class="accordion-collapse collapse" aria-labelledby="selecteurs-textes-titre" data-bs-parent="#textes-liste">
                          <div class="accordion-body">
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>sélecteur</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>:first-letter</code></td>
                                        <td>Cible la première lettre.</td>
                                    </tr>
                                    <tr>
                                        <td><code>:first-line</code></td>
                                        <td>Cible la première ligne.</td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="propr-textes-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#propr-textes-contenu" aria-expanded="false" aria-controls="forof-contenu">
                              <h4>Propriétés liées aux textes</h4>
                          </button>
                        </h2>
                        <div id="propr-textes-contenu" class="accordion-collapse collapse" aria-labelledby="propr-textes-titre" data-bs-parent="#textes-liste">
                          <div class="accordion-body">
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>color</code></td>
                                        <td>Définit la couleur du texte</td>
                                    </tr>
                                    <tr>
                                        <td><code>font-size</code></td>
                                        <td>Donne la taille au texte</td>
                                    </tr>
                                    <tr>
                                        <td><code>font-family</code></td>
                                        <td>Change la typographie</td>
                                    </tr>
                                    <tr>
                                        <td><code>text-align</code></td>
                                        <td>Modifie l'alignement du texte</td>
                                    </tr>
                                    <tr>
                                        <td><code>text-decoration</code></td>
                                        <td>Définit la décoration du texte.</td>
                                    </tr>
                                    <tr>
                                        <td><code>text-decoration-color</code></td>
                                        <td>Change la couleur de la décoration du texte.</td>
                                    </tr>
                                    <tr>
                                        <td><code>text-transform</code></td>
                                        <td>Définit la casse du texte</td>
                                    </tr>
                                    <tr>
                                        <td><code>font-style</code></td>
                                        <td>Change l'inclinaison du texte.</td>
                                    </tr>
                                    <tr>
                                        <td><code>font-weight</code></td>
                                        <td>Modifie la graisse du texte</td>
                                    </tr>
                                    <tr>
                                        <td><code>line-heiht</code></td>
                                        <td>Définie l'interlignage</td>
                                    </tr>
                                    <tr>
                                        <td><code>text-indent</code></td>
                                        <td>Change l'indentation</td>
                                    </tr>
                                    <tr>
                                        <td><code>text-overflow</code></td>
                                        <td>Précise l'affichage du texte lorsque celui-ci déborde de son conteneur.</td>
                                    </tr>
                                    <tr>
                                        <td><code>text-shadow</code></td>
                                        <td>Donne une ombre au texte.</td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="typo-textes-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#typo-textes-contenu" aria-expanded="false" aria-controls="typo-textes-contenu">
                              <h4>Charger une typographie</h4>
                          </button>
                        </h2>
                        <div id="typo-textes-contenu" class="accordion-collapse collapse" aria-labelledby="typo-textes-titre" data-bs-parent="#textes-liste">
                          <div class="accordion-body">
                            <div class="bg-dark">
                              <code>
                                @<span class="var">font-face</span> {<br>
                                  font-family: <span class="valeur">"myFont"</span>;<br>
                                  src: <span class="function">url</span>(myFont.ttf);<br>
                                }
                              </code>
                            </div>
                            <p>Il suffira ensuite de mettre le même nom sur la propriété <code>font-family</code> pour appeler la typographie sur votre élément. Par exemple :</p>
                            <div class="bg-dark">
                              <code>
                                <span class="balise">body</span> {font-family: <span class="valeur">"myFont"</span>;}
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </article>
                <article class="tab-pane fade" id="couleurs" role="tabpanel" aria-labelledby="couleurs-tab">
                  <h3>Les couleurs</h3>


                  <div class="row">
                    <div class="col-md-3">
                      <input type="text" id="palette-couleur" value="black">
                    </div>
                    <div class="col-md-9">
                      <div>Valeur Hexadécimale : <span id="hexvaleur">#000</span></div>
                      <div>Valeur RGB : <span id="rgbvaleur">rgb(0, 0, 0)</span></div>
                    </div>
                  </div>
                  <script>
                  var hexvaleur=document.getElementById("hexvaleur");
                  var rgbvaleur=document.getElementById("rgbvaleur");

                $("#palette-couleur").spectrum({
                  move: function(color) {;
                    hexvaleur.innerHTML=color.toHexString();
                    rgbvaleur.innerHTML=color.toRgbString();
                 },
                 change: function(color) {;
                   hexvaleur.innerHTML=color.toHexString();
                   rgbvaleur.innerHTML=color.toRgbString();
                },
                hide: function(color) {;
                  hexvaleur.innerHTML=color.toHexString();
                  rgbvaleur.innerHTML=color.toRgbString();
               },
                  preferredFormat: "rgb",
                  showInput: false,
                  showPalette: false,
                  chooseText: 'Sélectionner',
                  palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
                });
                  </script>

                  <div class="accordion accordion-flush" id="css-couleurs">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="couleur-liste-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#couleur-liste-contenu" aria-expanded="false" aria-controls="couleur-liste-contenu">
                            <h4>Liste des couleurs</h4>
                          </button>
                        </h2>
                        <div id="couleur-liste-contenu" class="accordion-collapse collapse" aria-labelledby="couleur-liste-titre" data-bs-parent="#css-couleurs">
                          <div class="accordion-body">
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>couleur</th>
                                       <th>nom</th>
                                    </tr>
                                    <tr>
                                        <td style="background:white"></td>
                                        <td>white</td>
                                    </tr>
                                    <tr>
                                        <td style="background:lightgray"></td>
                                        <td>lightgray</td>
                                    </tr>
                                    <tr>
                                        <td style="background:silver"></td>
                                        <td>silver</td>
                                    </tr>
                                    <tr>
                                        <td style="background:darkgray"></td>
                                        <td>darkgray</td>
                                    </tr>
                                    <tr>
                                        <td style="background:gray"></td>
                                        <td>gray</td>
                                    </tr>
                                    <tr>
                                        <td style="background:black"></td>
                                        <td>black</td>
                                    </tr>
                                    <tr>
                                        <td style="background:lightcoral"></td>
                                        <td>lightcoral</td>
                                    </tr>
                                    <tr>
                                        <td style="background:coral"></td>
                                        <td>coral</td>
                                    </tr>
                                    <tr>
                                        <td style="background:salmon"></td>
                                        <td>salmon</td>
                                    </tr>
                                    <tr>
                                        <td style="background:crimson"></td>
                                        <td>crimson</td>
                                    </tr>
                                    <tr>
                                        <td style="background:orangered"></td>
                                        <td>orangered</td>
                                    </tr>
                                    <tr>
                                        <td style="background:tomato"></td>
                                        <td>tomato</td>
                                    </tr>
                                    <tr>
                                        <td style="background:red"></td>
                                        <td>red</td>
                                    </tr>
                                    <tr>
                                        <td style="background:firebrick"></td>
                                        <td>firebrick</td>
                                    </tr>
                                    <tr>
                                        <td style="background:indianred"></td>
                                        <td>indianred</td>
                                    </tr>
                                    <tr>
                                        <td style="background:darkred"></td>
                                        <td>darkred</td>
                                    </tr>
                                    <tr>
                                        <td style="background:brown"></td>
                                        <td>brown</td>
                                    </tr>
                                    <tr>
                                        <td style="background:saddlebrown"></td>
                                        <td>saddlebrown</td>
                                    </tr>
                                    <tr>
                                        <td style="background:sienna"></td>
                                        <td>sienna</td>
                                    </tr>
                                    <tr>
                                        <td style="background:maroon"></td>
                                        <td>maroon</td>
                                    </tr>
                                    <tr>
                                        <td style="background:orange"></td>
                                        <td>orange</td>
                                    </tr>
                                    <tr>
                                        <td style="background:darkorange"></td>
                                        <td>darkorange</td>
                                    </tr>
                                    <tr>
                                        <td style="background:peru"></td>
                                        <td>peru</td>
                                    </tr>
                                    <tr>
                                        <td style="background:sandybrown"></td>
                                        <td>sandybrown</td>
                                    </tr>
                                    <tr>
                                        <td style="background:darkgoldenrod"></td>
                                        <td>darkgoldenrod</td>
                                    </tr>
                                    <tr>
                                        <td style="background:goldenrod"></td>
                                        <td>goldenrod</td>
                                    </tr>
                                    <tr>
                                        <td style="background:gold"></td>
                                        <td>gold</td>
                                    </tr>
                                    <tr>
                                        <td style="background:palegoldenrod"></td>
                                        <td>palegoldenrod</td>
                                    </tr>
                                    <tr>
                                        <td style="background:yellow"></td>
                                        <td>yellow</td>
                                    </tr>
                                    <tr>
                                        <td style="background:yellowgreen"></td>
                                        <td>yellowgreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:lime"></td>
                                        <td>lime</td>
                                    </tr>
                                    <tr>
                                        <td style="background:green"></td>
                                        <td>green</td>
                                    </tr>
                                    <tr>
                                        <td style="background:teal"></td>
                                        <td>teal</td>
                                    </tr>
                                    <tr>
                                        <td style="background:olive"></td>
                                        <td>olive</td>
                                    </tr>
                                    <tr>
                                        <td style="background:olivedrab"></td>
                                        <td>olivedrab</td>
                                    </tr>
                                    <tr>
                                        <td style="background:palegreen"></td>
                                        <td>palegreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:seagreen"></td>
                                        <td>seagreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:springgreen"></td>
                                        <td>springgreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:mediumspringgreen"></td>
                                        <td>mediumspringgreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:mediumseagreen"></td>
                                        <td>mediumseagreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:lightseagreen"></td>
                                        <td>lightseagreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:lightgreen"></td>
                                        <td>lightgreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:limegreen"></td>
                                        <td>limegreen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:aliceblue"></td>
                                        <td>aliceblue</td>
                                    </tr>
                                    <tr>
                                        <td style="background:paleturquoise"></td>
                                        <td>paleturquoise</td>
                                    </tr>
                                    <tr>
                                        <td style="background:turquoise"></td>
                                        <td>turquoise</td>
                                    </tr>
                                    <tr>
                                        <td style="background:aqua"></td>
                                        <td>aqua</td>
                                    </tr>
                                    <tr>
                                        <td style="background:lightcyan"></td>
                                        <td>lightcyan</td>
                                    </tr>
                                    <tr>
                                        <td style="background:cyan"></td>
                                        <td>cyan</td>
                                    </tr>
                                    <tr>
                                        <td style="background:mediumblue"></td>
                                        <td>mediumblue</td>
                                    </tr>
                                    <tr>
                                        <td style="background:slateblue"></td>
                                        <td>slateblue</td>
                                    </tr>
                                    <tr>
                                        <td style="background:mediumslateblue"></td>
                                        <td>mediumslateblue</td>
                                    </tr>
                                    <tr>
                                        <td style="background:midnightblue"></td>
                                        <td>midnightblue</td>
                                    </tr>
                                    <tr>
                                        <td style="background:blue"></td>
                                        <td>blue</td>
                                    </tr>
                                    <tr>
                                        <td style="background:navy"></td>
                                        <td>navy</td>
                                    </tr>
                                    <tr>
                                        <td style="background:royalblue"></td>
                                        <td>royalblue</td>
                                    </tr>
                                    <tr>
                                        <td style="background:skyblue"></td>
                                        <td>skyblue</td>
                                    </tr>
                                    <tr>
                                        <td style="background:indigo"></td>
                                        <td>indigo</td>
                                    </tr>
                                    <tr>
                                        <td style="background:pink"></td>
                                        <td>pink</td>
                                    </tr>
                                    <tr>
                                        <td style="background:fuchsia"></td>
                                        <td>fuchsia</td>
                                    </tr>
                                    <tr>
                                        <td style="background:mediumorchid"></td>
                                        <td>mediumorchid</td>
                                    </tr>
                                    <tr>
                                        <td style="background:orchid"></td>
                                        <td>orchid</td>
                                    </tr>
                                    <tr>
                                        <td style="background:mediumpurple"></td>
                                        <td>mediumpurpule</td>
                                    </tr>
                                    <tr>
                                        <td style="background:purple"></td>
                                        <td>purple</td>
                                    </tr>
                                    <tr>
                                        <td style="background:violet"></td>
                                        <td>violet</td>
                                    </tr>
                                    <tr>
                                        <td style="background:mediumvioletred"></td>
                                        <td>mediumvioletred</td>
                                    </tr>
                                    <tr>
                                        <td style="background:palevioletred"></td>
                                        <td>palevioletred</td>
                                    </tr>
                                    <tr>
                                        <td style="background:plum"></td>
                                        <td>plum</td>
                                    </tr>
                                    <tr>
                                        <td style="background:wheat"></td>
                                        <td>wheat</td>
                                    </tr>
                                    <tr>
                                        <td style="background:tan"></td>
                                        <td>tan</td>
                                    </tr>
                                    <tr>
                                        <td style="background:seashell"></td>
                                        <td>seashell</td>
                                    </tr>
                                    <tr>
                                        <td style="background:peachpuff"></td>
                                        <td>peachpuff</td>
                                    </tr>
                                    <tr>
                                        <td style="background:papayawhip"></td>
                                        <td>papayawhip</td>
                                    </tr>
                                    <tr>
                                        <td style="background:moccasin"></td>
                                        <td>moccasin</td>
                                    </tr>
                                    <tr>
                                        <td style="background:mistyrose"></td>
                                        <td>mistyrose</td>
                                    </tr>
                                    <tr>
                                        <td style="background:oldlace"></td>
                                        <td>oldlace</td>
                                    </tr>
                                    <tr>
                                        <td style="background:linen"></td>
                                        <td>linen</td>
                                    </tr>
                                    <tr>
                                        <td style="background:lightyellow"></td>
                                        <td>lightyellow</td>
                                    </tr>
                                  </tbody>
                              </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="zindex-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#zindex-contenu" aria-expanded="false" aria-controls="zindex-contenu">
                            <h4>Propriétés liées aux couleurs</h4>
                          </button>
                        </h2>
                        <div id="zindex-contenu" class="accordion-collapse collapse" aria-labelledby="zindex-titre" data-bs-parent="#positions-liste">
                          <div class="accordion-body">
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>color</code></td>
                                        <td>Définit la couleur du texte.</td>
                                    </tr>
                                    <tr>
                                        <td><code>text-decoration-color</code></td>
                                        <td>Change la couleur de la décoration du texte.</td>
                                    </tr>
                                    <tr>
                                        <td><code>background-color</code></td>
                                        <td>Définit la couleur du fond.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-color</code></td>
                                        <td>Change la couleur de la bordure.</td>
                                    </tr>
                                    <tr>
                                        <td><code>outline-color</code></td>
                                        <td>Change la couleur du contour.</td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                  </div>
                </article>
      <!-- CSS avancé -->
                <article class="tab-pane fade" id="liste-css" role="tabpanel" aria-labelledby="liste-css-tab">
                  <h3>Liste des propriétés CSS</h3>
                  <div class="accordion accordion-flush" id="css-liste">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="listes-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#listes-contenu" aria-expanded="false" aria-controls="listes-contenu">
                            <h4>Propriétés liées aux listes</h4>
                          </button>
                        </h2>
                        <div id="listes-contenu" class="accordion-collapse collapse" aria-labelledby="listes-titre" data-bs-parent="#css-liste">
                          <div class="accordion-body">
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>list-style</code></td>
                                        <td>Regroupe les propriétés de type et de position de la puce.</td>
                                    </tr>
                                    <tr>
                                        <td><code>list-style-type</code></td>
                                        <td>Change le type de puce.</td>
                                    </tr>
                                    <tr>
                                        <td><code>list-style-image</code></td>
                                        <td>Définit une image en tant que puce de la liste.</td>
                                    </tr>
                                    <tr>
                                        <td><code>list-style-position</code></td>
                                        <td>Permet de modifier la position de la puce.</td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="tableaux-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tableaux-contenu" aria-expanded="false" aria-controls="tableaux-contenu">
                            <h4>Propriétés liées aux tableaux</h4>
                          </button>
                        </h2>
                        <div id="tableaux-contenu" class="accordion-collapse collapse" aria-labelledby="tableaux-titre" data-bs-parent="#css-liste">
                          <div class="accordion-body">
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>caption-side</code></td>
                                        <td>Change la position du titre d'un tableau.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-collapse</code></td>
                                        <td>Permet de fusionner les bords des cellules.</td>
                                    </tr>
                                    <tr>
                                        <td><code>border-spacing</code></td>
                                        <td>Définit l'espacement entre les bords des cellules.</td>
                                    </tr>
                                    <tr>
                                        <td><code>table-layout</code></td>
                                        <td>Change la disposition des colonnes et des lignes d'un tableau.</td>
                                    </tr>
                                    <tr>
                                        <td><code>empty-cells</code></td>
                                        <td>Définit l'affichage des cellules vides d'un tableau.</td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="affichage-titre">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#affichage-contenu" aria-expanded="false" aria-controls="affichage-contenu">
                            <h4>Propriétés liées à l'affichage</h4>
                          </button>
                        </h2>
                        <div id="affichage-contenu" class="accordion-collapse collapse" aria-labelledby="affichage-titre" data-bs-parent="#css-liste">
                          <div class="accordion-body">
                            <table class="table table-striped table-hover">
                                  <tbody>
                                    <tr>
                                       <th>propriété</th>
                                       <th>description</th>
                                    </tr>
                                    <tr>
                                        <td><code>visibility</code></td>
                                        <td>Change la visibilité de l'élément.</td>
                                    </tr>
                                    <tr>
                                        <td><code>opacity</code></td>
                                        <td>Permet de régler l'opacité de l'élément.</td>
                                    </tr>
                                    <tr>
                                        <td><code>overflow</code></td>
                                        <td>Permet la gestion d'un contenu qui déborde.</td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                  </div>
                </article>
                <article class="tab-pane fade" id="transitions" role="tabpanel" aria-labelledby="transitions-tab">
                  <h3>Les transitions</h3>
                  <table class="table table-striped table-hover">
                        <tbody>
                          <tr>
                             <th>propriété</th>
                             <th>description</th>
                          </tr>
                          <tr>
                              <td><code>transition-property</code></td>
                              <td>Précise la propriété sur laquel la transition est appliquée.</td>
                          </tr>
                          <tr>
                              <td><code>transition-duration</code></td>
                              <td>Détermine la durée de la transition.</td>
                          </tr>
                          <tr>
                              <td><code>transition-delay</code></td>
                              <td>Ajoute un delay avant le début de la transition.</td>
                          </tr>
                          <tr>
                              <td><code>transition-timing-function</code></td>
                              <td>Précise la courbe d'accélération de la tranistion.</td>
                          </tr>
                          <tr>
                              <td><code>transition</code></td>
                              <td>Regroupe les propriétés précédentes.</td>
                          </tr>
                      </tbody>
                  </table>
                  <h6>Exemple</h6>
                  <div class="row">
                    <div class="col-md-6 bg-dark">
                      <code>
                        #<span class="function">demohover</span> {<br>
                      &nbsp;&nbsp;  <span class="commentaire">/* comportement de la transition */</span><br>
                      &nbsp;&nbsp;  transition-property: all;<br>
                      &nbsp;&nbsp;  transition-duration: <span class="attribut">2</span>;<br>
                      &nbsp;&nbsp;  <span class="commentaire">/* transition: all 2s; */</span><br>
                        }<br>
                        <span class="commentaire">/* Réglage de la transition */</span><br>
                      &nbsp;&nbsp;    #<span class="function">demohover</span>:hover {<br>
                      &nbsp;&nbsp;    background: <span class="attribut">green</span>;<br>
                        }
                      </code>
                    </div>
                    <div class="col-md-6">
                      <button id="demohover">Démo de transition</button>
                    </div>
                  </div>
                </article>
                <article class="tab-pane fade" id="animations" role="tabpanel" aria-labelledby="animations-tab">
                  <h3>Les animations</h3>
                  <table class="table table-striped table-hover">
                  						<thead>
                  							<tr>
                  								<th>Property</th>
                  								<th>Description</th>
                  							</tr>
                  						</thead>
                  						<tbody>
                  							<tr>
                  								<td><code>animation-name</code></td>
                  								<td>Donne un nom à l'animation.</td>
                  							</tr>
                  							<tr>
                  								<td><code>animation-duration</code></td>
                  								<td>Détermine la durée de l'animation.</td>
                  							</tr>
                  							<tr>
                  								<td><code>animation-delay</code></td>
                  								<td>Ajoute un delay avant le début de l'animation.</td>
                  							</tr>
                                <tr>
                                  <td><code>animation-timing-function</code></td>
                                  <td>Précise la courbe d'accélération de l'animation.</td>
                                </tr>
                  							<tr>
                  								<td><code>animation-iteration-count</code></td>
                  								<td>Précise combiens de fois l'animation doit être lancée.</td>
                  							</tr>
                  							<tr>
                  								<td><code>animation-direction</code></td>
                  								<td>Précise le comportement de l'animation entre deux cycles.</td>
                  							</tr>
                  							<tr>
                  								<td><code>animation-fill-mode</code></td>
                  								<td>Précise le comportement des propriétés en début et en fin d'animation.</td>
                  							</tr>
                  							<tr>
                  								<td><code>animation-play-state</code></td>
                  								<td>Permet de mettre en pause l'animation.</td>
                  							</tr>
                  							<tr>
                  								<td><code>@keyframes</code></td>
                  								<td>Permet de regler l'animation en fonction de son nom avec des propriétés.</td>
                  							</tr>
                                <tr>
                  								<td><code>animation</code></td>
                  								<td>Regroupe les propriétés précédentes.</td>
                  							</tr>
                  						</tbody>
                  					</table>
                            <h6>Exemple</h6>
                            <div class="row">
                              <div class="col-md-6 bg-dark">
                                <code>
                                  #<span class="function">demoanim</span> {<br>
                                  &nbsp;&nbsp;    <span class="commentaire">/* comportement de l'animation */</span><br>
                                  &nbsp;&nbsp;    animation-direction: alternate;<br>
                                  &nbsp;&nbsp;    animation-duration: <span class="attribut">2s</span>;<br>
                                  &nbsp;&nbsp;    animation-iteration-count: infinite;<br>
                                  &nbsp;&nbsp;    animation-name: repeatit;<br>
                                  &nbsp;&nbsp;    animation-timing-function: linear;<br>
                                  &nbsp;&nbsp;    <span class="commentaire">/* animation: repeatit 2s linear 0s infinite alternate; */</span><br>
                                  }<br>
                                  <span class="commentaire">/* Réglage de l'animation */</span><br>
                                  @<span class="var">keyframes</span> repeatit {<br>
                                  &nbsp;&nbsp;    from {left: <span class="attribut">0</span>;top:<span class="attribut">0</span>;}<br>
                                  &nbsp;&nbsp;    to {left: <span class="attribut">50%</span>;top:<span class="attribut">50%</span>;}<br>
                                  }
                                </code>
                              </div>
                              <div class="col-md-6">
                                <div id="demoanim"></div>
                              </div>
                            </div>
                </article>
              </section>
    </main>
    <?php include '../assets/structure/footer.php' ;?>
    <script src="../assets/js/doc.js" type="text/javascript"></script>
      <!-- Liaison au script Bootstap -->
      <script src="../assets/bootstrap/js/bootstrap.js" type="text/javascript"></script>
    </body>
  </html>
