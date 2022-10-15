import * as UI from './interfaz.js';

class API {
    constructor(artista,cancion)
    {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarApi(){
        
       //creamos una cosntante con el url
       const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

       //Conectamos con el URL
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                
                //Si contiene letra se ejecuta el if, sino else
                if(resultado.lyrics)
                {
                    const {lyrics} = resultado;
                
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;

                }else{
                    UI.divMensaje.textContent = 'La canción no existe, prueba con otra';
                    UI.divMensaje.classList.add('error');

                    setTimeout(() => {
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error');
                    }, 3000);
                }
            }) 
    }

}
//Exportamos la api
export default API;