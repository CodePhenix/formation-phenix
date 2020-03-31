let canvas = document.getElementById('morpions');
let contexteCanvas = canvas.getContext('2d');

let largeurCellule = canvas.width/3;
let hauteurCellule = canvas.height/3;

let aQuiDeJouer = false;

let possibleVictoire = [
    [0,1,2], [3,4,5], [6,7,8], // lignes
    [0,3,6], [1,4,7], [2,5,8], // colonnes
    [0,4,8], [2,4,6]           // diagonales
]

let joueurRond = [],
    joueurCarre = [];


souris = {
    x: -1,
    y: -1,
};

canvas.addEventListener('mouseout', function () {
    souris.x = souris.y = -1;
});

canvas.addEventListener('mousemove', function (e) {
    let x = e.pageX - canvas.offsetLeft,
        y = e.pageY - canvas.offsetTop;

    souris.x = x;
    souris.y = y;
});

canvas.addEventListener('click', function (e) {
    jouerUnTour(souris);
    console.log(victoire());
    if (victoire() === joueurRond) {
        document.querySelector("#message").innerHTML += "<br>Les ronds ont gagné";
    }

    else if (victoire() === joueurCarre) {
        document.querySelector("#message").innerHTML += "<br>Les carres ont gagné";
    }


});


dessinerGrille();

function caseCanvasParCoordonnees (x, y) {
    return (Math.floor(x / largeurCellule) % 3) + Math.floor(y / hauteurCellule) * 3;
}

function jouerUnTour(souris) {
    let centreCellule = new Object();
    centreCellule.x = Math.floor(souris.x / largeurCellule)*largeurCellule+1/2*largeurCellule;
    centreCellule.y = Math.floor(souris.y / hauteurCellule)*hauteurCellule+1/2*hauteurCellule;
    if (aQuiDeJouer === false){
        dessinerRond(centreCellule);
        joueurRond.push(caseCanvasParCoordonnees(souris.x, souris.y));
    }
    else{
        dessinerCroix(centreCellule);
        joueurCarre.push(caseCanvasParCoordonnees(souris.x, souris.y));
    }
    aQuiDeJouer = !aQuiDeJouer;
}

function dessinerCroix (centreCellule) {
    
    contexteCanvas.beginPath();
    contexteCanvas.moveTo(centreCellule.x-largeurCellule/2, centreCellule.y-hauteurCellule/2);
    contexteCanvas.lineTo(centreCellule.x+largeurCellule/2, centreCellule.y+hauteurCellule/2);
    contexteCanvas.stroke();
    
    contexteCanvas.beginPath();
    contexteCanvas.moveTo(centreCellule.x+largeurCellule/2, centreCellule.y-hauteurCellule/2);
    contexteCanvas.lineTo(centreCellule.x-largeurCellule/2, centreCellule.y+hauteurCellule/2);
    contexteCanvas.stroke();
}

function dessinerRond (centreCellule) {
    contexteCanvas.beginPath();
    contexteCanvas.arc(centreCellule.x, centreCellule.y, hauteurCellule / 2.5, 0, Math.PI*2 );
    contexteCanvas.stroke();
}

function dessinerGrille () {
    contexteCanvas.strokeStyle = 'black';
    contexteCanvas.lineWidth = 10;



    contexteCanvas.beginPath();
    contexteCanvas.moveTo(largeurCellule, 0 );
    contexteCanvas.strokeStyle = "blue";

    contexteCanvas.lineTo(largeurCellule, 3*hauteurCellule);
    contexteCanvas.stroke();

    contexteCanvas.beginPath();
    contexteCanvas.moveTo(2*largeurCellule, 0 );
    contexteCanvas.strokeStyle = "green";
    contexteCanvas.lineTo(2*largeurCellule, 3*hauteurCellule);
    contexteCanvas.stroke();

    contexteCanvas.beginPath();
    contexteCanvas.moveTo(0, hauteurCellule );
    contexteCanvas.lineTo(3*largeurCellule, hauteurCellule);
    contexteCanvas.stroke();

    contexteCanvas.beginPath();
    contexteCanvas.moveTo(0, 2*hauteurCellule );
    contexteCanvas.lineTo( 3*largeurCellule, 2*hauteurCellule);
    contexteCanvas.stroke();
}

function victoire () {
    for (let element of possibleVictoire) {
        if (estUneSousListe(element, joueurRond)) {
            return joueurRond;
        }
        else if (estUneSousListe(element, joueurCarre)) {
            return joueurCarre;
        }
    }

    return false;
    
}


function estUneSousListe (sousListe, liste) {
    let compteur = 0;
    if (sousListe.length <= liste.length) {
        for (let element of sousListe) {
            if (liste.indexOf(element) > -1) {
                compteur ++;
            }
        }
        if (compteur == sousListe.length) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}


