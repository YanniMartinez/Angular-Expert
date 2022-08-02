/*
    ===== Código de TypeScript =====
*/

function sumar(a,b){
    return a+b;
}

//Notamos que recive el any en ambas partes, en este caso concatena
const resultado = sumar('Yann', 'Martinez');
console.log(resultado)

/**
 * Para evitar problematicas podemos indicar el tipo de dato, etc.
 * En este caso indicamos que los parametros deben ser del tipo number
 * si intentamos poner algun otro valor entonces nos marcará error
 * Además le indicamos el tipo de dato a retornar
 */
function suma(a:number, b:number): number{
    //return (a+b).toString();
    return a + b;
}
const res = suma(15, 26);
console.log(res)

/**
 * Representación de la misma función pero en notación de flecha:
 * por defecto acepta any,any y retorna any
 * const sumarFlecha = (a, b) =>{
    return a+b
    }
 * Para solucionarlo ponemos lo siguiente:
 */
const sumarFlecha = (a: number, b: number): number =>{
    return a+b
}

/**
 * En las funciones también podemos recibir un valor opcional, sin embargo,
 * todos los valores que son mandatorios deben ir antes de uno opcional
 * para no tener problemas con el código,por ejemplo, si dejamos la siguiente declaracion
 * nunca interpretará el tercer valor, porloque le da el valor por default de 2
 */
function multiplicar(numero: number, otroNumero ?: number, base: number =2): number{
    return numero * base;
}

const resMul = multiplicar(5,10);
console.log("Con 2 parametros ",resMul); //Retorna 10*2, debido a que el base por defecto tiene ese valor

const resMul2 = multiplicar(5); //También lo acepta por que el 2do es opcional y el otro trae por defecto
console.log("Solo un parametro ", resMul2);

const resMul3 = multiplicar(5,0,10)
console.log("Con 3 parametros ", resMul3);