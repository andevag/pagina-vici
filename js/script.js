// ==============================
// CARGAR PRODUCTOS
// ==============================
mostrarProductos();

// ==============================
// ANIMACIONES AL HACER SCROLL
// ==============================

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


// ==============================
// TRADUCCIONES
// ==============================

const translations = {

    es: {

        // Navbar
        nav_home: "Inicio",
        nav_products: "Productos",
        nav_about: "Sobre MONARQ",
        nav_contact: "Contacto",
        buy: "Comprar",

        // Hero
        hero_tag: "Fragancias exclusivas",
        hero_title: "El aroma de la victoria",
        hero_description: "Descubre la esencia de la victoria con MONARQ, una fragancia que despierta tus sentidos y te acompaña en cada momento de triunfo.",
        hero_button: "Explorar colección",

        // Colección
        collection_title: "Nuestra Colección",

        // Beneficios
        why_monarq: "¿Por qué MONARQ?",

        benefit_exclusive_title: "Fragancias Exclusivas",
        benefit_exclusive_text: "Seleccionamos perfumes que destacan por su calidad, elegancia y personalidad.",

        benefit_duration_title: "Larga Duración",
        benefit_duration_text: "Aromas intensos y duraderos para acompañarte durante todo el día.",

        benefit_safe_title: "Compra segura",
        benefit_safe_text: "Atención personalizada y compromiso para que tengas una excelente experiencia.",

        benefit_shipping_title: "Envíos",
        benefit_shipping_text: "Próximamente realizaremos envíos para que recibas tu perfume donde estés.",

        // Sobre MONARQ
        about_title: "Sobre MONARQ",
        about_text_1: "En MONARQ creemos que un perfume no solo deja un aroma, deja una impresión y buenas experiencias. Cada fragancia refleja personalidad, elegancia y confianza.",
        about_text_2: "Nuestra misión es ofrecer perfumes cuidadosamente seleccionados, combinando calidad, estilo y una excelente atención para que cada cliente encuentre el aroma perfecto.",
        view_collection: "Ver Colección",

        // Footer
        footer_description: "Fragancias que dejan una impresión.",
        footer_links: "Enlaces",
        footer_contact: "Contacto",
        email: "Correo Electrónico",
        copyright: "© 2026 MONARQ. Todos los derechos reservados.",

        // Catálogo
        product_available: "Disponible",
        product_sold_out: "Agotado",

        // Showcase
        showcase_buy: "Comprar ahora",
        showcase_most_sold: "🔥 Más vendido",
        showcase_favorite: "✨ Favorito",
        showcase_featured: "🆕 Destacado",
        showcase_exclusive: "💎 Exclusivo",

        // Categorías
        category_female: "Femenino",
        category_male: "Masculino",
        category_unisex: "Unisex"

    },

    en: {

        // Navbar
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About MONARQ",
        nav_contact: "Contact",
        buy: "Shop Now",

        // Hero
        hero_tag: "Exclusive fragrances",
        hero_title: "The scent of victory",
        hero_description: "Discover the essence of victory with MONARQ, a fragrance that awakens your senses and accompanies you through every moment of triumph.",
        hero_button: "Explore collection",

        // Collection
        collection_title: "Our Collection",

        // Benefits
        why_monarq: "Why MONARQ?",

        benefit_exclusive_title: "Exclusive Fragrances",
        benefit_exclusive_text: "We select fragrances that stand out for their quality, elegance, and personality.",

        benefit_duration_title: "Long-Lasting",
        benefit_duration_text: "Intense, long-lasting scents designed to accompany you throughout the day.",

        benefit_safe_title: "Secure Shopping",
        benefit_safe_text: "Personalized service and commitment to provide you with an excellent experience.",

        benefit_shipping_title: "Shipping",
        benefit_shipping_text: "Coming soon, we will offer shipping so you can receive your fragrance wherever you are.",

        // About MONARQ
        about_title: "About MONARQ",
        about_text_1: "At MONARQ, we believe that a fragrance doesn't just leave a scent; it leaves an impression and creates memorable experiences. Every fragrance reflects personality, elegance, and confidence.",
        about_text_2: "Our mission is to offer carefully selected fragrances, combining quality, style, and excellent service so every customer can find their perfect scent.",
        view_collection: "View Collection",

        // Footer
        footer_description: "Fragrances that leave an impression.",
        footer_links: "Links",
        footer_contact: "Contact",
        email: "Email",
        copyright: "© 2026 MONARQ. All rights reserved.",

        // Catalog
        product_available: "Available",
        product_sold_out: "Sold out",

        // Showcase
        showcase_buy: "Shop now",
        showcase_most_sold: "🔥 Best seller",
        showcase_favorite: "✨ Favorite",
        showcase_featured: "🆕 Featured",
        showcase_exclusive: "💎 Exclusive",

        // Categories
        category_female: "Female",
        category_male: "Male",
        category_unisex: "Unisex"
    }

};

function traducir(key) {

    const idioma = document.documentElement.lang || "es";

    return translations[idioma][key] || key;
}


// ==============================
// CAMBIAR IDIOMA
// ==============================

function changeLanguage(language) {

    // Cambiar idioma del documento
    document.documentElement.lang = language;

    // Buscar todos los elementos traducibles
    const elements = document.querySelectorAll("[data-i18n]");

    // Cambiar textos
    elements.forEach((element) => {

        const key = element.getAttribute("data-i18n");

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    // Actualizar selector visual
    document.getElementById("lang-es").classList.remove("active");
    document.getElementById("lang-en").classList.remove("active");

    document.getElementById(`lang-${language}`).classList.add("active");

    // Guardar idioma
    localStorage.setItem("monarq-language", language);

    if (typeof mostrarProductos === "function") {
        mostrarProductos();
    }

    if (typeof mostrarShowcase === "function") {
        mostrarShowcase(showcaseIndex);
    }
}

const idiomaGuardado =
    localStorage.getItem("monarq-language") || "es";

changeLanguage(idiomaGuardado);