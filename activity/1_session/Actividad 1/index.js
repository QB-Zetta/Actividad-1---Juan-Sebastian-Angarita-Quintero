// Ejercicio 1 - Doc index.js

import './aboutme.js';

console.log("Ej 1");

console.log("Ej 3 – Números divisibles por 7 del 1 al 100:");

//Ejercicio 3 

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

// Ejercicio 6

// Objeto literal
let formatter = {
    prefix: "Hello ",
    
    // Método que imprime prefix + argumento
    append: function(str) {
      console.log(this.prefix + str);
    }
  };
  // Probar metodo append
  formatter.append("World"); // Result: Hello World
  // Atributo prototype
Object.setPrototypeOf(formatter, {
    toLowerString: function(str) {
      console.log(str.toLowerCase());
    }
  });
  // Probar metodo toLowerString
  formatter.toLowerString("I’m Sebas");   // Resultado: i’m Sebas
  