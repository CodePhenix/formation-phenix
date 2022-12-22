<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
    <link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/articles.css">
    <link rel="stylesheet" href="../assets/bootstrap/icons/icons-1.5.0/font/bootstrap-icons.css">
  	<title>&lt;CodePhenix&gt; Connaissances</title>
  </head>

  <body>
    <?php include '../assets/structure/header.php' ;?>
    <a href="#" id="back-to-top" class="btn btn-default">&uarr;</a>
    <main>
      <aside>
        <div  id="search">
          <input type="text" id="searchbar">
          <i class="bi bi-search"></i>
        </div>
      </aside>
      <section></section>
    </main>
    <?php include '../assets/structure/footer.php' ;?>
    <script>


    let aside=document.querySelector("aside");
    let section=document.querySelector("section");
    let sujets = ["SEO", "accessibilite", "UX", "web", "pro", "autre", "tout" ];
    let listeSujet=document.createElement("ul");

    for (var sujet of sujets){
      let suj=document.createElement("li"),
          sujetContent= "<a href='#"+sujet+"'>"+sujet+"</a>";
          suj.innerHTML=sujetContent;
      listeSujet.appendChild(suj)
    }

    aside.appendChild(listeSujet);

    let articles = [
      {
        titre: "Référencement naturel (SEO) : Comment référencer son site sur google ?",
        source: "sales-odyssey",
        href:"SEO/sales-odyssey/index.htm",
        sujet:  ["SEO"]
      },
      {
        titre: "Introduction à l'accessibilité du web ",
        source: "w3c",
        href:"accessibilite/w3c/index.htm",
        sujet: ["accessibilite"]
      },
      {
        titre: "3 clés pour comprendre l’importance du design dans l’expérience utilisateur",
        source: "joptimisemonsite",
        href:"UX/joptimisemonsite/index.htm",
        sujet: ["UX"]
      },
      {
        titre: "Nos 10 conseils pour travailler votre UX design",
        source: "sales-odyssey",
        href:"UX/sales-odyssey/index.htm",
        sujet:  ["UX"]
      },
      {
        titre: "Positionnez votre site de manière durable sur les moteurs de recherche !",
        source: "eskimoz",
        href:"SEO/eskimoz/index.htm",
        sujet:  ["SEO"]
      },
      {
        titre: "L’introduction à l’accessibilité sur le web",
        source: "medium",
        href:"accessibilite/medium/index.htm",
        sujet:  ["accessibilite"]
      },
      {
        titre: "Les métiers du Web : La liste complète !  ",
        source: "le-radar",
        href:"web/metiers-du-web/le-radar/index.htm",
        sujet:  ["web", "pro"]
      },
      {
        titre: "Qu’est-ce qu’un Wireframe ?",
        source: "usabilis",
        href:"UX/usabilis/index.htm",
        sujet:  ["UX"]
      },
      {
        titre: "Définition du SXO : étude de cas et analyse",
        source: "panda-seo",
        href:"SEO/panda-seo/index.htm",
        sujet:  ["UX", "SEO"]
      },
      {
        titre: "Décode le code",
        source: "coding-days",
        href:"web/coding-days/[11 juin 2019] - Code Phoenix.pdf",
        sujet:  ["web"],
        intervenant : true
      },
      {
        titre: "Studio artefact 3000",
        source: "artefact studios",
        href:"autre/artefact/08_04_2022_Code Phoenix_Présentation Artefact Studio 3000.pdf",
        sujet:  ["pro"],
        intervenant : true
      },
      {
        titre: "L’Agilité : un monde nouveau",
        source: "Julie Garnier",
        href:"autre/methode-agile/Agilite.pptx.pdf",
        sujet:  ["Methode-agile"],
        intervenant : true
      },
      {
        titre: "Le guide des bonnes pratiques agiLes illustré",
        source: "Wemanity",
        href:"autre/methode-agile/Wemanity - Guide des Bonnes Pratiques Agiles.pdf",
        sujet:  ["Methode-agile"],
        intervenant : true
      },
      {
        titre: "Dev & Design",
         source: "",
        href:"UX/intervenant/Dev_UX.pdf",
        sujet:  ["UX"],
        intervenant : true
      },
      {
        titre: "Introduction au design - focus portfolio",
        source: "Maud",
        href:"UX/intervenant/Introduction au design - focus portfolio.pdf",
        sujet:  ["UX"],
        intervenant : true
      },
      {
        titre: "Les langages de programmation",
        source: "Ring capital",
        href:"web/ring-capital/2022-05-18_Programming_Languages.pdf",
        sujet:  ["web"],
        intervenant : true
      },
      {
        titre: "Les dernières statistiques sur l’utilisation d’internet",
        source: "zenuacademie",
        href:"web/zenuacademie/statistiques/statistiques-utilisation-internet/index.htm",
        sujet:  ["web"]
      },
      {
        titre: "Les bases de l’Ergonomie et de l’UX Design sur mobile et tablette",
        source: "arquen",
        href:"UX/arquen/blog/ergonomie-ux-mobile-tablette/index.htm",
        sujet:  ["UX"]
      },
      {
        titre: "Mémo dev",
        source: "DesignGouv",
        href:"SEO/design.numerique.gouv/outils/memo-dev/index.htm",
        sujet:  ["SEO", "accessibilite"]
      },
      {
        titre: "Qu’est-ce que le code hexadécimal ? Tout ce que tu as besoin de savoir",
        source: "mycamer",
        href:"autre/mycamer.net/quest-ce-que-le-code-hexadecimal-tout-ce-que-tu-as-besoin-de-savoir/index.htm",
        sujet:  ["couleurs"]
      },
      {
        titre: "Optimiser ses images pour le web",
        source: "oboqo",
        href:"autre/oboqo/optimiser-images-web-format-jpg-png-resolution-nom-fichier-export-photoshop/index.htm",
        sujet:  ["optimisation-image"]
      },
      {
        titre: "CMJN et RVB, quelles différences ?",
        source: "baches-publicitaires",
        href:"autre/baches-publicitaires/blog/communication/cmjn-rvb-differences/index.htm",
        sujet:  ["couleurs"]
      },
      {
        titre: "Les écrans",
        source: "CodePhenix",
        href:"autre/codephenix/presentation-screen.pdf",
        sujet:  ["ecrans"],
        intervenant : true
      },
      {
        titre: "Design UI",
        source: "CodePhenix",
        href:"autre/codephenix/presentation-ui.pdf",
        sujet:  ["UI"],
        intervenant : true
      },
      {
        titre: "Règles WCAG",
        source: "W3C",
        href:"accessibilite/w3c/index-1.htm",
        sujet:  ["accessibilite"]
      },
      {
        titre: "Critères RGAA",
        source: "numerique.gouv.fr",
        href:"accessibilite/rgaa/index.htm",
        sujet:  ["accessibilite"]
      },
      {
        titre: "L'accessibilité",
        source: "CodePhenix",
        href:"accessibilite/accessibilite.pdf",
        sujet:  ["accessibilite"],
        intervenant : true
      },
      {
        titre: "Créer un univers graphique",
        source: "CodePhenix",
        href:"autre/codephenix/univers-graphique.pdf",
        sujet:  ["UI", "marketing"],
        intervenant : true,
      },
      {
        titre: "Les noms de domaines",
        source: "Afnic - Stéphane Bortzmeyer",
        href:"web/code-phenix-noms-domaines.pdf",
        sujet:  ["web"],
        intervenant : true,
      }
    ]

    let linksAll = document.querySelectorAll("#sujets a")
    let selectionArticle= new Array();

    let listeFiltre=document.createElement("ul");
    let filtreNew = document.createElement("li");
    let filtreIntervenant = document.createElement("li");

    filtreNew.classList.add('form-switch')
    filtreNew.classList.add('form-check')
    filtreIntervenant.classList.add('form-switch')
    filtreIntervenant.classList.add('form-check')

    filtreNew.innerHTML="<input class='form-check-input' type='checkbox' role='switch' type='checkbox' value='new' id='switchNew'>\
     <label class='form-check-label' for='switchNew'> Nouveau"
    filtreIntervenant.innerHTML="<input class='form-check-input' type='checkbox' role='switch' type='checkbox' value='intervenant' id='switchPresentation'>\
      <label class='form-check-label' for='switchPresentation'>Intervenant"

    listeFiltre.appendChild(filtreIntervenant);
    listeFiltre.appendChild(filtreNew);

    aside.appendChild(listeFiltre);


    let filtreAll = document.querySelectorAll("aside input")
    let inputNew = document.querySelector("input[value='new']")
    let inputIntervenant = document.querySelector("input[value='intervenant']")
    let filtredSelection= new Array();

    let tryFilter = false;

    hashTest();

    function hashTest(){
        selectionArticle= new Array();

       let urlHash = document.location.hash.replace("#", "");
       let tagList = document.querySelectorAll("aside a");

       for (var article of articles){

          if(article.sujet.includes(urlHash)){
            selectionArticle.push(article)
          }else if(urlHash=="autre"){
            for (var art of article.sujet){
              if(sujets.includes(art)==false){
                selectionArticle.push(article)
                break;
                console.log(selectionArticle)
              }
            }
          }else if(urlHash=="tout" || !urlHash){
            selectionArticle.push(article)
          }

       }
       for (var tagActvive of tagList){
         tagActvive.classList.remove("active");

         if(tagActvive.textContent==urlHash){
            tagActvive.classList.add("active");
         }
       }
       construction()
   }

   window.addEventListener("hashchange", function(){
     hashTest();
     filtred();
   })


   function construction(){
     section.innerHTML=""
     if(filtredSelection.length==0 && tryFilter==false){
       for (var article of selectionArticle){
         let liens=document.createElement("a");
         liens.target = "_bank";
         let structure = "<article>\
             <h3>"+article.titre+"</h3>\
             <span class='badge'></span>\
             <cite>"+article.source+"</cite>\
             </article>";

         liens.innerHTML=structure;

         if(article.sujet.length>1){
           for (var articleSujet in article.sujet){
             liens.classList.add(article.sujet[articleSujet]);
             var tagCloud = article.sujet[articleSujet]+" / ";
             liens.querySelector("article span").innerHTML+=tagCloud;
             //liens.href=article.sujet[articleSujet]+"/"+article.source+"/index.htm";
             liens.href=article.href;
           }
         }else{
           liens.classList.add(article.sujet);
           var tagCloud = article.sujet;
           liens.querySelector("article span").innerHTML=tagCloud;
           //liens.href=article.sujet[articleSujet]+"/"+article.source+"/index.htm";
           liens.href=article.href;
         }
         section.appendChild(liens);
      }
    }else if (filtredSelection.length==0 && tryFilter == true){
        section.innerHTML="<p><span>Pas de contenu disponible.</span></p>"
    }else{
      for (var article of filtredSelection){
        let liens=document.createElement("a");
        liens.style.display="block";

        liens.target = "_bank";
        let structure = "<article>\
            <h3>"+article.titre+"</h3>\
            <span class='badge'></span>\
            <cite>"+article.source+"</cite>\
            </article>";

        liens.innerHTML=structure;

        if(article.sujet.length>1){
          for (var articleSujet in article.sujet){
            liens.classList.add(article.sujet[articleSujet]);
            var tagCloud = article.sujet[articleSujet]+" / ";
            liens.querySelector("article span").innerHTML+=tagCloud;
            //liens.href=article.sujet[articleSujet]+"/"+article.source+"/index.htm";
            liens.href=article.href;
          }
        }else{
          liens.classList.add(article.sujet);
          var tagCloud = article.sujet;
          liens.querySelector("article span").innerHTML=tagCloud;
        //  liens.href=article.sujet+"/"+article.source+"/index.htm";
        liens.href=article.href;
        }
        section.appendChild(liens);
     }

    }
   }

    for (var filtre of filtreAll){
      filtre.addEventListener("change", filtred)
    }

    function filtred(){
      filtredSelection= new Array();

      for (var article of selectionArticle){

        if(inputNew.checked==true && inputIntervenant.checked==true){
          if(article.new==true && article.intervenant==true){
            filtredSelection.push(article)
          }
        }else{
          if(inputIntervenant.checked==true && article.intervenant==true){
             filtredSelection.push(article)
          }
          if(inputNew.checked==true && article.new==true){
             filtredSelection.push(article)
          }
        }
      }
      var count = 0;

      for (var filtre of filtreAll){
        if(filtre.checked==false){
          count++;
          if(count==filtreAll.length){

            tryFilter = false;
          //  console.log(tryFilter)
            hashTest();
          }else{
              tryFilter = true;
          }
        }

      }
       construction();
    }


    /*********** RECHERCHE *************/

    let searchbar = document.querySelector("#searchbar")
    let searchbutton = document.querySelector("#search")


    searchbar.addEventListener("input", function(){
      construction();
      let articlesAll = document.querySelectorAll("section a article")
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
    </script>
      <!-- Liaison au script Bootstap -->
      <script src="../assets/bootstrap/js/bootstrap.js" type="text/javascript"></script>
    </body>
</html>
