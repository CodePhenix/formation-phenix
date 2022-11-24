<header>
  <h1><a href="../index.php">&lt;CodePhenix&gt;</a></h1>
  <a id="git" href="http://codephenix.com:2500" target="_blank"><span>Accès à GitLab</span><img src="../assets/img/gitlab.png"></a>
</header>
<script>
  let header=document.querySelector("header");

  if(document.title=="<CodePhenix>"){
    header.querySelector("#git img").src="assets/img/gitlab.png";
    header.querySelector("h1 a").href="index.php";
  }else if (document.title=="<CodePhenix> Documentation"){
    header.removeChild(header.querySelector("#git"));
    let nav=document.createElement("nav");
    navStructure="<span>\
                    <button id='burger'>☰</button>\
                    <button id='burger-close'>X</button>\
                    <ul>\
                      <li><a href='html.php'>HTML</a></li>\
                      <li><a href='css.php'>CSS</a></li>\
                      <li><a href='js.php'>JavaScript</a></li>\
                      <li><a href='bootstrap.php'>Bootstrap</a></li>\
                      <li><a href='git.php'>Git</a></li>\
                    </ul>\
                  </span>"

      nav.innerHTML=navStructure;
      header.appendChild(nav);

      let path = window.location.pathname;
      let page = path.split("/").pop();
      let pageName= page.split(".").shift();

      document.title+=" : "+pageName;

      let regex=new RegExp(pageName, "i");
      let docSujets=document.querySelectorAll("nav ul li");

      if(regex.test(document.title)==true){
        for(var docSujet of docSujets){
          let lien=docSujet.querySelector("a").href.split("/").pop();
          let sujet=lien.split(".").shift();

          docSujet.querySelector("a").classList.remove("active");
          if(sujet==pageName){
            docSujet.querySelector("a").classList.add("active");
          }
        }
      }
  }
</script>
