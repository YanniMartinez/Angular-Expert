interface Producto{
    desc: String;
    precio: number;
}

/**
 * Logramos identificar que los productos son de tipo arreglo []
 * 
 * productos: Producto[]) indica que elproducto es un arreglo
 * [number, number] indica que se retornará un arreglo de 2 numeros
 */
function calculaISV( productos: Producto[]): [number, number] {
    let total = 0;

    productos.forEach( ({precio}) =>{
        total += precio;
    });
    return [total, total*0.15];
}