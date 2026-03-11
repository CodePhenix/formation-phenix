

let ouvrir = document.querySelector("#ouvrir");
let fermer = document.querySelector("#fermer");
let rouge = document.querySelector("#rouge");
let bleu = document.querySelector("#bleu");
let texte = document.querySelector("#texte");

ouvrir.addEventListener("click", function () {
    texte.style.display = "block";
});

fermer.addEventListener("click", function () {
    texte.style.display = "none";
    texte.style.color = "black";
});

rouge.addEventListener("click", function() {
    texte.style.color = "red";
});

bleu.addEventListener("click", function () {
    texte.style.color = "blue";
});



