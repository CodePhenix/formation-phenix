document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CRÉATION DU VOILE SOMBRE (OVERLAY)
    // On le crée une seule fois pour tout le site
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    // 2. SÉLECTION DES ÉLÉMENTS
    const toutesLesCartes = document.querySelectorAll('.logos-etap');
    const modalNoam = document.getElementById('modal-noam-descriptif');

    // 3. FONCTION UNIQUE DE FERMETURE
    // Cette fonction nettoie toutes les classes 'active' d'un coup
    const fermerTout = () => {
        toutesLesCartes.forEach(c => c.classList.remove('active'));
        if (modalNoam) modalNoam.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Réactive le scroll
    };

    // 4. GESTION DES CLICS (BOUCLE UNIQUE)
    toutesLesCartes.forEach(carte => {
        carte.addEventListener('click', function(e) {
            
            // ACTION : CLIC SUR LE BOUTON FERMER (X)
            // .closest permet de détecter le clic même si on touche l'intérieur du bouton
            if (e.target.closest('.close-preview')) {
                e.stopPropagation();
                fermerTout();
                return;
            }

            // ACTION : OUVERTURE
            // On bloque le comportement par défaut (liens) pour gérer nous-mêmes
            e.preventDefault();
            e.stopPropagation();

            // CAS A : C'est la modale Noam (détecté par data-type="modal")
            if (this.dataset.type === 'modal') {
                if (modalNoam) {
                    modalNoam.classList.add('active');
                    overlay.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Bloque le scroll
                }
            } 
            // CAS B : C'est une carte de la grille
            else {
                // Si la carte est déjà ouverte, on ouvre le lien stocké dans data-url
                if (this.classList.contains('active')) {
                    const url = this.dataset.url;
                    if (url) window.open(url, '_blank');
                } 
                // Sinon, on ferme les autres et on ouvre celle-là
                else {
                    fermerTout();
                    this.classList.add('active');
                }
            }
        });
    });

    // 5. FERMETURE VIA L'OVERLAY
    // Si on clique sur le fond sombre, on ferme tout
    overlay.addEventListener('click', fermerTout);

    // 6. FERMETURE DE LA MODALE NOAM (BOUTON X INTERNE)
    const closeBtnNoam = modalNoam ? modalNoam.querySelector('.close-preview') : null;
    if (closeBtnNoam) {
        closeBtnNoam.addEventListener('click', (e) => {
            e.stopPropagation();
            fermerTout();
        });
    }
});