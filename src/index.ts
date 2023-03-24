console.log("Hola Jesús");



//Declaración de variables
var nombre: string = "Jesús";

console.log("Hola " + nombre);
console.log("¿Qué tal", nombre,"?");
console.log(`¿Cómo han ido las vacaciones, ${nombre}`);

let email = "jesusdespinelm@gmail.com";
console.log(`Email de ${nombre} es ${email}`)

const PI: number = 3.1416;

var apellidos: any = "espinel"; // tipo any que hace que la variable pueda cambiar de dato
apellidos = 3;

// Instanciación múltiple de variables.

let a:string, b:boolean, c:number; // instancia 3 variables sin valor inicial

a= "Typescript";
b = true;
c = 0.9;

//Types: number, string, boolean , void, null , undefined

// Tipos más complejos
let listaTareas: string[] = ["Tarea1", "Tarea2"]


let valores: (string | number | boolean)[] = [false, true, 56, "hola"]

//Enumerados

enum Estados {
    "Completados"= "C",
    "Incompleto"= "I",
    "Pendiente" = "P"
}
enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercera"
}

let estadoTarea: Estados = Estados.Completados
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo

// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

//podemos crear variables que siguen la interface Tarea

let tarea1: Tarea = {
    nombre:"Meditar",
    estado:Estados.Pendiente,
    urgencia: 10

}
console.log(`Tarea: ${tarea1.nombre}`)

//asignación múltiple de variables
let miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completados,
    urgencia: 1
}

let {titulo, estado,urgencia} = miTarea

let listaCompraLunes: string[] = ["leche","jamon"]
let listaCompraMartes: string[] = [...listaCompraLunes,"pan","huevos"]
let listaCompraMiercoles: string[] = ["Carne","Pescado"]
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMartes]

let estadoApp = {
usuario: "admin",
session: 3,
jwt: "bearer123456"
}
let nuevoEstado = {
    ...estadoApp,
    session:4
}

//Types de Typescript
 type Producto = {
    precio: number,
    nombre: string
    año: number
 }

 let coche: Producto = {
    nombre: "Audi",
    precio: 40000,
    año: 2010
 }

 console.log(`Coche: ${coche.nombre}`)

 //Operador ternario
 console.log(coche.año < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);

 // if- else if- else 

 if(coche.año < 2010){
    console.log(`Coche: ${coche.nombre} es viejo`)
 }else if(coche.año === 2010){
    console.log(`Coche: ${coche.nombre} es del 2010`)
 }else{
    `Coche: ${coche.nombre} es nuevo`
 }

 // Bucles

 let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea1",
        estado: Estados.Completados,
        urgencia:2
    },
    {
        nombre: "Tarea2",
        estado: Estados.Pendiente,
        urgencia:0
    },
    {
    nombre: "Tarea3",
    estado: Estados.Completados,
    urgencia:15
   },
 ]


listaTareasNueva.forEach((tarea: Tarea, index: number,)=> {
    console.log(`${index} - ${tarea.nombre}`)
})

while(tarea1.estado !== Estados.Completados) {
    if(tarea1.urgencia == 5){
        tarea1.estado= Estados.Completados
    }else{
        tarea1.urgencia++;
    }
}

// Funciones
/**
 * Función que muestra un saludo por consola
 */
function saludar(){
    let nombre ="Jesús"
    console.log(`Hola , ${nombre}`)
}
//Invoación

saludar();
/**
 * Función que muestra un saludo por consola a una persona.
 * @param nombre 
 */
function saludarPersona(nombre: string){
console.log(`Hola, ${nombre}`)
}

saludarPersona("Yisus");

/**
 * Función que muestra un adios por consola a una persona
 * @param nombre // nombre de la persona a despedir, por defecto será pepe
 */
function despedirPersona(nombre:string = "pepe"){
    console.log(`Àdios, ${nombre}`)
}

despedirPersona(); //Adios pepe
despedirPersona("Alba") //Adios alba

function despedidaOpcional(nombre?:string){
if(nombre){
    console.log(`Adiós, ${nombre}`);
}else{
    console.log(`Adiós`);
}
}

despedidaOpcional(); //Adiós
despedidaOpcional("Juanjo"); // Adios Juanjo!


function variosParams(nombre:string, apellidos?:string, edad:number=18){
    if(apellidos){
        console.log(`${nombre} ${apellidos} tiene ${edad} años`)
    }else{
        console.log(`${nombre} tiene ${edad} años`)
    }
    
}

variosParams("Jesús") // Jesús tiene 18 años
variosParams("Jesús", "Espinel") // Jesús Espinel tiene 18 años
variosParams("Jesús", undefined, 30) // Jesús tiene 30 años
variosParams("Jesús","Espinel", 30) //Jesus espinel tiene 30 años

function ejemploVariosTipos(a:string | number){
   if(typeof(a) === "string"){
    console.log("A es un string");
    }else if(typeof a === "number"){
        console.log("A es un number");
    }else{
        console.log("A no es un string ni número");
        throw Error("A no es string ni número");
    }
}
ejemploVariosTipos("hola");
ejemploVariosTipos(2);

function ejemploReturn(nombre:string, apellidos:string):string | number{
return `${nombre} ${apellidos}`
}

const nombreCompeto = ejemploReturn("Jesus","Espinel")
console.log(nombreCompeto) //Jesus Espinel

console.log(ejemploReturn ("Jesus","Espinel")) //Jesus Espinel

function ejemploMultipleParams(...nombres:string[]){
        nombres.forEach((nombre)=>{
            console.log(nombre)
        })
}

ejemploMultipleParams("Martin")
ejemploMultipleParams("santiago", "Paula", "Jesus","Mario")

const lista = ["Alberto","Sandra"]
ejemploMultipleParams(...lista)

function ejemploMultipleParamsLista(nombres:string[]){
    nombres.forEach((nombre)=>{
        console.log(nombre)
    })
}

ejemploMultipleParamsLista(lista);

// Arrow functions

type Empleado ={
nombre: string,
apellido: string,
edad:number
}

let empleadoMartin:Empleado = {
    nombre: "Martin",
    apellido: "Espinel",
    edad:30
}

const mostrarEmpleado =(empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad}`

mostrarEmpleado(empleadoMartin);


const datosEmpleados = (empleado:Empleado): string =>{
    if(empleado.edad > 70){
 return `Empleado ${empleado.nombre} está en nivel de jubilación` 
    }else{
 return `Empleado ${empleado.nombre} está en edad laboral` 
    }
}

datosEmpleados(empleadoMartin)

const obtenerSalarios = (empleado:Empleado, cobrar:()=> "Cobrar") =>{
    if(empleado.edad > 70){
        return
    }else{
        cobrar() // callback a ejecutar
    }
}

const cobrarSalario = () =>{
    console.log("Cobrar nomina de empleado")
}

obtenerSalarios(empleadoMartin, cobrarSalario)