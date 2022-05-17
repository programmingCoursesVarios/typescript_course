
/*
    T : es generico    
*/
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo!');
let soyNumber = queTipoSoy(34);
let soyArray = queTipoSoy([1, 2, 3, 4, 5, 6]);

console.log(soyString);
console.log(soyNumber);
console.log(queTipoSoy);







