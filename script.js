/* ========================================
   PORTFÓLIO - JAVASCRIPT PURO
   ======================================== */

/**
 * INICIALIZAÇÃO DO SCRIPT
 * Executa funcionalidades quando o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initMenu();
    initFormValidation();
    initPortfolioFilters();
    updateActiveNav();
});

/**
 * SISTEMA DE TEMA CLARO/ESCURO
 * Alterna entre tema claro e escuro com localStorage
 */
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Recupera o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Adiciona evento ao botão de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

/**
 * Aplica o tema (claro ou escuro) ao body
 * @param {string} theme - 'light' ou 'dark'
 */
function applyTheme(theme) {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (themeToggle) {
            themeToggle.querySelector('.theme-icon').textContent = '☀️';
        }
    } else {
        body.classList.remove('dark-theme');
        if (themeToggle) {
            themeToggle.querySelector('.theme-icon').textContent = '🌙';
        }
    }
}

/**
 * MENU RESPONSIVO (HAMBURGER)
 * Alterna visibilidade do menu em dispositivos móveis
 */
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Abre/fecha o menu ao clicar no botão hamburger
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            updateMenuToggleState();
        });
    }

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            updateMenuToggleState();
        });
    });

    // Fecha o menu ao redimensionar a janela (se voltar ao tamanho desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Atualiza o estado visual do botão hamburger
 */
function updateMenuToggleState() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuToggle) return;

    const spans = menuToggle.querySelectorAll('span');
    
    if (navMenu.classList.contains('active')) {
        // Animação para X
        spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        // Volta ao estado normal
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

/**
 * VALIDAÇÃO E ENVIO DO FORMULÁRIO
 * Valida campos obrigatórios e formato de email
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    // Adiciona listener ao envio do formulário
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne envio padrão

        // Validar o formulário
        if (validateForm()) {
            // Se válido, simula o envio
            simulateFormSubmit();
        }
    });

    // Valida em tempo real quando o usuário sai do campo
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Remove mensagem de erro quando o usuário começa a digitar
        input.addEventListener('input', function() {
            removeErrorMessage(this);
        });
    });
}

/**
 * Valida todos os campos do formulário
 * @returns {boolean} - true se todos os campos são válidos
 */
function validateForm() {
    let isValid = true;

    // Validar nome
    const nameInput = document.getElementById('name');
    if (nameInput && !validateField(nameInput)) {
        isValid = false;
    }

    // Validar email
    const emailInput = document.getElementById('email');
    if (emailInput && !validateField(emailInput)) {
        isValid = false;
    }

    // Validar mensagem
    const messageInput = document.getElementById('message');
    if (messageInput && !validateField(messageInput)) {
        isValid = false;
    }

    return isValid;
}

/**
 * Valida um campo individual
 * @param {HTMLElement} field - O campo a validar
 * @returns {boolean} - true se o campo é válido
 */
function validateField(field) {
    const fieldName = field.id;
    let errorMessage = '';
    let isValid = true;

    // Validação de Nome
    if (fieldName === 'name') {
        if (field.value.trim() === '') {
            errorMessage = 'O nome é obrigatório';
            isValid = false;
        } else if (field.value.trim().length < 3) {
            errorMessage = 'O nome deve ter pelo menos 3 caracteres';
            isValid = false;
        }
    }

    // Validação de Email
    if (fieldName === 'email') {
        // Regex para validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (field.value.trim() === '') {
            errorMessage = 'O email é obrigatório';
            isValid = false;
        } else if (!emailRegex.test(field.value)) {
            errorMessage = 'Digite um email válido (ex: usuario@dominio.com)';
            isValid = false;
        }
    }

    // Validação de Mensagem
    if (fieldName === 'message') {
        if (field.value.trim() === '') {
            errorMessage = 'A mensagem é obrigatória';
            isValid = false;
        } else if (field.value.trim().length < 10) {
            errorMessage = 'A mensagem deve ter pelo menos 10 caracteres';
            isValid = false;
        }
    }

    // Exibe ou remove a mensagem de erro
    if (!isValid) {
        showErrorMessage(field, errorMessage);
    } else {
        removeErrorMessage(field);
    }

    return isValid;
}

/**
 * Exibe mensagem de erro para um campo
 * @param {HTMLElement} field - O campo
 * @param {string} message - A mensagem de erro
 */
