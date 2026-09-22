// ========================================
// PRODUCTOS DE MONARQ
// ========================================

const productos = [
    {
        nombre: "Eclaire",
        imagen: "assets/images/eclaire.jpg",
        precio: 140000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "¡Más Vendido!"
    },

    {
        nombre: "Yara Rosa",
        imagen: "assets/images/yara.jpg",
        precio: 130000,
        categoria: "Femenino",
        disponible: true,
        stock: 0,
        destacado: true,
        etiqueta: "¡Más Vendido!"
    },

    {
        nombre: "Cloud Pink",
        imagen: "assets/images/cloudpink.jpg",
        precio: 140000,
        categoria: "Femenino",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Afeef",
        imagen: "assets/images/afeef.jpg",
        precio: 100000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Ajwad",
        imagen: "assets/images/ajwad.jpg",
        precio: 120000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Amethyst",
        imagen: "assets/images/amethyst.jpg",
        precio: 119000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Art of Universe",
        imagen: "assets/images/artofuniverse.jpg",
        precio: 159000,
        categoria: "category_unisex",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Asad",
        imagen: "assets/images/asad.jpg",
        precio: 160000,
        categoria: "category_male",
        disponible: true,
        stock: 0,
        destacado: true,
        etiqueta: "¡Más Vendido!"
    },
    {
        nombre: "Asad Bourbon",
        imagen: "assets/images/asadbourbon.jpg",
        precio: 159000,
        categoria: "category_male",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Asad Elixir",
        imagen: "assets/images/asadelixir.jpg",
        precio: 170000,
        categoria: "category_male",
        disponible: true,
        stock: 0,
        destacado: true,
        etiqueta: "¡Más Vendido!"
    },
    {
        nombre: "Qaed AI Fursan",
        imagen: "assets/images/fursan.jpg",
        precio: 130000,
        categoria: "category_male",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Recomendado⭐"
    },
    {
        nombre: "Her Confecsion",
        imagen: "assets/images/herfconfecsion.jpg",
        precio: 170000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Favorito✨"
    },
    {
        nombre: "Island Bliss",
        imagen: "assets/images/islandbliss.jpg",
        precio: 219000,
        categoria: "category_female",
        disponible: true,
        stock: 0,
        destacado: true,
        etiqueta: "¡Más Vendido!"
    },
    {
        nombre: "Island Breeze",
        imagen: "assets/images/islandbreeze.jpg",
        precio: 190000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Recomendado⭐"
    },
    {
        nombre: "Vanilla Freak",
        imagen: "assets/images/vanillafreak.jpg",
        precio: 159000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Whipped Pleasure",
        imagen: "assets/images/whipped.jpg",
        precio: 149000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Recomendado⭐"
    },
    {
        nombre: "Sublime",
        imagen: "assets/images/sublime.jpg",
        precio: 165000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Khamrah",
        imagen: "assets/images/khamra.jpg",
        precio: 175000,
        categoria: "category_unisex",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Khamrah Dukhan",
        imagen: "assets/images/khamradukan.jpg",
        precio: 180000,
        categoria: "category_unisex",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Recomendado⭐"
    },
    {
        nombre: "Khamrah Qhawa",
        imagen: "assets/images/khamraqhwa.jpg",
        precio: 179900,
        categoria: "category_unisex",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Yara Candy",
        imagen: "assets/images/yaracandy.jpg",
        precio: 149900,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Recomendado⭐"
    },
    {
        nombre: "Yara Elixir",
        imagen: "assets/images/yaraelixir.jpg",
        precio: 155000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    },
    {
        nombre: "Yara Moi",
        imagen: "assets/images/yaramoi.jpg",
        precio: 145000,
        categoria: "category_female",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Recomendado⭐"
    },
    {
        nombre: "Odyssey Mandarin Sky de Armaf",
        imagen: "assets/images/mandarinsky.jpg",
        precio: 145000,
        categoria: "category_unisex",
        disponible: true,
        stock: 2,
        destacado: true,
        etiqueta: "Destacado🔥"
    }

];


// ========================================
// GENERAR CATÁLOGO
// ========================================

