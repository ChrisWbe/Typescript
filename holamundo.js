//Introducción
console.log("Hola Mundo");
//Observar los cambios que se hagan en la aplicación .ts
//tsc aplicacion.tsc --watch
console.log("Cambio");
console.error("Error");
console.warn("Warning");
console.clear();
//Tipos de datos - Variables
var edad, puntos, a = 19;
edad = 52;
puntos = 100;
var texto = 'Prueba de texto', texto2 = "Prueba de texto";
var textoContatenado = texto + " " + texto2;
var flag = false || true;
//Objetos
var persona = {
    nombre: "Tomas",
    apellido: "Garay",
    edad: 16,
    peso: 120
};
console.log(persona.nombre);
var persona2; //Hereda todas las propiedades de la interface, es como una regla a seguir
var persona3 = {
    nombre: "Carmen",
    apellido: "Najera",
    edad: 1,
    peso: 120
}; // La iterface obliga a utilizar todas las propiedades
//Any - Tipo de datos, definir variable sin necesidad de colocar un tipo
var nombre = "String";
nombre = 15;
//Puedo asignar cualquier tipo de valor dado que está definida como tipo any
