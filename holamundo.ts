//Introducción
console.log("Hola Mundo")

//Observar los cambios que se hagan en la aplicación .ts
//tsc aplicacion.tsc --watch
console.log("Cambio")
console.error("Error")
console.warn("Warning")
console.clear()

//Tipos de datos - Variables
var edad:number, puntos:number, a:number = 19;
edad = 52;
puntos = 100;

var texto:string = 'Prueba de texto', texto2:string = "Prueba de texto";
var textoContatenado:string = texto +" "+ texto2;

var flag:boolean = false || true; 

//Objetos
var persona = {
    nombre: "Tomas",
    apellido: "Garay",
    edad: 16,
    peso: 120
}

console.log(persona.nombre)

//Interfaces
interface Personas{
    nombre:string,
    apellido:string,
    edad:number,
    peso:number
}

var persona2:Personas //Hereda todas las propiedades de la interface, es como una regla a seguir
var persona3:Personas = {
    nombre:"Carmen",
    apellido:"Najera",
    edad:1,
    peso:120
} // La iterface obliga a utilizar todas las propiedades

//Any - Tipo de datos, definir variable sin necesidad de colocar un tipo
var nombre:any = "String"
nombre = 15
//Puedo asignar cualquier tipo de valor dado que está definida como tipo any