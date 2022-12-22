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
              <h2>Les bases JavaScript</h2>
            </li>
            <li>
              <button class="nav-link active" id="variables-tab" data-bs-toggle="pill" data-bs-target="#variables" type="button" role="tab" aria-controls="variables" aria-selected="false">
                Variables et données
              </button>
            </li>
            <li>
              <button class="nav-link" id="array-tab" data-bs-toggle="pill" data-bs-target="#array" type="button" role="tab" aria-controls="array" aria-selected="false">
                Tableaux
              </button>
            </li>
            <li>
              <button class="nav-link" id="json-tab" data-bs-toggle="pill" data-bs-target="#json" type="button" role="tab" aria-controls="json" aria-selected="false">
                Objets
              </button>
            </li>
            <li>
              <button class="nav-link" id="algorithmie-tab" data-bs-toggle="pill" data-bs-target="#algorithmie" type="button" role="tab" aria-controls="algorithmie" aria-selected="false">
                Algorithmie
              </button>
            </li>
            <li>
              <button class="nav-link" id="event-tab" data-bs-toggle="pill" data-bs-target="#event" type="button" role="tab" aria-controls="event" aria-selected="false">
                Écouteurs d'événements
              </button>
            </li>
            <li>
              <button class="nav-link" id="loop-tab" data-bs-toggle="pill" data-bs-target="#loop" type="button" role="tab" aria-controls="loop" aria-selected="false">
                Boucles
              </button>
            </li>
            <li>
              <button class="nav-link" id="conditions-tab" data-bs-toggle="pill" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">
                Conditions
              </button>
            </li>
            <li>
              <button class="nav-link" id="operators-tab" data-bs-toggle="pill" data-bs-target="#operators" type="button" role="tab" aria-controls="operators" aria-selected="false">
                Opérateurs
              </button>
            </li>
            <li>
              <button class="nav-link" id="function-tab" data-bs-toggle="pill" data-bs-target="#function" type="button" role="tab" aria-controls="function" aria-selected="false">
                Fonctions
              </button>
            </li>

            <li>
              <button class="nav-link" id="dom-tab" data-bs-toggle="pill" data-bs-target="#dom" type="button" role="tab" aria-controls="dom" aria-selected="false">
                Manipuler le DOM
              </button>
            </li>
              <li>
                <h2>JavaScript avancé</h2>
              </li>
              <li>
                <button class="nav-link" id="time-tab" data-bs-toggle="pill" data-bs-target="#time" type="button" role="tab" aria-controls="time" aria-selected="false">
                  Le temps
                </button>
              </li>
              <li>
                <button class="nav-link" id="math-tab" data-bs-toggle="pill" data-bs-target="#math" type="button" role="tab" aria-controls="math" aria-selected="false">
                  Math
                </button>
              </li>
              <li>
                <button class="nav-link" id="regex-tab" data-bs-toggle="pill" data-bs-target="#regex" type="button" role="tab" aria-controls="regex" aria-selected="false">
                  Regex
                </button>
              </li>
          </ul>
          </aside>
          <!-- contenu JS -->
          <section class="tab-content" id="v-pills-tabContent">
          <!-- les bases JS -->
            <article class="tab-pane fade show active" id="variables" role="tabpanel" aria-labelledby="variables-tab">
              <h3>Les variables</h3>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>var</code></td>
                    <td>Permet de déclarer une variable globale, sa valeur peut être réaffectées.</td>
                  </tr>
                  <tr>
                    <td><code>let</code></td>
                    <td>Permet de déclarer une variable avec une portée limitée à un bloc.</td>
                  </tr>
                  <tr>
                    <td><code>const</code></td>
                    <td>Permet de déclarer une constante sa valeur doit être initier et ne pourra pas être réaffectées.</td>
                  </tr>
                </tbody>
              </table>
              <h6>Exemple</h6>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> maVariable; <span class="commentaire">//déclaration d'une variables</span><br>
                  maVariable <span class="var">=</span> <span class="attribut">2</span>; <span class="commentaire">// assigner la valeur 2 à maVariable</span><br>
                  <span class="attribut">const</span> <span class="var">=</span> <span class="attribut">2</span>; <span class="commentaire">// la constante avec une valeur 2 ne pourra pas être modifié</span>
                </code>
              </div>
              <h3>Les types de données</h3>
              <p>Les nombres :</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> number <span class="var">=</span> <span class="attribut">2</span>;
                </code>
              </div>
              <p>Les chaines de caractères :</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> texte <span class="var">=</span> <span class="valeur">"Une chaine de caractère"</span>;
                </code>
              </div>
              <p>Les booléens :</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> vrai <span class="var">=</span> <span class="attribut">true</span>,<br>
                  &nbsp;&nbsp;&nbsp; faux <span class="var">=</span> <span class="attribut">false</span> ;
                </code>
              </div>
              <p>Il est possible d'appeler différents types de données. Par exemple :</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> paragraphe <span class="var">=</span> <span class="valeur">"numéro du paragraphe"</span> <span class="var">+</span> numero;
                </code>
              </div>
            </article>
            <article class="tab-pane fade" id="array" role="tabpanel" aria-labelledby="array-tab">
              <h3>Les tableaux</h3>
              <p>Les tableaux permettent de déclarer et stocker plusieurs valeurs sous la forme d'une liste.</p>

              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Methode</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>length</code></td>
                    <td>Donne la longeur des éléments du tableau.</td>
                  </tr>
                  <tr>
                    <td><code>[i]</code></td>
                    <td>Donne le nom de l'élément de l'index i.</td>
                  </tr>
                  <tr>
                    <td><code>indexOf()</code></td>
                    <td>Donne l'index de l'élément dans le tableau.</td>
                  </tr>
                  <tr>
                    <td><code>push</code></td>
                    <td>Ajoute un élément en fin de tableau.</td>
                  </tr>
                  <tr>
                    <td><code>unshift</code></td>
                    <td>Ajoute un élément au début du tableau.</td>
                  </tr>
                  <tr>
                    <td><code>pop()</code></td>
                    <td>Retire le dernier élément du tableau.</td>
                  </tr>
                  <tr>
                    <td><code>shift()</code></td>
                    <td>Retire le premier élément du tableau.</td>
                  </tr>
                  <tr>
                    <td><code>splice(i)</code></td>
                    <td>Permet d'ajouter ou retirer un élément du tableau en fonction de son index.</td>
                  </tr>
                  <tr>
                    <td><code>includes()</code></td>
                    <td>Permet de chercher un élément dans le tableau.</td>
                  </tr>
                </tbody>
              </table>
              <h6>Exemples</h6>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> myArray <span class="var">=</span> <span class="var">new</span> <span class="attribut">Array</span>();<br>
                  <span class="var">var</span> fruits <span class="var">=</span> [<span class="valeur">"Pomme"</span>, <span class="valeur">"Framboise"</span>, <span class="valeur">"Cerise"</span>];
                </code>
              </div>

              <p>Accéder à l'élément d'un tableau</p>
              <div class="bg-dark">
                <code>
                  fruits[<span class="attribut">0</span>]; <span class="commentaire">// Pomme</span><br>
                  <span class="balise">fruits</span>.length; <span class="commentaire">// 3</span><br>
                  fruits[<span class="balise">fruits</span>.<span class="balise">length</span> - <span class="attribut">1</span>]; <span class="commentaire">// Cerise</span><br>
                  <span class="balise">fruits</span>.<span class="function">indexOf</span>(<span class="valeur">"Pomme"</span>); <span class="commentaire">// 0</span>
                </code>
              </div>
              <p>Ajouter un élément à un tableau</p>
              <div class="bg-dark">
                <code>
                  <span class="balise">fruits</span>.<span class="function">push</span>(<span class="valeur">"Kiwi"</span>, <span class="valeur">"Poire"</span> );<br>
                  <span class="balise">fruits</span>.<span class="function">unshift</span>(<span class="valeur">"Banane"</span>, <span class="valeur">"Ananas"</span> );
                </code>
              </div>
              <p>Retirer un élément d'un tableau</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> fruits <span class="var">=</span> [<span class="valeur">"Pomme"</span>, <span class="valeur">"Framboise"</span>, <span class="valeur">"Cerise"</span>];<br>
                  <span class="var">var</span> last <span class="var">=</span> <span class="balise">fruits</span>.<span class="function">pop</span>(); <span class="commentaire">// Cerise</span><br>
                  <span class="var">var</span> first <span class="var">=</span> <span class="balise">fruits</span>.<span class="function">shift</span>(); <span class="commentaire">// Pomme </span><br>
                </code>
              </div>
              <p>Ajouter ou retirer un élément à n'importe quel position</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> fruits <span class="var">=</span> [<span class="valeur">"Pomme"</span>, <span class="valeur">"Framboise"</span>, <span class="valeur">"Cerise"</span>];<br>
                  <span class="balise">fruits</span>.<span class="function">splice</span>(<span class="attribut">0</span>,<span class="attribut">1</span>); <span class="commentaire">// Supprime Pomme</span><br>
                  <span class="balise">fruits</span>.<span class="function">splice</span>(<span class="attribut">1</span>, <span class="attribut">0</span>, <span class="valeur">"Kiwi"</span>, <span class="valeur">"Poire"</span> ); <span class="commentaire">// Kiwi et Poire sont ajoutés après Pomme</span><br>
                  <span class="balise">fruits</span>.<span class="function">splice</span>(<span class="attribut">1</span>, <span class="attribut">1</span>, <span class="valeur">"Banane"</span>, <span class="valeur">"Ananas"</span> ); <span class="commentaire">// Banane et Ananas remplace Framboise</span><br>
                </code>
              </div>
              <p>Chercher dans un tableau</p>
              <div class="bg-dark">
                <code>
                  <span class="balise">fruits</span>.<span class="function">includes</span>(<span class="valeur">"Pomme"</span>); <span class="commentaire">// true</span><br>
                  <span class="balise">fruits</span>.<span class="function">includes</span>(<span class="valeur">"Citron"</span>); <span class="commentaire">// false</span>
                </code>
              </div>
            </article>
            <article class="tab-pane fade" id="json" role="tabpanel" aria-labelledby="json-tab">
              <div class="accordion accordion-flush" id="objects-liste">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="object-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#object-contenu" aria-expanded="false" aria-controls="object-contenu">
                          <h4>Les objets</h4>
                      </button>
                    </h2>
                    <div id="object-contenu" class="accordion-collapse collapse" aria-labelledby="object-titre" data-bs-parent="#objects-liste">
                      <div class="accordion-body">
                        <p>Déclarer un objet :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> monLivre <span class="var">=</span> {<br>
                          &nbsp;&nbsp;    titre: <span class="valeur">"Titre du livre"</span>,<br>
                          &nbsp;&nbsp;    autheur: <span class="valeur">"Nom de l'autheur"</span>,<br>
                          &nbsp;&nbsp;    annee: <span class="attribut">2021</span><br>
                            }
                          </code>
                        </div>
                        <p>Déclarer des tableaux d'objets :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> monLivre <span class="var">=</span> [<br>
                              {<br>
                            &nbsp;&nbsp;    titre: <span class="valeur">"Titre du livre 1"</span>,<br>
                            &nbsp;&nbsp;    autheur: <span class="valeur">"Nom de l'autheur 1"</span>,<br>
                            &nbsp;&nbsp;    annee: <span class="attribut">2021</span><br>
                              },<br>
                              {<br>
                            &nbsp;&nbsp;    titre: <span class="valeur">"Titre du livre 2"</span>,<br>
                            &nbsp;&nbsp;    autheur: <span class="valeur">"Nom de l'autheur 2"</span>,<br>
                            &nbsp;&nbsp;    annee: <span class="attribut">2022</span><br>
                              }<br>
                            ]
                          </code>
                        </div>
                        <p>Déclarer des objets complexes :</p>
                        <div class="bg-dark">
                          <code>
                            {<br>
                            &nbsp;&nbsp;  titre: <span class="valeur">"Titre du livre 2"</span>,<br>
                            &nbsp;&nbsp;  autheur: <span class="valeur">"Nom de l'autheur 2"</span>,<br>
                            &nbsp;&nbsp;  annee: <span class="attribut">2022</span>,<br>
                            &nbsp;&nbsp;  format : {<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;    broche: <span class="attribut">true</span>,<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;    poche: <span class="attribut">true</span>,<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;    kindle: <span class="attribut">false</span> <br>
                            &nbsp;&nbsp;  }<br>
                            }
                          </code>
                        </div>
                        <p>Accéder à une informations :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="balise">monLivre</span>.<span class="balise">annee</span>;
                          </code>
                        </div>
                        <p>Ajouter de nouvelles informations :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="balise">monLivre</span>.<span class="balise">lu</span> <span class="var">=</span> <span class="attribut">true</span> ;
                          </code>
                        </div>
                        <p>Supprimer des informations :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">delete</span> <span class="balise">monLivre</span>.<span class="balise">annee</span>;
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="class-object-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#class-object-contenu" aria-expanded="false" aria-controls="class-object-contenu">
                          <h4>Les classes d'objet</h4>
                      </button>
                    </h2>
                    <div id="class-object-contenu" class="accordion-collapse collapse" aria-labelledby="class-object-titre" data-bs-parent="#objects-liste">
                      <div class="accordion-body">
                        <p>Il est possible de faire des modèles d'objet, que l'on appelle des classes. Par exemple :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">class</span> <span class="attribut">livre</span>{<br>
                            &nbsp;&nbsp;  <span class="function">constructor</span>(titre, autheur, annee){<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;      <span class="balise">this</span>.<span class="balise">titre</span><span class="var"> = </span>titre;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;      <span class="balise">this</span>.<span class="balise">autheur</span><span class="var"> = </span>autheur;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;      <span class="balise">this</span>.<span class="balise">annee</span><span class="var"> = </span>annee;<br>
                            &nbsp;&nbsp;  }<br>
                            }
                          </code>
                        </div>
                        <p>On peut ensuite créer un nouvel objet basé sur le modèle, en utilisant l'ordre donné lors de la construction :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> nouveauLivre <span class="var">=</span> <span class="var">new</span> <span class="attribut">livre</span>(<span class="valeur">"Titre du livre"</span>, <span class="valeur">"Nom de l'autheur"</span>, <span class="attribut">2021</span>);
                          </code>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </article>
            <article class="tab-pane fade" id="algorithmie" role="tabpanel" aria-labelledby="algorithmie-tab">
              <h3>Algorithmie</h3>

              <h4>Liste des opérateurs arithmetic</h4>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Opérateur</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>=</code></td>
                    <td>Assigne une valeur.</td>
                  </tr>
                  <tr>
                    <td><code>+</code></td>
                    <td>Permet d'ajouter une valeur.</td>
                  </tr>
                  <tr>
                    <td><code>-</code></td>
                    <td>Permet de soustraire une valeur.</td>
                  </tr>
                  <tr>
                    <td><code>*</code></td>
                    <td>Permet de multiplier une valeur.</td>
                  </tr>
                  <tr>
                    <td><code>/</code></td>
                    <td>Permet de diviseur une valeur.</td>
                  </tr>
                  <tr>
                    <td><code>%</code></td>
                    <td>Permet de faire un modulo d'une valeur.</td>
                  </tr>
                  <tr>
                    <td><code>+=</code></td>
                    <td>Ajoute et assigne la valeur.</td>
                  </tr>
                  <tr>
                    <td><code>-=</code></td>
                    <td>Soustrait et assigne la valeur.</td>
                  </tr>
                  <tr>
                    <td><code>*=</code></td>
                    <td>Multiplie et assigne la valeur.</td>
                  </tr>
                  <tr>
                    <td><code>/=</code></td>
                    <td>Divise et assigne la valeur.</td>
                  </tr>
                  <tr>
                    <td><code>%=</code></td>
                    <td>Fait le modulo et assigne la valeur.</td>
                  </tr>
                  <tr>
                    <td><code>++</code></td>
                    <td>Permet d'incrémenter de 1.</td>
                  </tr>
                  <tr>
                    <td><code>--</code></td>
                    <td>Permet de décrémenter de 1.</td>
                  </tr>
                </tbody>
              </table>
              <h6>Exemples</h6>
              <p>Opérations simple et modulo</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> x = <span class="attribut">10</span>;<br>
                  <span class="var">var</span> y = <span class="attribut">4</span>;<br>
                  x <span class="var">+</span> y; <span class="commentaire">//  14</span><br>
                  x <span class="var">-</span> y; <span class="commentaire">//  6</span><br>
                  x <span class="var">*</span> y; <span class="commentaire">//  40</span><br>
                  x <span class="var">/</span> y; <span class="commentaire">//  2.5</span><br>
                  x <span class="var">%</span> y; <span class="commentaire">//  2</span><br>
                </code>
              </div>
              <p>Opérations et assignement</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> x = <span class="attribut">10</span>;<br>
                   x <span class="var">+=</span> <span class="attribut">30</span>; <span class="commentaire">// 40</span><br>
                   x <span class="var">-=</span> <span class="attribut">20</span>; <span class="commentaire">// 20</span><br>
                   x <span class="var">*=</span> <span class="attribut">25</span>; <span class="commentaire">// 500</span><br>
                   x <span class="var">/=</span> <span class="attribut">10</span>; <span class="commentaire">// 50</span><br>
                   x <span class="var">%=</span> <span class="attribut">15</span>; <span class="commentaire">// 5</span><br>
                </code>
              </div>
              <p>Avec une chaine de caractère</p>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> str1 <span class="var">=</span> <span class="valeur">"Hello"</span>;<br>
                  <span class="var">var</span> str2 <span class="var">=</span> <span class="valeur">"World!"</span>;<br>
                  <span class="attribut">console</span>.<span class="function">log</span>(str1 + str2); <span class="commentaire">// Outputs: Hello World!</span>
                </code>
              </div>
              <p>Différence d'incrémentation entre <code>++x</code> etc<code>++x</code></p>
              <div class="bg-dark">
                <code>
                  x <span class="var">=</span> 10;<br>
                  <span class="attribut">console</span>.<span class="function">log</span>(++x); <span class="commentaire">// 11</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x);   <span class="commentaire">// 11</span><br>
                  <br>
                  x <span class="var">=</span> 10;<br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x++); <span class="commentaire">// 10</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x);   <span class="commentaire">// 11</span><br>
                </code>
              </div>
          </article>
          <article class="tab-pane fade" id="event" role="tabpanel" aria-labelledby="event-tab">
            <h3>Les écouteurs d'évenements</h3>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Évenement</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>addEventListener()</code></td>
                  <td>Ajoute un écouteur d'évenement.</td>
                </tr>
                <tr>
                  <td><code>removeEventListener()</code></td>
                  <td>Retire un écouteur d'évenement.</td>
                </tr>
                <tr>
                  <td><code>click</code></td>
                  <td>Au clic.</td>
                </tr>
                <tr>
                  <td><code>input</code></td>
                  <td>Tant que l'élément de type <code>input</code> garde le focus.</td>
                </tr>
                <tr>
                  <td><code>change</code></td>
                  <td>Quand l'élement de type <code>input</code> perd le focus.</td>
                </tr>
                <tr>
                  <td><code>mousemove</code></td>
                  <td>Quand la souris est en mouvement.</td>
                </tr>
                <tr>
                  <td><code>mouseover</code></td>
                  <td>Quand la souris est au survol.</td>
                </tr>
                <tr>
                  <td><code>mouseout</code></td>
                  <td>Quand la souris ne survol plus.</td>
                </tr>
                <tr>
                  <td><code>keydown</code></td>
                  <td>Quand une touche du clavier est appuyée.</td>
                </tr>
                <tr>
                  <td><code>scroll</code></td>
                  <td>Détecte le scroll dans la page ou sur un élément.</td>
                </tr>
                <tr>
                  <td><code>transitionstart</code></td>
                  <td>Détecte le début d'une transition.</td>
                </tr>
                <tr>
                  <td><code>transitionend</code></td>
                  <td>Détecte la fin d'une transition.</td>
                </tr>
                <tr>
                  <td><code>animationstart</code></td>
                  <td>Détecte le début d'une animation.</td>
                </tr>
                <tr>
                  <td><code>animationend</code></td>
                  <td>Détecte la fin d'une animation.</td>
                </tr>
                <tr>
                  <td><code>animationend</code></td>
                  <td>Détecte la fin d'une animation.</td>
                </tr>
                <tr>
                  <td><code>drag</code></td>
                  <td>Détecte lorsqu'un élément est glissé.</td>
                </tr>
                <tr>
                  <td><code>drop</code></td>
                  <td>Détecte lorsqu'un élément est déposé dans une zone valide.</td>
                </tr>
                <tr>
                  <td><code>load</code></td>
                  <td>Détecte la fin d'un chargement.</td>
                </tr>
              </tbody>
            </table>
            </article>
            <article class="tab-pane fade" id="loop" role="tabpanel" aria-labelledby="loop-tab">
              <h3>Les boucles</h3>
              <div class="accordion accordion-flush" id="boucle-liste">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="forof-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#forof-contenu" aria-expanded="false" aria-controls="forof-contenu">
                          <h4>for of</h4>
                      </button>
                    </h2>
                    <div id="forof-contenu" class="accordion-collapse collapse" aria-labelledby="forof-titre" data-bs-parent="#boucle-liste">
                      <div class="accordion-body">
                        <p>Cette boucle exécute les intructions pour chaque élément.</p>
                        <p>Exemple avec un tableau :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> fruits <span class="var">=</span> [<span class="valeur">"Pomme"</span>, <span class="valeur">"Framboise"</span>, <span class="valeur">"Cerise"</span>];<br>
                            <br>
                            <span class="var">for</span>(<span class="var">var</span> fruit <span class="var">of</span> fruits) {<br>
                                <span class="attribut">console</span>.<span class="function">log</span>(fruit)<br>
                            }
                          </code>
                        </div>
                        <p>Exemple avec un élément :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> mesElements <span class="var">=</span> <span class="balise">document</span>.<span class="function">querySelectorAll</span>(<span class="valeur">"bouton"</span>);<br>
                            <br>
                            <span class="var">for</span> (<span class="var">var</span> element <span class="var">of</span> elements){<br>
                              <span class="attribut">console</span>.<span class="function">log</span>(element);<br>
                            }
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="forin-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#forin-contenu" aria-expanded="false" aria-controls="forin-contenu">
                          <h4>for in</h4>
                      </button>
                    </h2>
                    <div id="forin-contenu" class="accordion-collapse collapse" aria-labelledby="forin-titre" data-bs-parent="#boucle-liste">
                      <div class="accordion-body">
                        <p>Cette boucle est une variante de la boucle for of. Mais avec cette méthode on va pouvoir indexer, les éléments et les isoler en fonction de leur indice.</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> fruits <span class="var">=</span> [<span class="valeur">"Pomme"</span>, <span class="valeur">"Framboise"</span>, <span class="valeur">"Cerise"</span>];<br>
                            <br>
                            <span class="var">for</span>(<span class="var">var</span> fruit <span class="var">in</span> fruits) {<br>
                                <span class="attribut">console</span>.<span class="function">log</span>(fruit + fruits[fruit]);<br>
                            }
                          </code>
                        </div>
                          <p>Exemple avec un objet :</p>
                          <div class="bg-dark">
                            <code>
                              <span class="var">var</span> person <span class="var">=</span> {<span class="valeur">"titre"</span>: <span class="valeur">"Titre du livre"</span>, <span class="valeur">"autheur"</span>: <span class="valeur">"Nom de l'autheur"</span>, <span class="valeur">"annee"</span>: <span class="valeur">"2021"</span>};<br>
                              <br>
                              <span class="var">for</span> (<span class="var">var</span> info <span class="var">in</span> livre) {<br>
                                  <span class="attribut">console</span>.<span class="function">log</span>(info + livre[info]);<br>
                              }
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="for-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#for-contenu" aria-expanded="false" aria-controls="for-contenu">
                        <h4>for</h4>
                      </button>
                    </h2>
                    <div id="for-contenu" class="accordion-collapse collapse" aria-labelledby="for-titre" data-bs-parent="#boucle-liste">
                      <div class="accordion-body">
                        <p>La boucle for prend trois paramètres :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">for</span> (initialization; condition; increment) {<br>
                                <span class="commentaire">// Code à exectuer</span><br>
                            }
                          </code>
                        </div>
                        <ul>
                          <li>initialisation - est utilisé pour initialiser les variables du compteur, et évalué une fois sans condition avant la première exécution de la boucle.</li>
                          <li>condition - est évaluée au début de chaque boucle, tant que la condition est remplie la boucle continue.</li>
                          <li>increment - met à jour la boucle avec une nouvelle valeur à chaque execution.</li>
                        </ul>
                        <p>
                          L'exemple suivant définit une boucle qui commence avec i=1. La boucle se poursuivra jusqu'à ce que la valeur de la variable i soit inférieure ou égale à 5. La variable i augmente de 1 à chaque fois que la boucle est exécutée :
                        </p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">for</span>(<span class="var">var</span> i<span class="var">=</span>1; i<span class="var"><=</span>5; i<span class="var">++</span>) {<br>
                              <span class="attribut">console</span>.<span class="function">log</span>(i);<br>
                          }
                          </code>
                        </div>
                        <p>Exemple avec un tableau :</p>
                        <div class="bg-dark">
                        <code>
                          <span class="var">var</span> fruits <span class="var">=</span> [<span class="valeur">"Pomme"</span>, <span class="valeur">"Framboise"</span>, <span class="valeur">"Cerise"</span>];<br>
                          <br>
                           for(<span class="var">var</span> i<span class="var">=</span>0; i<span class="var">&lt;</span><span class="balise">fruits</span>.length; i<span class="var">++</span>) {<br>
                               <span class="attribut">console</span>.<span class="function">log</span>(i + fruits[i]);<br>
                           }
                        </code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="foreach-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#foreach-contenu" aria-expanded="false" aria-controls="foreach-contenu">
                        <h4>forEach</h4>
                      </button>
                    </h2>
                    <div id="foreach-contenu" class="accordion-collapse collapse" aria-labelledby="foreach-titre" data-bs-parent="#boucle-liste">
                      <div class="accordion-body">
                        <p>
                        La fonction agit un peu comme un tableau, elle va placer chaque éléments dans une liste.
                        Elle peut ainsi prendre en compte trois paramètres (comme des variables, on peut les nommer selon notre choix), qui sont dans l'ordre :
                        </p>
                        <ul>
                          <li>l'élément individuel,</li>
                          <li>le numéro de l'élément dans la liste (son index),</li>
                          <li>et l'ensemble du tableau créé</li>
                        </ul>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> mesElements <span class="var">=</span> <span class="balise">document</span>.<span class="function">querySelectorAll</span>(<span class="valeur">'p'</span>);<br>
                            <br>
                            <span class="balise">mesElements</span>.<span class="function">forEach</span>(<span class="var">function</span>(element, index, array){<br>
                            <span class="balise">element</span>.<span class="balise">textContent</span> <span class="var">+=</span> <span class="valeur">'(paragraphe n°:'</span> <span class="var">+</span> index <span class="var">+</span> <span class="valeur">')'</span>;<br>
                            });
                          </code>
                        </div>
                        <p>Exemple avec un tableau :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> numbers <span class="var">=</span> [<span class="attribut">1</span>, <span class="attribut">2</span>, <span class="attribut">3</span>, <span class="attribut">4</span>, <span class="attribut">5</span>, <span class="attribut">6</span>];<br>
                            <br>
                               <span class="balise">numbers</span>.<span class="function">forEach</span>(<span class="var">function</span>(value, index, array){<br>
                                   <span class="balise">array</span>[index] <span class="var">=</span> value <span class="var">*</span>  value;<br>
                               });<br>
                               <br>
                               <span class="attribut">console</span>.<span class="function">log</span>(numbers); <span class="commentaire">// écrit : 1, 4, 9, 16, 25, 36</span>
                          </code>
                        </div>
                        <p>Exemple avec un évenement :</p>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> button <span class="var">=</span> <span class="balise">document</span>.<span class="function">querySelectorAll</span>("button");<br>
                          <br>
                            <span class="balise">button</span>.<span class="function">forEach</span>(<span class="var">function</span>(bouton){<br>
                                  <span class="balise">bouton</span>.<span class="function">addEventListener</span>(<span class="valeur">"click"</span>, <span class="var">function</span>(){<br>
                                          <span class="balise">bouton</span>.<span class="balise">style</span>.<span class="balise">backgroundColor</span> <span class="var">=</span> <span class="valeur">"red"</span>;<br>
                                    })<br>
                                    <span class="commentaire">//Seul le bouton qui sera cliqué prendra la couleur rouge.</span><br>
                               });
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="while-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#while-contenu" aria-expanded="false" aria-controls="while-contenu">
                        <h4>while</h4>
                      </button>
                    </h2>
                    <div id="while-contenu" class="accordion-collapse collapse" aria-labelledby="while-titre" data-bs-parent="#boucle-liste">
                      <div class="accordion-body">
                        <p>Cette boucle effectue les instructions tant que la condition spécifiée est vraie, si celle-ci est fausse la boucle ne sera jamais exécuté.</p>
                        <h6>Exemple</h6>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> i <span class="var">=</span> 1;<br>
                            <span class="var">while</span>(i <span class="var"><=</span> 5) {  <br>
                                <span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"&lt;p&gt;Numéro "</span> <span class="var">+</span> i <span class="var">+</span> <span class="valeur">"&lt;/p&gt;"</span>);<br>
                                i<span class="var">++</span>;<br>
                            }
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="whiledo-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#whiledo-contenu" aria-expanded="false" aria-controls="whiledo-contenu">
                        <h4>while do</h4>
                      </button>
                    </h2>
                    <div id="whiledo-contenu" class="accordion-collapse collapse" aria-labelledby="whiledo-titre" data-bs-parent="#boucle-liste">
                      <div class="accordion-body">
                        <p>La boucle while do est une variante de la boucle while, à la différence qu'elle exécute la condition en fin d'instruction, elle sera donc toujours exécutée une fois.</p>
                        <h6>Exemple</h6>
                        <div class="bg-dark">
                        <code>
                          <span class="var">var</span> i <span class="var">=</span> 1;<br>
                          <span class="var">do</span> {<br>
                                <span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"&lt;p&gt;Numéro "</span> <span class="var">+</span> i <span class="var">+</span> <span class="valeur">"&lt;/p&gt;"</span>);<br>
                                i++;<br>
                          }<br>
                          <span class="var">while</span>(i <span class="var"><=</span> 5);
                        </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </article>
            <article class="tab-pane fade" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
             <h3>Les conditions</h3>
             <div class="accordion accordion-flush" id="conditions-liste">
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="if-titre">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#if-contenu" aria-expanded="false" aria-controls="if-contenu">
                       <h4>If</h4>
                     </button>
                   </h2>
                   <div id="if-contenu" class="accordion-collapse collapse" aria-labelledby="if-titre" data-bs-parent="#conditions-liste">
                     <div class="accordion-body">
                       <p>Permet d’exécuter une instruction SI la condition est remplie.</p>
                       <h6>Exemple</h6>
                       <div class="bg-dark">
                         <code>
                           <span class="var">var</span> now <span class="var">=</span> <span class="var">new</span> <span class="attribut">Date</span>(),<br>
                           dayOfWeek <span class="var">=</span> now.getDay();<br>
                            <br>
                            <span class="var">if</span>(dayOfWeek <span class="var">==</span> 5) {<br>
                                <span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur"><span class="valeur">"Bon weekend !"</span></span>);<br>
                            }
                         </code>
                       </div>
                       <h4>If else</h4>
                       <h6>Exemple</h6>
                       <p>Permet d’exécuter une instruction SI la condition est remplie SINON on exécute une autre instruction.</p>
                         <div class="bg-dark">
                           <code>
                              <span class="var">if</span>(dayOfWeek <span class="var">==</span> 5) {<br>
                                  <span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Bon weekend !"</span>);<br>
                              } <span class="var">else</span> {<br>
                                  <span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Bonne journée !"</span>);<br>
                              }
                           </code>
                         </div>
                       <h4>Else if</h4>
                       <p>Permet d'ajouter des conditions supplémentaires dans le cas ou les précédentes ne sont pas remplies.</p>
                       <h6>Exemple</h6>
                       <div class="bg-dark">
                         <code>
                            <span class="var">if</span>(dayOfWeek <span class="var">==</span> 5) {<br>
                                <span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Bon weekend !"</span>);<br>
                            } <span class="var">else if</span>(dayOfWeek <span class="var">==</span> 0) {<br>
                                <span class="attribut">console</span>.<span class="function">log</span>("Have a nice Sunday!");<br>
                            } <span class="var">else</span> {<br>
                                <span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Bonne journée !"</span>);<br>
                            }
                         </code>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="ternaire-titre">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ternaire-contenu" aria-expanded="false" aria-controls="ternaire-contenu">
                       <h4>L'opérateur ternaire</h4>
                     </button>
                   </h2>
                   <div id="ternaire-contenu" class="accordion-collapse collapse" aria-labelledby="ternaire-titre" data-bs-parent="#conditions-liste">
                     <div class="accordion-body">
                       <p>
                         L'opérateur ternaire est une façon abrégée d'écrire les instructions <code>if...else</code>.
                         Il est représenté par le symbole du point d'interrogation <code>?</code>
                         et il prend trois opérandes : une condition à vérifier, un résultat pour <code>true</code>, et un résultat pour <code>false</code>.
                       </p>
                       <h6>Exemple</h6>
                       <div class="bg-dark">
                         <code>
                           <span class="var">var</span> age <span class="var">=</span> 21;<br>
                           <span class="var">var</span> userType <span class="var">=</span> age < 18 ? <span class="valeur">'enfant'</span> : <span class="valeur">'Adulte'</span>;<br>
                           <span class="attribut">console</span>.<span class="function">log</span>(userType); <span class="commentaire">// Adulte</span>
                         </code>
                       </div>
                       <p>Cela revient au même que d'écrire :</p>
                       <div class="bg-dark">
                         <code>
                           <span class="var">var</span> userType;<br>
                          <span class="var">var</span> age <span class="var">=</span> 21;<br>
                          <span class="var">if</span>(age < 18) {<br>
                              userType <span class="var">=</span> <span class="valeur">'enfant'</span>;<br>
                          } <span class="var">else</span> {<br>
                              userType <span class="var">=</span> <span class="valeur">'Adulte'</span>;<br>
                          }<br>
                          <span class="attribut">console</span>.<span class="function">log</span>(userType); <span class="commentaire">// Adulte</span>
                         </code>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="switch-titre">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#switch-contenu" aria-expanded="false" aria-controls="switch-contenu">
                        <h4>Switch</h4>
                     </button>
                   </h2>
                   <div id="switch-contenu" class="accordion-collapse collapse" aria-labelledby="switch-titre" data-bs-parent="#conditions-liste">
                     <div class="accordion-body">
                       <p>Permet de basculer d'un cas à l'autre en fonction d'une valeur.</p>
                       <div class="bg-dark">
                         <code>
                           <span class="var">switch</span>(maValeur){<br>
                            &nbsp;&nbsp;<span class="var">case</span> <span class="valeur">"valeur1"</span>:<br>
                              &nbsp;&nbsp;&nbsp;&nbsp; <span class="commentaire">// Dans le cas ou maValeur est égale à valeur1 on exécute ces instructions.</span><br>
                              &nbsp;&nbsp;&nbsp;&nbsp;   <span class="var">break</span>; <br>
                            &nbsp;&nbsp;  <span class="var">case</span> <span class="valeur">"valeur2"</span>:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;   <span class="commentaire">// Dans le cas ou maValeur est égale à valeur2 on exécute ces instructions.</span><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;   <span class="var">break</span>; <br>
                            &nbsp;&nbsp;<span class="var">default</span>:<br>
                            &nbsp;&nbsp;   <span class="commentaire">/* Si maValeur est différente de tous les cas,<br>
                            &nbsp;&nbsp;   on exécute les instructions placées ici. */</span><br>
                           }
                         </code>
                       </div>
                       <h6>Exemple</h6>
                       <div class="bg-dark">
                         <code>
                           <span class="var">var</span> d <span class="var">=</span> <span class="var">new</span> <span class="attribut">Date</span>();<br>
                	          <br>
                            <span class="var">switch</span>(d.getDay()) {<br>
                            &nbsp;&nbsp;	<span class="var">case</span> 0:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Dimanche"</span>);<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="var">break</span>; <br>
                            &nbsp;&nbsp;	<span class="var">case</span> 1:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Lundi"</span></span>);<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="var">break</span>; <br>
                            &nbsp;&nbsp;	<span class="var">case</span> 2:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Mardi"</span>);<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="var">break</span>; <br>
                            &nbsp;&nbsp;	<span class="var">case</span> 3:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Mercredi"</span>);<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="var">break</span>; <br>
                            &nbsp;&nbsp;	<span class="var">case</span> 4:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Jeudi"</span>);<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="var">break</span>; <br>
                            &nbsp;&nbsp;	<span class="var">case</span> 5:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Vendredi"</span>);<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="var">break</span>; <br>
                            &nbsp;&nbsp;	<span class="var">case</span> 6:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"Samedi"</span>);<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;		<span class="var">break</span>;    <br>
                            }
                         </code>
                       </div>

                     </div>
                   </div>
                 </div>
             </div>
            </article>
            <article class="tab-pane fade" id="operators" role="tabpanel" aria-labelledby="operators-tab">
              <h3>Les opérateurs</h3>
              <h4>Opérateurs comparatifs</h4>

                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Opérateur</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code><</code></td>
                      <td>Inférieur à.</td>
                    </tr>
                    <tr>
                      <td><code><=</code></td>
                      <td>Inférieur ou égal à.</td>
                    </tr>
                    <tr>
                      <td><code>></code></td>
                      <td>Supérieur à.</td>
                    </tr>
                    <tr>
                      <td><code>>=</code></td>
                      <td>Supérieur ou égal à.</td>
                    </tr>
                    <tr>
                      <td><code>==</code></td>
                      <td>Égal à.</td>
                    </tr>
                    <tr>
                      <td><code>===</code></td>
                      <td>identique à.</td>
                    </tr>
                    <tr>
                      <td><code>!=</code></td>
                      <td>Différent de.</td>
                    </tr>
                    <tr>
                      <td><code>!==</code></td>
                      <td>Ne sont pas identique.</td>
                    </tr>
                  </tbody>
                </table>

              <h6>Exemple</h6>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> x <span class="var">=</span> 25;<br>
                  <span class="var">var</span> y <span class="var">=</span> 35;<br>
                  <span class="var">var</span> z <span class="var">=</span> "25";<br>

                  <span class="attribut">console</span>.<span class="function">log</span>(x == z);  <span class="commentaire">// true</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x === z); <span class="commentaire">// false</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x != y);  <span class="commentaire">// true</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x !== z); <span class="commentaire">// true</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x < y);   <span class="commentaire">// true</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x > y);   <span class="commentaire">// false</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x <= y);  <span class="commentaire">// true</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(x >= y);  <span class="commentaire">// false</span>
                </code>
              </div>
              <h4>Opérateurs logiques</h4>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Opérateur</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>&&</code></td>
                    <td>Permet de vérifier si deux conditions sont vraies (signifie « ET »).</td>
                  </tr>
                  <tr>
                    <td><code>||</code></td>
                    <td>Permet de vérifier si au moins une condition est vraie (signifie « OU »).</td>
                  </tr>
                  <tr>
                    <td><code>!</code></td>
                    <td>Permet de vérifier si une condition n'est pas vraie (signifie « NON »).</td>
                  </tr>
                </tbody>
              </table>

              <h6>Exemple</h6>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> year <span class="var">=</span> 2018;<br>

                  <span class="commentaire">// Année bissextiles, divisibles par 400 ou par 4, mais pas par 100.</span><br>
                  <span class="var">if</span>((year <span class="var">%</span> 400 <span class="var">==</span> 0)  <span class="var">||</span>  ((year  <span class="var">%</span> 100  <span class="var">!=</span> 0)  <span class="var">&&</span> (year  <span class="var">%</span> 4 <span class="var">==</span> 0))){<br>
                      <span class="attribut">console</span>.<span class="function">log</span>("Année bissextiles");<br>
                  } <span class="var">else</span> {<br>
                      <span class="attribut">console</span>.<span class="function">log</span>("Année non bissextiles");<br>
                  }
                </code>
              </div>
            </article>
            <article class="tab-pane fade" id="function" role="tabpanel" aria-labelledby="function-tab">
                <h3>Les fonctions</h3>
                <p><b>Les variables créées à l'interieur d'une fonction n'existent pas à l'exterieur de celle-ci.</b></p>
                <p>Déclarer une fonction :</p>
                <div class="bg-dark">
                  <code>
                    <span class="var">function</span> maFonction(){<br>
                      <span class="attribut">console</span>.<span class="function">log</span>(<span class="valeur">"ma fonction se déclenche !"</span>);<br>
                    }
                  </code>
                </div>
                <p>Appeler une fonction :</p>
                <div class="bg-dark">
                  <code>
                    <span class="function">maFonction</span>();
                  </code>
                </div>
                <p>Déclencher une fonction avec un écouteur d'évenement :</p>
                <div class="bg-dark">
                  <code>
                    <span class="balise">declencheFonction</span>.<span class="function">addEventListener</span>(<span class="valeur">'click'</span>, maFonction);
                  </code>
                </div>
            </article>
            <article class="tab-pane fade" id="dom" role="tabpanel" aria-labelledby="dom-tab">
              <h3>Manipulation du DOM</h3>
              <div class="accordion accordion-flush" id="dom-liste">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="dom-selector-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dom-selector-contenu" aria-expanded="false" aria-controls="dom-selector-contenu">
                          <h4>Les sélecteurs </h4>
                      </button>
                    </h2>
                    <div id="dom-selector-contenu" class="accordion-collapse collapse" aria-labelledby="dom-selector-titre" data-bs-parent="#dom-liste">
                      <div class="accordion-body">
                        <table class="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>Variable</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><code>getElementsByTagName</code></td>
                              <td>sélectionne une balise.</td>
                            </tr>
                            <tr>
                              <td><code>getElementById</code></td>
                              <td>sélectionne un identifiant.</td>
                            </tr>
                            <tr>
                              <td><code>getElementsByClassName</code></td>
                              <td>sélectionne une classe.</td>
                            </tr>
                            <tr>
                              <td><code>querySelector</code></td>
                              <td>permet de sélectionner avec un sélecteur CSS.</td>
                            </tr>
                            <tr>
                              <td><code>querySelectorAll</code></td>
                              <td>permet de sélectionner <b>plusieurs</b> éléments avec un sélecteur CSS.</td>
                            </tr>
                            <tr>
                              <td><code>parentElement</code></td>
                              <td>permet de sélectionner le parent d'un élément.</td>
                            </tr>
                            <tr>
                              <td><code>children</code></td>
                              <td>permet de sélectionner les enfants d'un élément.</td>
                            </tr>
                            <tr>
                              <td><code>nextElementSibling</code></td>
                              <td>sélectionne le prochain élément.</td>
                            </tr>
                            <tr>
                              <td><code>previousElementSibling</code></td>
                              <td>sélectionne l'élément précédent.</td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Exemples</h6>
                        <div class="bg-dark">
                          <code>
                            <span class="var">var</span> paragraphe <span class="var">=</span> <span class="balise">document</span>.<span class="function">querySelectorAll</span>(<span class="valeur">'.myClass p'</span>);<br>
                            <span class="balise">paragraphe</span>.<span class="function">querySelectorAll</span>(<span class="valeur">'span'</span>);
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="dom-struct-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dom-struct-contenu" aria-expanded="false" aria-controls="dom-struct-contenu">
                          <h4>Modifier la structure</h4>
                      </button>
                    </h2>
                    <div id="dom-struct-contenu" class="accordion-collapse collapse" aria-labelledby="dom-struct-titre" data-bs-parent="#dom-liste">
                      <div class="accordion-body">
                        <table class="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>Variable</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><code>createElement</code></td>
                              <td>Créé une balise HTML.</td>
                            </tr>
                            <tr>
                              <td><code>appendChild</code></td>
                              <td>Ajoute un élément en tant que dernier enfant.</td>
                            </tr>
                            <tr>
                              <td><code>insertBefore</code></td>
                              <td>Ajoute un élément avant un autre élément.</td>
                            </tr>
                            <tr>
                              <td><code>removeChild</code></td>
                              <td>Supprime un élément enfant.</td>
                            </tr>
                            <tr>
                              <td><code>replaceChild</code></td>
                              <td>Remplace un élément enfant.</td>
                            </tr>
                            <tr>
                              <td><code>createTextNode</code></td>
                              <td>Créé du contenu de type texte.</td>
                            </tr>
                            <tr>
                              <td><code>insertAdjacentHTML</code></td>
                              <td>Ajoute du contenu en HTML avant un élément.</td>
                            </tr>
                            <tr>
                              <td><code>innerHTML</code></td>
                              <td>Ajoute du contenu en HTML à la fin.</td>
                            </tr>
                          </tbody>
                        </table>
                        <!-- <div class="bg-dark">
                          <code>

                          </code>
                        </div> -->
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="dom-atr-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dom-atr-contenu" aria-expanded="false" aria-controls="dom-atr-contenu">
                          <h4>Modifier les attributs</h4>
                      </button>
                    </h2>
                    <div id="dom-atr-contenu" class="accordion-collapse collapse" aria-labelledby="dom-atr-titre" data-bs-parent="#dom-liste">
                      <div class="accordion-body">
                        <table class="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>Variable</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><code>getAttribute</code></td>
                              <td>Récupère la valeur du nom d'un attribut.</td>
                            </tr>
                            <tr>
                              <td><code>setAttribute</code></td>
                              <td>Permet d'ajouter un nom d'attribut et sa valeur.</td>
                            </tr>
                            <tr>
                              <td><code>removeAttribute</code></td>
                              <td>Supprime un attribut.</td>
                            </tr>
                            <tr>
                              <td><code>classList.add</code></td>
                              <td>Ajoute une classe.</td>
                            </tr>
                            <tr>
                              <td><code>classList.remove</code></td>
                              <td>Supprime une classe.</td>
                            </tr>
                            <tr>
                              <td><code>classList.replace</code></td>
                              <td>Remplace une classe.</td>
                            </tr>
                            <tr>
                              <td><code>classList.contains</code></td>
                              <td>Cherche si la classe contient la valeur.</td>
                            </tr>
                          </tbody>
                        </table>
                        <p>Il est possible d'assigner un attribut et sa valeur en passant directement par son nom. Par exemple : </p>
                         <div class="bg-dark">
                          <code>
                            <span class="balise">monImage</span>.<span class="balise">src</span> <span class="var">=</span> <span class="valeur">"img/mon-image.png"</span>;
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </article>

            <article class="tab-pane fade" id="time" role="tabpanel" aria-labelledby="time-tab">
              <table class="table table-striped table-hover">
                <h3>La date</h3>
                <thead>
                  <tr>
                    <th>Méthode</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>getFullYear()</code></code></td>
                    <td>renvoie l'année sur 4 chiffres.</td>
                    </tr>
                    <tr>
                    <td><code>getMonth()</code></code></td>
                    <td>renvoie le mois (0 à 11).</td>
                    </tr>
                    <tr>
                    <td><code>getDate()</code></code></td>
                    <td>renvoie le jour du mois (1 à 31).</td>
                    </tr>
                    <tr>
                    <td><code>getDay()</code></code></td>
                    <td>renvoie le jour de la semaine (0 à 6, la semaine commence le dimanche).</td>
                    </tr>
                    <tr>
                    <td><code>getHours()</code></code></td>
                    <td>renvoie l'heure (0 à 23).</td>
                    </tr>
                    <tr>
                    <td><code>getMinutes()</code></code></td>
                    <td>renvoie les minutes (0 à 59).</td>
                    </tr>
                    <tr>
                    <td><code>getSeconds()</code></code></td>
                    <td>renvoie les secondes (0 à 59).</td>
                    </tr>
                    <tr>
                    <td><code>getMilliseconds()</code></code></td>
                    <td>renvoie les millisecondes (0 à 999).</td>
                    </tr>
                </tbody>
              </table>
              <h6>Exemple</h6>
              <div class="row">
                <div class="bg-dark col-md-6">
                  <code>
                    <span class="var">function</span> <span class="function">timeRunnning</span>(){<br>
                    &nbsp;&nbsp;      <span class="var">var</span> horlogeRunning<span class="var"> =</span> <span class="var">new</span> <span class="attribut">Date</span>();<br>
                    &nbsp;&nbsp;      <span class="balise">heure</span>.<span class="balise">innerHTML</span> <span class="var">=</span> <span class="balise">horlogeRunning</span>.<span class="function">getHours</span>();<br>
                    &nbsp;&nbsp;      <span class="balise">min</span>.<span class="balise">innerHTML</span> <span class="var">=</span> <span class="balise">horlogeRunning</span>.<span class="function">getMinutes</span>();<br>
                    &nbsp;&nbsp;      <span class="balise">sec</span>.<span class="balise">innerHTML</span> <span class="var">=</span> <span class="balise">horlogeRunning</span>.<span class="function">getSeconds</span>();<br>
                    &nbsp;&nbsp;      interval<span class="var"> =</span> <span class="function">setTimeout</span>(timeRunnning, <span class="attribut">1000</span>); <br>
                    }<br>
                    <span class="function">timeRunnning</span>();
                  </code>
                </div>
                <div class="col-md-6" style="font-size:3em;">
                  <span id="heure">
                  </span>
                  <span id="min">
                  </span>
                  <span id="sec">
                  </span>
                </div>
                <p>Il est aussi possible de récupérer la date d'un input de type date :</p>
                <div class="bg-dark">
                  <code>
                    <span class="var">var</span> inputDate <span class="var">=</span> <span class="balise">document</span>.<span class="function">querySelector</span>(<span class="valeur">"input[type='date']"</span>).<span class="balise">value</span>;<br>
                    <span class="var">var</span> maDate <span class="var">= new</span> <span class="attribut">Date</span>(inputDate);
                  </code>
                </div>
              </div>
              <script>

              var heure = document.querySelector("#heure");
              var min = document.querySelector("#min");
              var sec = document.querySelector("#sec");

              function timeRunnning(){
                    var horlogeRunning = new Date();
                    heure.innerHTML = horlogeRunning.getHours()  + " : ";
                    min.innerHTML = horlogeRunning.getMinutes() + " : ";
                    sec.innerHTML = horlogeRunning.getSeconds();
                    interval=setTimeout(timeRunnning, 1000); // La fonction anim() fait appel à elle-même si elle n'a pas terminé son travail
              }
              timeRunnning();

              </script>
            </article>
            <article class="tab-pane fade" id="math" role="tabpanel" aria-labelledby="math-tab">
              <h3>La méthode de calcule</h3>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Méthode</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>floor</code></td>
                    <td>Arrondi à l'entier inférieur le plus proche.</td>
                  </tr>
                  <tr>
                    <td><code>round</code></td>
                    <td>Arrondi à l'entier le plus proche.</td>
                  </tr>
                  <tr>
                    <td><code>floor</code></td>
                    <td>Arrondi à l'entier inférieur le plus proche.</td>
                  </tr>
                  <tr>
                    <td><code>celi</code></td>
                    <td>Arrondi à l'entier supérieur le plus proche.</td>
                  </tr>
                  <tr>
                    <td><code>min</code></td>
                    <td>Retourne la plus petite valeur.</td>
                  </tr>
                  <tr>
                    <td><code>max</code></td>
                    <td>Retourne la plus grande valeur.</td>
                  </tr>
                </tbody>
              </table>
              <h6>Exemples</h6>
              <div class="bg-dark">
                <code>
                  <span class="attribut">console</span>.<span class="function">log</span>(Math.floor(9.99));  <span class="commentaire">// 9</span><br>
                  <br>
                  <span class="attribut">console</span>.<span class="function">log</span>(Math.round(3.5));  <span class="commentaire">// 4</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(Math.round(-5.7));  <span class="commentaire">// -6</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(Math.round(7.25));  <span class="commentaire">// 7</span><br>
                  <br>
                  <span class="attribut">console</span>.<span class="function">log</span>(Math.ceil(9.01));  <span class="commentaire">// 10</span><br>
                  <br>
                  <span class="var">var</span> numbers <span class="var">=</span> [1, 3, 2];<br>
                  <span class="attribut">console</span>.<span class="function">log</span>(Math.max(...numbers)); <span class="commentaire"> // 3</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(Math.min(...numbers));  <span class="commentaire">// 1</span><br>
                </code>
              </div>
            </article>
            <article class="tab-pane fade" id="regex" role="tabpanel" aria-labelledby="regex-tab">
              <h3>Les expressions régulières</h3>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Symbole</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td><code>f</code></td>
                  <td>Matche le caractère <code>f</code> littéralement</td>
                  </tr>
                  <tr>
                  <td><code>[ABC]</code></td>
                  <td>Ce groupe de caractères matche <code>A</code>, <code>B</code>, OU <code>C</code> littéralement</td>
                  </tr>
                  <tr>
                  <td><code>[A-Za-z]</code></td>
                  <td>Matche tout l'alphabet, majuscule comme minuscule</td>
                  </tr>
                  <tr>
                  <td><code>\d</code></td>
                  <td>Equivalent à [0-9]</td>
                  </tr>
                  <tr>
                  <td><code>\s</code></td>
                  <td>Matche l'espace et le retour à la ligne (les <em>whitespace</em> en général)</td>
                  </tr>
                  <tr>
                  <td><code>.</code></td>
                  <td>Matche <em>n'importe quel caractère</em></td>
                  </tr>
                  <tr>
                  <td><code>$</code></td>
                  <td>Echappe le caractère <code>$</code> pour le matcher littéralement</td>
                  </tr>
                  <tr>
                  <td><code>{x, y}</code></td>
                  <td>Répète l'élément précédent entre x et y fois</td>
                  </tr>
                  <tr>
                  <td><code>{x, }</code></td>
                  <td>Répète l'élément précédent au moins x fois (sans limite)</td>
                  </tr>
                  <tr>
                  <td><code>*</code></td>
                  <td>Equivalent à {0, }</td>
                  </tr>
                  <tr>
                  <td><code>+</code></td>
                  <td>Equivalent à {1, }</td>
                  </tr>
                  <tr>
                  <td><code>?</code></td>
                  <td>Equivalent à {0, 1}</td>
                  </tr>
                  <tr>
                  <td><code>^</code></td>
                  <td>Début de ligne</td>
                  </tr>
                  <tr>
                  <td><code>$</code></td>
                  <td>Fin de ligne</td>
                  </tr>
                  <tr>
                  <td><code>(  )</code></td>
                  <td>Groupe capturant</td>
                  </tr>
                  <tr>
                  <td><code>(?:  )</code></td>
                  <td>Groupe non-capturant</td>
                  </tr>
                </tbody>
                </table>

              <h6>Exemple</h6>
              <div class="bg-dark">
                <code>
                  <span class="var">var</span> regex <span class="var">=</span> /@/; <span class="commentaire">// la chaîne de caractère doit contenir le caractère @</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(regex.test("etienne&mail.fr")); <span class="commentaire">// renvoie false</span><br>
                  <span class="attribut">console</span>.<span class="function">log</span>(regex.test("etienne@mail.fr")); <span class="commentaire">// renvoie true</span><br>
                </code>
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
