
/**
 * tipado estatico: nos asegura que la data no vaya a cambiar
 * un arreglo puede tener cierto tipos de valores
 * regula la forma en como la información entra y sale j
 * 
 */

/*
    Desestructuracion de argumentos en una funcion
    
 */

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 123
};

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 234
}

function calculaISV ( productos: Producto[] ): number {

    let total = 0;

    // aquí producto ya sabe que es de tipo producto
    // aqui no hay desestrucutración,podemos hacerlo ya que solo usamos el precio para computar
    productos.forEach( ( producto ) => {
       total += producto.precio; 
    })

    return total * 0.35;
}

const articulos: Producto[] = [ telefono, tableta ];
const isv = calculaISV( articulos );

console.log('ISV: ', isv);




// -----------------------------------------------------

function calculaISV1 ( productos: Producto[] ): number {

    let total = 0;

    // aquí producto ya sabe que es de tipo producto
    // aqui hay desestrucutración,podemos hacerlo ya que solo usamos el precio para computar
    // por cada producto desestructuramos el objeto y tomamos el precio
    productos.forEach( ( { precio } ) => {
       total += precio; 
    })

    return total * 0.35;
}

const isv1 = calculaISV1( articulos );


console.log('ISV1: ', isv1);



// -----------------------------------------------------
export function calculaISV2 ( productos: Producto[] ): [number, number] {

    let total = 0;

    // aquí producto ya sabe que es de tipo producto
    // aqui hay desestrucutración,podemos hacerlo ya que solo usamos el precio para computar
    // por cada producto desestructuramos el objeto y tomamos el precio
    productos.forEach( ( { precio } ) => {
       total += precio; 
    })

    return [total, total * 0.35];
}

// hacemo desestrucuración del array
const [ total, isv2 ] = calculaISV2( articulos );


console.log('total: ', total);
console.log('ISV1: ', isv2);

