import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    //Siempre son un arreglo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Que cosas quiero que sean visibles fuera del modulo
    exports: [
        ListadoComponent
    ],
    imports: [
        //El CommonModule importa algunas directivas como los ngIf, ngFor
        CommonModule
    ]
})
export class HeroesModule{

}