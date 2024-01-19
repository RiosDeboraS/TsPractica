// si en una propiedad usamos el readonly para indicar que es inmutable y solo de lectura:

interface ejemplo {
    readonly nombre: string;// INDICA SOLO LECTURA
    readonly edad: number;
  }
  
  const ejemploPersona: ejemplo = {
    nombre: "Juan",
    edad: 25,
  };
  
  // La siguiente línea genera un error
  //ejemploPersona.nombre = "Pedro";
  
  console.log(ejemploPersona.nombre); // Juan
  console.log(ejemploPersona.edad); // 25


  // Un `template union type` puede representar un valor que puede ser de uno o más tipos

type Color = "rojo" | "verde" | "azul";

const color: Color = "rojo";

// La siguiente línea es válida
if (color === "rojo") {
  console.log("El color es rojo");
}



// Un `template union type` también se puede usar para representar un valor que puede ser de uno o más tipos de objetos

interface Animal {
    nombre: string;
  }
  
  interface cuidador {
    nombre: string;
    edad: number;
  }
  
  type Objeto = Animal | cuidador;
  
  const objeto: Objeto = {
    nombre: "Juan",
    edad: 25,
  };
  
 /*
 Explicación

Un template union type se usa para representar un valor que puede ser de uno o más tipos. Se define usando el símbolo | para separar los tipos.
En los ejemplos anteriores, vemos cómo usar template union types para representar valores que pueden ser de uno o más tipos específicos.
Los template union types pueden ser útiles para representar datos que pueden ser de diferentes tipos. 
Por ejemplo, podemos usar un template union type para representar el tipo de datos de una variable que puede ser un número, una cadena o un objeto.*/
  
  
