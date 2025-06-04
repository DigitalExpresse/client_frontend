## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- **Node.js / Npm (version 21.6.1)**

Créez un fichier `.env` en vous basant sur le fichier `.env.example`. Vous n'aurez pas besoin de mettre à jour les variables.

## Mise en Route 

Pour run le projet en développement :
```bash
npm install
```
```bash 
npm run start
```


## Branches


#### "develop" 📡

Cette branche est utilisée comme branche de développement principale. Toutes les fonctionnalités en cours de développement sont fusionnées dans cette branche. Il est recommandé de créer une branche séparée pour chaque nouvelle fonctionnalité ou tâche et de les fusionner dans la branche develop une fois qu'elles sont terminées et testées.

#### "main" 🚀

Cette branche représente la base stable du code. Elle est utilisée pour les déploiements en production. Les fonctionnalités sont fusionnées dans cette branche depuis la branche develop lorsque le code est prêt à être publié.


