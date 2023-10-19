#!/bin/bash

# Chemin du dossier client_frontend
sourceDirectory="./client_frontend"


# Supprimer le dossier client_frontend
rm -rf "$sourceDirectory"
if [ $? -ne 0 ]; then
  echo "Erreur lors du supprimage du dossier"
  exit 1
fi

echo "Le dossier $sourceDirectory a été supprimer"

# Cloner le dépôt Git
gitRepoURL="https://github.com/DigitalExpresse/client_frontend.git" # Remplacez par l'URL de votre repo Git
git clone "$gitRepoURL"
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
