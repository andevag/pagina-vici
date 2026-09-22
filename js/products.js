// ========================================
// PRODUCTOS DE MONARQ
// ========================================

const productos = [
    {
        nombre: "Eclaire",
        imagen: "assets/images/eclaire.jpg",
        precio: 140000,
        categoria: "Femenino",
        disponible: true
    },

    {
        nombre: "Yara Rosa",
        imagen: "assets/images/yara.jpg",
        precio: 130000,
        categoria: "Femenino",
        disponible: true
    },

    {
        nombre: "Cloud Pink",
        imagen: "assets/images/cloudpink.jpg",
        precio: 140000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Afeef",
        imagen: "assets/images/afeef.jpg",
        precio: 100000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Ajwad",
        imagen: "assets/images/ajwad.jpg",
        precio: 120000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Amethyst",
        imagen: "assets/images/amethyst.jpg",
        precio: 119000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Art of Universe",
        imagen: "assets/images/artofuniverse.jpg",
        precio: 159000,
        categoria: "Unisex",
        disponible: true
    },
    {
        nombre: "Asad",
        imagen: "assets/images/asad.jpg",
        precio: 160000,
        categoria: "Hombre",
        disponible: true
    },
    {
        nombre: "Asad Bourbon",
        imagen: "assets/images/asadbourbon.jpg",
        precio: 159000,
        categoria: "Hombre",
        disponible: true
    },
    {
        nombre: "Asad Elixir",
        imagen: "assets/images/asadelixir.jpg",
        precio: 170000,
        categoria: "Hombre",
        disponible: true
    },
    {
        nombre: "Qaed AI Fursan",
        imagen: "assets/images/fursan.jpg",
        precio: 130000,
        categoria: "Hombre",
        disponible: true
    },
    {
        nombre: "Her Confecsion",
        imagen: "assets/images/herfconfecsion.jpg",
        precio: 170000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Island Bliss",
        imagen: "assets/images/islandbliss.jpg",
        precio: 219000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Island Breeze",
        imagen: "assets/images/islandbreeze.jpg",
        precio: 190000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Vanilla Freak",
        imagen: "assets/images/vanillafreak.jpg",
        precio: 159000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Whipped Pleasure",
        imagen: "assets/images/whipped.jpg",
        precio: 149000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Sublime",
        imagen: "assets/images/sublime.jpg",
        precio: 165000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Khamrah",
        imagen: "assets/images/khamra.jpg",
        precio: 175000,
        categoria: "Unisex",
        disponible: true
    },
    {
        nombre: "Khamrah Dukhan",
        imagen: "assets/images/khamradukan.jpg",
        precio: 180000,
        categoria: "Unisex",
        disponible: true
    },
    {
        nombre: "Khamrah Qhawa",
        imagen: "assets/images/khamraqhwa.jpg",
        precio: 179900,
        categoria: "Unisex",
        disponible: true
    },
    {
        nombre: "Yara Candy",
        imagen: "assets/images/yaracandy.jpg",
        precio: 149900,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Yara Elixir",
        imagen: "assets/images/yaraelixir.jpg",
        precio: 155000,
        categoria: "Femenino",
        disponible: true
    },
    {
        nombre: "Yara Moi",
        imagen: "assets/images/yaramoi.jpg",
        precio: 145000,
        categoria: "Femenino",
        disponible: true
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

        tarjeta.innerHTML = `
            <img 
                src="${producto.imagen}" 
                alt="${producto.nombre}"
            >

            <h3>
                <strong>${producto.nombre}</strong>
            </h3>

            <p class="type-product">
                ${producto.categoria}
            </p>

            <p class="product-price">
                $${producto.precio.toLocaleString("es-CO")} COP
            </p>

            <a href="#" class="btn-product">
                <strong data-i18n="buy">Comprar</strong>
            </a>
        `;

        contenedor.appendChild(tarjeta);
    });
}