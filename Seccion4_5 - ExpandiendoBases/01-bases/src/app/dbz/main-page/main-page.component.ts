import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje [] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]

  /**Creando un nuevo personaje  */
  nuevo: Personaje = {
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

    console.log(this.nuevo);
  }
}
