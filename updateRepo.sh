#!/bin/bash

# Sourcing de nvm.sh
# shellcheck disable=SC1090
source ~/.nvm/nvm.sh

# shellcheck disable=SC2164
rm .env

# Verifie si le fichier .env a été supprimé
if [ $? -ne 0 ]; then
  echo "Erreur lors de la suppression du fichier .env"
  exit 1
fi

# Copie du fichier .env
cp ../.env ./.env

# Verifie si le fichier .env a été copié
if [ $? -ne 0 ]; then
  echo "Erreur lors de la copie du fichier .env"
  exit 1
fi

git pull

# Verifie si le git pull a fonctionné
if [ $? -ne 0 ]; then
  echo "Erreur lors du git pull"
  exit 1
fi

npm install

# Verifie si le npm install a fonctionné
if [ $? -ne 0 ]; then
  echo "Erreur lors du npm install"
  exit 1
fi

# Build du projet
npm run build
if [ $? -ne 0 ]; then
  echo "Erreur lors de la construction du projet avec npm run build"
  exit 1
fi

echo "Le projet a été construit avec succès"