import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  heroeBorrado: string = '';
  heroes: string[] = ['Spiderman','Iron Man', 'Hulk','Thor','Capitan America'];
  
  /**Permite borrar el ultimo elemento del arreglo
   * este método será llamada por el listado.component el cual 
   * renderizará el contenido en la página
   */
  borrarHeroe(){
    //Si no puede borrar nada entonces que retorne cadana vacia
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
