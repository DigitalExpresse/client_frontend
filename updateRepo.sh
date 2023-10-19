#!/bin/bash

# Sourcing de nvm.sh
# shellcheck disable=SC1090
source ~/.nvm/nvm.sh

# shellcheck disable=SC2164
rm .env

# Copie du fichier .env
cp ../.env ./.env

git pull

npm install

# Build du projet
npm run build
if [ $? -ne 0 ]; then
  echo "Erreur lors de la construction du projet avec npm run build"
  exit 1
fi

echo "Le projet a été construit avec succès"
