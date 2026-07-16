// 1. Seleciona o botão no HTML
const themeToggleBtn = document.getElementById('theme-toggle');

// 2. Verifica se o usuário já tinha uma preferência salva anteriormente
const savedTheme = localStorage.getItem('theme');

// Se houver um tema salvo, aplica ele imediatamente ao carregar a página
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️'; // Muda o ícone para Sol no modo escuro
} else {
    themeToggleBtn.textContent = '🌙'; // Mantém o ícone de Lua no modo claro
}

// 3. Escuta o clique do botão para alternar o tema
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no corpo da página
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    // Atualiza o ícone do botão e salva a escolha no navegador
    if (isDarkMode) {
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark'); // Salva "dark"
    } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Salva "light"
    }
});
