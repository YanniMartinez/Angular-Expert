import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Lleva el servicio a un nivel global de la app
})
export class GifsService {
  
  private apiKey: string = '';
  private _historial: string[] =[]; //Inicializa un arreglo de string
  
  // TODO: Cambiar ANY por su tipo correspondiente
  public resultados: any[] =[];

  get historial(){
    //return this._historial puede modificar al arreglo por referencia
    return [...this._historial];
  }

  /**
   * Con este podremos hacer peticiones HTTP desde Angular
   * pero este estará en base a Observables, que son más poderosos
   * que las promesas, por lo general tienen más control que las promesas
   */
  constructor( private http: HttpClient){}

  buscarGifs( query: string ){

    query = query.trim().toLowerCase();

    //Si no está en el historial entonces lo incluye
    if(!this._historial.includes( query )){
      //Agregamos al inicio del arreglo
      this._historial.unshift( query );

      //Corta hasta 10 elementos despues de insertar
      this._historial = this._historial.splice(0,10); //Solo traerá 10 elementos
    }

    /**Lanzamos petición HTTP y el suscribe es cuando responde */
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=s0oBd15WQC9I0E5Nq03ZmgyR3a5WEDis&q=${query}&limit=10`)
      .subscribe( (resp:any) => {
        console.log( resp );
        this.resultados = resp.data;
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
