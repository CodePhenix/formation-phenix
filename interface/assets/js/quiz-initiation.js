let main=document.querySelector("main"),
quiz=document.querySelector("#quiz");

      let totalRep= new Array();
      /*Constructions de la structure*/
       for (var question of questions) {
           let fieldset=document.createElement("fieldset");
           let questionNum="question"+questions.indexOf(question);
           fieldset.id=questionNum;
           let intituleQuestion="<legend>"+ question.intitule +" </legend>"

           fieldset.classList.add("question");
           quiz.appendChild(fieldset);
           fieldset.innerHTML+= intituleQuestion;

           let containerQuestion=document.createElement("div");
           fieldset.appendChild(containerQuestion);

           for(var reponse in question.reponses){
             let div=document.createElement("div");
             //console.log(reponse);
             let choix="<input name='question"+questionNum+"' type='radio' value="+reponse+" id='"+questionNum+"'>\
                        <label for='"+questionNum+"'>"+question.reponses[reponse]+"</label>"

             containerQuestion.appendChild(div);
             div.innerHTML += choix;
           }
          totalRep.push(question.bonneReponse)
        }

      /*Navigation entre les questions*/
      let suivant =   document.getElementById("next"),
          precedent =   document.getElementById("prev"),
          navButtons =   document.getElementById("navigation"),
          resultat =   document.getElementById("resultat"),
          questionActive = document.querySelector('.question');

      questionActive.classList.add('active')

      suivant.addEventListener("click", function(){
        var currentQuestion = document.querySelector('.question.active');

        if(precedent.classList.contains('no-display')){
          precedent.classList.remove('no-display');
        }
        if (currentQuestion.nextElementSibling) {
          currentQuestion.classList.remove('active');
          currentQuestion.nextElementSibling.classList.add('active');
        }
      });

      precedent.addEventListener("click", function(){
        var currentQuestion = document.querySelector('.question.active');

        if(currentQuestion.previousElementSibling){
          currentQuestion.classList.remove('active');
          currentQuestion.previousElementSibling.classList.add('active');
        }
      });

      navButtons.addEventListener("click", function(){
        var currentQuestion = document.querySelector('.question.active');

        if(currentQuestion.nextElementSibling==null){
          suivant.classList.add('no-display');
          resultat.classList.remove('no-display');
        }else{
          suivant.classList.remove('no-display');
        }
        if(currentQuestion.previousElementSibling==null){
          precedent.classList.add('no-display');
        }
      });

      /*Résultat*/
      resultat.addEventListener('click', function(){
        let note = 0;

        for (var question of questions) {
          let questionNum="question"+questions.indexOf(question),
              fields=document.querySelector("#"+questionNum),
              inputs=fields.querySelectorAll('input'),
              allBonneRep= new Array(),
              userRep= new Array();

          /*Comparaison des réponses et calcul de la note*/
          allBonneRep.push(question.bonneReponse)

          for(var input of inputs){
            if(input.checked==true){
                userRep.push(input.value);
             }
              /*Affichage de la correction*/
             if(allBonneRep.includes(input.value)){
                input.nextElementSibling.style.color="#52d3aa";
             }else{
                input.nextElementSibling.style.color="red";
             }
          }
          for (var rep of userRep){
            if(allBonneRep.includes(rep)){
              note++;
            }
          }
        }
        /*Affichage du résultat*/
        quiz.style.pointerEvents ='none';
        quiz.classList.add("no-display");
        navButtons.classList.add("no-display");

        let div=document.createElement("div");
        div.id= "result";
        let result="<h6>Résultat :<br>\
                      <b>"+note+"/"+totalRep.length+"</b>\
                      </h6>\
                      <button id='correction'>Voir la correction</button>";
        div.innerHTML=result;
        main.appendChild(div);
        /*Structure de la correction*/
        let correction=document.querySelector("#correction");
        correction.addEventListener('click', function(){
          let result=document.querySelector("#result");
          result.parentElement.removeChild(result);
          quiz.classList.remove("no-display");
          navButtons.classList.remove("no-display");
        });
      })
