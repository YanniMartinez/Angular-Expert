import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Lleva el servicio a un nivel global de la app
})
export class GifsService {
  
  private apiKey: string = '';
  private _historial: string[] =[]; //Inicializa un arreglo de string
  
  get historial(){
    //return this._historial puede modificar al arreglo por referencia
    return [...this._historial];
  }

  buscarGifs( query: string ){

    query = query.trim().toLowerCase();

    //Si no está en el historial entonces lo incluye
    if(!this._historial.includes( query )){
      //Agregamos al inicio del arreglo
      this._historial.unshift( query );

      //Corta hasta 10 elementos despues de insertar
    this._historial = this._historial.splice(0,10); //Solo traerá 10 elementos
    }

    fetch('https://api.giphy.com/v1/gifs/search?api_key=&q=dragon ball z&limit=10')
    .then( resp => {
      resp.json().then( data => {
        console.log(data);
      })
    } )

    console.log(this._historial);
  }
  
}
