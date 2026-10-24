// El catalogo se define en js/productos.js (cargado ANTES que este archivo).
// Si el inventario guardo cambios en este navegador, se aplican aqui.

const inventarioGuardado = (function () {
    try {
        const datos = localStorage.getItem("monarq-inventario");
        return datos ? JSON.parse(datos) : null;
    } catch (error) {
        return null;
    }
})();

if (Array.isArray(inventarioGuardado) && inventarioGuardado.length) {
    productos.splice(0, productos.length, ...inventarioGuardado);
}

// ========================================
// TRADUCCIONES
// ========================================

const translations = {

    es: {

        nav_home: "Inicio",
        nav_products: "Productos",
        nav_assistant: "Asistente",
        nav_about: "Sobre MONARQ",
        nav_contact: "Contacto",
        menu_title: "Explora MONARQ",
        menu_close: "Cerrar",
        menu_feature_eyebrow: "Encuentra tu fragancia",
        menu_assistant_link: "Déjate recomendar",
        menu_feature_description: "Cuéntale al asistente qué buscas y recibe recomendaciones del catálogo actual.",
        menu_explore_title: "Explorar por",
        menu_gender: "Género",
        menu_female: "Femeninas",
        menu_male: "Masculinas",
        menu_popular_title: "Atajos populares",
        menu_popular: "Más populares",
        menu_available: "Productos disponibles",
        menu_fresh: "Fragancias frescas para todos los días",
        menu_sweet: "Fragancias dulces para una cita",
        menu_help_title: "Ayuda",
        menu_help_description: "Resuelve tus preguntas con nuestro equipo.",
        menu_availability: "Disponibilidad",
        menu_payments: "Pagos y cambios",
        menu_shipping: "Envíos",
        menu_whatsapp: "Contactar por WhatsApp",
        buy: "Comprar",

        hero_tag: "Fragancias exclusivas",
        hero_title: "Corona tu estilo",

        hero_description:
            "Elige una fragancia que hable de ti. MONARQ te acompaña a descubrirla.",

        hero_button: "Explorar colección",

        collection_title: "Nuestra Colección",

        sort_label: "Ordenar por",

        sort_az: "A-Z",

        sort_za: "Z-A",

        sort_mayor: "Mayor precio",

        sort_menor: "Menor precio",

        sort_valoracion: "Valoración",

        sort_genero: "Género",

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
        product_added: "Agregado",

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
        cart_buy: "Comprar por WhatsApp",

        featured_eyebrow: "Selección MONARQ",
        featured_title: "Fragancia destacada",
        assistant_title: "Encuentra tu fragancia con MONARQ",
        assistant_intro: "Describe la ocasión, el aroma o tu presupuesto y recibe recomendaciones de nuestro catálogo.",
        assistant_placeholder: "Cuéntame qué tipo de fragancia buscas...",
        assistant_send: "Preguntar a MONARQ",
        assistant_note: "Modo demostración: las recomendaciones se calculan sobre nuestro catálogo actual.",
        assistant_error_empty: "Escribe qué tipo de fragancia estás buscando para recibir recomendaciones.",
        assistant_typing: "El asistente está pensando...",
        assistant_you: "Tú",
        assistant_bot: "Asistente",
        assistant_pending: "El asistente inteligente ya está trabajando aquí: son recomendaciones de demostración. La versión con inteligencia artificial se conectará desde el backend en una próxima etapa.",
        assistant_for_budget: "Estos perfumes encajan con tu presupuesto:",
        assistant_for_category: "Aquí tienes opciones para ti:",
        assistant_for_fresh: "Estos son algunos de nuestros perfumes más frescos:",
        assistant_for_sweet: "Un toque dulce que encaja perfecto:",
        assistant_favorites: "No encontré una coincidencia exacta, pero estos son nuestros favoritos:",
        assistant_no_category: "No encontré perfumes que coincidan con esos criterios. Prueba a cambiar tu pregunta.",
        assistant_no_results: "No encontré perfumes dentro de tu presupuesto. Te muestro nuestros favoritos:",
        assistant_available: "Disponible",

        assistant_example_1: "Busco un perfume dulce para una cita.",
        assistant_example_2: "Quiero un perfume que cueste menos de 150.000 pesos.",
        assistant_example_3: "Recomiéndame tres perfumes para usar todos los días.",
        assistant_example_4: "Busco algo fresco para el día a día."

    },


    en: {
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About MONARQ",
        nav_contact: "Contact",
        menu_title: "Explore MONARQ",
        menu_close: "Close",
        menu_feature_eyebrow: "Find your fragrance",
        menu_assistant_link: "Get a recommendation",
        menu_feature_description: "Tell the assistant what you are looking for and receive recommendations from the current catalog.",
        menu_explore_title: "Explore by",
        menu_gender: "Gender",
        menu_female: "Women's",
        menu_male: "Men's",
        menu_popular_title: "Popular shortcuts",
        menu_popular: "Most popular",
        menu_available: "Available products",
        menu_fresh: "Fresh everyday fragrances",
        menu_sweet: "Sweet fragrances for a date",
        menu_help_title: "Help",
        menu_help_description: "Get your questions answered by our team.",
        menu_availability: "Availability",
        menu_payments: "Payments and exchanges",
        menu_shipping: "Shipping",
        menu_whatsapp: "Contact us on WhatsApp",
        buy: "Shop Now",

        hero_tag: "Exclusive fragrances",
        hero_title: "Crown your style",

        hero_description:
            "Choose a fragrance that speaks for you. MONARQ is here to help you discover it.",

        hero_button: "Explore collection",

        collection_title: "Our Collection",

        sort_label: "Sort by",

        sort_az: "A-Z",

        sort_za: "Z-A",

        sort_mayor: "Highest price",

        sort_menor: "Lowest price",

        sort_valoracion: "Rating",

        sort_genero: "Gender",

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
        product_added: "Added",

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
        cart_buy: "Buy via WhatsApp",

        featured_eyebrow: "MONARQ selection",
        featured_title: "Featured fragrance",
        assistant_title: "Find your fragrance with MONARQ",
        assistant_intro: "Describe the occasion, scent, or your budget and receive recommendations from our catalog.",
        assistant_placeholder: "Tell me what kind of fragrance you are looking for...",
        assistant_send: "Ask MONARQ",
        assistant_note: "Demo mode: recommendations are calculated from our current catalog.",
        assistant_error_empty: "Tell us what kind of fragrance you are looking for to receive recommendations.",
        assistant_typing: "The assistant is thinking...",
        assistant_you: "You",
        assistant_bot: "Assistant",
        assistant_pending: "The smart assistant is already working here: these are demo recommendations. The AI-powered version will be connected from the backend in a future stage.",
        assistant_for_budget: "These fragrances fit your budget:",
        assistant_for_category: "Here are great options for you:",
        assistant_for_fresh: "Some of our freshest fragrances:",
        assistant_for_sweet: "A sweet touch that fits perfectly:",
        assistant_favorites: "No exact match found, but these are our favorites:",
        assistant_no_category: "I couldn't find fragrances matching those criteria. Try changing your question.",
        assistant_no_results: "I couldn't find fragrances in your budget. Here are our favorites:",
        assistant_available: "Available",

        assistant_example_1: "I'm looking for a sweet perfume for a date.",
        assistant_example_2: "I want a perfume that costs less than 150,000 pesos.",
        assistant_example_3: "Recommend three perfumes for everyday use.",
        assistant_example_4: "I'm looking for something fresh for everyday wear."
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

    if (!producto) return false;

    if (producto.stock <= 0) return false;


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

        else {

            return false;

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

    return true;

}


// ========================================
// COMPRAR CON ANIMACIÓN
// ========================================

function comprarProducto(boton, nombreProducto) {

    const producto =
        productos.find(
            producto =>
                producto.nombre === nombreProducto
        );

    if (!producto || producto.stock <= 0) {

        return;

    }

    const agregado =
        agregarAlCarrito(nombreProducto);

    if (!agregado) {

        return;

    }

    animarVueloAlCarrito(boton);
    feedbackBoton(boton);

}


// ========================================
// VOLAR LA IMAGEN HASTA EL CARRITO
// ========================================

function animarVueloAlCarrito(boton) {

    if (
        window.matchMedia &&
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        pulsoCarrito();
        return;

    }

    const contenedor =
        boton.closest(
            ".product-card, .recomendacion-card, .showcase"
        ) || boton;

    const imagen =
        contenedor.querySelector("img");

    const carrito =
        document.getElementById(
            "cart-button"
        );

    let rectoCarrito = null;

    if (carrito) {

        const r =
            carrito.getBoundingClientRect();

        if (r.width > 0 || r.height > 0) {

            rectoCarrito = r;

        }

    }

    let xFin;
    let yFin;

    if (rectoCarrito) {

        xFin =
            rectoCarrito.left +
            rectoCarrito.width / 2;

        yFin =
            rectoCarrito.top +
            rectoCarrito.height / 2;

    } else {

        xFin =
            window.innerWidth - 36;

        yFin = 40;

    }

    const desde =
        (imagen || boton)
            .getBoundingClientRect();

    const ancho =
        Math.max(
            46,
            Math.min(desde.width, 92)
        );

    const alto =
        Math.max(
            46,
            Math.min(desde.height, 108)
        );

    const vuelo =
        document.createElement("img");

    vuelo.className =
        "vuelo-carrito";

    if (imagen) {

        vuelo.src =
            imagen.src;

        vuelo.alt = "";

    }

    vuelo.style.width =
        ancho + "px";

    vuelo.style.height =
        alto + "px";

    vuelo.style.left =
        (desde.left +
            desde.width / 2 -
            ancho / 2) + "px";

    vuelo.style.top =
        (desde.top +
            desde.height / 2 -
            alto / 2) + "px";

    document.body.appendChild(vuelo);

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            const dx =
                xFin -
                (parseFloat(vuelo.style.left) +
                    ancho / 2);

            const dy =
                yFin -
                (parseFloat(vuelo.style.top) +
                    alto / 2);

            vuelo.style.transform =
                `translate(${dx}px, ${dy}px) scale(.18)`;

            vuelo.style.opacity = "0";

        });

    });

    setTimeout(() => {

        vuelo.remove();

        pulsoCarrito();

    }, 700);

}


