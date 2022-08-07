import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Lleva el servicio a un nivel global de la app
})
export class GifsService {

  private _historial: string[] =[]; //Inicializa un arreglo de string
  
  get historial(){
    //return this._historial puede modificar al arreglo por referencia
    return [...this._historial];
  }

  buscarGifs( query: string ){
    //Agregamos al inicio del arreglo
    this._historial.unshift( query );

    //Corta hasta 10 elementos despues de insertar
    this._historial = this._historial.splice(0,10); //Solo traerá 10 elementos

    console.log(this._historial);
  }
}
