/*
    ===== Código de TypeScript =====
*/

//Tradicional, notamos que desestructura solo el objeto de la interfaz
import { Producto, calculaISV2 } from "./06-desestructuracion-funcion";


/**Importaciones y exportaciones */
const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },

];

const [total, isv] = calculaISV2(carritoCompras);

console.log('Total', total);
console.log('ISV',isv);
