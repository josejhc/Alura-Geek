async function listarVideos(){
    const conexion = await fetch('http://localhost:3001/productos');
    const conexionConvertida = conexion.json();
  
    // console.log(conexionConvertida)
    // console.log(conexionConvertida.promiseResult[0])

    // const conx = JSON.parse(conexionConvertida)
    return conexionConvertida;
   
}


async function enviarProducto(titulo, descripcion, imagen){
 const conexion = await fetch('http://localhost:3001/productos',{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
        titulo:titulo,
        descripcion:`${descripcion}`,
        imagen:imagen
    })
 })

 const conexionConvertida = conexion.json();
 if(!conexion.ok){
    throw new Error("Ha ocurrido un error al enviar el video")
 }
 return conexionConvertida;
 
}


async function eliminarProducto(id){
    const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
   method:  'DELETE',
   headers:{'Content-type':'application/json'}

    });


    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al eliminar el producto")
     }

    }

export const conexionAPI = {
    listarVideos, enviarProducto, eliminarProducto
}

// listarVideos()