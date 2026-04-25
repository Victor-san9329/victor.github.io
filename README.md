# 📱 Portfólio Online Pessoal

Um portfólio profissional responsivo desenvolvido com **HTML5**, **CSS3 puro** e **JavaScript vanilla**, sem uso de frameworks.

## 🎯 Características

✅ **4 Páginas Interligadas**: Início, Sobre Mim, Formação, Portfólio e Contato
✅ **Design Responsivo**: Layout adaptável para desktop, tablet e mobile
✅ **Tema Claro/Escuro**: Alternância com persistência em localStorage
✅ **Menu Responsivo**: Hamburger menu para dispositivos móveis
✅ **Formulário Validado**: Validação em JavaScript com mensagens de erro
✅ **Filtro de Projetos**: Sistema de filtros na página de portfólio
✅ **Sem Frameworks**: HTML5, CSS3 e JavaScript puro
✅ **Acessível**: Código semântico e aria-labels

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html           # Página inicial
├── sobre.html           # Página sobre mim
├── formacao.html        # Página de formação educacional
├── portfolio.html       # Página de portfólio com projetos
├── contato.html         # Página com formulário de contato
├── style.css            # Estilos CSS (responsivo, tema claro/escuro)
├── script.js            # Funcionalidades JavaScript
├── assets/              # Pasta para imagens
│   ├── profile.jpg      # Foto de perfil (adicione sua foto)
│   ├── project1.jpg     # Imagens dos projetos
│   └── placeholder.jpg  # Imagem padrão
└── README.md            # Este arquivo
```

## 🚀 Como Usar Localmente

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)

### Passos

1. **Clonar o repositório** (após publicar no GitHub):
```bash
git clone https://github.com/SEU_USERNAME/seu-portfolio.git
cd seu-portfolio
```

2. **Abrir no navegador**:
   - Clique com botão direito em `index.html` → "Abrir com" → Navegador
   - Ou use Live Server no VS Code

## 🎨 Personalização

### 1. Editar Informações Pessoais

Abra `sobre.html` e atualize:
```html
<h2>Nome: Seu Nome</h2>
<p><strong>Email:</strong> seu.email@example.com</p>
<p><strong>Localização:</strong> Brasil</p>
```

### 2. Adicionar Foto de Perfil

1. Adicione uma imagem `profile.jpg` na pasta `assets/`
2. A imagem será automaticamente exibida em `sobre.html`

### 3. Editar Projetos

Abra `portfolio.html` e modifique os cards:
```html
<div class="portfolio-card" data-category="web">
    <div class="project-image">
        <img src="assets/project1.jpg" alt="Seu Projeto">
        <!-- ... -->
    </div>
    <h3>Seu Projeto</h3>
    <!-- ... -->
