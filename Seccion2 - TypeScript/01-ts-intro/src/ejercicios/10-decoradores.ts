/*
    ===== Código de TypeScript =====
*/

/**
 * Documentación de Decoradores: https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
 * Algo interesante de Angular es que casi todo es una clase
 * Un DECORADOR no es más que una función, sirven para expandir atributos o funcionalidades.
 * En resumen, un decorador es una función que expande funcionalidades de nuestra clase
*/

/**Ejemplo de la documentación oficial */
function classDecorator<T extends {new  (...args: any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = "New property";
        hello = "Override";
    };
}

//Se soluciona el error poiendo true el atributo experimentalDecorators=true
@classDecorator
class MiSuperClase{
    public miPropiedad: string;

    imprimir(){
        console.log("Hola Mundo");
    }
} 

/**
 * Imprimiendo la clase:
 * Notaremos que tendrá todo lo que viene en el decorador
 * debido a que se realiza antes de la instanciación, es decir,
 * antes de crear una instancia de la clase.
 */
console.log( MiSuperClase)
const miClase = new MiSuperClase();
console.log(miClase);