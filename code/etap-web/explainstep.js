document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CRÉATION DU VOILE SOMBRE (OVERLAY)
    // On crée une div vide en mémoire, on lui donne l'ID pour le CSS, et on l'ajoute au body
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    // 2. RÉCUPÉRATION DES ÉLÉMENTS POUR LA CARTE NOAM (MODALE)
    // Le logo qui sert de déclencheur, la grande carte elle-même et son bouton de fermeture
    const triggerNoam = document.getElementById('trigger-noam'); 
    const modalNoam = document.getElementById('modal-noam-descriptif'); 
    const closeBtnNoam = modalNoam ? modalNoam.querySelector('.close-preview') : null;

    // FONCTION DE FERMETURE DE LA MODALE
    // Retire les classes 'active', et réactive le défilement (scroll) de la page derrière
    const closeNoam = () => {
        if(modalNoam) modalNoam.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Libère le scroll du site
    };

    // ACTION : OUVRIR LA MODALE NOAM
    // Au clic sur le logo principal, on affiche la carte, le voile sombre et on bloque le scroll
    if (triggerNoam && modalNoam) {
        triggerNoam.addEventListener('click', (e) => {
            e.preventDefault();    // Empêche le navigateur de suivre un lien éventuel
            e.stopPropagation();   // Empêche le clic de "traverser" vers d'autres éléments
            modalNoam.classList.add('active'); 
            overlay.classList.add('active');   
            document.body.style.overflow = 'hidden'; // Empêche de scroller pendant la lecture
        });
    }

    // ACTION : FERMER VIA LE BOUTON X
    // Si le bouton X existe dans la grande carte, il déclenche la fonction de fermeture
    if (closeBtnNoam) {
        closeBtnNoam.addEventListener('click', (e) => {
            e.stopPropagation(); // Évite que le clic ne soit considéré comme un clic sur la carte
            closeNoam();
        });
    }

    // ACTION : FERMER VIA LE CLIC SUR LE VOILE
    // Si l'utilisateur clique n'importe où sur le fond sombre, on ferme la modale
    overlay.addEventListener('click', closeNoam);

    // 3. GESTION DE LA GRILLE DE LOGOS (AUTRES LOGOS)
    // On sélectionne tous les logos sauf celui de Noam (le déclencheur principal)
    const autresLogos = document.querySelectorAll(".logos-etap:not(#trigger-noam)");
    
    autresLogos.forEach(item => {
        item.addEventListener('click', function(e) {
            
            // ACTION : CLIC SUR LE PETIT BOUTON X D'UNE CARTE DE LA GRILLE
            // Si l'élément cliqué est le bouton X (ou contenu dans le bouton X)
            if (e.target.closest('.close-preview')) {
                this.classList.remove('active'); // Ferme la petite carte
                e.stopPropagation();             // Empêche l'ouverture immédiate par le clic parent
                return;                          // Arrête l'exécution ici
            } 
            
            // ACTION : OUVERTURE D'UNE CARTE DE LA GRILLE
            // Si la carte n'est pas encore active, on ferme les autres et on ouvre celle-ci
            if (!this.classList.contains('active')) {
                e.preventDefault(); 
                autresLogos.forEach(l => l.classList.remove('active')); // Nettoyage des autres
                this.classList.add('active'); // Activation de la carte cliquée
            }
            
            // Note : Si la carte est déjà active, le lien (<a>) fonctionnera normalement au prochain clic
        });
    });
});