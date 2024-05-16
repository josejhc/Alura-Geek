import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector('[data-formulario]')

async function crearProducto(evento){

    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    try{
    
    await conexionAPI.enviarProducto(titulo, descripcion, imagen );

    }catch(e){
        alert(e)
    }
}

formulario.addEventListener('submit', evento => crearProducto(evento));