// ========================================
// PULSO DEL CARRITO
// ========================================

function pulsoCarrito() {

    const carrito =
        document.getElementById(
            "cart-button"
        );

    const conteo =
        document.getElementById(
            "cart-count"
        );

    [carrito, conteo].forEach(
        elemento => {

            if (!elemento) return;

            elemento.classList.remove(
                "bump"
            );

            void elemento.offsetWidth;

            elemento.classList.add(
                "bump"
            );

            setTimeout(() => {

                elemento.classList.remove(
                    "bump"
                );

            }, 500);

        }
    );

}


// ========================================
// FEEDBACK DEL BOTÓN
// ========================================

function feedbackBoton(boton) {

    if (!boton || boton.disabled) {

        return;

    }

    const original =
        boton.innerHTML;

    boton.classList.add(
        "btn-agregado"
    );

    boton.innerHTML =
        "✓ " +
        traducir("product_added");

    setTimeout(() => {

        boton.innerHTML =
            original;

        boton.classList.remove(
            "btn-agregado"
        );

    }, 950);

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


    const productosFiltrados = productos.filter(productoPasaFiltros);

    const ordenados =
        typeof ordenarProductos === "function"
            ? ordenarProductos(productosFiltrados, ordenActual)
            : productosFiltrados;


    ordenados.forEach(producto => {

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

            <p class="product-brand">${producto.marca}</p>

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

            <button class="product-details" type="button" onclick="verDetalleProducto('${producto.nombre}')">
                Ver detalles
            </button>


            ${
                disponible

                    ? `

                        <button
                            class="btn-product"
                            onclick="comprarProducto(this, '${producto.nombre}')"
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

                comprarProducto(
                    showcaseButton,
                    producto.nombre
                );

            };

    }


}

// ========================================
// MENÚ DE DESCUBRIMIENTO
// ========================================

const navToggle = document.querySelector(".nav-toggle");
const discoveryMenu = document.getElementById("discovery-menu");
const menuBackdrop = document.querySelector(".menu-backdrop");
const menuClose = document.querySelector(".menu-close");
let ultimoFocoMenu = null;

function cerrarMenuDescubrimiento() {
    if (!discoveryMenu || !navToggle) return;

    discoveryMenu.classList.remove("is-open");
    discoveryMenu.setAttribute("aria-hidden", "true");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");

    if (menuBackdrop) {
        menuBackdrop.hidden = true;
    }

    if (ultimoFocoMenu) {
        ultimoFocoMenu.focus();
    }
}

function abrirMenuDescubrimiento() {
    if (!discoveryMenu || !navToggle) return;

    ultimoFocoMenu = document.activeElement;
    discoveryMenu.classList.add("is-open");
    discoveryMenu.setAttribute("aria-hidden", "false");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");

    if (menuBackdrop) {
        menuBackdrop.hidden = false;
    }

    const primerEnlace = discoveryMenu.querySelector("a, button");
    if (primerEnlace) primerEnlace.focus();
}

if (navToggle && discoveryMenu) {
    navToggle.addEventListener("click", () => {
        if (discoveryMenu.classList.contains("is-open")) {
            cerrarMenuDescubrimiento();
        } else {
            abrirMenuDescubrimiento();
        }
    });

    discoveryMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", cerrarMenuDescubrimiento);
    });
}

if (menuClose) menuClose.addEventListener("click", cerrarMenuDescubrimiento);
if (menuBackdrop) menuBackdrop.addEventListener("click", cerrarMenuDescubrimiento);

document.addEventListener("keydown", event => {
    if (!discoveryMenu?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
        cerrarMenuDescubrimiento();
        return;
    }

    if (event.key === "Tab") {
        const elementos = discoveryMenu.querySelectorAll(
            "a[href], button:not([disabled])"
        );
        const primero = elementos[0];
        const ultimo = elementos[elementos.length - 1];

        if (event.shiftKey && document.activeElement === primero) {
            event.preventDefault();
            ultimo.focus();
        } else if (!event.shiftKey && document.activeElement === ultimo) {
            event.preventDefault();
            primero.focus();
        }
    }
});

// ========================================
// PANEL DEL CARRITO
// ========================================

const cartButton = document.getElementById("cart-button");
const cartPanel = document.getElementById("cart-panel");
const cartBackdrop = document.querySelector(".cart-backdrop");
const cartClose = document.querySelector(".cart-close");
let ultimoFocoCarrito = null;

function cerrarPanelCarrito() {
    if (!cartPanel || !cartButton) return;

    cartPanel.classList.remove("is-open");
    cartPanel.setAttribute("aria-hidden", "true");
    cartButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("cart-open");

    if (cartBackdrop) cartBackdrop.hidden = true;
    if (ultimoFocoCarrito) ultimoFocoCarrito.focus();
}

function abrirPanelCarrito() {
    if (!cartPanel || !cartButton) return;

    if (discoveryMenu?.classList.contains("is-open")) {
        cerrarMenuDescubrimiento();
    }

    ultimoFocoCarrito = document.activeElement;
    cartPanel.classList.add("is-open");
    cartPanel.setAttribute("aria-hidden", "false");
    cartButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("cart-open");

    if (cartBackdrop) cartBackdrop.hidden = false;
    if (cartClose) cartClose.focus();
}

if (cartButton && cartPanel) {
    cartButton.addEventListener("click", () => {
        if (cartPanel.classList.contains("is-open")) {
            cerrarPanelCarrito();
        } else {
            abrirPanelCarrito();
        }
    });
}

if (cartClose) cartClose.addEventListener("click", cerrarPanelCarrito);
if (cartBackdrop) cartBackdrop.addEventListener("click", cerrarPanelCarrito);

document.querySelectorAll("[data-close-cart]").forEach(link => {
    link.addEventListener("click", cerrarPanelCarrito);
});

document.addEventListener("keydown", event => {
    if (!cartPanel?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
        cerrarPanelCarrito();
        return;
    }

    if (event.key === "Tab") {
        const elementos = Array.from(cartPanel.querySelectorAll(
            "a[href], button:not([disabled])"
        )).filter(elemento => elemento.getClientRects().length > 0);
        const primero = elementos[0];
        const ultimo = elementos[elementos.length - 1];

        if (event.shiftKey && document.activeElement === primero) {
            event.preventDefault();
            ultimo.focus();
        } else if (!event.shiftKey && document.activeElement === ultimo) {
            event.preventDefault();
            primero.focus();
        }
    }
});

// ========================================
// FILTROS DEL CATÁLOGO
// ========================================

const filtrosCatalogo = {
    categoria: "",
    marca: "",
    disponible: false,
    popular: false
};

function productoPasaFiltros(producto) {
    return (
        (!filtrosCatalogo.categoria || producto.categoria === filtrosCatalogo.categoria) &&
        (!filtrosCatalogo.marca || producto.marca === filtrosCatalogo.marca) &&
        (!filtrosCatalogo.disponible || producto.stock > 0) &&
        (!filtrosCatalogo.popular || producto.etiqueta === "showcase_most_sold")
    );
}

function actualizarEstadoFiltroCatalogo() {
    const estado = document.getElementById("catalog-filter-status");
    const limpiar = document.getElementById("clear-catalog-filter");
    if (!estado) return;

    const activos = [];
    if (filtrosCatalogo.categoria) activos.push(traducir(filtrosCatalogo.categoria));
    if (filtrosCatalogo.marca) activos.push(filtrosCatalogo.marca);
    if (filtrosCatalogo.disponible) activos.push("Disponibles");
    if (filtrosCatalogo.popular) activos.push("Más vendidos");

    const total = productos.filter(productoPasaFiltros).length;
    estado.querySelector("span").textContent = activos.length
        ? `${total} fragancias: ${activos.join(" · ")}`
        : `${total} fragancias disponibles en la colección`;

    if (limpiar) limpiar.hidden = activos.length === 0;
}

function sincronizarControlesFiltro() {
    const genero = document.getElementById("filter-gender");
    const marca = document.getElementById("filter-brand");
    const disponible = document.getElementById("filter-available");

    if (genero) genero.value = filtrosCatalogo.categoria;
    if (marca) marca.value = filtrosCatalogo.marca;
    if (disponible) disponible.checked = filtrosCatalogo.disponible;
}

function actualizarOpcionesFiltro() {
    const genero = document.getElementById("filter-gender");
    const marca = document.getElementById("filter-brand");

    if (genero) {
        [...genero.options].forEach(opcion => {
            if (!opcion.value) return;
            opcion.disabled = !productos.some(producto =>
                producto.categoria === opcion.value &&
                (!filtrosCatalogo.marca || producto.marca === filtrosCatalogo.marca) &&
                (!filtrosCatalogo.disponible || producto.stock > 0) &&
                (!filtrosCatalogo.popular || producto.etiqueta === "showcase_most_sold")
            );
        });
    }

    if (marca) {
        [...marca.options].forEach(opcion => {
            if (!opcion.value) return;
            opcion.disabled = !productos.some(producto =>
                producto.marca === opcion.value &&
                (!filtrosCatalogo.categoria || producto.categoria === filtrosCatalogo.categoria) &&
                (!filtrosCatalogo.disponible || producto.stock > 0) &&
                (!filtrosCatalogo.popular || producto.etiqueta === "showcase_most_sold")
            );
        });
    }
}

function actualizarCatalogo() {
    sincronizarControlesFiltro();
    actualizarOpcionesFiltro();
    actualizarEstadoFiltroCatalogo();
    mostrarProductos();
}

function aplicarPreseleccionCatalogo(preseleccion) {
    filtrosCatalogo.categoria = "";
    filtrosCatalogo.marca = "";
    filtrosCatalogo.disponible = false;
    filtrosCatalogo.popular = false;

    if (preseleccion === "male") filtrosCatalogo.categoria = "category_male";
    if (preseleccion === "female") filtrosCatalogo.categoria = "category_female";
    if (preseleccion === "unisex") filtrosCatalogo.categoria = "category_unisex";
    if (preseleccion === "popular") filtrosCatalogo.popular = true;
    if (preseleccion === "available") filtrosCatalogo.disponible = true;

    actualizarCatalogo();
}

function crearExploracionPorMarca() {
    const contenedor = document.getElementById("catalog-brands");
    const selector = document.getElementById("filter-brand");
    if (!contenedor || !selector) return;

    const marcas = [...new Set(productos.map(producto => producto.marca))].sort();
    marcas.forEach(marca => {
        const enlace = document.createElement("button");
        enlace.type = "button";
        enlace.textContent = marca;
        enlace.addEventListener("click", () => {
            filtrosCatalogo.marca = marca;
            actualizarCatalogo();
        });
        contenedor.appendChild(enlace);

        const opcion = document.createElement("option");
        opcion.value = marca;
        opcion.textContent = marca;
        selector.appendChild(opcion);
    });
}

document.querySelectorAll("[data-product-filter], [data-catalog-preset]").forEach(link => {
    link.addEventListener("click", () => {
        aplicarPreseleccionCatalogo(link.dataset.productFilter || link.dataset.catalogPreset);
    });
});

const filtroGenero = document.getElementById("filter-gender");
const filtroMarca = document.getElementById("filter-brand");
const filtroDisponible = document.getElementById("filter-available");

if (filtroGenero) filtroGenero.addEventListener("change", () => {
    filtrosCatalogo.categoria = filtroGenero.value;
    actualizarCatalogo();
});

if (filtroMarca) filtroMarca.addEventListener("change", () => {
    filtrosCatalogo.marca = filtroMarca.value;
    actualizarCatalogo();
});

if (filtroDisponible) filtroDisponible.addEventListener("change", () => {
    filtrosCatalogo.disponible = filtroDisponible.checked;
    actualizarCatalogo();
});

const limpiarFiltroCatalogo = document.getElementById("clear-catalog-filter");
if (limpiarFiltroCatalogo) {
    limpiarFiltroCatalogo.addEventListener("click", () => {
        aplicarPreseleccionCatalogo("");
    });
}

crearExploracionPorMarca();
actualizarOpcionesFiltro();
actualizarEstadoFiltroCatalogo();

const filtrosToggle = document.getElementById("catalog-filters-toggle");
const filtrosPanel = document.getElementById("catalog-filters");

if (filtrosToggle && filtrosPanel) {
    filtrosToggle.addEventListener("click", () => {
        const abierto = filtrosPanel.classList.toggle("is-open");
        filtrosToggle.setAttribute("aria-expanded", String(abierto));
    });
}

// ========================================
// DETALLE DE PRODUCTO
// ========================================

const detalleProducto = document.getElementById("product-detail");
const detalleProductoBackdrop = document.querySelector(".product-detail-backdrop");
const cerrarDetalleProducto = document.querySelector(".product-detail-close");
let ultimoFocoDetalle = null;

function cerrarDetalleDeProducto() {
    if (!detalleProducto) return;

    detalleProducto.classList.remove("is-open");
    detalleProducto.setAttribute("aria-hidden", "true");
    if (detalleProductoBackdrop) detalleProductoBackdrop.hidden = true;
    document.body.classList.remove("product-detail-open");
    if (ultimoFocoDetalle) ultimoFocoDetalle.focus();
}

function verDetalleProducto(nombreProducto) {
    const producto = productos.find(producto => producto.nombre === nombreProducto);
    const contenido = detalleProducto?.querySelector(".product-detail-content");
    if (!producto || !detalleProducto || !contenido) return;

    const disponible = producto.stock > 0;
    contenido.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p class="product-brand">${producto.marca}</p>
        <h3>${producto.nombre}</h3>
        <dl class="product-detail-list">
            <div><dt>Género</dt><dd>${traducir(producto.categoria)}</dd></div>
            <div><dt>Precio</dt><dd>$${producto.precio.toLocaleString("es-CO")} COP</dd></div>
            <div><dt>Disponibilidad</dt><dd class="${disponible ? "stock-disponible" : "stock-agotado"}">${disponible ? `${traducir("product_available")}: ${producto.stock}` : traducir("product_sold_out")}</dd></div>
        </dl>
    `;

    const boton = document.createElement("button");
    boton.className = disponible ? "btn-product" : "btn-product btn-agotado";
    boton.disabled = !disponible;
    boton.textContent = disponible ? traducir("buy") : traducir("product_sold_out");
    if (disponible) {
        boton.addEventListener("click", () => comprarProducto(boton, producto.nombre));
    }
    contenido.appendChild(boton);

    ultimoFocoDetalle = document.activeElement;
    detalleProducto.classList.add("is-open");
    detalleProducto.setAttribute("aria-hidden", "false");
    if (detalleProductoBackdrop) detalleProductoBackdrop.hidden = false;
    document.body.classList.add("product-detail-open");
    if (cerrarDetalleProducto) cerrarDetalleProducto.focus();
}

if (cerrarDetalleProducto) cerrarDetalleProducto.addEventListener("click", cerrarDetalleDeProducto);
if (detalleProductoBackdrop) detalleProductoBackdrop.addEventListener("click", cerrarDetalleDeProducto);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && detalleProducto?.classList.contains("is-open")) {
        cerrarDetalleDeProducto();
    }
});

