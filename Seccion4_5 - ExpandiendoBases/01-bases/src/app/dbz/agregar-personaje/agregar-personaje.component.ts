import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {
  /**Creando un nuevo personaje  */
  @Input() nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  /**Será la propiedad que propaguemos desde el hijo, diciendo que exportaremos
   * un Personaje
   */
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar( ){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
  
    console.log(this.nuevo);
    //Emitiendo valor del valor de Nuevoo:
    this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