function mostrarProductos() {

    const contenedor = document.querySelector(".products-container");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("product-card");

        const disponible = producto.stock > 0;

tarjeta.innerHTML = `
    <img 
        src="${producto.imagen}" 
        alt="${producto.nombre}"
    >

    <h3>
        <strong>${producto.nombre}</strong>
    </h3>

    <p class="type-product">
        ${traducir(producto.categoria)}
    </p>

    <p class="product-price">
        $${producto.precio.toLocaleString("es-CO")} COP
    </p>

    <p class="product-stock ${disponible ? "stock-disponible" : "stock-agotado"}">
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
            rel="noopener">
            <strong>${traducir("buy")}</strong>
        </a>

        `

    :   `
    
        <button 
            class="btn-product btn-agotado"
            disabled
        >
            ${traducir("product_sold_out")}
        </button>
    `
}
`;

        contenedor.appendChild(tarjeta);
    });
}

// ========================================
// GENERAR ENLACE DE WHATSAPP
// ========================================

function generarWhatsApp(producto) {

    const numero = "573053779384";

    const precio = producto.precio.toLocaleString("es-CO");

    const mensaje = `Hola MONARQ, estoy interesado en comprar ${producto.nombre} por $${precio} COP.`;

    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

// ========================================
// HERO SHOWCASE
// ========================================

const productosDestacados = productos.filter(
    producto => producto.destacado
);

let showcaseIndex = 0;


// Elementos del Showcase

const showcaseImage = document.getElementById("showcase-image");
const showcaseName = document.getElementById("showcase-name");
const showcaseCategory = document.getElementById("showcase-category");
const showcasePrice = document.getElementById("showcase-price");
const showcaseLabel = document.getElementById("showcase-label");
const showcaseButton = document.getElementById("showcase-button");

const showcasePrev = document.getElementById("showcase-prev");
const showcaseNext = document.getElementById("showcase-next");

const showcaseDots = document.getElementById("showcase-dots");


// ========================================
// MOSTRAR PRODUCTO DESTACADO
// ========================================

function mostrarShowcase(index) {

    const producto = productosDestacados[index];

    if (!producto) return;

    showcaseImage.src = producto.imagen;

    showcaseImage.alt = producto.nombre;

    showcaseName.textContent = producto.nombre;

    showcaseCategory.textContent =
    traducir(producto.categoria);

    showcasePrice.textContent =
        `$${producto.precio.toLocaleString("es-CO")} COP`;

    showcaseLabel.textContent = traducir(producto.etiqueta);


    // Botón de WhatsApp

   showcaseButton.textContent =
    traducir("showcase_buy");


    // Actualizar puntos

    document.querySelectorAll(".showcase-dot").forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === showcaseIndex
            );

        }
    );
}


// ========================================
// CREAR PUNTOS
// ========================================

productosDestacados.forEach((producto, index) => {

    const dot = document.createElement("button");

    dot.classList.add("showcase-dot");

    dot.addEventListener("click", () => {

        showcaseIndex = index;

        mostrarShowcase(showcaseIndex);

    });

    showcaseDots.appendChild(dot);

});


// ========================================
// SIGUIENTE
// ========================================

showcaseNext.addEventListener("click", () => {

    showcaseIndex++;

    if (showcaseIndex >= productosDestacados.length) {
        showcaseIndex = 0;
    }

    mostrarShowcase(showcaseIndex);

});


// ========================================
// ANTERIOR
// ========================================

showcasePrev.addEventListener("click", () => {

    showcaseIndex--;

    if (showcaseIndex < 0) {
        showcaseIndex = productosDestacados.length - 1;
    }

    mostrarShowcase(showcaseIndex);

});


// ========================================
// INICIAR
// ========================================

mostrarShowcase(showcaseIndex);


// ========================================
// CAMBIO AUTOMÁTICO
// ========================================

setInterval(() => {

    showcaseIndex++;

    if (showcaseIndex >= productosDestacados.length) {
        showcaseIndex = 0;
    }

    mostrarShowcase(showcaseIndex);

}, 5000);