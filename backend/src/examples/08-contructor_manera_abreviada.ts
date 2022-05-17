
// clase de ejemplo

/*
    Encapsulamiento:   alcance o visibilidad de los mismos
    
   Tengo que crear una instancia 
    private:  esta propiedad solo va a ser visible dentro de esta clase
    public:  alguien fuera de la clase podrá ver esta propiedad
    static:  voy a poder acceder al valor de esta propiedad sin crear una instancia de la clase 
        Heroe.nombreReal   <------

*/

class Heroe33 {

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

class Hero33 {
   
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

const ironman33 = new Hero33('Ironman');

console.log(ironman33);


class Hero233 {
    
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


const ironman2233 = new Hero233('Ironman');

console.log(ironman2233);

