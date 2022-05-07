
/**
 * tipado estatico: nos asegura que la data no vaya a cambiar
 * un arreglo puede tener cierto tipos de valores
 * regula la forma en como la información entra y sale j
 * 
 */


/*
    Desestructuración de objetos es algo que habilita la extracción de propiedades y metodos
    de un objeto de una manera muy fácil
*/


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 35,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

 console.log('El volumen actual de: ', volumen);
 console.log('El segundo actual de: ', segundo);
 console.log('la canción actual de: ', cancion);
 console.log('El autor es:  : ', autor);
 

 /*
    Desestructuración de objetos
 */


 const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
 const [ , , h3 ] = dbz;


 console.log('Personaje 3: ', h3); // tercer elemento


