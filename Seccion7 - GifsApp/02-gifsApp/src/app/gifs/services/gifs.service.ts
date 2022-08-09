import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' //Lleva el servicio a un nivel global de la app
})
export class GifsService {
  
  private apiKey: string = '';
  private _historial: string[] =[]; //Inicializa un arreglo de string
  
  //Ahora indicamos que es de tipo Gif
  public resultados: Gif[] =[];

  get historial(){
    //return this._historial puede modificar al arreglo por referencia
    return [...this._historial];
  }

  /**
   * Con este podremos hacer peticiones HTTP desde Angular
   * pero este estará en base a Observables, que son más poderosos
   * que las promesas, por lo general tienen más control que las promesas
   * Además el contructor sólo será llamado una vez para el servicio 
   * debido a que funciona como un Singletone
   */
  constructor( private http: HttpClient){
    //Este es el lugar ideal de cargar el localstorage porque será 1 sola vez
    //this._historial = localStorage.getItem('historial');
    
    //En el If validamos si existe el elemento historial en el localstorage
    /* if ( localStorage.getItem('historial') ) {
      //Como ya validamos el contenido de historial le indicamos con ! que confie en nosotros
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    } */


    //Otra forma de hacerlo es:
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    //Cargando siempre los resultados:
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs( query: string ){

    query = query.trim().toLowerCase();

    //Si no está en el historial entonces lo incluye
    if(!this._historial.includes( query )){
      //Agregamos al inicio del arreglo
      this._historial.unshift( query );

      //Corta hasta 10 elementos despues de insertar
      this._historial = this._historial.splice(0,10); //Solo traerá 10 elementos

      /**
       * En el localstorage sólo podemos almacenar strings, como el siguiente
       * ejemplo:  localStorage.setItem('historial', query);
       * Cómo no podemos almacenar un arreglo completo nos apoyaremos del JSON.stringify
       */
      localStorage.setItem('historial', JSON.stringify(query) );

    }

    /**Lanzamos petición HTTP y el suscribe es cuando responde 
     * Para poder tener un tipado podemos indicar como valor generico
     * el nombre de la interfaz que implementamos para el tipado
    */
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=s0oBd15WQC9I0E5Nq03ZmgyR3a5WEDis&q=${query}&limit=10`)
      .subscribe( (resp:any) => {
        console.log( resp );
        this.resultados = resp.data;

        localStorage.setItem('resultados', JSON.stringify( this.resultados));
      });
    /* const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=&q=dragon ball z&limit=10')
    const data = await resp.json();
    console.log(data); */
    /* fetch('https://api.giphy.com/v1/gifs/search?api_key=&q=dragon ball z&limit=10')
    .then( resp => {
      resp.json().then( data => {
        console.log(data);
      })
    } ) */

    console.log(this._historial);
  }
  
}
