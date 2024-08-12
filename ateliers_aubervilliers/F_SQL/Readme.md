## Installation

1/ Installer postgresql

```
sudo apt-get update
sudo apt-get upgrade
sudo apt install postgresql postgresql-contrib -y
```

2/ Setup la db

```
sudo -u postgres psql

> CREATE USER admin WITH PASSWORD 'admin' SUPERUSER;
> CREATE DATABASE librairie;
```

Puis `Ctrl + d` pour quitter

3/ Setup pgadmin4
https://www.pgadmin.org/download/pgadmin-4-apt/

## Exercice

Réaliser cette table
id, titre, auteur, edition, nb_pages
1, Seigneur des anneaux I, Tolkien, Gallimard, 1080
2, Seigneur des anneaux II, Tolkien, Gallimard, 809
3, Seigneur des anneaux III, Tolkien, Gallimard, 1324
4, Harry Potter, JK Rownling, Gallimard, 450
5, Six étoiles, A. Dupont, LeStade, 230
