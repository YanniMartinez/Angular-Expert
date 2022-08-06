import { Component, Input } from '@angular/core';
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

  agregar( ){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
  
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
