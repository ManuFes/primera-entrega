function validacionInsercion() {
    let correcto = true;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value; // Corregido para coincidir con el ID correcto
    let email = document.getElementById("email").value;
    let provincia = document.getElementById("provincia").value;
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let terminos = document.getElementById("terminos").checked;
  
    // Validación de nombre no vacío
    if (nombre == "") {
      document.getElementById("nombreHelp").style.visibility = "visible";
      document.getElementById("nombre").style.borderColor = "red";
      correcto = false;
    }
  
    // Validación de longitud mínima de apellido
    if (apellido.length < 5) {
      document.getElementById("apellidoHelp").style.visibility = "visible";
      document.getElementById("apellido").style.borderColor = "red";
      correcto = false;
    }
  
    // Validación de formato de teléfono
    let regexTelefono = /^\d{9}$/;
    if (!regexTelefono.test(telefono)) {
      document.getElementById("telefonoHelp").style.visibility = "visible";
      document.getElementById("telefono").style.borderColor = "red";
      correcto = false;
    }
  
    // Validación de email
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email)) {
      document.getElementById("emailHelp").style.visibility = "visible";
      document.getElementById("email").style.borderColor = "red";
      correcto = false;
    }
  
    // Validación de selección de provincia
    if (provincia == "") {
      document.getElementById("provinciaHelp").style.visibility = "visible";
      document.getElementById("provincia").style.borderColor = "red";
      correcto = false;
    }
  
    // Validación de selección de sexo
    if (!sexo) {
      document.getElementById("sexoHelp").style.visibility = "visible";
      correcto = false;
    }
  
    // Validación de aceptación de términos
    if (!terminos) {
      document.getElementById("terminosHelp").style.visibility = "visible";
      correcto = false;
    }
  
    return correcto;
  }
  
  function resetear(id) {
    document.getElementById(id + "Help").style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
  }
  