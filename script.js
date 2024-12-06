document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links da sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    
    // Seleciona todas as seções
    const allSections = document.querySelectorAll('.other-section, .weight-container');
    
    // Seleciona as seções específicas
    const metricasSection = document.getElementById('metricas-content');
    const produtosSection = document.getElementById('produtos-content');
    const cadastrarSection = document.getElementById('cadastrar-content');
    const listarSection = document.getElementById('listar-content');

    // Função para esconder todas as seções
    function hideSections() {
        allSections.forEach(section => section.style.display = 'none');
    }

    // Função para mostrar a seção específica
    function showSection(section) {
        section.style.display = 'block';
    }

    // Adiciona evento de clique nos links da sidebar
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Oculta todas as seções
            hideSections();

            // Mostra a seção baseada no ID do link
            if (link.id === 'metricas') {
                showSection(metricasSection);
            } else if (link.id === 'produtos') {
                showSection(produtosSection);
            } else if (link.id === 'cadastrar') {
                showSection(cadastrarSection);
            } else if (link.id === 'listar') {
                showSection(listarSection);
            }
        });
    });
});