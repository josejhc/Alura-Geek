import { conexionAPI } from "./conexionAPI.js";

async function eliminarProducto(){
    try{

    const listaAPI = await conexionAPI.listarVideos();
    const edit = JSON.stringify(listaAPI);
    const boton_trash = document.querySelectorAll('.trash')

        
    const array = []
    
    listaAPI.forEach(product => guardarID(product.id))
        
    
    function guardarID(evento){
    
       array.push(evento)
    
       return array
     
    }

    for (let contador = 0; contador < listaAPI.length; contador++){
        
        const lista = boton_trash[contador];
        
        const instrumento = contador+1;
        
        lista.onclick = async function(){
            await conexionAPI.eliminarProducto(array[delet(instrumento)]);
        }

    }

    function delet(evento){
        const finalValue = evento-1
        return finalValue
    }

    }catch{
          console.log('error')  
    }

}

eliminarProducto()

