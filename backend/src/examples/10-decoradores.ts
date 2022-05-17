// Decoradores


/*
    JavaScript no conoce los "decoradores"
        * Cuando se hace la traducción de typescript a  javascript crea una funciones que expanden de alguna manera las clases
        * un decorador es una función que expande su clase añadiendo funcionalidades especiales

    Usualmente los decoradores sirven para cambiar las clases en momento de que son definidas o
        * en momento de traducir a otra cosa va a "extender" internamente esas funcionalidades que queremos implementar

    Angular usa mucho los decoradores para cambiar las clases 

    colocar decoradores
        @miDecorador
        @miDecorador()
        @miDecorador({})

    Un decorador no es más que una función

    configurar en el archivo tsconfig.ts la llave "experimentalDecorators"

 */


function classDecorator<T extends { new (...args: any[]): {} }> (   
    constructor: T
) {
    return class extends constructor {
        newProperty = "New property";
        hello = "override";
    };
}


@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'AAA000';

    imprimir() {
        console.log('Hola Mundo');
    }

}

/**
    El decorador trabaja un nivel antes de la creación de una nueva instancia de la clase MiSuperClase
 */
console.log( MiSuperClase ); // imprimimos la clase
/**
    class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new Property";
            this.hello = "override";
        }
    }
 */

const miClase = new MiSuperClase();

console.log( miClase );
/**
    MiSuperClase {miPropiedad: 'AAA000', newProperty: 'New property', hello: 'override'}
    hello: "override"
    miPropiedad: "AAA000"
    newProperty: "New property"
    [[Prototype]]: MiSuperClase
 */


console.log( miClase.miPropiedad )
// AAA000


/**
    los decoradores sirven para añadir o expandir funcionalidades 

    Angular utiliza los decoradores para saber:
        * Si esta clase es un componente
        * si esta clase es un pipe
        * si esta clase es una directiva
        * si esta clase es una servicio
        * Si esta clase es cualquier otra cosa en Angular
 */
