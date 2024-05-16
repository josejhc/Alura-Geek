import { conexionAPI } from "./conexionAPI.js";
const lista = document.querySelector("[data-lista]")

export default function crearCard(titulo, descripcion, imagen){
    const product = document.createElement('li');
    product.className = 'product_item';
    product.innerHTML = 
    `
        <div class = "img_part">
            <img src='${imagen}'>
        </div>

        <div class = "description_part">
            <h1>${titulo}</h1>
            
            <div class = "price">
                <p>${descripcion}</p><button class = "trash"><img src="img/icon _trash.png" alt=""></button>
            </div>
        </div>
    `
    
    return product
}


async function listarVideos(){
    try{
    const listaAPI = await conexionAPI.listarVideos()
    
    // console.log(listaAPI)
    listaAPI.forEach(product => lista.appendChild(crearCard(product.titulo,product.descripcion, product.imagen)))
    }catch{
        lista.innerHTML = '<h2 class = "mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>'
    }
}

listarVideos()