let canvas = document.getElementById('morpions');
let contexteCanvas = canvas.getContext('2d');

let largeurCellule = canvas.width/3;
let hauteurCellule = canvas.height/3;

dessinerGrille();

function dessinerGrille () {
    contexteCanvas.strokeStyle = 'black';
    contexteCanvas.lineWidth = 10;



    contexteCanvas.beginPath();
    contexteCanvas.moveTo(largeurCellule, 0 );
    contexteCanvas.lineTo(largeurCellule, 3*hauteurCellule);
    contexteCanvas.stroke();

    contexteCanvas.beginPath();
    contexteCanvas.moveTo(2*largeurCellule, 0 );
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
