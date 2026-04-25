#!/bin/bash

# Script para publicar portfolio no GitHub
cd /c/home/portfolio

echo "========================================="
echo "Inicializando Git..."
echo "========================================="
git init

echo ""
echo "========================================="
echo "Configurando Git..."
echo "========================================="
git config user.email "victor@example.com"
git config user.name "Victor Hugo"

echo ""
echo "========================================="
echo "Adicionando arquivos..."
echo "========================================="
git add .

echo ""
echo "========================================="
echo "Fazendo commit..."
echo "========================================="
git commit -m "Portfólio online publicado - HTML5, CSS3 e JavaScript Puro"

echo ""
echo "========================================="
echo "Adicionando repositório remoto..."
echo "========================================="
git remote add origin https://github.com/Victor-san9329/victor.github.io.git

echo ""
echo "========================================="
echo "Fazendo push..."
echo "========================================="
git branch -M main
git push -u origin main

echo ""
echo "========================================="
echo "✅ SUCESSO! Portfolio publicado!"
echo "========================================="
echo ""
echo "Seu portfólio está em:"
echo "https://Victor-san9329.github.io"
echo ""
echo "Aguarde 1-2 minutos para o site ficar ao vivo."
