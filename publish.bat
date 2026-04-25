@echo off
REM Script para publicar portfolio no GitHub
REM Este arquivo configura Git e faz push para o repositório

cd /d C:\home\portfolio

echo ========================================
echo Inicializando Git no Portfolio...
echo ========================================

git init

echo.
echo ========================================
echo Configurando usuário Git...
echo ========================================

git config user.email "victor@example.com"
git config user.name "Victor Hugo"

echo.
echo ========================================
echo Adicionando todos os arquivos...
echo ========================================

git add .

echo.
echo ========================================
echo Fazendo commit...
echo ========================================

git commit -m "Portfólio online publicado - HTML5, CSS3 e JavaScript Puro"

echo.
echo ========================================
echo Adicionando repositório remoto...
echo ========================================

git remote add origin https://github.com/Victor-san9329/victor.github.io.git

echo.
echo ========================================
echo Renomeando branch para main...
echo ========================================

git branch -M main

echo.
echo ========================================
echo Fazendo push para GitHub...
echo ========================================

git push -u origin main

echo.
echo ========================================
echo SUCESSO! Portfolio publicado!
echo ========================================
echo.
echo Seu portfólio está disponível em:
echo https://Victor-san9329.github.io/victor.github.io
echo.
echo Aguarde 1-2 minutos para o site ficar ao vivo.
echo.
pause
