import * as UI from "./interfaz.js";
/* import {formularioBuscar,divBuscar,divMensaje,divResultado} from './interfaz.js'; */

import API from './api.js';

//evento submit cada q le den click al boton del formnulario
UI.formularioBuscar.addEventListener('submit',buscarCancion);

//Funcion para encontrar la letra de la cancion
function buscarCancion(e)
{
    //Evento q detiene la ejecucion del boton
    e.preventDefault();

    //Extraemos los valores de los inputs
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    //Validamos el formulario, si contiene texto
    if(artista === '' || cancion ==='')
    {
        //Agregamos una clase y texto al mensaje de error
        UI.divMensaje.classList.add('error');
        UI.divMensaje.textContent = 'Error... Todos los campos son obligatorios';

        //removemos la clase y el texto luego de 3s
        setTimeout(() => {
        UI.divMensaje.classList.remove('error');
        UI.divMensaje.textContent = '';
        }, 3000);

        //Terminamos la ejecucion del if y toda la funcion
        return;
    }

    //Instanciamos la clase pasandole dos parametros que se encuentra en el archivo API.JS
    const busqueda = new API(artista,cancion);

    //Invocamos el metodo API
    busqueda.consultarApi();
}


