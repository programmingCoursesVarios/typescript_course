
// clase de ejemplo

/*
    Encapsulamiento:   alcance o visibilidad de los mismos
    
   Tengo que crear una instancia 
    private:  esta propiedad solo va a ser visible dentro de esta clase
    public:  alguien fuera de la clase podrá ver esta propiedad
    static:  voy a poder acceder al valor de esta propiedad sin crear una instancia de la clase 
        Heroe.nombreReal   <------

*/

class Heroe {

    private alterEgo: string;
    public edad: number;
    static nombreReal: number;


}

//   ---> acceso   statico
//Hero.nombreReal

// acceso publico
// const ironman = new Hero();
//ironman.edad


//

class Hero {
   
    // por defecto son publicas su nivel de acceso
    alterEgo: string;
    edad: number;
    nombreReal: number;
    
    // método que se invoca cuando creo una instancia de mi clase
    // podemos inicializar las propiedades de mi clase
    constructor( alterEgo: string ) {
       this.alterEgo = alterEgo; 
    }
}

const ironman = new Hero('Ironman');

console.log(ironman);


class Hero2 {
    
    // por defecto son publicas su nivel de acceso
    //    alterEgo: string;     ----> no hay necesidad de definirlo en la clase
    //    edad: number;----> no hay necesidad de definirlo en la clase
    ///   nombreReal: number; ----> no hay necesidad de definirlo en la clase
    
    // método que se invoca cuando creo una instancia de mi clase
    // podemos inicializar las propiedades de mi clase
    // este constructor es el mismo de arriba, no hay necesidad de asignarle usando this

    // Esto es conocido en angular como la inyección de dependencias
    constructor( 
        public alterEgo: string, 
        public edad?: number,   // propiedad opcional ?
        public nombreReal?: number // propiedad opcional ?
    ) {}
}


const ironman22 = new Hero2('Ironman');

console.log(ironman22);












/// --------------------------------------------------------------------------------------------------

/*
    Extender nos es más que añadir ciertas funcionalidades a una clase existente

    * las interfaces también se pueden extender
*/


class PersonaNormal {
    
    constructor( 
        public nombre: string, 
        public direccion: string
    ) {}
}

class Hero3 extends PersonaNormal {
    
    constructor( 
        public alterEgo: string, 
        public edad?: number,   // propiedad opcional ?
        public nombreReal?: string // propiedad opcional ?
    ) {
        super( nombreReal, 'New York, USA')
    }
}


const ironman2 = new Hero3('Ironman', 45, 'Tony');

console.log(ironman2);

