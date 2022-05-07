
/**
 * tipado estatico: nos asegura que la data no vaya a cambiar
 * un arreglo puede tener cierto tipos de valores
 * regula la forma en como la información entra y sale j
 * 
 */


/*
    function sumar(a, b) {
        return a + b;
    }

    * esto podria significar suma de dos números
    * concatenación de strings 
    * añadir una propiedad a un objeto

 */

// * numerico
function sumar(a: number, b: number): number {
    return a + b;
}

console.log(sumar(10, 20));


// * arrow functiond

const sumardd = (a: number, b: number): number => {
    return a + b;
}

console.log(sumardd(10, 20));


// * string

function sumar1(a: string, b: string): string {
    return a + b;

}

console.log(sumar1("dsjdfks", "kdskd"));


// * argumentos opcionales o argumentos obligatorios
//     usamos el character '?' para indicarle que es opcional
//     también podemos valore por defecto 


function sumar2(a: number, b: number, c?: number, d: number = 3): number {
    return a + b;
}

console.log(sumar2(9, 9));



// cuándo no retorno nada en la función
// funciones en interfaces
/*
    las interfaces son como una clase tonta
    la interface no sabe como funciona una funcion dentro de ella
    Lo unico que hace la función es asegurar que tenga dichas propiedades y con dicho metodoso

    me van a ayudar a retrigir los tipos de propiedades y los metodos

*/

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarPv: () => void
}


function curar(personaje: PersonajeLOR, curarX: number): void {
   personaje.pv += curarX;
}

const personajeHola = {
    nombre: "Juan",
    pv: 27,
    mostrarPv() {
        console.log(`Puntos de vida ${this.pv}`)
    }


}

curar(personajeHola, 10);
personajeHola.mostrarPv();
