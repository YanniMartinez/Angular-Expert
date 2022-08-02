/**
 * ¿Que tipo de dato son losproductos?
 * ¿Como luce un producto?
 * ¿Qué atributos tiene un producto?
 */
function calculaISV(productos){
    let total =0;

    productos.forEach( ({precios}) => {
        total += precios;
    });

    return [total,total * 0.15];
}
