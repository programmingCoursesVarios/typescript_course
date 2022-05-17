
/*
 En el archivo "06-desestructuracion-function.ts"

 tenemos la siguiente interface 

 export interface Producto {
    desc: string,
    precio: number,
 }

 Está la vamos a importar aquí para reutilizarla




*/

/*
*/


// vamos a importar haciendo la desestructuracióno del objeto que está exportando este modulo (archivo)
// tanto la interfaz Producto
// como la funcion calculaISV2   desestructramos del archivo
//import { Producto, calculaISV2 } from './examples/06-desestructuracion-function';
import { Producto, calculaISV2 } from './06-desestructuracion-function';
// cambiar la ruta del path de la importación debido a que la función estuvo alguna vez en el index.ts

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 200
    }
];


const [total, isv] = calculaISV2( carritoCompras );

console.log('Total', total);
console.log('ISV', isv);


// IMPORTANTE

/*
    algo importante de las importaciones es que a la hora de importar funciones
    el va ejecutar el código del otro archivo de la función
    y también ejecutará el código que ejecutamos en este archivo cuando la llamamos
*/
