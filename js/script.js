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
        imagen: "assets/images/khamradukhan.jpg",
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
        category_unisex: "Unisex",

        cart: "Carrito",
        cart_title: "Tu carrito",
        cart_empty: "Tu carrito está vacío.",
        cart_explore: "Explorar productos",
        cart_summary: "Resumen de compra",
        cart_total: "Total:",
        cart_buy: "Comprar por WhatsApp"
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
        category_unisex: "Unisex",

        cart: "Cart",
        cart_title: "Your Cart",
        cart_empty: "Your cart is empty.",
        cart_explore: "Explore products",
        cart_summary: "Order Summary",
        cart_total: "Total:",
        cart_buy: "Buy via WhatsApp"
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
// CARRITO
// ========================================

let carrito =
    JSON.parse(
        localStorage.getItem("monarq-carrito")
    ) || [];


// ========================================
// GUARDAR CARRITO
// ========================================

function guardarCarrito() {

    localStorage.setItem(
        "monarq-carrito",
        JSON.stringify(carrito)
    );

}


// ========================================
// AGREGAR PRODUCTO AL CARRITO
// ========================================

function agregarAlCarrito(nombreProducto) {

    const producto =
        productos.find(
            producto =>
                producto.nombre === nombreProducto
        );

    if (!producto) return;

    if (producto.stock <= 0) return;


    const productoCarrito =
        carrito.find(
            item =>
                item.nombre === nombreProducto
        );


    if (productoCarrito) {

        if (
            productoCarrito.cantidad <
            producto.stock
        ) {

            productoCarrito.cantidad++;

        }

    } else {

        carrito.push({

            nombre: producto.nombre,

            imagen: producto.imagen,

            precio: producto.precio,

            stock: producto.stock,

            cantidad: 1

        });

    }


    guardarCarrito();

    mostrarCarrito();

}


// ========================================
// CAMBIAR CANTIDAD
// ========================================

function cambiarCantidad(
    nombreProducto,
    cambio
) {

    const item =
        carrito.find(
            producto =>
                producto.nombre === nombreProducto
        );

    if (!item) return;


    item.cantidad += cambio;


    if (item.cantidad <= 0) {

        carrito =
            carrito.filter(
                producto =>
                    producto.nombre !==
                    nombreProducto
            );

    }


    if (item.cantidad > item.stock) {

        item.cantidad = item.stock;

    }


    guardarCarrito();

    mostrarCarrito();

}


// ========================================
// ELIMINAR PRODUCTO
// ========================================

function eliminarDelCarrito(nombreProducto) {

    carrito =
        carrito.filter(
            producto =>
                producto.nombre !==
                nombreProducto
        );

    guardarCarrito();

    mostrarCarrito();

}


// ========================================
// MOSTRAR CARRITO
// ========================================

