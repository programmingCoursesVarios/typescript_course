// Decoradores


/*
   Los decoradores sirven para cambiar las clases en momento de que son definidas o
        * en momento de traducir a otra cosa va a "extender" internamente esas funcionalidades que queremos implementar



  Angular usa mucho los decoradores para cambiar las clases
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


console.log( MiSuperClase );

