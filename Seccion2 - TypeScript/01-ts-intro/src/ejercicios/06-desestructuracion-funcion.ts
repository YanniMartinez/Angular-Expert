/*
    ===== Código de TypeScript =====
*/

interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

function calculaISV( productos: Producto[]) : number{
    let total = 0;

    productos.forEach( (producto ) => {
        total += producto.precio;
    })
    return total * 0.15;
}

const articulos = [ telefono, tableta ]
const isv = calculaISV( articulos )
console.log('ISV: ',isv)

/**
 * Otra manera de hacerlo mediante una desestructuracion
 * más avanzada al foreach
 */

 function calculaISV2( productos: Producto[]) : [number,number]{
    let total = 0;

    productos.forEach( ( {precio} ) => {
        total += precio;
    })
    return [total, total * 0.15];
}

const articulos2 = [ telefono, tableta ]
const [total,isv2] = calculaISV2( articulos )
console.log('Total: ',total)
console.log('ISV: ',isv2)