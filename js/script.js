// ========================================
// PRODUCTOS DE MONARQ
// ========================================

const productos = [

    {
        nombre: "Eclaire",
        imagen: "assets/images/eclaire.jpg",
        precio: 140000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_most_sold"
    },

    {
        nombre: "Yara Rosa",
        imagen: "assets/images/yara.jpg",
        precio: 130000,
        categoria: "category_female",
        stock: 0,
        destacado: true,
        etiqueta: "showcase_most_sold"
    },

    {
        nombre: "Cloud Pink",
        imagen: "assets/images/cloudpink.jpg",
        precio: 140000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Afeef",
        imagen: "assets/images/afeef.jpg",
        precio: 100000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Ajwad",
        imagen: "assets/images/ajwad.jpg",
        precio: 120000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Amethyst",
        imagen: "assets/images/amethyst.jpg",
        precio: 119000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Art of Universe",
        imagen: "assets/images/artofuniverse.jpg",
        precio: 159000,
        categoria: "category_unisex",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Asad",
        imagen: "assets/images/asad.jpg",
        precio: 160000,
        categoria: "category_male",
        stock: 0,
        destacado: true,
        etiqueta: "showcase_most_sold"
    },

    {
        nombre: "Asad Bourbon",
        imagen: "assets/images/asadbourbon.jpg",
        precio: 159000,
        categoria: "category_male",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Asad Elixir",
        imagen: "assets/images/asadelixir.jpg",
        precio: 170000,
        categoria: "category_male",
        stock: 0,
        destacado: true,
        etiqueta: "showcase_most_sold"
    },

    {
        nombre: "Qaed Al Fursan",
        imagen: "assets/images/fursan.jpg",
        precio: 130000,
        categoria: "category_male",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_favorite"
    },

    {
        nombre: "Her Confession",
        imagen: "assets/images/herfconfecsion.jpg",
        precio: 170000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_favorite"
    },

    {
        nombre: "Island Bliss",
        imagen: "assets/images/islandbliss.jpg",
        precio: 219000,
        categoria: "category_female",
        stock: 0,
        destacado: true,
        etiqueta: "showcase_most_sold"
    },

    {
        nombre: "Island Breeze",
        imagen: "assets/images/islandbreeze.jpg",
        precio: 190000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_favorite"
    },

    {
        nombre: "Vanilla Freak",
        imagen: "assets/images/vanillafreak.jpg",
        precio: 159000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Whipped Pleasure",
        imagen: "assets/images/whipped.jpg",
        precio: 149000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_favorite"
    },

    {
        nombre: "Sublime",
        imagen: "assets/images/sublime.jpg",
        precio: 165000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Khamrah",
        imagen: "assets/images/khamra.jpg",
        precio: 175000,
        categoria: "category_unisex",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Khamrah Dukhan",
        imagen: "assets/images/khamradukan.jpg",
        precio: 180000,
        categoria: "category_unisex",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_favorite"
    },

    {
        nombre: "Khamrah Qahwa",
        imagen: "assets/images/khamraqhwa.jpg",
        precio: 179900,
        categoria: "category_unisex",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Yara Candy",
        imagen: "assets/images/yaracandy.jpg",
        precio: 149900,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_favorite"
    },

    {
        nombre: "Yara Elixir",
        imagen: "assets/images/yaraelixir.jpg",
        precio: 155000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    },

    {
        nombre: "Yara Moi",
        imagen: "assets/images/yaramoi.jpg",
        precio: 145000,
        categoria: "category_female",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_favorite"
    },

    {
        nombre: "Odyssey Mandarin Sky de Armaf",
        imagen: "assets/images/mandarinsky.jpg",
        precio: 145000,
        categoria: "category_unisex",
        stock: 2,
        destacado: true,
        etiqueta: "showcase_featured"
    }

];


// ========================================
// TRADUCCIONES
// ========================================

