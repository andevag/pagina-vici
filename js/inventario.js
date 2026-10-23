// ============================================================
// INVENTARIO MONARQ
// Panel editable + asistente de lenguaje natural (demo).
// Los cambios se aplican sobre el catalogo (js/productos.js)
// y se guardan en localStorage de este navegador.
// Cuando exista el backend, estas operaciones se enviaran a la API.
// ============================================================

const INV_STORAGE = "monarq-inventario";

const CATEGORIA_LABELS = {
    category_female: "Femenino",
    category_male: "Masculino",
    category_unisex: "Unisex",
};

const CATEGORIA_CLAVES = {
    femenino: "category_female",
    femenina: "category_female",
    mujer: "category_female",
    masculino: "category_male",
    masculina: "category_male",
    hombre: "category_male",
    unisex: "category_unisex",
    "unisex.": "category_unisex",
};

// ---------------------- Utilidades ----------------------

function normalizar(texto) {
    return String(texto == null ? "" : texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function formatearPrecio(valor) {
    return "$" + Number(valor || 0).toLocaleString("es-CO") + " COP";
}

function capitalizar(texto) {
    return String(texto || "").replace(/\b\w/g, function (c) {
        return c.toUpperCase();
    });
}

function limpiarValor(texto) {
    return String(texto == null ? "" : texto)
        .replace(/\s+/g, " ")
        .replace(/^(el|la|los|las|un|una|nombre|marca|categoria|precio)\s+/i, "")
        .replace(/\s+(por favor|gracias|please)$/i, "")
        .replace(/[."]+$/g, "")
        .trim();
}

function etiquetaCategoria(clave) {
    return CATEGORIA_LABELS[clave] || clave || "Sin categoría";
}

function numeroDesdeTexto(texto) {
    const limpio = String(texto || "").replace(/[^\d]/g, "");
    return limpio ? parseInt(limpio, 10) : NaN;
}

// ---------------------- Persistencia ----------------------

function guardarInventario() {
    try {
        localStorage.setItem(INV_STORAGE, JSON.stringify(productos));
    } catch (error) {
        /* almacenamiento no disponible */
    }
}

function aplicarGuardado() {
    try {
        const datos = localStorage.getItem(INV_STORAGE);
        if (!datos) return;
        const guardado = JSON.parse(datos);
        if (Array.isArray(guardado) && guardado.length) {
            productos.length = 0;
            guardado.forEach(function (p) {
                productos.push(p);
            });
        }
    } catch (error) {
        /* datos corruptos: se ignora */
    }
}

// ---------------------- Búsqueda ----------------------

function buscarProductos(texto) {
    const buscado = limpiarValor(normalizar(texto));
    if (!buscado) return [];

    const exactos = productos.filter(function (p) {
        return normalizar(p.nombre) === buscado;
    });
    if (exactos.length) return exactos;

    const parciales = productos.filter(function (p) {
        return normalizar(p.nombre).indexOf(buscado) !== -1;
    });
    if (parciales.length) return parciales;

    const porMarca = productos.filter(function (p) {
        return normalizar(p.marca).indexOf(buscado) !== -1;
    });
    return porMarca;
}

function resolverProducto(texto) {
    const candidatos = buscarProductos(texto);
    if (candidatos.length === 1) return { producto: candidatos[0], coincidencias: candidatos };
    if (candidatos.length > 1) {
        const nombres = {};
        candidatos.forEach(function (p) {
            nombres[normalizar(p.nombre)] = true;
        });
        if (Object.keys(nombres).length === 1) {
            return { producto: candidatos[0], coincidencias: candidatos };
        }
        return { producto: null, coincidencias: candidatos };
    }
    return { producto: null, coincidencias: [] };
}

// ---------------------- Mensajes ----------------------

function msg(respuesta, cambios) {
    return { respuesta: respuesta, cambios: cambios || [] };
}

function noEncontrado(texto) {
    return msg('No encontré un producto que coincida con «' + limpiarValor(texto) + '». Revisa el nombre o dime la marca.');
}

function ambiguo(coincidencias) {
    const lista = coincidencias.slice(0, 8).map(function (p) {
        return "• " + p.nombre + " (" + p.marca + ")";
    }).join("\n");
    return msg("Encontré varios productos parecidos. ¿A cuál te refieres?\n" + lista);
}

function ayudaTexto() {
    return [
        "Puedo ayudarte con estas tareas:",
        "• Más vendidos: «¿cuál es el producto más vendido?»",
        "• Precio: «cambia el precio de Asad por 150000» o «¿cuánto cuesta Khamrah?»",
        "• Nombre: «cambia el nombre de Eclaire por Eclaire Noir»",
        "• Stock: «pon el stock de Yara Moi en 10»",
        "• Marca: «cambia la marca de Sublime a Lattafa»",
        "• Categoría: «cambia la categoría de Asad a masculino»",
        "• Agregar: «agrega Lattafa Zara en 120000 con stock 5»",
        "• Eliminar: «elimina Berry Top»",
        "• Consultas: «¿cuántos están agotados?», «¿cuál es el más caro?», «productos de la marca Armaf»"
    ].join("\n");
}

function indiceDe(producto) {
    return productos.indexOf(producto);
}

function refrescarVista() {
    renderStats();
    renderTabla();
}

// ---------------------- Comandos ----------------------

function cmdMasVendido() {
    const vendidos = productos.filter(function (p) {
        return p.etiqueta === "showcase_most_sold";
    });
    if (!vendidos.length) return msg("Aún no tengo productos marcados como más vendidos.");
    const lista = vendidos.map(function (p) {
        return "• " + p.nombre + " (" + p.marca + ") — " + formatearPrecio(p.precio);
    }).join("\n");
    return msg("Estos son los productos más vendidos:\n" + lista, vendidos.map(indiceDe));
}

function cmdContar() {
    const disponibles = productos.filter(function (p) {
        return Number(p.stock) > 0;
    }).length;
    return msg("El catálogo tiene " + productos.length + " productos, " + disponibles + " con stock disponible.");
}

function cmdContarAgotados() {
    const agotados = productos.filter(function (p) {
        return Number(p.stock) <= 0;
    });
    if (!agotados.length) return msg("No hay productos agotados. Todo tiene stock.");
    const lista = agotados.map(function (p) {
        return "• " + p.nombre + " (" + p.marca + ")";
    }).join("\n");
    return msg("Hay " + agotados.length + " productos agotados:\n" + lista, agotados.map(indiceDe));
}

function cmdExtremo(tipo) {
    if (!productos.length) return msg("El catálogo está vacío.");
    const ordenados = productos.slice().sort(function (a, b) {
        return Number(a.precio) - Number(b.precio);
    });
    const p = tipo === "caro" ? ordenados[ordenados.length - 1] : ordenados[0];
    const adjetivo = tipo === "caro" ? "más caro" : "más económico";
    return msg("El producto " + adjetivo + " es " + p.nombre + " (" + p.marca + ") — " + formatearPrecio(p.precio) + ".", [indiceDe(p)]);
}

function cmdConsultarPrecio(texto) {
    const r = resolverProducto(texto);
    if (!r.producto) return r.coincidencias.length ? ambiguo(r.coincidencias) : noEncontrado(texto);
    return msg(r.producto.nombre + " (" + r.producto.marca + ") cuesta " + formatearPrecio(r.producto.precio) + ".", [indiceDe(r.producto)]);
}

function cmdRenombrar(viejo, nuevo) {
    const r = resolverProducto(viejo);
    if (!r.producto) return r.coincidencias.length ? ambiguo(r.coincidencias) : noEncontrado(viejo);
    const limpio = limpiarValor(nuevo);
    if (!limpio) return msg("Dime el nuevo nombre, por ejemplo: «cambia el nombre de Eclaire por Eclaire Noir».");
    const anterior = r.producto.nombre;
    r.producto.nombre = capitalizar(limpio);
    guardarInventario();
    refrescarVista();
    return msg("Listo: cambié el nombre de «" + anterior + "» por «" + r.producto.nombre + "».", [indiceDe(r.producto)]);
}

function cmdPrecio(texto, valorTexto) {
    const valor = numeroDesdeTexto(valorTexto);
    if (!valor || valor <= 0) return msg("Ese precio no es válido. Dime un número, por ejemplo: «cambia el precio de Asad por 150000».");
    const r = resolverProducto(texto);
    if (!r.producto) return r.coincidencias.length ? ambiguo(r.coincidencias) : noEncontrado(texto);
    const anterior = r.producto.precio;
    r.producto.precio = valor;
    guardarInventario();
    refrescarVista();
    return msg("Listo: el precio de «" + r.producto.nombre + "» pasó de " + formatearPrecio(anterior) + " a " + formatearPrecio(valor) + ".", [indiceDe(r.producto)]);
}

function cmdStock(texto, valor) {
    if (isNaN(valor) || valor < 0) return msg("Dime una cantidad válida de stock, por ejemplo: «pon el stock de Yara Moi en 10».");
    const r = resolverProducto(texto);
    if (!r.producto) return r.coincidencias.length ? ambiguo(r.coincidencias) : noEncontrado(texto);
    const anterior = Number(r.producto.stock) || 0;
    r.producto.stock = valor;
    guardarInventario();
    refrescarVista();
    const estado = valor > 0 ? "disponible" : "agotado";
    return msg("Listo: el stock de «" + r.producto.nombre + "» pasó de " + anterior + " a " + valor + " (" + estado + ").", [indiceDe(r.producto)]);
}

function cmdMarca(texto, nuevaMarca) {
    const marca = limpiarValor(nuevaMarca);
    if (!marca) return msg("Dime la nueva marca, por ejemplo: «cambia la marca de Sublime a Lattafa».");
    const r = resolverProducto(texto);
    if (!r.producto) return r.coincidencias.length ? ambiguo(r.coincidencias) : noEncontrado(texto);
    const anterior = r.producto.marca;
    r.producto.marca = capitalizar(marca);
    guardarInventario();
    refrescarVista();
    return msg("Listo: la marca de «" + r.producto.nombre + "» pasó de «" + anterior + "» a «" + r.producto.marca + "».", [indiceDe(r.producto)]);
}

function cmdCategoria(texto, palabra) {
    const clave = CATEGORIA_CLAVES[normalizar(palabra)];
    if (!clave) return msg("Las categorías válidas son: femenino, masculino o unisex.");
    const r = resolverProducto(texto);
    if (!r.producto) return r.coincidencias.length ? ambiguo(r.coincidencias) : noEncontrado(texto);
    const anterior = etiquetaCategoria(r.producto.categoria);
    r.producto.categoria = clave;
    guardarInventario();
    refrescarVista();
    return msg("Listo: la categoría de «" + r.producto.nombre + "» pasó de " + anterior + " a " + etiquetaCategoria(clave) + ".", [indiceDe(r.producto)]);
}

function cmdEliminar(entrada) {
    const t = normalizar(entrada);
    const m = t.match(/^(?:elimina|eliminar|quita|quitar|borra|borrar|retira|retirar|remueve|remover)\s+(?:el\s+|la\s+|los\s+|las\s+|un\s+|una\s+)?(?:producto\s+|perfume\s+)?(.+)$/);
    const objetivo = m ? m[1] : "";
    const r = resolverProducto(objetivo);
    if (!r.producto) return r.coincidencias.length ? ambiguo(r.coincidencias) : noEncontrado(objetivo);
    const nombre = r.producto.nombre;
    productos.splice(indiceDe(r.producto), 1);
    guardarInventario();
    refrescarVista();
    return msg("Listo: eliminé «" + nombre + "» del catálogo.");
}

function cmdAgregar(entrada) {
    const sinVerbo = String(entrada).trim()
        .replace(/^\s*(agrega|agregar|añade|anade|añadir|anadir|crea|crear|registra|registrar|ingresa|ingresar)\s+/i, "")
        .replace(/\.+$/, "");
    const t = normalizar(sinVerbo);

    const mPrecio = t.match(/([\d][\d.,]{2,})/);
    const mStock = t.match(/(?:stock|unidades|existencias)\s*(?:de\s*)?(\d+)/);
    const mMarca = t.match(/marca\s+([a-z]+)/);

    let nombre = sinVerbo;
    const corte = t.search(/\b(precio|stock|unidades|existencias|en|a|por|con)\b\s+\$?\s*[\d]/);
    if (corte > 0) nombre = sinVerbo.slice(0, corte);
    nombre = nombre.replace(/^(un|una|el|la|producto|perfume)\s+/i, "").trim();

    if (!nombre) return msg("Dime el nombre del producto, por ejemplo: «agrega Lattafa Zara en 120000 con stock 5».");
    if (!mPrecio) return msg("Para agregar «" + capitalizar(nombre) + "» necesito el precio. Por ejemplo: «agrega " + capitalizar(nombre) + " en 120000 con stock 5».");

    const nuevo = {
        marca: mMarca ? capitalizar(mMarca[1]) : "Sin marca",
        nombre: capitalizar(nombre),
        imagen: "assets/images/logomq.png",
        precio: numeroDesdeTexto(mPrecio[1]),
        categoria: "category_unisex",
        stock: mStock ? parseInt(mStock[1], 10) : 1,
        destacado: false,
        etiqueta: "",
    };

    productos.push(nuevo);
    guardarInventario();
    refrescarVista();
    return msg("Listo: agregué «" + nuevo.nombre + "» por " + formatearPrecio(nuevo.precio) + " con stock " + nuevo.stock + ". (La foto es provisional, se puede cambiar luego.)", [indiceDe(nuevo)]);
}

// ---------------------- Intérprete ----------------------

function procesarComando(entrada) {
    const original = String(entrada == null ? "" : entrada).trim();
    const t = normalizar(original)
        .replace(/^[\s¿¡"'«»]+/, "")
        .replace(/[\s?!"'»]+$/, "")
        .trim();

    if (!t) return msg("Escríbeme una instrucción. Por ejemplo: «dime el producto más vendido».");

    if (/^(hola|buenas|hey|que tal|holi|buenos dias|buenas tardes)[\s!.,]*$/.test(t)) {
        return msg("¡Hola! Soy tu asistente de inventario MONARQ. Puedo decirte el más vendido, cambiar precios, nombres, stock, marca o categoría. Escribe «ayuda» para ver todo.");
    }

    if (/\b(ayuda|help|comandos|que puedes hacer|que sabes hacer)\b/.test(t)) {
        return msg(ayudaTexto());
    }

    if (/(mas vendido|mejor(es)? vendido|mas vendidos|top ventas|mas comprado|best ?seller)/.test(t)) {
        return cmdMasVendido();
    }

    if (/(cuantos|cuantas)\b/.test(t) && /(agotado|sin stock|no disponible|falta)/.test(t)) {
        return cmdContarAgotados();
    }

    if (/(productos?|perfumes?)\s+(agotados?|sin stock)/.test(t)) return cmdContarAgotados();

    if (/(cuantos|cuantas|total)\b/.test(t) && /(producto|perfume|articulo|referencia)/.test(t)) {
        return cmdContar();
    }

    if (/^(cuantos|cuantas)\b/.test(t)) return cmdContar();

    if (/(mas caro|mas costoso|mas costosa|de mayor precio|el caro)/.test(t)) return cmdExtremo("caro");
    if (/(mas barato|mas economico|mas economica|de menor precio|el barato)/.test(t)) return cmdExtremo("barato");

    const mPrecioConsulta = t.match(/^(?:cuanto (?:cuesta|vale|es|esta|sale)|precio de|a cuanto (?:esta|sale))\s+(.+)$/);
    if (mPrecioConsulta) return cmdConsultarPrecio(mPrecioConsulta[1]);

    if (/^(elimina|eliminar|quita|quitar|borra|borrar|retira|retirar|remueve|remover)\b/.test(t)) {
        return cmdEliminar(original);
    }

    if (/^(agrega|agregar|anade|anadir|añade|añadir|crea|crear|registra|registrar|ingresa|ingresar)\b/.test(t)) {
        return cmdAgregar(original);
    }

    if (/(nombre|renombra|renombrar)/.test(t) && /\s(por|a|para)\s/.test(" " + t + " ")) {
        const m = t.match(/nombre\s+(?:de\s+|del\s+)?(.+?)\s+(?:por|para|a)\s+(.+)$/);
        if (m) return cmdRenombrar(m[1], m[2]);
    }

    const mCat = t.match(/categor(?:ia)\s+(?:de\s+|del\s+)?(.+?)\s+(?:a|por|en)\s+(femenino|femenina|mujer|masculino|masculina|hombre|unisex)/);
    if (mCat) return cmdCategoria(mCat[1], mCat[2]);

    const mMarcaCambio = t.match(/marca\s+(?:de\s+|del\s+)?(.+?)\s+(?:a|por|para)\s+(.+)$/);
    if (mMarcaCambio) return cmdMarca(mMarcaCambio[1], mMarcaCambio[2]);

    const mStock = t.match(/(?:stock|existencias|unidades|inventario)\s+(?:de\s+|del\s+)?(.+?)\s+(?:a|por|en|de)\s+(\d+)/);
    if (mStock) return cmdStock(mStock[1], parseInt(mStock[2], 10));

    const mPrecio = t.match(/precio\s+(?:de\s+|del\s+)?(.+?)\s+(?:a|por|en|de)\s+\$?\s*([\d.]+)/);
    if (mPrecio) return cmdPrecio(mPrecio[1], mPrecio[2]);

    const mPrecio2 = t.match(/(?:sube|subir|aumenta|aumentar|baja|bajar|reduce|reducir|disminuye|disminuir|pon|poner|cambia|cambiar|actualiza|actualizar)\s+(?:el\s+)?(?:precio|valor)\s+(?:de\s+|del\s+)?(.+?)\s+(?:a|en|por)\s+\$?\s*([\d.]+)/);
    if (mPrecio2) return cmdPrecio(mPrecio2[1], mPrecio2[2]);

    const mListaMarca = t.match(/(?:productos|perfumes|muestrame|muestra|dime|lista|listar)\s+(?:de\s+|de la\s+|de el\s+|la\s+)?(?:marca|firma)\s+(.+)$/);
    if (mListaMarca) return cmdProductosDeMarca(mListaMarca[1]);

    const mListaMarca2 = t.match(/^marca\s+(?:de\s+|del\s+)?(.+)$/);
    if (mListaMarca2) return cmdProductosDeMarca(mListaMarca2[1]);

    return msg("No entendí esa instrucción. Escribe «ayuda» para ver qué puedo hacer.");
}

function cmdProductosDeMarca(texto) {
    const marca = limpiarValor(texto);
    const encontrados = productos.filter(function (p) {
        return normalizar(p.marca) === normalizar(marca) || normalizar(p.marca).indexOf(normalizar(marca)) !== -1;
    });
    if (!encontrados.length) return msg("No encontré productos de la marca «" + marca + "».");
    const lista = encontrados.map(function (p) {
        return "• " + p.nombre + " — " + formatearPrecio(p.precio);
    }).join("\n");
    return msg("Encontré " + encontrados.length + " productos de " + marca + ":\n" + lista, encontrados.map(indiceDe));
}

// ---------------------- Interfaz ----------------------

function escapar(texto) {
    return String(texto == null ? "" : texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function renderStats() {
    const cont = (typeof document !== "undefined") ? document.getElementById("inv-stats") : null;
    if (!cont) return;

    const total = productos.length;
    const disponibles = productos.filter(function (p) { return Number(p.stock) > 0; }).length;
    const agotados = total - disponibles;
    const valor = productos.reduce(function (suma, p) {
        return suma + Number(p.precio) * (Number(p.stock) || 0);
    }, 0);

    const tarjetas = [
        { etiqueta: "Productos", valor: total },
        { etiqueta: "Disponibles", valor: disponibles },
        { etiqueta: "Agotados", valor: agotados },
        { etiqueta: "Valor en stock", valor: formatearPrecio(valor) },
    ];

    cont.innerHTML = tarjetas.map(function (c) {
        return '<div class="inv-stat"><span class="inv-stat-valor">' + escapar(c.valor) + '</span><span class="inv-stat-etiqueta">' + escapar(c.etiqueta) + "</span></div>";
    }).join("");
}

let criterioInventario = "az";

function renderTabla() {
    const cont = (typeof document !== "undefined") ? document.getElementById("inv-tabla") : null;
    if (!cont) return;

    const contador = document.getElementById("inv-count");
    if (contador) contador.textContent = productos.length + " productos";

    const opciones = function (clave) {
        return Object.keys(CATEGORIA_LABELS).map(function (k) {
            return '<option value="' + k + '"' + (k === clave ? " selected" : "") + ">" + CATEGORIA_LABELS[k] + "</option>";
        }).join("");
    };

    const cabecera =
        '<div class="inv-fila inv-header">' +
        "<span>Producto</span><span>Nombre</span><span>Marca</span><span>Categoría</span><span>Precio (COP)</span><span>Stock</span><span>Estado</span>" +
        "</div>";

    const comparador = typeof compararProductos === "function"
        ? compararProductos
        : function () { return 0; };

    const ordenados = productos
        .map(function (p, i) {
            return { producto: p, indice: i };
        })
        .sort(function (x, y) {
            return comparador(x.producto, y.producto, criterioInventario);
        });

    const filas = ordenados.map(function (item) {
        const p = item.producto;
        const i = item.indice;
        const disponible = Number(p.stock) > 0;
        return (
            '<div class="inv-fila" data-index="' + i + '">' +
            '<span class="inv-thumb"><img src="' + escapar(p.imagen) + '" alt=""></span>' +
            '<span class="inv-campo"><input data-campo="nombre" value="' + escapar(p.nombre) + '" aria-label="Nombre"></span>' +
            '<span class="inv-campo"><input data-campo="marca" value="' + escapar(p.marca) + '" aria-label="Marca"></span>' +
            '<span class="inv-campo"><select data-campo="categoria" aria-label="Categoría">' + opciones(p.categoria) + "</select></span>" +
            '<span class="inv-campo"><input data-campo="precio" type="number" min="0" step="1000" value="' + escapar(p.precio) + '" aria-label="Precio"></span>' +
            '<span class="inv-campo"><input data-campo="stock" type="number" min="0" value="' + escapar(p.stock) + '" aria-label="Stock"></span>' +
            '<span class="inv-badge ' + (disponible ? "ok" : "no") + '">' + (disponible ? "Disponible" : "Agotado") + "</span>" +
            "</div>"
        );
    }).join("");

    cont.innerHTML = cabecera + filas;
}

function agregarMensaje(texto, rol) {
    const chat = (typeof document !== "undefined") ? document.getElementById("inv-chat") : null;
    if (!chat) return;
    const burbuja = document.createElement("div");
    burbuja.className = "inv-msg " + (rol === "user" ? "inv-msg-user" : "inv-msg-bot");
    burbuja.textContent = texto;
    chat.appendChild(burbuja);
    chat.scrollTop = chat.scrollHeight;
}

function marcarFilas(indices) {
    if (typeof document === "undefined" || !indices || !indices.length) return;
    indices.forEach(function (i) {
        const fila = document.querySelector('.inv-fila[data-index="' + i + '"]');
        if (!fila) return;
        fila.classList.add("inv-flash");
        fila.scrollIntoView({ block: "center", behavior: "smooth" });
        setTimeout(function () { fila.classList.remove("inv-flash"); }, 1600);
    });
}

function mostrarToast(texto) {
    const toast = (typeof document !== "undefined") ? document.getElementById("inv-toast") : null;
    if (!toast) return;
    toast.textContent = texto;
    toast.classList.add("inv-toast-visible");
    clearTimeout(mostrarToast._timer);
    mostrarToast._timer = setTimeout(function () {
        toast.classList.remove("inv-toast-visible");
    }, 2200);
}

function enviarComando(texto) {
    agregarMensaje(texto, "user");
    const resultado = procesarComando(texto);
    agregarMensaje(resultado.respuesta, "bot");
    if (resultado.cambios && resultado.cambios.length) {
        marcarFilas(resultado.cambios);
        mostrarToast("Cambios guardados");
    }
}

function manejarEdicion(evento) {
    const control = evento.target.closest("[data-campo]");
    if (!control) return;
    const fila = control.closest(".inv-fila");
    if (!fila) return;
    const indice = Number(fila.dataset.index);
    const producto = productos[indice];
    if (!producto) return;
    const campo = control.dataset.campo;
    let valor = control.value;

    if (campo === "precio" || campo === "stock") {
        valor = Math.max(0, parseInt(valor || "0", 10) || 0);
    } else {
        valor = limpiarValor(valor);
    }

    producto[campo] = valor;
    guardarInventario();
    renderStats();

    if (campo === "stock") {
        const badge = fila.querySelector(".inv-badge");
        if (badge) {
            const disponible = Number(valor) > 0;
            badge.classList.toggle("ok", disponible);
            badge.classList.toggle("no", !disponible);
            badge.textContent = disponible ? "Disponible" : "Agotado";
        }
    }
}

function iniciarInventario() {
    if (typeof document === "undefined") return;
    if (!document.getElementById("inv-tabla")) return;

    aplicarGuardado();
    refrescarVista();
    agregarMensaje("¡Hola! Soy tu asistente de inventario MONARQ. Puedo cambiar precios, nombres, stock y más. Escribe «ayuda» para ver ejemplos.", "bot");

    const chips = document.getElementById("inv-chips");
    if (chips) {
        chips.addEventListener("click", function (evento) {
            const boton = evento.target.closest("[data-cmd]");
            if (boton) enviarComando(boton.dataset.cmd);
        });
    }

    const form = document.getElementById("inv-form");
    if (form) {
        form.addEventListener("submit", function (evento) {
            evento.preventDefault();
            const input = document.getElementById("inv-input");
            const texto = input.value.trim();
            if (!texto) return;
            input.value = "";
            enviarComando(texto);
        });
    }

    const tabla = document.getElementById("inv-tabla");
    if (tabla) {
        tabla.addEventListener("input", manejarEdicion);
        tabla.addEventListener("change", manejarEdicion);
    }

    const selectorOrdenInv = document.getElementById("inv-sort");
    if (selectorOrdenInv) {
        criterioInventario = selectorOrdenInv.value || "az";
        selectorOrdenInv.addEventListener("change", function () {
            criterioInventario = selectorOrdenInv.value;
            renderTabla();
        });
    }
}

if (typeof document !== "undefined") {
    iniciarInventario();
}
