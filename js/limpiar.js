const botonLimpiar = document.querySelector('#botonClean')
const limpiar = document.querySelectorAll('.inputs');

function Reiniciar(evento) {
         
    for (let contador = 0; contador < limpiar.length; contador++){
        limpiar[contador].value ='';
    }
    
}

botonLimpiar.addEventListener('click', () => Reiniciar());