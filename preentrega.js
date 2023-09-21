class Item{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Items del juego
const vida = new Item("Vida extra", 100, "salud.png");
const espada = new Item("Espadas", 150, "espadas.png");
const gemas = new Item("Gemas", 125, "gemas.png");

// Array para inventario
const inventario = [];

let plata = 1000; // plata en el juego


const elPlata = document.querySelector("#plata span");
elPlata.innerText = plata;
const elInventario = document.getElementById("inventario");

function comprar(items){
    if (plata - items.precio >= 0){
        inventario.push(items);
        plata = plata - items.precio;
        console.log("Inventario:" , inventario);
        console.log("plata:" , plata);
        actualizarHTML();
    }else{
        alert(`No tenés la plata suficiente para comprar ${items.nombre}.`);
    }
}

// Función para vender alguno de los items
function vender(nombreItem){
    const itemEncontrado = inventario.find((item) => item.nombre == nombreItem);
    
    if(itemEncontrado) {
        plata += itemEncontrado.precio;
        inventario.splice(inventario.indexOf(itemEncontrado), 1);

        actualizarHTML();
    }
    
}


function actualizarHTML() {
    elInventario.innerHTML = "";
    for (const items of inventario){
        const li = `
        <li onclick="vender('${items.nombre}')">
        <img src="img/${items.imagen}" alt="${items.imagen}"/> </li>`;
        elInventario.innerHTML += li;
    }
    elPlata.innerText = plata;
}