import { juegos } from "./variables.js";

let container = document.querySelector(".container");

function cargarProductos(productos) {
    container.innerHTML = "";

    productos.forEach((producto) => {
        container.innerHTML += retornarCardHTML(producto);
    });
}

function retornarCardHTML(producto) {
    return `
        <div class="cards" style="width: 19rem;">
            <img src="${producto.img}" class="producto-imagen">
            <div class="producto-body">
                <h5 class="producto-titulo">${producto.name}<br>Año: ${producto.year}</h5>
                <p class="producto-info">${producto.description}</p>
                <a href="#" class="btn btn-primary">Agregar al carrito: $${producto.price}.</a>
            </div>
        </div>`;

}

cargarProductos(juegos);


let botonesCategorias = document.querySelectorAll(".boton-barra")

botonesCategorias.forEach (boton => {
    boton.addEventListener("click", (element) => {

    let juegosFiltrados = juegos.filter(juegos.category.id === element.id);

    cargarProductos(juegosFiltrados);
    });
});