const translations = {

    es: {

        nav_home: "Inicio",
        nav_products: "Productos",
        nav_about: "Sobre MONARQ",
        nav_contact: "Contacto",
        buy: "Comprar",

        hero_tag: "Fragancias exclusivas",
        hero_title: "El aroma de la victoria",

        hero_description:
            "Descubre la esencia de la victoria con MONARQ, una fragancia que despierta tus sentidos y te acompaña en cada momento de triunfo.",

        hero_button: "Explorar colección",

        collection_title: "Nuestra Colección",

        why_monarq: "¿Por qué MONARQ?",

        benefit_exclusive_title: "Fragancias Exclusivas",
        benefit_exclusive_text:
            "Seleccionamos perfumes que destacan por su calidad, elegancia y personalidad.",

        benefit_duration_title: "Larga Duración",
        benefit_duration_text:
            "Aromas intensos y duraderos para acompañarte durante todo el día.",

        benefit_safe_title: "Compra segura",
        benefit_safe_text:
            "Atención personalizada y compromiso para que tengas una excelente experiencia.",

        benefit_shipping_title: "Envíos",
        benefit_shipping_text:
            "Próximamente realizaremos envíos para que recibas tu perfume donde estés.",

        about_title: "Sobre MONARQ",

        about_text_1:
            "En MONARQ creemos que un perfume no solo deja un aroma, deja una impresión y buenas experiencias. Cada fragancia refleja personalidad, elegancia y confianza.",

        about_text_2:
            "Nuestra misión es ofrecer perfumes cuidadosamente seleccionados, combinando calidad, estilo y una excelente atención para que cada cliente encuentre el aroma perfecto.",

        view_collection: "Ver Colección",

        footer_description:
            "Fragancias que dejan una impresión.",

        footer_links: "Enlaces",
        footer_contact: "Contacto",
        email: "Correo Electrónico",

        copyright:
            "© 2026 MONARQ. Todos los derechos reservados.",

        product_available: "Disponible",
        product_sold_out: "Agotado",

        showcase_buy: "Comprar ahora",
        showcase_most_sold: "🔥 Más vendido",
        showcase_favorite: "✨ Favorito",
        showcase_featured: "🆕 Destacado",
        showcase_exclusive: "💎 Exclusivo",

        category_female: "Femenino",
        category_male: "Masculino",
        category_unisex: "Unisex"
    },


    en: {

        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About MONARQ",
        nav_contact: "Contact",
        buy: "Shop Now",

        hero_tag: "Exclusive fragrances",
        hero_title: "The scent of victory",

        hero_description:
            "Discover the essence of victory with MONARQ, a fragrance that awakens your senses and accompanies you through every moment of triumph.",

        hero_button: "Explore collection",

        collection_title: "Our Collection",

        why_monarq: "Why MONARQ?",

        benefit_exclusive_title: "Exclusive Fragrances",

        benefit_exclusive_text:
            "We select fragrances that stand out for their quality, elegance, and personality.",

        benefit_duration_title: "Long-Lasting",

        benefit_duration_text:
            "Intense, long-lasting scents designed to accompany you throughout the day.",

        benefit_safe_title: "Secure Shopping",

        benefit_safe_text:
            "Personalized service and commitment to provide you with an excellent experience.",

        benefit_shipping_title: "Shipping",

        benefit_shipping_text:
            "Coming soon, we will offer shipping so you can receive your fragrance wherever you are.",

        about_title: "About MONARQ",

        about_text_1:
            "At MONARQ, we believe that a fragrance doesn't just leave a scent; it leaves an impression and creates memorable experiences. Every fragrance reflects personality, elegance, and confidence.",

        about_text_2:
            "Our mission is to offer carefully selected fragrances, combining quality, style, and excellent service so every customer can find their perfect scent.",

        view_collection: "View Collection",

        footer_description:
            "Fragrances that leave an impression.",

        footer_links: "Links",
        footer_contact: "Contact",
        email: "Email",

        copyright:
            "© 2026 MONARQ. All rights reserved.",

        product_available: "Available",
        product_sold_out: "Sold out",

        showcase_buy: "Shop now",
        showcase_most_sold: "🔥 Best seller",
        showcase_favorite: "✨ Favorite",
        showcase_featured: "🆕 Featured",
        showcase_exclusive: "💎 Exclusive",

        category_female: "Female",
        category_male: "Male",
        category_unisex: "Unisex"
    }

};


