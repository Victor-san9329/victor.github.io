# 📖 Instruções para Publicar no GitHub Pages

Siga os passos abaixo para publicar seu portfólio no GitHub Pages.

## ✅ Pré-requisitos

- Conta no [GitHub](https://github.com) (crie uma se não tiver)
- Git instalado no seu computador ([Download Git](https://git-scm.com/downloads))
- Terminal/Prompt de Comando

## 🚀 Passo a Passo

### 1️⃣ Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login na sua conta
2. Clique no ícone **+** no canto superior direito
3. Selecione **New repository**
4. Configure o repositório:
   - **Repository name**: Escolha um nome (exemplo: `meu-portfolio`)
   - **Description**: "Portfólio Online Pessoal"
   - **Public**: Deixe como público ✅
   - **Initialize with README**: Pode deixar desmarcado
5. Clique em **Create repository**

### 2️⃣ Inicializar Git Localmente

Abra o terminal/prompt na pasta do seu portfólio:

```bash
# Navegar para a pasta do portfólio
cd /caminho/para/portfolio

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Primeiro commit: portfólio online pessoal"
```

### 3️⃣ Conectar ao Repositório Remoto

Copie os comandos do GitHub e cole no terminal:

```bash
# Substituir SEU_USERNAME pelo seu usuário do GitHub
git remote add origin https://github.com/SEU_USERNAME/meu-portfolio.git

# Renomear branch para 'main'
git branch -M main

# Fazer push do código
git push -u origin main
```

**Exemplo real:**
```bash
git remote add origin https://github.com/giuliano-lanes/meu-portfolio.git
git branch -M main
git push -u origin main
```

### 4️⃣ Ativar GitHub Pages

1. Acesse seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu esquerdo, selecione **Pages**
4. Em "Build and deployment":
   - **Source**: Selecione "Deploy from a branch"
   - **Branch**: Selecione `main`
   - **Folder**: Selecione `/ (root)`
5. Clique em **Save**

### 5️⃣ Aguardar Deployment

- GitHub gastará alguns minutos para publicar seu site
- Você verá um aviso "Your site is live at ..." em verde
- Clique no link para acessar seu portfólio online

## 📍 URL do Seu Portfólio

Depois de publicado, seu site estará em uma destas URLs:

### Opção A: Se nomeou o repositório como `seu-username.github.io`
```
https://seu-username.github.io
```

### Opção B: Se nomeou com outro nome (exemplo: meu-portfolio)
```
https://seu-username.github.io/meu-portfolio
```

**Exemplo:**
- Usuário: `giuliano-lanes`
- Repositório: `meu-portfolio`
- URL: `https://giuliano-lanes.github.io/meu-portfolio`

## 🔄 Como Atualizar seu Portfólio

Sempre que fizer alterações locais, execute:

```bash
# Fazer alterações no código

# Adicionar as mudanças
git add .

# Fazer commit com mensagem
git commit -m "Descrição das alterações"

# Fazer push para atualizar no GitHub
git push
```

## 🆘 Troubleshooting

### Site não aparece online?

**Problema**: Após 10 minutos, o site ainda não está disponível

**Soluções**:
1. Verifique se o repositório é público (Settings → General)
2. Confirme que GitHub Pages está ativado (Settings → Pages)
3. Verifique se a branch é `main` e pasta é `/ (root)`
4. Verifique o status do deployment em **Deployments**
5. Tente atualizando a página do navegador (Ctrl+Shift+R)

### Erro ao fazer push?

**Problema**: "fatal: repository not found" ou "Permission denied"

**Soluções**:
1. Confirme que copiou corretamente o link HTTPS do repositório
2. Se usar 2FA no GitHub, use um token: 
   - Gere um Personal Access Token em Settings → Developer settings
   - Use como senha no push

### Imagens não aparecem online?

**Problema**: Imagens funcionam localmente mas não no GitHub Pages

**Soluções**:
1. Confirme que os arquivos de imagem estão na pasta `assets/`
2. Use caminhos relativos: `assets/imagem.jpg`
3. Certifique-se que o arquivo foi adicionado ao Git:
   ```bash
   git add assets/
   git commit -m "Adicionar imagens"
   git push
   ```

## 📝 Exemplo Completo

Aqui está um exemplo completo do processo:

```bash
# 1. Navegar para a pasta
cd ~/projetos/meu-portfolio

# 2. Inicializar git
git init

# 3. Adicionar arquivos
git add .

# 4. Primeiro commit
git commit -m "Portfólio online inicial"

# 5. Adicionar remote (COPIAR DO GITHUB)
git remote add origin https://github.com/seu-username/meu-portfolio.git

# 6. Renomear branch
git branch -M main

# 7. Fazer push
git push -u origin main

# Pronto! Seu site está publicado! 🎉
```

## 💡 Dicas Úteis

### Verificar status
```bash
git status
```

### Ver histórico de commits
```bash
git log
```

### Desfazer último commit (se não fez push)
```bash
git reset HEAD~1
```

### Configurar seu usuário Git
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

## 🌐 Compartilhar seu Portfólio

Após publicar, você pode compartilhar o link do seu portfólio:

- **LinkedIn**: Adicione em "Website" do perfil
- **Currículo**: Coloque no campo "Portfolio"
- **E-mail**: Envie para recrutadores
- **Social Media**: Compartilhe no Instagram, Twitter, etc.

## 📚 Recursos Adicionais

- [GitHub Pages - Documentação Oficial](https://docs.github.com/en/pages)
- [Git - Documentação Oficial](https://git-scm.com/doc)
- [Tutorial Visual Studio Code + Git](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git)

---

**Sucesso na publicação do seu portfólio! 🚀**

Se tiver dúvidas, consulte a [documentação do GitHub Pages](https://docs.github.com/en/pages).