</div>
```

### 4. Alterar Cores

Edite `style.css` e modifique as variáveis CSS:
```css
:root {
    --color-primary: #6366f1;      /* Cor principal */
    --color-secondary: #ec4899;    /* Cor secundária */
    /* ... */
}
```

### 5. Editar Informações de Contato

Abra `contato.html` e atualize:
```html
<a href="mailto:seu.email@example.com">seu.email@example.com</a>
<a href="tel:+5511999999999">(11) 99999-9999</a>
```

## 🔧 Funcionalidades JavaScript

### 1. **Tema Claro/Escuro**
- Botão no canto superior direito alterna entre temas
- Preferência salva em localStorage
- Recuperada ao recarregar a página

### 2. **Menu Responsivo**
- Hamburger menu em dispositivos com tela ≤ 768px
- Fecha automaticamente ao selecionar um link
- Animação suave de transformação

### 3. **Validação de Formulário**
- Valida em tempo real
- Campos obrigatórios: Nome, Email, Mensagem
- Validação de email com regex
- Mensagens de erro específicas

### 4. **Simulação de Envio**
- Exibe modal de sucesso após validação
- Limpa automaticamente os campos
- Modal pode ser fechado de várias formas

### 5. **Filtro de Portfólio**
- Botões para filtrar por categoria: Todos, Web, Design, Mobile
- Animação suave entre filtros

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

Media queries personalizadas garantem boa experiência em todos os tamanhos.

## 🌐 Publicar no GitHub Pages

### Passo 1: Criar Repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login
2. Clique em "+" → "New repository"
3. Nome: `seu-username.github.io` ou `seu-portfolio`
4. Deixe público
5. Clique em "Create repository"

### Passo 2: Inicializar Git Localmente
```bash
cd /caminho/para/portfolio
git init
git add .
git commit -m "Primeiro commit: portfólio online"
```

### Passo 3: Conectar ao Repositório Remoto
```bash
git remote add origin https://github.com/SEU_USERNAME/seu-portfolio.git
git branch -M main
git push -u origin main
```

### Passo 4: Ativar GitHub Pages
1. No GitHub, acesse o repositório
2. Vá para **Settings** → **Pages**
3. Em "Source", selecione "Deploy from a branch"
4. Selecione a branch `main` e pasta `root`
5. Clique em "Save"
6. Aguarde alguns minutos (geralmente 1-2 minutos)

### Passo 5: Acessar o Site
Seu portfólio estará disponível em:
- Se repositório é `seu-username.github.io`: `https://seu-username.github.io`
- Se repositório é outro: `https://seu-username.github.io/seu-portfolio`

## 📝 Exemplos de Código

### Menu Responsivo (JavaScript)
```javascript
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}
```

### Validação de Email (JavaScript)
```javascript
function validateField(field) {
    if (field.id === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            showErrorMessage(field, 'Digite um email válido');
            return false;
        }
    }
    return true;
}
```

### Tema Claro/Escuro (CSS)
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #1f2937;
}

body.dark-theme {
    --bg-primary: #1f2937;
    --text-primary: #f9fafb;
}
```

## 🎓 Conceitos Demonstrados

- ✅ HTML5 semântico
- ✅ CSS3 Grid e Flexbox
- ✅ CSS3 Animations e Transitions
- ✅ Media Queries responsivas
- ✅ JavaScript DOM manipulation
- ✅ Event Listeners
- ✅ Local Storage API
- ✅ Validação de formulários
- ✅ Regular Expressions (Regex)

## 📋 Checklist de Conformidade

- ✅ Desenvolvido com HTML5, CSS3 e JavaScript puro
- ✅ Sem uso de Bootstrap, Tailwind, ou CSS frameworks
- ✅ Sem uso de React, Vue, Angular ou bibliotecas JS
- ✅ Mínimo 4 páginas interligadas por menu
- ✅ Menu visível em todas as páginas
- ✅ Formulário com validação JavaScript
- ✅ Design responsivo para mobile/tablet/desktop
- ✅ Publicado em GitHub Pages
- ✅ Código comentado nos pontos relevantes
- ✅ URL contém nome do aluno (configurável)

## 🐛 Troubleshooting

### Site não aparece após publicar no GitHub Pages?
- Aguarde 5-10 minutos
- Verifique em Settings → Pages se está bem configurado
- Certifique-se que o repositório é público

### Menu não funciona no mobile?
- Atualize a página (Ctrl+Shift+R)
- Limpe o cache do navegador
- Verifique se o JavaScript está ativado

### Imagens não aparecem?
- Certifique-se que as imagens estão na pasta `assets/`
- Use caminhos relativos: `assets/imagem.jpg`
- Formatos suportados: JPG, PNG, GIF, WebP

## 📞 Suporte e Dúvidas

Para dúvidas sobre o desenvolvimento, consulte a documentação:
- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com)
- [CSS Tricks](https://css-tricks.com)

## 📄 Licença

Este projeto é fornecido como base educacional. Personalize-o com suas próprias informações e projetos.

---

**Desenvolvido com ❤️ usando HTML5, CSS3 e JavaScript Puro**

Data de Criação: 2026
