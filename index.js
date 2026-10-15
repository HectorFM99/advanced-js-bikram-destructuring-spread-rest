//RESUELVE LOS EJERCICIOS AQUÍ

/* ===================== Destructuring ===================== */

// 1.- Extrae la empleada Ana completa
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// Ana está en la posición 1, por eso dejamos hueco con la coma vacía
const [, ana] = empleados;

// 2.- Extrae el email del empleado Luis (posición 0) directamente con alias
const [{ email: emailLuis }] = empleados;

// 3.- Intercambia los valores de a y b con destructuración
let a = 5;
let b = 3;

// Equivale a: const temporal = [b, a] -> a toma el valor de b y viceversa
[a, b] = [b, a];

// 4.- Guarda las temperaturas en maximaHoy y maximaManana mediante destructuración
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);     // 35
console.log(maximaManana);  // 32

/* ===================== Spread / Rest ===================== */

// 5.- Suma cualquier cantidad de números
function sumEveryOther(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

// 6.- Suma solo los números, ignorando los strings
function addOnlyNums(...args) {
    return args
        .filter(arg => typeof arg === "number")
        .reduce((total, num) => total + num, 0);
}

// 7.- Devuelve cuántos argumentos ha recibido
function countTheArgs(...args) {
    return args.length;
}

// 8.- Combina dos arrays en uno solo usando spread
function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

// 9.- Devuelve un array con los elementos únicos (sin repetidos)
function onlyUniques(...args) {
    return [...new Set(args)];
}

// 10.- Combina cualquier cantidad de arrays en uno solo
function combineAllArrays(...arrays) {
    return arrays.reduce((combinado, arr) => [...combinado, ...arr], []);
}

// 11.- Eleva cada argumento al cuadrado y suma todos los resultados
function sumAndSquare(...args) {
    return args.reduce((suma, num) => suma + num ** 2, 0);
}
