const API = "https://pokeapi.co/api/v2/pokemon/";
// 3
function ejercicio3() {
    let id = prompt("Ingresa un ID de Pokémon:");
    fetch(API + id)
        .then(res => res.json())
        .then(data => {
            document.getElementById("resultado3").innerText =
                "Nombre: " + data.name;
        })
        .catch(() => alert("ID inválido"));
}

// 4
function ejercicio4() {
    fetch(API + "pikachu")
        .then(res => res.json())
        .then(data => {
            document.getElementById("resultado4").innerText =
                "Altura: " + data.height + " | Peso: " + data.weight;
        });
}

// 5
async function ejercicio5() {
    let data = await fetch(API + "pikachu").then(r => r.json());
    document.getElementById("resultado5").innerText =
        "Altura: " + data.height + " | Peso: " + data.weight;
}

// 6
async function ejercicio6() {
    let data = await fetch(API + "charizard").then(r => r.json());
    console.log("URL del sprite: " + data.sprites.front_default);
}

// 7
async function ejercicio7() {
    let data = await fetch(API + "?limit=20").then(r => r.json());
    let lista = data.results.map(p => p.name).join(", ");

    document.getElementById("resultado7").innerText = lista;
}

// 8
async function ejercicio8() {
    let n = Math.floor(Math.random() * 898) + 1;
    let data = await fetch(API + n).then(r => r.json());

    document.getElementById("resultado8").innerHTML = `
        <p><b>ID: ${data.id}</b></p>
        <p>Nombre: ${data.name}</p>
        <img src="${data.sprites.front_default}">
    `;
}

// 9
async function ejercicio9() {
    let id = document.getElementById("pokeInput9").value;
    let data = await fetch(API + id).then(r => r.json());

    document.getElementById("resultado9").innerHTML = `
        <h3>${data.name} (#${data.id})</h3>
        <img src="${data.sprites.front_default}">
        <p>Peso: ${data.weight}</p>
        <p>Altura: ${data.height}</p>
        <p>Habilidades: ${data.abilities.map(a => a.ability.name).join(", ")}</p>
    `;
}

// 10
async function ejercicio10() {
    const cont = document.getElementById("resultado10");
    cont.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let data = await fetch(API + i).then(r => r.json());
        cont.innerHTML += `
            <div>
                <h4>${data.name}</h4>
                <img src="${data.sprites.front_default}">
                <p>ID: ${data.id}</p>
            </div>
        `;
    }
}

// 11
async function ejercicio11() {
    let x = document.getElementById("pokeInput11").value;
    let data = await fetch(API + x).then(r => r.json());

    document.getElementById("resultado11").innerHTML = `
        <h3>${data.name}</h3>
        <img src="${data.sprites.front_default}">
        <p>Tipos: ${data.types.map(t => t.type.name).join(", ")}</p>
    `;
}

// 12
async function ejercicio12() {
    let x = document.getElementById("pokeInput12").value;
    let data = await fetch(API + x).then(r => r.json());

    let stats = data.stats
        .map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`)
        .join("");

    document.getElementById("resultado12").innerHTML = `
        <h3>${data.name}</h3>
        <img src="${data.sprites.front_default}">
        <ul>${stats}</ul>
    `;
}

// 13
async function ejercicio13() {
    let x = document.getElementById("pokeInput13").value;
    let data = await fetch(API + x).then(r => r.json());

    let tabla = `
        <table border="1" cellpadding="8">
            <tr><th>Stat</th><th>Valor</th></tr>
            ${data.stats.map(s => `
                <tr>
                    <td>${s.stat.name}</td>
                    <td>${s.base_stat}</td>
                </tr>
            `).join("")}
        </table>
    `;

    document.getElementById("resultado13").innerHTML = `
        <h3>${data.name}</h3>
        <img src="${data.sprites.front_default}">
        ${tabla}
    `;
}

// 14

// Lista global de pokémon 1–12
let lista12 = [];
let pagina = 0; // 0 = primeros 3

// Carga los 12 al iniciar
async function cargar12() {
    for (let i = 1; i <= 12; i++) {
        let data = await fetch(API + i).then(r => r.json());
        lista12.push(data);
    }
    mostrarGrupo();
}
cargar12();

// Muestra 3 por vista
function mostrarGrupo() {
    const cont = document.getElementById("resultado14");
    cont.innerHTML = "";

    let inicio = pagina * 3;
    let fin = inicio + 3;

    let grupo = lista12.slice(inicio, fin);

    grupo.forEach(poke => {
        cont.innerHTML += `
            <div style="border:1px solid black; width:150px; padding:10px;">
                <h4>${poke.name}</h4>
                <img src="${poke.sprites.front_default}">
                <p>ID: ${poke.id}</p>
            </div>
        `;
    });
}

function siguiente14() {
    if (pagina < 3) { 
        pagina++;
        mostrarGrupo();
    }
}

function anterior14() {
    if (pagina > 0) {
        pagina--;
        mostrarGrupo();
    }
}