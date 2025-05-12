// Ejercicio 1
const getProperties = (obj) => Object.keys(obj);
let person = {
  name: "Sebas",
  age: 31,
  profession: "Design Engineer"
};

console.log(getProperties(person)); // ➜ ["name", "age", "profession"]

// Ejercicio 2

// 1. Contexto global

console.log(this); 
console.log(this === window); 

//2. En una función normal (no estricta)

function mostrarThis() {
  console.log(this);
}

mostrarThis();

//3. En una función con "strict mode"

"use strict";
function mostrarThis() {
  console.log(this);
}

mostrarThis(); 

//4. Dentro de un objeto (método tradicional)

let persona = {
  nombre: "Sebas",
  saludar: function () {
    console.log(this.nombre);
  }
};

persona.saludar();

//5. En un método con arrow function

let persona = {
  nombre: "Sebas",
  saludar: () => {
    console.log(this.nombre);
  }
};

persona.saludar();

//6. En un evento DOM

<button onclick="console.log(this)">Click me</button>

//7. Usando ".call()", ".apply()", ".bind()" para forzar this 

function saludar() {
  console.log(this.nombre);
}

let persona = { nombre: "Sebas" };

saludar.call(persona);

// Ejercicio 3 (respuesta tabulada en la tarea PDF)


// Ejercicio 4
class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("User logged in");
    } else {
      alert("User or passwd incorrect");
    }
  }
}

// Ejercicio 5
// 1. Acceder a los botones del DOM
const btnSuccess = document.getElementById("loginSuccess");
const btnFailure = document.getElementById("loginFailure");

// 2. Añadir el listener para login correcto
btnSuccess.addEventListener("click", () => {
  const loginCorrecto = new Login("admin", "passwd");
  loginCorrecto.login(); // Mostrar: User logged in
});

// 3. Añadir el listener para login incorrecto
btnFailure.addEventListener("click", () => {
  const loginIncorrecto = new Login("pepe", "bad");
  loginIncorrecto.login(); // Mostrar: User or passwd incorrect
});

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

const btnSuccessAsync = document.getElementById("loginSuccessAsync");
const btnFailureAsync = document.getElementById("loginFailureAsync");

btnSuccessAsync.addEventListener("click", async () => {
  try {
    const resultado = await loginWitUsername("admin", "passwd");
    alert(resultado);
  } catch (error) {
    alert(error);
  }
});

btnFailureAsync.addEventListener("click", async () => {
  try {
    const resultado = await loginWitUsername("pepe", "wrong");
    alert(resultado);
  } catch (error) {
    alert(error);
  }
});

