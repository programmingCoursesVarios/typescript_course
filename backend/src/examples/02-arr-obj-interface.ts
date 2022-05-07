

console.log('Hola Mundo!!!!');



/*
    ===== Código de TypeScript =====
*/

// recordemos que los arreglos en javascript son un objeto, (tiene propiedades)




interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[]
    puebloNatal?: string 
};

const personaje: Personaje = {
    nombre: "dsdfs",
    hp: 100,
    habilidades: ['bash', 'hol']

}

personaje.puebloNatal = 'Pueblo Paleta';

console.log(personaje);
console.table(personaje);
