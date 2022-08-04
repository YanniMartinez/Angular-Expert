import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <!-- Si quisieramos pintar el valor de la variable del app.componente podriamos poner lo siguiente --> 
        <h1> {{ title }} </h1>
        
        <h3> La base es: <strong> {{ base }}</strong></h3>
        
        <!-- Cuando se ponen () significa que es un evento y aplica la acción -->
        <button (click)="acumular(+base)"> + {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-base)"> - {{ base }} </button>
        `
})
export class ContadorComponent{
    title: string = 'Contador App'; //Aquí va el titulo que se le dió
    numero: number = 10;
  
    /**Crear propiedad llamada Base:number=5 
     * Mostrarlo en el HTML, posteriormente sumar ese valor
     * dentro del contador que ya se tenia con anterioridad
    */
    base: number = 5;
  
    /**Agregando método de suma */
    sumar(){
      this.numero +=1;
    }
  
    restar(){
      this.numero -=1;
    }
  
    acumular( valor: number ){
      this.numero += valor;
    }
}