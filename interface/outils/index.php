<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
    <link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/articles.css">
    <link rel="stylesheet" href="../assets/bootstrap/icons/icons-1.5.0/font/bootstrap-icons.css">
  	<title>&lt;CodePhenix&gt; Outils</title>
  </head>

  <body>
    <?php include '../assets/structure/header.php' ;?>

    <a href="#" id="back-to-top" class="btn btn-default">↑</a>
    <main>
      <aside>
        <div id="search">
          <input type="text" id="searchbar">
          <i class="bi bi-search"></i>
        </div>
      </aside>
      <section></section>
    </main>
    <script>

    let aside=document.querySelector("aside");
    let section=document.querySelector("section");

    let articles = [
      {
        titre: "CSS Generator",
        source: "CSS Generator tool",
        href:"cssgenerator/index.htm",
        front: true
      },
      {
        titre: "Animation Generator",
        source: "The AppGuruz",
        href:"theappguruz/tag-tools/web/CSSAnimations/index.htm",
        front: true
      },
      {
        titre: "ReGex",
        source: "Regular expression 101",
        href:"http://codephenix.com:8456",
        sujet: ["front-end"]
      },
      {
        titre: "Icons",
        source: "Icomoon",
        href:"icomoon/index.html",
        design: true
      },
      {
        titre: "Polices d'écriture",
        source: "CodePhenix",
        href:"typo.php",
        design: true
      },
      {
        titre: "Banque à idées",
        source: "",
        href:"http://codephenix.com:8500",
        front: true,
        design: true
      },
      {
        titre: "Rgba to hex",
        source: "RGBA Color Picker",
        href:"rgbacolorpicker.com/rgba-to-hex.htm",
        front: true
      },
      {
        titre: "Color wheel",
        source: "Colorsinspo",
        href:"colorsinspo.com/color-tools/color-wheel.html",
        design: true
      },
      {
        titre: "Contrast ratio",
        source: "contrast-ratio",
        href:"contrast-ratio/index.htm",
        design: true
      },
      {
        titre: "Flex generator",
        source: "angrytools.com",
        href:"angrytools.com/css-flex/index.htm",
        front: true
      },
      {
        titre: "clip-path generator",
        source: "cssportal.com",
        href:"cssportal.com/css-clip-path-generator/index.htm",
        front: true
      },
      {
        titre: "Tooltip generator",
        source: "cssportal.com",
        href:"cssportal.com/css-tooltip-generator/index.htm",
        front: true
      },
      {
        titre: "3D transform generator",
        source: "cssportal.com",
        href:"cssportal.com/css-3d-transform-generator/index.htm",
        front: true
      }
    ]

    let selectionArticle= new Array();
    let listeFiltre=document.createElement("ul");
    let filtreNew = document.createElement("li");
    let filtreIntervenant = document.createElement("li");

    filtreNew.classList.add('form-switch')
    filtreNew.classList.add('form-check')
    filtreIntervenant.classList.add('form-switch')
    filtreIntervenant.classList.add('form-check')

    filtreNew.innerHTML="<input class='form-check-input' type='checkbox' role='switch' type='checkbox' value='design' id='design'>\
     <label class='form-check-label' for='switchNew'> Design"
    filtreIntervenant.innerHTML="<input class='form-check-input' type='checkbox' role='switch' type='checkbox' value='front' id='frontEnd'>\
      <label class='form-check-label' for='frontEnd'>Front-end"

    listeFiltre.appendChild(filtreIntervenant);
    listeFiltre.appendChild(filtreNew);

    aside.appendChild(listeFiltre);


    let filtreAll = document.querySelectorAll("aside input")
    let inputFront = document.querySelector("input[value='front']")
    let inputDesign = document.querySelector("input[value='design']")
    let filtredSelection= new Array();

    let tryFilter = false;

    hashTest();

    function hashTest(){
        selectionArticle= new Array();

       let urlHash = document.location.hash.replace("#", "");
       let tagList = document.querySelectorAll("aside a");

       for (var article of articles){
          selectionArticle.push(article)
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
          liens.href=article.href;
         liens.target = "_bank";
         let structure = "<article>\
             <h3>"+article.titre+"</h3>\
             <span class='badge'></span>\
             <cite>"+article.source+"</cite>\
             </article>";

         liens.innerHTML=structure;
         section.appendChild(liens);
      }
    }else if (filtredSelection.length==0 && tryFilter == true){
        section.innerHTML="<p><span>Pas de contenu disponible.</span></p>"
    }else{
      for (var article of filtredSelection){
        let liens=document.createElement("a");

        liens.style.display="block";
liens.href=article.href;
        liens.target = "_bank";
        let structure = "<article>\
            <h3>"+article.titre+"</h3>\
            <cite>"+article.source+"</cite>\
            </article>";

        liens.innerHTML=structure;
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

        if(inputFront.checked==true && inputDesign.checked==true){
          if(article.front==true && article.design==true){
            filtredSelection.push(article)
          }
        }else{
          if(inputDesign.checked==true && article.design==true){
             filtredSelection.push(article)
          }
          if(inputFront.checked==true && article.front==true){
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
