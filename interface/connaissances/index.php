<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
  	<link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
  	<title>&lt;CodePhenix&gt; Connaissances</title>
    <style>
    aside{ text-transform: capitalize;}
    aside ul{list-style: none;}
    aside ul a{text-decoration: none;color: #777;}
    aside ul a:hover, aside ul a.active{ color: #3f95ea;}

    section  {
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     align-content: space-around;
    }
      section a{
        display: none;
        width: 31%;
        margin: 1%;
        /* background: #eee; */
        border: 1px solid #3f95ea;
        text-decoration: none;
        transition: all .5s ease;
      }
      section a:hover{
        background: #3f95ea;
        color: white;
      }
      section a.active{display: block;}
      article {
        padding: 2em 1em 1em;
        position: relative;
      }
      h3{
        color: #111;
        transition: all .5s ease;
      }
      section a:hover h3{color: white;}
      span.badge{
        background-color: #3f95ea;
        position: absolute;
        top: -.5em;
        right: -.5em;
        font-size: .75em;
        transition: all .5s ease;
        text-transform: capitalize;
      }
        section a:hover span.badge{
        background-color: #52d3aa;
      }
      cite{ color: #777;transition: all .5s ease;}
      section a:hover cite{color: #111;}
    </style>
  </head>

  <body>
    <?php include '../assets/structure/header.php' ;?>
    <main>
      <aside></aside>
      <section></section>
    </main>
    <script>
    const aside=document.querySelector("aside");
    const section=document.querySelector("section");
    const sujets = ["SEO", "accessibilite", "UX", "autre", "nouveau", "tout" ];
    let listeSujet=document.createElement("ul");

    for (var sujet of sujets){
      let suj=document.createElement("li"),
          sujetContent= "<a href='#"+sujet+"'>"+sujet+"</a>";
          suj.innerHTML=sujetContent;
      listeSujet.appendChild(suj)
    }

    aside.appendChild(listeSujet);

    const articles = [
      {
        titre: "Référencement naturel (SEO) : Comment référencer son site sur google ?",
        source: "sales-odyssey",
        new : true,
        sujet:  ["SEO"]
      },
      {
        titre: "Introduction à l'accessibilité du web ",
        source: "w3c",
        new : true,
        sujet: ["accessibilite"]
      },
      {
        titre: "3 clés pour comprendre l’importance du design dans l’expérience utilisateur",
        source: "joptimisemonsite",
        new : true,
        sujet: ["UX"]
      },
      {
        titre: "Nos 10 conseils pour travailler votre UX design",
        source: "sales-odyssey",
        sujet:  ["UX"]
      },
      {
        titre: "Positionnez votre site de manière durable sur les moteurs de recherche !",
        source: "eskimoz",
        sujet:  ["SEO"]
      },
      {
        titre: "L’introduction à l’accessibilité sur le web",
        source: "medium",
        sujet:  ["accessibilite"]
      },
      {
        titre: "Les métiers du Web : La liste complète !  ",
        source: "le-radar",
        sujet:  ["metiers-du-web"]
      },
      {
        titre: "Qu’est-ce qu’un Wireframe ?",
        source: "usabilis",
        sujet:  ["UX"]
      },
      {
        titre: "Définition du SXO : étude de cas et analyse",
        source: "panda-seo",
        new : true,
        sujet:  ["UX", "SEO"]
      }
    ]
    for (var article of articles){
      let liens=document.createElement("a");

      if(article.new==true){
        liens.classList.add("nouveau");
      }
      liens.target = "_bank";
      let structure = "<article>\
          <h3>"+article.titre+"</h3>\
          <span class='badge'></span>\
          <cite>"+article.source+"</cite>\
          </article>";
    //  liens.href=article.sujet+"/"+article.source+"/index.htm";
      liens.innerHTML=structure;

      if(article.sujet.length>1){
        for (var articleSujet in article.sujet){
          liens.classList.add(article.sujet[articleSujet]);
          var tagCloud = article.sujet[articleSujet]+" / ";
          liens.querySelector("article span").innerHTML+=tagCloud;
          liens.href=article.sujet[articleSujet]+"/"+article.source+"/index.htm";
        }
      }else{
        liens.classList.add(article.sujet);
        var tagCloud = article.sujet;
        liens.querySelector("article span").innerHTML=tagCloud;
        liens.href=article.sujet+"/"+article.source+"/index.htm";
      }
      section.appendChild(liens);
    }

    let tags = document.querySelectorAll("section a");

     function hashTest(){
        let urlHash = document.location.hash.replace("#", "");
        let tagList = document.querySelectorAll("aside a");

        for (var tag of tags){
        let classeNameList= tag.className.split(" ");

        let classArray= new Array();
        classArray.push(classeNameList);

        tag.classList.remove("active");

          if(sujets.includes(urlHash) && tag.classList.contains(urlHash)){
            tag.classList.add("active");
          }else if(urlHash=="tout" || !urlHash){
            tag.classList.add("active");
          }else if(urlHash=="autre"){
            for (var nameClass of classeNameList){
              if(sujets.includes(nameClass)==false && nameClass!="active"){
                tag.classList.add("active");
              }
            }
          }else{
            tag.classList.remove("active");
          }
          for (var tagActvive of tagList){
            if(tagActvive.textContent==urlHash){
               tagActvive.classList.add("active");
            }
          }
        }

    }

    hashTest();

    window.addEventListener("hashchange", hashTest)

    let tagsList = document.querySelectorAll("aside a");

    for (var tagActvive of tagsList){
      tagActvive.addEventListener("click", function(){

        this.classList.add("active");

        for (var tag of tagsList){
          if(tag != this){
            tag.classList.remove("active");
          }
        }

      })
    }

    </script>
      <!-- Liaison au script Bootstap -->
      <script src="../assets/bootstrap/js/bootstrap.js" type="text/javascript"></script>
    </body>
</html>
