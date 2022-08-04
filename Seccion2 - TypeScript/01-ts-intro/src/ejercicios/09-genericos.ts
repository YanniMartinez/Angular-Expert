/*
    ===== Código de TypeScript =====
*/

/**Genericos 
 * <T> significa que se trata de un generico y el argumento igual
*/
function queTipoSoy<T>(argumento: T){
    return argumento
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(26);
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8]);

let soyExplicito = queTipoSoy<number>(15);