function mostrarCarrito() {

    const contenedor =
        document.getElementById(
            "cart-products"
        );

    const vacio =
        document.getElementById(
            "cart-empty"
        );

    const resumen =
        document.getElementById(
            "cart-summary"
        );

    const contador =
        document.getElementById(
            "cart-count"
        );

    const totalElemento =
        document.getElementById(
            "cart-total"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    // ----------------------------------------
    // CONTADOR
    // ----------------------------------------

    const cantidadTotal =
        carrito.reduce(
            (total, producto) =>
                total + producto.cantidad,
            0
        );


    if (contador) {

        contador.textContent =
            cantidadTotal;

    }


    // ----------------------------------------
    // CARRITO VACÍO
    // ----------------------------------------

    if (carrito.length === 0) {

        if (vacio) {

            vacio.style.display =
                "block";

        }

        if (resumen) {

            resumen.style.display =
                "none";

        }

        return;

    }


    if (vacio) {

        vacio.style.display =
            "none";

    }


    if (resumen) {

        resumen.style.display =
            "block";

    }


    // ----------------------------------------
    // PRODUCTOS
    // ----------------------------------------

    carrito.forEach(producto => {

        const item =
            document.createElement("div");

        item.classList.add(
            "cart-item"
        );


        item.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

            <div class="cart-item-info">

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="cart-item-price">
                    $${producto.precio.toLocaleString("es-CO")} COP
                </p>

                <div class="cart-quantity">

                    <button
                        onclick="cambiarCantidad('${producto.nombre}', -1)"
                    >
                        −
                    </button>

                    <span>
                        ${producto.cantidad}
                    </span>

                    <button
                        onclick="cambiarCantidad('${producto.nombre}', 1)"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="cart-remove"
                onclick="eliminarDelCarrito('${producto.nombre}')"
                title="Eliminar"
            >
                🗑️
            </button>

        `;


        contenedor.appendChild(item);

    });


    // ----------------------------------------
    // TOTAL
    // ----------------------------------------

    const total =
        carrito.reduce(
            (suma, producto) =>
                suma +
                producto.precio *
                producto.cantidad,
            0
        );


    if (totalElemento) {

        totalElemento.textContent =
            `$${total.toLocaleString("es-CO")} COP`;

    }

}


// ========================================
// COMPRAR CARRITO POR WHATSAPP
// ========================================

function comprarCarritoWhatsApp() {

    if (carrito.length === 0) {
        return;
    }


    const numero =
        "573053779384";


    let mensaje =
        "Hola MONARQ, estoy interesado en comprar:%0A%0A";


    carrito.forEach(producto => {

        const subtotal =
            producto.precio *
            producto.cantidad;


        mensaje +=
            `• ${producto.nombre} x${producto.cantidad} - $${subtotal.toLocaleString("es-CO")} COP%0A`;

    });


    const total =
        carrito.reduce(
            (suma, producto) =>
                suma +
                producto.precio *
                producto.cantidad,
            0
        );


    mensaje +=
        `%0ATotal: $${total.toLocaleString("es-CO")} COP`;


    window.open(
        `https://wa.me/${numero}?text=${mensaje}`,
        "_blank"
    );

}


// ========================================
// BOTÓN WHATSAPP DEL CARRITO
// ========================================

const botonWhatsApp =
    document.getElementById(
        "cart-whatsapp"
    );


if (botonWhatsApp) {

    botonWhatsApp.addEventListener(
        "click",
        comprarCarritoWhatsApp
    );

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


    if (
        !("IntersectionObserver" in window)
    ) {

        elementos.forEach(
            elemento => {

                elemento.classList.add(
                    "visible"
                );

            }
        );

        return;

    }


    if (observadorProductos) {

        observadorProductos.disconnect();

    }


    observadorProductos =
        new IntersectionObserver(
            entradas => {

                entradas.forEach(
                    entrada => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "visible"
                            );

                            observadorProductos.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elementos.forEach(
        elemento => {

            observadorProductos.observe(
                elemento
            );

        }
    );

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

                        <button
                            class="btn-product"
                            onclick="agregarAlCarrito('${producto.nombre}')"
                        >
                            <strong>
                                ${traducir("buy")}
                            </strong>
                        </button>

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


    iniciarAnimaciones();

}


// ========================================
// SHOWCASE
// ========================================

const productosDestacados =
    productos.filter(
        producto =>
            producto.destacado
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
            "#";


        showcaseButton.onclick =
            function(event) {

                event.preventDefault();

                agregarAlCarrito(
                    producto.nombre
                );

            };

    }


    document
        .querySelectorAll(
            ".showcase-dot"
        )
        .forEach(
            (dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === showcaseIndex
                );

            }
        );

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


    document.documentElement.lang =
        language;


    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(
        element => {

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

        }
    );


    // ----------------------------------------
    // BOTONES DE IDIOMA
    // ----------------------------------------

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


    // ----------------------------------------
    // GUARDAR IDIOMA
    // ----------------------------------------

    localStorage.setItem(
        "monarq-language",
        language
    );


    // ----------------------------------------
    // ACTUALIZAR PRODUCTOS
    // ----------------------------------------

    mostrarProductos();


    // ----------------------------------------
    // ACTUALIZAR SHOWCASE
    // ----------------------------------------

    mostrarShowcase(
        showcaseIndex
    );


    // ----------------------------------------
    // ACTUALIZAR CARRITO
    // ----------------------------------------

    mostrarCarrito();

}


// ========================================
// IDIOMA GUARDADO
// ========================================

const idiomaGuardado =
    localStorage.getItem(
        "monarq-language"
    ) || "es";


// ========================================
// INICIAR
// ========================================

changeLanguage(
    idiomaGuardado
);


// ========================================
// INICIAR CARRITO
// ========================================

mostrarCarrito();


// ========================================
// CAMBIO AUTOMÁTICO DEL SHOWCASE
// ========================================

setInterval(
    () => {

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

    },
    5000
);