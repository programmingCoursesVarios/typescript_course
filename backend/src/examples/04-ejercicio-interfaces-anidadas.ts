
/**
 * tipado estatico: nos asegura que la data no vaya a cambiar
 * un arreglo puede tener cierto tipos de valores
 * regula la forma en como la información entra y sale j
 * 
 */


/*
 * No es común ver interfaces anidadas
*/



interface NAddress {
    calle: string,
    pais: string,
    ciudad: string
}

interface SuperHero {
    name: string,
    edad: number,
    address: NAddress,
    mostrarDireccion: () => string 
}

const hero = {
    name: 'Spiderman',
    edad: 30,
    address: {
        calle: 'Main St',
        pais: 'Usa',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais; 
    }
};

const direccion = hero.mostrarDireccion(); 
console.log(direccion);
console.table(direccion);
