// Alias para un tipo de número

type Numero = number;

// Alias para un tipo de arreglo de números

type ArregloNumeros = number[];

// Alias para un tipo de objeto con dos propiedades

type Persona = {
  nombre: string;
  edad: number;
};
/*type alias para crear nuestros propios tipos personalizados. 
En el primer ejemplo, Numero es un alias para el tipo number. 
En el segundo ejemplo, ArregloNumeros es un alias para el tipo number[]. 
En el tercer ejemplo, Persona es un alias para el tipo de objeto { nombre: string; edad: number; }.*/


/*Los type alias pueden ser útiles para mejorar la legibilidad y la mantenibilidad del código.
Por ejemplo, podemos usar type alias para crear tipos personalizados que sean más descriptivos que los tipos básicos de TypeScript.

Los type alias se pueden usar para crear tipos personalizados que sean más descriptivos que los tipos básicos de TypeScript. 
Por ejemplo, podemos usar type alias para crear tipos personalizados que representen conceptos específicos de nuestro dominio.

Los type alias también se pueden usar para crear tipos más complejos que no se pueden expresar fácilmente con los tipos básicos de TypeScript. 
Por ejemplo, podemos usar type alias para crear tipos que representan objetos con propiedades de diferentes tipos.

Los type alias son una herramienta poderosa que puede ayudarnos a escribir código TypeScript más eficiente y legible.*/


// propiedad opcional 

interface Person{
    nombre: string;
    edad: number;
    // La propiedad `sexo` es opcional
    sexo?: string;
  }
  
  const persona: Person = {
    nombre: "Juan",
    edad: 25,
  };

  /*la interfaz Persona tiene dos propiedades obligatorias, nombre y edad. 
  La propiedad sexo es opcional, lo que significa que no es necesario que esté presente en una instancia de Persona.*/
  

  //ejemplo: 
  function saludar(persona: Person) {
    // Si la propiedad `sexo` está presente, la imprimimos
    if (persona.sexo) {
      console.log(`Hola ${persona.nombre}, de sexo ${persona.sexo}`);
    } else {
      // Si la propiedad `sexo` no está presente, imprimimos un mensaje genérico
      console.log(`Hola ${persona.nombre}`);
    }
  }
  
  saludar({ nombre: "Juan", edad: 25 });
  

  
