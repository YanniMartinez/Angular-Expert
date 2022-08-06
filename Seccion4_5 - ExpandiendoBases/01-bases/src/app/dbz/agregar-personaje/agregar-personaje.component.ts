import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {
  
  @Input() personajes: Personaje[] = [];

  /**Creando un nuevo personaje  */
  @Input() nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  agregar( ){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }

    /**Agregar persona y retornarlo a un objeto vacio */
    this.personajes.push(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }

    console.log(this.personajes);
  }

}
