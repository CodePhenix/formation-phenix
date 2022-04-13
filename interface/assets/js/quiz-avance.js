let main=document.querySelector("main"),
    quiz=document.querySelector("#quiz"),
    points = 0,
    inputs,
    scoreContainer = document.querySelector('#score'),
    results = document.querySelector('#result'),
    pointsNum = document.querySelector('#pts span'),
    lifeContent = document.querySelector('#hp'),
    lifeNum = document.querySelector('#lasts'),
    life = ["★", "★", "★", "★", "★"],
    maxPoints = life.length+questions.length,
    retry = document.querySelector('#retry'),
    numberContent = document.querySelector('#currentNumber'),
    totalContent = document.querySelector('#totalQuestion'),
    currentNumber = 1,
    totalQuestion = questions.length;

scoreContainer.classList.add("fix-bottom");
numberContent.innerHTML=currentNumber;
totalContent.innerHTML=totalQuestion;

randomiser();
nextLvl();

retry.addEventListener('click', function(){
  window.location.reload();
})


function randomiser(){
    let randomId = Math.floor(Math.random() * questions.length),
        randomQuestion = questions[randomId],
        questionNum="question"+questions.indexOf(randomQuestion),
        intituleQuestion="<legend>"+ randomQuestion.intitule +" </legend>",
        fieldset=document.createElement("fieldset");

    fieldset.id=questionNum;
    fieldset.classList.add("question", "active");
    quiz.appendChild(fieldset);
    fieldset.innerHTML= intituleQuestion;

    let containerQuestion=document.createElement("div");
    fieldset.appendChild(containerQuestion);

    for(var reponse in randomQuestion.reponses){
        let div=document.createElement("div");
        let choix="<input name='question"+questionNum+"' type='radio' value="+reponse+" id='"+questionNum+"'>\
                   <label for='"+questionNum+"'>"+randomQuestion.reponses[reponse]+"</label>"

        containerQuestion.appendChild(div);
        div.innerHTML += choix;
    }
}

function nextLvl(){
  let currentQuestion = document.querySelector("fieldset"),
      currentID = currentQuestion.id.replace("question", "");

  // Vérification si il reste des vies
  if(life.length==0){
    scoreContainer.classList.add("no-display", "fade-top-anim");
    lifeContent.classList.add("no-display");
    quiz.innerHTML = "<h4>PERDU !</h4>";

    score ();

    setTimeout( function(){
      scoreContainer.classList.remove("fix-bottom", "no-display");
      retry.classList.remove("no-display");
    }, 2000);
  }

  // Affichage des points
  pointsNum.innerHTML = points;
  // Gère les animations
  pointsNum.classList.add("flip");
  lifeNum.classList.remove('backslide');
  lifeNum.classList.remove('backslide2');
  lifeNum.classList.remove('backslide3');

  for (var hp of life){
    lifeNum.innerHTML += hp;
  }
  inputs=document.querySelectorAll('input');

  for(var input of inputs){

    input.addEventListener("click", function(){
        pointsNum.classList.remove("flip");
        //Gère la pagination
        if(currentNumber<totalQuestion){
          currentNumber++;
          numberContent.innerHTML=currentNumber;
        }
        // Vérification de la réponse et calcul des points / vies
        if(this.value==questions[currentID].bonneReponse){
          points++;
          correct();
        }
        else{
          wrong();
          if(life.length==2){
            lifeNum.classList.add('backslide2');
          }else if(life.length<=1){
            lifeNum.classList.add('backslide3');
          }else{
            lifeNum.classList.add('backslide');
          }
          life.pop();
        }
       // Si il n'y à plus de questions
       if(questions.length==1){
          scoreContainer.classList.add("no-display", "fade-top-anim");
          quiz.removeChild(currentQuestion);
          questions.splice(currentID, 1)
          lifeNum.innerHTML = "";
          pointsNum.innerHTML = points;
          // Affichage du score
           setTimeout( function(){
             scoreContainer.classList.remove("fix-bottom", "no-display");
             let lifeNumber = life.length,
                 div = document.createElement("div");

             div.id = "lifeCount";
             div.innerHTML= "<h6>★ <span>" + life.length + "</span></h6>";
             scoreContainer.querySelector('div').insertBefore(div, lifeContent);
           }, 2000);

           setTimeout( function(){
             lifeCount();
           }, 3000);

           lifeContent.classList.add("no-display");
           for (var hp of life){
             lifeNum.innerHTML += hp;
           }
         }
       // Question suivante
       else{
          // AJOUTE UNE VIE TOUS LES X POINTS
          var x = 10;
          var multiple = points % x;
            if (this.value==questions[currentID].bonneReponse && multiple == 0 && life.length<5 && points!=0) {
              quiz.removeChild(currentQuestion);
              questions.splice(currentID, 1);
              setTimeout( function(){
                  oneUp();
              }, 2000);
            }
            // Question suivante
            else{
              quiz.removeChild(currentQuestion);
              questions.splice(currentID, 1);
              setTimeout( function(){
                  randomiser();
                  lifeNum.innerHTML = "";
                  nextLvl();
                }, 2000);
            }
         }
    })
  }
}

// Calcul des points
function correct(){
  let div = document.createElement("div");

  div.id = "correct";
  div.innerHTML = "<h6>Bonne réponse !</h6>\
                   <h5>+1</h5>";
  quiz.appendChild(div);

  setTimeout( function(){
    quiz.removeChild(div);
  }, 2000);
}

// Calcul des vies
function wrong(){
  let div = document.createElement("div");

  div.id = "wrong";
  div.innerHTML = "<h6>Mauvaise réponse !</h6>\
                   <h5>-1 <span>★</span></h5>";
  quiz.appendChild(div);

  setTimeout( function(){
    quiz.removeChild(div);
  }, 2000);
}

// Ajout d'une vie
function oneUp(){
  let div = document.createElement("div");

  div.id = "oneup";
  div.innerHTML = "<h6>Continuez comme ça !</h6>\
                   <h5>+1 <span>★</span></h5>";
  life.push("★");
  quiz.appendChild(div);

  setTimeout( function(){
    quiz.removeChild(div);
    randomiser();
    lifeNum.innerHTML = "";
    nextLvl();
  }, 2000);
}

// Compte les vies et ajoute autant de points
function lifeCount(){
  let lifeNumber = life.length,
      div = scoreContainer.querySelector('#lifeCount');

  function timeRunnning(){
        lifeNumber--;
        points++;
        div.querySelector("span").innerHTML=lifeNumber
        pointsNum.innerHTML = points;

        if(lifeNumber>0){
          interval = setTimeout(timeRunnning, 1000);
        }
        else{
          scoreContainer.querySelector('div').removeChild(div);
          score ();
          retry.classList.remove("no-display");
        }
  }
  timeRunnning();
}

// Affichage du résultat
function score (){
  if(points==maxPoints){
    results.innerHTML = "<h4>PARFAIT !</h4>";
  }
  else if(points>=(maxPoints)/1.2){
    results.innerHTML = "<h4>Très bien !</h4>";
  }
  else if(points>=(maxPoints)/1.5){
    results.innerHTML = "<h4>Bien !</h4>";
  }
  else if(points>=(maxPoints)/1.8){
    results.innerHTML = "<h4>Assez bien</h4>";
  }
  else if(points>=(maxPoints)/2){
    results.innerHTML = "<h4>Pas mal</h4>";
  }
  else{
    results.innerHTML = "<h4>Peut mieux faire</h4>";
  }
}
