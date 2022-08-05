import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    
    nombre: string = 'Iron Man'
    edad  : number = 45;
    pic: string = "https://66.media.tumblr.com/97279c37264ccdf40302a12ff33958b3/tumblr_mgrbnb2nYr1rfjowdo1_r1_500.gif";
    /** Al llamarse sólo se pone como nombreCapitalizado */
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }


    cambiarNombre(): void{
        this.nombre = 'Spiderman';
        this.pic = "https://64.media.tumblr.com/tumblr_mavnqdzzI81qeh39oo1_r2_500.gifv";
    }

    cambiarEdad(): void{
        this.edad = 30;
    }


}