#!/bin/bash

# Fonction pour générer un nombre aléatoire entre 1 et 10000
getRandomNumber() {
  echo $((1 + $RANDOM % 10000))
}

# Chemin du dossier client_frontend
sourceDirectory="./client_frontend"

# Nouveau nom pour le dossier (todelete + nombre aléatoire)
randomNum=$(getRandomNumber)
newDirectoryName="todelete$randomNum"

# Renommer le dossier client_frontend
mv "$sourceDirectory" "$newDirectoryName"
if [ $? -ne 0 ]; then
  echo "Erreur lors du renommage du dossier"
  exit 1
fi

echo "Le dossier $sourceDirectory a été renommé en $newDirectoryName"

# Cloner le dépôt Git
gitRepoURL="https://github.com/DigitalExpresse/client_frontend.git" # Remplacez par l'URL de votre repo Git
git clone "$gitRepoURL" "$sourceDirectory"
if [ $? -ne 0 ]; then
  echo "Erreur lors du clonage du dépôt Git"
  exit 1
fi

echo "Le dépôt Git a été cloné avec succès dans $sourceDirectory"

# Sourcing de nvm.sh
# shellcheck disable=SC1090
source ~/.nvm/nvm.sh

# Installation des dépendances
cd "$sourceDirectory" || exit
npm install
if [ $? -ne 0 ]; then
  echo "Erreur lors de l'installation des dépendances avec npm install"
  exit 1
fi

# Copie du fichier .env
cp ../.env ./.env

# Build du projet
npm run build
if [ $? -ne 0 ]; then
  echo "Erreur lors de la construction du projet avec npm run build"
  exit 1
fi

echo "Le projet a été construit avec succès"
