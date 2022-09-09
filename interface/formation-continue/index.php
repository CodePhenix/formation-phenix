<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
  	<link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/cours.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/articles.css">
    <link rel="stylesheet" href="../assets/bootstrap/icons/icons-1.5.0/font/bootstrap-icons.css">
  	<title>&lt;CodePhenix&gt; Cours</title>
    <style>
    main{display: block;}
    section  {
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     align-content: space-around;
     margin:0 auto;
    }
    </style>
  </head>
  <body>
    <?php include '../assets/structure/header.php' ;?>
    <main>
      <!-- contenu -->
      <section>
        <h3>Formation continue</h3>
        <p>Dans le milieu du web, la veille technologique est très importante.
          Cette section va vous permettre d'apprendre davantage et d'accroître vos connaissances, avec des méthodes et des pratiques courantes dans le domaine.
          Il est fortement conseillé de parcourir l'ensemble des sujets de cette section.
        </p>
        <div  id="search">
          <input type="text" id="searchbar">
          <i class="bi bi-search"></i>
        </div>

        <!-- <button>search</button> -->
      </section>
        <section id="section">
        </section>
        <div class="modal">
          <button>X</button>
          <div>
            <h3>Git GUI/GitAhead</small></h3>
            <p>
              GitAhead est un GUI (Graphic User Interface), c'est une interface graphique, simple et intuitive pour utiliser Git.
              Il permet la gestion de projet avec Git sans avoir à utiliser le terminal de commande.
            </p>
            <p>
              GitAhead à déjà été installé sur votre ordinateur, il vous suffit de créer un raccourci sur votre bureau.
              Pour cela ouvrez votre terminal et entrez les commandes suivante :
            </p>
            <p><code>
              ln -s /opt/GitAhead/GitAhead ~/Bureau/<br>
              ls -al ~/Bureau/
            </code></p>
            <img src="supports/gitahead.png">
          </article>
        </div>
    </main>
    <script>
    let body=document.querySelector("body");
    let section=document.querySelector("#section");

    let articles = [
      {
        titre: "Sass/Scss",
        source: "",
        href:"supports/sass_tutoriel.pdf"
      },
      {
        titre: "Git GUI/GitAhead",
        source: "",
        href:"#",
        content:"<p>\
          GitAhead est un GUI (Graphic User Interface), c'est une interface graphique, simple et intuitive pour utiliser Git.\
          Il permet la gestion de projet avec Git sans avoir à utiliser le terminal de commande.\
        </p>\
        <p>\
          GitAhead à déjà été installé sur votre ordinateur, il vous suffit de créer un raccourci sur votre bureau.\
          Pour cela ouvrez votre terminal et entrez les commandes suivante :\
        </p>\
        <p><code>\
          ln -s /opt/GitAhead/GitAhead ~/Bureau/<br>\
          ls -al ~/Bureau/\
        </code></p>\
        <img src='supports/gitahead.png'>",
        modal:true
      },
      {
        titre: "VueJS",
        source: "vuejs",
        href:"vuejs/v2/guide/index.html"
      },
      {
        titre: "moment.js",
        source: "moment.js",
        href:"momentjs/docs/index.htm"
      },
      {
        titre: "Canvas",
        source: "mdn web docs",
        href:"canvas/fr/docs/Web/API/Canvas_API/Tutorial-1.html"
      },
      {
        titre: "indexDB",
        source: "mdn web docs",
        href:"indexdb/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB.html"
      },
      {
        titre: "GIMP",
        source: "my poster blog",
        href:"gimp/magazin/tuto-gimp-bases-utilisation-du-logiciel-gimp/index.htm"
      },
      {
        titre: "Inkscape",
        source: "Inkscape",
        href:"inkscape/index.htm"
      }
    ]

    construction();

    function construction(){
      section.innerHTML=""

       for (var article of articles){
         let liens=document.createElement("a");
         liens.target = "_bank";
         let structure = "<article>\
             <h3>"+article.titre+"</h3>\
             <cite>"+article.source+"</cite>\
             </article>";

         liens.innerHTML=structure;
         liens.href=article.href;

         section.appendChild(liens);
      }


    }


    let searchbar = document.querySelector("#searchbar")
    let searchbutton = document.querySelector("#search")


    searchbar.addEventListener("input", function(){
      construction();
      let articlesAll = document.querySelectorAll("#section a article")
      let count = 0
      for(var articleTitle of articlesAll){

          if(this.value=="")
          {
              articleTitle.parentElement.style.display = "block"
          }
          if(articleTitle.querySelector("h3").textContent.toLowerCase().includes(searchbar.value.toLowerCase()))
          {
            articleTitle.parentElement.style.display = "block"
          }else
          {
            articleTitle.parentElement.style.display = "none"
            count ++

            if(count == articlesAll.length)
            {
              section.innerHTML="<p><span>Aucun article trouvé.</span></p>"
            }
          }

      }

    })


    /***** TEMPORAIRE ****/
    /* modal gitahead */

    let linkToABox = document.querySelector("a[href='#']");
    let modal = document.querySelector(".modal");


    linkToABox.addEventListener("click", function(e){
             e.preventDefault()
             modal.style.display = "flex"

             let close = document.querySelector(".modal > button")

             close.addEventListener("click", function(){
               modal.style.display = "none"
             })

    })

    </script>
    <!-- Liaison au script Bootstrap -->
    <script src="../assets/bootstrap/js/bootstrap.js" type="text/javascript"></script>
  </body>
</html>
