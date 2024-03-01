document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi gli event listener solo dopo che il DOM è stato completamente caricato
  var btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
  if (btnIniciarSesion) {
      btnIniciarSesion.addEventListener("click", iniciarSesion);
  }

  var btnRegistrarse = document.getElementById("btn__registrarse");
  if (btnRegistrarse) {
      btnRegistrarse.addEventListener("click", registro);
  }

  window.addEventListener("resize", anchoPage);

  // Puoi anche chiamare qui funzioni che devono essere eseguite immediatamente dopo il caricamento del DOM
  anchoPage();
});

// Dichiarazione delle variabili
var formulario_login = document.querySelector(".formulario__login");
var formulario_registro = document.querySelector(".formulario__registro");
var contenedor_login_registro = document.querySelector(".contenedor__login-registro");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_registro = document.querySelector(".caja__trasera-registro");

// Definizione delle funzioni
function iniciarSesion() {
  if (window.innerWidth > 850) {
      formulario_login.style.display = "block";
      contenedor_login_registro.style.left = "10px";
      formulario_registro.style.display = "none";
      caja_trasera_registro.style.opacity = "1";
      caja_trasera_login.style.opacity = "0";
  } else {
      formulario_login.style.display = "block";
      contenedor_login_registro.style.left = "0px";
      formulario_registro.style.display = "none";
      caja_trasera_registro.style.display = "block";
      caja_trasera_login.style.display = "none";
  }
}

function registro() {
  if (window.innerWidth > 850) {
      formulario_registro.style.display = "block";
      contenedor_login_registro.style.left = "410px";
      formulario_login.style.display = "none";
      caja_trasera_registro.style.opacity = "0";
      caja_trasera_login.style.opacity = "1";
  } else {
      formulario_registro.style.display = "block";
      contenedor_login_registro.style.left = "0px";
      formulario_login.style.display = "none";
      caja_trasera_registro.style.display = "none";
      caja_trasera_login.style.display = "block";
      caja_trasera_login.style.opacity = "1";
  }
}

function anchoPage() {
  if (window.innerWidth > 850) {
      caja_trasera_registro.style.display = "block";
      caja_trasera_login.style.display = "block";
  } else {
      caja_trasera_registro.style.display = "block";
      caja_trasera_registro.style.opacity = "1";
      caja_trasera_login.style.display = "none";
      formulario_login.style.display = "block";
      contenedor_login_registro.style.left = "0px";
      formulario_registro.style.display = "none";   
  }
}

// Le funzioni validacionLogin, validacionInsercion e resetear rimangono invariate

function validacionLogin() {
    debugger;
    let correcto = true;
    let usuario = document.getElementById("usuario").value; // getter
    let contrasenia = document.getElementById("contrasenia").value; // getter
    
    if (
      usuario == "" ||
      usuario.length <8 || usuario.length>12
    ) {
      document.getElementById("usuarioHelp").style.visibility = "visible";
      document.getElementById("usuario").style.borderColor = "red";
  
      correcto = false;
    }
    if (
      contrasenia == "" ||
      contrasenia.length <8 || contrasenia.length>15
    ) {
      document.getElementById("contraseniaHelp").style.visibility = "visible";
      document.getElementById("contrasenia").style.borderColor = "black";
  
      correcto = false;
    }
    return correcto;
}


function resetear(id) {
    document.getElementById(id + "Help").style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
  }