// ========================================
// TRADUCIR
// ========================================

function traducir(key) {

    const idioma =
        document.documentElement.lang || "es";

    return translations[idioma]?.[key] || key;
}


// ========================================
// WHATSAPP
// ========================================

function generarWhatsApp(producto) {

    const numero = "573053779384";

    const precio =
        producto.precio.toLocaleString("es-CO");

    const mensaje =
        `Hola MONARQ, estoy interesado en comprar ${producto.nombre} por $${precio} COP.`;

    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}


// ========================================
// OBSERVADOR DE ANIMACIONES
// ========================================

let observadorProductos = null;

function iniciarAnimaciones() {

    const elementos =
        document.querySelectorAll(
            ".product-card, .benefit-card, .about-content"
        );

    if (!("IntersectionObserver" in window)) {

        elementos.forEach(elemento => {
            elemento.classList.add("visible");
        });

        return;
    }

    if (observadorProductos) {
        observadorProductos.disconnect();
    }

    observadorProductos =
        new IntersectionObserver(
            entradas => {

                entradas.forEach(entrada => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add(
                            "visible"
                        );

                        observadorProductos.unobserve(
                            entrada.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elementos.forEach(elemento => {

        observadorProductos.observe(
            elemento
        );

    });
}


// ========================================
// MOSTRAR PRODUCTOS
// ========================================

function mostrarProductos() {

    const contenedor =
        document.querySelector(
            ".products-container"
        );

    if (!contenedor) return;

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        const tarjeta =
            document.createElement("div");

        tarjeta.classList.add(
            "product-card"
        );


        const disponible =
            producto.stock > 0;


        tarjeta.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

            <h3>
                <strong>
                    ${producto.nombre}
                </strong>
            </h3>

            <p class="type-product">
                ${traducir(producto.categoria)}
            </p>

            <p class="product-price">
                $${producto.precio.toLocaleString("es-CO")} COP
            </p>

            <p class="product-stock ${
                disponible
                    ? "stock-disponible"
                    : "stock-agotado"
            }">

                ${
                    disponible
                        ? `${traducir("product_available")}: ${producto.stock}`
                        : traducir("product_sold_out")
                }

            </p>


            ${
                disponible

                    ? `

                        <a
                            href="${generarWhatsApp(producto)}"
                            class="btn-product"
                            target="_blank"
                            rel="noopener"
                        >

                            <strong>
                                ${traducir("buy")}
                            </strong>

                        </a>

                    `

                    : `

                        <button
                            class="btn-product btn-agotado"
                            disabled
                        >

                            ${traducir("product_sold_out")}

                        </button>

                    `
            }

        `;


        contenedor.appendChild(
            tarjeta
        );

    });


    // IMPORTANTE:
    // Volvemos a activar el observador
    // para las nuevas tarjetas.

    iniciarAnimaciones();
}


// ========================================
// SHOWCASE
// ========================================

const productosDestacados =
    productos.filter(
        producto => producto.destacado
    );

let showcaseIndex = 0;


const showcaseImage =
    document.getElementById(
        "showcase-image"
    );

const showcaseName =
    document.getElementById(
        "showcase-name"
    );

const showcaseCategory =
    document.getElementById(
        "showcase-category"
    );

const showcasePrice =
    document.getElementById(
        "showcase-price"
    );

const showcaseLabel =
    document.getElementById(
        "showcase-label"
    );

const showcaseButton =
    document.getElementById(
        "showcase-button"
    );

const showcasePrev =
    document.getElementById(
        "showcase-prev"
    );

const showcaseNext =
    document.getElementById(
        "showcase-next"
    );

const showcaseDots =
    document.getElementById(
        "showcase-dots"
    );


// ========================================
// MOSTRAR SHOWCASE
// ========================================

function mostrarShowcase(index) {

    const producto =
        productosDestacados[index];

    if (!producto) return;


    if (showcaseImage) {

        showcaseImage.src =
            producto.imagen;

        showcaseImage.alt =
            producto.nombre;
    }


    if (showcaseName) {

        showcaseName.textContent =
            producto.nombre;
    }


    if (showcaseCategory) {

        showcaseCategory.textContent =
            traducir(
                producto.categoria
            );
    }


    if (showcasePrice) {

        showcasePrice.textContent =
            `$${producto.precio.toLocaleString("es-CO")} COP`;
    }


    if (showcaseLabel) {

        showcaseLabel.textContent =
            traducir(
                producto.etiqueta
            );
    }


    if (showcaseButton) {

        showcaseButton.textContent =
            traducir(
                "showcase_buy"
            );

        showcaseButton.href =
            generarWhatsApp(
                producto
            );
    }


    document
        .querySelectorAll(
            ".showcase-dot"
        )
        .forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === showcaseIndex
            );

        });
}


// ========================================
// CREAR PUNTOS DEL SHOWCASE
// ========================================

if (showcaseDots) {

    productosDestacados.forEach(
        (producto, index) => {

            const dot =
                document.createElement(
                    "button"
                );

            dot.classList.add(
                "showcase-dot"
            );


            dot.addEventListener(
                "click",
                () => {

                    showcaseIndex =
                        index;

                    mostrarShowcase(
                        showcaseIndex
                    );

                }
            );


            showcaseDots.appendChild(
                dot
            );

        }
    );
}


// ========================================
// SIGUIENTE
// ========================================

if (showcaseNext) {

    showcaseNext.addEventListener(
        "click",
        () => {

            showcaseIndex++;

            if (
                showcaseIndex >=
                productosDestacados.length
            ) {

                showcaseIndex = 0;

            }

            mostrarShowcase(
                showcaseIndex
            );

        }
    );
}


// ========================================
// ANTERIOR
// ========================================

if (showcasePrev) {

    showcasePrev.addEventListener(
        "click",
        () => {

            showcaseIndex--;

            if (
                showcaseIndex < 0
            ) {

                showcaseIndex =
                    productosDestacados.length - 1;

            }

            mostrarShowcase(
                showcaseIndex
            );

        }
    );
}


// ========================================
// CAMBIAR IDIOMA
// ========================================

function changeLanguage(language) {

    if (!translations[language]) {
        language = "es";
    }


    // Cambiar idioma del HTML

    document.documentElement.lang =
        language;


    // Traducir elementos HTML

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(element => {

        const key =
            element.getAttribute(
                "data-i18n"
            );

        if (
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    // Actualizar botones del idioma

    const langEs =
        document.getElementById(
            "lang-es"
        );

    const langEn =
        document.getElementById(
            "lang-en"
        );


    if (langEs) {

        langEs.classList.remove(
            "active"
        );

    }


    if (langEn) {

        langEn.classList.remove(
            "active"
        );

    }


    const idiomaSeleccionado =
        document.getElementById(
            `lang-${language}`
        );


    if (idiomaSeleccionado) {

        idiomaSeleccionado.classList.add(
            "active"
        );

    }


    // Guardar idioma

    localStorage.setItem(
        "monarq-language",
        language
    );


    // Volver a generar productos

    mostrarProductos();


    // Actualizar showcase

    mostrarShowcase(
        showcaseIndex
    );
}


// ========================================
// INICIAR
// ========================================

const idiomaGuardado =
    localStorage.getItem(
        "monarq-language"
    ) || "es";


changeLanguage(
    idiomaGuardado
);


// ========================================
// CAMBIO AUTOMÁTICO DEL SHOWCASE
// ========================================

setInterval(() => {

    if (
        productosDestacados.length === 0
    ) {
        return;
    }


    showcaseIndex++;


    if (
        showcaseIndex >=
        productosDestacados.length
    ) {

        showcaseIndex = 0;

    }


    mostrarShowcase(
        showcaseIndex
    );

}, 5000);