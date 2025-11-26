// 3
function ejercicio3() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(res => res.json())
        .then(data => {
            console.log("Ejercicio 3:");
            console.log("Name:", data.name);
            console.log("Username:", data.username);
            console.log("Email:", data.email);
        });
}

// 4
async function ejercicio4() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const data = await res.json();

    console.log("Ejercicio 4:");
    console.log("Name:", data.name);
    console.log("Username:", data.username);
    console.log("Email:", data.email);
}

// 5
function ejercicio5() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(usuarios => {
            console.log("Ejercicio 5:");
            usuarios.forEach(u => console.log(u.name));
        });
}

// 6
async function ejercicio6() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await res.json();

    console.log("Ejercicio 6:");
    usuarios.forEach(u => console.log(u.name));
}

// 7
function ejercicio7() {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(res => res.json())
        .then(data => {
            console.log("Ejercicio 7:");
            console.log("Nombre:", data.name);
            console.log("Email:", data.email);
            console.log("Ciudad:", data.address.city);
        });
}

// 8
async function ejercicio8() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await res.json();

    console.log("Ejercicio 8:");
    console.log("Nombre:", data.name);
    console.log("Email:", data.email);
    console.log("Ciudad:", data.address.city);
}

// 10
const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

console.log("Ejercicio 10:", regexPassword.test("Hol4Mundo"));

// 11
const regexURL = /https:\/\/[^\s]+/g;

let texto11 = "Visita https://google.com o http://no-segura.com";
console.log("Ejercicio 11:", texto11.match(regexURL));

//12
const regexH1 = /<\/?h1>/g;

let texto12 = "<h1>Hola</h1>";
console.log("Ejercicio 12:", texto12.replace(regexH1, ""));

// 13
const regexOraciones = /[^.!?]+/g;

let texto13 = "Hola. Cómo estás? Bien!";
console.log("Ejercicio 13:", texto13.match(regexOraciones));

// 14
const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

console.log("Ejercicio 14:", regexFecha.test("25/11/2025"));