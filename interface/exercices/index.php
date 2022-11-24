<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
    <link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/articles.css">
    <link rel="stylesheet" href="../assets/bootstrap/icons/icons-1.5.0/font/bootstrap-icons.css">
  	<title>&lt;CodePhenix&gt; Exercices</title>
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
    <script>


    let aside=document.querySelector("aside");
    let section=document.querySelector("section");
    let difficulty = ["facile", "moyen", "difficile", "tout"];
    let listeDifficulty=document.createElement("ul");

    for (var diff of difficulty){
      let suj=document.createElement("li"),
          diffContent= "<a href='#"+diff+"'>"+diff+"</a>";
          suj.innerHTML=diffContent;
      listeDifficulty.appendChild(suj)
    }

    aside.appendChild(listeDifficulty);

    let articles = [
      {
        titre: "Parcours",
        href:"mini-jeu/parcours.pdf",
        sujet: ["HTML/CSS"],
        difficulte:  ["facile"],
        type: ["Mini-jeu"]
      },
      {
        titre: "Labyrinthe",
        href:"mini-jeu/labyrinthe.pdf",
        sujet: ["HTML/CSS", "JS"],
        difficulte: ["moyen"],
        type: ["Mini-jeu"]
      },
      {
        titre: "HTML",
        href:"quiz/html-initiation.html",
        sujet: ["HTML/CSS"],
        difficulte:  ["facile"],
        type: ["Quiz"]
      },
      {
        titre: "CSS",
        href:"quiz/css-initiation.html",
        sujet: ["HTML/CSS"],
        difficulte:  ["facile"],
        type: ["Quiz"]
      },
      {
        titre: "JS",
        href:"quiz/js-initiation.html",
        sujet: ["JS"],
        difficulte:  ["facile"],
        type: ["Quiz"]
      },
      {
        titre: "HTML/CSS",
        href:"quiz/html-intermediaire.html",
        sujet: ["HTML/CSS"],
        difficulte:  ["moyen"],
        type: ["Quiz"]
      },
      {
        titre: "JS",
        href:"quiz/js-intermediaire.html",
        sujet: ["JS"],
        difficulte:  ["moyen"],
        type: ["Quiz"]
      },
      {
        titre: "Connaissances avancées",
        href:"quiz/quiz-avance.html",
        sujet: ["HTML/CSS","JS"],
        difficulte:  ["moyen"],
        type: ["Quiz"]
      },
      {
        titre: "Connaissances avancées",
        href:"quiz/quiz-continue.html",
        sujet: ["HTML/CSS","JS", "bootstrap", "git"],
        difficulte:  ["difficile"],
        type: ["Quiz"]
      },
      {
        titre: "Cocoplant",
        href:"site/cocoplant.zip",
        sujet: ["HTML/CSS","JS"],
        difficulte:  ["moyen"],
        type: ["Site web"]
      },
      {
        titre: "Hanjie",
        href:"application/hanjie.zip",
        sujet: ["JS"],
        difficulte:  ["difficile"],
        type: ["Application"]
      },
      {
        titre: "2048",
        href:"application/2048.pdf",
        sujet: ["JS"],
        difficulte:  ["difficile"],
        type: ["Application"]
      },
      {
        titre: "Caroussel en objet",
        href:"#",
        sujet: ["JS"],
        difficulte:  ["moyen"],
        type: ["Module"]
      },
      {
        titre: "Prise de rendez-vous",
        href:"#",
        sujet: ["JS"],
        difficulte:  ["moyen"],
        type: ["Module"]
      },
      {
        titre: "Beverage",
        href:"site/beverage.zip",
        sujet: ["HTML/CSS"],
        difficulte:  ["facile"],
        type: ["Site web"]
      },
      {
        titre: "Analitics",
        href:"#",
        sujet: ["HTML/CSS", "JS"],
        difficulte:  ["facile"],
        type: ["Site web"]
      },
      {
        titre: "Éclipse",
        href:"#",
        sujet: ["HTML/CSS"],
        difficulte:  ["facile"],
        type: ["Animation"]
      }
    ]

    let linksAll = document.querySelectorAll("#difficulty a")
    let selectionArticle= new Array();
    //let filterListe=['HTML/CSS', "JS"];
    let filterListe= new Array();

    for (var  article of articles){
      for(var sujet of article.sujet){
          if(filterListe.includes(sujet)==false){
            filterListe.push(sujet)
          }
      }
    }

    let listeFiltre=document.createElement("ul");
    listeFiltre.id="sujetFiltre";


    for(var filter of filterListe){
      let filtreLi = document.createElement("li");
      filtreLi.classList.add('form-switch', 'form-check')
      filtreLi.innerHTML="<input class='form-check-input' type='checkbox' role='switch' type='checkbox' value='"+filter+"' id='switch"+filter+"'>\
        <label class='form-check-label' for='switch"+filter+"'>"+filter

        listeFiltre.appendChild(filtreLi)
    }
    aside.appendChild(listeFiltre);

    let filter2Liste= new Array();

    for (var  article of articles){
      for(var type of article.type){
          if(filter2Liste.includes(type)==false){
            filter2Liste.push(type)
          }
      }
    }

    let listeFiltre2=document.createElement("ul");
    listeFiltre2.id="typeFiltre";

    for(var filter of filter2Liste){
      let filtreLi = document.createElement("li");
      filtreLi.classList.add('form-switch', 'form-check')
      filtreLi.innerHTML="<input class='form-check-input' type='checkbox' role='switch' type='checkbox' value='"+filter+"' id='switch"+filter+"'>\
        <label class='form-check-label' for='switch"+filter+"'>"+filter

        listeFiltre2.appendChild(filtreLi)
    }
    aside.appendChild(listeFiltre2);


    let filtreAll = document.querySelectorAll("#sujetFiltre input")
    let filtre2All = document.querySelectorAll("#typeFiltre input")

    let filtredSelection= new Array();

    let tryFilter1 = false;
    let tryFilter2 = false;


    hashTest();

    window.addEventListener("hashchange", function(){
      hashTest();
      if(tryFilter1==true){
        filtrage1();
      }
      if(tryFilter2==true){
        filtrage22();
      }
      if(tryFilter1==true && tryFilter2==true){
         filtrage11();
      }
    })

    for (var filtre of filtreAll){
      filtre.addEventListener('click', function(){
        countTest()
      var count = 0;
      for (var filtre2 of filtre2All){
          if(filtre2.checked==false){
            count++
            if (count==filtre2All.length){
                filtrage1()
            }

          }else {
              filtrage11()
          }
      }
      if(filtredSelection.length==0 && tryFilter1==false){
        filtrage22()
      }
      })
    }

    for (var filtre2 of filtre2All){
      filtre2.addEventListener('click', function(){
      countTest()
      var count = 0;
      for (var filtre of filtreAll){
          if(filtre.checked==false){
            count++
            if (count==filtreAll.length){
                filtrage22()
            }
          }else {
              filtrage2()
          }
      }
      if(filtredSelection.length==0 && tryFilter2==false){
        filtrage1()
      }
      })
    }

    function hashTest(){
        selectionArticle= new Array();

       let urlHash = document.location.hash.replace("#", "");
       let tagList = document.querySelectorAll("aside a");

       for (var article of articles){

          if(article.difficulte.includes(urlHash)){
            selectionArticle.push(article)
          }else if(urlHash=="autre"){
            for (var art of article.difficulte){
              if(difficulty.includes(art)==false){
                selectionArticle.push(article)
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

   function construction(){
     section.innerHTML=""
     if(filtredSelection.length==0 && tryFilter1==false && tryFilter2==false){
       for (var article of selectionArticle){
         let liens=document.createElement("a");
         liens.target = "_bank";
         let structure = "<article>\
             <h3>"+article.type+" : "+article.titre+"</h3>\
             <span class='badge'></span>\
             </article>";

         liens.innerHTML=structure;

         if(article.sujet.length>1){
           for (var articleSujet in article.sujet){
             liens.classList.add(article.difficulte[articledifficulte]);
             var tagCloud = article.sujet[articleSujet]+" / ";
             liens.querySelector("article span").innerHTML+=tagCloud;
             //liens.href=article.difficulte[articledifficulte]+"/"+article.source+"/index.htm";
             liens.href=article.href;
           }
         }else{
           liens.classList.add(article.sujet);
           var tagCloud = article.sujet;
           liens.querySelector("article span").innerHTML=tagCloud;
           //liens.href=article.difficulte[articledifficulte]+"/"+article.source+"/index.htm";
           liens.href=article.href;
         }
         section.appendChild(liens);
      }
    }else if (filtredSelection.length==0 && (tryFilter1 == true || tryFilter2 == true) ){
        section.innerHTML="<p><span>Pas de contenu disponible.</span></p>"
    }else{
      for (var article of filtredSelection){
        let liens=document.createElement("a");
        liens.style.display="block";

        liens.target = "_bank";
        let structure = "<article>\
            <h3>"+article.type+" : "+article.titre+"</h3>\
            <span class='badge'></span>\
            </article>";

        liens.innerHTML=structure;

        if(article.difficulte.length>1){
          for (var articledifficulte in article.difficulte){
            liens.classList.add(article.difficulte[articledifficulte]);
            var tagCloud = article.difficulte[articledifficulte]+" / ";
            liens.querySelector("article span").innerHTML+=tagCloud;
            //liens.href=article.difficulte[articledifficulte]+"/"+article.source+"/index.htm";
            liens.href=article.href;
          }
        }else{
          liens.classList.add(article.difficulte);
          var tagCloud = article.difficulte;
          liens.querySelector("article span").innerHTML=tagCloud;
        //  liens.href=article.difficulte+"/"+article.source+"/index.htm";
        liens.href=article.href;
        }
        section.appendChild(liens);
     }
    }
   }

    function filtrage1() {
      filtredSelection = new Array;
      for (var article of selectionArticle){
        for (var filtre of filtreAll){

          if (filtre.checked==true && article.sujet.includes(filtre.value)==true){
             filtredSelection.push(article)
             break;
         }
       }
      }
      construction()
    }

    function filtrage11() {
      filtredSelection = new Array;
      for (var article of selectionArticle){
        for (var filtre2 of filtre2All){
          if (filtre2.checked==true  && article.type.includes(filtre2.value)){
            for (var filtre of filtreAll){
               if (filtre.checked==true  && article.sujet.includes(filtre.value)){
                 filtredSelection.push(article)
                 break;
               }
            }
          }
       }
       construction()
      }
    }

    function filtrage2() {
      filtredSelection = new Array;

      for (var article of selectionArticle){
        for (var filtre of filtreAll){
          if (filtre.checked==true  && article.sujet.includes(filtre.value)){
            for (var filtre2 of filtre2All){
               if (filtre2.checked==true  && article.type.includes(filtre2.value)){
                 filtredSelection.push(article)
                 break;
               }
            }
          }
       }
      }
       construction()
    }

    function filtrage22() {
      filtredSelection = new Array;
      for (var article of selectionArticle){
        for (var filtre2 of filtre2All){

          if (filtre2.checked==true && article.type.includes(filtre2.value)==true){
             filtredSelection.push(article)
             break;
         }
       }
       construction()
      }
    }

    function countTest(){
      let count1 = 0;

      for (var filtre of filtreAll){
        if(filtre.checked==false){
          count1++;
          if(count1==filtreAll.length){

            tryFilter1 = false;
          }else{
              tryFilter1 = true;
          }
        }
      }

      let count2 = 0;

      for (var filtre2 of filtre2All){
        if(filtre2.checked==false){
          count2++;
          if(count2==filtre2All.length){

            tryFilter2 = false;
          }else{
              tryFilter2 = true;
          }
        }
      }
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
