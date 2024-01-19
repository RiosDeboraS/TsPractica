/*podemos extender tipos usando la palabra clave extends. Esto nos permite crear un nuevo tipo que hereda las propiedades y métodos de un tipo existente.

Por ejemplo, el siguiente código define un tipo llamado Persona que tiene dos propiedades: nombre y edad:*/


interface Persona {
  nombre: string;
  edad: number;
}


//podemos extender el tipo Persona para crear un nuevo tipo llamado Empleado que tiene una propiedad adicional llamada cargo:


interface Empleado extends Persona {
  cargo: string;
}
//La variable empleado puede ser asignada a cualquier objeto que cumpla con el tipo Empleado. Por ejemplo, el siguiente código es válido:


const empleado: Empleado = {
  nombre: "Milton",
  edad: 25,
  cargo: "Ingeniero de software",
};

/*La palabra clave extends se usa para indicar que un tipo está extendiendo otro tipo. El tipo que se está extendiendo se llama tipo base. 
El tipo que se está creando se llama tipo derivado.
El tipo derivado hereda todas las propiedades y métodos del tipo base. También puede agregar sus propias propiedades y métodos.
En el ejemplo anterior, el tipo Empleado extiende el tipo Persona. 
Esto significa que el tipo Empleado tiene todas las propiedades y métodos del tipo Persona, más la propiedad cargo.*/