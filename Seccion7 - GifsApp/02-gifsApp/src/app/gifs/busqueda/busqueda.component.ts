import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  //El simbolo ! le dice a TypeScript wque el objeto nunca será nulo
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  //Inyectando el servicio
  constructor( private gifsService: GifsService){}

  buscar( ){
    const valor = this.txtBuscar.nativeElement.value;
    //console.log( valor );

    //Inserta valor de busqueda
    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = ''; //Vaciamos el input
  }

}
