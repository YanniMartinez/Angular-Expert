/**Importación de componente proveniente de @angular/core */
import { Component } from '@angular/core';

/**
 * El Decorador Componente tiene varias propiedades internas
 * 
 */
@Component({
  selector: 'app-root', //Este es el nombre del componente
  templateUrl: './app.component.html',//Path del archivo HTML que se inyectará como HTML
  //template: `<span>Yann</span>`, Permite inyectar info directa
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Contador App'; //Aquí va el titulo que se le dió
  numero: number = 10;

  /**Agregando método de suma */
  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }
}
