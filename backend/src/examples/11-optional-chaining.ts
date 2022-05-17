/*
	Encademamiento opcional 



 */

interface Pasajero {
	nombre: string;
	hijos?: string[];    // esta propiedad es opcional
}

const pasajero1: Pasajero = {
	nombre: 'Fernando'
}

const pasajero2: Pasajero = {
	nombre: 'Melisa',
	hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {

	/*
	   hijos?  ----> revisa si el pasajero tiene la propiedad "hijos" si no la tiene es "undefined"
	   ||      ---->  OR logico    ( undefined OR 0 ) ===> gana el 0 (zero)

	   en medio del encadenamiento revisa si lo que sigue es seguro hacerlo, de lo contrario es "undefined"
	 */
	const cuantosHijos = pasajero.hijos?.length || 0;

	console.log( cuantosHijos );
}

imprimeHijos( pasajero2 );
// 2
imprimeHijos( pasajero1 );
// 0
