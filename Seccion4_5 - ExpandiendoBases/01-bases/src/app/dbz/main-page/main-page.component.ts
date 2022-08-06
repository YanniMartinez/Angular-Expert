import { Component} from '@angular/core';

/**Definiendo interfaz interna sobre como
 * puede lucir nuestro personaje
 */
interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  /**Creando un nuevo personaje  */
  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  agregar( ){
    console.log(this.nuevo);
  }
}
