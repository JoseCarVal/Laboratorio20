import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

console.log("Ejercicio 9:");

let a = 10;
let b = 0; // fuerza el error en división

console.log("Suma:", sumar(a, b));
console.log("Resta:", restar(a, b));
console.log("Multiplicación:", multiplicar(a, b));

try {
    console.log("División:", dividir(a, b));
} catch (e) {
    console.log("Error en división:", e.message);
}