
// clase de ejemplo

/*
    Encapsulamiento:   alcance o visibilidad de los mismos
    
   Tengo que crear una instancia 
    private:  esta propiedad solo va a ser visible dentro de esta clase
    public:  alguien fuera de la clase podrá ver esta propiedad
    static:  voy a poder acceder al valor de esta propiedad sin crear una instancia de la clase 
        Heroe.nombreReal   <------

*/

class Heroe44 {

    private alterEgo: string;
    public edad: number;
    static nombreReal: number;

    imprimir() { 
        return this.alterEgo + ' ';
    }

}

//   ---> acceso   statico
//Hero.nombreReal

// acceso publico
// const ironman = new Hero();
//ironman.edad


//



interface Personaje44 {

    alterEgo?: string;
    edad?: number;
    nombreReal?: number;

    imprimirNombre: () => String;
}


/*
    la diferencia entre una clase y una interfaz es que 
        * la interfaz es una clase tonta
            * en la interfaz solo se definen los tipos de datos
            
        * la clase podemos hacer implementaciones por ejemplo de metodos y definir tipos

*/
