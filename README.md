# typescript 

Restricciones en mode de desarrollo para que el código cumpla esas reglas



```javascript
//  let nombre = 'Stribe'; // typescript está infiriendo el tipo de dato
let nombre: string = 'Stribe'; // explicitamente nombre tiene un tipo  
let hp: number = 123; 


nombre = "Jose"; // si asigno un valor diferente de tipo typescript no me deja
// hp = "dsd"; // NO es posible asinarle un string 
console.log(nombre, hp);
```

* también podemos usar varios tipos usando OR

```javascript
//  let nombre = 'Stribe'; // typescript está infiriendo el tipo de dato
let nombre: string = 'Stribe'; // explicitamente nombre tiene un tipo  
let hp: number | string  = 123; // ------> usamos OR

console.log(hp);


nombre = "Jose"; // si asigno un valor diferente de tipo typescript no me deja
hp = "dsd"; // si es posible asignarle el tipo de dato  
console.log(nombre, hp);
```

* Usamos variables booleans
```javascript
let isLive: boolean = true;

console.log(isLive);


```

* el uso correcto de los arreglos

```javascript
// recordemos que los arreglos en javascript son un objeto, (tiene propiedades)
let habilidades = []; // de esta manera el array almacena "any" cualquier cosa

```

* inferencia de arreglos

```javascript
let habilidades = ["hola", "sdfsd"]; // typescript infiere el tipo en este caso string

```


* tipado explicito

```javascript
let habilidades: string[] = ["hola", "sdfsd"]; // typescript infiere el tipo en este caso string

```

* tipado explicito de varios tipos

```javascript
let habilidades: (boolean | string | number)[] = ["hola", "sdfsd", 23, true]; // typescript infiere el tipo en este caso string

```

* Objectos 

    * Usando interfaces:
        
        * Interface: una serie de llaves para asegurarnos que el código sea como nosotros querramos o como un objeto luzca
        * Usualmente las interfaces van con estilo camelcase

```javascript
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[]
};

const personaje: Personaje = {
    nombre: "dsdfs",
    hp: 100,
    habilidades: ['bash', 'hol']

}

console.log(personaje);
console.table(personaje);
```

* si le añadimos una propiedad adicional
    * usamos el operador '?' para indicar que la propiedad es opcional


* Las interfaces obligan a nuestros objetos a que implementen lo que nosotros le decimos 
Es parecido a una clase 

```javascript
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
```



