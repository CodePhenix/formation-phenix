let main=document.querySelector("main"),
    select=document.querySelector("#select"),
    selected=document.querySelector("#selected"),
    sujets=document.createElement("fieldset"),
    legend=document.createElement("legend"),
    startQuiz=document.createElement("button"),
    sujetContent=document.createElement("div");

legend.textContent= "Sélectionner les sujets dont vous souhaitez tester vos connaissances :";
select.appendChild(legend);
startQuiz.textContent="Lancer le quiz";

select.appendChild(sujets);

for (var subject of allSubjects){
      let sujet= "<div>\
                 <input type='checkbox' name='sujets' value='"+subject+"' id="+subject+">\
                 <label for="+subject+">"+subject+"</label>\
                 </div>";
      sujetContent.innerHTML+=sujet;

}
sujets.appendChild(sujetContent);
select.appendChild(startQuiz);

let selectedSubject= new Array();

startQuiz.addEventListener("click", function(){
    let inputs=document.querySelectorAll("input:checked"),
        nostart=document.createElement("p");

    for(var input of inputs){

      if(allSubjects.includes(input.value)){
        selectedSubject = selectedSubject.concat(eval(input.value))
      }
    }
    for (var sub of allSubjects){
      for(var subTag of eval(sub) ){
        subTag.tag = sub;
      }
    }
    if (selectedSubject.length==0){
      nostart.classList.add("fadeIn");
      nostart.textContent="Veuillez sélectionner au moins un sujet.";
      select.appendChild(nostart);
    }else{
      main.removeChild(select)
      selected.classList.remove('no-display');
      maxPoints = life.length+selectedSubject.length;
      totalQuestion = selectedSubject.length;
      totalContent.innerHTML=totalQuestion;
      randomiser();
      checkPoint();
    }
})

let quiz=document.querySelector("#quiz"),
    points = 0,
    inputs,
    scoreContainer = document.querySelector('#score'),
    results = document.querySelector('#result'),
    pointsNum = document.querySelector('#pts span'),
    lifeContent = document.querySelector('#hp'),
    lifeNum = document.querySelector('#lasts'),
    life = ["★", "★", "★", "★", "★"],
    maxPoints,
    retry = document.querySelector('#retry'),
    numberContent = document.querySelector('#currentNumber'),
    totalContent = document.querySelector('#totalQuestion'),
    currentNumber = 1,
    totalQuestion = "?";

scoreContainer.classList.add("fix-bottom");
numberContent.innerHTML=currentNumber;
totalContent.innerHTML=totalQuestion;

retry.addEventListener('click', function(){
  window.location.reload();
})

function randomiser(){
    let randomId = Math.floor(Math.random() * selectedSubject.length),
        randomQuestion = selectedSubject[randomId],
        questionNum="question"+selectedSubject.indexOf(randomQuestion),
        fieldset=document.createElement("fieldset");

    fieldset.id=questionNum;
    fieldset.classList.add("question", "active");
    quiz.appendChild(fieldset);

    let subjectTag =document.createElement("p");
    subjectTag.classList.add("tag");
    subjectTag.innerHTML=randomQuestion.tag;
    fieldset.appendChild(subjectTag);

    let legend=document.createElement("legend");
    legend.innerHTML= randomQuestion.intitule;
    fieldset.appendChild(legend);

    let containerQuestion=document.createElement("div");
    fieldset.appendChild(containerQuestion);
    //Champ de réponse à renseigner
      let div=document.createElement("div");
      let answer="<input type='text' >"
      containerQuestion.appendChild(div);
      div.innerHTML = answer;

      div.querySelector('input').focus();
}

function checkPoint(){
  let currentQuestion = document.querySelector("fieldset"),
      currentID = currentQuestion.id.replace("question", ""),
      possibleAnswers= selectedSubject[currentID].bonneReponse;

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

  inputEnter=document.querySelector('input[type="text"]');
  if(inputEnter!=null){
    inputEnter.addEventListener("keypress", function(){
      pointsNum.classList.remove("flip");
      if(event.keyCode == 13){
        event.preventDefault();
        if(currentNumber<totalQuestion){
          currentNumber++;
          numberContent.innerHTML=currentNumber;
        }
        if(possibleAnswers.includes(inputEnter.value)){
          correct();
        }
        else{
          wrong();
        }
        nextLvl();
      }
    })
  }
}

function nextLvl(){
  let currentQuestion = document.querySelector("fieldset"),
      currentID = currentQuestion.id.replace("question", ""),
      possibleAnswers = selectedSubject[currentID].bonneReponse;

  // Si il n'y à plus de questions
  if(selectedSubject.length==1){
     scoreContainer.classList.add("no-display", "fade-top-anim");
     quiz.removeChild(currentQuestion);
     selectedSubject.splice(currentID, 1)
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
       if (possibleAnswers.includes(inputEnter.value) && multiple == 0 && life.length<5 && points!=0) {
         quiz.removeChild(currentQuestion);
         selectedSubject.splice(currentID, 1);
         setTimeout( function(){
             oneUp();
         }, 2000);
       }
       // Question suivante
       else{
         quiz.removeChild(currentQuestion);
         selectedSubject.splice(currentID, 1);
         setTimeout( function(){
             randomiser();
             lifeNum.innerHTML = "";
             checkPoint();
           }, 2000);
       }
    }
}

// Calcul des points
function correct(){
  points++;

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

  if(life.length==2){
    lifeNum.classList.add('backslide2');
  }else if(life.length<=1){
    lifeNum.classList.add('backslide3');
  }else{
    lifeNum.classList.add('backslide');
  }
  life.pop();
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
    checkPoint();
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
