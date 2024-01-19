// Practica de sintaxis

const nombre: string = "Debora"; // Variables igual a JS
// No se puede reasignar menos cuando no coinciden los tipos
// Ejemplo = const nombre = 2

// A los argumentos de las funciones debe realizar una aclaración de tipos;

function probando(a: number, b: number) {
  return a + b;
}

// Inferencia
let a = 1;
let b = 2;
let c = a + b; // Detecta que c también es un número.


// Ejemplo de `void`

function saludar() {
    console.log("Hola");
    return; // Devuelve `void`
  }
  // Función que no retorna ningún valor

function saludando(): void {
    console.log("Hola");
  }
  
  // Función que retorna un valor, pero que siempre arroja una excepción
  
  function excepción(a: number, b: number) { // : void
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b; // saltaria error 
  }
  
  // Ejemplo de `never`
  
  function dividir(a: number, b: number) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }

// //   El tipo void se utiliza para indicar que una función no devuelve ningún valor. 
// En el ejemplo anterior, la función saludar() no devuelve ningún valor, por lo que se le asigna el tipo void.
// // El tipo never se utiliza para indicar que una función nunca se completará. E
// n el ejemplo anterior, la función dividir() arrojará una excepción si se le pasa un valor de b igual a 0. 
// Por lo tanto, se le asigna el tipo never.

// Arrays

const arregloNumeros: number[] = [1, 2, 3];
const arregloMixto: (number | string)[] = [1, "hola", 2];


// obj

interface Persona {
    nombre: string;
    edad: number;
  }
  
  const persona: Persona = {
    nombre: "Debora",
    edad: 25,
  };
// funcion de orden superior
  function saludo(nombre: string, callback?: () => void) {
    console.log(`Hola, ${nombre}`);
    if (callback) {
      callback();
    }
  }
  
  saludo("Debora"); // Hola, Debora
  
  // Con callback
  
  saludo("Debora", () => {
    console.log("¡Buen día!");
  }); // Hola, Debora
  // ¡Buen día!