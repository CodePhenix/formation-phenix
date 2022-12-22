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
      <!-- Navigation -->
        <aside>
          <ul class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <li>
              <h2>Les bases de l'HTML</h2>
            </li>
            <li>
              <button class="nav-link active" id="structure-tab" data-bs-toggle="pill" data-bs-target="#structure" type="button" role="tab" aria-controls="structure" aria-selected="false">
                Structure d'un fichier
              </button>
            </li>
            <li>
              <button class="nav-link" id="titres-tab" data-bs-toggle="pill" data-bs-target="#titres" type="button" role="tab" aria-controls="titres" aria-selected="false">
                Titres
              </button>
            </li>
            <li>
              <button class="nav-link" id="textes-tab" data-bs-toggle="pill" data-bs-target="#textes" type="button" role="tab" aria-controls="textes" aria-selected="false">
                Textes
              </button>
            </li>
            <li>
              <button class="nav-link" id="listes-tab" data-bs-toggle="pill" data-bs-target="#listes" type="button" role="tab" aria-controls="listes" aria-selected="false">
                Listes
              </button>
            </li>
            <li>
              <button class="nav-link" id="tableaux-tab" data-bs-toggle="pill" data-bs-target="#tableaux" type="button" role="tab" aria-controls="tableaux" aria-selected="false">
                Tableaux
              </button>
            </li>
            <li>
              <button class="nav-link" id="sections-tab" data-bs-toggle="pill" data-bs-target="#sections" type="button" role="tab" aria-controls="sections" aria-selected="false">
                Sectionnement
              </button>
            </li>
            <li>
              <button class="nav-link" id="liens-tab" data-bs-toggle="pill" data-bs-target="#liens" type="button" role="tab" aria-controls="liens" aria-selected="false">
                Liens
              </button>
            </li>
            <li>
              <h2>Fonctionnalités HTML</h2>
            </li>
            <li>
              <button class="nav-link" id="images-tab" data-bs-toggle="pill" data-bs-target="#images" type="button" role="tab" aria-controls="images" aria-selected="false">
                Images
              </button>
            </li>
            <li>
              <button class="nav-link" id="formulaires-tab" data-bs-toggle="pill" data-bs-target="#formulaires" type="button" role="tab" aria-controls="formulaires" aria-selected="false">
                Formulaires
              </button>
            </li>
            <li>
              <button class="nav-link" id="audio-video-tab" data-bs-toggle="pill" data-bs-target="#audio-video" type="button" role="tab" aria-controls="audio-video" aria-selected="false">
                Audio et vidéo
              </button>
            </li>
            <li>
              <button class="nav-link" id="caracteres-tab" data-bs-toggle="pill" data-bs-target="#caracteres" type="button" role="tab" aria-controls="caracteres" aria-selected="false">
                <h3>Caractères spéciaux</h3>
              </button>
            </li>
          </ul>
          </aside>
          <!-- contenu HTML -->
          <section class="tab-content" id="v-pills-tabContent">
            <article class="tab-pane fade show active" id="structure" role="tabpanel" aria-labelledby="structure-tab">
              <h3>Structure d'un fichier HTML</h3>
              <div class="bg-dark">
                  <code>
                    &lt;!DOCTYPE html&gt;<br>
                     &lt;<span class="balise">html</span> <span class="attribut">lang</span>=<span class="valeur">"fr"</span>&gt;<br>
                      &nbsp;&nbsp;    &lt;<span class="balise">head</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">meta</span> <span class="attribut">charset</span>=<span class="valeur">"utf-8" </span>/&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">title</span>&gt;Titre&lt;/<span class="balise">title</span>&gt;<br>
                      &nbsp;&nbsp;    &lt;/<span class="balise">head</span>&gt;<br>
                      &nbsp;&nbsp;    &lt;<span class="balise">body</span>&gt;<br>
                              <br>
                      &nbsp;&nbsp;    &lt;/<span class="balise">body</span>&gt;<br>
                      &lt;/<span class="balise">html</span>&gt;
                  </code>
                </div>
                <hr>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Balises</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&lt;doctype&gt;</code></td>
                      <td>Indique qu'il s'agit du langage HTML.</td>
                    </tr>
                    <tr>
                      <td><code>&lt;html&gt;</code></td>
                      <td>Balise qui contient l'ensemble du code de la page.</td>
                    </tr>
                    <tr>
                      <td><code>&lt;head&gt;</code></td>
                      <td>Aussi appelé « en-tête », c'est une balise qui contient des informations sur la page, ces informations ne seront pas affichées dans le navigateur.</td>
                    </tr>
                    <tr>
                      <td><code>&lt;meta&gt;</code></td>
                      <td>La balise meta avec son attribut chartset définit l'encodage de la page, c'est-à-dire qu'il s'assure du bon affichage des caractères spéciaux  (accents, idéogrammes chinois et japonais, caractères arabes, etc.).</td>
                    </tr>
                    <tr>
                      <td><code>&lt;title&gt;</code></td>
                      <td>Indique le titre de la page web. (élément très important, car tout site doit avoir un titre décrivant ce qu'il contient. Il nomme également l'onglet de votre navigateur.</td>
                    </tr>
                    <tr>
                      <td><code>&lt;body &gt;</code></td>
                      <td>La balise body représente le contenu du document que l'on veut voir afficher dans la page web de notre navigateur.</td>
                    </tr>
                  </tbody>
                </table>
            </article>
            <article class="tab-pane fade" id="titres" role="tabpanel" aria-labelledby="titres-tab">
              <h3>Les titres d'une page</h3>
              <p>
                Il existe 6 niveaux de titre d'importances différentes
                <code>&lt;h1&gt;</code>,  <code>&lt;h2&gt;</code>,  <code>&lt;h3&gt;</code>,  <code>&lt;h4&gt;</code>,  <code>&lt;h5&gt;</code> et  <code>&lt;h6&gt;</code>.
              </p>
              <p>Du plus important au moins important, le <code>&lt;h6&gt;</code> est donc le titre le moins important.</p>
              <ul>
                <li><p><code>&lt;h1&gt;</code> Il est le titre de la page, il doit donc être unique.</p></li>
                <li><p><code>&lt;h2&gt;</code> C'est un titre principal, de très haute importance.</p></li>
                <li><p><code>&lt;h3&gt;</code> Il s'agit d'un sous-titre.</p></li>
                <li><p><code>&lt;h4&gt;</code> On peut le définir comme un titre de catégorie à l'intérieur d'un sous-titre.</p></li>
                <li><p><code>&lt;h5&gt;</code> Il peut s'agir d'une sous-catégorie.</p></li>
                <li><p><code>&lt;h6&gt;</code> C'est un titre de très faible importance.</p></li>
              </ul>
            </article>
            <article class="tab-pane fade" id="textes" role="tabpanel" aria-labelledby="textes-tab">
              <h3>Le texte et les paragraphes</h3>
              <p>Le texte s'inscrit la plupart du temps dans une balise de paragraphe <code>&lt;p&gt;</code>.</p>
              <p>Mais il existe aussi d'autres balises plus précises pour mettre en forme ou indiquer de quel type de contenu il s'agit.</p>
              <h4>Mise en forme du texte</h4>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Balises</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>&lt;br&gt;</code></td>
                    <td>Permet de forcer le retour à la ligne tout en restant dans le même paragraphe.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;b&gt;</code></td>
                    <td>Sert à attirer l'attention sur une partie d'un texte sans y ajouter une importance particulière.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;em&gt;</code></td>
                    <td>Met l'accent sur un contenu particulier.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;i&gt;</code></td>
                    <td>Change la manière de lire le texte par rapport au contenu principal, c'est une indication complémentaire.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;mark&gt;</code></td>
                    <td>C'est un marqueur qui sert à faire une mise en évidence pour l'utilisateur.</td>
                  </tr>

                  <tr>
                    <td><code>&lt;sub&gt;</code></td>
                    <td>Utilisé pour mettre du texte en indice.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;sup&gt;</code></td>
                    <td>Utilisé pour mettre un élément en exposant.</td>
                  </tr>
                </tbody>
              </table>
              <h4>Les types de contenu textuel</h4>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Balises</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>&lt;strong&gt;</code></td>
                    <td>Indique qu'il s'agit d'un texte d'une forte importance.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;small&gt;</code></td>
                    <td>Indique un contenu d'une importance secondaire.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;figcaption&gt;</code></td>
                    <td>Légende d'une image de son parent <code>figure</code>.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;adress&gt;</code></td>
                    <td>Présente une information de contact lié à une adresse.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;time&gt;</code></td>
                    <td>Indique qu'il s'agit d'une date ou d'une heure.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;q&gt;</code></td>
                    <td>Indique qu'il s'agit d'une citation de source extérieure.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;cite&gt;</code></td>
                    <td>Représente une référence d'une citation ou d'une source.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;dfn&gt;</code></td>
                    <td>Représente le terme qui est en train d'être défini.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;abbr&gt;</code></td>
                    <td>Indique qu'il s'agit d'un acronyme ou d'une abréviation.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;code&gt;</code></td>
                    <td>Représente un contenu de type code informatique.</td>
                  </tr>
                </tbody>
              </table>
            </article>
            <article class="tab-pane fade" id="listes" role="tabpanel" aria-labelledby="listes-tab">
              <p>Il existe 3 types de listes :</p>
              <h4>Les listes désordonées</h4>
              <div class="row">
                <div class="col-md-6 bg-dark">
                    <code>
                      &lt;<span class="balise">ul</span>&gt;<br>
                  &nbsp;&nbsp;    &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                &nbsp;&nbsp;      &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                &nbsp;&nbsp;      &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                      &lt;/<span class="balise">ul</span>&gt;
                    </code>
                </div>
                <div class="col-md-6">
                  <ul>
                    <li>texte</li>
                    <li>texte</li>
                    <li>texte</li>
                  </ul>
                </div>
              </div>
              <h4>Les listes ordonées</h4>
              <div class="row">
                <div class="col-md-6 bg-dark">
                    <code>
                      &lt;<span class="balise">ol</span>&gt;<br>
                &nbsp;&nbsp;      &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                &nbsp;&nbsp;      &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                &nbsp;&nbsp;      &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                      &lt;/<span class="balise">ol</span>&gt;
                    </code>
                </div>
                <div class="col-md-6">
                  <ol>
                    <li>texte</li>
                    <li>texte</li>
                    <li>texte</li>
                  </ol>
                </div>
              </div>
              <p>
                Il est possible de commencer par un autre numéro en utilisant l'attribut <code>start</code>,
                la valeur de l'attribut correspond au numéro par lequel on souhaite commencer la liste.
               </p>
              <div class="row">
                <div class="col-md-6 bg-dark">
                  <p>
                    <code>
                      &lt;<span class="balise">ol</span> <span class="attribut">start</span>=<span class="valeur">"4"</span>&gt;<br>
                &nbsp;&nbsp;      &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                &nbsp;&nbsp;      &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                &nbsp;&nbsp;      &lt;<span class="balise">li</span>&gt;texte&lt;/<span class="balise">li</span>&gt;<br>
                      &lt;/<span class="balise">ol</span>&gt;
                    </code>
                  </p>
                </div>
                <div class="col-md-6">
                  <ol start="4">
                    <li>texte</li>
                    <li>texte</li>
                    <li>texte</li>
                  </ol>
                </div>
              </div>
              <h4>Les listes descriptives</h4>
              <div class="row">
                <div class="col-md-6 bg-dark">
                    <code>
                      &lt;<span class="balise">dl</span>&gt;<br>
              &nbsp;&nbsp;        &lt;<span class="balise">dt</span>&gt;texte&lt;/<span class="balise">dt</span>&gt;<br>
              &nbsp;&nbsp;        &lt;<span class="balise">dd</span>&gt;texte&lt;/<span class="balise">dd</span>&gt;<br>
              &nbsp;&nbsp;        &lt;<span class="balise">dt</span>&gt;texte&lt;/<span class="balise">dt</span>&gt;<br>
              &nbsp;&nbsp;        &lt;<span class="balise">dd</span>&gt;texte&lt;/<span class="balise">dd</span>&gt;<br>
                      &lt;/<span class="balise">dl</span>&gt;
                  </code>
                </div>
                <div class="col-md-6">
                  <dl>
                    <dt>texte</li>
                    <dd>texte</li>
                    <dt>texte</li>
                    <dd>texte</li>
                  </dl>
                </div>
              </div>
            </article>
            <article class="tab-pane fade" id="tableaux" role="tabpanel" aria-labelledby="tableaux-tab">
              <h3>Les tableaux</h3>
              <p>
                Un tableau s'inscrit dans une balise <code>&lt;table&gt;</code>,
                il se construit par ligne avec la balise <code>&lt;tr&gt;</code>,
                on découpe ensuite ces lignes en colonne avec la balise <code>&lt;td&gt;</code>.
              </p>
              <p>Par exemple :</p>
              <div class="row">
                <div class="col-md-6 bg-dark">
                  <p>
                    <code>
                          &lt;<span class="balise">table</span>&gt;<br>
                  &nbsp;&nbsp;        &lt;<span class="balise">tr</span>&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;        &lt;<span class="balise">td</span>&gt;colonne 1&lt;/<span class="balise">td</span>&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;        &lt;<span class="balise">td</span>&gt;colonne 2&lt;/<span class="balise">td</span>&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;        &lt;<span class="balise">td</span>&gt;colonne 3&lt;/<span class="balise">td</span>&gt;<br>
                  &nbsp;&nbsp;        &lt;/<span class="balise">tr</span>&gt;<br>
                          &lt;/<span class="balise">table</span>&gt;
                    </code>
                  </div>
                  <div class="col-md-6">
                    <table>
                      <tr>
                        <td>colonne 1</td>
                        <td>colonne 2</td>
                        <td>colonne 3</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <h4>Le titre d'un tableau</h4>
                <p>
                pour ajouter un titre à votre tableau il faut utiliser la balise <code>&lt;caption&gt;</code> après la balise <code>&lt;table&gt;</code>.
                </p>
                <div class="row">
                  <div class="col-md-6 bg-dark">
                      <code>
                          &lt;<span class="balise">table</span>&gt;<br>
                  &nbsp;&nbsp;        &lt;<span class="balise">caption</span>&gt;Titre du tableau&lt;/<span class="balise">caption</span>&gt;<br>
                  &nbsp;&nbsp;        &lt;<span class="balise">tr</span>&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;        &lt;<span class="balise">td</span>&gt;colonne 1&lt;/<span class="balise">td</span>&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;        &lt;<span class="balise">td</span>&gt;colonne 2&lt;/<span class="balise">td</span>&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;        &lt;<span class="balise">td</span>&gt;colonne 3&lt;/<span class="balise">td</span>&gt;<br>
                  &nbsp;&nbsp;        &lt;/<span class="balise">tr</span>&gt;<br>
                          &lt;/<span class="balise">table</span>&gt;
                      </code>
                    </div>
                    <div class="col-md-6">
                      <table>
                      <caption>Titre du tableau</caption>
                        <tr>
                          <td>colonne 1</td>
                          <td>colonne 2</td>
                          <td>colonne 3</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                <h4>Segmenter un tableau</h4>
                <p>
                  Pour ajouter une en-tête sur les colonnes avec les balises <code>&lt;thead&gt;</code>,
                  la colonne est alors remplacée par <code>&lt;th&gt;</code>. Sur un tableau l'en-tête peut aussi se mettre sur les lignes en plus des colonnes.
                  Le corp du tableau avec la balise <code>&lt;tbody&gt;</code> et le pied de page <code>&lt;tfoot&gt;</code>.
                </p>
                <div class="row">
                  <div class="col-md-6 bg-dark">
                    <p>
                      <code>
                            &lt;<span class="balise">table</span>&gt;<br>
                      &nbsp;&nbsp;      &lt;<span class="balise">thead</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">tr</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;&lt;/<span class="balise">th</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;header colonne 1&lt;/<span class="balise">th</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;header colonne 2&lt;/<span class="balise">th</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &lt;/<span class="balise">tr</span>&gt;<br>
                      &nbsp;&nbsp;      &lt;/<span class="balise">thead</span>&gt;<br>
                      &nbsp;&nbsp;      &lt;<span class="balise">tbody</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">tr</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;header ligne 1&lt;/<span class="balise">th</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span>&gt;ligne 1/colonne 1&lt;/<span class="balise">td</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span>&gt;ligne 1/colonne 2&lt;/<span class="balise">td</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &lt;/<span class="balise">tr</span>&gt;<br>
                      &nbsp;&nbsp;      &lt;/<span class="balise">tbody</span>&gt;<br>
                      &nbsp;&nbsp;      &lt;<span class="balise">tfoot</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">tr</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;footer ligne 2&lt;/<span class="balise">th</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span>&gt;ligne 2/colonne 1&lt;/<span class="balise">td</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span>&gt;ligne 2/colonne 2&lt;/<span class="balise">td</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &lt;/<span class="balise">tr</span>&gt;<br>
                      &nbsp;&nbsp;      &lt;/<span class="balise">tfoot</span>&gt;<br>
                            &lt;/<span class="balise">table</span>&gt;
                      </code>
                    </div>
                    <div class="col-md-6">
                      <table>
                        <thead>
                          <tr>
                            <th></th>
                            <th>header colonne 1</th>
                            <th>header colonne 2</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>header ligne 1</th>
                            <td>ligne 1/colonne 1</td>
                            <td>ligne 1/colonne 2</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>footer ligne 2</th>
                            <td>ligne 2/colonne 1</td>
                            <td>ligne 2/colonne 2</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <h4>Fusionner les cellules d'un tableau</h4>
                  <p>
                    Pour regrouper des cellules on va utiliser deux attributs <code>rowspan</code> pour fusionner les lignes
                    et <code>colspan</code> pour fusionner les colonnes. La valeur de l'attribut correspond au nombre de cellule qu'elle doit occuper.
                    Il faudra donc déduire cette cellule sur la ligne ou la colonne suivante.
                  </p>
                  <p>Par exemple :</p>
                  <div class="row">
                    <div class="col-md-6 bg-dark">
                        <code>
                              &lt;<span class="balise">table</span>&gt;<br>
                        &nbsp;&nbsp;      &lt;<span class="balise">thead</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">tr</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;&lt;/<span class="balise">th</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;texte&lt;/<span class="balise">th</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;texte&lt;/<span class="balise">th</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;      &lt;/<span class="balise">tr</span>&gt;<br>
                        &nbsp;&nbsp;      &lt;/<span class="balise">thead</span>&gt;<br>
                        &nbsp;&nbsp;      &lt;<span class="balise">tbody</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">tr</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span> <span class="attribut">rowspan</span>=<span class="valeur">"2"</span>&gt;texte&lt;/<span class="balise">th</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span>&gt;texte&lt;/<span class="balise">td</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span>&gt;texte&lt;/<span class="balise">td</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;      &lt;/<span class="balise">tr</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">tr</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span>&gt;texte&lt;/<span class="balise">td</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span>&gt;texte&lt;/<span class="balise">td</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;      &lt;/<span class="balise">tr</span>&gt;<br>
                        &nbsp;&nbsp;      &lt;/<span class="balise">tbody</span>&gt;<br>
                        &nbsp;&nbsp;      &lt;<span class="balise">tfoot</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">tr</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">th</span>&gt;texte&lt;/<span class="balise">th</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">td</span> <span class="attribut">colspan</span>=<span class="valeur">"2"</span>&gt;texte&lt;/<span class="balise">td</span>&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;      &lt;/<span class="balise">tr</span>&gt;<br>
                        &nbsp;&nbsp;      &lt;/<span class="balise">tfoot</span>&gt;<br>
                              &lt;/<span class="balise">table</span>&gt;
                        </code>
                      </div>
                      <div class="col-md-6">
                        <table>
                          <thead>
                            <tr>
                              <th></th>
                              <th>texte</th>
                              <th>texte</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th rowspan="2">lignes fusionnées</th>
                              <td>texte</td>
                              <td>texte</td>
                            </tr>
                            <tr>
                              <td>texte</td>
                              <td>texte</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>texte</th>
                              <td colspan="2">colonnes fusionnées</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
            </article>
            <article class="tab-pane fade" id="sections" role="tabpanel" aria-labelledby="sections-tab">
              <h3>Sectionnement d'une page</h3>
              <p>On découpe une page en plusieurs parties distinctes :</p>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Balises</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>&lt;header&gt;</code></td>
                    <td>En-tête de la page, sert de présentation et d'introduction.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;nav&gt;</code></td>
                    <td>Navigation entre les différentes rubriques de la page.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;main&gt;</code></td>
                    <td>Contenu principal de la page.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;section&gt;</code></td>
                    <td>Définit les différentes sections du contenu d'une page.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;article&gt;</code></td>
                    <td>Élément de contenu complèt et autonome.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;aside&gt;</code></td>
                    <td>Contenu indépendant, relatif au contenu principal.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;figure&gt;</code></td>
                    <td>Indique que le contenu sera une image.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;footer&gt;</code></td>
                    <td>Le pied de page, contient des informations complémentaires au reste de la page.</td>
                  </tr>
                  <tr>
                    <td><code>&lt;div&gt;</code></td>
                    <td>Balise générique qui n'a pas de sens particulier, elle sert à structurer à l'intérieur des différentes sections.</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Les balises <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> et <code>&lt;footer&gt;</code>
                sont uniques, il ne peut donc y en avoir qu'une par page HTML.
              </p>
            </article>
            <article class="tab-pane fade" id="liens" role="tabpanel" aria-labelledby="input-tab">
              <h3>Les Liens</h3>
              <p>Un lien peut être sur un mot, une image, etc. Il peut diriger vers une url, une ancre, un document, etc. Il est mis en place avec la balise <code>&lt;a&gt;</code>.</p>
              <p>Un lien a besoin de son attribut <code>href</code> pour lui indiquer sa destination. On lui donne un attribut <code>title</code> pour préciser son intitulé.</p>
              <div class="bg-dark">
                  <code>
                    &lt;<span class="balise">a</span> <span class="attribut">href</span>=<span class="valeur">"#rubrique"</span> <span class="attribut">title</span>=<span class="valeur">"une ancre vers l'id nommée rubrique"</span>&gt; vers la rubrique &lt;/<span class="balise">a</span>&gt;<br>
                    &lt;<span class="balise">a</span> <span class="attribut">href</span>=<span class="valeur">"https://www.wikipedia.net"</span> <span class="attribut">title</span>=<span class="valeur">"un lien vers l'url de la page wikipedia"</span>&gt; wikipédia &lt;/<span class="balise">a</span>&gt;<br>
                    &lt;<span class="balise">a</span> <span class="attribut">href</span>=<span class="valeur">"mon-document.pdf"</span> <span class="attribut">title</span>=<span class="valeur">"un lien vers un document pdf"</span>&gt; voir le document &lt;/<span class="balise">a</span>&gt;
                  </code>
              </div>
            </article>
      <!-- fonctionnalités -->
            <article class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="input-tab">
              <h3>Les images</h3>
              <p>Une image s'affiche grâce à la balise orpheline <code>&lt;img&gt;</code>.</p>
              <p>Elle a besoin de son attribut <code>src</code> pour lui indiquer sa source, qui se compose de son chemin, le nom de l'image et de son extension (jpg, png, gif pour les principaux).</p>
              <p>On lui donne aussi un attribut <code>alt</code> qui est un texte dit alternatif, en cas de non affichage.</p>
              <div class="bg-dark">
                  <code>
                    &lt;<span class="balise">img</span> <span class="attribut">src</span>=<span class="valeur">"chemin/nom.extension"</span> <span class="attribut">alt</span>=<span class="valeur">"description de l'image"</span>&gt;
                  </code>
              </div>
              <p>On peut également indiquer différentes sources à afficher, selon la taille de l'écran :</p>
                <div class="bg-dark">
                    <code>
                      &lt;<span class="balise">picture</span>&gt;<br>
                    &nbsp;&nbsp;  &lt;<span class="balise">source</span> <span class="attribut">media</span>=<span class="valeur">"(min-width: 700px)"</span> <span class="attribut">srcset</span>=<span class="valeur">"img/logo-mobile.png"</span>&gt;<br>
                    &nbsp;&nbsp;  &lt;<span class="balise">source</span> <span class="attribut">media</span>=<span class="valeur">"(max-width: 1200px)"</span> <span class="attribut">srcset</span>=<span class="valeur">"img/logo-tablette.png"</span>&gt;<br>
                    &nbsp;&nbsp;  &lt;<span class="balise">img</span> <span class="attribut">src</span>=<span class="valeur">"img/logo.png"</span> <span class="attribut">alt</span>=<span class="valeur">"logo du site"</span>&gt;<br>
                      &lt;/<span class="balise">picture</span>&gt;
                    </code>
                </div>
                <hr>
                <h4>Balises associées</h4>
                <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Balises</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>&lt;figure&gt;</code></td>
                        <td>Indique que le contenu sera une image.</td>
                      </tr>
                      <tr>
                        <td><code>&lt;figcaption&gt;</code></td>
                        <td>Légende d'une image de son parent <code>figure</code>.</td>
                      </tr>
                    </tbody>
                </table>
            </article>
            <article class="tab-pane fade" id="formulaires" role="tabpanel" aria-labelledby="formulaires-tab">
              <h3>Les formulaires</h3>
              <div class="accordion accordion-flush" id="table-liste">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="table-tag-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#table-tag-contenu" aria-expanded="false" aria-controls="table-tag-contenu">
                          <h4>Les balises liées aux formulaires</h4>
                      </button>
                    </h2>
                    <div id="table-tag-contenu" class="accordion-collapse collapse" aria-labelledby="table-tag-titre" data-bs-parent="#table-liste">
                      <div class="accordion-body">
                        <p>Un formulaire se trouve dans un conteneur dont la balise est <code>&lt;form&gt;</code>. Ils peuvent se composer de plusieurs éléments, dont voici la liste des balises associées :</p>
                          <table class="table table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>Balises</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><code>&lt;form&gt;</code></td>
                                  <td>Indique qu'il s'agit d'un formulaire.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;input&gt;</code></td>
                                  <td>Champs d'un formulaire définit par son attribut <code>type</code>.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;label&gt;</code></td>
                                  <td>Intitulé lié à un champs du formulaire.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;fieldset&gt;</code></td>
                                  <td>Définit la zone d'un formulaire regroupant plusieurs <code>label</code>.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;legend&gt;</code></td>
                                  <td>Légende de son élément parent <code>fieldset</code>.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;button&gt;</code></td>
                                  <td>Bouton permettant de déclencher des actions.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;select&gt;</code></td>
                                  <td>Représente une liste d'option.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;option&gt;</code></td>
                                  <td>Option d'une lise de son parent <code>select</code>.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;optgroup&gt;</code></td>
                                  <td>Groupe d'options d'un <code>label</code> commun.</td>
                                </tr>
                                <tr>
                                  <td><code>&lt;textarea&gt;</code></td>
                                  <td>Champs de texte sur plusieurs lignes.</td>
                                </tr>
                              </tbody>
                          </table>
                          <hr>
                          <p>Exemple de formulaire :</p>
                          <div class="row">
                              <div class="col-md-7 bg-dark">
                                <code>
                                  &lt;<span class="balise">form</span>&gt;<br>
                              &nbsp;&nbsp;      &lt;<span class="balise">input</span>  <span class="attribut">placeholder</span>=<span class="valeur">"Identifiant"</span> <span class="attribut">type</span>=<span class="valeur">"text"</span>&gt;<br>
                              &nbsp;&nbsp;      &lt;<span class="balise">div</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;          &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"ville"</span>&gt;ville:&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;          &lt;<span class="balise">select</span> <span class="attribut">name</span>=<span class="valeur">"ville"</span> <span class="attribut">id</span>=<span class="valeur">"ville"</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              &lt;<span class="balise">option</span> <span class="attribut">value</span>=<span class="valeur">"Paris"</span>&gt;Paris&lt;/<span class="balise">option</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              &lt;<span class="balise">option</span> <span class="attribut">value</span>=<span class="valeur">"Tokyo"</span>&gt;Tokyo&lt;/<span class="balise">option</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              &lt;<span class="balise">option</span> <span class="attribut">value</span>=<span class="valeur">"Londres"</span>&gt;Londres&lt;/<span class="balise">option</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;          &lt;/<span class="balise">select</span>&gt;<br>
                              &nbsp;&nbsp;      &lt;/<span class="balise">div</span>&gt;<br>
                              &nbsp;&nbsp;      &lt;<span class="balise">div</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;          &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"adresse"</span>&gt;adresse:&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;          &lt;<span class="balise">textarea</span> <span class="attribut">placeholder</span>=<span class="valeur">"Commentaire"</span>  <span class="attribut">rows</span>=<span class="valeur">"3"</span> <span class="attribut">cols</span>=<span class="valeur">"30"</span> <span class="attribut">name</span>=<span class="valeur">"adresse"</span> <span class="attribut">id</span>=<span class="valeur">"adresse"</span>&gt;
                              &lt;/<span class="balise">textarea</span>&gt;<br>
                              &nbsp;&nbsp;      &lt;/<span class="balise">div</span>&gt;<br>
                              &nbsp;&nbsp;      &lt;<span class="balise">div</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;        &lt;<span class="balise">button</span> <span class="attribut">type</span>=<span class="valeur">"submit"</span>&gt;Valider&lt;/<span class="balise">button</span>&gt;<br>
                              &nbsp;&nbsp;      &lt;/<span class="balise">div</span>&gt;<br>
                                  &lt;/<span class="balise">form</span>&gt;
                                </code>
                              </div>
                              <div class="col-md-4">
                                <form>
                                  <input  placeholder="Identifiant" type="text" class="w-100">
                                  <div>
                                      <label for="ville">ville:</label>
                                      <select name="ville" id="ville">
                                          <option value="Paris">Paris</option>
                                          <option value="Tokyo">Tokyo</option>
                                          <option value="Londres">Londres</option>
                                      </select>
                                  </div>
                                  <div>
                                      <label for="adresse">adresse:</label>
                                      <textarea placeholder="Commentaire"  rows="3" cols="30" name="adresse" id="adresse"></textarea>
                                  </div>
                                  <div>
                                    <button type="reset">Annuler</button>
                                    <button type="submit">Valider</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="table-input-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#table-input-contenu" aria-expanded="false" aria-controls="table-input-contenu">
                          <h4>Les types d'input</h4>
                      </button>
                    </h2>
                    <div id="table-input-contenu" class="accordion-collapse collapse" aria-labelledby="table-input-titre" data-bs-parent="#table-liste">
                      <div class="accordion-body">
                        <p>Les champs des formulaires sont faits avec les balises <code>&lt;input&gt;</code>. On peut différencier les types de champs grâce à l'attribut <code>type</code>.
                          Voici la liste des différents types :</p>
                          <table class="table table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>Type</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><code>text</code></td>
                                  <td>Indique qu'il s'agit d'un texte, peut être composé de lettre ou de chiffre.</td>
                                </tr>
                                <tr>
                                  <td><code>password</code></td>
                                  <td>Indique qu'il s'agit d'un mot de passe, crypte le texte inscrit.</td>
                                </tr>
                                <tr>
                                  <td><code>email</code></td>
                                  <td>Demande un format d'adresse mail valide.</td>
                                </tr>
                                <tr>
                                  <td><code>url</code></td>
                                  <td>Demande un format d'url valide.</td>
                                </tr>
                                <tr>
                                  <td><code>tel</code></td>
                                  <td>Demande un format de numéro de téléphone valide, selon l'attribut <code>pattern</code>.</td>
                                </tr>
                                <tr>
                                  <td><code>date</code></td>
                                  <td>Ouvre un calendrier et permet de saisir une date, on peut définir une date minimum et maximum.</td>
                                </tr>
                                <tr>
                                  <td><code>time</code></td>
                                  <td>Format de type heure et minute.</td>
                                </tr>
                                <tr>
                                  <td><code>number</code></td>
                                  <td>Indique qu'il s'agit d'un contenu numérique, on peut y définir un minimum, un maximum et un cape.</td>
                                </tr>
                                <tr>
                                  <td><code>range</code></td>
                                  <td>Contenu numérique sous forme de barre sélectionnable.</td>
                                </tr>
                                <tr>
                                  <td><code>radio</code></td>
                                  <td>Case à cocher à réponse unique.</td>
                                </tr>
                                <tr>
                                  <td><code>checkbox</code></td>
                                  <td>Case à cocher à réponses multiples possible.</td>
                                </tr>
                                <tr>
                                  <td><code>file</code></td>
                                  <td>Permet de téléverser un fichier.</td>
                                </tr>
                                <tr>
                                  <td><code>color</code></td>
                                  <td>Permet de sélectionner une couleur.</td>
                                </tr>
                                <tr>
                                  <td><code>reset</code></td>
                                  <td>Remet à zéro les informations du parent <code>form</code>.</td>
                                </tr>
                                <tr>
                                  <td><code>submit</code></td>
                                  <td>Permet de valider les informations du parent <code>form</code>.</td>
                                </tr>
                              </tbody>
                          </table>
                          <hr>
                        <div class="row">
                            <div class="col-md-7 bg-dark">
                              <code>
                                &lt;<span class="balise">form</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">placeholder</span>=<span class="valeur">"Identifiant"</span> <span class="attribut">type</span>=<span class="valeur">"text"</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">placeholder</span>=<span class="valeur">"Mot de passe"</span> <span class="attribut">type</span>=<span class="valeur">"password"</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">placeholder</span>=<span class="valeur">"Adresse mail"</span> <span class="attribut">type</span>=<span class="valeur">"email"</span></span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">placeholder</span>=<span class="valeur">"Site internet"</span> <span class="attribut">type</span>=<span class="valeur">"url"</span></span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"tel"</span> <span class="attribut">placeholder</span>=<span class="valeur">"Numéro de téléphone"</span> <span class="attribut">pattern</span>=<span class="valeur">"[0]{1}[0-9]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"</span> <span class="attribut">required</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"date"</span></span>&gt;Date de naissance :&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"date"</span> <span class="attribut">min</span>=<span class="valeur">"1980-01-02"</span>  <span class="attribut">max</span>=<span class="valeur">"2021-08-28"</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"time"</span></span>&gt;Heure d'arrivée :&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">placeholder</span>=<span class="valeur">"time"</span> <span class="attribut">type</span>=<span class="valeur">"time"</span> </span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"note"</span></span>&gt;Note sur 10 :&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"number"</span> <span class="attribut">name</span>=<span class="valeur">"note"</span> <span class="attribut">min</span>=<span class="valeur">"0"</span> <span class="attribut">max</span>=<span class="valeur">"10"</span> <span class="attribut">step</span>=<span class="valeur">"0.5"</span> <span class="attribut">value</span>=<span class="valeur">"5"</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"niveau"</span></span>&gt;Niveau :&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"range"</span> <span class="attribut">name</span>=<span class="valeur">"niveau"</span> <span class="attribut">min</span>=<span class="valeur">"0"</span> <span class="attribut">max</span>=<span class="valeur">"50"</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">fieldset</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="balise">legend</span>&gt;Genre :&lt;/<span class="balise">legend</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"radio"</span> <span class="attribut">name</span>=<span class="valeur">"genre"</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"male"</span>&gt;Homme&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"radio"</span> <span class="attribut">name</span>=<span class="valeur">"gender"</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"female"</span>&gt;Femme&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;/<span class="balise">fieldset</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">fieldset</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">legend</span>&gt;Hobbies :&lt;/<span class="balise">legend</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"checkbox"</span> <span class="attribut">name</span>=<span class="valeur">"hobbie"</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"sport"</span>&gt;Sport&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"checkbox"</span> <span class="attribut">name</span>=<span class="valeur">"hobbie"</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"lecture"</span>&gt;Lecture&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"checkbox"</span> <span class="attribut">name</span>=<span class="valeur">"hobbie"</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"jardinage"</span>&gt;Jardinage&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;/<span class="balise">fieldset</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">div</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"file-select"</span>&gt;Photo :&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;      &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"file"</span> <span class="attribut">name</span>=<span class="valeur">"upload"</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;/<span class="balise">div</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="balise">label</span> <span class="attribut">for</span>=<span class="valeur">"couleur"</span></span>&gt;Couleur favorite :&lt;/<span class="balise">label</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;  &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"color"</span> <span class="attribut">name</span>=<span class="valeur">"couleur"</span>  <span class="attribut">value</span>=<span class="valeur">"#ff0000"</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;<span class="balise">div</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"reset"</span> <span class="attribut">value</span>=<span class="valeur">"Reset"</span>&gt;<br>
                              &nbsp;&nbsp;&nbsp;&nbsp;    &lt;<span class="balise">input</span> <span class="attribut">type</span>=<span class="valeur">"submit"</span> <span class="attribut">value</span>=<span class="valeur">"Envoyer"</span>&gt;<br>
                              &nbsp;&nbsp;  &lt;/<span class="balise">div</span>&gt;<br>
                                &lt;/<span class="balise">form</span>&gt;<br>
                              </code>
                            </div>
                            <div class="col-md-4">
                              <form>
                                <input  placeholder="Identifiant" type="text" class="w-100">
                                <input  placeholder="Mot de passe" type="password" class="w-100">
                                <input  placeholder="Adresse mail" type="email" class="w-100">
                                <input placeholder="Site internet" type="url" class="w-100">
                                <input type="tel" placeholder="Numéro de téléphone" pattern="[0]{1}[0-9]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" class="w-100"  required>
                                <label for="date" class="w-100">Date de naissance :</label>
                                <input type="date" class="w-100"  min="1980-01-02"  max="2021-08-28">
                                <label for="time" class="w-100">Heure d'arrivée :</label>
                                <input  placeholder="time" type="time" class="w-100">
                                <label for="note" class="w-100">Note sur 10 :</label>
                                <input type="number" name="note" min="0" max="10" step="0.5" value="5">
                                <label for="niveau" class="w-100">Niveau :</label>
                                <input type="range" name="niveau" min="0" max="50">
                                <fieldset>
                                  <legend>Genre :</legend>
                                  <input type="radio" name="gender">
                                  <label for="male">Homme</label>
                                  <input type="radio" name="gender">
                                  <label for="female">Femme</label>
                                </fieldset>
                                <fieldset>
                                    <legend>Hobbies :</legend>
                                    <input type="checkbox" name="hobbie">
                                    <label for="sport">Sport</label>
                                    <input type="checkbox" name="hobbie">
                                    <label for="lecture">Lecture</label>
                                    <input type="checkbox" name="hobbie">
                                    <label for="jardinage">Jardinage</label>
                                </fieldset>
                                <div>
                                    <label for="file-select">Photo :</label>
                                    <input type="file" name="upload">
                                </div>
                                <label for="couleur" class="w-100">Couleur favorite :</label>
                                <input  type="color" name="couleur"  value="#ff0000">
                                <div>
                                  <input type="reset" value="Reset">
                                  <input type="submit" value="Envoyer">
                                </div>
                              </form>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="table-atr-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#table-atr-contenu" aria-expanded="false" aria-controls="table-atr-contenu">
                          <h4>Les attributs liés aux formulaires</h4>
                      </button>
                    </h2>
                    <div id="table-atr-contenu" class="accordion-collapse collapse" aria-labelledby="table-atr-titre" data-bs-parent="#table-liste">
                      <div class="accordion-body">
                        <table class="table table-striped table-hover">
                            <thead>
                              <tr>
                                <th>Attribut</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><code>min</code></td>
                                <td>Permettent de définir une valeur minimale pour un champ.</td>
                              </tr>
                              <tr>
                                <td><code>max</code></td>
                                <td>Permettent de définir une valeur maximale pour un champ.</td>
                              </tr>
                              <tr>
                                <td><code>placeholder</code></td>
                                <td>Donne des indications sur les données attendues.</td>
                              </tr>
                              <tr>
                                <td><code>autocomplete</code></td>
                                <td>Permet l'auto-complétion d'un champ.</td>
                              </tr>
                              <tr>
                                <td><code>required</code></td>
                                <td>Force le remplissage du champ.</td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                    </div>
                  </div>
              </div>
            </article>
            <article class="tab-pane fade" id="audio-video" role="tabpanel" aria-labelledby="audio-video-tab">
              <h3>Les lecteurs audio et vidéo</h3>
              <h4>Afficher un lecteur audio</h4>
              <p>
                On utilise la balise <code>&lt;audio&gt;</code> en lui donnant l'attribut et sa valeur <code>controls="controls"</code>.
                Il faut aussi lui indiquer sa source <code>&lt;src&gt;</code>.
              </p>
              <div class="row">
                <div class="col-md-6 bg-dark">
                    <code>
                      &lt;<span class="balise">audio</span> <span class="attribut">controls</span>=<span class="valeur">"controls"</span> <span class="attribut">src</span>=<span class="valeur">"media/birds.mp3"</span>&gt;<br>
                      Votre navigateur ne supporte pas le lecteur audio.<br>
                      &lt;/<span class="balise">audio</span>&gt;
                    </code>
                </div>
                <div class="col-md-6">
                    <audio style="width: 100%;" controls="controls" src="media/birds.mp3">
                        Votre navigateur ne supporte pas le lecteur audio.
                    </audio>
                </div>
              </div>
              <h4>Afficher un lecteur vidéo</h4>
              <p>
                Comme pour l'audio on utilise la balise correspondante <code>&lt;video&gt;</code> en lui donnant l'attribut et sa valeur <code>controls="controls"</code>.
                Il faut aussi lui indiquer sa source <code>&lt;src&gt;</code>.
              </p>
              <p>
                Sur un lecteur audio comme vidéo il est préferable d'ajouter plusieurs sources pour optimiser la bonne lecture du média.
              </p>
              <div class="row">
                <div class="col-md-6 bg-dark">
                    <code>
                      &lt;<span class="balise">video</span> <span class="attribut">controls</span>=<span class="valeur">"controls"</span>&gt;<br>
                    &nbsp;&nbsp;  &lt;<span class="balise">source</span> <span class="attribut">src</span>=<span class="valeur">"media/shuttle.mp4"</span> <span class="attribut">type</span>=<span class="valeur">"video/mp4"</span>&gt;<br>
                    &nbsp;&nbsp;  &lt;<span class="balise">source</span> <span class="attribut">src</span>=<span class="valeur">"media/shuttle.ogv"</span> <span class="attribut">type</span>=<span class="valeur">"video/ogg"</span>&gt;<br>
                      &lt;/<span class="balise">video</span>&gt;
                    </code>
                </div>
                <div class="col-md-6">
                  <video width="100%" controls="controls">
                      <source src="media/shuttle.mp4" type="video/mp4">
                      <source src="media/shuttle.ogv" type="video/ogg">
                      Your browser does not support the HTML5 Video element.
                  </video>
                </div>
            </div>
          </article>
      <!-- Listes -->
            <article class="tab-pane fade" id="caracteres" role="tabpanel" aria-labelledby="caracteres-tab">
              <h3>Liste des caractères spéciaux</h3>
              <div class="accordion accordion-flush" id="caracteres-liste">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="utiles-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#utiles-contenu" aria-expanded="false" aria-controls="utiles-contenu">
                        <h4>Utiles au code HTML</h4>
                      </button>
                    </h2>
                    <div id="utiles-contenu" class="accordion-collapse collapse" aria-labelledby="utiles-titre" data-bs-parent="#caracteres-liste">
                      <div class="accordion-body">
                        <table class="table table-striped table-hover">
                            <tbody>
                              <tr>
                                 <th>Caractère</th>
                                 <th>Encodage HTML</th>
                              </tr>
                              <tr>
                                  <td>☰</td>
                                  <td><code></code></td>
                              </tr>
                              <tr>
                                  <td>"</td>
                                  <td><code>&amp;quot;</code></td>
                              </tr>
                              <tr>
                                  <td>&lt;</td>
                                  <td><code>&amp;lt;</code></td>
                              </tr>
                              <tr>
                                  <td>&gt;</td>
                                  <td><code>&amp;gt;</code></td>
                              </tr>
                              <tr>
                                  <td>'</td>
                                  <td><code>&amp;apos;</code></td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="devises-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#devises-contenu" aria-expanded="false" aria-controls="devises-contenu">
                        <h4>Devises et symboles déposés</h4>
                      </button>
                    </h2>
                    <div id="devises-contenu" class="accordion-collapse collapse" aria-labelledby="devises-titre" data-bs-parent="#caracteres-liste">
                      <div class="accordion-body">
                        <table class="table table-striped table-hover">
                              <tbody>
                                <tr>
                                   <th>Caractère</th>
                                   <th>Encodage HTML</th>
                                </tr>
                                <tr>
                                    <td>€</td>
                                    <td><code>&amp;euro;</code></td>
                                </tr>
                              <tr>
                                  <td>¢</td>
                                  <td><code>&amp;cent;</code></td>
                              </tr>
                              <tr>
                                  <td>£</td>
                                  <td><code>&amp;pound;</code></td>
                              </tr>
                              <tr>
                                  <td>¥</td>
                                  <td><code>&amp;yen;</code></td>
                              </tr>
                              <tr>
                                  <td>¤</td>
                                  <td><code>&amp;curren;</code></td>
                              </tr>
                              <tr>
                                  <td>©</td>
                                  <td><code>&amp;copy;</code></td>
                              </tr>
                              <tr>
                                  <td>®</td>
                                  <td><code>&amp;reg;</code></td>
                              </tr>
                              <tr>
                                  <td>™</td>
                                  <td><code>&amp;trade;</code></td>
                              </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="math-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#math-contenu" aria-expanded="false" aria-controls="math-contenu">
                        <h4>Symboles mathématiques</h4>
                      </button>
                    </h2>
                    <div id="math-contenu" class="accordion-collapse collapse" aria-labelledby="math-titre" data-bs-parent="#caracteres-liste">
                      <div class="accordion-body">
                        <table class="table table-striped table-hover">
                              <tbody>
                                <tr>
                                   <th>Caractère</th>
                                   <th>Encodage HTML</th>
                                </tr>
                              <tr>
                                  <td>∀</td>
                                  <td><code>&amp;forall;</code></td>
                              </tr>
                              <tr>
                                  <td>∂</td>
                                  <td><code>&amp;part;</code></td>
                              </tr>
                              <tr>
                                  <td>∃</td>
                                  <td><code>&amp;exist;</code></td>
                              </tr>
                              <tr>
                                <td>∅</td>
                                <td><code>&amp;empty;</code></td>
                              </tr>
                              <tr>
                                <td>∇</td>
                                <td><code>&amp;nabla;</code></td>
                              </tr>
                              <tr>
                                <td>∈</td>
                                <td><code>&amp;isin;</code></td>
                              </tr>
                              <tr>
                                <td>∉</td>
                                <td><code>&amp;notin;</code></td>
                              </tr>
                              <tr>
                                <td>∋</td>
                                <td><code>&amp;ni;</code></td>
                              </tr>
                              <tr>
                                <td>∏</td>
                                <td><code>&amp;prod;</code></td>
                              </tr>
                              <tr>
                                <td>∑</td>
                                <td><code>&amp;sum;</code></td>
                              </tr>
                              <tr>
                                <td>√</td>
                                <td><code>&amp;radic;</code></td>
                              </tr>
                              <tr>
                                <td>∝</td>
                                <td><code>&amp;prop;</code></td>
                              </tr>
                              <tr>
                                <td>∞</td>
                                <td><code>&amp;infin;</code></td>
                              </tr>
                              <tr>
                                <td>∠</td>
                                <td><code>&amp;ang;</code></td>
                             </tr>
                             <tr>
                                <td>∧</td>
                                <td><code>&amp;and;</code></td>
                              </tr>
                             <tr>
                                <td>∨</td>
                                <td><code>&amp;or;</code></td>
                              </tr>
                             <tr>
                                <td>∩</td>
                                <td><code>&amp;cap;</code></td>
                              </tr>
                             <tr>
                                <td>∪</td>
                                <td><code>&amp;cup;</code></td>
                              </tr>
                             <tr>
                                <td>∫</td>
                                <td><code>&amp;int;</code></td>
                              </tr>
                             <tr>
                                <td>∴</td>
                                <td><code>&amp;there4;</code></td>
                              </tr>
                             <tr>
                                <td>∼</td>
                                <td><code>&amp;sim;</code></td>
                              </tr>
                             <tr>
                                <td>≅</td>
                                <td><code>&amp;cong;</code></td>
                              </tr>
                             <tr>
                                <td>≈</td>
                                <td><code>&amp;asymp;</code></td>
                              </tr>
                             <tr>
                                <td>≠</td>
                                <td><code>&amp;ne;</code></td>
                              </tr>
                             <tr>
                                <td>≡</td>
                                <td><code>&amp;equiv;</code></td>
                              </tr>
                             <tr>
                                <td>≤</td>
                                <td><code>&amp;le;</code></td>
                              </tr>
                             <tr>
                                <td>≥</td>
                                <td><code>&amp;ge;</code></td>
                              </tr>
                             <tr>
                                <td>⊂</td>
                                <td><code>&amp;sub;</code></td>
                              </tr>
                             <tr>
                                <td>⊃</td>
                                <td><code>&amp;sup;</code></td>
                              </tr>
                             <tr>
                                <td>⊄</td>
                                <td><code>&amp;nsub;</code></td>
                              </tr>
                             <tr>
                                <td>⊆</td>
                                <td><code>&amp;sube;</code></td>
                              </tr>
                             <tr>
                                <td>⊇</td>
                                <td><code>&amp;supe;</code></td>
                              </tr>
                             <tr>
                                <td>⊕</td>
                                <td><code>&amp;oplus;</code></td>
                              </tr>
                             <tr>
                                <td>⊗</td>
                                <td><code>&amp;otimes;</code></td>
                              </tr>
                             <tr>
                                <td>⊥</td>
                                <td><code>&amp;perp;</code></td>
                              </tr>
                             <tr>
                                <td>⋅</td>
                                <td><code>&amp;sdot;</code></td>
                              </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="divers-titre">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#divers-contenu" aria-expanded="false" aria-controls="divers-contenu">
                        <h4>Divers</h4>
                      </button>
                    </h2>
                    <div id="divers-contenu" class="accordion-collapse collapse" aria-labelledby="divers-titre" data-bs-parent="#caracteres-liste">
                      <div class="accordion-body">
                        <table class="table table-striped table-hover">
                              <tbody>
                                <tr>
                                   <th>Caractère</th>
                                   <th>Encodage HTML</th>
                                </tr>
                                <tr>
                                    <td>♩</td>
                                    <td><code>&amp;#x2669;</code></td>
                                </tr>
                                <tr>
                                    <td>♪</td>
                                    <td><code>&amp;#x266a;</code></td>
                                </tr>
                                <tr>
                                    <td>♫</td>
                                    <td><code>&amp;#x266b;</code></td>
                                </tr>
                                <tr>
                                    <td>♬</td>
                                    <td><code>&amp;#x266c;</code></td>
                                </tr>
                                <tr>
                                    <td>♭</td>
                                    <td><code>&amp;#x266d;</code></td>
                                </tr>
                                <tr>
                                    <td>♮</td>
                                    <td><code>&amp;#x266e;</code></td>
                                </tr>
                                <tr>
                                    <td>♯</td>
                                    <td><code>&amp;#x266f;</code></td>
                                </tr>
                              <tr>
                                <td>♠</td>
                                <td><code>&amp;spades;</code></td>
                              </tr>
                              <tr>
                                <td>♣</td>
                                <td><code>&amp;clubs;</code></td>
                              </tr>
                              <tr>
                                <td>♥</td>
                                <td><code>&amp;hearts;</code></td>
                              </tr>
                              <tr>
                                <td>♦</td>
                                <td><code>&amp;diams;</code></td>
                              </tr>
                              <tr>
                                <td>♚</td>
                                <td><code>&amp;#x265a;</code></td>
                              </tr>
                              <tr>
                                <td>♛</td>
                                <td><code>&amp;#x265b;</code></td>
                              </tr>
                              <tr>
                                <td>♜</td>
                                <td><code>&amp;#x265c;</code></td>
                              </tr>
                              <tr>
                                <td>♝</td>
                                <td><code>&amp;#x265d;</code></td>
                              </tr>
                              <tr>
                                <td>♞</td>
                                <td><code>&amp;#x265e;</code></td>
                              </tr>
                              <tr>
                                <td>♟</td>
                                <td><code>&amp;#x265f; 	</code></td>
                              </tr>
                              <tr>
                                <td>✰</td>
                                <td><code>&amp;#10032;</code></td>
                              </tr>
                              <tr>
                                <td>✭</td>
                                <td><code>&amp;#10029;</code></td>
                              </tr>
                              <tr>
                                <td>★</td>
                                <td><code>&amp;starf;</code></td>
                              </tr>
                              <tr>
                                <td>∙</td>
                                <td><code>&amp;bull;</code></td>
                              </tr>
                              <tr>
                                <td>✟</td>
                                <td><code>&amp;#x271f;</code></td>
                              </tr>
                              <tr>
                                <td>☪</td>
                                <td><code>&amp;#x262a;</code></td>
                              </tr>
                              <tr>
                                <td>☯</td>
                                <td><code>&amp;#x262f;</code></td>
                              </tr>
                              <tr>
                                <td>☮</td>
                                <td><code>&amp;#x262e;</code></td>
                              </tr>
                              <tr>
                                <td>♀</td>
                                <td><code>&amp;#x2640;</code></td>
                              </tr>
                              <tr>
                                <td>♂</td>
                                <td><code>&amp;#x2642;</code></td>
                              </tr>
                              <tr>
                                <td>♈</td>
                                <td><code>&amp;#x2648;</code></td>
                              </tr>
                              <tr>
                                <td>♉</td>
                                <td><code>&amp;#x2649;</code></td>
                              </tr>
                              <tr>
                                <td>♊</td>
                                <td><code>&amp;#x264a;</code></td>
                              </tr>
                              <tr>
                                <td>♋</td>
                                <td><code>&amp;#x264b;</code></td>
                              </tr>
                              <tr>
                                <td>♌</td>
                                <td><code>&amp;#x264c;</code></td>
                              </tr>
                              <tr>
                                <td>♍</td>
                                <td><code>&amp;#x264d;</code></td>
                              </tr>
                              <tr>
                                <td>♎</td>
                                <td><code>&amp;#x264e;</code></td>
                              </tr>
                              <tr>
                                <td>♏</td>
                                <td><code>&amp;#x264f;</code></td>
                              </tr>
                              <tr>
                                <td>♐</td>
                                <td><code>&amp;#x2650;</code></td>
                              </tr>
                              <tr>
                                <td>♑</td>
                                <td><code>&amp;#x2651;</code></td>
                              </tr>
                              <tr>
                                <td>♒</td>
                                <td><code>&amp;#x2652;</code></td>
                              </tr>
                              <tr>
                                <td>♓</td>
                                <td><code>&amp;#x2653;</code></td>
                              </tr>
                              <tr>
                                  <td>←</td>
                                  <td><code>&amp;larr;</code></td>
                              </tr>
                              <tr>
                                  <td>↑</td>
                                  <td><code>&amp;uarr;</code></td>
                              </tr>
                              <tr>
                                  <td>→</td>
                                  <td><code>&amp;rarr;</code></td>
                              </tr>
                              <tr>
                                  <td>↓</td>
                                  <td><code>&amp;darr;</code></td>
                              </tr>
                              <tr>
                                  <td>↔</td>
                                  <td><code>&amp;harr;</code></td>
                              </tr>
                              <tr>
                                  <td>↵</td>
                                  <td><code>&amp;crarr;</code></td>
                              </tr>
                              <tr>
                                  <td>⇐</td>
                                  <td><code>&amp;lArr;</code></td>
                              </tr>
                              <tr>
                                  <td>⇑</td>
                                  <td><code>&amp;uArr;</code></td>
                              </tr>
                              <tr>
                                  <td>⇒</td>
                                  <td><code>&amp;rArr;</code></td>
                              </tr>
                              <tr>
                                  <td>⇓</td>
                                  <td><code>&amp;dArr;</code></td>
                              </tr>
                              <tr>
                                  <td>⇔</td>
                                  <td><code>&amp;hArr;</code></td>
                              </tr>
                              <tr>
                                <td>◊</td>
                                <td><code>&amp;loz;</code></td>
                              </tr>
                              <tr>
                                <td>ℑ</td>
                                <td><code>&amp;image;</code></td>
                              </tr>
                              <tr>
                                <td>℘</td>
                                <td><code>&amp;weierp;</code></td>
                              </tr>
                              <tr>
                                <td>ℜ</td>
                                <td><code>&amp;real;</code></td>
                              </tr>
                              <tr>
                                <td>ℵ</td>
                                <td><code>&amp;alefsym;</code></td>
                              </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
