const elementos = document.querySelectorAll(
    '.product-card, .benefit-card, .about-content'
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});