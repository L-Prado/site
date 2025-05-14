console.log("Landing page carregada com sucesso!");
document.addEventListener("DOMContentLoaded", function () {
    console.log("Página pronta para uso.");
});

// Adiciona animação de scroll para CTAs
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
