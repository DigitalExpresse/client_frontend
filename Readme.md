# Documentation pour déploiement

## Prérequis
Avant de commencer le déploiement, assurez-vous que votre système dispose des éléments suivants :

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- **Npm (installé avec Node.js)**

## Configuration
### 1. Cloner le projet
```bash
git clone 
```
###
### 2. Fichier `.env`
#### Créer un fichier `.env` à la racine du projet
#### Remplir le fichier `.env` avec les informations nécessaires
```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_DOMAIN=https://restaurant-lebouddoir-aix.fr
REACT_APP_DATA_MODE=static
REACT_APP_CARD_ONLY_PDF=true
```

#### Explications des variables
- `REACT_APP_API_URL` : URL de l'API
- `REACT_APP_DOMAIN` : URL du site web
- `REACT_APP_DATA_MODE` : Mode de récupération des données (static ou dynamic)
- `REACT_APP_CARD_ONLY_PDF` : Afficher uniquement les cartes en PDF (true ou false)

###
### 3. Fichier `.htaccess`
#### Créer un fichier `.htaccess` à la racine du projet (si il n'existe pas déjà)
#### Ajouter le code suivant dans le fichier `.htaccess`

```.htaccess
RewriteEngine On
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

RewriteRule ^ /index.html [L]
```

###
## Déploiement
#### 1. Installer les dépendances
```bash
npm install
```

#### 2. Lancer l'application
```bash
npm run build
```