// 3
function ejecutar3() {
  document.getElementById("resultado3").innerHTML = "";
  try {
    let x = null;
    x.nombre; // Error
  } catch (e) {
    document.getElementById("resultado3").innerHTML += "Error capturado: " + e.message;
  }
}

// 4
function ejecutar4() {
  document.getElementById("resultado4").innerHTML = "";
  try {
    JSON.parse("{ nombre: sincomillas }"); // JSON inválido
  } catch (e) {
    document.getElementById("resultado4").innerHTML += "e.name: " + e.name + "<br>";
    document.getElementById("resultado4").innerHTML += "e.message: " + e.message;
  }
}

// 5
function ejecutar5() {
  document.getElementById("resultado5").innerHTML = "";

  const original = console.log;

  try {
    console.log = null;
    console.log("esto falla"); // error
  } catch (e) {
    document.getElementById("resultado5").innerHTML += "falló<br>";
    document.getElementById("resultado5").innerHTML += e.message + "<br>";
  } finally {
    console.log = original;
    document.getElementById("resultado5").innerHTML += "siempre se ejecuta";
  }
}

// 6
function validarEdad(edad) {
  if (typeof edad !== "number" || edad < 0 || isNaN(edad)) {
    throw new Error("Edad inválida");
  }
}

function ejecutar6() {
  document.getElementById("resultado6").innerHTML = "";

  const pruebas = ["hola", -10, 25];

  pruebas.forEach((valor) => {
    try {
      validarEdad(valor);
      document.getElementById("resultado6").innerHTML += valor + ": válido<br>";
    } catch (e) {
      document.getElementById("resultado6").innerHTML += valor + ": " + e.message + "<br>";
    }
  });
}

// 7
function ejecutar7() {
  document.getElementById("resultado7").innerHTML = "";

  try {
    let x = null;
    x.prop; // TypeError
  } catch (e) {
    if (e instanceof TypeError) {
      document.getElementById("resultado7").innerHTML += "Se capturó TypeError: " + e.message;
    } else {
      document.getElementById("resultado7").innerHTML += "Otro tipo de error: " + e.message;
    }
  }
}