// ========================================
// EXPERIENCIAS DE CLIENTES
// ========================================

const dialogoExperiencia = document.getElementById("experience-dialog");
const abrirDialogoExperiencia = document.getElementById("open-experience-dialog");
const cerrarDialogoExperiencia = document.querySelector(".experience-dialog-close");
const cancelarExperiencia = document.querySelector(".experience-cancel");
const formularioExperiencia = document.getElementById("experience-form");
const selectorExperienciaProducto = document.getElementById("experience-product");
const mensajeExperiencia = document.getElementById("experience-form-message");

if (selectorExperienciaProducto) {
    productos.slice().sort((a, b) => a.nombre.localeCompare(b.nombre, "es"))
        .forEach(producto => {
            const opcion = document.createElement("option");
            opcion.value = producto.nombre;
            opcion.textContent = `${producto.nombre} (${producto.marca})`;
            selectorExperienciaProducto.appendChild(opcion);
        });
}

function cerrarFormularioExperiencia() {
    if (dialogoExperiencia?.open) dialogoExperiencia.close();
}

if (abrirDialogoExperiencia && dialogoExperiencia) {
    abrirDialogoExperiencia.addEventListener("click", () => {
        dialogoExperiencia.showModal();
        document.getElementById("experience-product")?.focus();
    });
}

