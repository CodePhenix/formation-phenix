# Commandes Terminal Linux

Voici une liste des commandes de base à taper dans une ligne de commande, pour naviguer et gérer des fichiers depuis votre terminal, avec leur description et fonctionnement.

Votre terminal permet d'utiliser un shell qui communique avec le système d’exploitation de votre ordinateur.

## Commandes Principales Terminal Linux – Tableau de Référence

| Commande | Usage | Description | Exemple |
|----------|-------|------------|---------|
| `pwd` | `pwd` | Affiche le chemin du répertoire courant | `pwd` |
| `ls` | `ls (options)` | Liste fichiers et dossiers | `ls`<br>`ls -l` ou `ls -sh` (liste détaillée)<br>`ls -a` (affiche fichiers cachés) |
| `cd` | `cd chemin` | Change le répertoire courant | `cd /home/user/Documents`<br>`cd ..` (remonte d’un niveau)<br>`cd ~` (répertoire personnel)<br>`cd ./dossier (équivalent à cd dossier)` |
| `touch` | `touch fichier` | Crée un fichier vide | `touch nouveau_fichier.txt` |
| `mkdir` | `mkdir (options) dossier` | Crée un ou plusieurs dossiers | `mkdir nouveau_dossier`<br>`mkdir -p dossier1/dossier2` |
| `rm` | `rm (options) fichier` | Supprime fichiers ou dossiers | `rm fichier.txt`<br>`rm -r dossier` (supprime dossier et contenu) <br>`rm -i fichier.txt` (demande confirmation pour chaque fichier) |
| `cp` | `cp (options) destination` | Copie fichiers ou dossiers | `cp fichier.txt /home/user/Documents/`<br>`cp -r dossier1 dossier2` (copie un dossier et tout son contenu) dans un autre dossier si ce dernier existe |
| `mv` | `mv source destination` | Déplace ou renomme | `mv fichier.txt /home/user/Documents/`<br>`mv ancien.txt nouveau.txt` |
| `less` | `less fichier` | Affiche le contenu d’un fichier page par page (lecture confortable pour fichiers longs) | `less fichier.txt` |
| `cat` | `cat fichier` | Affiche le contenu d’un ou plusieurs fichiers dans le terminal (lecture rapide pour petits fichiers) | `cat fichier.txt`<br>`cat f1.txt f2.txt` (affiche les deux à la suite) |
| `grep` | `grep (options) "motif" fichier` | Cherche une chaîne de caractères | `grep "erreur" log.txt`<br>`grep -i "erreur" log.txt` en ignorant la casse (majuscules/minuscules) |
| `exit` | `exit` | Ferme le terminal ou termine la session | `exit` |
| `sudo` | `sudo commande` | Exécute une commande en tant qu’administrateur | `sudo apt update` |
| `help` | `help commande` | Affiche une aide rapide pour les commandes internes | `help cd` |
| `man` | `man commande` | Affiche le manuel complet d’une commande avec toutes les options | `man ls` |
| `code` | `code (options) chemin` | Ouvre Visual Studio Code depuis le terminal | `code` (ouvre VS Code vide)<br>`code .` (ouvre le dossier courant)<br>`code mon_fichier.py`<br>`code -g mon_fichier.py:10` |
| `subl` | `subl (options) chemin` | Ouvre Sublime Text depuis le terminal | `subl` (ouvre Sublime vide)<br>`subl .` (ouvre le dossier courant)<br>`subl mon_fichier.py`<br>`subl mon_fichier.py:10` |

---

## Déplacement dans l’arborescence
- `.` → Répertoire courant.
- `..` → Répertoire parent.
- `~` → Répertoire personnel de l’utilisateur.
- `/` → Racine du système de fichiers.
- Exemple :
  ```bash
  cd ../..       # Remonte de deux niveaux
  cd ~/Documents # Va dans le dossier Documents de l’utilisateur
  cd ./dossier ou cd dossier   # Va dans le dossier situé dans le répertoire courant
  cd ../dossier2   # Va dans le dossier parent (remonte de 1 niveau) puis dans 'dossier2'