function showErrorMessage(field, message) {
    const errorElement = document.getElementById(field.id + 'Error');
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    field.classList.add('error');
}

/**
 * Remove mensagem de erro de um campo
 * @param {HTMLElement} field - O campo
 */
function removeErrorMessage(field) {
    const errorElement = document.getElementById(field.id + 'Error');
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    field.classList.remove('error');
}

/**
 * Simula o envio do formulário
 * Limpa os campos e exibe mensagem de sucesso em modal
 */
function simulateFormSubmit() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloseBtn = document.getElementById('closeModal');
    const modalBtn = document.getElementById('modalBtn');

    if (!successModal || !modalOverlay) return;

    // Limpa os campos do formulário
    contactForm.reset();

    // Remove mensagens de erro
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        removeErrorMessage(input);
    });

    // Exibe o modal de sucesso
    successModal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');

    // Fecha o modal ao clicar no botão de fechar
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeSuccessModal);
    }

    // Fecha o modal ao clicar no botão do modal
    if (modalBtn) {
        modalBtn.addEventListener('click', closeSuccessModal);
    }

    // Fecha o modal ao clicar no overlay
    modalOverlay.addEventListener('click', closeSuccessModal);

    // Log para simular envio (em um projeto real, seria um request HTTP)
    console.log('Formulário enviado com sucesso! (Simulação)');
}

/**
 * Fecha o modal de sucesso
 */
function closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    const modalOverlay = document.getElementById('modalOverlay');

    if (successModal) {
        successModal.classList.add('hidden');
    }

    if (modalOverlay) {
        modalOverlay.classList.add('hidden');
    }
}

/**
 * FILTRO DE PORTFÓLIO
 * Filtra projetos por categoria
 */
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    if (filterButtons.length === 0) return; // Se não existem botões de filtro

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Remove classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado
            this.classList.add('active');

            // Filtra os projetos
            filterPortfolioCards(filterValue, portfolioCards);
        });
    });
}

/**
 * Filtra os cards do portfólio por categoria
 * @param {string} filterValue - A categoria a filtrar ('all', 'web', 'design', 'mobile')
 * @param {NodeList} portfolioCards - Lista de cards do portfólio
 */
function filterPortfolioCards(filterValue, portfolioCards) {
    portfolioCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
            // Mostra o card com animação
            card.classList.remove('hidden');
            // Pequeno delay para que a animação CSS funcione
            setTimeout(() => {
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = 'fadeIn 0.3s ease';
            }, 0);
        } else {
            // Esconde o card
            card.classList.add('hidden');
        }
    });
}

/**
 * ATUALIZAÇÃO DO MENU ATIVO
 * Marca o link do menu atual como ativo baseado na página
 */
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * ANIMAÇÃO DE FADE-IN PARA CARDS
 * Define animação para cards do portfólio
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .portfolio-card {
        animation: fadeIn 0.3s ease;
    }
`;
document.head.appendChild(style);

/**
 * SCROLL SUAVE
 * Melhora a experiência de navegação com scroll suave
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/**
 * COMENTÁRIOS ADICIONAIS SOBRE O CÓDIGO JAVASCRIPT:
 * 
 * 1. MODULARIDADE: Cada funcionalidade está em uma função separada para fácil manutenção
 * 
 * 2. VALIDAÇÃO ROBUSTA:
 *    - Valida nome (mínimo 3 caracteres)
 *    - Valida email com regex
 *    - Valida mensagem (mínimo 10 caracteres)
 *    - Exibe mensagens de erro específicas
 * 
 * 3. LOCALSTORAGE:
 *    - Salva preferência de tema do usuário
 *    - Recupera tema ao recarregar página
 * 
 * 4. ACESSIBILIDADE:
 *    - Usa aria-labels nos botões
 *    - Mensagens de erro clara
 *    - Validação em tempo real
 * 
 * 5. RESPONSIVIDADE:
 *    - Menu hamburger funciona em dispositivos móveis
 *    - Detecta redimensionamento da janela
 * 
 * 6. SEM DEPENDÊNCIAS EXTERNAS:
 *    - Apenas JavaScript puro (vanilla)
 *    - Sem jQuery, React ou outras bibliotecas
 */
