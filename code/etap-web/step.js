document.addEventListener('DOMContentLoaded', () => {
    // 1. Création de l'overlay
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    // 2. Éléments Noam
    const triggerNoam = document.getElementById('trigger-noam'); 
    const modalNoam = document.getElementById('modal-noam-descriptif'); 
    // On cible spécifiquement le bouton X de la grande carte Noam
    const closeBtnNoam = modalNoam ? modalNoam.querySelector('.close-preview') : null;

    const closeNoam = () => {
        if(modalNoam) modalNoam.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (triggerNoam && modalNoam) {
        triggerNoam.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            modalNoam.classList.add('active'); 
            overlay.classList.add('active');   
            document.body.style.overflow = 'hidden'; 
        });
    }

    // Fermeture de la grande carte
    if (closeBtnNoam) {
        closeBtnNoam.addEventListener('click', (e) => {
            e.stopPropagation();
            closeNoam();
        });
    }
    overlay.addEventListener('click', closeNoam);

    // 3. Gestion des autres logos (Grille)
    const autresLogos = document.querySelectorAll(".logos-etap:not(#trigger-noam)");
    autresLogos.forEach(item => {
        item.addEventListener('click', function(e) {
            // IMPORTANT : Si on clique sur le bouton fermer (X) d'une petite carte
            if (e.target.closest('.close-preview')) {
                this.classList.remove('active');
                e.stopPropagation();
                return;
            } 
            
            // Sinon, si la carte n'est pas active, on l'ouvre
            if (!this.classList.contains('active')) {
                e.preventDefault(); 
                autresLogos.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

/*document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Cible la carte descriptive par son nouvel ID
    const triggerNoam = document.querySelector('.logos-etap'); 
    const modalNoam = document.getElementById('modal-noam-descriptif'); 
    const closeBtnNoam = modalNoam ? modalNoam.querySelector('.close-preview') : null;
    
    // Création du voile sombre
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    if (triggerNoam && modalNoam) {
        triggerNoam.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            modalNoam.classList.add('active'); // Ouvre la grande carte
            overlay.classList.add('active');   // Affiche le voile
            document.body.style.overflow = 'hidden'; 
        });
    }


const closeNoam = () => {
    if(modalNoam) modalNoam.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Réactive le scroll
};

// Ce listener lie le bouton X à la fonction de fermeture
if (closeBtnNoam) {
    closeBtnNoam.addEventListener('click', (e) => {
        e.stopPropagation();
        closeNoam();
    });
}
    // 2. Gestion des autres logos (Grille classique)
    const autresLogos = Array.from(document.querySelectorAll(".logos-etap")).slice(1);
    autresLogos.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('close-preview')) {
                this.classList.remove('active');
                e.stopPropagation();
                return;
            } 
            if (!this.classList.contains('active')) {
                e.preventDefault(); 
                autresLogos.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

// Fermer si on clique sur le voile noir (en dehors de la carte)
overlay.addEventListener('click', closeNoam);*/


/*var logos = document.querySelectorAll(".logos-etap")
for (i = 0; i < logos.length; i++) {
  logos[i].addEventListener('click', function() {
    this.style.opacity = 0.4;
  });
}
enlever celui d'en haut plus tard

     document.querySelectorAll(".logos-etap").forEach(function(item) {
        item.addEventListener('click', function(e) {
            
            // 1. Détection du clic sur le bouton fermer (X)
            if (e.target.classList.contains('close-preview')) {
                this.classList.remove('active');
                e.stopPropagation();
                e.preventDefault(); 
                return;
            } 
            
            // 2. Si la carte n'est pas encore active (Affichage de la carte au 1er clic)
            if (!this.classList.contains('active')) {
                e.preventDefault(); 
                // Fermer les autres cartes ouvertes
                document.querySelectorAll(".logos-etap").forEach(l => l.classList.remove('active'));
                // Activer celle-ci
                this.classList.add('active');
            }
            
            // 3. Si la carte est déjà active (La redirection vers le lien se fait naturellement au 2ème clic)
        });
    });
// On attend que le DOM soit chargé pour être sûr que les éléments existent
document.addEventListener('DOMContentLoaded', () => {
    
    const logoPrincipal = document.querySelector('.logo-principal');
    const conteneurGlobal = document.querySelector('.logos-etap');
    const boutonFermer = document.querySelector('.close-preview');

    // 1. Action lors du clic sur le logo principal
    if (logoPrincipal) {
        logoPrincipal.addEventListener('click', () => {
            // Ajoute ou retire la classe 'active'
            conteneurGlobal.classList.toggle('active');
            console.log("Le logo a été cliqué, classe 'active' basculée.");
        });
    }

    // 2. Action pour fermer via le bouton X
    if (boutonFermer) {
        boutonFermer.addEventListener('click', (e) => {
            // Empêche le clic de se propager au parent si nécessaire
            e.stopPropagation(); 
            conteneurGlobal.classList.remove('active');
        });
    }
});*/ 

/*const closeNoam = () => {
        if(modalNoam) modalNoam.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; 
    };

    if (closeBtnNoam) closeBtnNoam.addEventListener('click', closeNoam);
    overlay.addEventListener('click', closeNoam);
*/