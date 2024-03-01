//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", registro);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_registro = document.querySelector(".formulario__registro");
var contenedor_login_registro = document.querySelector(".contenedor__login-registro");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_registro = document.querySelector(".caja__trasera-registro");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_registro.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_registro.style.left = "0px";
        formulario_registro.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_registro.style.left = "10px";
            formulario_registro.style.display = "none";
            caja_trasera_registro.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_registro.style.left = "0px";
            formulario_registro.style.display = "none";
            caja_trasera_registro.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function registro(){
        if (window.innerWidth > 850){
            formulario_registro.style.display = "block";
            contenedor_login_registro.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_registro.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_registro.style.display = "block";
            contenedor_login_registro.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_registro.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".formulario__login button").addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        var correo = document.querySelector(".formulario__login input[type='text']").value;
        var contraseña = document.querySelector(".formulario__login input[type='password']").value;
        var errores = [];

        if (!correo) errores.push("El campo de correo electrónico no debe estar vacío.");
        if (!contraseña) errores.push("El campo de contraseña no debe estar vacío.");
        // Aquí puedes añadir más validaciones específicas como formato de correo, longitud de contraseña, etc.

        if (errores.length > 0) {
            alert("Errores:\n" + errores.join("\n"));
        } else {
            // Aquí colocar la lógica o llamada para el inicio de sesión
            console.log("Formulario de login validado con éxito.");
        }
    });

    document.querySelector(".formulario__registro button").addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        var nombreCompleto = document.querySelector(".formulario__registro input[type='text']:nth-child(1)").value;
        var correo = document.querySelector(".formulario__registro input[type='text']:nth-child(2)").value;
        var usuario = document.querySelector(".formulario__registro input[type='text']:nth-child(3)").value;
        var contraseña = document.querySelector(".formulario__registro input[type='password']").value;
        var errores = [];

        // Validaciones para registro
        if (!nombreCompleto) errores.push("El campo de nombre completo no debe estar vacío.");
        if (!correo) errores.push("El campo de correo electrónico no debe estar vacío.");
        if (!usuario) errores.push("El campo de usuario no debe estar vacío.");
        if (!contraseña) errores.push("El campo de contraseña no debe estar vacío.");
        // Aquí puedes añadir más validaciones específicas como formato de correo, longitud de contraseña, etc.

        if (errores.length > 0) {
            alert("Errores:\n" + errores.join("\n"));
        } else {
            // Aquí colocar la lógica o llamada para el registro
            console.log("Formulario de registro validado con éxito.");
        }
    });
});