if (cerrarDialogoExperiencia) {
    cerrarDialogoExperiencia.addEventListener("click", cerrarFormularioExperiencia);
}

if (cancelarExperiencia) cancelarExperiencia.addEventListener("click", cerrarFormularioExperiencia);

if (dialogoExperiencia) {
    dialogoExperiencia.addEventListener("click", evento => {
        if (evento.target === dialogoExperiencia) cerrarFormularioExperiencia();
    });
}

function mostrarMensajeExperiencia(mensaje, esExito) {
    if (!mensajeExperiencia) return;
    mensajeExperiencia.textContent = mensaje;
    mensajeExperiencia.classList.toggle("is-success", Boolean(esExito));
}

if (formularioExperiencia) {
    formularioExperiencia.addEventListener("submit", async evento => {
        evento.preventDefault();

        const comentario = document.getElementById("experience-comment");
        const imagen = document.getElementById("experience-image");
        const botonEnvio = formularioExperiencia.querySelector("button[type='submit']");
        const texto = comentario?.value.trim() || "";
        const archivo = imagen?.files?.[0];

        if (texto.length < 20 || texto.length > 600) {
            mostrarMensajeExperiencia("Escribe una experiencia de entre 20 y 600 caracteres.", false);
            comentario?.focus();
            return;
        }

        if (archivo && !["image/jpeg", "image/png", "image/webp"].includes(archivo.type)) {
            mostrarMensajeExperiencia("La foto debe estar en formato JPG, PNG o WEBP.", false);
            imagen?.focus();
            return;
        }

        if (archivo && archivo.size > 5 * 1024 * 1024) {
            mostrarMensajeExperiencia("La foto supera el límite de 5 MB.", false);
            imagen?.focus();
            return;
        }

        if (botonEnvio) botonEnvio.disabled = true;
        mostrarMensajeExperiencia("Validando la información y preparando el envío...", true);
        await new Promise(resolver => setTimeout(resolver, 350));

        // No se transmite ni conserva información personal sin un servicio seguro de revisión.
        mostrarMensajeExperiencia("El envío no se realizó: MONARQ aún no tiene un canal seguro de recepción y revisión configurado.", false);
        if (botonEnvio) botonEnvio.disabled = false;
    });
}

