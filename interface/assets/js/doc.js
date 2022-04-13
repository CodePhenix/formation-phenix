/////////////////////////// DOCUMENTATION ///////////////////////////
// MENU BURGER RESPONSIVE
let burger=document.querySelector('#burger'),
    closeBurger=document.querySelector('#burger-close');

burger.addEventListener('click', function(){
    burger.parentElement.classList.add('active')
});
closeBurger.addEventListener('click', function(){
    burger.parentElement.classList.remove('active')
});
// EXEMPLES CSS : boutons qui génère la css correspondante
let demos = document.querySelectorAll(".demoBtn");

for (var demo of demos){
  let boutons = demo.querySelectorAll("button"),
      propiete = demo.querySelector("code").textContent,
      demoContent = demo.parentElement.previousElementSibling.querySelector(".demoContent");

  for(var bouton of boutons){
    bouton.addEventListener("click", function() {
        bouton.classList.remove("active");
        let params = this.textContent;
        let exemple = demoContent.querySelector("div");
        //  exemple.innerHTML = propiete + " : " + params + ";";
        exemple.style.setProperty(propiete, params) ;
        if(params == exemple.style.getPropertyValue(propiete) ){
          this.classList.add("active");
        }
        for (var btn of boutons){
          if(btn != this){
            btn.classList.remove("active");
          }
        }
      });
    }
}
// EXEMPLES CSS FLEX : changement de largeur pour la demo flex wrap
let wrap=document.querySelector("#wrap");
let wrapReverse=document.querySelector("#wrap-reverse");
let flexButtons=document.querySelectorAll("#display-flex-contenu button");

for(var buttonFlex of flexButtons){
  buttonFlex.addEventListener("click", function(){
    let flexItem=document.querySelectorAll(".item-flex");

    for(var item of flexItem){
      if(wrap==this || wrapReverse==this){
        item.style.width="36%";
      }else if(wrap.classList.contains("active") || wrapReverse.classList.contains("active")){
          item.style.width="36%";
        }else{
          item.style.width="20%";
        }
    }
  });
}
// EXEMPLES BOOTSTRAP : boutons qui génère les classes correspondantes
let exemples = document.querySelectorAll(".exemple");

for (var exemple of exemples){
  let boutons = exemple.querySelectorAll("button"),
      demo = exemple.nextElementSibling.querySelector(".demo div");

  for(var bouton of boutons){
    bouton.addEventListener("click", function() {
        demo.className = '';
        let regex = /,/;
        var proprietes = this.textContent.split(" ");
        if(regex.test(proprietes)==true){
          for (var propr of proprietes){
            demo.classList.add(propr);
            //demo.innerHTML = propr;
          }
        }else{
            demo.classList.add(proprietes);
            //demo.innerHTML = proprietes;
        }
      });
    }
}
