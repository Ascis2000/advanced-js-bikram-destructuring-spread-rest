//RESUELVE LOS EJERCICIOS AQUÍ
/* 
1.- Dado el objeto empleado, extrae la empleada Ana completa.
*/
let ana = {};
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

function ejercicio1(){
    let [nombre, email] = [empleados[1].name, empleados[1].email];
    ana.name = nombre;
    ana.email = email
    return ana;
}
console.log("// Ejercicio 1");
console.log( "ejercicio1()=", ejercicio1() );
console.log("******************");


/* 
2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com
*/
let emailLuis = empleados[0].email;
console.log("// Ejercicio 2");
console.log( "ejercicio2()=", emailLuis );
console.log("******************");


/* 
3.- Usa destructuración para cambiar los valores de a y b
*/
let a = 5;
let b = 3;

function ejercicio3(){
    [a, b] = [3, 5];
    return "a=" + a + ", b=" + b;
}
console.log("// Ejercicio 3");
console.log( "ejercicio3()=", ejercicio3() );
console.log("******************");


/* 
4.- Dado el objeto HIGH_TEMPERATURES
Cambiar las siguientes líneas para guardar mediante destructuración 
los valores de temperaturas en las variables maximaHoy y maximaManana
*/
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;

function ejercicio4(){
    const { today, tomorrow } = HIGH_TEMPERATURES;

    let resultado = "today=" + today + ", tomorrow=" + tomorrow;
    return resultado;
}
console.log("// Ejercicio 4");
console.log( "ejercicio4()=", ejercicio4() );
console.log("******************");


/* 
5.- Escribe una función llamada sumEveryOther que pueda recibir 
cualquier cantidad de números y devuelva la suma de todos los 
demás argumentos.
*/
function sumEveryOther(...n){
    
    let resultado = n.reduce((acum, valorActual) => acum + valorActual, 0);
    return resultado
}
console.log("// Ejercicio 5");
console.log( "sumEveryOther(11, 3, 12)=", sumEveryOther(11, 3, 12) );
console.log( "sumEveryOther(6, 8, 2, 3, 1)=", sumEveryOther(6, 8, 2, 3, 1) );
console.log("******************");


/* 
6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier 
número de argumentos (incluyendo números y strings y retorne la suma 
solo de los números).
*/
function addOnlyNums(...n){
    
    let resultado = n
        .filter(item => typeof item === 'number')
        .reduce((acum, valorActual) => acum + valorActual, 0);
    return resultado;
}
console.log("// Ejercicio 6");
console.log( "addOnlyNums(11, '3', true)=", addOnlyNums(11, '3', true) );
console.log( "addOnlyNums(6, 8, '27', 2)=", addOnlyNums(6, 8, '27', 2) );
console.log("******************");


/* 
7.- Escribe una función llamada countTheArgs que pueda recibir cualquier 
número de argumentos y devuelva un número que indique cuántos argumentos 
ha recibido.
*/
function countTheArgs(...n){
    return n.length;
}
console.log("// Ejercicio 7");
console.log( "countTheArgs(11, '3', true)=", countTheArgs(11, '3', true) );
console.log( "countTheArgs(6, 8, '27', 2, 11, true)=", countTheArgs(6, 8, '27', 2, 11, true) );
console.log("******************");


/* 
8.- Escribe una función llamada combineTwoArrays que reciba 
dos array cómo argumentos y devuelva solo un array que combine los 
dos (usando spread operator).
*/
function combineTwoArrays(arr0, arr1){

    let arr_resultado = [
        ...arr0,
        ...arr1
    ];
    return arr_resultado;
}
console.log("// Ejercicio 8");
console.log( "combineTwoArrays(['hola', 5, true], ['adios', 15, false])=", combineTwoArrays(['hola', 5, true], ['adios', 15, false]) );
console.log("******************");


/* 
9.- Escriba una función llamada onlyUniques que acepte cualquier 
número de argumentos y devuelva un array de elementos únicos, 
sin repetidos.
*/
function onlyUniques(...z){
    let arr_unicos = [];

    z.forEach((item) => {
        // si el valor no está incluido
        if (!arr_unicos.includes(item)) { 
            arr_unicos.push(item);
        }
    });
    return arr_unicos;
}
console.log("// Ejercicio 9");
console.log( "onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)=", onlyUniques(1, 1, 2, 2, 3, 6, 7, 8) );
console.log("******************");


/* 
10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier 
cantidad de arrays como argumentos y los combine todos en un solo array.
*/
function combineAllArrays(...z) {
    let arr_final = [];

    z.forEach((item) => {
        // Actualizamos arr_final con el nuevo array concatenado
        arr_final = arr_final.concat(item); 
    });
    return arr_final;
}
console.log("// Ejercicio 10");
console.log( combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]) );
console.log( combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]) );
console.log("******************");


/* 
11.- Escriba una función llamada sumAndSquare que reciba cualquier número 
de argumentos, los eleve al cuadrado y devuelva la suma de todos los 
valores cuadrados.
*/
function sumAndSquare(...z) {

    let resultado = z
        .map(item => item ** 2)
        .reduce((acum, valorActual) => acum + valorActual, 0);
    return resultado;
}
console.log("// Ejercicio 11");
console.log( sumAndSquare(1, 3, 4) );
console.log("******************");