// ========================================
// ORDEN DE LA COLECCION
// ========================================

let ordenActual = "az";

const selectorOrden =
    document.getElementById("sort-select");

if (selectorOrden) {

    ordenActual =
        selectorOrden.value || "az";

    selectorOrden.addEventListener(
        "change",
        () => {

            ordenActual =
                selectorOrden.value;

            mostrarProductos();

        }
    );

}

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


    document.querySelectorAll(
        "[data-i18n-placeholder]"
    ).forEach(
        element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );


            if (
                translations[language][key]
            ) {

                element.setAttribute(
                    "placeholder",
                    translations[language][key]
                );

            }

        }
    );


    document.querySelectorAll(
        ".assistant-chips .chip"
    ).forEach(
        (chip, indice) => {

            const texto =
                translations[language][
                    "assistant_example_" +
                    (indice + 1)
                ];


            if (texto) {

                chip.textContent =
                    texto;

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
    actualizarEstadoFiltroCatalogo();


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
// ASISTENTE DE RECOMENDACIONES
// ========================================

const asistenteChat =
    document.getElementById(
        "assistant-chat"
    );

const asistenteForm =
    document.getElementById(
        "assistant-form"
    );

const asistenteInput =
    document.getElementById(
        "assistant-input"
    );

const asistenteEstado =
    document.getElementById(
        "assistant-status"
    );

const asistenteBoton =
    asistenteForm?.querySelector(
        'button[type="submit"]'
    );

const asistentesChips =
    document.querySelectorAll(
        ".assistant-chips .chip"
    );

let asistenteOcupado = false;


// ========================================
// NORMALIZAR TEXTO (quita mayúsculas y tildes)
// ========================================

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


// ========================================
// RECOMENDADOR DE DEMOSTRACIÓN
// (Se sustituirá por el asistente de IA del backend)
// ========================================

function recomendacionesDemo(pregunta) {
    const texto =
        normalizarTexto(pregunta);

    const idioma =
        document.documentElement.lang || "es";

    const t = translations[idioma];

    let candidatos =
        productos.filter(
            producto =>
                producto.stock > 0
        );

    // ----------------------------------------
    // PRESUPUESTO
    // ----------------------------------------

    let presupuesto = null;
    const numeros = texto.match(/\d[\d.,]*/g);

    if (numeros) {

        const valores =
            numeros
                .map(n =>
                    parseFloat(
                        n
                            .replace(/\./g, "")
                            .replace(/,/g, "")
                    )
                )
                .filter(
                    valor =>
                        Number.isFinite(valor) &&
                        valor > 0
                );

        if (valores.length) {

            presupuesto =
                Math.min(...valores);

        }

    }

    const quiereBaratos =
        /barato|economic/.test(texto);

    const quiereCaros =
        /caro|premium|lujo/.test(texto);

    if (
        presupuesto !== null ||
        quiereBaratos
    ) {

        const limite =
            presupuesto !== null
                ? presupuesto
                : 150000;

        candidatos =
            candidatos.filter(
                producto =>
                    producto.precio <= limite
            );

    } else if (quiereCaros) {

        candidatos =
            candidatos.slice().sort(
                (a, b) =>
                    b.precio - a.precio
            );

    }

    // ----------------------------------------
    // CATEGORÍA
    // ----------------------------------------

    let categoria = null;

    if (
        /femenin|mujer|ella|dama/.test(texto)
    ) {

        categoria = "category_female";

    } else if (
        /masculin|hombre|para el|para mi porfa/.test(texto)
    ) {

        categoria = "category_male";

    } else if (
        /unisex/.test(texto)
    ) {

        categoria = "category_unisex";

    }

    if (categoria) {

        candidatos =
            candidatos.filter(
                producto =>
                    producto.categoria === categoria
            );

    }

    // ----------------------------------------
    // PERFIL: DULCE O FRESCO
    // (Heurística de demostración basada en el nombre)
    // ----------------------------------------

    let perfil = null;

    if (
        /dulce|sweet|vanilla|candy|choco|cookie|berry|caramelo/.test(texto)
    ) {

        perfil = "dulce";

    } else if (
        /fresco|fresh|mar|cítric|citric|aqua|verano|playa|ligero/.test(texto)
    ) {

        perfil = "fresco";

    }

    if (perfil && !categoria) {

        const claves =
            perfil === "dulce"
                ? ["candy", "vanilla", "bon", "choco", "cookie", "berry", "mallow", "whipped", "yara"]
                : ["island", "breeze", "dive", "aqua", "bahamas", "sky", "limon", "cloud", "citrus"];

        const filtrados =
            candidatos.filter(
                producto => {

                    const nombre =
                        normalizarTexto(
                            producto.nombre
                        );

                    return claves.some(
                        clave =>
                            nombre.includes(clave)
                    );

                }
            );

        if (filtrados.length) {

            candidatos = filtrados;

        } else {

            perfil = null;

        }

    }

    // ----------------------------------------
    // CANTIDAD Y DEDUPLICAR
    // ----------------------------------------

    const cantidad =
        /tres|3/.test(texto)
            ? 3
            : 4;

    const vistos = new Set();
    const unicos = [];

    candidatos.forEach(producto => {

        const clave =
            producto.nombre + "|" +
            producto.marca;

        if (!vistos.has(clave)) {

            vistos.add(clave);
            unicos.push(producto);

        }

    });

    const elegidos =
        unicos.slice(0, cantidad);

    // ----------------------------------------
    // RESPUESTA EN TEXTO
    // ----------------------------------------

    let respuesta;

    if (candidatos.length === 0) {

        respuesta =
            t.assistant_no_category;

    } else if (
        presupuesto !== null ||
        quiereBaratos
    ) {

        respuesta =
            t.assistant_for_budget;

    } else if (perfil === "fresco") {

        respuesta =
            t.assistant_for_fresh;

    } else if (perfil === "dulce") {

        respuesta =
            t.assistant_for_sweet;

    } else {

        respuesta =
            t.assistant_favorites;

    }

    return {
        respuesta,
        productos: elegidos
    };
}


// ========================================
// TARJETA DE RECOMENDACIÓN
// ========================================

function crearTarjetaRecomendacion(producto) {

    const disponible =
        producto.stock > 0;

    const tarjeta =
        document.createElement("article");

    tarjeta.className =
        "recomendacion-card";

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p class="type-product">${traducir(producto.categoria)}</p>
        <p class="product-price">$${producto.precio.toLocaleString("es-CO")} COP</p>
        <button class="${disponible ? "btn-product" : "btn-product btn-agotado"}" ${disponible ? "" : "disabled"}>
            ${disponible ? traducir("buy") : traducir("product_sold_out")}
        </button>
    `;

    if (disponible) {

        const boton =
            tarjeta.querySelector(
                "button"
            );

        boton.addEventListener(
            "click",
            () =>
                comprarProducto(
                    boton,
                    producto.nombre
                )
        );

    }

    return tarjeta;
}


// ========================================
// BURBUJA DE MENSAJE
// ========================================

function crearBurbuja(rol, contenido, recomendaciones) {

    const mensaje =
        document.createElement("div");

    mensaje.className =
        "agente-mensaje agente-" + rol;

    const nombre =
        document.createElement("span");

    nombre.className =
        "agente-nombre";

    nombre.textContent =
        rol === "usuario"
            ? traducir("assistant_you")
            : traducir("assistant_bot");

    const texto =
        document.createElement("p");

    texto.className =
        "agente-texto";

    texto.textContent =
        contenido;

    mensaje.append(nombre, texto);

    if (
        recomendaciones &&
        recomendaciones.length > 0
    ) {

        const grupo =
            document.createElement("div");

        grupo.className =
            "recomendaciones";

        recomendaciones.forEach(producto => {

            grupo.appendChild(
                crearTarjetaRecomendacion(
                    producto
                )
            );

        });

        mensaje.appendChild(grupo);

    }

    asistenteChat.appendChild(mensaje);
    asistenteChat.scrollTop =
        asistenteChat.scrollHeight;

}


// ========================================
// ESTADO DE PROCESAMIENTO
// ========================================

function mostrarPensando() {

    const burbuja =
        document.createElement("div");

    burbuja.className =
        "agente-mensaje agente-asistente agente-pensando";

    burbuja.setAttribute("role", "status");

    burbuja.textContent =
        traducir("assistant_typing");

    asistenteChat.appendChild(burbuja);
    asistenteChat.scrollTop =
        asistenteChat.scrollHeight;

    return burbuja;

}


// ========================================
// ENVIAR PREGUNTA
// ========================================

async function enviarPregunta(pregunta) {

    const texto =
        pregunta.trim();

    if (texto === "") {

        if (asistenteEstado) {
            asistenteEstado.textContent =
                traducir("assistant_error_empty");
        }

        asistenteInput?.focus();
        return false;

    }

    if (asistenteOcupado) {

        return false;

    }

    asistenteOcupado = true;

    if (asistenteEstado) {
        asistenteEstado.textContent = "";
    }

    if (asistenteBoton) {
        asistenteBoton.disabled = true;
    }

    crearBurbuja("usuario", texto);

    const pensando =
        mostrarPensando();

    await new Promise(
        resolver =>
            setTimeout(resolver, 900)
    );

    pensando.remove();

    const resultado =
        recomendacionesDemo(texto);

    crearBurbuja(
        "asistente",
        resultado.respuesta,
        resultado.productos
    );

    asistenteOcupado = false;

    if (asistenteBoton) {
        asistenteBoton.disabled = false;
    }

    return true;

}


// ========================================
// EVENTOS DEL ASISTENTE
// ========================================

if (asistenteForm) {

    asistenteForm.addEventListener(
        "submit",
        async evento => {

            evento.preventDefault();

            const enviada = await enviarPregunta(
                asistenteInput.value
            );

            if (enviada) {
                asistenteInput.value = "";
            }

        }
    );

}

asistentesChips.forEach(chip => {

    chip.addEventListener(
        "click",
        () => {

            asistenteInput.value =
                chip.textContent;

            asistenteInput.focus();

        }
    );

});

document.querySelectorAll("[data-assistant-prompt]").forEach(link => {
    link.addEventListener("click", () => {
        const pregunta = link.dataset.assistantPrompt;
        if (pregunta) enviarPregunta(pregunta);
    });
});


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
