import * as UI from "./interfaz.js";
/* import {formularioBuscar,divBuscar,divMensaje,divResultado} from './interfaz.js'; */

UI.formularioBuscar.addEventListener('submit',buscarCancion);


function buscarCancion(e)
{
    e.preventDefault();

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion ==='')
    {
        UI.divMensaje.classList.add('error');
        UI.divMensaje.textContent = 'Error... Todos los campos son obligatorios';

        setTimeout(() => {
        UI.divMensaje.classList.remove('error');
        UI.divMensaje.textContent = '';
        }, 3000);

        return;
    }
}


